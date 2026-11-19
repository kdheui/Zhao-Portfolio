(() => {
  const video = document.querySelector('video');
  const embedded = window.parent !== window;
  function playFilm() {
    video.play().catch(error => {
      if (error.name !== 'NotAllowedError') return;
      video.muted = true;
      video.play().catch(() => {});
    });
  }
  if (embedded) {
    window.addEventListener('message', event => {
      if (event.source === parent && event.data === 'heima-start-film') playFilm();
    });
  } else {
    playFilm();
  }
  const content = document.querySelector('.heima-content');
  function revealContent(skipped = false) {
    const page = document.documentElement;
    if (page.classList.contains('film-leaving')) return;
    video.pause();
    page.classList.add('film-leaving');
    let finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      page.classList.add('film-finished');
      content.inert = false;
      if (skipped) content.querySelector('h1').focus({preventScroll:true});
      if (embedded) parent.postMessage('heima-film-finished','*');
    }
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) finish();
    else {
      video.addEventListener('transitionend', finish, {once:true});
      setTimeout(finish, 800);
    }
  }
  video.addEventListener('ended', () => revealContent(), {once:true});
  document.querySelector('.film-skip').addEventListener('click', () => revealContent(true));
  if (embedded) content.querySelector('.heima-back').addEventListener('click', event => {
    event.preventDefault();
    parent.postMessage('portfolio-back-to-work','*');
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (embedded) parent.postMessage('portfolio-back-to-work','*');
    else location.assign('../index.html#work');
  });
})();
