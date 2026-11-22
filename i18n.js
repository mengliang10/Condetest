/* Editorial translations. English source stays in HTML for indexing and graceful fallback.
   Locale scripts load only on selection; never request a translation service at runtime. */
(() => {
  const languages = { en:'English', 'zh-CN':'简体中文', 'zh-TW':'繁體中文', ko:'한국어', ja:'日本語' };
  const safe = new Set(Object.keys(languages));
  const params = new URLSearchParams(location.search);
  const requested = params.get('lang');
  let saved = 'en';
  try { saved = localStorage.getItem('intriq-language') || 'en'; } catch {}
  let current = safe.has(requested) ? requested : (safe.has(saved) ? saved : 'en');
  const titleEnglish = document.title;
  const original = new WeakMap();
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (['SCRIPT','STYLE','OPTION'].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    original.set(node, node.nodeValue);
    textNodes.push(node);
  }
  const switcher = document.createElement('label');
  switcher.className = 'language-selector no-print';
  switcher.setAttribute('aria-label', 'Website language');
  const caption = document.createElement('span');
  caption.textContent = 'Language';
  const select = document.createElement('select');
  select.setAttribute('aria-label', 'Select website language');
  select.id = 'website-language';
  Object.entries(languages).forEach(([code,name]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = name;
    select.appendChild(option);
  });
  select.value = current;
  switcher.append(caption, select);
  document.querySelector('.header-actions')?.prepend(switcher);
  const loading = new Map();
  function getDictionary(code) {
    if (code === 'en') return Promise.resolve({});
    if (window.INTRIQ_TRANSLATIONS?.[code]) return Promise.resolve(window.INTRIQ_TRANSLATIONS[code]);
    if (loading.has(code)) return loading.get(code);
    const promise = new Promise((resolve,reject) => {
      const script=document.createElement('script');
      script.src = 'lang/' + code + '.js';
      script.onload = () => resolve(window.INTRIQ_TRANSLATIONS?.[code] || {});
      script.onerror = () => reject(new Error('Language file unavailable'));
      document.head.appendChild(script);
    });
    loading.set(code,promise);
    return promise;
  }
  const isStory = /story\.html$/i.test(location.pathname);
  function apply(code, dictionary) {
    textNodes.forEach(node => {
      const source = original.get(node);
      const trimmed = source.trim();
      if (!trimmed) return;
      const translated = dictionary[trimmed];
      node.nodeValue = translated == null ? source : source.replace(trimmed, translated);
    });
    document.documentElement.lang = code;
    document.documentElement.dataset.locale = code;
    document.title = code === 'en' ? titleEnglish : (dictionary[isStory ? 'The Art of Slow Travel' : 'Go deep.'] || titleEnglish) + ' | Intriq Journal';
    select.value = code;
    document.querySelectorAll('a.download-pdf').forEach(link => {
      const name = code === 'en' ? 'magazine.pdf' : 'magazine.'+code+'.pdf';
      link.href = name;
      link.setAttribute('download','Intriq-Journal-Slow-Travel-'+code+'.pdf');
    });
    document.querySelectorAll('a[href="story.html"], a[href="index.html"]').forEach(link => {
      const originalHref = link.getAttribute('href');
      link.href = originalHref + (code === 'en' ? '' : '?lang=' + encodeURIComponent(code));
    });
    try { localStorage.setItem('intriq-language',code); } catch {}
    current = code;
    window.__localeReady = true;
  }
  async function change(code) {
    if (!safe.has(code)) code = 'en';
    select.disabled = true;
    window.__localeReady = false;
    try {
      const translations = await getDictionary(code);
      apply(code,translations);
    } catch (error) {
      console.error('Translation load failed',error);
      apply('en',{});
    } finally { select.disabled = false; }
  }
  select.addEventListener('change', () => {
    void change(select.value);
  });
  window.__localeReady = false;
  window.__setLocale = change;
  void change(current);
})();