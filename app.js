import * as THREE from './vendor/three.module.min.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';
import zModelUrl from './assets/models/Z.glb';
import wModelUrl from './assets/models/w.glb';
import oModelUrl from './assets/models/o.glb';

// Page templates, project content, and hash navigation.
const asset=name=>'assets/'+name+(name==='imgOriginalThumbsUpGesture'?'.svg':'.png');
const img=(name,alt,css='screen')=>'<img class="'+css+'" src="'+asset(name)+'" alt="'+alt+'" loading="lazy">';
const footer=()=>'<footer class="contact stack"><h2>Have something<br>in mind?</h2><p class="callout">Let’s make it happen ↗</p><p class="placeholder">YOUR EMAIL · LINKEDIN · RESUME</p><p class="copyright">© 2026 Zhaolin Hu</p></footer>';
const ticker=()=>'<div class="capability-ticker" aria-label="Capabilities"><div class="ticker-track">'+['INTERACTION DESIGN','CREATIVE TECH','AI EXPERIENCE','PROTOTYPING','MOTION SYSTEMS','INTERACTION DESIGN','CREATIVE TECH','AI EXPERIENCE','PROTOTYPING','MOTION SYSTEMS'].map(item=>'<span>'+item+'</span>').join('')+'</div></div>';
const home=()=>'<div class="ray-home"><section class="ray-hero"><nav class="ray-nav" aria-label="Main navigation"><span class="ray-status">AVAILABLE FOR JOB</span><a class="ray-brand" href="#/" aria-label="Zhaolin Hu home"><span class="brand-full">©ZHAOLIN HU — INTERACTION DESIGNER</span><span class="brand-short">©ZHAOLIN — INTERACTION DESIGNER</span></a><a class="ray-work" href="#work">WORK</a><a class="ray-about" href="#/about">ABOUT</a><button class="ray-language" type="button" aria-label="Change language">LAN&nbsp;&nbsp; EN⌄</button></nav><div class="glass-lower" aria-hidden="true"></div><h1 class="ray-wordmark">ZHAOLIN</h1><img class="hero-refraction" src="assets/hero-refraction.svg" alt="" aria-hidden="true"><div class="glass-upper glass-upper-blur" aria-hidden="true"></div><img class="glass-upper glass-upper-outline" src="assets/glass-upper.svg" alt="" aria-hidden="true">'+ticker()+'<p class="ray-intro">I’m Zhaolin Hu. I explore how people connect with technology through AI, movement, and everyday experiences.</p><a class="scroll-prompt" href="#work">PLEASE SCROLL DOWN</a></section><section class="selected-work" id="work"><p>Selected work / 01—03</p><div class="ray-project-grid"><article class="project motion-card"><div class="cover"><p class="cover-title">BODY /<br>MIND</p><p class="card-meta">PROJECT PREVIEW / REPLACE WITH YOUR IMAGE</p></div><h2 class="project-title">Moving toward feeling ↗</h2><p class="card-meta">Embodied interaction · Research</p></article><a class="project hovr-card" href="#/hovr" aria-label="Read HOVR case study"><div class="cover photo">'+img('imgHovrProjectCover','HOVR tablet in a kitchen','')+'<div class="hover-gradient" aria-hidden="true"></div><div class="hover-copy"><h2>HOVR</h2><p>A kitchen-focused tablet experience that combines gesture input, Kitchen Mode, and Entertainment Mode for hands-free multitasking.</p></div></div></a></div><article class="project ai-card"><div class="cover peach"><p class="cover-title">HUMAN<br>× AI</p><p class="card-meta">PROJECT PREVIEW / REPLACE WITH YOUR IMAGE</p></div><h2 class="project-title">Human × AI ↗</h2><p class="card-meta">AI experience · Selected concept</p></article></section>'+footer()+'</div>';
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
function render(){const route=location.hash;const isAbout=route==='#/about',isHovr=route==='#/hovr',isHome=!isAbout&&!isHovr;document.body.classList.toggle('is-home',isHome);document.getElementById('main').innerHTML=isAbout?about():isHovr?hovr():home();document.title=isHovr?'HOVR — Zhaolin Hu':isAbout?'About — Zhaolin Hu':'Zhaolin Hu — Interaction Design';document.querySelectorAll('.nav a').forEach(a=>a.removeAttribute('aria-current'));document.getElementById(isAbout?'about-link':'work-link').setAttribute('aria-current','page');initScrollReveal();if(isHome)requestAnimationFrame(initRefraction);if(route==='#work'){requestAnimationFrame(()=>document.getElementById('work').scrollIntoView());}else window.scrollTo(0,0);}
window.addEventListener('hashchange',render);render();

let refractionCleanup;
function initRefraction(){
  if(refractionCleanup)refractionCleanup();
  const hero=document.querySelector('.ray-hero'),outline=hero?.querySelector('.hero-refraction');
  if(!hero||!outline||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  const canvas=document.createElement('canvas');
  canvas.className='refraction-canvas';canvas.setAttribute('aria-hidden','true');
  hero.insertBefore(canvas,outline);
  const glassPath=new Path2D('M1125.67 172.2C1113.79 184.968 1106.52 202.089 1106.52 220.909C1106.52 252.864 1127.48 279.922 1156.4 289.083L242 1105.5H1147.5C1141.98 1115.65 1138.84 1127.28 1138.84 1139.64C1138.84 1179.13 1170.85 1211.14 1210.34 1211.14C1211.06 1211.14 1211.78 1211.13 1212.5 1211.11V1284H242L60.375 1072.67C85.4739 1061.57 102.988 1036.45 102.988 1007.25C102.988 980.186 87.9552 956.637 65.7852 944.494L920 179H0.5V105.859C11.6907 113.443 25.1439 117.94 39.6367 118.123L40.5605 118.129C80.0488 118.129 112.06 86.1171 112.061 46.6289C112.061 29.0494 105.716 12.9512 95.1924 0.5H902.5L1125.67 172.2Z');
  const centerGlassPath=new Path2D('M16.3106 169.836C-32.1035 89.4355 33.911 -11.2843 126.952 1.0286L608.345 64.7352C657.844 71.2858 697.029 109.812 704.418 159.193L752.87 482.997C769.018 590.914 637.029 655.857 561.384 577.214L384.481 393.302C370.123 378.376 351.909 367.723 331.861 362.527L139.705 312.724C111.334 305.371 86.976 287.19 71.8572 262.082L16.3106 169.836Z');
  let renderer;
  try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});}catch(error){console.warn('Three.js refraction unavailable:',error);canvas.remove();return;}
  renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
  const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-1,1,1,-1,0,2);camera.position.z=1;
  const sourceCanvas=document.createElement('canvas'),maskCanvas=document.createElement('canvas'),centerMaskCanvas=document.createElement('canvas');
  const sourceTexture=new THREE.CanvasTexture(sourceCanvas),maskTexture=new THREE.CanvasTexture(maskCanvas),centerMaskTexture=new THREE.CanvasTexture(centerMaskCanvas);
  sourceTexture.colorSpace=THREE.SRGBColorSpace;sourceTexture.minFilter=sourceTexture.magFilter=THREE.LinearFilter;
  maskTexture.minFilter=maskTexture.magFilter=THREE.LinearFilter;
  centerMaskTexture.minFilter=centerMaskTexture.magFilter=THREE.LinearFilter;
  const uniforms={uBackground:{value:sourceTexture},uMask:{value:maskTexture},uCenterMask:{value:centerMaskTexture},uResolution:{value:new THREE.Vector2(1,1)},uTime:{value:0},uPointer:{value:new THREE.Vector2(.5,.5)},uTilt:{value:new THREE.Vector2()}};
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms,vertexShader:`
    varying vec2 vUv;uniform float uTime;uniform vec2 uTilt;
    void main(){vUv=uv;vec3 p=position;p.z+=sin((uv.x+uv.y)*8.0+uTime*.55)*.012;p.xy+=uTilt*(uv-.5)*.035;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}
  `,fragmentShader:`
    precision highp float;varying vec2 vUv;uniform sampler2D uBackground;uniform sampler2D uMask;uniform sampler2D uCenterMask;uniform vec2 uResolution;uniform float uTime;uniform vec2 uPointer;uniform vec2 uTilt;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1)),f.x),f.y);}
    void main(){
      vec4 maskSample=texture2D(uMask,vUv);vec4 centerSample=texture2D(uCenterMask,vUv);float mainMask=smoothstep(.03,.62,maskSample.a);float centerMask=smoothstep(.02,.58,centerSample.a);float mask=max(mainMask,centerMask);if(mask<.004)discard;
      vec2 px=1./uResolution;vec2 centered=vUv-.5;float radial=length(centered);float n=noise(vUv*7.+vec2(uTime*.045,-uTime*.03));
      vec2 pointerForce=(uPointer-vUv)*(.0045*(1.-smoothstep(0.,.7,length(uPointer-vUv))));
      vec2 wave=vec2(sin(vUv.y*53.+uTime*.7),cos(vUv.x*31.-uTime*.46))*(.0025+.002*n);
      vec2 bend=centered*(.012+radial*.014)+wave+pointerForce+uTilt*.004;
      bend=mix(bend,bend*.48,centerMask);vec2 sampleUv=clamp(vUv+bend,.002,.998);float blurRadius=mix(10.+18.*n,30.+42.*n,centerMask);
      vec3 sum=vec3(0.);float weight=0.;
      for(int x=-3;x<=3;x++){
        for(int y=-3;y<=3;y++){
          vec2 tap=vec2(float(x),float(y));float w=exp(-dot(tap,tap)/5.5);
          vec2 o=px*tap*blurRadius;sum+=texture2D(uBackground,clamp(sampleUv+o,.001,.999)).rgb*w;weight+=w;
        }
      }
      vec3 col=sum/weight;float dispersion=.7+1.8*radial;
      float edgeMain=smoothstep(.08,.58,maskSample.a)-smoothstep(.58,.92,maskSample.a);float edgeCenter=smoothstep(.06,.5,centerSample.a)-smoothstep(.5,.9,centerSample.a);float edge=max(edgeMain,edgeCenter);
      vec3 spectral=col;spectral.r=texture2D(uBackground,clamp(sampleUv+px*vec2(dispersion,0.),.001,.999)).r;spectral.b=texture2D(uBackground,clamp(sampleUv-px*vec2(dispersion,0.),.001,.999)).b;col=mix(col,spectral,edge*.32);
      float fresnel=pow(clamp(radial*1.42,0.,1.),3.);float sheen=pow(max(0.,1.-length(vUv-vec2(.34,.25))*1.25),5.);
      col=mix(col,vec3(.985,.99,1.),.11+fresnel*.18);col+=edge*vec3(.06,.11,.16)+sheen*.075;
      gl_FragColor=vec4(col,mask*(.9+edge*.1));
    }
  `});
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(2,2,64,64),material);
  const glassObjects=[],originalMaterials=[];
  const glassMaterial=(mode)=>new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{uBackground:uniforms.uBackground,uResolution:uniforms.uResolution,uTime:uniforms.uTime,uMode:{value:mode}},vertexShader:`
    varying vec3 vNormalView;varying vec3 vPositionView;
    void main(){vec4 viewPosition=modelViewMatrix*vec4(position,1.);vPositionView=viewPosition.xyz;vNormalView=normalize(normalMatrix*normal);gl_Position=projectionMatrix*viewPosition;}
  `,fragmentShader:`
    precision highp float;varying vec3 vNormalView;varying vec3 vPositionView;uniform sampler2D uBackground;uniform vec2 uResolution;uniform float uTime;uniform float uMode;
    void main(){
      vec3 normal=normalize(vNormalView);vec3 viewDir=normalize(-vPositionView);float fresnel=pow(1.-abs(dot(normal,viewDir)),2.5);vec2 px=1./uResolution;
      float frost=step(.5,uMode);float blurRadius=mix(5.+8.*fresnel,24.+34.*fresnel,frost);vec2 screenUv=gl_FragCoord.xy/uResolution;
      vec2 wave=vec2(sin(screenUv.y*48.+uTime*.55),cos(screenUv.x*34.-uTime*.4))*mix(.022,.003,frost);vec2 distortion=normal.xy*mix(.045,.009,frost)+wave;
      vec2 uv=clamp(screenUv+distortion,.002,.998);vec3 sum=vec3(0.);float total=0.;
      for(int x=-3;x<=3;x++){for(int y=-3;y<=3;y++){vec2 tap=vec2(float(x),float(y));float weight=exp(-dot(tap,tap)/5.5);sum+=texture2D(uBackground,clamp(uv+px*tap*blurRadius,.001,.999)).rgb*weight;total+=weight;}}
      vec3 color=sum/total;float highlight=pow(max(0.,dot(normal,normalize(vec3(-.35,.65,.7)))),20.);color=mix(color,vec3(.94,.955,.98),mix(.06,.28,frost)+fresnel*.2);color+=highlight*.28;
      gl_FragColor=vec4(color,mix(.94,.84,frost)+fresnel*.12);
    }
  `});
  const zGlassMaterial=glassMaterial(0),frostedGlassMaterial=glassMaterial(1);
  const modelLayout={
    Z:{desktop:{width:1.72,x:0,y:-.22,z:.05,rx:.055,ry:.12,rz:-.035},mobile:{width:2.15,x:.15,y:-.1,z:.05,rx:.04,ry:.09,rz:-.025}},
    w:{desktop:{width:1.05,x:-.02,y:.08,z:.14,rx:-.075,ry:-.14,rz:.045},mobile:{width:1.25,x:.08,y:.05,z:.14,rx:-.055,ry:-.1,rz:.035}},
    o:{desktop:{width:.9,x:-.42,y:-.42,z:.1,rx:.065,ry:.13,rz:-.055},mobile:{width:1.05,x:-.25,y:-.36,z:.1,rx:.05,ry:.09,rz:-.04}}
  };
  const updateModelLayout=()=>{const mobile=hero.clientWidth<=640;glassObjects.forEach(({name,pivot})=>{const layout=modelLayout[name][mobile?'mobile':'desktop'];pivot.scale.setScalar(layout.width);pivot.position.set(layout.x,layout.y,layout.z);pivot.rotation.set(layout.rx,layout.ry,layout.rz);});canvas.dataset.glassModels=String(glassObjects.length);};
  const loader=new GLTFLoader();
  const modelUrls={Z:zModelUrl,w:wModelUrl,o:oModelUrl};
  [['Z',zGlassMaterial],['w',frostedGlassMaterial],['o',frostedGlassMaterial]].forEach(([name,glass])=>loader.load(modelUrls[name],gltf=>{
    if(!canvas.isConnected)return;const content=gltf.scene,box=new THREE.Box3().setFromObject(content),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());content.position.sub(center);const normalize=1/Math.max(size.x,size.y,size.z);content.scale.setScalar(normalize);
    content.traverse(child=>{if(child.isMesh){originalMaterials.push(child.material);child.material=glass;}});
    const oriented=new THREE.Group();oriented.add(content);oriented.rotation.y=(name==='Z'?-1:1)*Math.PI*.5;oriented.updateMatrixWorld(true);const orientedCenter=new THREE.Box3().setFromObject(oriented).getCenter(new THREE.Vector3());oriented.position.sub(orientedCenter);
    const pivot=new THREE.Group();pivot.add(oriented);scene.add(pivot);glassObjects.push({name,pivot,oriented,content});updateModelLayout();
  },undefined,error=>console.warn(`${name}.glb could not be loaded:`,error)));
  let width=0,height=0,dpr=1,raf=0,start=performance.now(),targetX=.5,targetY=.5,currentX=.5,currentY=.5;
  const rebuildTextures=()=>{
    width=hero.clientWidth;height=hero.clientHeight;dpr=Math.min(devicePixelRatio||1,1.6);renderer.setPixelRatio(dpr);renderer.setSize(width,height,false);
    const tw=Math.round(width*dpr),th=Math.round(height*dpr);sourceCanvas.width=maskCanvas.width=centerMaskCanvas.width=tw;sourceCanvas.height=maskCanvas.height=centerMaskCanvas.height=th;
    const source=sourceCanvas.getContext('2d'),mask=maskCanvas.getContext('2d'),centerMaskContext=centerMaskCanvas.getContext('2d');source.setTransform(dpr,0,0,dpr,0,0);mask.setTransform(dpr,0,0,dpr,0,0);centerMaskContext.setTransform(dpr,0,0,dpr,0,0);
    source.fillStyle='#f9f9f9';source.fillRect(0,0,width,height);
    const mobile=width<=640,size=mobile?86:width*.2084,x=mobile?14:width*.0639,y=mobile?62:43;
    source.font=`900 ${size}px "Helvetica Neue", "Arial Black", Arial, sans-serif`;source.fillStyle='#232323';source.textBaseline='top';source.fillText('ZHAOLIN',x,y);
    const left=mobile?8:width*.12,top=mobile?96:101,mw=mobile?520:width*.8417,mh=mobile?550:1283;
    mask.save();mask.translate(left,top);mask.scale(mw/1213,mh/1284.5);mask.fillStyle='#fff';mask.shadowColor='rgba(255,255,255,.55)';mask.shadowBlur=3;mask.fill(glassPath,'evenodd');mask.restore();
    const centerLeft=mobile?58:width*.16,centerTop=mobile?138:202,centerWidth=mobile?332:width*.631,centerHeight=mobile?338:860;
    centerMaskContext.save();centerMaskContext.translate(centerLeft,centerTop);centerMaskContext.scale(centerWidth/754.225,centerHeight/611.957);centerMaskContext.fillStyle='#fff';centerMaskContext.fill(centerGlassPath);centerMaskContext.restore();
    sourceTexture.needsUpdate=true;maskTexture.needsUpdate=true;centerMaskTexture.needsUpdate=true;uniforms.uResolution.value.set(tw,th);updateModelLayout();
  };
  const onPointerMove=event=>{const box=hero.getBoundingClientRect();targetX=THREE.MathUtils.clamp((event.clientX-box.left)/box.width,0,1);targetY=THREE.MathUtils.clamp(1-(event.clientY-box.top)/box.height,0,1);};
  const pinCanvasOnScroll=()=>{const maxOffset=Math.max(0,hero.offsetHeight-innerHeight),offset=Math.min(maxOffset,Math.max(0,-hero.getBoundingClientRect().top));canvas.style.transform=`translate3d(0,${offset}px,0)`;};
  const renderFrame=now=>{currentX+=(targetX-currentX)*.055;currentY+=(targetY-currentY)*.055;uniforms.uPointer.value.set(currentX,currentY);uniforms.uTilt.value.set((currentX-.5)*2,(currentY-.5)*2);uniforms.uTime.value=(now-start)/1000;const mobile=hero.clientWidth<=640,dx=(currentX-.5)*2,dy=(currentY-.5)*2;glassObjects.forEach(({name,pivot})=>{const layout=modelLayout[name][mobile?'mobile':'desktop'],strength=name==='Z'?1:.72;pivot.rotation.x=layout.rx-dy*.055*strength;pivot.rotation.y=layout.ry+dx*.075*strength;pivot.rotation.z=layout.rz+dx*.012*strength;pivot.position.x=layout.x+dx*.032*strength;pivot.position.y=layout.y+dy*.024*strength;});renderer.render(scene,camera);raf=requestAnimationFrame(renderFrame);};
  const resize=()=>requestAnimationFrame(()=>{rebuildTextures();pinCanvasOnScroll();});hero.addEventListener('pointermove',onPointerMove,{passive:true});addEventListener('resize',resize,{passive:true});addEventListener('scroll',pinCanvasOnScroll,{passive:true});
  document.fonts.ready.then(()=>{rebuildTextures();pinCanvasOnScroll();raf=requestAnimationFrame(renderFrame);});
  refractionCleanup=()=>{cancelAnimationFrame(raf);hero.removeEventListener('pointermove',onPointerMove);removeEventListener('resize',resize);removeEventListener('scroll',pinCanvasOnScroll);mesh.geometry.dispose();material.dispose();zGlassMaterial.dispose();frostedGlassMaterial.dispose();glassObjects.forEach(({content})=>content.traverse(child=>{if(child.isMesh)child.geometry.dispose()}));originalMaterials.forEach(item=>item?.dispose?.());sourceTexture.dispose();maskTexture.dispose();centerMaskTexture.dispose();renderer.dispose();canvas.remove();refractionCleanup=null};
}

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
