const toggle = document.querySelector('#language-toggle');
const labels = { en: ['About', 'Contact', 'Resume'], zh: ['关于', '联系', '简历'] };
let language = 'en';
try { if (localStorage.getItem('gallery-language') === 'zh') language = 'zh'; } catch {}
function updateNavigation() {
  document.querySelectorAll('.masthead nav a:not(.project-wordmark)').forEach((link, index) => {
    link.textContent = labels[language][index];
  });
  toggle.textContent = language === 'zh' ? '中文 / EN' : 'EN / 中文';
  toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : 'Switch to Chinese');
}
toggle.addEventListener('click', () => {
  language = language === 'en' ? 'zh' : 'en';
  try { localStorage.setItem('gallery-language', language); } catch {}
  updateNavigation();
});
updateNavigation();

if (document.documentElement.classList.contains('embedded-project')) {
  document.querySelector('.project-back').addEventListener('click', event => {
    event.preventDefault();
    parent.postMessage('portfolio-back-to-work','*');
  });
}

if (document.body.classList.contains('hovr-page')) {
  const embedded = document.documentElement.classList.contains('embedded-project');
  let atTop;
  function syncHero() {
    const nextAtTop = window.scrollY <= 8;
    if (atTop === nextAtTop) return;
    atTop = nextAtTop;
    document.body.classList.toggle('at-hero-top', atTop);
    if (embedded) parent.postMessage(atTop ? 'hovr-hero-only' : 'hovr-content-visible','*');
  }
  window.addEventListener('scroll', syncHero, {passive:true});
  syncHero();
}
