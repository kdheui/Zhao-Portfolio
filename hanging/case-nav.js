(() => {
  const header=document.querySelector('.portfolio-case-header');
  const toggle=header.querySelector('.case-language');
  const names={en:{about:'About',contact:'Contact',resume:'Resume'},zh:{about:'关于',contact:'联系',resume:'简历'}};
  const name=location.pathname.split('/').pop().replace(/\.html$/,'');
  const dictionary=window.caseTranslations?.[name]??{};
  const normalize=text=>text.trim().replace(/\s+/g,' ');
  const nodes=[];
  const main=document.querySelector('main');
  const walker=document.createTreeWalker(main,NodeFilter.SHOW_TEXT,{
    acceptNode(node){return node.parentElement.closest('script,style,svg')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;}
  });
  for(let node=walker.nextNode();node;node=walker.nextNode()) {
    const original=node.nodeValue;
    const translated=dictionary[normalize(original)];
    if(translated)nodes.push({node,original,translated:original.match(/^\s*/)[0]+translated+original.match(/\s*$/)[0]});
  }
  const attrs=[];
  for(const el of main.querySelectorAll('[alt],[aria-label]'))for(const attr of ['alt','aria-label']) {
    const original=el.getAttribute(attr);
    const translated=original&&dictionary[normalize(original)];
    if(translated)attrs.push({el,attr,original,translated});
  }
  const skip=document.querySelector('a.skip[href="#main"]');
  const skipOriginal=skip?.textContent;
  let language='en';
  try{if(localStorage.getItem('gallery-language')==='zh')language='zh';}catch{}
  function paint(){
    const chinese=language==='zh';
    document.documentElement.lang=chinese?'zh-CN':'en';
    for(const item of nodes)item.node.nodeValue=chinese?item.translated:item.original;
    for(const item of attrs)item.el.setAttribute(item.attr,chinese?item.translated:item.original);
    if(skip)skip.textContent=chinese?'跳到作品正文':skipOriginal;
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
