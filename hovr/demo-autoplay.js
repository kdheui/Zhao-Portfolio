const demo = document.querySelector('.unity-demo');
if (demo && 'IntersectionObserver' in window) {
  const visibleThreshold = .55;
  let inView = false;

  function syncPlayback() {
    if (inView && !document.hidden) {
      demo.play().catch(error => {
        if (error.name !== 'NotAllowedError' || demo.muted || !inView || document.hidden) return;
        demo.muted = true;
        demo.play().catch(() => {
          // The controls still allow playback if both attempts are blocked.
        });
      });
    } else {
      demo.pause();
    }
  }

  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.intersectionRatio >= visibleThreshold;
    syncPlayback();
  }, {threshold: visibleThreshold});

  observer.observe(demo);
  document.addEventListener('visibilitychange', syncPlayback);
}
