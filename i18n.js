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
  const captions = { en:'Language', 'zh-CN':'语言', 'zh-TW':'語言', ko:'언어', ja:'言語' };
  const imageAltTranslations = {
    'zh-CN':['晨光中的壮丽群山','传统日式建筑与庭园','色彩鲜明的意大利海滨村庄','山地风光','阳光照耀下的意大利海滨村庄','静谧的日式庭园与传统建筑'],
    'zh-TW':['晨光中的壯麗群山','傳統日式建築與庭園','色彩鮮明的義大利海濱村莊','山地風光','陽光照耀下的義大利海濱村莊','靜謐的日式庭園與傳統建築'],
    ko:['아침 햇살 속 웅장한 산봉우리','일본 전통 건축과 정원','알록달록한 이탈리아 해안 마을','산 풍경','햇빛이 비치는 이탈리아 해안 마을','고요한 일본 정원과 전통 건축'],
    ja:['朝の光に包まれた雄大な山々','日本の伝統建築と庭園','色鮮やかなイタリアの海辺の村','山の風景','陽光に照らされたイタリアの海辺の村','静かな日本庭園と伝統建築']
  };
  const imageAltEnglish = ['Dramatic mountain peaks in soft morning light','Traditional Japanese architecture and garden','Italian coastal village with colourful buildings','Mountain landscape','Sun-washed Italian coastal village','Quiet Japanese garden and traditional architecture'];
  let requestSequence = 0;
  const baseLinks = new WeakMap();
  const fontFamilies = { 'zh-CN':'Noto Serif SC', 'zh-TW':'Noto Serif TC', ko:'Noto Serif KR', ja:'Noto Serif JP' };
  const loadedFonts = new Set();
  async function ensureLocaleFont(code) {
    const family = fontFamilies[code];
    if (!family || loadedFonts.has(code)) return;
    const url = 'https://fonts.googleapis.com/css2?family=' + encodeURIComponent(family).replace(/%20/g,'+') + ':wght@400;500;600&display=swap';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    await new Promise((resolve,reject) => {
      link.onload = resolve;
      link.onerror = () => reject(new Error('Language font unavailable'));
      document.head.appendChild(link);
    });
    await document.fonts.load('400 18px "' + family + '"');
    loadedFonts.add(code);
  }
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
    document.title = code === 'en' ? titleEnglish : (isStory
      ? (dictionary['The Art of'] || 'The Art of') + (dictionary['Slow Travel'] || ' Slow Travel')
      : (dictionary['Go'] || 'Go') + ' ' + (dictionary['slow.'] || 'slow.') + ' ' + (dictionary['Go deep.'] || 'Go deep.')) + ' | Intriq Journal';
    caption.textContent = captions[code];
    switcher.setAttribute('aria-label', captions[code]);
    const altList = imageAltTranslations[code];
    document.querySelectorAll('img[alt]').forEach(img => {
      if (!img.dataset.originalAlt) img.dataset.originalAlt = img.getAttribute('alt') || '';
      const idx = imageAltEnglish.indexOf(img.dataset.originalAlt);
      if (idx >= 0) img.setAttribute('alt', altList?.[idx] || img.dataset.originalAlt);
    });
    select.value = code;
    document.querySelectorAll('a.download-pdf').forEach(link => {
      const name = code === 'en' ? 'magazine.pdf' : 'magazine.'+code+'.pdf';
      link.href = name;
      link.setAttribute('download','Intriq-Journal-Slow-Travel-'+code+'.pdf');
    });
    document.querySelectorAll('a[href="story.html"], a[href="index.html"]').forEach(link => {
      if (!baseLinks.has(link)) baseLinks.set(link, link.getAttribute('href').split('?')[0]);
      link.href = baseLinks.get(link) + (code === 'en' ? '' : '?lang=' + encodeURIComponent(code));
    });
    try { localStorage.setItem('intriq-language',code); } catch {}
    current = code;
    window.__localeReady = true;
  }
  async function change(code) {
    if (!safe.has(code)) code = 'en';
    const seq = ++requestSequence;
    select.disabled = true;
    window.__localeReady = false;
    try {
      const translations = await getDictionary(code);
      try { await ensureLocaleFont(code); } catch (error) { console.warn('Language font fallback',error); }
      if (seq !== requestSequence) return;
      apply(code,translations);
    } catch (error) {
      console.error('Translation load failed',error);
      if (seq === requestSequence) apply('en',{});
    } finally { if(seq === requestSequence) select.disabled = false; }
  }
  select.addEventListener('change', () => {
    void change(select.value);
  });
  window.__localeReady = false;
  window.__setLocale = change;
  void change(current);
})();