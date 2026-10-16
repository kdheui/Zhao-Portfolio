(function(){
  try {
    if (['#work','#about','#contact'].includes(location.hash)) return;
    var replay = new URLSearchParams(location.search).get('intro') === 'replay';
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches && (replay || !sessionStorage.getItem('zhaolin-intro-seen'))) document.documentElement.setAttribute('data-intro','playing');
  } catch(e) { if (!matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.setAttribute('data-intro','playing'); }
})();
