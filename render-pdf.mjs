import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { statSync } from 'node:fs';

const locales = ['en', 'zh-CN', 'zh-TW', 'ko', 'ja'];
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
try {
  for (const locale of locales) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
    try {
      const url = pathToFileURL(resolve('story.html')).href + '?lang=' + encodeURIComponent(locale);
      await page.goto(url, { waitUntil: 'load', timeout: 45000 });
      await page.waitForFunction(() => window.__localeReady === true, null, { timeout: 60000 });
      const actual = await page.locator('html').getAttribute('lang');
      if (actual !== locale) throw Error('Translation failed for ' + locale + ', got ' + actual);

      await page.evaluate(async () => {
        if (document.documentElement.lang === 'en') {
          const stylesheet = document.createElement('link');
          stylesheet.rel = 'stylesheet';
          stylesheet.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap';
          const ready = new Promise(resolve => { stylesheet.onload = resolve; stylesheet.onerror = resolve; });
          document.head.appendChild(stylesheet);
          await ready;
          await Promise.all([
            document.fonts.load('500 18px "Cormorant Garamond"'),
            document.fonts.load('italic 400 18px "Cormorant Garamond"')
          ]);
        }
        const images = [...document.querySelectorAll('img[data-print-src]')];
        await Promise.all(images.map(async img => {
          const preload = new Image();
          preload.src = img.dataset.printSrc;
          await new Promise((resolve, reject) => {
            if (preload.complete) return preload.naturalWidth ? resolve() : reject(Error('Failed to load ' + preload.src));
            preload.onload = resolve;
            preload.onerror = () => reject(Error('Failed to load ' + preload.src));
          });
          await preload.decode?.().catch(() => {});
          img.src = img.dataset.printSrc;
        }));
        await document.fonts.ready;
        document.documentElement.classList.add('print-font-ready');
      });

      await page.emulateMedia({ media: 'print' });
      const filename = locale === 'en' ? 'magazine.pdf' : 'magazine.' + locale + '.pdf';
      const renderedPdf = await page.pdf({
        path: filename,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' },
        tagged: true
      });
      // Chromium emits one /Type /Page dictionary per physical sheet.
      // Fail the build if a typography change introduces a third page.
      const pageCount = (renderedPdf.toString('latin1').match(/\\/Type\\s*\\/Page\\b/g) || []).length;
      if (pageCount !== 2) throw new Error('PDF page count mismatch for ' + locale + ': expected 2, got ' + pageCount);
      console.log('Created ' + filename + ' (2 A4 pages, ' + statSync(filename).size + ' bytes)');
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
