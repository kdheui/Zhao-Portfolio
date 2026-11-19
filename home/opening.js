(() => {
  const page = document.documentElement;
  const key = 'zhaolin-portfolio-opening-seen';
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (location.hash || reducedMotion.matches) return;
  try {
    if (localStorage.getItem(key)) return;
    localStorage.setItem(key, '1');
  } catch {
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
    } catch {}
  }
  page.dataset.intro = 'playing';

  let openingFinished;
  window.portfolioOpening = new Promise(resolve => { openingFinished = resolve; });

  document.addEventListener('DOMContentLoaded', () => {
    const opening = document.querySelector('#opening');
    const video = opening.querySelector('video');
    const skip = opening.querySelector('button');
    const timer = setTimeout(finish, 2400);
    video.playbackRate = 2;
    video.play().catch(() => {});
    skip.focus({preventScroll:true});
    skip.addEventListener('click', finish);
    opening.addEventListener('keydown', event => {
      if (event.key === 'Escape') finish();
      if (event.key === 'Tab') {
        event.preventDefault();
        skip.focus();
      }
    });

    function finish() {
      if (page.dataset.intro !== 'playing') return;
      clearTimeout(timer);
      page.dataset.intro = 'leaving';
      setTimeout(() => {
        video.pause();
        opening.remove();
        delete page.dataset.intro;
        openingFinished();
      }, 600);
    }
  }, {once:true});
})();
