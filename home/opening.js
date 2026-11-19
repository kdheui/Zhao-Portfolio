(() => {
  const page = document.documentElement;
  page.dataset.intro = 'playing';
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const duration = 1050;
  const waitingLimit = 94;
  let ready;
  let loaded;
  let wake = () => {};
  window.portfolioOpening = new Promise(resolve => { ready = resolve; });
  window.settlePortfolioLoading = success => {
    loaded = success;
    wake();
  };

  document.addEventListener('DOMContentLoaded', () => {
    const opening = document.querySelector('#opening');
    const bar = opening.querySelector('progress');
    const percentage = opening.querySelector('.loading-percent');
    let progress = 0;
    let previousTime;
    let frame = 0;
    let finished = false;

    function removeOpening() {
      opening.remove();
      delete page.dataset.intro;
      ready();
    }

    function tick(time) {
      frame = 0;
      if (loaded === false) {
        finished = true;
        removeOpening();
        return;
      }
      const limit = loaded ? 100 : waitingLimit;
      const elapsed = previousTime === undefined ? 0 : time - previousTime;
      previousTime = time;
      if (reducedMotion.matches) {
        if (!loaded) return;
        progress = 100;
      } else {
        progress = Math.min(limit, progress + elapsed * 100 / duration);
      }
      bar.value = progress;
      percentage.textContent = Math.floor(progress) + '%';
      if (progress === 100) {
        finished = true;
        if (reducedMotion.matches) removeOpening();
        else requestAnimationFrame(removeOpening);
      } else if (progress < limit) {
        frame = requestAnimationFrame(tick);
      } else {
        previousTime = undefined;
      }
    }

    wake = () => {
      if (!frame && !finished) frame = requestAnimationFrame(tick);
    };
    wake();
  }, {once:true});
})();
