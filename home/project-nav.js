const toggle = document.querySelector('#language-toggle');
const labels = { en: ['About', 'Contact', 'Resume'], zh: ['关于', '联系', '简历'] };
let language = 'en';
try { if (localStorage.getItem('gallery-language') === 'zh') language = 'zh'; } catch {}
function updateNavigation() {
  document.querySelectorAll('.masthead nav a').forEach((link, index) => {
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
