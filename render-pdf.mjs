import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { statSync } from 'node:fs';

const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(resolve('story.html')).href, { waitUntil: 'domcontentloaded' });
  await page.evaluate(async () => {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap';
    const fontStyles = new Promise(resolve => { stylesheet.onload = resolve; stylesheet.onerror = resolve; });
    document.head.appendChild(stylesheet);
    const imageElements = [...document.querySelectorAll('img[data-print-src]')];
    await Promise.all(imageElements.map(async img => {
      const url = img.dataset.printSrc;
      const preload = new Image();
      preload.src = url;
      await new Promise((resolve, reject) => {
        if (preload.complete) return preload.naturalWidth ? resolve() : reject(new Error('Failed: ' + url));
        preload.onload = resolve;
        preload.onerror = () => reject(new Error('Failed: ' + url));
      });
      await preload.decode?.().catch(() => {});
      img.src = url;
    }));
    await fontStyles;
    await Promise.all([
      document.fonts.load('500 18px "Cormorant Garamond"'),
      document.fonts.load('italic 400 18px "Cormorant Garamond"'),
    ]);
    await document.fonts.ready;
    document.documentElement.classList.add('print-font-ready');
  });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: 'magazine.pdf',
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    tagged: true,
  });
  console.log('Created magazine.pdf (' + statSync('magazine.pdf').size + ' bytes)');
} finally {
  await browser.close();
}