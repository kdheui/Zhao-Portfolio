window.portfolioOpening = new Promise(resolve => {
  const html = document.documentElement;
  const opening = document.querySelector('#opening');
  if (!html.hasAttribute('data-intro')) {
    opening.remove();
    resolve();
    return;
  }
  const skip = document.querySelector('#openingSkip');
  const video = document.querySelector('#openingVideo');
  let finishing = false;
  video.playbackRate = 2;
  video.play().catch(() => {});
  skip.focus({preventScroll:true});
  function finish() {
    if (finishing) return;
    finishing = true;
    clearTimeout(auto);
    html.setAttribute('data-intro','leaving');
    setTimeout(() => {
      html.removeAttribute('data-intro');
      video.pause();
      opening.remove();
      resolve();
    },600);
  }
  const auto = setTimeout(finish,2400);
  skip.addEventListener('click',finish);
  opening.addEventListener('keydown',event => {
    if(event.key==='Escape')finish();
    if(event.key==='Tab'){event.preventDefault();skip.focus();}
  });
});
