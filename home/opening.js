(() => {
  const page = document.documentElement;
  page.dataset.intro = 'playing';
  let ready, settle;
  window.portfolioOpening = new Promise(resolve => { ready = resolve; });
  const resources = new Promise(resolve => { settle = resolve; });
  let progress = 0;
  let bar, percentage;

  window.setPortfolioProgress = value => {
    progress = Math.max(progress, Math.round(value));
    if (!bar) return;
    bar.value = progress;
    percentage.textContent = progress + '%';
  };
  window.settlePortfolioLoading = success => {
    if (success) window.setPortfolioProgress(100);
    settle();
  };

  document.addEventListener('DOMContentLoaded', async () => {
    const opening = document.querySelector('#opening');
    bar = opening.querySelector('progress');
    percentage = opening.querySelector('.loading-percent');
    window.setPortfolioProgress(progress);
    await resources;
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      page.dataset.intro = 'leaving';
      await new Promise(resolve => {
        opening.addEventListener('transitionend', resolve, {once:true});
        setTimeout(resolve, 550);
      });
    }
    opening.remove();
    delete page.dataset.intro;
    ready();
  }, {once:true});
})();
