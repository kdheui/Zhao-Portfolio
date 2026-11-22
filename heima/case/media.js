const article = document.querySelector('#case-en');
const clips = article.querySelectorAll('.case-clip');
const visible = new Set();

function syncPlayback() {
  for (const clip of clips) {
    const show = visible.has(clip) && !article.hidden && !document.hidden &&
      document.documentElement.classList.contains('film-finished');
    if (!show) {
      clip.pause();
      continue;
    }
    if (clip.dataset.src) {
      clip.src = clip.dataset.src;
      delete clip.dataset.src;
    }
    clip.play().catch(() => {});
  }
}

function syncLanguage() {
  let language = 'en';
  try { language = localStorage.getItem('gallery-language'); } catch {}
  article.hidden = language === 'zh';
  document.querySelector('#case-legacy').hidden = !article.hidden;
  syncPlayback();
}

const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) visible.add(entry.target);
    else visible.delete(entry.target);
  }
  syncPlayback();
});
for (const clip of clips) observer.observe(clip);
new MutationObserver(syncPlayback).observe(document.documentElement, {attributes:true, attributeFilter:['class']});
window.addEventListener('storage', syncLanguage);
document.addEventListener('visibilitychange', syncPlayback);
syncLanguage();
