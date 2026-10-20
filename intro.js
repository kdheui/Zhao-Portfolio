document.documentElement.setAttribute('data-hero-arrival', 'waiting');
(function () {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches)
    document.documentElement.setAttribute('data-intro', 'playing');
})();
