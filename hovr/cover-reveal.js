const hero = document.querySelector('.hovr-hero');
const body = document.body;
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const controls = new AbortController();
const listener = {signal:controls.signal};
const content = document.querySelector('.hovr-content');
content.inert = true;

function revealCover() {
  if (body.classList.contains('cover-leaving')) return;
  body.classList.add('cover-leaving');
  controls.abort();
  let finished = false;
  function finish() {
    if (finished) return;
    finished = true;
    body.classList.add('cover-finished');
    content.inert = false;
    if (window.parent !== window) parent.postMessage('hovr-cover-finished','*');
  }
  if (reduced.matches) finish();
  else {
    hero.querySelector('img').addEventListener('transitionend',finish,{once:true});
    setTimeout(finish,800);
  }
}

addEventListener('wheel',event=>{
  if (event.deltaY > 0 && !event.ctrlKey) revealCover();
},{...listener,passive:true});
let touchStart;
addEventListener('touchstart',event=>{
  touchStart=event.touches.length===1 ? event.touches[0].clientY : undefined;
},{...listener,passive:true});
addEventListener('touchmove',event=>{
  if (event.touches.length===1 && touchStart-event.touches[0].clientY>18)revealCover();
},{...listener,passive:true});
addEventListener('keydown',event=>{
  if (event.altKey || event.ctrlKey || event.metaKey || !['ArrowDown','PageDown',' ','End'].includes(event.key)) return;
  event.preventDefault();
  revealCover();
},listener);
addEventListener('message',event=>{
  if(event.source===parent && event.data==='hovr-reveal-cover')revealCover();
},listener);
