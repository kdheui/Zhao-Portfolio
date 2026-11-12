(() => {
  const header=document.querySelector('.portfolio-case-header');
  const toggle=header.querySelector('.case-language');
  const names={en:{about:'About',contact:'Contact',resume:'Resume'},zh:{about:'关于',contact:'联系',resume:'简历'}};
  let language='en';
  try{if(localStorage.getItem('gallery-language')==='zh')language='zh';}catch{}
  function paint(){
    header.querySelector('nav').lang=language==='zh'?'zh-CN':'en';
    for(const link of header.querySelectorAll('[data-nav-label]'))
      link.textContent=names[language][link.dataset.navLabel];
    toggle.textContent=language==='zh'?'中文 / EN':'EN / 中文';
    toggle.setAttribute('aria-label',language==='zh'?'Switch to English':'切换到中文');
  }
  toggle.addEventListener('click',()=>{
    language=language==='en'?'zh':'en';
    try{localStorage.setItem('gallery-language',language);}catch{}
    paint();
  });
  addEventListener('pageshow',()=>{
    try{language=localStorage.getItem('gallery-language')==='zh'?'zh':'en';}catch{}
    paint();
  });
  paint();
})();
