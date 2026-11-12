import * as T from './vendor/three.module.min.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';

const stage = document.querySelector('#stage');
const status = document.querySelector('#status');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const cards = [];
let hovered, drag;
const poses = [
  [.155, .395, 0], [.320, .488, 0], [.477, .349, 0],
  [.612, .575, 0], [.851, .332, 0]
];
let renderer, scene, camera, width, height, spanX, spanY, backdrop;
const ray = new T.Raycaster();
const pointer = new T.Vector2();
const projected = new T.Vector3();
const clock = new T.Clock();

function studioBackdrop() {
  const canvas=document.createElement('canvas');
  canvas.width=512; canvas.height=512;
  const ctx=canvas.getContext('2d');
  const gradient=ctx.createLinearGradient(0,0,160,512);
  gradient.addColorStop(0,'#d8d8d8');
  gradient.addColorStop(.55,'#e7e7e7');
  gradient.addColorStop(1,'#dfdfdf');
  ctx.fillStyle=gradient; ctx.fillRect(0,0,512,512);
  const bloom=ctx.createRadialGradient(240,272,35,240,272,360);
  bloom.addColorStop(0,'rgba(255,255,255,.13)');
  bloom.addColorStop(1,'rgba(255,255,255,0)');
  ctx.fillStyle=bloom; ctx.fillRect(0,0,512,512);
  const map=new T.CanvasTexture(canvas);
  map.colorSpace=T.SRGBColorSpace;
  const mesh=new T.Mesh(new T.PlaneGeometry(1,1),new T.MeshStandardMaterial({map,color:0xdddddd,roughness:1,envMapIntensity:0,toneMapped:false}));
  mesh.material.onBeforeCompile=shader=>{
    shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',
      'outgoingLight=vec3(dot(outgoingLight,vec3(.2126,.7152,.0722)));\n#include <opaque_fragment>');
  };
  mesh.position.z=-.8;
  // Behind the cards and facing the backdrop, so this light only washes the set.
  const wash=new T.SpotLight(0xffffff,.16,1.16,.95,.98,2);
  wash.position.set(.30,.18,-.20);
  wash.target.position.set(.15,.08,-.8);
  scene.add(wash,wash.target);
  scene.add(mesh);
  return mesh;
}

function frostedArtwork(original) {
  const canvas=document.createElement('canvas');
  canvas.width=512; canvas.height=512;
  const ctx=canvas.getContext('2d');
  ctx.fillStyle='#f4f4f4'; ctx.fillRect(0,0,512,512);
  const texture=new T.CanvasTexture(canvas);
  texture.colorSpace=T.SRGBColorSpace;
  texture.flipY=original.flipY;
  texture.channel=original.channel;
  texture.offset.copy(original.offset);
  texture.repeat.copy(original.repeat);
  texture.center.copy(original.center);
  texture.rotation=original.rotation;
  return texture;
}

let frostGrain;
function groundGlassGrain() {
  if(frostGrain)return frostGrain;
  const size=128, pixels=new Uint8Array(size*size*4);
  let seed=78;
  for(let i=0;i<pixels.length;i+=4) {
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    const v=110+(seed>>>26);
    pixels[i]=pixels[i+1]=pixels[i+2]=v; pixels[i+3]=255;
  }
  frostGrain=new T.DataTexture(pixels,size,size);
  frostGrain.magFilter=T.LinearFilter;
  frostGrain.minFilter=T.LinearMipmapLinearFilter;
  frostGrain.generateMipmaps=true;
  frostGrain.needsUpdate=true;
  return frostGrain;
}

function polishedEdge(pane, warm) {
  const geom=pane.geometry;
  if(!geom.boundingBox)geom.computeBoundingBox();
  const b=geom.boundingBox;
  const x=(b.max.x-b.min.x)*.5-.00075, y=(b.max.y-b.min.y)*.5-.00075;
  const center=b.getCenter(new T.Vector3());
  const radius=Math.min(x,y,.012);
  const z=warm ? b.max.z-.0001 : b.min.z+.0001;
  const points=[];
  for(let q=0;q<4;q++) {
    const cx=q===0||q===3 ? x-radius : -x+radius;
    const cy=q<2 ? y-radius : -y+radius;
    for(let i=0;i<=8;i++) {
      const a=(q+i/8)*Math.PI*.5;
      points.push(new T.Vector3(center.x+cx+Math.cos(a)*radius,center.y+cy+Math.sin(a)*radius,z));
    }
  }
  const curve=new T.CurvePath();
  points.forEach((p,i)=>curve.add(new T.LineCurve3(p,points[(i+1)%points.length])));
  const tube=new T.TubeGeometry(curve,192,.00073,5,true);
  const colors=[];
  const pos=tube.attributes.position;
  const ice=new T.Color('#fafafa'), amber=new T.Color('#eeeeee'), mist=new T.Color('#c8c8c8');
  for(let i=0;i<pos.count;i++) {
    const u=(pos.getX(i)-center.x)/x, v=(pos.getY(i)-center.y)/y;
    const tint=mist.clone().lerp(ice,.35+.65*Math.pow(Math.abs(v),3));
    tint.lerp(amber,Math.pow(Math.max(0,u),3)*.77);
    colors.push(tint.r,tint.g,tint.b);
  }
  tube.setAttribute('color',new T.Float32BufferAttribute(colors,3));
  const edge=new T.Mesh(tube,new T.MeshBasicMaterial({vertexColors:true,toneMapped:false}));
  edge.name='Polished edge highlight';
  return edge;
}

function lighting() {
  // Neutral product studio: broad front light, soft fill and a narrow back light.
  scene.add(new T.HemisphereLight(0xffffff,0xbcbcbc,.58));
  const frontSoftbox=new T.SpotLight(0xffffff,5.2,0,.79,.92,2);
  frontSoftbox.position.set(-.72,.86,1.48);
  frontSoftbox.target.position.set(0,-.10,0);
  scene.add(frontSoftbox.target,frontSoftbox);
  const fill=new T.DirectionalLight(0xa5c6ff,.68);
  fill.position.set(2,.35,2.4);
  scene.add(fill);
  const rim=new T.DirectionalLight(0xffb78f,1.7);
  rim.position.set(1.5,2.5,-1.8);
  scene.add(rim);

  // White softboxes reflected in the glass and screws, outside the camera view.
  const studio=new T.Scene();
  studio.background=new T.Color(0x757575);
  for(const [x,y,z,w,h,radiance,tint] of [
    [-1.28,.27,2.1,1.8,2.1,3.4,0xfffaf6],
    [1.9,.45,1.3,.72,3.2,3.1,0xffdbc5],
    [0,2.75,-.45,3.3,.62,3.0,0xffe3cd],
    [-.65,-1.2,1.75,2.7,.92,2.5,0xc6ddff]
  ]) {
    const panel=new T.Mesh(new T.PlaneGeometry(w,h),
      new T.MeshBasicMaterial({
        color:new T.Color(tint).multiplyScalar(radiance),
        side:T.DoubleSide,toneMapped:false
      }));
    panel.position.set(x,y,z);
    panel.lookAt(0,0,0);
    studio.add(panel);
  }
  const pmrem = new T.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(studio, .035).texture;
  pmrem.dispose();
  studio.traverse(o => { if(o.isMesh){ o.geometry.dispose(); o.material.dispose(); } });
}

function resize() {
  const mark=document.querySelector('#gallery-title');
  const navLink=document.querySelector('.masthead nav a[href="#about"]');
  const navSize=parseFloat(getComputedStyle(navLink).fontSize);
  const smallSize=navSize*1.43;
  const ratio=smallSize/parseFloat(getComputedStyle(mark).fontSize);
  const layout=document.documentElement.style;
  layout.setProperty('--wordmark-small-width',mark.offsetWidth*ratio+'px');
  layout.setProperty('--wordmark-hero-scale-x',String(document.documentElement.clientWidth*.40/Math.max(1,mark.offsetWidth)));
  layout.setProperty('--wordmark-small-y',(navLink.offsetHeight-smallSize*.89)*.5+'px');
  document.documentElement.style.setProperty('--wordmark-small-scale',String(ratio));
  width = stage.clientWidth;
  height = stage.clientHeight;
  spanX = 1.58;
  spanY = spanX * height / width;
  camera.left = -spanX / 2; camera.right = spanX / 2;
  camera.top = spanY / 2; camera.bottom = -spanY / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  backdrop.scale.set(spanX*1.01,spanY*1.01,1);
  for (const c of cards) {
    const [x,y,tilt] = c.pose;
    const narrow = width / height < .95;
    const yTop = narrow ? .36 + (y - .33) * .65 : y;
    const scale = narrow ? Math.min(1, 1.45 * width / height) : 1;
    c.pivot.scale.setScalar(scale);
    c.scale = scale;
    c.pivot.position.set((x - .5) * spanX, (.5 - yTop) * spanY, c.z);
    c.tilt = tilt;
    c.restY = c.pivot.position.y;
  }
}

const cordGeometry=new T.CylinderGeometry(.00054,.00054,1,8,20);
const cordTemplate=cordGeometry.attributes.position;
const cordMaterial=new T.MeshStandardMaterial({color:0xa7a29a,roughness:.84,metalness:0,transparent:true,opacity:.48,depthWrite:false});
const clipMetal=new T.MeshStandardMaterial({color:0x9e9c96,metalness:.82,roughness:.29});
const clipInset=new T.MeshStandardMaterial({color:0x333438,metalness:.35,roughness:.48});
const cordAnchor=new T.Vector3(), cordEnd=new T.Vector3(), cordDirection=new T.Vector3();
function updateCord(c,dt) {
  c.connector.getWorldPosition(cordEnd);
  cordAnchor.set(c.topX,spanY*.52,c.z);
  c.cord.visible=cordEnd.y<cordAnchor.y || !!c.grabPose;
  cordDirection.subVectors(cordEnd,cordAnchor);
  const length=cordDirection.length();
  const nominal=Math.max(.035,cordAnchor.y-c.restY-.0185*c.scale);
  const returning=c.returnMotion;
  if(returning?.allowSound&&!returning.tensionPlayed) {
    if(length<nominal-.022)returning.wasLoose=true;
    const rate=dt>0&&returning.lastLength!==undefined?(length-returning.lastLength)/dt:0;
    if(returning.wasLoose&&length>=nominal-.008&&rate>.045) {
      returning.tensionPlayed=true;
      playClipTension(c.pivot.position.x,T.MathUtils.clamp(rate/.8,.15,1));
    }
    returning.lastLength=length;
  }
  const slack=(drag?.card===c || c.returnMotion) && length<nominal-.008 ? Math.sqrt(Math.max(0,nominal*nominal-length*length)) : 0;
  const targetLag=c.lastCordX===undefined||dt===0 ? 0 :
    T.MathUtils.clamp(-(cordEnd.x-c.lastCordX)/dt*.075,-.050,.050);
  c.lastCordX=cordEnd.x;
  c.cordLag=T.MathUtils.damp(c.cordLag??0,targetLag,9,dt);
  const loose=!reduced.matches && slack>0;
  const bend=!loose ? 0 :
    T.MathUtils.clamp(slack*.29,0,.105)*c.cordSide+c.cordLag;
  const sag=!loose ? 0 : Math.min(.033,slack*.11);
  const xy=Math.hypot(cordDirection.x,cordDirection.y);
  const sideX=xy>1e-5 ? -cordDirection.y/xy : 1;
  const sideY=xy>1e-5 ? cordDirection.x/xy : 0;
  const positions=c.cord.geometry.attributes.position;
  for(let i=0;i<positions.count;i++) {
    const t=.5-cordTemplate.getY(i);
    const arc=Math.sin(Math.PI*t);
    const bow=bend*arc+(loose ? Math.sin(Math.PI*2*t)*c.cordLag*.18 : 0);
    const rim=cordTemplate.getX(i);
    positions.setXYZ(i,
      cordAnchor.x+cordDirection.x*t+sideX*(bow+rim),
      cordAnchor.y+cordDirection.y*t+sideY*(bow+rim)-sag*arc,
      cordAnchor.z+cordDirection.z*t+cordTemplate.getZ(i));
  }
  positions.needsUpdate=true;
  c.cord.geometry.computeVertexNormals();
}

function clipAt(parent,bounds) {
  const clip=new T.Group();
  clip.position.set(0,bounds.max.y,(bounds.min.z+bounds.max.z)*.5);
  parent.add(clip);
  const halfDepth=(bounds.max.z-bounds.min.z)*.5;
  const jawZ=halfDepth+.0008;
  const shape=new T.Shape();
  shape.moveTo(-.010,-.010);
  shape.quadraticCurveTo(-.012,-.010,-.012,-.007);
  shape.lineTo(-.012,.005);
  shape.quadraticCurveTo(-.012,.007,-.009,.007);
  shape.lineTo(.009,.007);
  shape.quadraticCurveTo(.012,.007,.012,.005);
  shape.lineTo(.012,-.007);
  shape.quadraticCurveTo(.012,-.010,.010,-.010);
  shape.closePath();
  const jawGeometry=new T.ExtrudeGeometry(shape,{depth:.0014,bevelEnabled:true,
    bevelSegments:2,steps:1,bevelSize:.0005,bevelThickness:.00045,curveSegments:5});
  const rivetGeo=new T.CylinderGeometry(.0024,.0024,.001,14);
  for(const side of [-1,1]) {
    const jaw=new T.Mesh(jawGeometry,clipMetal);
    jaw.position.z=side*jawZ;
    if(side<0)jaw.rotation.y=Math.PI;
    clip.add(jaw);
    const rivet=new T.Mesh(rivetGeo,clipInset);
    rivet.rotation.x=Math.PI/2;
    rivet.position.set(0,-.001,side*(jawZ+.0021));
    clip.add(rivet);
  }
  const bridge=new T.Mesh(new T.BoxGeometry(.020,.004,2*jawZ+.002),clipMetal);
  bridge.position.y=.004;
  clip.add(bridge);
  const eye=new T.Mesh(new T.TorusGeometry(.0036,.001,8,20),clipMetal);
  eye.position.y=.010;
  clip.add(eye);
  const ferrule=new T.Mesh(new T.CylinderGeometry(.00155,.00155,.0045,10),clipMetal);
  ferrule.position.y=.0165;
  clip.add(ferrule);
  const connector=new T.Object3D();
  connector.position.y=.0185;
  clip.add(connector);
  return connector;
}

function addCard(root, index) {
  const id = String(index + 1).padStart(2,'0');
  const prefix = 'Card_' + id;
  const mount = root.getObjectByName(prefix + '_Attachment');
  const attachment = mount ? mount.position.clone() : new T.Vector3(0,.1,0);
  root.position.set(0,0,0);
  root.scale.z *= 2.05; // slightly emphasize the real layer separation at gallery scale
  const faces = [], backContent = [];
  let frostMap;
  root.traverse(o => {
    if (/_Frosted_Title$/.test(o.name)) { o.visible=false; return; }
    if (/_Clear_(Title|Cover)$/.test(o.name)) {
      o.visible=false;
      backContent.push(o);
    }
    if (!o.isMesh) return;
    if (/_Cover_Insert$/.test(o.name)) { o.visible=false; return; }
    if (/_Acrylic$/.test(o.name) && o.material.isMeshPhysicalMaterial) {
      o.material = o.material.clone();
      o.material.side = T.FrontSide;

      const frost=/_Front_Acrylic$/.test(o.name);
      o.material.toneMapped = false;
      o.material.transmission = frost ? .97 : 1;
      o.material.thickness = frost ? .0018 : .0002;
      o.material.envMapIntensity = frost ? .85 : .7;
      o.material.specularIntensity = frost ? .75 : .55;
      o.material.roughness = frost ? .29 : .008;
      o.material.color.set(0xffffff);
      faces.push(o);
    } else if (/_Cover$/.test(o.name) && o.material.map) {
      const old = o.material;
      const isFrost=/_Frosted_Cover$/.test(o.name);
      if(isFrost) { frostMap=frostedArtwork(old.map); o.visible=false; return; }
      o.material = new T.MeshBasicMaterial({
        map:isFrost ? frostMap : old.map, color:0xffffff, side:T.FrontSide, toneMapped:false
      });
    }
  });
  for(const pane of faces) {
    if(!/_Front_Acrylic$/.test(pane.name)) {
      pane.add(polishedEdge(pane,false));
      continue;
    }
    if(!frostMap)continue;
    // Project the milky artwork over the actual full rounded pane.
    // No sampling across the inner insert boundary, so no dark halo.
    const geometry=pane.geometry.clone();
    geometry.computeBoundingBox();
    const {min,max}=geometry.boundingBox;
    const position=geometry.attributes.position;
    const uv=[];
    for(let i=0;i<position.count;i++) {
      const u=(position.getX(i)-min.x)/(max.x-min.x);
      const v=(max.y-position.getY(i))/(max.y-min.y);
      uv.push(u,frostMap.flipY ? 1-v : v);
    }
    geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
    frostMap.channel=0;
    frostMap.offset.set(0,0); frostMap.repeat.set(1,1);
    frostMap.center.set(0,0); frostMap.rotation=0;
    pane.geometry=geometry;
        const matte=new T.MeshPhysicalMaterial({
      color:0xffffff, roughness:index===4?.295:.24, metalness:0,
      transmission:1, thickness:index===4?.006:.0042, ior:1.46, specularIntensity:.58,
      envMapIntensity:.72, bumpMap:groundGlassGrain(), bumpScale:.0032,
      toneMapped:false
    });
    pane.material=matte;
  }
  // The hover zone keeps the card's face-on size even halfway through a flip.
  const hoverBox = new T.Box3().setFromObject(root);
  hoverBox.translate(attachment.clone().negate());


  const shadowCenter=hoverBox.getCenter(new T.Vector3());
  const pivot = new T.Group();
  const swing = new T.Group();
  const flip = new T.Group();
  pivot.add(swing); swing.add(flip); flip.add(root);
  root.position.copy(attachment).negate();
  scene.add(pivot);
  const connector=clipAt(flip,hoverBox);
  const cord=new T.Mesh(cordGeometry.clone(),cordMaterial);
  cord.geometry.attributes.position.setUsage(T.DynamicDrawUsage);
  cord.frustumCulled=false;
  scene.add(cord);
  const label = document.createElement('button');
  label.className = 'card-label';
  label.textContent = 'Flip';
  label.setAttribute('aria-pressed', 'false');
  label.setAttribute('aria-label', 'Flip ' + (root.userData.project || 'card ' + id));
  document.querySelector('#labels').append(label);
  const projectLink=document.querySelectorAll('.work-notes a')[index];
  const projectUrl=projectLink?.href;
  const c = {projectIndex:index,projectUrl, projectTitle:projectLink?.querySelector('strong')?.textContent, projectDescription:projectLink?.querySelector('span')?.textContent, pivot, swing, flip, cord, cordSide:index%2===0 ? 1 : -1, connector, faces, backContent, label, hoverBox, shadowCenter, pose:poses[index],
    hitBounds:{center:new T.Vector3(),half:new T.Vector3(),axes:[new T.Vector3(),new T.Vector3(),new T.Vector3()]},
    z:[0,.08,0,.04,.08][index], angle:0, spin:0,
    travel:0, speed:0, contactShift:0, turn:0, manualBack:false, tilt:0};
  label.addEventListener('click', () => flipCard(c));
  cards.push(c);
}
function flipCard(c) { c.manualBack = !c.manualBack; }

function hoverCardAt(x,y) {
  const wx=(x/width-.5)*spanX, wy=(.5-y/height)*spanY;
  let hit;
  for(const c of cards) {
    const dx=(wx-(c.pose[0]-.5)*spanX)/c.scale;
    const dy=(wy-c.restY)/c.scale;
    const cos=Math.cos(c.tilt), sin=Math.sin(c.tilt);
    const lx=dx*cos+dy*sin, ly=-dx*sin+dy*cos;
    const {min,max}=c.hoverBox;
    if(lx>=min.x && lx<=max.x && ly>=min.y && ly<=max.y &&
       (!hit || c.z>hit.z)) hit=c;
  }
  return hit;
}
function setHovered(card) {
  if(card===hovered)return;
  if(hovered)hovered.manualBack=false;
  hovered=card;
  if(card?.projectTitle){lastDescribedCard=card;renderProjectSummary();}
  renderer.domElement.classList.toggle('over',!!hovered);
}
function cardAt(x,y) {
  pointer.set(x / width * 2 - 1, 1 - y / height * 2);
  ray.setFromCamera(pointer,camera);
  let closest = Infinity, match;
  for (const c of cards) {
    const hit = ray.intersectObjects(c.faces,false)[0];
    if (hit && hit.distance < closest) { closest=hit.distance; match=c; }
  }
  return match;
}

let soundContext, soundBus;
const contactAudio=new Map();

async function enableSound() {
  try {
    const Audio=window.AudioContext || window.webkitAudioContext;
    if(!Audio)return false;
    if(!soundContext) {
      soundContext=new Audio();
      soundBus=soundContext.createGain();
      soundBus.gain.value=1.05;
      soundBus.connect(soundContext.destination);
    }
    if(soundContext.state!=='running')await soundContext.resume();
    if(soundContext.state!=='running')return false;

    return true;
  } catch { return false; }
}

const acrylicSamples=new Map();

function acrylicImpact(soft) {
  if(acrylicSamples.has(soft))return acrylicSamples.get(soft);
  const rate=soundContext.sampleRate;
  const buffer=soundContext.createBuffer(1,Math.ceil(rate*.17),rate);
  const wave=buffer.getChannelData(0);
  const modes=soft
    ? [[440,.09,175],[869,.22,115],[1469,.29,75],[2213,.25,102],[3149,.15,147],[4531,.065,215]]
    : [[466,.11,168],[923,.24,102],[1547,.31,66],[2399,.27,90],[3527,.17,128],[4937,.086,196]];
  let seed=soft?7241:52371, fast=0, slow=0, peak=0;
  const smooth=hz=>1-Math.exp(-2*Math.PI*hz/rate);
  const high=smooth(6400), low=smooth(920);
  for(let i=0;i<wave.length;i++) {
    const t=i/rate;
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    const noise=seed/2147483648-1;
    fast+=high*(noise-fast);
    slow+=low*(noise-slow);
    // Brief hard edge click, then inharmonic plate vibrations damped by the grip.
    let v=(fast-slow)*(soft?.17:.28)*Math.exp(-t*620);
    for(const [hz,amp,decay] of modes) {
      const phase=2*Math.PI*hz*t;
      v+=amp*Math.sin(phase)*Math.exp(-decay*t);
      if(!soft&&t>.0028) {
        const t2=t-.0028;
        v+=amp*.085*Math.sin(2*Math.PI*hz*t2)*Math.exp(-(decay+58)*t2);
      }
    }
    v=Math.tanh(v*1.08)*Math.min(1,t/.00022);
    wave[i]=v;
    peak=Math.max(peak,Math.abs(v));
  }
  for(let i=0;i<wave.length;i++)wave[i]*=.88/Math.max(.01,peak);
  acrylicSamples.set(soft,buffer);
  return buffer;
}

function playImpactBuffer(buffer,x,gain,rate,delay=0,brightness=0) {
  if(soundContext?.state!=='running')return;
  const pan=soundContext.createStereoPanner();
  pan.pan.value=T.MathUtils.clamp(x/((spanX||1.58)*.58),-.78,.78);
  const volume=soundContext.createGain();
  volume.gain.value=gain;
  const filter=soundContext.createBiquadFilter();
  filter.type='highshelf';
  filter.frequency.value=2100;
  filter.gain.value=brightness;
  const hit=soundContext.createBufferSource();
  hit.buffer=buffer;
  hit.playbackRate.value=rate;
  hit.connect(filter); filter.connect(volume); volume.connect(pan); pan.connect(soundBus);
  hit.start(soundContext.currentTime+delay);
  hit.onended=()=>{hit.disconnect();filter.disconnect();volume.disconnect();pan.disconnect();};
}

function playAcrylicHit(x,force,pitch,delay=0) {
  if(soundContext?.state!=='running')return;
  playImpactBuffer(acrylicImpact(force<.42),x,.59*Math.pow(force,1.12),
    pitch*(.96+.11*force),delay,1.2+force*2.1);
}

let clipSample;
function playClipTension(x,force,delay=0) {
  if(soundContext?.state!=='running')return;
  if(!clipSample) {
    const rate=soundContext.sampleRate;
    clipSample=soundContext.createBuffer(1,Math.ceil(rate*.055),rate);
    const wave=clipSample.getChannelData(0);
    let seed=997, lp=0;
    for(let i=0;i<wave.length;i++) {
      const t=i/rate;
      seed=(Math.imul(seed,1664525)+1013904223)>>>0;
      lp+=.17*(seed/2147483648-1-lp);
      wave[i]=Math.min(1,t/.0018)*(lp*.44*Math.exp(-170*t)
        +.13*Math.sin(t*2*Math.PI*830)*Math.exp(-250*t));
    }
  }
  playImpactBuffer(clipSample,x,.15+.17*force,.94+force*.17,delay);
}

let projectExit;
function openProject(card) {
  if(!card?.projectUrl||projectExit||view!=='work')return;
  if(reduced.matches||spaceBack){window.location.assign(card.projectUrl);return;}
  projectExit={card,url:card.projectUrl,started:sceneTime,poses:cards.map(c=>({
    x:c.pivot.position.x,y:c.pivot.position.y,z:c.pivot.position.z,
    turn:c.flip.rotation.y,lean:c.swing.rotation.z,scale:c.pivot.scale.x
  }))};
  setHovered(undefined);
  changeView('project-exit');
}

function renderProjectExit(dt) {
  const exit=projectExit;
  const t=sceneTime-exit.started;
  const lerp=T.MathUtils.lerp, clamp=T.MathUtils.clamp;
  for(const [i,c] of cards.entries()) {
    const pose=exit.poses[i];
    if(c===exit.card) {
      const u=clamp((t-.07)/.63,0,1);
      const ease=u*u*(3-2*u);
      const zoom=pose.scale*1.45;
      c.pivot.position.set(lerp(pose.x,-c.shadowCenter.x*zoom,ease),
        lerp(pose.y,-c.shadowCenter.y*zoom,ease),lerp(pose.z,.24,ease));
      c.pivot.scale.setScalar(lerp(pose.scale,zoom,ease));
      c.swing.rotation.z=lerp(pose.lean,0,ease);
      c.flip.rotation.y=lerp(pose.turn,Math.PI,ease);
      for(const item of c.backContent)item.visible=Math.cos(c.flip.rotation.y)<0;
      updateCord(c,dt);
      if(u>.46)c.cord.visible=false;
    } else {
      const age=Math.max(0,t-i*.037);
      const recoil=age<.105?-.033*Math.sin(Math.PI*age/.105):0;
      const u=clamp((age-.105)/.46,0,1);
      const rise=spanY*.55-pose.y+(c.hoverBox.max.y-c.hoverBox.min.y)*pose.scale+.1;
      c.pivot.position.set(pose.x,pose.y+recoil+rise*u*u,pose.z);
      c.swing.rotation.z=pose.lean*(1-u);
      c.flip.rotation.y=pose.turn;
      updateCord(c,dt);
    }
  }
  if(t>.66)document.body.dataset.projectFade='true';
  renderer.render(scene,camera);
  if(t>.91&&!exit.navigating) {
    exit.navigating=true;
    window.location.assign(exit.url);
  }
}

function resetProjectExit(event) {
  if(!event.persisted||!projectExit)return;
  projectExit=null;
  delete document.body.dataset.projectFade;
  sceneStarted=sceneTime;
  document.body.dataset.returning='true';
  for(const c of cards) {
    c.pivot.scale.setScalar(c.scale);
    c.travel=c.speed=c.turn=c.angle=c.spin=c.contactShift=0;
    c.manualBack=false;
    c.returnMotion=null;
  }
  changeView('enter');
}
window.addEventListener('pageshow',resetProjectExit);

function controls() {
  const canvas = renderer.domElement;
  window.addEventListener('pointerdown',enableSound,{passive:true});
  let last, down;
  function point(e) {
    const r=canvas.getBoundingClientRect();
    return {x:e.clientX-r.left,y:e.clientY-r.top};
  }
  canvas.addEventListener('pointermove',e=>{
    if(view!=='work')return;
    const p=point(e);
    if(spaceBack) {
      if(down&&Math.hypot(p.x-down.x,p.y-down.y)>6)down.moved=true;
      canvas.classList.toggle('over',!!cardAt(p.x,p.y));
      return;
    }
    if(drag?.pointerId===e.pointerId) {
      if(Math.hypot(p.x-drag.startX,p.y-drag.startY)>6)drag.moved=true;
      const t=performance.now();
      const x=drag.startWorldX+(p.x-drag.startX)*spanX/width;
      const y=drag.startWorldY-(p.y-drag.startY)*spanY/height;
      const deltaTime=Math.max(.012,(t-drag.lastTime)/1000);
      drag.vx=T.MathUtils.clamp((x-drag.x)/deltaTime,-1.65,1.65);
      drag.vy=T.MathUtils.clamp((y-drag.y)/deltaTime,-1.65,1.65);
      drag.x=x;
      drag.y=y;
      drag.lastTime=t;
      last=p;
      return;
    }
    if(e.pointerType !== 'touch')setHovered(hoverCardAt(p.x,p.y));
    if (last && e.pointerType !== 'touch' && !reduced.matches && !spaceBack) {
      const dx=p.x-last.x, dy=p.y-last.y, distance=Math.hypot(dx,dy);
      if (distance>1 && distance<width*.75) {
        const swept = new Set();
        const steps=Math.min(30,Math.ceil(distance/14));
        for(let i=0;i<=steps;i++) {
          const c=hoverCardAt(last.x+dx*i/steps,last.y+dy*i/steps);
          if(c) swept.add(c);
        }
        for(const c of swept) {
          c.spin=T.MathUtils.clamp(c.spin+dx/width*34,-5,5);
          c.speed=T.MathUtils.clamp(c.speed+dx/width*13,-2.1,2.1);
        }
      }
    }
    last=p;
  });
  function finishDrag(e, cancelled=false) {
    if(drag?.pointerId!==e.pointerId)return false;
    const current=drag;
    drag=undefined;
    const card=current.card;
    const moving=!cancelled&&performance.now()-current.lastTime<110;
    card.returnMotion=reduced.matches||spaceBack ? null : {
      t:0, allowSound:!cancelled, x:card.pivot.position.x-card.topX-card.contactShift,
      y:card.pivot.position.y-card.restY,
      vx:moving?current.vx:0, vy:moving?current.vy:0
    };
    card.travel=0;
    card.speed=0;
    if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);
    canvas.style.cursor='';
    const p=point(e);
    last=p;
    setHovered(cancelled ? undefined : hoverCardAt(p.x,p.y));
    if(!cancelled&&!current.moved&&Math.hypot(p.x-current.startX,p.y-current.startY)<=6)openProject(card);
    return true;
  }
  canvas.addEventListener('pointerleave',()=>{
    last=undefined;down=undefined;
    if(!drag)setHovered(undefined);
  });
  canvas.addEventListener('pointercancel',e=>{
    finishDrag(e,true);
    last=undefined;down=undefined;setHovered(undefined);
  });
  canvas.addEventListener('lostpointercapture',e=>finishDrag(e,true));
  canvas.addEventListener('pointerdown',e=>{
    if(e.button!==0||drag)return;
    const p=point(e);
    if(spaceBack||e.pointerType==='touch') { down={...p,card:cardAt(p.x,p.y),moved:false}; return; }
    const card=cardAt(p.x,p.y)||hoverCardAt(p.x,p.y);
    if(!card?.entry?.engaged)return;
    e.preventDefault();
    setHovered(card);
    const x=card.pivot.position.x-card.contactShift;
    const y=card.pivot.position.y;
    drag={card,pointerId:e.pointerId,startX:p.x,startY:p.y,
      startWorldX:x,startWorldY:y,x,y,vx:0,vy:0,lastTime:performance.now()};
    card.returnMotion=null;
    card.speed=0;
    last=p;
    canvas.style.cursor='grabbing';
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointerup',e=>{
    if(finishDrag(e))return;
    if(e.button!==0||!down)return;
    const p=point(e);
    if(!down.moved&&Math.hypot(p.x-down.x,p.y-down.y)<7) {
      const c=cardAt(p.x,p.y);
      if(c&&c===down.card)openProject(c);
    }
    down=undefined;
  });
}

function dropMotion(card,index,time) {
  if(reduced.matches)return {offset:0,drift:0,twist:0,engaged:true};
  const h=spanY*.51-card.restY+(card.hoverBox.max.y-card.hoverBox.min.y)*card.scale+.045;
  const gravity=4.8;
  const catchTime=Math.sqrt(2*h/gravity);
  const elapsed=Math.max(0,time-.075*index);
  const sinceCatch=elapsed-catchTime;
  if(sinceCatch<0) {
    return {offset:h-.5*gravity*elapsed*elapsed,drift:0,twist:0,engaged:false};
  }
  // Preserve downward velocity when the suspension catches, then let the elastic
  // recoil decay. A small sideways kick and a gentle air current move the pendulum.
  const recoil=21, drag=8.2;
  const velocity=gravity*catchTime;
  const offset=-velocity/recoil*Math.exp(-drag*sinceCatch)*Math.sin(recoil*sinceCatch);
  const phase=index*1.73;
  const air=(1-Math.exp(-2*sinceCatch));
  const kick=Math.sin(4.7*sinceCatch)*Math.exp(-2.15*sinceCatch);
  const drift=(index%2===0?1:-1)*.020*kick
    + .0034*air*Math.sin(time*(1.6+.12*index)+phase);
  const twist=.064*kick*Math.cos(phase)+.012*air*Math.sin(time*1.23+phase);
  return {offset,drift,twist,engaged:true};
}

const contactGap=.0015;
const contactDelta=new T.Vector3(), crossAxis=new T.Vector3(), contactNormal=new T.Vector3();
const contactPoint=new T.Vector3(), surfaceA=new T.Vector3(), surfaceB=new T.Vector3();
const lever=new T.Vector3(), spinVelocity=new T.Vector3(), contactVelocity=new T.Vector3();

function closestOnCard(point,box,result) {
  const x=point.x-box.center.x,y=point.y-box.center.y,z=point.z-box.center.z;
  result.copy(box.center);
  const extent=[box.half.x,box.half.y,box.half.z];
  for(let k=0;k<3;k++) {
    const axis=box.axes[k], d=x*axis.x+y*axis.y+z*axis.z;
    result.addScaledVector(axis,T.MathUtils.clamp(d,-extent[k],extent[k]));
  }
}

function velocityAt(card,point,result) {
  lever.copy(point).sub(card.pivot.position);
  spinVelocity.set(0,card.audioTurnSpeed??0,card.audioLeanSpeed??0).cross(lever);
  result.set(card.audioXSpeed??0,card.audioYSpeed??0,0).add(spinVelocity);
  return result;
}

function soundAtContact(a,b,pair) {
  const now=performance.now();
  const prior=contactAudio.get(pair);
  const event=prior&&now-prior.last<85 ? prior : {last:now,sounded:false};
  event.last=now;
  contactAudio.set(pair,event);
  if(event.sounded||soundContext?.state!=='running')return;
  closestOnCard(b.hitBounds.center,a.hitBounds,surfaceA);
  closestOnCard(surfaceA,b.hitBounds,surfaceB);
  contactPoint.copy(surfaceA).lerp(surfaceB,.5);
  velocityAt(a,contactPoint,contactVelocity);
  velocityAt(b,contactPoint,surfaceB);
  const closing=contactVelocity.sub(surfaceB).dot(contactNormal);
  if(closing<.055)return;
  event.sounded=true;
  const force=T.MathUtils.clamp(1-Math.exp(-(closing-.035)*1.8),0,1);
  const size=a.hitBounds.half.x+b.hitBounds.half.x;
  const contactEdge=Math.abs(contactNormal.dot(a.hitBounds.axes[2]))
                   +Math.abs(contactNormal.dot(b.hitBounds.axes[2]));
  const pitch=T.MathUtils.clamp(1.03+(.26-size)*.52+(contactEdge-1)*.038,.87,1.14);
  playAcrylicHit(contactPoint.x,force,pitch);
}

function poseCard(c) {
  const shift=c.freeShift+c.contactShift;
  const length=Math.max(c.ropeDrop,Math.abs(shift)+.02);
  const vertical=Math.sqrt(length*length-shift*shift);
  c.pivot.position.x=c.topX+shift;
  c.pivot.position.y=c.restY+c.entry.offset+length-vertical;
  c.swing.rotation.z=Math.atan2(shift,vertical);
  if(c.grabPose) {
    c.pivot.position.x=c.grabPose.x+c.contactShift;
    c.pivot.position.y=c.grabPose.y;
    c.swing.rotation.z=c.grabPose.lean;
  }
  c.flip.updateWorldMatrix(true,false);

  const b=c.hitBounds;
  b.center.copy(c.shadowCenter).applyMatrix4(c.flip.matrixWorld);
  for(let i=0;i<3;i++)b.axes[i].setFromMatrixColumn(c.flip.matrixWorld,i).normalize();
  b.half.set(
    (c.hoverBox.max.x-c.hoverBox.min.x)*c.scale*.5,
    (c.hoverBox.max.y-c.hoverBox.min.y)*c.scale*.5,
    (c.hoverBox.max.z-c.hoverBox.min.z)*c.scale*.5
  );
}

function overlapAlongX(a,b) {
  // Separating axes for two oriented boxes: their face normals and edge cross products.
  contactDelta.subVectors(b.center,a.center);
  let push=Infinity, shallowest=Infinity;
  function check(axis) {
    const len=axis.length();
    if(len<1e-6)return true;
    const ra=a.half.x*Math.abs(axis.dot(a.axes[0]))+
             a.half.y*Math.abs(axis.dot(a.axes[1]))+
             a.half.z*Math.abs(axis.dot(a.axes[2]));
    const rb=b.half.x*Math.abs(axis.dot(b.axes[0]))+
             b.half.y*Math.abs(axis.dot(b.axes[1]))+
             b.half.z*Math.abs(axis.dot(b.axes[2]));
    const d=contactDelta.dot(axis);
    const reach=ra+rb+contactGap*len;
    if(Math.abs(d)>=reach)return false;
    const penetration=(reach-Math.abs(d))/len;
    if(penetration<shallowest) {
      shallowest=penetration;
      contactNormal.copy(axis).multiplyScalar((d<0 ? -1 : 1)/len);
    }
    if(Math.abs(axis.x)>1e-5)push=Math.min(push,(reach-Math.sign(axis.x)*d)/Math.abs(axis.x));
    return true;
  }
  for(const axis of a.axes)if(!check(axis))return 0;
  for(const axis of b.axes)if(!check(axis))return 0;
  for(const u of a.axes)for(const v of b.axes)
    if(!check(crossAxis.crossVectors(u,v)))return 0;
  return Number.isFinite(push)?push:0;
}

function resolveCardContacts() {
  for(let pass=0;pass<12;pass++) {
    let touched=false;
    for(let i=0;i<cards.length;i++)for(let j=i+1;j<cards.length;j++) {
      const a=cards[i], b=cards[j];
      const separation=overlapAlongX(a.hitBounds,b.hitBounds);
      if(separation<=0)continue;
      if(pass===0)soundAtContact(a,b,i*cards.length+j);
      const slide=(separation+.00015)*1.04;
      const leftShare=drag?.card===a ? .10 : drag?.card===b ? .90 : .50;
      a.contactShift-=slide*leftShare;
      b.contactShift+=slide*(1-leftShare);
      // A small rebound transfers motion instead of stopping both cards abruptly.
      if(pass===0&&a.speed>b.speed) {
        const impulse=Math.min(.65,(a.speed-b.speed)*.55);
        a.speed-=impulse;
        b.speed+=impulse;
      }
      poseCard(a); poseCard(b);
      touched=true;
    }
    if(!touched)break;
  }
}

let spaceBack=false;
let view='enter', viewStarted=0, sceneStarted=0, sceneTime=0, panelRequested=null;
const panels={about:document.querySelector('#about'),contact:document.querySelector('#contact')};
let destination='about';
function changeView(next) {
  view=next;
  viewStarted=sceneTime;
  document.body.dataset.view=next;
  updateScrollCue();
  document.querySelector('.nav-home').inert=!panels[next];
  if(next==='work') {
    delete document.body.dataset.returning;
    document.body.dataset.introduced='true';
    document.querySelector('.masthead').inert=false;
  }
  for(const [name,panel] of Object.entries(panels))panel.inert=next!==name;
  document.querySelector('.intro').inert=next!=='work';
  document.querySelectorAll('.masthead nav a[href^="#"]').forEach(link=>{
    if(link.hash===(panels[next]?'#'+next:next==='work'?'#work':''))
      link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
}

function showPanel(target='about') {
  if(!panels[target]||drag)return;
  if(view==='enter'){panelRequested=target;return;}
  if(panels[view]){if(view!==target)changeView(target);return;}
  destination=target;
  if(view!=='work')return;
  setHovered(undefined);
  changeView(reduced.matches?target:'exit-text');
}
function showWork() {
  if(!panels[view])return;
  panelRequested=null;
  sceneStarted=sceneTime;
  document.body.dataset.returning='true';
  for(const c of cards) {
    c.travel=c.speed=c.turn=c.angle=c.spin=c.contactShift=0;
    c.manualBack=false;
    c.returnMotion=null;
  }
  changeView('enter');
}
function scrollView(direction) {
  if(drag)return false;
  const panel=panels[view];
  if(direction>0) {
    if(view==='work'){showPanel('about');return true;}
    if(view==='about'&&panel.scrollTop+panel.clientHeight>=panel.scrollHeight-2) {
      showPanel('contact');return true;
    }
  } else if(panel&&panel.scrollTop<=1) {
    if(view==='contact')showPanel('about'); else showWork();
    return true;
  }
  return false;
}
let language='en', lastDescribedCard;
const chineseDescriptions=[
  '通过手势操控的厨房平板。','面向公共服务 AI 虚拟助手的研究。',
  '结合标签与研究地图的学术搜索。','通过模拟学习投资。',
  '用 Unreal Engine 制作的科幻场景与传送门。'
];
function renderProjectSummary() {
  if(!lastDescribedCard)return;
  const summary=document.querySelector('#project-summary');
  summary.querySelector('strong').textContent=lastDescribedCard.projectTitle;
  summary.querySelector('p').textContent=language==='zh'
    ? chineseDescriptions[lastDescribedCard.projectIndex] : lastDescribedCard.projectDescription;
  summary.hidden=false;
}
const translations=[
  ['.masthead nav a[href="#about"]','关于'],
  ['.masthead nav a[href="#contact"]','联系'],
  ['.masthead nav a[href$=".pdf"]','简历'],
  ['.bio strong, .profile-kicker, .profile-portrait figcaption span:last-child','交互设计师'],
  ['.bio p','我把用户研究转化为可用的交互系统，探索 UX 工程、原型设计和创意技术。'],
  ['.hint','悬停翻面<br>点击打开 · 拖动卡片'],
  ['#about-title','（关于我）'],
  ['.profile-heading p','Zhaolin Hu — 交互设计师。<br>从研究问题到可用的交互。'],
  ['.profile-sheet > header span:first-child','ZHAOLIN HU / 关于'],
  ['.profile-sheet > header span:last-child','设计与探索'],
  ['.profile-copy > strong','关于我'],
  ['.profile-copy > p:nth-of-type(2)','我是 Zhaolin Hu，一名有产品设计背景的交互设计师，目前在 SCAD 攻读交互设计艺术硕士。'],
  ['.profile-copy > p:nth-of-type(3)','我将用户研究、交互设计和可运行的原型结合起来，关注 UX 工程、创意技术、具身交互和新兴技术。'],
  ['.profile-practice','<strong>研究 → 交互 → 原型</strong><br>用户研究与归纳 · 具身交互<br>UNITY / UNREAL / FIGMA · 创意编程'],
  ['.profile-sheet footer a[href="#contact"]','联系我 ↗'],
  ['.back-work','↑ 返回首页'],
  ['#contact .about-index','联系 / ZHAOLIN HU'],
  ['#contact-title','有想一起做的<br>项目吗？'],
  ['#contact .about-copy > p:first-child','我们聊聊吧。'],
  ['.copy-email','复制邮箱']
].flatMap(([selector,zh])=>Array.from(document.querySelectorAll(selector),el=>({el,zh,en:el.innerHTML})));
function updateSpaceHint() {
  const text=language==='zh'
    ? (spaceBack?'点击打开 · SPACE 恢复动画':'SPACE · 暂停卡片动画')
    : (spaceBack?'CLICK TO OPEN · SPACE TO RESUME':'SPACE TO PAUSE CARD MOTION');
  document.querySelector('#space-hint').textContent=text;
}

function updateScrollCue() {
  const cue=document.querySelector('#scroll-cue');
  cue.firstElementChild.textContent='SCROLL TO EXPLORE';
  cue.lastElementChild.textContent=view==='contact'?'↑':'↓';
}
function setLanguage(next) {
  language=next;
  document.documentElement.lang=next==='zh'?'zh-CN':'en';
  for(const entry of translations)entry.el.innerHTML=entry[next];
  const toggle=document.querySelector('#language-toggle');
  toggle.textContent=next==='zh'?'中文 / EN':'EN / 中文';
  toggle.setAttribute('aria-label',next==='zh'?'Switch to English':'切换到中文');
  document.querySelector('.copy-result').textContent='';
  renderProjectSummary();
  updateSpaceHint();
  updateScrollCue();
  try{localStorage.setItem('gallery-language',next);}catch{}
}

function setupViews() {
  const toggle=document.querySelector('#language-toggle');
  toggle.addEventListener('click',()=>setLanguage(language==='en'?'zh':'en'));
  let stored='en';try{stored=localStorage.getItem('gallery-language')??'en';}catch{}
  setLanguage(stored==='zh'?'zh':'en');
  changeView('enter');
  let wheel=0,lastWheel=0,touchStart,cueTimer;
  const cue=document.querySelector('#scroll-cue');
  function highlightScroll() {
    cue.dataset.active='true';
    clearTimeout(cueTimer);
    cueTimer=setTimeout(()=>delete cue.dataset.active,560);
  }
  window.addEventListener('scroll',highlightScroll,{capture:true,passive:true});
  window.addEventListener('touchmove',e=>{
    if(touchStart!==undefined&&Math.abs(e.touches[0].clientY-touchStart)>6)highlightScroll();
  },{passive:true});
  window.addEventListener('wheel',e=>{
    if(e.ctrlKey||drag)return;
    if(e.deltaY)highlightScroll();
    const now=performance.now();
    if(now-lastWheel>160)wheel=0;
    lastWheel=now;
    wheel+=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);
    if((!panels[view]||sceneTime-viewStarted>.45)&&Math.abs(wheel)>26) {
      if(scrollView(Math.sign(wheel)))wheel=0;
    }
  },{passive:true});
  window.addEventListener('touchstart',e=>{touchStart=e.touches.length===1?e.touches[0].clientY:undefined;},{passive:true});
  window.addEventListener('touchend',e=>{
    if(touchStart===undefined)return;
    const delta=touchStart-e.changedTouches[0].clientY;
    touchStart=undefined;
    if(Math.abs(delta)>54)scrollView(Math.sign(delta));
  },{passive:true});
  window.addEventListener('keydown',e=>{
    if(e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey)return;
    if(e.code==='Space'&&view==='work'&&!drag&&!e.target.closest?.('button,a,input,textarea,select,[contenteditable]')) {
      e.preventDefault();
      if(e.repeat)return;
      spaceBack=!spaceBack;
      document.querySelector('#labels').inert=spaceBack;
      document.body.toggleAttribute('data-cards-paused',spaceBack);
      updateSpaceHint();
      setHovered(undefined);
      for(const c of cards) {
        c.manualBack=false;
        c.turn=spaceBack?Math.PI:0;
        c.travel=c.speed=c.angle=c.spin=c.contactShift=0;
        c.returnMotion=null;
      }
      return;
    }
    if(e.key==='PageDown'||e.key==='PageUp')highlightScroll();
    if(e.key==='PageDown'&&scrollView(1))e.preventDefault();
    if(e.key==='PageUp'&&scrollView(-1))e.preventDefault();
    if(e.key==='Escape'&&panels[view]){e.preventDefault();showWork();}
  });
  for(const link of document.querySelectorAll('a[href="#about"],a[href="#contact"],a[href="#work"]')) {
    link.addEventListener('click',e=>{
      e.preventDefault();
      if(link.hash==='#work')showWork(); else showPanel(link.hash.slice(1));
    });
  }
}

function frame() {
  const dt=Math.min(clock.getDelta(),.034);
  sceneTime=clock.elapsedTime;
  if(projectExit){renderProjectExit(dt);return;}
  const time=sceneTime-sceneStarted;
  if(view==='enter'&&(reduced.matches||time>1.38)) {
    changeView('work');
    if(panelRequested) {const target=panelRequested;panelRequested=null;showPanel(target);}
  }
  if(view==='exit-text'&&sceneTime-viewStarted>.29)changeView('exit-cards');
  if(view==='exit-cards'&&sceneTime-viewStarted>.94)changeView(destination);
  for (const [i,c] of cards.entries()) {
    c.spin += (-10*c.angle - 2.15*c.spin)*dt;
    c.angle = T.MathUtils.clamp(c.angle+c.spin*dt,-1.14,1.14);
    if(drag?.card!==c) {
      c.speed += (-12*c.travel - 2.6*c.speed)*dt;
      c.travel += c.speed*dt;
    }
    const heldBack=spaceBack&&view==='work';
    const back=heldBack||c===hovered||c.manualBack;
    const target=back ? Math.PI : 0;
    const pressed=String(back);
    if(c.label.getAttribute('aria-pressed')!==pressed)c.label.setAttribute('aria-pressed',pressed);
    c.turn = reduced.matches||heldBack ? target : T.MathUtils.damp(c.turn,target,9,dt);
    c.topX=(c.pose[0]-.5)*spanX;
    c.entry=heldBack?{offset:0,drift:0,twist:0,engaged:true}:dropMotion(c,i,time);
    if(view==='exit-cards'||panels[view]) {
      const fullRise=spanY*.53-c.restY+(c.hoverBox.max.y-c.hoverBox.min.y)*c.scale+.07;
      const t=panels[view]?1:Math.max(0,sceneTime-viewStarted-(4-i)*.046);
      const dip=t<.125?-.032*Math.sin(Math.PI*t/.125):0;
      const pull=T.MathUtils.clamp((t-.125)/.55,0,1);
      c.entry.offset=dip+fullRise*pull*pull;
      c.entry.drift*=1-pull;
      c.entry.twist*=1-pull;
      c.returnMotion=null;
    }
    c.ropeDrop=Math.max(.04,spanY*.52-c.restY-c.entry.offset);
    c.freeShift=T.MathUtils.clamp(c.travel*.10+c.entry.drift,-c.ropeDrop*.32,c.ropeDrop*.32);
    c.contactShift=T.MathUtils.damp(c.contactShift,0,5,dt);
    c.flip.rotation.y=c.turn+c.angle+c.entry.twist;
    const showCover=Math.cos(c.flip.rotation.y)<0;
    for(const item of c.backContent)item.visible=showCover;


    c.flip.rotation.x=0;
    c.grabPose=null;
    if(drag?.card===c) {
      const velocity=performance.now()-drag.lastTime<85 ? drag.vx : 0;
      c.grabLean=T.MathUtils.damp(c.grabLean??0,-velocity*.065,12,dt);
      c.grabPose={x:drag.x,y:drag.y,lean:c.grabLean};
    } else if(c.returnMotion) {
      const m=c.returnMotion;
      const t=m.t;
      m.t+=dt;
      const recoil=(initial,velocity,rate,damping)=>Math.exp(-damping*t)*
        (initial*Math.cos(rate*t)+(velocity+damping*initial)/rate*Math.sin(rate*t));
      const x=recoil(m.x,m.vx,8.5,3.7);
      const y=recoil(m.y,m.vy,11.5,4.5);
      const fade=1-Math.exp(-5*t);
      c.grabPose={x:c.topX+x+c.freeShift*fade,
        y:c.restY+y+c.entry.offset*fade,
        lean:T.MathUtils.clamp(x*.52,-.22,.22)*fade};
      if(m.t>2.1)c.returnMotion=null;
    }
    poseCard(c);
    c.audioXSpeed=dt>0&&c.lastAudioX!==undefined?(c.pivot.position.x-c.lastAudioX)/dt:0;
    c.audioTurnSpeed=dt>0&&c.lastAudioTurn!==undefined?(c.flip.rotation.y-c.lastAudioTurn)/dt:0;
    c.audioYSpeed=dt>0&&c.lastAudioY!==undefined?(c.pivot.position.y-c.lastAudioY)/dt:0;
    c.audioLeanSpeed=dt>0&&c.lastAudioLean!==undefined?(c.swing.rotation.z-c.lastAudioLean)/dt:0;
    c.lastAudioTurn=c.flip.rotation.y;
  }
  resolveCardContacts();
  for(const c of cards) {
    c.lastAudioX=c.pivot.position.x;
    c.lastAudioY=c.pivot.position.y;
    c.lastAudioLean=c.swing.rotation.z;
  }
  for(const [i,c] of cards.entries()) {

    updateCord(c,dt);
    const mesh=c.faces[0];
    if (mesh) {
      const g=mesh.geometry;
      if(!g.boundingBox)g.computeBoundingBox();
      const b=g.boundingBox;
      projected.set(b.min.x,b.min.y,0);
      mesh.localToWorld(projected).project(camera);
      c.label.style.transform='translate('+((projected.x*.5+.5)*width)+'px,'+((.5-projected.y*.5)*height+5)+'px)';
    }
  }
  renderer.render(scene,camera);
}

async function start() {
  renderer=new T.WebGLRenderer({antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));
  renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.05;
  renderer.setClearColor(0xeeeeed,1);
  stage.append(renderer.domElement);
  scene=new T.Scene();
  camera=new T.OrthographicCamera(-1,1,1,-1,.01,20);
  camera.position.set(0,0,3);
  camera.updateMatrixWorld();
  lighting();
  backdrop=studioBackdrop();
  const gltf=await new GLTFLoader().loadAsync(new URL('./assets/cards.glb',import.meta.url).href);
  for(let i=0;i<5;i++) {
    const id=String(i+1).padStart(2,'0');
    const root=gltf.scene.getObjectByName('Card_'+id+'_Root');
    if(!root) throw new Error('Missing card '+id);
    addCard(root,i);
  }
  resize();
  addEventListener('resize',resize);
  document.fonts.ready.then(resize);
  controls();
  setupViews();
  if(location.hash==='#about'||location.hash==='#contact')showPanel(location.hash.slice(1));
  document.querySelector('.copy-email').addEventListener('click',async()=>{
    const result=document.querySelector('.copy-result');
    const email=document.querySelector('.contact-email');
    try {
      await navigator.clipboard.writeText(email.textContent);
      result.textContent=language==='zh'?'邮箱已复制。':'Email copied.';
    } catch {
      const selection=window.getSelection(), range=document.createRange();
      range.selectNodeContents(email);
      selection.removeAllRanges();
      selection.addRange(range);
      result.textContent=language==='zh'?'已选中邮箱，按 Ctrl+C 复制。':'Email selected. Press Ctrl+C to copy.';
    }
  });
  await window.portfolioOpening;
  renderer.setAnimationLoop(frame);
  status.hidden=true;
  document.body.dataset.ready=String(cards.length);
}
start().catch(error=>{
  status.textContent='Could not load the cards. Refresh the page and check that WebGL is enabled.';
  status.hidden=false;
  console.error(error);
});
