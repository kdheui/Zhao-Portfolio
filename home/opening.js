(() => {
  const page = document.documentElement;
  const key = 'zhaolin-portfolio-opening-seen';
  let showIntro = !location.hash && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (showIntro) {
    try {
      showIntro = !localStorage.getItem(key);
      if (showIntro) localStorage.setItem(key, '1');
    } catch {
      try {
        showIntro = !sessionStorage.getItem(key);
        if (showIntro) sessionStorage.setItem(key, '1');
      } catch {}
    }
  }
  let value = 0, bar, settled = false, finishIfReady = () => {};
  window.setPortfolioProgress = progress => {
    value = Math.max(value, progress);
    if (bar) bar.value = value;
  };
  window.settlePortfolioLoading = success => {
    settled = true;
    if (success) window.setPortfolioProgress(100);
    finishIfReady();
  };

  let openingFinished;
  if (showIntro) {
    page.dataset.intro = 'playing';
    window.portfolioOpening = new Promise(resolve => { openingFinished = resolve; });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const opening = document.querySelector('#opening');
    const status = document.querySelector('#status');
    bar = document.createElement('progress');
    bar.className = 'gallery-progress';
    bar.max = 100;
    bar.value = value;
    bar.setAttribute('aria-label','Loading cards');
    if (!showIntro) {
      if (!settled) status.append(bar);
      return;
    }
    const loading = document.createElement('div');
    loading.className = 'opening-loading';
    loading.append('Loading cards', bar);
    opening.append(loading);
    const video = opening.querySelector('video');
    const skip = opening.querySelector('button');
    let requested = false;
    function requestExit() {
      requested = true;
      finishIfReady();
    }
    const timer = setTimeout(requestExit, 2400);
    finishIfReady = () => {
      if (!settled || !requested || page.dataset.intro !== 'playing') return;
      clearTimeout(timer);
      page.dataset.intro = 'leaving';
      setTimeout(() => {
        video.pause();
        opening.remove();
        delete page.dataset.intro;
        openingFinished();
      }, 600);
    };
    video.playbackRate = 2;
    video.play().catch(() => {});
    skip.focus({preventScroll:true});
    skip.addEventListener('click', requestExit);
    opening.addEventListener('keydown', event => {
      if (event.key === 'Escape') requestExit();
      if (event.key === 'Tab') {
        event.preventDefault();
        skip.focus();
      }
    });
  }, {once:true});
})();
