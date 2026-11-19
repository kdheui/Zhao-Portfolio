const cover = document.querySelector('.hovr-hero');
const body = document.body;
const content = document.querySelector('.hovr-content');
const embedded = document.documentElement.classList.contains('embedded-project');
let height = 1;
let pending = false;

function syncCover() {
  pending = false;
  const offset = Math.min(height,Math.max(0,window.scrollY));
  body.style.setProperty('--cover-scroll',offset+'px');
  content.inert = offset < height;
  if (embedded) parent.postMessage({type:'hovr-cover-scroll',progress:offset/height},'*');
}

function resizeCover() {
  height = Math.max(1,cover.clientHeight);
  syncCover();
}

addEventListener('scroll',()=>{
  if (pending) return;
  pending = true;
  requestAnimationFrame(syncCover);
},{passive:true});
addEventListener('resize',resizeCover);
resizeCover();
