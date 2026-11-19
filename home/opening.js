(() => {
  const page = document.documentElement;
  let ready;
  let progress = 0;
  let settled = false;
  window.portfolioOpening = new Promise(resolve => { ready = resolve; });

  function updateIndicator() {
    const bar = document.querySelector('#opening progress');
    if (!bar) return;
    const percentage = document.querySelector('#opening .loading-percent');
    if (progress === null) {
      bar.removeAttribute('value');
      percentage.textContent = '…';
    } else {
      bar.value = progress;
      percentage.textContent = Math.floor(progress) + '%';
    }
  }

  window.setPortfolioProgress = value => {
    if (settled) return;
    progress = value === null ? null : Math.max(progress ?? 0,value);
    if (page.hasAttribute('data-intro')) updateIndicator();
  };

  const showTimer = setTimeout(() => {
    if (settled) return;
    updateIndicator();
    page.dataset.intro = 'playing';
  }, 250);

  window.settlePortfolioLoading = success => {
    if (settled) return;
    clearTimeout(showTimer);
    if (success) window.setPortfolioProgress(100);
    settled = true;
    document.querySelector('#opening')?.remove();
    delete page.dataset.intro;
    ready();
  };
})();
