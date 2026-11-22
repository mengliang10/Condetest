/* Print-only assets are intentionally absent from the initial HTML image src.
   This script downloads them only after the visitor requests Print / PDF. */
(() => {
  let prepared = false;
  let preparing = null;
  const status = document.createElement('div');
  status.className = 'print-progress no-print';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.hidden = true;
  document.body.appendChild(status);

  const controls = [...document.querySelectorAll('[data-print-button]')];
  const setStatus = (message) => { status.textContent = message; status.hidden = !message; };
  const setBusy = (busy) => {
    controls.forEach(button => { button.disabled = busy; button.setAttribute('aria-busy', String(busy)); });
  };

  function loadPrintStylesheet() {
    return new Promise((resolve, reject) => {
      const stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap';
      stylesheet.onload = resolve;
      stylesheet.onerror = () => reject(new Error('Print font stylesheet could not load'));
      document.head.appendChild(stylesheet);
    });
  }

  async function prepareImages(images) {
    let completed = 0;
    await Promise.all(images.map(async element => {
      const source = element.dataset.printSrc;
      if (!source) return;
      // A new Image object forces the full-resolution asset to be downloaded,
      // decoded, and available before we set the printable element's src.
      const image = new Image();
      image.decoding = 'async';
      image.src = source;
      await new Promise((resolve, reject) => {
        if (image.complete) return image.naturalWidth ? resolve() : reject(new Error('Image unavailable: ' + source));
        image.onload = resolve;
        image.onerror = () => reject(new Error('Image unavailable: ' + source));
      });
      if (image.decode) await image.decode().catch(() => {});
      element.src = source;
      completed++;
      setStatus('Preparing magazine images: ' + completed + ' of ' + images.length);
    }));
  }

  async function preparePrint() {
    if (prepared) return;
    if (preparing) return preparing;
    preparing = (async () => {
      const images = [...document.querySelectorAll('img[data-print-src]')];
      setStatus('Loading high-resolution magazine photography…');
      const imagePromise = prepareImages(images);
      let fontsReady = false;
      try {
        await loadPrintStylesheet();
        await Promise.all([
          document.fonts.load('500 18px "Cormorant Garamond"'),
          document.fonts.load('italic 400 18px "Cormorant Garamond"')
        ]);
        fontsReady = true;
      } catch (error) {
        console.warn('Print fonts unavailable; using bundled screen fonts.', error);
      }
      await imagePromise;
      await document.fonts.ready;
      document.documentElement.classList.toggle('print-font-ready', fontsReady);
      prepared = true;
    })();
    try { await preparing; } finally { preparing = null; }
  }

  async function printMagazine() {
    setBusy(true);
    try {
      await preparePrint();
      setStatus('');
      // Give the browser a paint cycle with loaded images/fonts before printing.
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      window.print();
    } catch (error) {
      console.error(error);
      setStatus('Print-quality images could not load. Check your connection and retry.');
    } finally {
      setBusy(false);
    }
  }
  controls.forEach(button => button.addEventListener('click', printMagazine));
  if (new URLSearchParams(location.search).has('print')) {
    window.addEventListener('load', () => { void printMagazine(); }, { once: true });
  }
})();