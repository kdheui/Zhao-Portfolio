// Page templates, project content, and hash navigation.
const asset=name=>'assets/'+name+(name==='imgOriginalThumbsUpGesture'?'.svg':'.png');
const img=(name,alt,css='screen')=>'<img class="'+css+'" src="'+asset(name)+'" alt="'+alt+'" loading="lazy">';
const footer=()=>'<footer class="contact stack"><h2>Have something<br>in mind?</h2><p class="callout">Let’s make it happen ↗</p><p class="placeholder">YOUR EMAIL · LINKEDIN · RESUME</p><p class="copyright">© 2026 Zhaolin Hu</p></footer>';
const ticker=()=>'<div class="capability-ticker" aria-label="Capabilities"><div class="ticker-track">'+['INTERACTION DESIGN','CREATIVE TECH','AI EXPERIENCE','PROTOTYPING','MOTION SYSTEMS','INTERACTION DESIGN','CREATIVE TECH','AI EXPERIENCE','PROTOTYPING','MOTION SYSTEMS'].map(item=>'<span>'+item+'</span>').join('')+'</div></div>';
const home=()=>`<div class="ray-home portfolio-home">
<section class="portfolio-hero" aria-labelledby="portfolio-title">
<nav class="portfolio-nav" aria-label="Main navigation"><a class="portfolio-brand" href="#/">ZHAOLIN HU</a><div><a href="#work">WORK</a><a href="#/about">ABOUT</a></div></nav>
<img class="portfolio-atmosphere" src="assets/hero-atmosphere-v2.png" alt="" aria-hidden="true">
<div class="portfolio-heading"><p class="portfolio-kicker">INTERACTION DESIGNER</p><h1 id="portfolio-title">Making movement<br>an interface.</h1><p class="portfolio-description">I’m Zhaolin Hu. I design and prototype gesture-based interactions for everyday experiences, and explore how people interact with emerging technology.</p><a class="portfolio-cta" href="#/hovr">Explore HOVR <span aria-hidden="true">↗</span></a></div>
<div class="portfolio-hero-bottom"><p>GESTURE INTERACTION / EXPERIENCE DESIGN / PROTOTYPING</p><p class="visual-credit">Background visual generated with AI.</p></div>
</section>
<section class="portfolio-work" id="work" aria-labelledby="work-title"><div class="portfolio-section-heading"><p class="portfolio-kicker">SELECTED CASE STUDY / 01</p><h2 id="work-title">From a gesture<br>to a working interaction.</h2></div>
<article class="featured-case"><a class="featured-image" href="#/hovr" aria-label="Read the HOVR case study">${img('imgHovrProjectCover','HOVR tablet interface in a kitchen','')}</a><div class="featured-copy"><p class="portfolio-kicker">HOVR / INDIVIDUAL PROJECT / 2026</p><h3>Hands busy.<br>Flow uninterrupted.</h3><p>Cooking makes touch inconvenient. HOVR explores how gestures can help people follow recipes, control media, and handle interruptions without touching a tablet.</p><dl class="project-evidence"><div><dt>MY ROLE</dt><dd>UX/UI design<br>Interaction prototyping</dd></div><div><dt>BUILT</dt><dd>Unity + MediaPipe<br>Interactive iPad prototype</dd></div></dl><p class="prototype-scope">Prototype scope: gesture input and mode switching; calls and messages are simulated.</p><a class="portfolio-cta" href="#/hovr">View interaction process <span aria-hidden="true">↗</span></a></div></article>
<div class="process-preview"><p class="portfolio-kicker">INSIDE THE CASE STUDY</p><div><p><span>01 / CONTEXT</span>Designing for occupied hands.</p><p><span>02 / INTERACTION</span>Mapping gestures to clear actions.</p><p><span>03 / PROTOTYPE</span>Bringing the interaction onto iPad.</p></div></div>
</section><footer class="portfolio-footer"><p>Zhaolin Hu / Interaction design</p><a href="#/about">More about my practice ↗</a><p>© 2026</p></footer></div>`;
const about=()=>'<div class="page about"><h1>Curious about people.<br>Driven by interaction.</h1><section class="stack"><h3>A little about me</h3><p class="body-copy">I’m Zhaolin Hu, an interaction designer with a background in product design, pursuing an MFA in Interactive Design at SCAD.</p><p class="body-copy">My interests sit at the intersection of AI experiences, embodied interaction, and creative technology.</p></section><section class="stack"><h2>Research → Interaction → Prototyping</h2><p class="muted">AI EXPERIENCE DESIGN<br>EMBODIED INTERACTION<br>UNITY / UNREAL / FIGMA<br>CREATIVE CODING</p></section>'+footer()+'</div>';
const modes=[['Kitchen Mode','imgRecipeInterface','Keep recipes, ingredients, and timers accessible in a cooking-focused interface.'],['Entertainment Mode','imgEntertainmentInterface','Browse media, play or pause content, and enjoy entertainment while cooking.']];
const gestures=[['Index finger','imgIndexFingerGestureIllustration','Move the cursor.'],['Pinch','imgPinchGestureIllustration','Select an item.'],['L gesture + movement','imgLGestureMovementGestureIllustration','Scroll up or down.'],['Thumbs up','imgOriginalThumbsUpGesture','Accept an incoming call or message.'],['Palm facing camera','imgPalmFacingCameraGestureIllustration','Dismiss a notification or reject a call.']];
const flows=[['01 / Home','img01HomeScreen','Pinch to start.'],['02 / Main','img02MainScreen','Choose a mode or shortcut.'],['03 / Kitchen','imgRecipeInterface','Choose a recipe and follow its steps.'],['04 / Entertainment','img04EntertainmentScreen','Browse and control media.']];
const hovr=()=>'<article class="page">'+img('imgHovrKitchenConceptHero','A hand operating HOVR beside a kitchen counter','hero-image')+'<section class="stack"><p class="eyebrow">INDIVIDUAL PROJECT / Q2 2026</p><h1 class="case-title">HOVR</h1><h2 class="case-tagline" style="font-size:clamp(40px,4vw,56px)">Hands busy.<br>Flow uninterrupted.</h2><p class="body-copy">A kitchen-focused tablet experience that combines gesture input, Kitchen Mode, and Entertainment Mode for hands-free multitasking.</p><dl class="facts" style="margin:0"><div><dt class="fact-label">MY ROLE</dt><dd style="margin:0">UX/UI Designer<br>Interaction Prototyper</dd></div><div><dt class="fact-label">TOOLS</dt><dd style="margin:0">Figma · Unity<br>MediaPipe · Xcode</dd></div><div><dt class="fact-label">FOCUS</dt><dd style="margin:0">Gesture interaction<br>Kitchen UX</dd></div><div><dt class="fact-label">OUTPUT</dt><dd style="margin:0">Interactive<br>iPad prototype</dd></div></dl></section><section class="stack"><p class="section-label">01 / THE PROBLEM</p><h2>Cooking occupies your hands.<br>Touch interrupts your flow.</h2><p class="body-copy">While cooking, people need to follow recipes, manage timers, enjoy media, and respond to communication. When their hands are occupied or messy, touching a device means pausing to wash and dry their hands.</p><div class="opportunity"><h2>How might we enable hands-free multitasking while cooking without disrupting workflow?</h2></div></section><section class="stack"><p class="section-label">02 / CORE EXPERIENCE</p><h2>Two modes. One continuous workflow.</h2><div class="grid">'+modes.map(([title,image,body])=>'<div class="stack">'+img(image,title+' interface')+'<h3>'+title+'</h3><p>'+body+'</p></div>').join('')+'</div></section><section class="stack"><p class="section-label">03 / HANDS-FREE CONTROL</p><h2>Small gestures. Clear actions.</h2><p class="body-copy">The prototype maps real-time hand gestures to cursor movement, selection, scrolling, and interruption handling.</p>'+gestures.map(([title,image,body])=>'<div class="gesture">'+img(image,title+' gesture','gesture-icon'+(image==='imgOriginalThumbsUpGesture'?' svg':''))+'<div class="gesture-text"><h3>'+title+'</h3><p class="small">'+body+'</p></div></div>').join('')+'</section><section class="stack"><p class="section-label">04 / USER FLOW</p><h2>From launch to multitasking.</h2><div class="grid">'+flows.map(([title,image,body])=>'<div class="stack"><h3>'+title+'</h3>'+img(image,title+' interface')+'<p class="small">'+body+'</p></div>').join('')+'</div><h2>Handle interruptions, then return to cooking.</h2><p class="body-copy">Calls and messages are simulated in Unity. Thumbs up accepts; a palm facing the camera dismisses. A shortcut area supports switching between cooking and entertainment.</p><div class="grid">'+[['Incoming call','imgIncomingCall'],['Message notification','imgMessageNotification']].map(([title,image])=>'<figure class="stack">'+img(image,title+' interface')+'<figcaption class="small">'+title+'</figcaption></figure>').join('')+'</div></section><section class="stack"><p class="section-label">05 / PROTOTYPE IMPLEMENTATION</p><h2>Making gestures work on screen.</h2><p class="body-copy">The interaction prototype was built in Unity using MediaPipe for hand tracking, then built for iPad through Xcode for on-device testing.</p>'+img('imgDemoPoster','Unity prototype and camera tracking preview','demo-image')+'<a class="demo-link" href="https://www.figma.com/design/BLVSIJrju0HxRa18AE6Sw9?node-id=3-412" target="_blank" rel="noopener">View interaction demo in Figma</a><p class="small muted">Unity system mock-up → iPad build → on-device interaction testing</p><p class="body-copy">The prototype demonstrates interaction behavior. Live calling, messaging, and app installation are outside the implemented prototype; interruptions are simulated in Unity.</p></section>'+footer()+'</article>';
let revealObserver;
function initScrollReveal(){
  if(revealObserver)revealObserver.disconnect();
  const elements=document.querySelectorAll('main section,main footer,.project,.gesture,main figure');
  elements.forEach((element,index)=>{element.classList.add('scroll-reveal');element.style.setProperty('--reveal-delay',(index%3)*70+'ms')});
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){elements.forEach(element=>element.classList.add('is-revealed'));return}
  revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');revealObserver.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -8%'});
  elements.forEach(element=>revealObserver.observe(element));
}
// Native scrolling supplies a reading hold before each section leaves the viewport.
let pinnedCleanup=()=>{};
function initPinnedSections(){
  pinnedCleanup();
  const root=document.querySelector('.portfolio-home, main > .page');
  if(!root||matchMedia('(prefers-reduced-motion:reduce), (max-width:800px), (hover:none), (pointer:coarse)').matches)return;
  const panels=[...root.children];
  const stages=panels.map(panel=>{
    const stage=document.createElement('div');
    stage.className='pinned-stage';
    panel.before(stage);
    stage.append(panel);
    panel.classList.add('pinned-panel');
    // Reveal transforms would create a separate movement from the scroll transition.
    panel.classList.remove('scroll-reveal');
    panel.classList.add('is-revealed');
    return {stage,panel};
  });
  const measure=()=>{
    const viewport=window.innerHeight;
    stages.forEach(({stage,panel},index)=>{
      const height=panel.getBoundingClientRect().height;
      stage.style.setProperty('--pin-top',Math.min(0,viewport-height)+'px');
      stage.style.setProperty('--reading-hold',index===stages.length-1?'0px':Math.round(viewport*.85)+'px');
    });
  };
  const observer=new ResizeObserver(measure);
  panels.forEach(panel=>observer.observe(panel));
  window.addEventListener('resize',measure);
  measure();
  pinnedCleanup=()=>{observer.disconnect();window.removeEventListener('resize',measure)};
}
function render(){pinnedCleanup();const route=location.hash;const isAbout=route==='#/about',isHovr=route==='#/hovr',isHome=!isAbout&&!isHovr;document.body.classList.toggle('is-home',isHome);document.getElementById('main').innerHTML=isAbout?about():isHovr?hovr():home();document.title=isHovr?'HOVR — Zhaolin Hu':isAbout?'About — Zhaolin Hu':'Zhaolin Hu — Interaction Design';document.querySelectorAll('.nav a').forEach(a=>a.removeAttribute('aria-current'));document.getElementById(isAbout?'about-link':'work-link').setAttribute('aria-current','page');initScrollReveal();initPinnedSections();if(route==='#work'){requestAnimationFrame(()=>document.getElementById('work').scrollIntoView());}else window.scrollTo(0,0);}
window.addEventListener('hashchange',render);render();

// Subtle pointer aura for precise-pointer devices. The native cursor stays visible.
const cursorAura=document.querySelector('.cursor-aura');
if(cursorAura&&matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  let targetX=-100,targetY=-100,currentX=-100,currentY=-100;
  const follow=()=>{currentX+=(targetX-currentX)*.18;currentY+=(targetY-currentY)*.18;cursorAura.style.left=currentX+'px';cursorAura.style.top=currentY+'px';requestAnimationFrame(follow)};
  addEventListener('pointermove',event=>{targetX=event.clientX;targetY=event.clientY;cursorAura.classList.add('is-visible');cursorAura.classList.toggle('is-interactive',Boolean(event.target.closest('a,button,[role="button"]')))});
  addEventListener('pointerdown',()=>{cursorAura.classList.remove('is-clicking');void cursorAura.offsetWidth;cursorAura.classList.add('is-clicking')});
  addEventListener('pointerup',()=>cursorAura.classList.remove('is-clicking'));
  document.documentElement.addEventListener('mouseleave',()=>cursorAura.classList.remove('is-visible'));
  follow();
}
