(()=>{var au=0,Ml=1,ou=2;var Sl=1,lu=2,pn=3,Jn=0,Ft=1,Lt=2,Qn=0,fs=1,bl=2,Tl=3,El=4,cu=5,ar=100,hu=101,uu=102,du=103,pu=104,fu=200,mu=201,gu=202,_u=203,vu=204,xu=205,yu=206,Mu=207,Su=208,bu=209,Tu=210,Eu=211,wu=212,Au=213,Ru=214,ja=0,Ya=1,Za=2,ms=3,qa=4,Ka=5,Ja=6,Qa=7,Cu=0,Iu=1,Pu=2,On=0,Lu=1,Nu=2,Du=3,Uu=4,Ou=5,Fu=6,Bu=7,ol="attached",zu="detached",wl=300,or=301,vi=302,$a=303,eo=304,gs=306,Xn=1e3,jn=1001,Xi=1002,Ut=1003,to=1004;var xi=1005;var mt=1006,lr=1007;var fn=1008;var mn=1009,Al=1010,Rl=1011,cr=1012,no=1013,yi=1014,Ht=1015,hr=1016,io=1017,ro=1018,ur=1020,Cl=35902,Il=35899,ku=1021,Hu=1022,Vt=1023,_s=1026,vs=1027,so=1028,ao=1029,Vu=1030,Pl=1031;var Ll=1033,oo=33776,lo=33777,co=33778,ho=33779,Nl=35840,Dl=35841,Ul=35842,Ol=35843,Fl=36196,Bl=37492,zl=37496,kl=37808,Hl=37809,Vl=37810,Gl=37811,Wl=37812,Xl=37813,jl=37814,Yl=37815,Zl=37816,ql=37817,Kl=37818,Jl=37819,Ql=37820,$l=37821,ec=36492,tc=36494,nc=36495,ic=36283,rc=36284,sc=36285,ac=36286;var ci=2300,hi=2301,ra=2302,ll=2400,cl=2401,hl=2402;var oc=0,xs=1,dr=2;var Gu=3201;var Wu=0,Xu=1,Mi="",it="srgb",vt="srgb-linear",Lr="linear",Ye="srgb";var li=7680;var ju=512,Yu=513,Zu=514,lc=515,qu=516,Ku=517,Ju=518,Qu=519,sa=35044;var cc="300 es",Pn=2e3,Nr=2001;var Ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=1234567,Gi=Math.PI/180,ui=180/Math.PI;function kt(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Mt[255&r]+Mt[r>>8&255]+Mt[r>>16&255]+Mt[r>>24&255]+"-"+Mt[255&e]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[63&t|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[255&n]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function Pe(r,e,t){return Math.max(e,Math.min(t,r))}function ul(r,e){return(r%e+e)%e}function Cr(r,e,t){return(1-t)*r+t*e}function Jt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var pr={DEG2RAD:Gi,RAD2DEG:ui,generateUUID:kt,clamp:Pe,euclideanModulo:ul,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Cr,damp:function(r,e,t,n){return Cr(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(ul(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(vh=r);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Gi},radToDeg:function(r){return r*ui},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:je,denormalize:Jt},ee=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],m=s[a+2],_=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=_);if(u!==_||c!==d||l!==p||h!==m){let f=1-o,g=c*d+l*p+h*m+u*_,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let w=Math.sqrt(x),R=Math.atan2(w,g*v);f=Math.sin(f*R)/w,o=Math.sin(o*R)/w}let M=o*v;if(c=c*f+d*M,l=l*f+p*M,h=h*f+m*M,u=u*f+_*M,f===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+c*p-l*d,e[t+1]=c*m+h*d+l*u-o*p,e[t+2]=l*m+h*p+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),p=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this.z=Pe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this.z=Pe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Co=new T,xh=new Rt,Ie=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],_=i[0],f=i[3],g=i[6],v=i[1],x=i[4],M=i[7],w=i[2],R=i[5],P=i[8];return s[0]=a*_+o*v+c*w,s[3]=a*f+o*x+c*R,s[6]=a*g+o*M+c*P,s[1]=l*_+h*v+u*w,s[4]=l*f+h*x+u*R,s[7]=l*g+h*M+u*P,s[2]=d*_+p*v+m*w,s[5]=d*f+p*x+m*R,s[8]=d*g+p*M+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Io=new Ie;function hc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ji(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $u(){let r=ji("canvas");return r.style.display="block",r}var yh={};function Yi(r){r in yh||(yh[r]=!0,console.warn(r))}function ed(r,e,t){return new Promise(function(n,i){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var Mh=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){let r={enabled:!0,workingColorSpace:vt,spaces:{},convert:function(i,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ye&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?Lr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Yi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Yi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[vt]:{primaries:e,whitePoint:n,transfer:Lr,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:it},outputColorSpaceConfig:{drawingBufferColorSpace:it}},[it]:{primaries:e,whitePoint:n,transfer:Ye,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:it}}}),r}var He=Jd();function In(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Wi(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Ii,aa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ii===void 0&&(Ii=ji("canvas")),Ii.width=e.width,Ii.height=e.height;let i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ji("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*In(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*In(t[n]/255)):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qd=0,Zi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=kt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Po(i[a].image)):s.push(Po(i[a]))}else s=Po(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Po(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?aa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $d=0,Lo=new T,ct=class r extends Ln{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=kt(),this.name="",this.source=new Zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lo).x}get height(){return this.source.getSize(Lo).y}get depth(){return this.source.getSize(Lo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Xi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Xi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ct.DEFAULT_IMAGE=null,ct.DEFAULT_MAPPING=wl,ct.DEFAULT_ANISOTROPY=1;var We=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],_=c[2],f=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+f)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,M=(p+1)/2,w=(g+1)/2,R=(h+d)/4,P=(u+_)/4,F=(m+f)/4;return x>M&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=R/n,s=P/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=R/i,s=F/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=P/s,i=F/s),this.set(n,i,s,t),this}let v=Math.sqrt((f-m)*(f-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(f-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this.z=Pe(this.z,e.z,t.z),this.w=Pe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this.z=Pe(this.z,e,t),this.w=Pe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oa=class extends Ln{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new ct(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Zi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dr=class extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var la=class extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Cs.subVectors(this.max,yr),Pi.subVectors(e.a,yr),Li.subVectors(e.b,yr),Ni.subVectors(e.c,yr),zn.subVectors(Li,Pi),kn.subVectors(Ni,Li),ri.subVectors(Pi,Ni);let t=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ri.z,ri.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ri.z,0,-ri.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ri.y,ri.x,0];return!!No(t,Pi,Li,Ni,Cs)&&(t=[1,0,0,0,1,0,0,0,1],!!No(t,Pi,Li,Ni,Cs)&&(Is.crossVectors(zn,kn),t=[Is.x,Is.y,Is.z],No(t,Pi,Li,Ni,Cs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Zt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new T,new T,new T,new T,new T,new T,new T,new T],Zt=new T,Rs=new gt,Pi=new T,Li=new T,Ni=new T,zn=new T,kn=new T,ri=new T,yr=new T,Cs=new T,Is=new T,si=new T;function No(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){si.fromArray(r,s);let o=i.x*Math.abs(si.x)+i.y*Math.abs(si.y)+i.z*Math.abs(si.z),c=e.dot(si),l=t.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ep=new gt,Mr=new T,Do=new T,Et=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ep.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Do)),this.expandByPoint(Mr.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sn=new T,Uo=new T,Ps=new T,Hn=new T,Oo=new T,Ls=new T,Fo=new T,di=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Uo.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Uo);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ps),o=Hn.dot(this.direction),c=-Hn.dot(Ps),l=Hn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*c-o,d=a*o-c,m=s*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Uo).addScaledVector(Ps,d),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,s){Oo.subVectors(t,e),Ls.subVectors(n,e),Fo.crossVectors(Oo,Ls);let a,o=this.direction.dot(Fo);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Hn.subVectors(this.origin,e);let c=a*this.direction.dot(Ls.crossVectors(Hn,Ls));if(c<0)return null;let l=a*this.direction.dot(Oo.cross(Hn));if(l<0||c+l>o)return null;let h=-a*Hn.dot(Fo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class r{constructor(e,t,n,i,s,a,o,c,l,h,u,d,p,m,_,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,p,m,_,f)}set(e,t,n,i,s,a,o,c,l,h,u,d,p,m,_,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=m,g[11]=_,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+m*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=m+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,m=l*h,_=l*u;t[0]=d+_*o,t[4]=m*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,m=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=m*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,p=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tp,e,np)}lookAt(e,t,n){let i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Vn.crossVectors(n,Nt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Vn.crossVectors(n,Nt)),Vn.normalize(),Ns.crossVectors(Nt,Vn),i[0]=Vn.x,i[4]=Ns.x,i[8]=Nt.x,i[1]=Vn.y,i[5]=Ns.y,i[9]=Nt.y,i[2]=Vn.z,i[6]=Ns.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],_=n[6],f=n[10],g=n[14],v=n[3],x=n[7],M=n[11],w=n[15],R=i[0],P=i[4],F=i[8],N=i[12],z=i[1],H=i[5],O=i[9],Z=i[13],V=i[2],Y=i[6],q=i[10],te=i[14],K=i[3],de=i[7],ve=i[11],me=i[15];return s[0]=a*R+o*z+c*V+l*K,s[4]=a*P+o*H+c*Y+l*de,s[8]=a*F+o*O+c*q+l*ve,s[12]=a*N+o*Z+c*te+l*me,s[1]=h*R+u*z+d*V+p*K,s[5]=h*P+u*H+d*Y+p*de,s[9]=h*F+u*O+d*q+p*ve,s[13]=h*N+u*Z+d*te+p*me,s[2]=m*R+_*z+f*V+g*K,s[6]=m*P+_*H+f*Y+g*de,s[10]=m*F+_*O+f*q+g*ve,s[14]=m*N+_*Z+f*te+g*me,s[3]=v*R+x*z+M*V+w*K,s[7]=v*P+x*H+M*Y+w*de,s[11]=v*F+x*O+M*q+w*ve,s[15]=v*N+x*Z+M*te+w*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-i*a*p+i*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+e[15]*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],_=e[13],f=e[14],g=e[15],v=u*f*l-_*d*l+_*c*p-o*f*p-u*c*g+o*d*g,x=m*d*l-h*f*l-m*c*p+a*f*p+h*c*g-a*d*g,M=h*_*l-m*u*l+m*o*p-a*_*p-h*o*g+a*u*g,w=m*u*c-h*_*c-m*o*d+a*_*d+h*o*f-a*u*f,R=t*v+n*x+i*M+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return e[0]=v*P,e[1]=(_*d*s-u*f*s-_*i*p+n*f*p+u*i*g-n*d*g)*P,e[2]=(o*f*s-_*c*s+_*i*l-n*f*l-o*i*g+n*c*g)*P,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*p-n*c*p)*P,e[4]=x*P,e[5]=(h*f*s-m*d*s+m*i*p-t*f*p-h*i*g+t*d*g)*P,e[6]=(m*c*s-a*f*s-m*i*l+t*f*l+a*i*g-t*c*g)*P,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*p+t*c*p)*P,e[8]=M*P,e[9]=(m*u*s-h*_*s-m*n*p+t*_*p+h*n*g-t*u*g)*P,e[10]=(a*_*s-m*o*s+m*n*l-t*_*l-a*n*g+t*o*g)*P,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*P,e[12]=w*P,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*f+t*u*f)*P,e[14]=(m*o*i-a*_*i-m*n*c+t*_*c+a*n*f-t*o*f)*P,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,m=s*u,_=a*h,f=a*u,g=o*u,v=c*l,x=c*h,M=c*u,w=n.x,R=n.y,P=n.z;return i[0]=(1-(_+g))*w,i[1]=(p+M)*w,i[2]=(m-x)*w,i[3]=0,i[4]=(p-M)*R,i[5]=(1-(d+g))*R,i[6]=(f+v)*R,i[7]=0,i[8]=(m+x)*P,i[9]=(f-v)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Di.set(i[0],i[1],i[2]).length(),a=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);let c=1/s,l=1/a,h=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=l,qt.elements[5]*=l,qt.elements[6]*=l,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i),m,_;if(c)m=s/(a-s),_=a*s/(a-s);else if(o===Pn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else{if(o!==Nr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-s),_=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i),m,_;if(c)m=1/(a-s),_=a/(a-s);else if(o===Pn)m=-2/(a-s),_=-(a+s)/(a-s);else{if(o!==Nr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=-1/(a-s),_=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Di=new T,qt=new ye,tp=new T(0,0,0),np=new T(1,1,1),Vn=new T,Ns=new T,Nt=new T,bh=new ye,Th=new Rt,Qt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ip=0,Eh=new T,Ui=new Rt,bn=new ye,Ds=new T,Sr=new T,rp=new T,sp=new Rt,wh=new T(1,0,0),Ah=new T(0,1,0),Rh=new T(0,0,1),Ch={type:"added"},ap={type:"removed"},Oi={type:"childadded",child:null},Bo={type:"childremoved",child:null},tt=class r extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new T,t=new Qt,n=new Rt,i=new T(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new Ie}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ds.copy(e):Ds.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Sr,Ds,this.up):bn.lookAt(Ds,Sr,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(bn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ap),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};tt.DEFAULT_UP=new T(0,1,0),tt.DEFAULT_MATRIX_AUTO_UPDATE=!0,tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=new T,Tn=new T,zo=new T,En=new T,Fi=new T,Bi=new T,Ih=new T,ko=new T,Ho=new T,Vo=new T,Go=new We,Wo=new We,Xo=new We,An=class r{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Kt.subVectors(i,t),Tn.subVectors(n,t),zo.subVectors(e,t);let a=Kt.dot(Kt),o=Kt.dot(Tn),c=Kt.dot(zo),l=Tn.dot(Tn),h=Tn.dot(zo),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,m=(a*h-o*c)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,En)!==null&&En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,En.x),c.addScaledVector(a,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Go,s.x),a.addScaledVector(Wo,s.y),a.addScaledVector(Xo,s.z),a}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),Tn.subVectors(e,t),Kt.cross(Tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),.5*Kt.cross(Tn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Fi.subVectors(i,n),Bi.subVectors(s,n),ko.subVectors(e,n);let c=Fi.dot(ko),l=Bi.dot(ko);if(c<=0&&l<=0)return t.copy(n);Ho.subVectors(e,i);let h=Fi.dot(Ho),u=Bi.dot(Ho);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Fi,a);Vo.subVectors(e,s);let p=Fi.dot(Vo),m=Bi.dot(Vo);if(m>=0&&p<=m)return t.copy(s);let _=p*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Bi,o);let f=h*m-p*u;if(f<=0&&u-h>=0&&p-m>=0)return Ih.subVectors(s,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(Ih,o);let g=1/(f+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(Fi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function jo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=He.workingColorSpace){if(e=ul(e,1),t=Pe(t,0,1),n=Pe(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=jo(a,s,e+1/3),this.g=jo(a,s,e),this.b=jo(a,s,e-1/3)}return He.colorSpaceToWorking(this,i),this}setStyle(e,t=it){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){let n=td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return He.workingToColorSpace(St.copy(this),e),65536*Math.round(Pe(255*St.r,0,255))+256*Math.round(Pe(255*St.g,0,255))+Math.round(Pe(255*St.b,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(St.copy(this),t);let n=St.r,i=St.g,s=St.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=it){He.workingToColorSpace(St.copy(this),e);let t=St.r,n=St.g,i=St.b;return e!==it?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Us);let n=Cr(Gn.h,Us.h,t),i=Cr(Gn.s,Us.s,t),s=Cr(Gn.l,Us.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},St=new be;be.NAMES=td;var op=0,Ct=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=kt(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$t=class extends Ct{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fm=lp();function lp(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var at=new T,Os=new ee,cp=0,ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sa,this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sa&&(e.usage=this.usage),e}};var Or=class extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fr=class extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Te=class extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},hp=0,zt=new ye,Yo=new tt,zi=new T,Dt=new gt,br=new gt,pt=new T,qe=class r extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=kt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hc(e)?Fr:Or)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Et);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(e){let n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];br.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Dt.min,br.min),Dt.expandByPoint(pt),pt.addVectors(Dt.max,br.max),Dt.expandByPoint(pt)):(Dt.expandByPoint(br.min),Dt.expandByPoint(br.max))}Dt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)pt.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(e,l),pt.add(zi)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new T,c[F]=new T;let l=new T,h=new T,u=new T,d=new ee,p=new ee,m=new ee,_=new T,f=new T;function g(F,N,z){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,z),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,N),m.fromBufferAttribute(s,z),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let H=1/(p.x*m.y-m.x*p.y);isFinite(H)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(H),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(H),o[F].add(_),o[N].add(_),o[z].add(_),c[F].add(f),c[N].add(f),c[z].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,N=v.length;F<N;++F){let z=v[F],H=z.start;for(let O=H,Z=H+z.count;O<Z;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let x=new T,M=new T,w=new T,R=new T;function P(F){w.fromBufferAttribute(i,F),R.copy(w);let N=o[F];x.copy(N),x.sub(w.multiplyScalar(w.dot(N))).normalize(),M.crossVectors(R,N);let z=M.dot(c[F])<0?-1:1;a.setXYZW(F,x.x,x.y,x.z,z)}for(let F=0,N=v.length;F<N;++F){let z=v[F],H=z.start;for(let O=H,Z=H+z.count;O<Z;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let _=0,f=c.length;_<f;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let g=0;g<h;g++)d[m++]=l[p++]}return new ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ph=new ye,ai=new di,Fs=new Et,Lh=new T,Bs=new T,zs=new T,ks=new T,Zo=new T,Hs=new T,Nh=new T,Vs=new T,lt=class extends tt{constructor(e=new qe,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Hs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Zo.fromBufferAttribute(u,e),a?Hs.addScaledVector(Zo,h):Hs.addScaledVector(Zo.sub(t),h))}t.add(Hs)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),ai.copy(e.ray).recast(e.near),Fs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Fs,Lh)===null||ai.origin.distanceToSquared(Lh)>(e.far-e.near)**2))return;Ph.copy(s).invert(),ai.copy(e.ray).applyMatrix4(Ph),n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,ai)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let f=d[m],g=a[f.materialIndex];for(let v=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));v<x;v+=3)i=Gs(this,g,e,n,l,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);m<_;m+=3)i=Gs(this,a,e,n,l,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),t.push(i));else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let f=d[m],g=a[f.materialIndex];for(let v=Math.max(f.start,p.start),x=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));v<x;v+=3)i=Gs(this,g,e,n,l,h,u,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);m<_;m+=3)i=Gs(this,a,e,n,l,h,u,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}};function Gs(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Bs),r.getVertexPosition(c,zs),r.getVertexPosition(l,ks);let h=(function(u,d,p,m,_,f,g,v){let x;if(x=d.side===1?m.intersectTriangle(g,f,_,!0,v):m.intersectTriangle(_,f,g,d.side===0,v),x===null)return null;Vs.copy(v),Vs.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(Vs);return M<p.near||M>p.far?null:{distance:M,point:Vs.clone(),object:u}})(r,e,t,n,Bs,zs,ks,Nh);if(h){let u=new T;An.getBarycoord(Nh,Bs,zs,ks,u),i&&(h.uv=An.getInterpolatedAttribute(i,o,c,l,u,new ee)),s&&(h.uv1=An.getInterpolatedAttribute(s,o,c,l,u,new ee)),a&&(h.normal=An.getInterpolatedAttribute(a,o,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new T,materialIndex:0};An.getNormal(Bs,zs,ks,d.normal),h.face=d,h.barycoord=u}return h}var pi=class r extends qe{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function m(_,f,g,v,x,M,w,R,P,F,N){let z=M/P,H=w/F,O=M/2,Z=w/2,V=R/2,Y=P+1,q=F+1,te=0,K=0,de=new T;for(let ve=0;ve<q;ve++){let me=ve*H-Z;for(let Me=0;Me<Y;Me++){let re=Me*z-O;de[_]=re*v,de[f]=me*x,de[g]=V,l.push(de.x,de.y,de.z),de[_]=0,de[f]=0,de[g]=R>0?1:-1,h.push(de.x,de.y,de.z),u.push(Me/P),u.push(1-ve/F),te+=1}}for(let ve=0;ve<F;ve++)for(let me=0;me<P;me++){let Me=d+me+Y*ve,re=d+me+Y*(ve+1),Q=d+(me+1)+Y*(ve+1),$=d+(me+1)+Y*ve;c.push(Me,re,$),c.push(re,Q,$),K+=6}o.addGroup(p,K,N),p+=K,d+=te}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Si(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(r){let e={};for(let t=0;t<r.length;t++){let n=Si(r[t]);for(let i in n)e[i]=n[i]}return e}function uc(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var nd={clone:Si,merge:bt},It=class extends Ct{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qi=class extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wn=new T,Dh=new ee,Uh=new ee,ft=class extends qi{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ui*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Gi*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ui*Math.atan(Math.tan(.5*Gi*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,Dh,Uh),t.subVectors(Uh,Dh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Gi*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ki=-90,ca=class extends tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ft(ki,1,e,t);i.layers=this.layers,this.add(i);let s=new ft(ki,1,e,t);s.layers=this.layers,this.add(s);let a=new ft(ki,1,e,t);a.layers=this.layers,this.add(a);let o=new ft(ki,1,e,t);o.layers=this.layers,this.add(o);let c=new ft(ki,1,e,t);c.layers=this.layers,this.add(c);let l=new ft(ki,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Nr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Br=class extends ct{constructor(e=[],t=301,n,i,s,a,o,c,l,h){super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ha=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Br(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new pi(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new lt(i,s),o=t.minFilter;return t.minFilter===fn&&(t.minFilter=mt),new ca(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},wt=class extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},up={type:"move"},Ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),g=this._getHandJoint(l,_);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(up)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var zr=class extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ji=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sa,this.updateRanges=[],this.version=0,this.uuid=kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tt=new T,Qi=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Bm=new T,zm=new T,km=new T,Hm=new ee,Vm=new ee,Gm=new ye,Wm=new T,Xm=new T,jm=new T,Ym=new ee,Zm=new ee,qm=new ee;var Km=new T,Jm=new T;var Oh=new T,Fh=new We,Bh=new We,dp=new T,zh=new ye,Ws=new T,qo=new Et,kh=new ye,Ko=new di,kr=class extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ol,this.bindMatrix=new ye,this.bindMatrixInverse=new ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ws),this.boundingBox.expandByPoint(Ws)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Et),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ws),this.boundingSphere.expandByPoint(Ws)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(i),e.ray.intersectsSphere(qo)!==!1&&(kh.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(kh),this.boundingBox!==null&&Ko.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,Ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ol?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Fh.fromBufferAttribute(i.attributes.skinIndex,e),Bh.fromBufferAttribute(i.attributes.skinWeight,e),Oh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Bh.getComponent(s);if(a!==0){let o=Fh.getComponent(s);zh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(dp.copy(Oh).applyMatrix4(zh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},$i=class extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hr=class extends ct{constructor(e=null,t=1,n=1,i,s,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hh=new ye,pp=new ye,Vr=class r{constructor(e=[],t=[]){this.uuid=kt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:pp;Hh.multiplyMatrices(o,t[s]),Hh.toArray(n,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hr(t,e,e,Vt,Ht);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new $i),this.bones.push(a),this.boneInverses.push(new ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Yn=class extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hi=new ye,Vh=new ye,Xs=[],Gh=new gt,fp=new ye,Tr=new lt,Er=new Et,Gr=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yn(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),Gh.copy(e.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Gh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Et),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),Er.copy(e.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Hi),Vh.multiplyMatrices(n,Hi),Tr.matrixWorld=Vh,Tr.raycast(e,Xs);for(let a=0,o=Xs.length;a<o;a++){let c=Xs[a];c.instanceId=s,c.object=this,t.push(c)}Xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yn(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hr(new Float32Array(i*this.count),i,this.count,so,Ht));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Jo=new T,mp=new T,gp=new Ie,sn=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Jo.subVectors(n,t).cross(mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gp.getNormalMatrix(e),i=this.coplanarPoint(Jo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},oi=new Et,_p=new ee(.5,.5),js=new T,Zn=class{constructor(e=new sn,t=new sn,n=new sn,i=new sn,s=new sn,a=new sn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],p=s[7],m=s[8],_=s[9],f=s[10],g=s[11],v=s[12],x=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-a,p-h,g-m,w-v).normalize(),i[1].setComponents(l+a,p+h,g+m,w+v).normalize(),i[2].setComponents(l+o,p+u,g+_,w+x).normalize(),i[3].setComponents(l-o,p-u,g-_,w-x).normalize(),n)i[4].setComponents(c,d,f,M).normalize(),i[5].setComponents(l-c,p-d,g-f,w-M).normalize();else if(i[4].setComponents(l-c,p-d,g-f,w-M).normalize(),t===Pn)i[5].setComponents(l+c,p+d,g+f,w+M).normalize();else{if(t!==Nr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(c,d,f,M).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);let t=_p.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(js.x=i.normal.x>0?e.max.x:e.min.x,js.y=i.normal.y>0?e.max.y:e.min.y,js.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},nn=new ye,rn=new Zn,ua=class r{constructor(){this.coordinateSystem=Pn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),rn.setFromProjectionMatrix(nn,i.coordinateSystem,i.reversedDepth),rn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),rn.setFromProjectionMatrix(nn,i.coordinateSystem,i.reversedDepth),rn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),rn.setFromProjectionMatrix(nn,i.coordinateSystem,i.reversedDepth),rn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),rn.setFromProjectionMatrix(nn,i.coordinateSystem,i.reversedDepth),rn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),rn.setFromProjectionMatrix(nn,i.coordinateSystem,i.reversedDepth),rn.containsPoint(e))return!0}return!1}clone(){return new r}};var dl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},Qm=new ye,$m=new be(1,1,1),eg=new Zn,tg=new ua,ng=new gt,ig=new Et,rg=new T,sg=new T,ag=new T,og=new dl,lg=new lt;var er=class extends Ct{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},da=new T,pa=new T,Wh=new ye,wr=new di,Ys=new Et,Qo=new T,Xh=new T,fi=class extends tt{constructor(e=new qe,t=new er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)da.fromBufferAttribute(t,i-1),pa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=da.distanceTo(pa);e.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;Wh.copy(i).invert(),wr.copy(e.ray).applyMatrix4(Wh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=d,_=p-1;m<_;m+=l){let f=h.getX(m),g=h.getX(m+1),v=Zs(this,e,wr,c,f,g,m);v&&t.push(v)}if(this.isLineLoop){let m=h.getX(p-1),_=h.getX(d),f=Zs(this,e,wr,c,m,_,p-1);f&&t.push(f)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,_=p-1;m<_;m+=l){let f=Zs(this,e,wr,c,m,m+1,m);f&&t.push(f)}if(this.isLineLoop){let m=Zs(this,e,wr,c,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function Zs(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(da.fromBufferAttribute(o,i),pa.fromBufferAttribute(o,s),t.distanceSqToSegment(da,pa,Qo,Xh)>n)return;Qo.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Qo);return c<e.near||c>e.far?void 0:{distance:c,point:Xh.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var jh=new T,Yh=new T,Wr=class extends fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)jh.fromBufferAttribute(t,i),Yh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jh.distanceTo(Yh);e.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xr=class extends fi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},tr=class extends Ct{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zh=new ye,pl=new di,qs=new Et,Ks=new T,jr=class extends tt{constructor(e=new qe,t=new tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;Zh.copy(i).invert(),pl.copy(e.ray).applyMatrix4(Zh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);u<d;u++){let p=l.getX(u);Ks.fromBufferAttribute(h,p),qh(Ks,p,c,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Ks.fromBufferAttribute(h,u),qh(Ks,u,c,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function qh(r,e,t,n,i,s,a){let o=pl.distanceSqToPoint(r);if(o<t){let c=new T;pl.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var mi=class extends ct{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yr=class extends ct{constructor(e,t,n=1014,i,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==_s&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zr=class extends ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fa=class r extends qe{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,m=2*n+s,_=i+1,f=new T,g=new T;for(let v=0;v<=m;v++){let x=0,M=0,w=0,R=0;if(v<=n){let N=v/n,z=N*Math.PI/2;M=-h-e*Math.cos(z),w=e*Math.sin(z),R=-e*Math.cos(z),x=N*u}else if(v<=n+s){let N=(v-n)/s;M=N*t-h,w=e,R=0,x=u+N*d}else{let N=(v-n-s)/n,z=N*Math.PI/2;M=h+e*Math.sin(z),w=e*Math.cos(z),R=e*Math.sin(z),x=u+d+N*u}let P=Math.max(0,Math.min(1,x/p)),F=0;v===0?F=.5/i:v===m&&(F=-.5/i);for(let N=0;N<=i;N++){let z=N/i,H=z*Math.PI*2,O=Math.sin(H),Z=Math.cos(H);g.x=-w*Z,g.y=M,g.z=w*O,o.push(g.x,g.y,g.z),f.set(-w*Z,R,w*O),f.normalize(),c.push(f.x,f.y,f.z),l.push(z+F,P)}if(v>0){let N=(v-1)*_;for(let z=0;z<i;z++){let H=N+z,O=N+z+1,Z=v*_+z,V=v*_+z+1;a.push(H,O,Z),a.push(O,V,Z)}}}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ma=class r extends qe{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new T,h=new ee;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qr=class r extends qe{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,_=[],f=n/2,g=0;function v(x){let M=m,w=new ee,R=new T,P=0,F=x===!0?e:t,N=x===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,f*N,0),d.push(0,N,0),p.push(.5,.5),m++;let z=m;for(let H=0;H<=i;H++){let O=H/i*c+o,Z=Math.cos(O),V=Math.sin(O);R.x=F*V,R.y=f*N,R.z=F*Z,u.push(R.x,R.y,R.z),d.push(0,N,0),w.x=.5*Z+.5,w.y=.5*V*N+.5,p.push(w.x,w.y),m++}for(let H=0;H<i;H++){let O=M+H,Z=z+H;x===!0?h.push(Z,Z+1,O):h.push(Z+1,Z,O),P+=3}l.addGroup(g,P,x===!0?1:2),g+=P}(function(){let x=new T,M=new T,w=0,R=(t-e)/n;for(let P=0;P<=s;P++){let F=[],N=P/s,z=N*(t-e)+e;for(let H=0;H<=i;H++){let O=H/i,Z=O*c+o,V=Math.sin(Z),Y=Math.cos(Z);M.x=z*V,M.y=-N*n+f,M.z=z*Y,u.push(M.x,M.y,M.z),x.set(V,R,Y).normalize(),d.push(x.x,x.y,x.z),p.push(O,1-N),F.push(m++)}_.push(F)}for(let P=0;P<i;P++)for(let F=0;F<s;F++){let N=_[F][P],z=_[F+1][P],H=_[F+1][P+1],O=_[F][P+1];(e>0||F!==0)&&(h.push(N,z,O),w+=3),(t>0||F!==s-1)&&(h.push(z,H,O),w+=3)}l.addGroup(g,w,0),g+=w})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ga=class r extends qr{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qn=class r extends qe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,m,_,f){let g=f+1,v=[];for(let x=0;x<=g;x++){v[x]=[];let M=p.clone().lerp(_,x/g),w=m.clone().lerp(_,x/g),R=g-x;for(let P=0;P<=R;P++)v[x][P]=P===0&&x===g?M:M.clone().lerp(w,P/R)}for(let x=0;x<g;x++)for(let M=0;M<2*(g-x)-1;M++){let w=Math.floor(M/2);M%2==0?(c(v[x][w+1]),c(v[x+1][w]),c(v[x][w])):(c(v[x][w+1]),c(v[x+1][w+1]),c(v[x+1][w]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,m){let _=3*p;m.x=e[_+0],m.y=e[_+1],m.z=e[_+2]}function h(p,m,_,f){f<0&&p.x===1&&(a[m]=p.x-1),_.x===0&&_.z===0&&(a[m]=f/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let m=new T,_=new T,f=new T;for(let g=0;g<t.length;g+=3)l(t[g+0],m),l(t[g+1],_),l(t[g+2],f),o(m,_,f,p)})(i),(function(p){let m=new T;for(let _=0;_<s.length;_+=3)m.x=s[_+0],m.y=s[_+1],m.z=s[_+2],m.normalize().multiplyScalar(p),s[_+0]=m.x,s[_+1]=m.y,s[_+2]=m.z})(n),(function(){let p=new T;for(let m=0;m<s.length;m+=3){p.x=s[m+0],p.y=s[m+1],p.z=s[m+2];let _=u(p)/2/Math.PI+.5,f=d(p)/Math.PI+.5;a.push(_,1-f)}(function(){let m=new T,_=new T,f=new T,g=new T,v=new ee,x=new ee,M=new ee;for(let w=0,R=0;w<s.length;w+=9,R+=6){m.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),f.set(s[w+6],s[w+7],s[w+8]),v.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),g.copy(m).add(_).add(f).divideScalar(3);let P=u(g);h(v,R+0,m,P),h(x,R+2,_,P),h(M,R+4,f,P)}})(),(function(){for(let m=0;m<a.length;m+=6){let _=a[m+0],f=a[m+2],g=a[m+4],v=Math.max(_,f,g),x=Math.min(_,f,g);v>.9&&x<.1&&(_<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),g<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},_a=class r extends qn{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Js=new T,Qs=new T,$o=new T,$s=new An,va=class extends qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Gi*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:_,b:f,c:g}=$s;if(_.fromBufferAttribute(o,l[0]),f.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),$s.getNormal($o),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let x=(v+1)%3,M=u[v],w=u[x],R=$s[h[v]],P=$s[h[x]],F=`${M}_${w}`,N=`${w}_${M}`;N in d&&d[N]?($o.dot(d[N].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(P.x,P.y,P.z)),d[N]=null):F in d||(d[F]={index0:l[v],index1:l[x],normal:$o.clone()})}}for(let m in d)if(d[m]){let{index0:_,index1:f}=d[m];Js.fromBufferAttribute(o,_),Qs.fromBufferAttribute(o,f),p.push(Js.x,Js.y,Js.z),p.push(Qs.x,Qs.y,Qs.z)}this.setAttribute("position",new Te(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ot=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-a,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new ee:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,i=[],s=[],a=[],o=new T,c=new ye;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Pe(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,m))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Pe(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},nr=class extends Ot{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ee){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xa=class extends nr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dc(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var ea=new T,el=new dc,tl=new dc,nl=new dc,ya=class extends Ot{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=i[(l-1)%s]:(ea.subVectors(i[0],i[1]).add(i[0]),o=ea);let u=i[l%s],d=i[(l+1)%s];if(this.closed||l+2<s?c=i[(l+2)%s]:(ea.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=ea),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(c),p);_<1e-4&&(_=1),m<1e-4&&(m=_),f<1e-4&&(f=_),el.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,m,_,f),tl.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,m,_,f),nl.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,m,_,f)}else this.curveType==="catmullrom"&&(el.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),tl.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),nl.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(el.calc(h),tl.calc(h),nl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Kh(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Ir(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function Pr(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var Kr=class extends Ot{constructor(e=new ee,t=new ee,n=new ee,i=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ee){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Pr(e,i.x,s.x,a.x,o.x),Pr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends Ot{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Pr(e,i.x,s.x,a.x,o.x),Pr(e,i.y,s.y,a.y,o.y),Pr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jr=class extends Ot{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Ot{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends Ot{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ir(e,i.x,s.x,a.x),Ir(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends Ot{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ir(e,i.x,s.x,a.x),Ir(e,i.y,s.y,a.y),Ir(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},es=class extends Ot{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Kh(o,c.x,l.x,h.x,u.x),Kh(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ee().fromArray(i))}return this}},ba=Object.freeze({__proto__:null,ArcCurve:xa,CatmullRomCurve3:ya,CubicBezierCurve:Kr,CubicBezierCurve3:Ma,EllipseCurve:nr,LineCurve:Jr,LineCurve3:Sa,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:$r,SplineCurve:es}),Ta=class extends Ot{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ba[i.type]().fromJSON(i))}return this}},ts=class extends Ta{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Jr(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Qr(this.currentPoint.clone(),new ee(e,t),new ee(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Kr(this.currentPoint.clone(),new ee(e,t),new ee(n,i),new ee(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new es(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new nr(e,t,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ns=class extends ts{constructor(e){super(e),this.uuid=kt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ts().fromJSON(i))}return this}};function vp(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Jh(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=(function(h,u,d,p){let m=[];for(let _=0,f=u.length;_<f;_++){let g=Jh(h,u[_]*p,_<f-1?u[_+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),m.push(wp(g))}m.sort(bp);for(let _=0;_<m.length;_++)d=Tp(m[_],d);return d})(r,e,s,t)),r.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let p=r[d],m=r[d+1];p<o&&(o=p),m<c&&(c=m),p>h&&(h=p),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return is(s,a,t,o,c,l,0),a}function Jh(r,e,t,n,i){let s;if(i===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=Qh(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Qh(a/n|0,r[a],r[a+1],s);return s&&ir(s,s.next)&&(ss(s),s=s.next),s}function gi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!ir(n,n.next)&&et(n.prev,n,n.next)!==0)n=n.next;else{if(ss(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function is(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=fl(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let m,_=1;do{let f,g=p;p=null;let v=null;for(m=0;g;){m++;let x=g,M=0;for(let R=0;R<_&&(M++,x=x.nextZ,x);R++);let w=_;for(;M>0||w>0&&x;)M!==0&&(w===0||!x||g.z<=x.z)?(f=g,g=g.nextZ,M--):(f=x,x=x.nextZ,w--),v?v.nextZ=f:p=f,f.prevZ=v,v=f;g=x}v.nextZ=null,_*=2}while(m>1)})(d)})(r,n,i,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?yp(r,n,i,s):xp(r))e.push(c.i,r.i,l.i),ss(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?is(r=Mp(gi(r),e),e,t,n,i,s,2):a===2&&Sp(r,e,t,n,i,s):is(gi(r),e,t,n,i,s,1);break}}}function xp(r){let e=r.prev,t=r,n=r.next;if(et(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,s,a),u=Math.min(o,c,l),d=Math.max(i,s,a),p=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Rr(i,o,s,c,a,l,m.x,m.y)&&et(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function yp(r,e,t,n){let i=r.prev,s=r,a=r.next;if(et(i,s,a)>=0)return!1;let o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,d=a.y,p=Math.min(o,c,l),m=Math.min(h,u,d),_=Math.max(o,c,l),f=Math.max(h,u,d),g=fl(p,m,e,t,n),v=fl(_,f,e,t,n),x=r.prevZ,M=r.nextZ;for(;x&&x.z>=g&&M&&M.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=f&&x!==i&&x!==a&&Rr(o,h,c,u,l,d,x.x,x.y)&&et(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=_&&M.y>=m&&M.y<=f&&M!==i&&M!==a&&Rr(o,h,c,u,l,d,M.x,M.y)&&et(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=f&&x!==i&&x!==a&&Rr(o,h,c,u,l,d,x.x,x.y)&&et(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=_&&M.y>=m&&M.y<=f&&M!==i&&M!==a&&Rr(o,h,c,u,l,d,M.x,M.y)&&et(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Mp(r,e){let t=r;do{let n=t.prev,i=t.next.next;!ir(n,i)&&rd(n,t,t.next,i)&&rs(n,i)&&rs(i,n)&&(e.push(n.i,t.i,i.i),ss(t),ss(t.next),t=r=i),t=t.next}while(t!==r);return gi(t)}function Sp(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ap(a,o)){let c=sd(a,o);return a=gi(a,a.next),c=gi(c,c.next),is(a,e,t,n,i,s,0),void is(c,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function bp(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Tp(r,e){let t=(function(i,s){let a=s,o=i.x,c=i.y,l,h=-1/0;if(ir(i,a))return a;do{if(ir(i,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let _=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(_<=o&&_>h&&(h=_,l=a.x<a.next.x?a:a.next,_===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,d=l.x,p=l.y,m=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&id(c<p?o:h,c,d,p,c<p?h:o,c,a.x,a.y)){let _=Math.abs(c-a.y)/(o-a.x);rs(a,i)&&(_<m||_===m&&(a.x>l.x||a.x===l.x&&Ep(l,a)))&&(l=a,m=_)}a=a.next}while(a!==u);return l})(r,e);if(!t)return e;let n=sd(t,r);return gi(n,n.next),gi(t,t.next)}function Ep(r,e){return et(r.prev,r,e.prev)<0&&et(e.next,r,r.next)<0}function fl(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function wp(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function id(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Rr(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&id(r,e,t,n,i,s,a,o)}function Ap(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&rd(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(rs(r,e)&&rs(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(et(r.prev,r,e.prev)||et(r,e.prev,e))||ir(r,e)&&et(r.prev,r,r.next)>0&&et(e.prev,e,e.next)>0)}function et(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ir(r,e){return r.x===e.x&&r.y===e.y}function rd(r,e,t,n){let i=na(et(r,e,t)),s=na(et(r,e,n)),a=na(et(t,n,r)),o=na(et(t,n,e));return i!==s&&a!==o||!(i!==0||!ta(r,t,e))||!(s!==0||!ta(r,n,e))||!(a!==0||!ta(t,r,n))||!(o!==0||!ta(t,e,n))}function ta(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function na(r){return r>0?1:r<0?-1:0}function rs(r,e){return et(r.prev,r,r.next)<0?et(r,e,r.next)>=0&&et(r,r.prev,e)>=0:et(r,e,r.prev)<0||et(r,r.next,e)<0}function sd(r,e){let t=ml(r.i,r.x,r.y),n=ml(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Qh(r,e,t,n){let i=ml(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ss(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ml(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var gl=class{static triangulate(e,t,n=2){return vp(e,t,n)}},an=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];$h(e),eu(n,e);let a=e.length;t.forEach($h);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,eu(n,t[c]);let o=gl.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function $h(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function eu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Ea=class r extends qe{constructor(e=new ns([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Rp,x,M,w,R,P,F=!1;g&&(x=g.getSpacedPoints(h),F=!0,d=!1,M=g.computeFrenetFrames(h,!1),w=new T,R=new T,P=new T),d||(f=0,p=0,m=0,_=0);let N=o.extractPoints(l),z=N.shape,H=N.holes;if(!an.isClockWise(z)){z=z.reverse();for(let I=0,y=H.length;I<y;I++){let A=H[I];an.isClockWise(A)&&(H[I]=A.reverse())}}function O(I){let y=10000000000000001e-36,A=I[0];for(let L=1;L<=I.length;L++){let C=L%I.length,X=I[C],B=X.x-A.x,k=X.y-A.y,ne=B*B+k*k,oe=Math.max(Math.abs(X.x),Math.abs(X.y),Math.abs(A.x),Math.abs(A.y));ne<=y*oe*oe?(I.splice(C,1),L--):A=X}}O(z),H.forEach(O);let Z=H.length,V=z;for(let I=0;I<Z;I++){let y=H[I];z=z.concat(y)}function Y(I,y,A){return y||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(y,A)}let q=z.length;function te(I,y,A){let L,C,X,B=I.x-y.x,k=I.y-y.y,ne=A.x-I.x,oe=A.y-I.y,se=B*B+k*k,pe=B*oe-k*ne;if(Math.abs(pe)>Number.EPSILON){let _e=Math.sqrt(se),Se=Math.sqrt(ne*ne+oe*oe),Fe=y.x-k/_e,Ve=y.y+B/_e,Ge=((A.x-oe/Se-Fe)*oe-(A.y+ne/Se-Ve)*ne)/(B*oe-k*ne);L=Fe+B*Ge-I.x,C=Ve+k*Ge-I.y;let he=L*L+C*C;if(he<=2)return new ee(L,C);X=Math.sqrt(he/2)}else{let _e=!1;B>Number.EPSILON?ne>Number.EPSILON&&(_e=!0):B<-Number.EPSILON?ne<-Number.EPSILON&&(_e=!0):Math.sign(k)===Math.sign(oe)&&(_e=!0),_e?(L=-k,C=B,X=Math.sqrt(se)):(L=B,C=k,X=Math.sqrt(se/2))}return new ee(L/X,C/X)}let K=[];for(let I=0,y=V.length,A=y-1,L=I+1;I<y;I++,A++,L++)A===y&&(A=0),L===y&&(L=0),K[I]=te(V[I],V[A],V[L]);let de=[],ve,me,Me=K.concat();for(let I=0,y=Z;I<y;I++){let A=H[I];ve=[];for(let L=0,C=A.length,X=C-1,B=L+1;L<C;L++,X++,B++)X===C&&(X=0),B===C&&(B=0),ve[L]=te(A[L],A[X],A[B]);de.push(ve),Me=Me.concat(ve)}if(f===0)me=an.triangulateShape(V,H);else{let I=[],y=[];for(let A=0;A<f;A++){let L=A/f,C=p*Math.cos(L*Math.PI/2),X=m*Math.sin(L*Math.PI/2)+_;for(let B=0,k=V.length;B<k;B++){let ne=Y(V[B],K[B],X);le(ne.x,ne.y,-C),L===0&&I.push(ne)}for(let B=0,k=Z;B<k;B++){let ne=H[B];ve=de[B];let oe=[];for(let se=0,pe=ne.length;se<pe;se++){let _e=Y(ne[se],ve[se],X);le(_e.x,_e.y,-C),L===0&&oe.push(_e)}L===0&&y.push(oe)}}me=an.triangulateShape(I,y)}let re=me.length,Q=m+_;for(let I=0;I<q;I++){let y=d?Y(z[I],Me[I],Q):z[I];F?(R.copy(M.normals[0]).multiplyScalar(y.x),w.copy(M.binormals[0]).multiplyScalar(y.y),P.copy(x[0]).add(R).add(w),le(P.x,P.y,P.z)):le(y.x,y.y,0)}for(let I=1;I<=h;I++)for(let y=0;y<q;y++){let A=d?Y(z[y],Me[y],Q):z[y];F?(R.copy(M.normals[I]).multiplyScalar(A.x),w.copy(M.binormals[I]).multiplyScalar(A.y),P.copy(x[I]).add(R).add(w),le(P.x,P.y,P.z)):le(A.x,A.y,u/h*I)}for(let I=f-1;I>=0;I--){let y=I/f,A=p*Math.cos(y*Math.PI/2),L=m*Math.sin(y*Math.PI/2)+_;for(let C=0,X=V.length;C<X;C++){let B=Y(V[C],K[C],L);le(B.x,B.y,u+A)}for(let C=0,X=H.length;C<X;C++){let B=H[C];ve=de[C];for(let k=0,ne=B.length;k<ne;k++){let oe=Y(B[k],ve[k],L);F?le(oe.x,oe.y+x[h-1].y,x[h-1].x+A):le(oe.x,oe.y,u+A)}}}function $(I,y){let A=I.length;for(;--A>=0;){let L=A,C=A-1;C<0&&(C=I.length-1);for(let X=0,B=h+2*f;X<B;X++){let k=q*X,ne=q*(X+1);b(y+L+k,y+C+k,y+C+ne,y+L+ne)}}}function le(I,y,A){c.push(I),c.push(y),c.push(A)}function ce(I,y,A){S(I),S(y),S(A);let L=i.length/3,C=v.generateTopUV(n,i,L-3,L-2,L-1);U(C[0]),U(C[1]),U(C[2])}function b(I,y,A,L){S(I),S(y),S(L),S(y),S(A),S(L);let C=i.length/3,X=v.generateSideWallUV(n,i,C-6,C-3,C-2,C-1);U(X[0]),U(X[1]),U(X[3]),U(X[1]),U(X[2]),U(X[3])}function S(I){i.push(c[3*I+0]),i.push(c[3*I+1]),i.push(c[3*I+2])}function U(I){s.push(I.x),s.push(I.y)}(function(){let I=i.length/3;if(d){let y=0,A=q*y;for(let L=0;L<re;L++){let C=me[L];ce(C[2]+A,C[1]+A,C[0]+A)}y=h+2*f,A=q*y;for(let L=0;L<re;L++){let C=me[L];ce(C[0]+A,C[1]+A,C[2]+A)}}else{for(let y=0;y<re;y++){let A=me[y];ce(A[2],A[1],A[0])}for(let y=0;y<re;y++){let A=me[y];ce(A[0]+q*h,A[1]+q*h,A[2]+q*h)}}n.addGroup(I,i.length/3-I,0)})(),(function(){let I=i.length/3,y=0;$(V,y),y+=V.length;for(let A=0,L=H.length;A<L;A++){let C=H[A];$(C,y),y+=C.length}n.addGroup(I,i.length/3-I,1)})()}this.setAttribute("position",new Te(i,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ba[i.type]().fromJSON(i)),new r(n,e.options)}},Rp={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new ee(s,a),new ee(o,c),new ee(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],m=e[3*i+2],_=e[3*s],f=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ee(a,1-c),new ee(l,1-u),new ee(d,1-m),new ee(_,1-g)]:[new ee(o,1-c),new ee(h,1-u),new ee(p,1-m),new ee(f,1-g)]}},wa=class r extends qn{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Aa=class r extends qe{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Pe(i,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new T,d=new ee,p=new T,m=new T,_=new T,f=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-f,p.z=0*g,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:f=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-f,p.z=0*g,m.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(m)}for(let v=0;v<=t;v++){let x=n+v*h*i,M=Math.sin(x),w=Math.cos(x);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*M,u.y=e[R].y,u.z=e[R].x*w,a.push(u.x,u.y,u.z),d.x=v/t,d.y=R/(e.length-1),o.push(d.x,d.y);let P=c[3*R+0]*M,F=c[3*R+1],N=c[3*R+0]*w;l.push(P,F,N)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let M=x+v*e.length,w=M,R=M+e.length,P=M+e.length+1,F=M+1;s.push(w,R,F),s.push(P,F,R)}this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Ra=class r extends qn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Kn=class r extends qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],m=[],_=[],f=[];for(let g=0;g<h;g++){let v=g*d-a;for(let x=0;x<l;x++){let M=x*u-s;m.push(M,-v,0),_.push(0,0,1),f.push(x/o),f.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let x=v+l*g,M=v+l*(g+1),w=v+1+l*(g+1),R=v+1+l*g;p.push(x,M,R),p.push(M,w,R)}this.setIndex(p),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ca=class r extends qe{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new T,m=new ee;for(let _=0;_<=i;_++){for(let f=0;f<=n;f++){let g=s+f/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<i;_++){let f=_*(n+1);for(let g=0;g<n;g++){let v=g+f,x=v,M=v+n+1,w=v+n+2,R=v+1;o.push(x,M,R),o.push(M,w,R)}}this.setIndex(o),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ia=class r extends qe{constructor(e=new ns([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;an.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,g=m.length;f<g;f++){let v=m[f];an.isClockWise(v)===!0&&(m[f]=v.reverse())}let _=an.triangulateShape(p,m);for(let f=0,g=m.length;f<g;f++){let v=m[f];p=p.concat(v)}for(let f=0,g=p.length;f<g;f++){let v=p[f];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let f=0,g=_.length;f<g;f++){let v=_[f],x=v[0]+u,M=v[1]+u,w=v[2]+u;n.push(x,M,w),c+=3}}this.setIndex(n),this.setAttribute("position",new Te(i,3)),this.setAttribute("normal",new Te(s,3)),this.setAttribute("uv",new Te(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Pa=class r extends qe{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,d=new T,p=[],m=[],_=[],f=[];for(let g=0;g<=n;g++){let v=[],x=g/n,M=0;g===0&&a===0?M=.5/t:g===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let R=w/t;u.x=-e*Math.cos(i+R*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+R*s)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(R+M,1-x),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let x=h[g][v+1],M=h[g][v],w=h[g+1][v],R=h[g+1][v+1];(g!==0||a>0)&&p.push(x,M,R),(g!==n-1||c<Math.PI)&&p.push(M,w,R)}this.setIndex(p),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},La=class r extends qn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Na=class r extends qe{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let _=m/i*s,f=p/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(_),u.y=(e+t*Math.cos(f))*Math.sin(_),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let _=(i+1)*p+m-1,f=(i+1)*(p-1)+m-1,g=(i+1)*(p-1)+m,v=(i+1)*p+m;a.push(_,f,v),a.push(f,g,v)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Da=class r extends qe{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new T,d=new T,p=new T,m=new T,_=new T,f=new T,g=new T;for(let x=0;x<=n;++x){let M=x/n*s*Math.PI*2;v(M,s,a,e,p),v(M+.01,s,a,e,m),f.subVectors(m,p),g.addVectors(m,p),_.crossVectors(f,g),g.crossVectors(_,f),_.normalize(),g.normalize();for(let w=0;w<=i;++w){let R=w/i*Math.PI*2,P=-t*Math.cos(R),F=t*Math.sin(R);u.x=p.x+(P*g.x+F*_.x),u.y=p.y+(P*g.y+F*_.y),u.z=p.z+(P*g.z+F*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(x/n),h.push(w/i)}}for(let x=1;x<=n;x++)for(let M=1;M<=i;M++){let w=(i+1)*(x-1)+(M-1),R=(i+1)*x+(M-1),P=(i+1)*x+M,F=(i+1)*(x-1)+M;o.push(w,R,F),o.push(R,P,F)}function v(x,M,w,R,P){let F=Math.cos(x),N=Math.sin(x),z=w/M*x,H=Math.cos(z);P.x=R*(2+H)*.5*F,P.y=R*(2+H)*N*.5,P.z=R*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ua=class r extends qe{constructor(e=new $r(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new ee,h=new T,u=[],d=[],p=[],m=[];function _(f){h=e.getPointAt(f/t,h);let g=a.normals[f],v=a.binormals[f];for(let x=0;x<=i;x++){let M=x/i*Math.PI*2,w=Math.sin(M),R=-Math.cos(M);c.x=R*g.x+w*v.x,c.y=R*g.y+w*v.y,c.z=R*g.z+w*v.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)_(f);_(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let g=0;g<=i;g++)l.x=f/t,l.y=g/i,p.push(l.x,l.y)})(),(function(){for(let f=1;f<=t;f++)for(let g=1;g<=i;g++){let v=(i+1)*(f-1)+(g-1),x=(i+1)*f+(g-1),M=(i+1)*f+g,w=(i+1)*(f-1)+g;m.push(v,x,w),m.push(x,M,w)}})()})(),this.setIndex(m),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new ba[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Oa=class extends qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let _=0;_<3;_++){let f=o.getX(p+_),g=o.getX(p+(_+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,g),tu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),tu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function tu(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var cg=Object.freeze({__proto__:null,BoxGeometry:pi,CapsuleGeometry:fa,CircleGeometry:ma,ConeGeometry:ga,CylinderGeometry:qr,DodecahedronGeometry:_a,EdgesGeometry:va,ExtrudeGeometry:Ea,IcosahedronGeometry:wa,LatheGeometry:Aa,OctahedronGeometry:Ra,PlaneGeometry:Kn,PolyhedronGeometry:qn,RingGeometry:Ca,ShapeGeometry:Ia,SphereGeometry:Pa,TetrahedronGeometry:La,TorusGeometry:Na,TorusKnotGeometry:Da,TubeGeometry:Ua,WireframeGeometry:Oa});var _i=class extends Ct{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pt=class extends _i{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Fa=class extends Ct{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ba=class extends Ct{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ia(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function Cp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ip(r){let e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return r[n]-r[i]}),t}function nu(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function ad(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var Nn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},za=class extends Nn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ll,endingEnd:ll}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cl:s=e,o=2*t-n;break;case hl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cl:a=e,c=2*n-t;break;case hl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),_=m*m,f=_*m,g=-d*f+2*d*_-d*m,v=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-p)*f+(1.5+p)*_+.5*m,M=p*f-p*_;for(let w=0;w!==o;++w)s[w]=g*a[h+w]+v*a[l+w]+x*a[c+w]+M*a[u+w];return s}},ka=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Ha=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},At=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ia(t,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ia(e.times,Array),values:ia(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new za(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ci:t=this.InterpolantFactoryMethodDiscrete;break;case hi:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ci;case this.InterpolantFactoryMethodLinear:return hi;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Cp(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ra,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};At.prototype.ValueTypeName="",At.prototype.TimeBufferType=Float32Array,At.prototype.ValueBufferType=Float32Array,At.prototype.DefaultInterpolation=hi;var Rn=class extends At{constructor(e,t,n){super(e,t,n)}};Rn.prototype.ValueTypeName="bool",Rn.prototype.ValueBufferType=Array,Rn.prototype.DefaultInterpolation=ci,Rn.prototype.InterpolantFactoryMethodLinear=void 0,Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends At{constructor(e,t,n,i){super(e,t,n,i)}};as.prototype.ValueTypeName="color";var cn=class extends At{constructor(e,t,n,i){super(e,t,n,i)}};cn.prototype.ValueTypeName="number";var Va=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Rt.slerpFlat(s,0,a,l-o,a,l,c);return s}},hn=class extends At{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Va(this.times,this.values,this.getValueSize(),e)}};hn.prototype.ValueTypeName="quaternion",hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends At{constructor(e,t,n){super(e,t,n)}};Cn.prototype.ValueTypeName="string",Cn.prototype.ValueBufferType=Array,Cn.prototype.DefaultInterpolation=ci,Cn.prototype.InterpolantFactoryMethodLinear=void 0,Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var un=class extends At{constructor(e,t,n,i){super(e,t,n,i)}};un.prototype.ValueTypeName="vector";var os=class{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=kt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Pp(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(At.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=Ip(c);c=nu(c,1,h),l=nu(l,1,h),i||c[0]!==0||(c.push(s),l.push(l[0])),a.push(new cn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,m){if(d.length!==0){let _=[],f=[];ad(d,_,f,p),_.length!==0&&m.push(new h(u,_,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let u=l[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(let m in d){let _=[],f=[];for(let g=0;g!==u[p].morphTargets.length;++g){let v=u[p];_.push(v.time),f.push(v.morphTarget===m?1:0)}i.push(new cn(".morphTargetInfluence["+m+"]",_,f))}c=d.length*a}else{let d=".bones["+t[h].name+"]";n(un,d+".position",u,"pos",i),n(hn,d+".quaternion",u,"rot",i),n(un,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Pp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cn;case"vector":case"vector2":case"vector3":case"vector4":return un;case"color":return as;case"quaternion":return hn;case"bool":case"boolean":return Rn;case"string":return Cn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(r.type);if(r.times===void 0){let t=[],n=[];ad(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var on={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Ga=class{constructor(e,t,n){let i=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},od=new Ga,dn=class{constructor(e){this.manager=e!==void 0?e:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};dn.DEFAULT_MATERIAL_NAME="__DEFAULT";var wn={},_l=class extends Error{constructor(e,t){super(e),this.response=t}},rr=class extends dn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=on.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wn[e]!==void 0)return void wn[e].push({onLoad:t,onProgress:n,onError:i});wn[e]=[],wn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=wn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0,_=0,f=new ReadableStream({start(g){(function v(){u.read().then(({done:x,value:M})=>{if(x)g.close();else{_+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let R=0,P=h.length;R<P;R++){let F=h[R];F.onProgress&&F.onProgress(w)}g.enqueue(M),v()}},x=>{g.error(x)})})()}});return new Response(f)}throw new _l(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{on.add(`file:${e}`,l);let h=wn[e];delete wn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete wn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vi=new WeakMap,Wa=class extends dn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=on.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Vi.get(a);u===void 0&&(u=[],Vi.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=ji("img");function c(){h(),t&&t(this);let u=Vi.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Vi.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),on.remove(`image:${e}`);let d=Vi.get(this)||[];for(let p=0;p<d.length;p++){let m=d[p];m.onError&&m.onError(u)}Vi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),on.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ls=class extends dn{constructor(e){super(e)}load(e,t,n,i){let s=new ct,a=new Wa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},sr=class extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var il=new ye,iu=new T,ru=new T,cs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zn,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(iu),ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ru),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vl=class extends cs{constructor(){super(new ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=2*ui*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},hs=class extends sr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new vl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},su=new ye,Ar=new T,rl=new T,xl=class extends cs{constructor(){super(new ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ar),rl.copy(n.position),rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rl),n.updateMatrixWorld(),i.makeTranslation(-Ar.x,-Ar.y,-Ar.z),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su,n.coordinateSystem,n.reversedDepth)}},us=class extends sr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xl}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Dn=class extends qi{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yl=class extends cs{constructor(){super(new Dn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new yl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Un=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var sl=new WeakMap,ps=class extends dn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=on.get(`image-bitmap:${e}`);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then(l=>{if(sl.has(a)!==!0)return t&&t(l),s.manager.itemEnd(e),l;i&&i(sl.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)}):(setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return on.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),sl.set(c,l),on.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});on.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hg=new ye,ug=new ye,dg=new ye;var Xa=class extends ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var pg=new T,fg=new Rt,mg=new T,gg=new T,_g=new T;var vg=new T,xg=new Rt,yg=new T,Mg=new T;var pc="\\[\\]\\.:\\/",Lp=new RegExp("["+pc+"]","g"),al="[^"+pc+"]",Np="[^"+pc.replace("\\.","")+"]",Dp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",al)+/(WCOD+)?/.source.replace("WCOD",Np)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al)+"$"),Up=["material","materials","bones","map"],Ze=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lp,"")}static parseTrackName(e){let t=Dp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Up.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ze.Composite=class{constructor(r,e,t){let n=t||Ze.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray],Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sg=new Float32Array(1);var bg=new ye;var Tg=new ee;var Eg=new T,wg=new T,Ag=new T,Rg=new T,Cg=new T,Ig=new T,Pg=new T;var Lg=new T;var Ng=new T,Dg=new ye,Ug=new ye;var Og=new T,Fg=new be,Bg=new be;var zg=new T,kg=new T,Hg=new T;var Vg=new T,Gg=new qi;var Wg=new gt;var Xg=new T;function fc(r,e,t,n){let i=(function(s){switch(s){case mn:case Al:return{byteLength:1,components:1};case cr:case Rl:case hr:return{byteLength:2,components:1};case io:case ro:return{byteLength:2,components:4};case yi:case no:case Ht:return{byteLength:4,components:1};case Cl:case Il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return r*e;case so:case ao:return r*e/i.components*i.byteLength;case 1030:case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case Vt:case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Pd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Fp(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];r.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var Le={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ae={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},gn={basic:{uniforms:bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new be(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:bt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:bt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new be(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:bt([ae.points,ae.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:bt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:bt([ae.common,ae.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:bt([ae.sprite,ae.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:bt([ae.common,ae.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:bt([ae.lights,ae.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};gn.physical={uniforms:bt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var uo={r:0,b:0,g:0},bi=new Qt,Bp=new ye;function zp(r,e,t,n,i,s,a){let o=new be(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function m(f){let g=f.isScene===!0?f.background:null;return g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g}function _(f,g){f.getRGB(uo,uc(r)),n.buffers.color.setClear(uo.r,uo.g,uo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(f,g=1){o.set(f),h=g,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,_(o,h)},render:function(f){let g=!1,v=m(f);v===null?_(o,h):v&&v.isColor&&(_(v,1),g=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(f,g){let v=m(g);v&&(v.isCubeTexture||v.mapping===gs)?(l===void 0&&(l=new lt(new pi(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Si(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),bi.copy(g.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(bi)),l.material.toneMapped=He.getTransfer(v.colorSpace)!==Ye,u===v&&d===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new lt(new Kn(2,2),new It({name:"BackgroundMaterial",uniforms:Si(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=He.getTransfer(v.colorSpace)!==Ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function kp(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=l(null),s=i,a=!1;function o(g){return r.bindVertexArray(g)}function c(g){return r.deleteVertexArray(g)}function l(g){let v=[],x=[],M=[];for(let w=0;w<t;w++)v[w]=0,x[w]=0,M[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:M,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,x=g.length;v<x;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let x=s.newAttributes,M=s.enabledAttributes,w=s.attributeDivisors;x[g]=1,M[g]===0&&(r.enableVertexAttribArray(g),M[g]=1),w[g]!==v&&(r.vertexAttribDivisor(g,v),w[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let x=0,M=v.length;x<M;x++)v[x]!==g[x]&&(r.disableVertexAttribArray(x),v[x]=0)}function m(g,v,x,M,w,R,P){P===!0?r.vertexAttribIPointer(g,v,x,w,R):r.vertexAttribPointer(g,v,x,M,w,R)}function _(){f(),a=!0,s!==i&&(s=i,o(s.object))}function f(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(g,v,x,M,w){let R=!1,P=(function(F,N,z){let H=z.wireframe===!0,O=n[F.id];O===void 0&&(O={},n[F.id]=O);let Z=O[N.id];Z===void 0&&(Z={},O[N.id]=Z);let V=Z[H];return V===void 0&&(V=l(r.createVertexArray()),Z[H]=V),V})(M,x,v);s!==P&&(s=P,o(s.object)),R=(function(F,N,z,H){let O=s.attributes,Z=N.attributes,V=0,Y=z.getAttributes();for(let q in Y)if(Y[q].location>=0){let te=O[q],K=Z[q];if(K===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),te===void 0||te.attribute!==K||K&&te.data!==K.data)return!0;V++}return s.attributesNum!==V||s.index!==H})(g,M,x,w),R&&(function(F,N,z,H){let O={},Z=N.attributes,V=0,Y=z.getAttributes();for(let q in Y)if(Y[q].location>=0){let te=Z[q];te===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(te=F.instanceColor));let K={};K.attribute=te,te&&te.data&&(K.data=te.data),O[q]=K,V++}s.attributes=O,s.attributesNum=V,s.index=H})(g,M,x,w),w!==null&&e.update(w,r.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,(function(F,N,z,H){h();let O=H.attributes,Z=z.getAttributes(),V=N.defaultAttributeValues;for(let Y in Z){let q=Z[Y];if(q.location>=0){let te=O[Y];if(te===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),te!==void 0){let K=te.normalized,de=te.itemSize,ve=e.get(te);if(ve===void 0)continue;let me=ve.buffer,Me=ve.type,re=ve.bytesPerElement,Q=Me===r.INT||Me===r.UNSIGNED_INT||te.gpuType===no;if(te.isInterleavedBufferAttribute){let $=te.data,le=$.stride,ce=te.offset;if($.isInstancedInterleavedBuffer){for(let b=0;b<q.locationSize;b++)d(q.location+b,$.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let b=0;b<q.locationSize;b++)u(q.location+b);r.bindBuffer(r.ARRAY_BUFFER,me);for(let b=0;b<q.locationSize;b++)m(q.location+b,de/q.locationSize,Me,K,le*re,(ce+de/q.locationSize*b)*re,Q)}else{if(te.isInstancedBufferAttribute){for(let $=0;$<q.locationSize;$++)d(q.location+$,te.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let $=0;$<q.locationSize;$++)u(q.location+$);r.bindBuffer(r.ARRAY_BUFFER,me);for(let $=0;$<q.locationSize;$++)m(q.location+$,de/q.locationSize,Me,K,de*re,de/q.locationSize*$*re,Q)}}else if(V!==void 0){let K=V[Y];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(q.location,K);break;case 3:r.vertexAttrib3fv(q.location,K);break;case 4:r.vertexAttrib4fv(q.location,K);break;default:r.vertexAttrib1fv(q.location,K)}}}}p()})(g,v,x,M),w!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:_,resetDefaultState:f,dispose:function(){_();for(let g in n){let v=n[g];for(let x in v){let M=v[x];for(let w in M)c(M[w].object),delete M[w];delete v[x]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let v=n[g.id];for(let x in v){let M=v[x];for(let w in M)c(M[w].object),delete M[w];delete v[x]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let v in n){let x=n[v];if(x[g.id]===void 0)continue;let M=x[g.id];for(let w in M)c(M[w].object),delete M[w];delete x[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Hp(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)i(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,n,1)}}}function Vp(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===Vt||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==mn&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Ht&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Gp(r){let e=this,t=null,n=0,i=!1,s=!1,a=new sn,o=new Ie,c={value:null,needsUpdate:!1};function l(h,u,d,p){let m=h!==null?h.length:0,_=null;if(m!==0){if(_=c.value,p!==!0||_===null){let f=d+4*m,g=u.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<f)&&(_=new Float32Array(f));for(let v=0,x=d;v!==m;++v,x+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(_,x),_[x+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,_=h.clipShadows,f=r.get(h);if(!i||p===null||p.length===0||s&&!_)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,v=4*g,x=f.clippingState||null;c.value=x,x=l(p,u,v,d);for(let M=0;M!==v;++M)x[M]=t[M];f.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}}}function Wp(r){let e=new WeakMap;function t(i,s){return s===$a?i.mapping=or:s===eo&&(i.mapping=vi),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===$a||s===eo){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new ha(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var ld=[.125,.215,.35,.446,.526,.582],ys=20,mc=new Dn,cd=new be,gc=null,_c=0,vc=0,xc=!1,Ei=(1+Math.sqrt(5))/2,fr=1/Ei,hd=[new T(-Ei,fr,0),new T(Ei,fr,0),new T(-fr,0,Ei),new T(fr,0,Ei),new T(0,Ei,-fr),new T(0,Ei,fr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Xp=new T,mo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=Xp}=s;gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gc,_c,vc),this._renderer.xr.enabled=xc,e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:hr,format:Vt,colorSpace:vt,depthBuffer:!1},i=ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+ld.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let m=1/p;d>a-4?m=ld[d-a+4-1]:d===0&&(m=0),l.push(m);let _=1/(p-2),f=-_,g=1+_,v=[f,f,g,f,g,g,f,f,g,g,f,g],x=6,M=6,w=3,R=2,P=1,F=new Float32Array(w*M*x),N=new Float32Array(R*M*x),z=new Float32Array(P*M*x);for(let O=0;O<x;O++){let Z=O%3*2/3-1,V=O>2?0:-1,Y=[Z,V,0,Z+2/3,V,0,Z+2/3,V+1,0,Z,V,0,Z+2/3,V+1,0,Z,V+1,0];F.set(Y,w*M*O),N.set(v,R*M*O);let q=[O,O,O,O,O,O];z.set(q,P*M*O)}let H=new qe;H.setAttribute("position",new ot(F,w)),H.setAttribute("uv",new ot(N,R)),H.setAttribute("faceIndex",new ot(z,P)),o.push(H),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(ys),h=new T(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,n,i,s){let a=new ft(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(cd),l.toneMapping=On,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));let d=new $t({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),p=new lt(new pi,d),m=!1,_=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,m=!0):(d.color.copy(cd),m=!0);for(let f=0;f<6;f++){let g=f%3;g===0?(a.up.set(0,o[f],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[f],s.y,s.z)):g===1?(a.up.set(0,0,o[f]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[f],s.z)):(a.up.set(0,o[f],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[f]));let v=this._cubeSize;po(i,g*v,f>2?v:0,v,v),l.setRenderTarget(i),m&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===or||e.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;po(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,mc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hd[(i-s-1)%hd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new lt(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,_=isFinite(s)?1+Math.floor(3*m):ys;_>ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let f=[],g=0;for(let M=0;M<ys;++M){let w=M/m,R=Math.exp(-w*w/2);f.push(R),M===0?g+=R:M<_&&(g+=2*R)}for(let M=0;M<f.length;M++)f[M]=f[M]/g;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let x=this._sizeLods[i];po(t,3*x*(i>v-4?i-v+4:0),4*(this._cubeSize-x),3*x,2*x),c.setRenderTarget(t),c.render(h,mc)}};function ud(r,e,t){let n=new ln(r,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function dd(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function pd(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jp(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===$a||s===eo,o=s===or||s===vi;if(a||o){let c=e.get(i),l=c!==void 0?c.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==l)return t===null&&(t=new mo(r)),c=a?t.fromEquirectangular(i,c):t.fromCubemap(i,c),c.texture.pmremVersion=i.pmremVersion,e.set(i,c),c.texture;if(c!==void 0)return c.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new mo(r)),c=a?t.fromEquirectangular(i):t.fromCubemap(i),c.texture.pmremVersion=i.pmremVersion,e.set(i,c),i.addEventListener("dispose",n),c.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Yp(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Yi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zp(r,e,t,n){let i={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete i[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let f=0,g=_.length;f<g;f+=3){let v=_[f+0],x=_[f+1],M=_[f+2];l.push(v,x,x,M,M,v)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let f=0,g=_.length/3-1;f<g;f+=3){let v=f+0,x=f+1,M=f+2;l.push(v,x,x,M,M,v)}}}let p=new(hc(l)?Fr:Or)(l,1);p.version=d;let m=s.get(c);m&&e.remove(m),s.set(c,p)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function qp(r,e,t){let n,i,s;function a(o,c,l){l!==0&&(r.drawElementsInstanced(n,c,i,o*s,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,c){r.drawElements(n,c,i,o*s),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,i,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,i,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function Kp(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Jp(r,e,t){let n=new WeakMap,i=new We;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let F=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),m===!0&&(v=3);let x=a.attributes.position.count*v,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*M*4*h),R=new Dr(w,x,M,h);R.type=Ht,R.needsUpdate=!0;let P=4*v;for(let N=0;N<h;N++){let z=_[N],H=f[N],O=g[N],Z=x*M*4*N;for(let V=0;V<z.count;V++){let Y=V*P;d===!0&&(i.fromBufferAttribute(z,V),w[Z+Y+0]=i.x,w[Z+Y+1]=i.y,w[Z+Y+2]=i.z,w[Z+Y+3]=0),p===!0&&(i.fromBufferAttribute(H,V),w[Z+Y+4]=i.x,w[Z+Y+5]=i.y,w[Z+Y+6]=i.z,w[Z+Y+7]=0),m===!0&&(i.fromBufferAttribute(O,V),w[Z+Y+8]=i.x,w[Z+Y+9]=i.y,w[Z+Y+10]=i.z,w[Z+Y+11]=O.itemSize===4?i.w:1)}}u={count:h,texture:R,size:new ee(x,M)},n.set(a,u),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Qp(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}var Ld=new ct,fd=new Yr(1,1),Nd=new Dr,Dd=new la,Ud=new Br,md=[],gd=[],_d=new Float32Array(16),vd=new Float32Array(9),xd=new Float32Array(4);function gr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=md[i];if(s===void 0&&(s=new Float32Array(i),md[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ht(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _o(r,e){let t=gd[e];t===void 0&&(t=new Int32Array(e),gd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function $p(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ef(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2fv(this.addr,e),ut(t,e)}}function tf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;r.uniform3fv(this.addr,e),ut(t,e)}}function nf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4fv(this.addr,e),ut(t,e)}}function rf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;xd.set(n),r.uniformMatrix2fv(this.addr,!1,xd),ut(t,n)}}function sf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;vd.set(n),r.uniformMatrix3fv(this.addr,!1,vd),ut(t,n)}}function af(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;_d.set(n),r.uniformMatrix4fv(this.addr,!1,_d),ut(t,n)}}function of(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2iv(this.addr,e),ut(t,e)}}function cf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;r.uniform3iv(this.addr,e),ut(t,e)}}function hf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4iv(this.addr,e),ut(t,e)}}function uf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function df(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2uiv(this.addr,e),ut(t,e)}}function pf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;r.uniform3uiv(this.addr,e),ut(t,e)}}function ff(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4uiv(this.addr,e),ut(t,e)}}function mf(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(fd.compareFunction=lc,s=fd):s=Ld,t.setTexture2D(e||s,i)}function gf(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dd,i)}function _f(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ud,i)}function vf(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nd,i)}function xf(r,e){r.uniform1fv(this.addr,e)}function yf(r,e){let t=gr(e,this.size,2);r.uniform2fv(this.addr,t)}function Mf(r,e){let t=gr(e,this.size,3);r.uniform3fv(this.addr,t)}function Sf(r,e){let t=gr(e,this.size,4);r.uniform4fv(this.addr,t)}function bf(r,e){let t=gr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Tf(r,e){let t=gr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ef(r,e){let t=gr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wf(r,e){r.uniform1iv(this.addr,e)}function Af(r,e){r.uniform2iv(this.addr,e)}function Rf(r,e){r.uniform3iv(this.addr,e)}function Cf(r,e){r.uniform4iv(this.addr,e)}function If(r,e){r.uniform1uiv(this.addr,e)}function Pf(r,e){r.uniform2uiv(this.addr,e)}function Lf(r,e){r.uniform3uiv(this.addr,e)}function Nf(r,e){r.uniform4uiv(this.addr,e)}function Df(r,e,t){let n=this.cache,i=e.length,s=_o(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ld,s[a])}function Uf(r,e,t){let n=this.cache,i=e.length,s=_o(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Dd,s[a])}function Of(r,e,t){let n=this.cache,i=e.length,s=_o(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ud,s[a])}function Ff(r,e,t){let n=this.cache,i=e.length,s=_o(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Nd,s[a])}var Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return $p;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return rf;case 35675:return sf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return hf;case 5125:return uf;case 36294:return df;case 36295:return pf;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return vf}})(t.type)}},Sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return xf;case 35664:return yf;case 35665:return Mf;case 35666:return Sf;case 35674:return bf;case 35675:return Tf;case 35676:return Ef;case 5124:case 35670:return wf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return If;case 36294:return Pf;case 36295:return Lf;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Ff}})(t.type)}},bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},yc=/(\w+)(\])?(\[|\.)?/g;function yd(r,e){r.seq.push(e),r.map[e.id]=e}function Bf(r,e,t){let n=r.name,i=n.length;for(yc.lastIndex=0;;){let s=yc.exec(n),a=yc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===i){yd(t,l===void 0?new Mc(o,r,e):new Sc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new bc(o),yd(t,h)),t=h}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Bf(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Md(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var zf=0,Sd=new Ie;function bd(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=(r.getShaderInfoLog(e)||"").trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===c?">":" "} ${m}: ${l[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function kf(r,e){let t=(function(n){He._getMatrix(Sd,He.workingColorSpace,n);let i=`mat3( ${Sd.elements.map(s=>s.toFixed(4))} )`;switch(He.getTransfer(n)){case Lr:return[i,"LinearTransferOETF"];case Ye:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hf(r,e){let t;switch(e){case Lu:t="Linear";break;case Nu:t="Reinhard";break;case Du:t="Cineon";break;case Uu:t="ACESFilmic";break;case Fu:t="AgX";break;case Bu:t="Neutral";break;case Ou:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fo=new T;function Vf(){return He.getLuminanceCoefficients(fo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${fo.x.toFixed(4)}, ${fo.y.toFixed(4)}, ${fo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ms(r){return r!==""}function Td(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ed(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(r){return r.replace(Gf,Xf)}var Wf=new Map;function Xf(r,e){let t=Le[e];if(t===void 0){let n=Wf.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Tc(t)}var jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(r){return r.replace(jf,Yf)}function Yf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ad(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zf(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(H){let O="SHADOWMAP_TYPE_BASIC";return H.shadowMapType===Sl?O="SHADOWMAP_TYPE_PCF":H.shadowMapType===lu?O="SHADOWMAP_TYPE_PCF_SOFT":H.shadowMapType===pn&&(O="SHADOWMAP_TYPE_VSM"),O})(t),l=(function(H){let O="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case or:case vi:O="ENVMAP_TYPE_CUBE";break;case gs:O="ENVMAP_TYPE_CUBE_UV"}return O})(t),h=(function(H){let O="ENVMAP_MODE_REFLECTION";return H.envMap&&H.envMapMode===vi&&(O="ENVMAP_MODE_REFRACTION"),O})(t),u=(function(H){let O="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case Cu:O="ENVMAP_BLENDING_MULTIPLY";break;case Iu:O="ENVMAP_BLENDING_MIX";break;case Pu:O="ENVMAP_BLENDING_ADD"}return O})(t),d=(function(H){let O=H.envMapCubeUVHeight;if(O===null)return null;let Z=Math.log2(O)-2,V=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:V,maxMip:Z}})(t),p=(function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)})(t),m=(function(H){let O=[];for(let Z in H){let V=H[Z];V!==!1&&O.push("#define "+Z+" "+V)}return O.join(`
`)})(s),_=i.createProgram(),f,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ms).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ms).join(`
`),g.length>0&&(g+=`
`)):(f=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),g=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Le.tonemapping_pars_fragment:"",t.toneMapping!==On?Hf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,kf("linearToOutputTexel",t.outputColorSpace),Vf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Tc(a),a=Td(a,t),a=Ed(a,t),o=Tc(o),o=Td(o,t),o=Ed(o,t),a=wd(a),o=wd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=v+f+a,M=v+g+o,w=Md(i,i.VERTEX_SHADER,x),R=Md(i,i.FRAGMENT_SHADER,M);function P(H){if(r.debug.checkShaderErrors){let O=i.getProgramInfoLog(_)||"",Z=i.getShaderInfoLog(w)||"",V=i.getShaderInfoLog(R)||"",Y=O.trim(),q=Z.trim(),te=V.trim(),K=!0,de=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,R);else{let ve=bd(i,w,"vertex"),me=bd(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+ve+`
`+me)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):q!==""&&te!==""||(de=!1);de&&(H.diagnostics={runnable:K,programLog:Y,vertexShader:{log:q,prefix:f},fragmentShader:{log:te,prefix:g}})}i.deleteShader(w),i.deleteShader(R),F=new mr(i,_),N=(function(O,Z){let V={},Y=O.getProgramParameter(Z,O.ACTIVE_ATTRIBUTES);for(let q=0;q<Y;q++){let te=O.getActiveAttrib(Z,q),K=te.name,de=1;te.type===O.FLOAT_MAT2&&(de=2),te.type===O.FLOAT_MAT3&&(de=3),te.type===O.FLOAT_MAT4&&(de=4),V[K]={type:te.type,location:O.getAttribLocation(Z,K),locationSize:de}}return V})(i,_)}let F,N;i.attachShader(_,w),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),this.getUniforms=function(){return F===void 0&&P(this),F},this.getAttributes=function(){return N===void 0&&P(this),N};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(_,37297)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}var qf=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wc(e),t.set(e,n)),n}},wc=class{constructor(e){this.id=qf++,this.code=e,this.usedTimes=0}};function Kf(r,e,t,n,i,s,a){let o=new Ur,c=new Ec,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(f){return l.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,g,v,x,M){let w=x.fog,R=M.geometry,P=f.isMeshStandardMaterial?x.environment:null,F=(f.isMeshStandardMaterial?t:e).get(f.envMap||P),N=F&&F.mapping===gs?F.image.height:null,z=m[f.type];f.precision!==null&&(p=i.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let H=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,O=H!==void 0?H.length:0,Z,V,Y,q,te=0;if(R.morphAttributes.position!==void 0&&(te=1),R.morphAttributes.normal!==void 0&&(te=2),R.morphAttributes.color!==void 0&&(te=3),z){let yt=gn[z];Z=yt.vertexShader,V=yt.fragmentShader}else Z=f.vertexShader,V=f.fragmentShader,c.update(f),Y=c.getVertexShaderID(f),q=c.getFragmentShaderID(f);let K=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),ve=M.isInstancedMesh===!0,me=M.isBatchedMesh===!0,Me=!!f.map,re=!!f.matcap,Q=!!F,$=!!f.aoMap,le=!!f.lightMap,ce=!!f.bumpMap,b=!!f.normalMap,S=!!f.displacementMap,U=!!f.emissiveMap,I=!!f.metalnessMap,y=!!f.roughnessMap,A=f.anisotropy>0,L=f.clearcoat>0,C=f.dispersion>0,X=f.iridescence>0,B=f.sheen>0,k=f.transmission>0,ne=A&&!!f.anisotropyMap,oe=L&&!!f.clearcoatMap,se=L&&!!f.clearcoatNormalMap,pe=L&&!!f.clearcoatRoughnessMap,_e=X&&!!f.iridescenceMap,Se=X&&!!f.iridescenceThicknessMap,Fe=B&&!!f.sheenColorMap,Ve=B&&!!f.sheenRoughnessMap,Ge=!!f.specularMap,he=!!f.specularColorMap,Ee=!!f.specularIntensityMap,Ue=k&&!!f.transmissionMap,xt=k&&!!f.thicknessMap,ge=!!f.gradientMap,Xe=!!f.alphaMap,Be=f.alphaTest>0,Wt=!!f.alphaHash,xn=!!f.extensions,D=On;f.toneMapped&&(K!==null&&K.isXRRenderTarget!==!0||(D=r.toneMapping));let dt={shaderID:z,shaderType:f.type,shaderName:f.name,vertexShader:Z,fragmentShader:V,defines:f.defines,customVertexShaderID:Y,customFragmentShaderID:q,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:me,batchingColor:me&&M._colorsTexture!==null,instancing:ve,instancingColor:ve&&M.instanceColor!==null,instancingMorph:ve&&M.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:vt,alphaToCoverage:!!f.alphaToCoverage,map:Me,matcap:re,envMap:Q,envMapMode:Q&&F.mapping,envMapCubeUVHeight:N,aoMap:$,lightMap:le,bumpMap:ce,normalMap:b,displacementMap:d&&S,emissiveMap:U,normalMapObjectSpace:b&&f.normalMapType===Xu,normalMapTangentSpace:b&&f.normalMapType===Wu,metalnessMap:I,roughnessMap:y,anisotropy:A,anisotropyMap:ne,clearcoat:L,clearcoatMap:oe,clearcoatNormalMap:se,clearcoatRoughnessMap:pe,dispersion:C,iridescence:X,iridescenceMap:_e,iridescenceThicknessMap:Se,sheen:B,sheenColorMap:Fe,sheenRoughnessMap:Ve,specularMap:Ge,specularColorMap:he,specularIntensityMap:Ee,transmission:k,transmissionMap:Ue,thicknessMap:xt,gradientMap:ge,opaque:f.transparent===!1&&f.blending===fs&&f.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Be,alphaHash:Wt,combine:f.combine,mapUv:Me&&_(f.map.channel),aoMapUv:$&&_(f.aoMap.channel),lightMapUv:le&&_(f.lightMap.channel),bumpMapUv:ce&&_(f.bumpMap.channel),normalMapUv:b&&_(f.normalMap.channel),displacementMapUv:S&&_(f.displacementMap.channel),emissiveMapUv:U&&_(f.emissiveMap.channel),metalnessMapUv:I&&_(f.metalnessMap.channel),roughnessMapUv:y&&_(f.roughnessMap.channel),anisotropyMapUv:ne&&_(f.anisotropyMap.channel),clearcoatMapUv:oe&&_(f.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(f.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(f.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&_(f.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(f.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(f.sheenRoughnessMap.channel),specularMapUv:Ge&&_(f.specularMap.channel),specularColorMapUv:he&&_(f.specularColorMap.channel),specularIntensityMapUv:Ee&&_(f.specularIntensityMap.channel),transmissionMapUv:Ue&&_(f.transmissionMap.channel),thicknessMapUv:xt&&_(f.thicknessMap.channel),alphaMapUv:Xe&&_(f.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(b||A),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!R.attributes.uv&&(Me||Xe),fog:!!w,useFog:f.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:f.flatShading===!0&&f.wireframe===!1,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:M.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:te,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:D,decodeVideoTexture:Me&&f.map.isVideoTexture===!0&&He.getTransfer(f.map.colorSpace)===Ye,decodeVideoTextureEmissive:U&&f.emissiveMap.isVideoTexture===!0&&He.getTransfer(f.emissiveMap.colorSpace)===Ye,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Lt,flipSided:f.side===Ft,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:xn&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xn&&f.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt},getProgramCacheKey:function(f){let g=[];if(f.shaderID?g.push(f.shaderID):(g.push(f.customVertexShaderID),g.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)g.push(v),g.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(g,f),(function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,f),g.push(r.outputColorSpace)),g.push(f.customProgramCacheKey),g.join()},getUniforms:function(f){let g=m[f.type],v;if(g){let x=gn[g];v=nd.clone(x.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,g){let v;for(let x=0,M=h.length;x<M;x++){let w=h[x];if(w.cacheKey===g){v=w,++v.usedTimes;break}}return v===void 0&&(v=new Zf(r,g,f,s),h.push(v)),v},releaseProgram:function(f){if(--f.usedTimes===0){let g=h.indexOf(f);h[g]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){c.remove(f)},programs:h,dispose:function(){c.dispose()}}}function Jf(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Qf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Rd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Cd(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,c,l,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Qf),n.length>1&&n.sort(o||Rd),i.length>1&&i.sort(o||Rd)}}}function $f(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Cd,r.set(e,[i])):t>=n.length?(i=new Cd,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function em(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new be};break;case"SpotLight":t={position:new T,direction:new T,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new T,halfWidth:new T,halfHeight:new T}}return r[e.id]=t,t}}}var tm=0;function nm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function im(r){let e=new em,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new T);let i=new T,s=new ye,a=new ye;return{setup:function(o){let c=0,l=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let u=0,d=0,p=0,m=0,_=0,f=0,g=0,v=0,x=0,M=0,w=0;o.sort(nm);for(let P=0,F=o.length;P<F;P++){let N=o[P],z=N.color,H=N.intensity,O=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)c+=z.r*H,l+=z.g*H,h+=z.b*H;else if(N.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],H);w++}else if(N.isDirectionalLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Y=N.shadow,q=t.get(N);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,n.directionalShadow[u]=q,n.directionalShadowMap[u]=Z,n.directionalShadowMatrix[u]=N.shadow.matrix,f++}n.directional[u]=V,u++}else if(N.isSpotLight){let V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(z).multiplyScalar(H),V.distance=O,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[p]=V;let Y=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,Y.updateMatrices(N),N.castShadow&&M++),n.spotLightMatrix[p]=Y.matrix,N.castShadow){let q=t.get(N);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,n.spotShadow[p]=q,n.spotShadowMap[p]=Z,v++}p++}else if(N.isRectAreaLight){let V=e.get(N);V.color.copy(z).multiplyScalar(H),V.halfWidth.set(.5*N.width,0,0),V.halfHeight.set(0,.5*N.height,0),n.rectArea[m]=V,m++}else if(N.isPointLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let Y=N.shadow,q=t.get(N);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,n.pointShadow[d]=q,n.pointShadowMap[d]=Z,n.pointShadowMatrix[d]=N.shadow.matrix,g++}n.point[d]=V,d++}else if(N.isHemisphereLight){let V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(H),V.groundColor.copy(N.groundColor).multiplyScalar(H),n.hemi[_]=V,_++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let R=n.hash;R.directionalLength===u&&R.pointLength===d&&R.spotLength===p&&R.rectAreaLength===m&&R.hemiLength===_&&R.numDirectionalShadows===f&&R.numPointShadows===g&&R.numSpotShadows===v&&R.numSpotMaps===x&&R.numLightProbes===w||(n.directional.length=u,n.spot.length=p,n.rectArea.length=m,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=f,n.directionalShadowMap.length=f,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=f,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,R.directionalLength=u,R.pointLength=d,R.spotLength=p,R.rectAreaLength=m,R.hemiLength=_,R.numDirectionalShadows=f,R.numPointShadows=g,R.numSpotShadows=v,R.numSpotMaps=x,R.numLightProbes=w,n.version=tm++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,m=c.matrixWorldInverse;for(let _=0,f=o.length;_<f;_++){let g=o[_];if(g.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),l++}else if(g.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(g.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(m),p++}}},state:n}}function Id(r){let e=new im(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function rm(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new Id(r),e.set(t,[s])):n>=i.length?(s=new Id(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}function sm(r,e,t){let n=new Zn,i=new ee,s=new ee,a=new We,o=new Fa({depthPacking:Gu}),c=new Ba,l={},h=t.maxTextureSize,u={[Jn]:Ft,[Ft]:Jn,[Lt]:Lt},d=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new qe;m.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new lt(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl;let g=this.type;function v(R,P){let F=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ln(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(P,null,F,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(P,null,F,p,_,null)}function x(R,P,F,N){let z=null,H=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)z=H;else if(z=F.isPointLight===!0?c:o,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=z.uuid,Z=P.uuid,V=l[O];V===void 0&&(V={},l[O]=V);let Y=V[Z];Y===void 0&&(Y=z.clone(),V[Z]=Y,P.addEventListener("dispose",w)),z=Y}return z.visible=P.visible,z.wireframe=P.wireframe,z.side=N===pn?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:u[P.side],z.alphaMap=P.alphaMap,z.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,z.map=P.map,z.clipShadows=P.clipShadows,z.clippingPlanes=P.clippingPlanes,z.clipIntersection=P.clipIntersection,z.displacementMap=P.displacementMap,z.displacementScale=P.displacementScale,z.displacementBias=P.displacementBias,z.wireframeLinewidth=P.wireframeLinewidth,z.linewidth=P.linewidth,F.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(r.properties.get(z).light=F),z}function M(R,P,F,N,z){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&z===pn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let O=e.update(R),Z=R.material;if(Array.isArray(Z)){let V=O.groups;for(let Y=0,q=V.length;Y<q;Y++){let te=V[Y],K=Z[te.materialIndex];if(K&&K.visible){let de=x(R,K,N,z);R.onBeforeShadow(r,R,P,F,O,de,te),r.renderBufferDirect(F,null,O,de,R,te),R.onAfterShadow(r,R,P,F,O,de,te)}}}else if(Z.visible){let V=x(R,Z,N,z);R.onBeforeShadow(r,R,P,F,O,V,null),r.renderBufferDirect(F,null,O,V,R,null),R.onAfterShadow(r,R,P,F,O,V,null)}}let H=R.children;for(let O=0,Z=H.length;O<Z;O++)M(H[O],P,F,N,z)}function w(R){R.target.removeEventListener("dispose",w);for(let P in l){let F=l[P],N=R.target.uuid;N in F&&(F[N].dispose(),delete F[N])}}this.render=function(R,P,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;let N=r.getRenderTarget(),z=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Qn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Z=g!==pn&&this.type===pn,V=g===pn&&this.type!==pn;for(let Y=0,q=R.length;Y<q;Y++){let te=R[Y],K=te.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let de=K.getFrameExtents();if(i.multiply(de),s.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/de.x),i.x=s.x*de.x,K.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/de.y),i.y=s.y*de.y,K.mapSize.y=s.y)),K.map===null||Z===!0||V===!0){let me=this.type!==pn?{minFilter:Ut,magFilter:Ut}:{};K.map!==null&&K.map.dispose(),K.map=new ln(i.x,i.y,me),K.map.texture.name=te.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();let ve=K.getViewportCount();for(let me=0;me<ve;me++){let Me=K.getViewport(me);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),O.viewport(a),K.updateMatrices(te,me),n=K.getFrustum(),M(P,F,K.camera,te,this.type)}K.isPointLightShadow!==!0&&this.type===pn&&v(K,F),K.needsUpdate=!1}g=this.type,f.needsUpdate=!1,r.setRenderTarget(N,z,H)}}var am={[ja]:Ya,[Za]:Ja,[qa]:Qa,[ms]:Ka,[Ya]:ja,[Ja]:Za,[Qa]:qa,[Ka]:ms};function om(r,e){let t=new function(){let y=!1,A=new We,L=null,C=new We(0,0,0,0);return{setMask:function(X){L===X||y||(r.colorMask(X,X,X,X),L=X)},setLocked:function(X){y=X},setClear:function(X,B,k,ne,oe){oe===!0&&(X*=ne,B*=ne,k*=ne),A.set(X,B,k,ne),C.equals(A)===!1&&(r.clearColor(X,B,k,ne),C.copy(A))},reset:function(){y=!1,L=null,C.set(-1,0,0,0)}}},n=new function(){let y=!1,A=!1,L=null,C=null,X=null;return{setReversed:function(B){if(A!==B){let k=e.get("EXT_clip_control");B?k.clipControlEXT(k.LOWER_LEFT_EXT,k.ZERO_TO_ONE_EXT):k.clipControlEXT(k.LOWER_LEFT_EXT,k.NEGATIVE_ONE_TO_ONE_EXT),A=B;let ne=X;X=null,this.setClear(ne)}},getReversed:function(){return A},setTest:function(B){B?Q(r.DEPTH_TEST):$(r.DEPTH_TEST)},setMask:function(B){L===B||y||(r.depthMask(B),L=B)},setFunc:function(B){if(A&&(B=am[B]),C!==B){switch(B){case ja:r.depthFunc(r.NEVER);break;case Ya:r.depthFunc(r.ALWAYS);break;case Za:r.depthFunc(r.LESS);break;case ms:r.depthFunc(r.LEQUAL);break;case qa:r.depthFunc(r.EQUAL);break;case Ka:r.depthFunc(r.GEQUAL);break;case Ja:r.depthFunc(r.GREATER);break;case Qa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}C=B}},setLocked:function(B){y=B},setClear:function(B){X!==B&&(A&&(B=1-B),r.clearDepth(B),X=B)},reset:function(){y=!1,L=null,C=null,X=null,A=!1}}},i=new function(){let y=!1,A=null,L=null,C=null,X=null,B=null,k=null,ne=null,oe=null;return{setTest:function(se){y||(se?Q(r.STENCIL_TEST):$(r.STENCIL_TEST))},setMask:function(se){A===se||y||(r.stencilMask(se),A=se)},setFunc:function(se,pe,_e){L===se&&C===pe&&X===_e||(r.stencilFunc(se,pe,_e),L=se,C=pe,X=_e)},setOp:function(se,pe,_e){B===se&&k===pe&&ne===_e||(r.stencilOp(se,pe,_e),B=se,k=pe,ne=_e)},setLocked:function(se){y=se},setClear:function(se){oe!==se&&(r.clearStencil(se),oe=se)},reset:function(){y=!1,A=null,L=null,C=null,X=null,B=null,k=null,ne=null,oe=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,m=null,_=null,f=null,g=null,v=null,x=null,M=new be(0,0,0),w=0,R=!1,P=null,F=null,N=null,z=null,H=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,V=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=V>=2);let q=null,te={},K=r.getParameter(r.SCISSOR_BOX),de=r.getParameter(r.VIEWPORT),ve=new We().fromArray(K),me=new We().fromArray(de);function Me(y,A,L,C){let X=new Uint8Array(4),B=r.createTexture();r.bindTexture(y,B),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let k=0;k<L;k++)y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?r.texImage3D(A,0,r.RGBA,1,1,C,0,r.RGBA,r.UNSIGNED_BYTE,X):r.texImage2D(A+k,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,X);return B}let re={};function Q(y){o[y]!==!0&&(r.enable(y),o[y]=!0)}function $(y){o[y]!==!1&&(r.disable(y),o[y]=!1)}re[r.TEXTURE_2D]=Me(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=Me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=Me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=Me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),Q(r.DEPTH_TEST),n.setFunc(ms),S(!1),U(Ml),Q(r.CULL_FACE),b(Qn);let le={[ar]:r.FUNC_ADD,[hu]:r.FUNC_SUBTRACT,[uu]:r.FUNC_REVERSE_SUBTRACT};le[du]=r.MIN,le[pu]=r.MAX;let ce={[fu]:r.ZERO,[mu]:r.ONE,[gu]:r.SRC_COLOR,[vu]:r.SRC_ALPHA,[Tu]:r.SRC_ALPHA_SATURATE,[Su]:r.DST_COLOR,[yu]:r.DST_ALPHA,[_u]:r.ONE_MINUS_SRC_COLOR,[xu]:r.ONE_MINUS_SRC_ALPHA,[bu]:r.ONE_MINUS_DST_COLOR,[Mu]:r.ONE_MINUS_DST_ALPHA,[Eu]:r.CONSTANT_COLOR,[wu]:r.ONE_MINUS_CONSTANT_COLOR,[Au]:r.CONSTANT_ALPHA,[Ru]:r.ONE_MINUS_CONSTANT_ALPHA};function b(y,A,L,C,X,B,k,ne,oe,se){if(y!==Qn){if(d===!1&&(Q(r.BLEND),d=!0),y===cu)X=X||A,B=B||L,k=k||C,A===m&&X===g||(r.blendEquationSeparate(le[A],le[X]),m=A,g=X),L===_&&C===f&&B===v&&k===x||(r.blendFuncSeparate(ce[L],ce[C],ce[B],ce[k]),_=L,f=C,v=B,x=k),ne.equals(M)!==!1&&oe===w||(r.blendColor(ne.r,ne.g,ne.b,oe),M.copy(ne),w=oe),p=y,R=!1;else if(y!==p||se!==R){if(m===ar&&g===ar||(r.blendEquation(r.FUNC_ADD),m=ar,g=ar),se)switch(y){case fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bl:r.blendFunc(r.ONE,r.ONE);break;case Tl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case El:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}else switch(y){case fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case El:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}_=null,f=null,v=null,x=null,M.set(0,0,0),w=0,p=y,R=se}}else d===!0&&($(r.BLEND),d=!1)}function S(y){P!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),P=y)}function U(y){y!==au?(Q(r.CULL_FACE),y!==F&&(y===Ml?r.cullFace(r.BACK):y===ou?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$(r.CULL_FACE),F=y}function I(y,A,L){y?(Q(r.POLYGON_OFFSET_FILL),z===A&&H===L||(r.polygonOffset(A,L),z=A,H=L)):$(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:Q,disable:$,bindFramebuffer:function(y,A){return c[y]!==A&&(r.bindFramebuffer(y,A),c[y]=A,y===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=A),y===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=A),!0)},drawBuffers:function(y,A){let L=h,C=!1;if(y){L=l.get(A),L===void 0&&(L=[],l.set(A,L));let X=y.textures;if(L.length!==X.length||L[0]!==r.COLOR_ATTACHMENT0){for(let B=0,k=X.length;B<k;B++)L[B]=r.COLOR_ATTACHMENT0+B;L.length=X.length,C=!0}}else L[0]!==r.BACK&&(L[0]=r.BACK,C=!0);C&&r.drawBuffers(L)},useProgram:function(y){return u!==y&&(r.useProgram(y),u=y,!0)},setBlending:b,setMaterial:function(y,A){y.side===Lt?$(r.CULL_FACE):Q(r.CULL_FACE);let L=y.side===Ft;A&&(L=!L),S(L),y.blending===fs&&y.transparent===!1?b(Qn):b(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),n.setFunc(y.depthFunc),n.setTest(y.depthTest),n.setMask(y.depthWrite),t.setMask(y.colorWrite);let C=y.stencilWrite;i.setTest(C),C&&(i.setMask(y.stencilWriteMask),i.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),i.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),I(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):$(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:U,setLineWidth:function(y){y!==N&&(Z&&r.lineWidth(y),N=y)},setPolygonOffset:I,setScissorTest:function(y){y?Q(r.SCISSOR_TEST):$(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+O-1),q!==y&&(r.activeTexture(y),q=y)},bindTexture:function(y,A,L){L===void 0&&(L=q===null?r.TEXTURE0+O-1:q);let C=te[L];C===void 0&&(C={type:void 0,texture:void 0},te[L]=C),C.type===y&&C.texture===A||(q!==L&&(r.activeTexture(L),q=L),r.bindTexture(y,A||re[y]),C.type=y,C.texture=A)},unbindTexture:function(){let y=te[q];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},updateUBOMapping:function(y,A){let L=a.get(A);L===void 0&&(L=new WeakMap,a.set(A,L));let C=L.get(y);C===void 0&&(C=r.getUniformBlockIndex(A,y.name),L.set(y,C))},uniformBlockBinding:function(y,A){let L=a.get(A).get(y);s.get(A)!==L&&(r.uniformBlockBinding(A,L,y.__bindingPointIndex),s.set(A,L))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},scissor:function(y){ve.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),ve.copy(y))},viewport:function(y){me.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),me.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},q=null,te={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,m=null,_=null,f=null,g=null,v=null,x=null,M=new be(0,0,0),w=0,R=!1,P=null,F=null,N=null,z=null,H=null,ve.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function lm(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ee,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,S){return p?new OffscreenCanvas(b,S):ji("canvas")}function _(b,S,U){let I=1,y=ce(b);if((y.width>U||y.height>U)&&(I=U/Math.max(y.width,y.height)),I<1){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let A=Math.floor(I*y.width),L=Math.floor(I*y.height);u===void 0&&(u=m(A,L));let C=S?m(A,L):u;return C.width=A,C.height=L,C.getContext("2d").drawImage(b,0,0,A,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+A+"x"+L+")."),C}return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),b}return b}function f(b){return b.generateMipmaps}function g(b){r.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(b,S,U,I,y=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let A=S;if(S===r.RED&&(U===r.FLOAT&&(A=r.R32F),U===r.HALF_FLOAT&&(A=r.R16F),U===r.UNSIGNED_BYTE&&(A=r.R8)),S===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(A=r.R8UI),U===r.UNSIGNED_SHORT&&(A=r.R16UI),U===r.UNSIGNED_INT&&(A=r.R32UI),U===r.BYTE&&(A=r.R8I),U===r.SHORT&&(A=r.R16I),U===r.INT&&(A=r.R32I)),S===r.RG&&(U===r.FLOAT&&(A=r.RG32F),U===r.HALF_FLOAT&&(A=r.RG16F),U===r.UNSIGNED_BYTE&&(A=r.RG8)),S===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(A=r.RG8UI),U===r.UNSIGNED_SHORT&&(A=r.RG16UI),U===r.UNSIGNED_INT&&(A=r.RG32UI),U===r.BYTE&&(A=r.RG8I),U===r.SHORT&&(A=r.RG16I),U===r.INT&&(A=r.RG32I)),S===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(A=r.RGB8UI),U===r.UNSIGNED_SHORT&&(A=r.RGB16UI),U===r.UNSIGNED_INT&&(A=r.RGB32UI),U===r.BYTE&&(A=r.RGB8I),U===r.SHORT&&(A=r.RGB16I),U===r.INT&&(A=r.RGB32I)),S===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(A=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(A=r.RGBA16UI),U===r.UNSIGNED_INT&&(A=r.RGBA32UI),U===r.BYTE&&(A=r.RGBA8I),U===r.SHORT&&(A=r.RGBA16I),U===r.INT&&(A=r.RGBA32I)),S===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(A=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(A=r.R11F_G11F_B10F)),S===r.RGBA){let L=y?Lr:He.getTransfer(I);U===r.FLOAT&&(A=r.RGBA32F),U===r.HALF_FLOAT&&(A=r.RGBA16F),U===r.UNSIGNED_BYTE&&(A=L===Ye?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(A=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(A=r.RGB5_A1)}return A!==r.R16F&&A!==r.R32F&&A!==r.RG16F&&A!==r.RG32F&&A!==r.RGBA16F&&A!==r.RGBA32F||e.get("EXT_color_buffer_float"),A}function M(b,S){let U;return b?S===null||S===yi||S===ur?U=r.DEPTH24_STENCIL8:S===Ht?U=r.DEPTH32F_STENCIL8:S===cr&&(U=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===yi||S===ur?U=r.DEPTH_COMPONENT24:S===Ht?U=r.DEPTH_COMPONENT32F:S===cr&&(U=r.DEPTH_COMPONENT16),U}function w(b,S){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ut&&b.minFilter!==mt?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function R(b){let S=b.target;S.removeEventListener("dispose",R),(function(U){let I=n.get(U);if(I.__webglInit===void 0)return;let y=U.source,A=d.get(y);if(A){let L=A[I.__cacheKey];L.usedTimes--,L.usedTimes===0&&F(U),Object.keys(A).length===0&&d.delete(y)}n.remove(U)})(S),S.isVideoTexture&&h.delete(S)}function P(b){let S=b.target;S.removeEventListener("dispose",P),(function(U){let I=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(I.__webglFramebuffer[A]))for(let L=0;L<I.__webglFramebuffer[A].length;L++)r.deleteFramebuffer(I.__webglFramebuffer[A][L]);else r.deleteFramebuffer(I.__webglFramebuffer[A]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[A])}else{if(Array.isArray(I.__webglFramebuffer))for(let A=0;A<I.__webglFramebuffer.length;A++)r.deleteFramebuffer(I.__webglFramebuffer[A]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let A=0;A<I.__webglColorRenderbuffer.length;A++)I.__webglColorRenderbuffer[A]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[A]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let y=U.textures;for(let A=0,L=y.length;A<L;A++){let C=n.get(y[A]);C.__webglTexture&&(r.deleteTexture(C.__webglTexture),a.memory.textures--),n.remove(y[A])}n.remove(U)})(S)}function F(b){let S=n.get(b);r.deleteTexture(S.__webglTexture);let U=b.source;delete d.get(U)[S.__cacheKey],a.memory.textures--}let N=0;function z(b,S){let U=n.get(b);if(b.isVideoTexture&&(function(I){let y=a.render.frame;h.get(I)!==y&&(h.set(I,y),I.update())})(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){let I=b.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(I.complete!==!1)return void te(U,b,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+S)}let H={[Xn]:r.REPEAT,[jn]:r.CLAMP_TO_EDGE,[Xi]:r.MIRRORED_REPEAT},O={[Ut]:r.NEAREST,[to]:r.NEAREST_MIPMAP_NEAREST,[xi]:r.NEAREST_MIPMAP_LINEAR,[mt]:r.LINEAR,[lr]:r.LINEAR_MIPMAP_NEAREST,[fn]:r.LINEAR_MIPMAP_LINEAR},Z={[ju]:r.NEVER,[Qu]:r.ALWAYS,[Yu]:r.LESS,[lc]:r.LEQUAL,[Zu]:r.EQUAL,[Ju]:r.GEQUAL,[qu]:r.GREATER,[Ku]:r.NOTEQUAL};function V(b,S){if(S.type!==Ht||e.has("OES_texture_float_linear")!==!1||S.magFilter!==mt&&S.magFilter!==lr&&S.magFilter!==xi&&S.magFilter!==fn&&S.minFilter!==mt&&S.minFilter!==lr&&S.minFilter!==xi&&S.minFilter!==fn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,H[S.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,H[S.wrapT]),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,H[S.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,O[S.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,O[S.minFilter]),S.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ut||S.minFilter!==xi&&S.minFilter!==fn||S.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Y(b,S){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",R));let I=S.source,y=d.get(I);y===void 0&&(y={},d.set(I,y));let A=(function(L){let C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()})(S);if(A!==b.__cacheKey){y[A]===void 0&&(y[A]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),y[A].usedTimes++;let L=y[b.__cacheKey];L!==void 0&&(y[b.__cacheKey].usedTimes--,L.usedTimes===0&&F(S)),b.__cacheKey=A,b.__webglTexture=y[A].texture}return U}function q(b,S,U){return Math.floor(Math.floor(b/U)/S)}function te(b,S,U){let I=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(I=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(I=r.TEXTURE_3D);let y=Y(b,S),A=S.source;t.bindTexture(I,b.__webglTexture,r.TEXTURE0+U);let L=n.get(A);if(A.version!==L.__version||y===!0){t.activeTexture(r.TEXTURE0+U);let C=He.getPrimaries(He.workingColorSpace),X=S.colorSpace===Mi?null:He.getPrimaries(S.colorSpace),B=S.colorSpace===Mi||C===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let k=_(S.image,!1,i.maxTextureSize);k=le(S,k);let ne=s.convert(S.format,S.colorSpace),oe=s.convert(S.type),se,pe=x(S.internalFormat,ne,oe,S.colorSpace,S.isVideoTexture);V(I,S);let _e=S.mipmaps,Se=S.isVideoTexture!==!0,Fe=L.__version===void 0||y===!0,Ve=A.dataReady,Ge=w(S,k);if(S.isDepthTexture)pe=M(S.format===vs,S.type),Fe&&(Se?t.texStorage2D(r.TEXTURE_2D,1,pe,k.width,k.height):t.texImage2D(r.TEXTURE_2D,0,pe,k.width,k.height,0,ne,oe,null));else if(S.isDataTexture)if(_e.length>0){Se&&Fe&&t.texStorage2D(r.TEXTURE_2D,Ge,pe,_e[0].width,_e[0].height);for(let he=0,Ee=_e.length;he<Ee;he++)se=_e[he],Se?Ve&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,se.width,se.height,ne,oe,se.data):t.texImage2D(r.TEXTURE_2D,he,pe,se.width,se.height,0,ne,oe,se.data);S.generateMipmaps=!1}else Se?(Fe&&t.texStorage2D(r.TEXTURE_2D,Ge,pe,k.width,k.height),Ve&&(function(he,Ee,Ue,xt){let ge=he.updateRanges;if(ge.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ue,xt,Ee.data);else{ge.sort((D,dt)=>D.start-dt.start);let Xe=0;for(let D=1;D<ge.length;D++){let dt=ge[Xe],yt=ge[D],Qe=dt.start+dt.count,ei=q(yt.start,Ee.width,4),ti=q(dt.start,Ee.width,4);yt.start<=Qe+1&&ei===ti&&q(yt.start+yt.count-1,Ee.width,4)===ei?dt.count=Math.max(dt.count,yt.start+yt.count-dt.start):(++Xe,ge[Xe]=yt)}ge.length=Xe+1;let Be=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),xn=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,Ee.width);for(let D=0,dt=ge.length;D<dt;D++){let yt=ge[D],Qe=Math.floor(yt.start/4),ei=Math.ceil(yt.count/4),ti=Qe%Ee.width,vr=Math.floor(Qe/Ee.width),Ts=ei;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ti),r.pixelStorei(r.UNPACK_SKIP_ROWS,vr),t.texSubImage2D(r.TEXTURE_2D,0,ti,vr,Ts,1,Ue,xt,Ee.data)}he.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Be),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,xn)}})(S,k,ne,oe)):t.texImage2D(r.TEXTURE_2D,0,pe,k.width,k.height,0,ne,oe,k.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Se&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,pe,_e[0].width,_e[0].height,k.depth);for(let he=0,Ee=_e.length;he<Ee;he++)if(se=_e[he],S.format!==Vt)if(ne!==null)if(Se){if(Ve)if(S.layerUpdates.size>0){let Ue=fc(se.width,se.height,S.format,S.type);for(let xt of S.layerUpdates){let ge=se.data.subarray(xt*Ue/se.data.BYTES_PER_ELEMENT,(xt+1)*Ue/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,xt,se.width,se.height,1,ne,ge)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,se.width,se.height,k.depth,ne,se.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,pe,se.width,se.height,k.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?Ve&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,se.width,se.height,k.depth,ne,oe,se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,he,pe,se.width,se.height,k.depth,0,ne,oe,se.data)}else{Se&&Fe&&t.texStorage2D(r.TEXTURE_2D,Ge,pe,_e[0].width,_e[0].height);for(let he=0,Ee=_e.length;he<Ee;he++)se=_e[he],S.format!==Vt?ne!==null?Se?Ve&&t.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,se.width,se.height,ne,se.data):t.compressedTexImage2D(r.TEXTURE_2D,he,pe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?Ve&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,se.width,se.height,ne,oe,se.data):t.texImage2D(r.TEXTURE_2D,he,pe,se.width,se.height,0,ne,oe,se.data)}else if(S.isDataArrayTexture)if(Se){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,pe,k.width,k.height,k.depth),Ve)if(S.layerUpdates.size>0){let he=fc(k.width,k.height,S.format,S.type);for(let Ee of S.layerUpdates){let Ue=k.data.subarray(Ee*he/k.data.BYTES_PER_ELEMENT,(Ee+1)*he/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ee,k.width,k.height,1,ne,oe,Ue)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,ne,oe,k.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,pe,k.width,k.height,k.depth,0,ne,oe,k.data);else if(S.isData3DTexture)Se?(Fe&&t.texStorage3D(r.TEXTURE_3D,Ge,pe,k.width,k.height,k.depth),Ve&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,ne,oe,k.data)):t.texImage3D(r.TEXTURE_3D,0,pe,k.width,k.height,k.depth,0,ne,oe,k.data);else if(S.isFramebufferTexture){if(Fe)if(Se)t.texStorage2D(r.TEXTURE_2D,Ge,pe,k.width,k.height);else{let he=k.width,Ee=k.height;for(let Ue=0;Ue<Ge;Ue++)t.texImage2D(r.TEXTURE_2D,Ue,pe,he,Ee,0,ne,oe,null),he>>=1,Ee>>=1}}else if(_e.length>0){if(Se&&Fe){let he=ce(_e[0]);t.texStorage2D(r.TEXTURE_2D,Ge,pe,he.width,he.height)}for(let he=0,Ee=_e.length;he<Ee;he++)se=_e[he],Se?Ve&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,ne,oe,se):t.texImage2D(r.TEXTURE_2D,he,pe,ne,oe,se);S.generateMipmaps=!1}else if(Se){if(Fe){let he=ce(k);t.texStorage2D(r.TEXTURE_2D,Ge,pe,he.width,he.height)}Ve&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne,oe,k)}else t.texImage2D(r.TEXTURE_2D,0,pe,ne,oe,k);f(S)&&g(I),L.__version=A.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function K(b,S,U,I,y,A){let L=s.convert(U.format,U.colorSpace),C=s.convert(U.type),X=x(U.internalFormat,L,C,U.colorSpace),B=n.get(S),k=n.get(U);if(k.__renderTarget=S,!B.__hasExternalTextures){let ne=Math.max(1,S.width>>A),oe=Math.max(1,S.height>>A);y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?t.texImage3D(y,A,X,ne,oe,S.depth,0,L,C,null):t.texImage2D(y,A,X,ne,oe,0,L,C,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),$(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,I,y,k.__webglTexture,0,Q(S)):(y===r.TEXTURE_2D||y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,I,y,k.__webglTexture,A),t.bindFramebuffer(r.FRAMEBUFFER,null)}function de(b,S,U){if(r.bindRenderbuffer(r.RENDERBUFFER,b),S.depthBuffer){let I=S.depthTexture,y=I&&I.isDepthTexture?I.type:null,A=M(S.stencilBuffer,y),L=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=Q(S);$(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C,A,S.width,S.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,C,A,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,A,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,L,r.RENDERBUFFER,b)}else{let I=S.textures;for(let y=0;y<I.length;y++){let A=I[y],L=s.convert(A.format,A.colorSpace),C=s.convert(A.type),X=x(A.internalFormat,L,C,A.colorSpace),B=Q(S);U&&$(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,B,X,S.width,S.height):$(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B,X,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,X,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=n.get(S.depthTexture);U.__renderTarget=S,U.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);let I=U.__webglTexture,y=Q(S);if(S.depthTexture.format===_s)$(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,I,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,I,0);else{if(S.depthTexture.format!==vs)throw new Error("Unknown depthTexture format");$(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,I,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,I,0)}}function me(b){let S=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){let I=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),I){let y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,I.removeEventListener("dispose",y)};I.addEventListener("dispose",y),S.__depthDisposeCallback=y}S.__boundDepthTexture=I}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let I=b.texture.mipmaps;I&&I.length>0?ve(S.__webglFramebuffer[0],b):ve(S.__webglFramebuffer,b)}else if(U){S.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[I]),S.__webglDepthbuffer[I]===void 0)S.__webglDepthbuffer[I]=r.createRenderbuffer(),de(S.__webglDepthbuffer[I],b,!1);else{let y=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=S.__webglDepthbuffer[I];r.bindRenderbuffer(r.RENDERBUFFER,A),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,A)}}else{let I=b.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),de(S.__webglDepthbuffer,b,!1);else{let y=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,A),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,A)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let Me=[],re=[];function Q(b){return Math.min(i.maxSamples,b.samples)}function $(b){let S=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function le(b,S){let U=b.colorSpace,I=b.format,y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==vt&&U!==Mi&&(He.getTransfer(U)===Ye?I===Vt&&y===mn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function ce(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=function(){let b=N;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),N+=1,b},this.resetTextureUnits=function(){N=0},this.setTexture2D=z,this.setTexture2DArray=function(b,S){let U=n.get(b);b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version?te(U,b,S):t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(b,S){let U=n.get(b);b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version?te(U,b,S):t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(b,S){let U=n.get(b);b.version>0&&U.__version!==b.version?(function(I,y,A){if(y.image.length!==6)return;let L=Y(I,y),C=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+A);let X=n.get(C);if(C.version!==X.__version||L===!0){t.activeTexture(r.TEXTURE0+A);let B=He.getPrimaries(He.workingColorSpace),k=y.colorSpace===Mi?null:He.getPrimaries(y.colorSpace),ne=y.colorSpace===Mi||B===k?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let oe=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let ge=0;ge<6;ge++)pe[ge]=oe||se?se?y.image[ge].image:y.image[ge]:_(y.image[ge],!0,i.maxCubemapSize),pe[ge]=le(y,pe[ge]);let _e=pe[0],Se=s.convert(y.format,y.colorSpace),Fe=s.convert(y.type),Ve=x(y.internalFormat,Se,Fe,y.colorSpace),Ge=y.isVideoTexture!==!0,he=X.__version===void 0||L===!0,Ee=C.dataReady,Ue,xt=w(y,_e);if(V(r.TEXTURE_CUBE_MAP,y),oe){Ge&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Ve,_e.width,_e.height);for(let ge=0;ge<6;ge++){Ue=pe[ge].mipmaps;for(let Xe=0;Xe<Ue.length;Xe++){let Be=Ue[Xe];y.format!==Vt?Se!==null?Ge?Ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,0,0,Be.width,Be.height,Se,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,Ve,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,0,0,Be.width,Be.height,Se,Fe,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,Ve,Be.width,Be.height,0,Se,Fe,Be.data)}}}else{if(Ue=y.mipmaps,Ge&&he){Ue.length>0&&xt++;let ge=ce(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Ve,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(se){Ge?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,pe[ge].width,pe[ge].height,Se,Fe,pe[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ve,pe[ge].width,pe[ge].height,0,Se,Fe,pe[ge].data);for(let Xe=0;Xe<Ue.length;Xe++){let Be=Ue[Xe].image[ge].image;Ge?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,0,0,Be.width,Be.height,Se,Fe,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,Ve,Be.width,Be.height,0,Se,Fe,Be.data)}}else{Ge?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Se,Fe,pe[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ve,Se,Fe,pe[ge]);for(let Xe=0;Xe<Ue.length;Xe++){let Be=Ue[Xe];Ge?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,0,0,Se,Fe,Be.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,Ve,Se,Fe,Be.image[ge])}}}f(y)&&g(r.TEXTURE_CUBE_MAP),X.__version=C.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version})(U,b,S):t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(b,S,U){let I=n.get(b);S!==void 0&&K(I.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&me(b)},this.setupRenderTarget=function(b){let S=b.texture,U=n.get(b),I=n.get(S);b.addEventListener("dispose",P);let y=b.textures,A=b.isWebGLCubeRenderTarget===!0,L=y.length>1;if(L||(I.__webglTexture===void 0&&(I.__webglTexture=r.createTexture()),I.__version=S.version,a.memory.textures++),A){U.__webglFramebuffer=[];for(let C=0;C<6;C++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[C]=[];for(let X=0;X<S.mipmaps.length;X++)U.__webglFramebuffer[C][X]=r.createFramebuffer()}else U.__webglFramebuffer[C]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let C=0;C<S.mipmaps.length;C++)U.__webglFramebuffer[C]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(L)for(let C=0,X=y.length;C<X;C++){let B=n.get(y[C]);B.__webglTexture===void 0&&(B.__webglTexture=r.createTexture(),a.memory.textures++)}if(b.samples>0&&$(b)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let C=0;C<y.length;C++){let X=y[C];U.__webglColorRenderbuffer[C]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[C]);let B=s.convert(X.format,X.colorSpace),k=s.convert(X.type),ne=x(X.internalFormat,B,k,X.colorSpace,b.isXRRenderTarget===!0),oe=Q(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,ne,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+C,r.RENDERBUFFER,U.__webglColorRenderbuffer[C])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),de(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(A){t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture),V(r.TEXTURE_CUBE_MAP,S);for(let C=0;C<6;C++)if(S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)K(U.__webglFramebuffer[C][X],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,X);else K(U.__webglFramebuffer[C],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);f(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){for(let C=0,X=y.length;C<X;C++){let B=y[C],k=n.get(B),ne=r.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ne=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,k.__webglTexture),V(ne,B),K(U.__webglFramebuffer,b,B,r.COLOR_ATTACHMENT0+C,ne,0),f(B)&&g(ne)}t.unbindTexture()}else{let C=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(C=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(C,I.__webglTexture),V(C,S),S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)K(U.__webglFramebuffer[X],b,S,r.COLOR_ATTACHMENT0,C,X);else K(U.__webglFramebuffer,b,S,r.COLOR_ATTACHMENT0,C,0);f(S)&&g(C),t.unbindTexture()}b.depthBuffer&&me(b)},this.updateRenderTargetMipmap=function(b){let S=b.textures;for(let U=0,I=S.length;U<I;U++){let y=S[U];if(f(y)){let A=v(b),L=n.get(y).__webglTexture;t.bindTexture(A,L),g(A),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(b.samples>0){if($(b)===!1){let S=b.textures,U=b.width,I=b.height,y=r.COLOR_BUFFER_BIT,A=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=n.get(b),C=S.length>1;if(C)for(let B=0;B<S.length;B++)t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer);let X=b.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let B=0;B<S.length;B++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(y|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(y|=r.STENCIL_BUFFER_BIT)),C){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,L.__webglColorRenderbuffer[B]);let k=n.get(S[B]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,k,0)}r.blitFramebuffer(0,0,U,I,0,0,U,I,y,r.NEAREST),c===!0&&(Me.length=0,re.length=0,Me.push(r.COLOR_ATTACHMENT0+B),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Me.push(A),re.push(A),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),C)for(let B=0;B<S.length;B++){t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,L.__webglColorRenderbuffer[B]);let k=n.get(S[B]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,k,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let S=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=K,this.useMultisampledRTT=$}function cm(r,e){return{convert:function(t,n=Mi){let i,s=He.getTransfer(n);if(t===mn)return r.UNSIGNED_BYTE;if(t===io)return r.UNSIGNED_SHORT_4_4_4_4;if(t===ro)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Cl)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Il)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===Al)return r.BYTE;if(t===Rl)return r.SHORT;if(t===cr)return r.UNSIGNED_SHORT;if(t===no)return r.INT;if(t===yi)return r.UNSIGNED_INT;if(t===Ht)return r.FLOAT;if(t===hr)return r.HALF_FLOAT;if(t===ku)return r.ALPHA;if(t===Hu)return r.RGB;if(t===Vt)return r.RGBA;if(t===_s)return r.DEPTH_COMPONENT;if(t===vs)return r.DEPTH_STENCIL;if(t===so)return r.RED;if(t===ao)return r.RED_INTEGER;if(t===Vu)return r.RG;if(t===Pl)return r.RG_INTEGER;if(t===Ll)return r.RGBA_INTEGER;if(t===oo||t===lo||t===co||t===ho)if(s===Ye){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===oo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===lo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===co)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ho)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===oo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===lo)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===co)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ho)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Nl||t===Dl||t===Ul||t===Ol){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===Nl)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Dl)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ul)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ol)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Fl||t===Bl||t===zl){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===Fl||t===Bl)return s===Ye?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===zl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===kl||t===Hl||t===Vl||t===Gl||t===Wl||t===Xl||t===jl||t===Yl||t===Zl||t===ql||t===Kl||t===Jl||t===Ql||t===$l){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===kl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Hl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Vl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Gl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Wl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Xl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===jl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Yl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Zl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ql)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Kl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Jl)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Ql)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===$l)return s===Ye?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===ec||t===tc||t===nc){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===ec)return s===Ye?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===tc)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===nc)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===ic||t===rc||t===sc||t===ac){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===ic)return i.COMPRESSED_RED_RGTC1_EXT;if(t===rc)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===sc)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===ac)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ur?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zr(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends Ln{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,_=typeof XRWebGLBinding<"u",f=new Ac,g={},v=t.getContextAttributes(),x=null,M=null,w=[],R=[],P=new ee,F=null,N=new ft;N.viewport=new We;let z=new ft;z.viewport=new We;let H=[N,z],O=new Xa,Z=null,V=null;function Y(re){let Q=R.indexOf(re.inputSource);if(Q===-1)return;let $=w[Q];$!==void 0&&($.update(re.inputSource,re.frame,l||a),$.dispatchEvent({type:re.type,data:re.inputSource}))}function q(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",te);for(let re=0;re<w.length;re++){let Q=R[re];Q!==null&&(R[re]=null,w[re].disconnect(Q))}Z=null,V=null,f.reset();for(let re in g)delete g[re];e.setRenderTarget(x),p=null,d=null,u=null,i=null,M=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}function te(re){for(let Q=0;Q<re.removed.length;Q++){let $=re.removed[Q],le=R.indexOf($);le>=0&&(R[le]=null,w[le].disconnect($))}for(let Q=0;Q<re.added.length;Q++){let $=re.added[Q],le=R.indexOf($);if(le===-1){for(let b=0;b<w.length;b++){if(b>=R.length){R.push($),le=b;break}if(R[b]===null){R[b]=$,le=b;break}}if(le===-1)break}let ce=w[le];ce&&ce.connect($)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Q=w[re];return Q===void 0&&(Q=new Ki,w[re]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(re){let Q=w[re];return Q===void 0&&(Q=new Ki,w[re]=Q),Q.getGripSpace()},this.getHand=function(re){let Q=w[re];return Q===void 0&&(Q=new Ki,w[re]=Q),Q.getHandSpace()},this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",q),i.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,$=null,le=null;v.depth&&(le=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=v.stencil?vs:_s,$=v.stencil?ur:yi);let ce={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ln(d.textureWidth,d.textureHeight,{format:Vt,type:mn,depthTexture:new Yr(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ln(p.framebufferWidth,p.framebufferHeight,{format:Vt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};let K=new T,de=new T;function ve(re,Q){Q===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Q.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;let Q=re.near,$=re.far;f.texture!==null&&(f.depthNear>0&&(Q=f.depthNear),f.depthFar>0&&($=f.depthFar)),O.near=z.near=N.near=Q,O.far=z.far=N.far=$,Z===O.near&&V===O.far||(i.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,V=O.far),O.layers.mask=6|re.layers.mask,N.layers.mask=3&O.layers.mask,z.layers.mask=5&O.layers.mask;let le=re.parent,ce=O.cameras;ve(O,le);for(let b=0;b<ce.length;b++)ve(ce[b],le);ce.length===2?(function(b,S,U){K.setFromMatrixPosition(S.matrixWorld),de.setFromMatrixPosition(U.matrixWorld);let I=K.distanceTo(de),y=S.projectionMatrix.elements,A=U.projectionMatrix.elements,L=y[14]/(y[10]-1),C=y[14]/(y[10]+1),X=(y[9]+1)/y[5],B=(y[9]-1)/y[5],k=(y[8]-1)/y[0],ne=(A[8]+1)/A[0],oe=L*k,se=L*ne,pe=I/(-k+ne),_e=pe*-k;if(S.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(_e),b.translateZ(pe),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),y[10]===-1)b.projectionMatrix.copy(S.projectionMatrix),b.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let Se=L+pe,Fe=C+pe,Ve=oe-_e,Ge=se+(I-_e),he=X*C/Fe*Se,Ee=B*C/Fe*Se;b.projectionMatrix.makePerspective(Ve,Ge,he,Ee,Se,Fe),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}})(O,N,z):O.projectionMatrix.copy(N.projectionMatrix),(function(b,S,U){U===null?b.matrix.copy(S.matrixWorld):(b.matrix.copy(U.matrixWorld),b.matrix.invert(),b.matrix.multiply(S.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(S.projectionMatrix),b.projectionMatrixInverse.copy(S.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=2*ui*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)})(re,O,le)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(re){c=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(O)},this.getCameraTexture=function(re){return g[re]};let me=null,Me=new Pd;Me.setAnimationLoop(function(re,Q){if(h=Q.getViewerPose(l||a),m=Q,h!==null){let $=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let le=!1;$.length!==O.cameras.length&&(O.cameras.length=0,le=!0);for(let b=0;b<$.length;b++){let S=$[b],U=null;if(p!==null)U=p.getViewport(S);else{let y=u.getViewSubImage(d,S);U=y.viewport,b===0&&(e.setRenderTargetTextures(M,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(M))}let I=H[b];I===void 0&&(I=new ft,I.layers.enable(b),I.viewport=new We,H[b]=I),I.matrix.fromArray(S.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(S.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(U.x,U.y,U.width,U.height),b===0&&(O.matrix.copy(I.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),le===!0&&O.cameras.push(I)}let ce=i.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let b=u.getDepthInformation($[0]);b&&b.isValid&&b.texture&&f.init(b,i.renderState)}if(ce&&ce.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let b=0;b<$.length;b++){let S=$[b].camera;if(S){let U=g[S];U||(U=new Zr,g[S]=U);let I=u.getCameraImage(S);U.sourceTexture=I}}}}for(let $=0;$<w.length;$++){let le=R[$],ce=w[$];le!==null&&ce!==void 0&&ce.update(le,Q,l||a)}me&&me(re,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}),this.setAnimationLoop=function(re){me=re},this.dispose=function(){}}},Ti=new Qt,hm=new ye;function um(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Ft&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Ft&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(i.envMap.value=o,Ti.copy(c),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),i.envMapRotation.value.setFromMatrix4(hm.makeRotationFromEuler(Ti)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,uc(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ft&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(i,s,c)):s.isMeshMatcapMaterial?(n(i,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function dm(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,m){let _=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let g=m[f];if(typeof _=="number"||typeof _=="boolean"){if(g!==_)return m[f]=_,!0}else if(g.equals(_)===!1)return g.copy(_),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(f){let g=f.uniforms,v=0,x=16;for(let w=0,R=g.length;w<R;w++){let P=Array.isArray(g[w])?g[w]:[g[w]];for(let F=0,N=P.length;F<N;F++){let z=P[F],H=Array.isArray(z.value)?z.value:[z.value];for(let O=0,Z=H.length;O<Z;O++){let V=l(H[O]),Y=v%x,q=Y%V.boundary,te=Y+q;v+=q,te!==0&&x-te<V.storage&&(v+=x-te),z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=V.storage}}}let M=v%x;M>0&&(v+=x-M),f.__size=v,f.__cache={}})(u),p=(function(f){let g=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=g;let v=r.createBuffer(),x=f.__size,M=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,x,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,v),v})(u),i[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let _=e.render.frame;s[u.id]!==_&&((function(f){let g=i[f.id],v=f.uniforms,x=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let M=0,w=v.length;M<w;M++){let R=Array.isArray(v[M])?v[M]:[v[M]];for(let P=0,F=R.length;P<F;P++){let N=R[P];if(c(N,M,P,x)===!0){let z=N.__offset,H=Array.isArray(N.value)?N.value:[N.value],O=0;for(let Z=0;Z<H.length;Z++){let V=H[Z],Y=l(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,z+O,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var go=class{constructor(e={}){let{canvas:t=$u(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),_=new Int32Array(4),f=null,g=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,w=!1;this._outputColorSpace=it;let R=0,P=0,F=null,N=-1,z=null,H=new We,O=new We,Z=null,V=new be(0),Y=0,q=t.width,te=t.height,K=1,de=null,ve=null,me=new We(0,0,q,te),Me=new We(0,0,q,te),re=!1,Q=new Zn,$=!1,le=!1,ce=new ye,b=new T,S=new We,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},I=!1;function y(){return F===null?K:1}let A,L,C,X,B,k,ne,oe,se,pe,_e,Se,Fe,Ve,Ge,he,Ee,Ue,xt,ge,Xe,Be,Wt,xn,D=n;function dt(E,G){return t.getContext(E,G)}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ei,!1),t.addEventListener("webglcontextrestored",ti,!1),t.addEventListener("webglcontextcreationerror",vr,!1),D===null){let G="webgl2";if(D=dt(G,E),D===null)throw dt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function yt(){A=new Yp(D),A.init(),Be=new cm(D,A),L=new Vp(D,A,e,Be),C=new om(D,A),L.reversedDepthBuffer&&d&&C.buffers.depth.setReversed(!0),X=new Kp(D),B=new Jf,k=new lm(D,A,C,B,L,Be,X),ne=new Wp(M),oe=new jp(M),se=new Fp(D),Wt=new kp(D,se),pe=new Zp(D,se,X,Wt),_e=new Qp(D,pe,se,X),xt=new Jp(D,L,k),he=new Gp(B),Se=new Kf(M,ne,oe,A,L,Wt,he),Fe=new um(M,B),Ve=new $f,Ge=new rm(A),Ue=new zp(M,ne,oe,C,_e,p,c),Ee=new sm(M,_e,L),xn=new dm(D,X,L,C),ge=new Hp(D,A,X),Xe=new qp(D,A,X),X.programs=Se.programs,M.capabilities=L,M.extensions=A,M.properties=B,M.renderLists=Ve,M.shadowMap=Ee,M.state=C,M.info=X}yt();let Qe=new Rc(M,D);function ei(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ti(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=X.autoReset,G=Ee.enabled,j=Ee.autoUpdate,J=Ee.needsUpdate,W=Ee.type;yt(),X.autoReset=E,Ee.enabled=G,Ee.autoUpdate=j,Ee.needsUpdate=J,Ee.type=W}function vr(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ts(E){let G=E.target;G.removeEventListener("dispose",Ts),(function(j){(function(J){let W=B.get(J).programs;W!==void 0&&(W.forEach(function(ie){Se.releaseProgram(ie)}),J.isShaderMaterial&&Se.releaseShaderCache(J))})(j),B.remove(j)})(G)}function Mo(E,G,j){E.transparent===!0&&E.side===Lt&&E.forceSinglePass===!1?(E.side=Ft,E.needsUpdate=!0,ws(E,G,j),E.side=Jn,E.needsUpdate=!0,ws(E,G,j),E.side=Lt):ws(E,G,j)}this.xr=Qe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=A.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=A.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(q,te,!1))},this.getSize=function(E){return E.set(q,te)},this.setSize=function(E,G,j=!0){Qe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(q=E,te=G,t.width=Math.floor(E*K),t.height=Math.floor(G*K),j===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G))},this.getDrawingBufferSize=function(E){return E.set(q*K,te*K).floor()},this.setDrawingBufferSize=function(E,G,j){q=E,te=G,K=j,t.width=Math.floor(E*j),t.height=Math.floor(G*j),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,G,j,J){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,G,j,J),C.viewport(H.copy(me).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Me)},this.setScissor=function(E,G,j,J){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,G,j,J),C.scissor(O.copy(Me).multiplyScalar(K).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){C.setScissorTest(re=E)},this.setOpaqueSort=function(E){de=E},this.setTransparentSort=function(E){ve=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,j=!0){let J=0;if(E){let W=!1;if(F!==null){let ie=F.texture.format;W=ie===Ll||ie===Pl||ie===ao}if(W){let ie=F.texture.type,ue=ie===mn||ie===yi||ie===cr||ie===ur||ie===io||ie===ro,fe=Ue.getClearColor(),xe=Ue.getClearAlpha(),we=fe.r,Re=fe.g,Ae=fe.b;ue?(m[0]=we,m[1]=Re,m[2]=Ae,m[3]=xe,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=we,_[1]=Re,_[2]=Ae,_[3]=xe,D.clearBufferiv(D.COLOR,0,_))}else J|=D.COLOR_BUFFER_BIT}G&&(J|=D.DEPTH_BUFFER_BIT),j&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ei,!1),t.removeEventListener("webglcontextrestored",ti,!1),t.removeEventListener("webglcontextcreationerror",vr,!1),Ue.dispose(),Ve.dispose(),Ge.dispose(),B.dispose(),ne.dispose(),oe.dispose(),_e.dispose(),Wt.dispose(),xn.dispose(),Se.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",oh),Qe.removeEventListener("sessionend",lh),ni.stop()},this.renderBufferDirect=function(E,G,j,J,W,ie){G===null&&(G=U);let ue=W.isMesh&&W.matrixWorld.determinant()<0,fe=(function(ze,$e,_t,De,Ce){$e.isScene!==!0&&($e=U),k.resetTextureUnits();let Xt=$e.fog,To=De.isMeshStandardMaterial?$e.environment:null,As=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:vt,Fn=(De.isMeshStandardMaterial?oe:ne).get(De.envMap||To),en=De.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,Ri=!!_t.attributes.tangent&&(!!De.normalMap||De.anisotropy>0),yn=!!_t.morphAttributes.position,Eo=!!_t.morphAttributes.normal,Ci=!!_t.morphAttributes.color,fh=On;De.toneMapped&&(F!==null&&F.isXRRenderTarget!==!0||(fh=M.toneMapping));let mh=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,Zd=mh!==void 0?mh.length:0,ke=B.get(De),qd=g.state.lights;if($===!0&&(le===!0||ze!==z)){let Bt=ze===z&&De.id===N;he.setState(De,ze,Bt)}let jt=!1;De.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==qd.state.version||ke.outputColorSpace!==As||Ce.isBatchedMesh&&ke.batching===!1?jt=!0:Ce.isBatchedMesh||ke.batching!==!0?Ce.isBatchedMesh&&ke.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&ke.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&ke.instancing===!1?jt=!0:Ce.isInstancedMesh||ke.instancing!==!0?Ce.isSkinnedMesh&&ke.skinning===!1?jt=!0:Ce.isSkinnedMesh||ke.skinning!==!0?Ce.isInstancedMesh&&ke.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&ke.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&ke.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&ke.instancingMorph===!1&&Ce.morphTexture!==null||ke.envMap!==Fn||De.fog===!0&&ke.fog!==Xt?jt=!0:ke.numClippingPlanes===void 0||ke.numClippingPlanes===he.numPlanes&&ke.numIntersection===he.numIntersection?(ke.vertexAlphas!==en||ke.vertexTangents!==Ri||ke.morphTargets!==yn||ke.morphNormals!==Eo||ke.morphColors!==Ci||ke.toneMapping!==fh||ke.morphTargetsCount!==Zd)&&(jt=!0):jt=!0:jt=!0:jt=!0:jt=!0:(jt=!0,ke.__version=De.version);let ii=ke.currentProgram;jt===!0&&(ii=ws(De,$e,Ce));let gh=!1,xr=!1,wo=!1,st=ii.getUniforms(),Bn=ke.uniforms;if(C.useProgram(ii.program)&&(gh=!0,xr=!0,wo=!0),De.id!==N&&(N=De.id,xr=!0),gh||z!==ze){C.buffers.depth.getReversed()&&ze.reversedDepth!==!0&&(ze._reversedDepth=!0,ze.updateProjectionMatrix()),st.setValue(D,"projectionMatrix",ze.projectionMatrix),st.setValue(D,"viewMatrix",ze.matrixWorldInverse);let Bt=st.map.cameraPosition;Bt!==void 0&&Bt.setValue(D,b.setFromMatrixPosition(ze.matrixWorld)),L.logarithmicDepthBuffer&&st.setValue(D,"logDepthBufFC",2/(Math.log(ze.far+1)/Math.LN2)),(De.isMeshPhongMaterial||De.isMeshToonMaterial||De.isMeshLambertMaterial||De.isMeshBasicMaterial||De.isMeshStandardMaterial||De.isShaderMaterial)&&st.setValue(D,"isOrthographic",ze.isOrthographicCamera===!0),z!==ze&&(z=ze,xr=!0,wo=!0)}if(Ce.isSkinnedMesh){st.setOptional(D,Ce,"bindMatrix"),st.setOptional(D,Ce,"bindMatrixInverse");let Bt=Ce.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),st.setValue(D,"boneTexture",Bt.boneTexture,k))}Ce.isBatchedMesh&&(st.setOptional(D,Ce,"batchingTexture"),st.setValue(D,"batchingTexture",Ce._matricesTexture,k),st.setOptional(D,Ce,"batchingIdTexture"),st.setValue(D,"batchingIdTexture",Ce._indirectTexture,k),st.setOptional(D,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&st.setValue(D,"batchingColorTexture",Ce._colorsTexture,k));let Ao=_t.morphAttributes;Ao.position===void 0&&Ao.normal===void 0&&Ao.color===void 0||xt.update(Ce,_t,ii),(xr||ke.receiveShadow!==Ce.receiveShadow)&&(ke.receiveShadow=Ce.receiveShadow,st.setValue(D,"receiveShadow",Ce.receiveShadow)),De.isMeshGouraudMaterial&&De.envMap!==null&&(Bn.envMap.value=Fn,Bn.flipEnvMap.value=Fn.isCubeTexture&&Fn.isRenderTargetTexture===!1?-1:1),De.isMeshStandardMaterial&&De.envMap===null&&$e.environment!==null&&(Bn.envMapIntensity.value=$e.environmentIntensity),xr&&(st.setValue(D,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&(Yt=wo,(tn=Bn).ambientLightColor.needsUpdate=Yt,tn.lightProbe.needsUpdate=Yt,tn.directionalLights.needsUpdate=Yt,tn.directionalLightShadows.needsUpdate=Yt,tn.pointLights.needsUpdate=Yt,tn.pointLightShadows.needsUpdate=Yt,tn.spotLights.needsUpdate=Yt,tn.spotLightShadows.needsUpdate=Yt,tn.rectAreaLights.needsUpdate=Yt,tn.hemisphereLights.needsUpdate=Yt),Xt&&De.fog===!0&&Fe.refreshFogUniforms(Bn,Xt),Fe.refreshMaterialUniforms(Bn,De,K,te,g.state.transmissionRenderTarget[ze.id]),mr.upload(D,dh(ke),Bn,k));var tn,Yt;if(De.isShaderMaterial&&De.uniformsNeedUpdate===!0&&(mr.upload(D,dh(ke),Bn,k),De.uniformsNeedUpdate=!1),De.isSpriteMaterial&&st.setValue(D,"center",Ce.center),st.setValue(D,"modelViewMatrix",Ce.modelViewMatrix),st.setValue(D,"normalMatrix",Ce.normalMatrix),st.setValue(D,"modelMatrix",Ce.matrixWorld),De.isShaderMaterial||De.isRawShaderMaterial){let Bt=De.uniformsGroups;for(let Ro=0,Kd=Bt.length;Ro<Kd;Ro++){let _h=Bt[Ro];xn.update(_h,ii),xn.bind(_h,ii)}}return ii})(E,G,j,J,W);C.setMaterial(J,ue);let xe=j.index,we=1;if(J.wireframe===!0){if(xe=pe.getWireframeAttribute(j),xe===void 0)return;we=2}let Re=j.drawRange,Ae=j.attributes.position,Ne=Re.start*we,Ke=(Re.start+Re.count)*we;ie!==null&&(Ne=Math.max(Ne,ie.start*we),Ke=Math.min(Ke,(ie.start+ie.count)*we)),xe!==null?(Ne=Math.max(Ne,0),Ke=Math.min(Ke,xe.count)):Ae!=null&&(Ne=Math.max(Ne,0),Ke=Math.min(Ke,Ae.count));let nt=Ke-Ne;if(nt<0||nt===1/0)return;let rt;Wt.setup(W,J,fe,j,xe);let Je=ge;if(xe!==null&&(rt=se.get(xe),Je=Xe,Je.setIndex(rt)),W.isMesh)J.wireframe===!0?(C.setLineWidth(J.wireframeLinewidth*y()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(W.isLine){let ze=J.linewidth;ze===void 0&&(ze=1),C.setLineWidth(ze*y()),W.isLineSegments?Je.setMode(D.LINES):W.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else W.isPoints?Je.setMode(D.POINTS):W.isSprite&&Je.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Yi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(A.get("WEBGL_multi_draw"))Je.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ze=W._multiDrawStarts,$e=W._multiDrawCounts,_t=W._multiDrawCount,De=xe?se.get(xe).bytesPerElement:1,Ce=B.get(J).currentProgram.getUniforms();for(let Xt=0;Xt<_t;Xt++)Ce.setValue(D,"_gl_DrawID",Xt),Je.render(ze[Xt]/De,$e[Xt])}else if(W.isInstancedMesh)Je.renderInstances(Ne,nt,W.count);else if(j.isInstancedBufferGeometry){let ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,$e=Math.min(j.instanceCount,ze);Je.renderInstances(Ne,nt,$e)}else Je.render(Ne,nt)},this.compile=function(E,G,j=null){j===null&&(j=E),g=Ge.get(j),g.init(G),x.push(g),j.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),E!==j&&E.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();let J=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ie=W.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){let fe=ie[ue];Mo(fe,j,W),J.add(fe)}else Mo(ie,j,W),J.add(ie)}),g=x.pop(),J},this.compileAsync=function(E,G,j=null){let J=this.compile(E,G,j);return new Promise(W=>{function ie(){J.forEach(function(ue){B.get(ue).currentProgram.isReady()&&J.delete(ue)}),J.size!==0?setTimeout(ie,10):W(E)}A.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let So=null;function oh(){ni.stop()}function lh(){ni.start()}let ni=new Pd;function bo(E,G,j,J){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){J&&S.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);let ie=_e.update(E),ue=E.material;ue.visible&&f.push(E,ie,ue,j,S.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){let ie=_e.update(E),ue=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),S.copy(E.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),S.copy(ie.boundingSphere.center)),S.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(ue)){let fe=ie.groups;for(let xe=0,we=fe.length;xe<we;xe++){let Re=fe[xe],Ae=ue[Re.materialIndex];Ae&&Ae.visible&&f.push(E,ie,Ae,j,S.z,Re)}}else ue.visible&&f.push(E,ie,ue,j,S.z,null)}}let W=E.children;for(let ie=0,ue=W.length;ie<ue;ie++)bo(W[ie],G,j,J)}function ch(E,G,j,J){let W=E.opaque,ie=E.transmissive,ue=E.transparent;g.setupLightsView(j),$===!0&&he.setGlobalState(M.clippingPlanes,j),J&&C.viewport(H.copy(J)),W.length>0&&Es(W,G,j),ie.length>0&&Es(ie,G,j),ue.length>0&&Es(ue,G,j),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function hh(E,G,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new ln(1,1,{generateMipmaps:!0,type:A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float")?hr:mn,minFilter:fn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));let W=g.state.transmissionRenderTarget[J.id],ie=J.viewport||H;W.setSize(ie.z*M.transmissionResolutionScale,ie.w*M.transmissionResolutionScale);let ue=M.getRenderTarget(),fe=M.getActiveCubeFace(),xe=M.getActiveMipmapLevel();M.setRenderTarget(W),M.getClearColor(V),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),I&&Ue.render(j);let we=M.toneMapping;M.toneMapping=On;let Re=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),$===!0&&he.setGlobalState(M.clippingPlanes,J),Es(E,j,J),k.updateMultisampleRenderTarget(W),k.updateRenderTargetMipmap(W),A.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Ne=0,Ke=G.length;Ne<Ke;Ne++){let nt=G[Ne],rt=nt.object,Je=nt.geometry,ze=nt.material,$e=nt.group;if(ze.side===Lt&&rt.layers.test(J.layers)){let _t=ze.side;ze.side=Ft,ze.needsUpdate=!0,uh(rt,j,J,Je,ze,$e),ze.side=_t,ze.needsUpdate=!0,Ae=!0}}Ae===!0&&(k.updateMultisampleRenderTarget(W),k.updateRenderTargetMipmap(W))}M.setRenderTarget(ue,fe,xe),M.setClearColor(V,Y),Re!==void 0&&(J.viewport=Re),M.toneMapping=we}function Es(E,G,j){let J=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ie=E.length;W<ie;W++){let ue=E[W],fe=ue.object,xe=ue.geometry,we=ue.group,Re=ue.material;Re.allowOverride===!0&&J!==null&&(Re=J),fe.layers.test(j.layers)&&uh(fe,G,j,xe,Re,we)}}function uh(E,G,j,J,W,ie){E.onBeforeRender(M,G,j,J,W,ie),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(M,G,j,J,E,ie),W.transparent===!0&&W.side===Lt&&W.forceSinglePass===!1?(W.side=Ft,W.needsUpdate=!0,M.renderBufferDirect(j,G,J,W,E,ie),W.side=Jn,W.needsUpdate=!0,M.renderBufferDirect(j,G,J,W,E,ie),W.side=Lt):M.renderBufferDirect(j,G,J,W,E,ie),E.onAfterRender(M,G,j,J,W,ie)}function ws(E,G,j){G.isScene!==!0&&(G=U);let J=B.get(E),W=g.state.lights,ie=g.state.shadowsArray,ue=W.state.version,fe=Se.getParameters(E,W.state,ie,G,j),xe=Se.getProgramCacheKey(fe),we=J.programs;J.environment=E.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(E.isMeshStandardMaterial?oe:ne).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",Ts),we=new Map,J.programs=we);let Re=we.get(xe);if(Re!==void 0){if(J.currentProgram===Re&&J.lightsStateVersion===ue)return ph(E,fe),Re}else fe.uniforms=Se.getUniforms(E),E.onBeforeCompile(fe,M),Re=Se.acquireProgram(fe,xe),we.set(xe,Re),J.uniforms=fe.uniforms;let Ae=J.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Ae.clippingPlanes=he.uniform),ph(E,fe),J.needsLights=(function(Ne){return Ne.isMeshLambertMaterial||Ne.isMeshToonMaterial||Ne.isMeshPhongMaterial||Ne.isMeshStandardMaterial||Ne.isShadowMaterial||Ne.isShaderMaterial&&Ne.lights===!0})(E),J.lightsStateVersion=ue,J.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.directionalShadowMap.value=W.state.directionalShadowMap,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotShadowMap.value=W.state.spotShadowMap,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMap.value=W.state.pointShadowMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Re,J.uniformsList=null,Re}function dh(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=mr.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function ph(E,G){let j=B.get(E);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}ni.setAnimationLoop(function(E){So&&So(E)}),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(E){So=E,Qe.setAnimationLoop(E),E===null?ni.stop():ni.start()},Qe.addEventListener("sessionstart",oh),Qe.addEventListener("sessionend",lh),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(G),G=Qe.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,G,F),g=Ge.get(E,x.length),g.init(G),x.push(g),ce.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(ce,Pn,G.reversedDepth),le=this.localClippingEnabled,$=he.init(this.clippingPlanes,le),f=Ve.get(E,v.length),f.init(),v.push(f),Qe.enabled===!0&&Qe.isPresenting===!0){let ie=M.xr.getDepthSensingMesh();ie!==null&&bo(ie,G,-1/0,M.sortObjects)}bo(E,G,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(de,ve),I=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,I&&Ue.addToRenderList(f,E),this.info.render.frame++,$===!0&&he.beginShadows();let j=g.state.shadowsArray;Ee.render(j,E,G),$===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=f.opaque,W=f.transmissive;if(g.setupLights(),G.isArrayCamera){let ie=G.cameras;if(W.length>0)for(let ue=0,fe=ie.length;ue<fe;ue++)hh(J,W,E,ie[ue]);I&&Ue.render(E);for(let ue=0,fe=ie.length;ue<fe;ue++){let xe=ie[ue];ch(f,E,xe,xe.viewport)}}else W.length>0&&hh(J,W,E,G),I&&Ue.render(E),ch(f,E,G);F!==null&&P===0&&(k.updateMultisampleRenderTarget(F),k.updateRenderTargetMipmap(F)),E.isScene===!0&&E.onAfterRender(M,E,G),Wt.resetDefaultState(),N=-1,z=null,x.pop(),x.length>0?(g=x[x.length-1],$===!0&&he.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,v.pop(),f=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,G,j){let J=B.get(E);J.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),B.get(E.texture).__webglTexture=G,B.get(E.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){let j=B.get(E);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0};let Xd=D.createFramebuffer();this.setRenderTarget=function(E,G=0,j=0){F=E,R=G,P=j;let J=!0,W=null,ie=!1,ue=!1;if(E){let fe=B.get(E);if(fe.__useDefaultFramebuffer!==void 0)C.bindFramebuffer(D.FRAMEBUFFER,null),J=!1;else if(fe.__webglFramebuffer===void 0)k.setupRenderTarget(E);else if(fe.__hasExternalTextures)k.rebindTextures(E,B.get(E.texture).__webglTexture,B.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Re=E.depthTexture;if(fe.__boundDepthTexture!==Re){if(Re!==null&&B.has(Re)&&(E.width!==Re.image.width||E.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(E)}}let xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);let we=B.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=Array.isArray(we[G])?we[G][j]:we[G],ie=!0):W=E.samples>0&&k.useMultisampledRTT(E)===!1?B.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?we[j]:we,H.copy(E.viewport),O.copy(E.scissor),Z=E.scissorTest}else H.copy(me).multiplyScalar(K).floor(),O.copy(Me).multiplyScalar(K).floor(),Z=re;if(j!==0&&(W=Xd),C.bindFramebuffer(D.FRAMEBUFFER,W)&&J&&C.drawBuffers(E,W),C.viewport(H),C.scissor(O),C.setScissorTest(Z),ie){let fe=B.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,fe.__webglTexture,j)}else if(ue){let fe=G;for(let xe=0;xe<E.textures.length;xe++){let we=B.get(E.textures[xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+xe,we.__webglTexture,j,fe)}}else if(E!==null&&j!==0){let fe=B.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,j)}N=-1},this.readRenderTargetPixels=function(E,G,j,J,W,ie,ue,fe=0){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){C.bindFramebuffer(D.FRAMEBUFFER,xe);try{let we=E.textures[fe],Re=we.format,Ae=we.type;if(!L.textureFormatReadable(Re))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(Ae))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=E.width-J&&j>=0&&j<=E.height-W&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+fe),D.readPixels(G,j,J,W,Be.convert(Re),Be.convert(Ae),ie))}finally{let we=F!==null?B.get(F).__webglFramebuffer:null;C.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,G,j,J,W,ie,ue,fe=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){if(G>=0&&G<=E.width-J&&j>=0&&j<=E.height-W){C.bindFramebuffer(D.FRAMEBUFFER,xe);let we=E.textures[fe],Re=we.format,Ae=we.type;if(!L.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+fe),D.readPixels(G,j,J,W,Be.convert(Re),Be.convert(Ae),0);let Ke=F!==null?B.get(F).__webglFramebuffer:null;C.bindFramebuffer(D.FRAMEBUFFER,Ke);let nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ed(D,nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(Ne),D.deleteSync(nt),ie}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,G=null,j=0){let J=Math.pow(2,-j),W=Math.floor(E.image.width*J),ie=Math.floor(E.image.height*J),ue=G!==null?G.x:0,fe=G!==null?G.y:0;k.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,ue,fe,W,ie),C.unbindTexture()};let jd=D.createFramebuffer(),Yd=D.createFramebuffer();this.copyTextureToTexture=function(E,G,j=null,J=null,W=0,ie=null){let ue,fe,xe,we,Re,Ae,Ne,Ke,nt;ie===null&&(W!==0?(Yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=W,W=0):ie=0);let rt=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(j!==null)ue=j.max.x-j.min.x,fe=j.max.y-j.min.y,xe=j.isBox3?j.max.z-j.min.z:1,we=j.min.x,Re=j.min.y,Ae=j.isBox3?j.min.z:0;else{let en=Math.pow(2,-W);ue=Math.floor(rt.width*en),fe=Math.floor(rt.height*en),xe=E.isDataArrayTexture?rt.depth:E.isData3DTexture?Math.floor(rt.depth*en):1,we=0,Re=0,Ae=0}J!==null?(Ne=J.x,Ke=J.y,nt=J.z):(Ne=0,Ke=0,nt=0);let Je=Be.convert(G.format),ze=Be.convert(G.type),$e;G.isData3DTexture?(k.setTexture3D(G,0),$e=D.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(k.setTexture2DArray(G,0),$e=D.TEXTURE_2D_ARRAY):(k.setTexture2D(G,0),$e=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);let _t=D.getParameter(D.UNPACK_ROW_LENGTH),De=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ce=D.getParameter(D.UNPACK_SKIP_PIXELS),Xt=D.getParameter(D.UNPACK_SKIP_ROWS),To=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Re),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ae);let As=E.isDataArrayTexture||E.isData3DTexture,Fn=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){let en=B.get(E),Ri=B.get(G),yn=B.get(en.__renderTarget),Eo=B.get(Ri.__renderTarget);C.bindFramebuffer(D.READ_FRAMEBUFFER,yn.__webglFramebuffer),C.bindFramebuffer(D.DRAW_FRAMEBUFFER,Eo.__webglFramebuffer);for(let Ci=0;Ci<xe;Ci++)As&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,B.get(E).__webglTexture,W,Ae+Ci),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,B.get(G).__webglTexture,ie,nt+Ci)),D.blitFramebuffer(we,Re,ue,fe,Ne,Ke,ue,fe,D.DEPTH_BUFFER_BIT,D.NEAREST);C.bindFramebuffer(D.READ_FRAMEBUFFER,null),C.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||B.has(E)){let en=B.get(E),Ri=B.get(G);C.bindFramebuffer(D.READ_FRAMEBUFFER,jd),C.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yd);for(let yn=0;yn<xe;yn++)As?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,W,Ae+yn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,W),Fn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ri.__webglTexture,ie,nt+yn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ri.__webglTexture,ie),W!==0?D.blitFramebuffer(we,Re,ue,fe,Ne,Ke,ue,fe,D.COLOR_BUFFER_BIT,D.NEAREST):Fn?D.copyTexSubImage3D($e,ie,Ne,Ke,nt+yn,we,Re,ue,fe):D.copyTexSubImage2D($e,ie,Ne,Ke,we,Re,ue,fe);C.bindFramebuffer(D.READ_FRAMEBUFFER,null),C.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Fn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D($e,ie,Ne,Ke,nt,ue,fe,xe,Je,ze,rt.data):G.isCompressedArrayTexture?D.compressedTexSubImage3D($e,ie,Ne,Ke,nt,ue,fe,xe,Je,rt.data):D.texSubImage3D($e,ie,Ne,Ke,nt,ue,fe,xe,Je,ze,rt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ie,Ne,Ke,ue,fe,Je,ze,rt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ie,Ne,Ke,rt.width,rt.height,Je,rt.data):D.texSubImage2D(D.TEXTURE_2D,ie,Ne,Ke,ue,fe,Je,ze,rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,De),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,To),ie===0&&G.generateMipmaps&&D.generateMipmap($e),C.unbindTexture()},this.initRenderTarget=function(E){B.get(E).__webglFramebuffer===void 0&&k.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?k.setTextureCube(E,0):E.isData3DTexture?k.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?k.setTexture2DArray(E,0):k.setTexture2D(E,0),C.unbindTexture()},this.resetState=function(){R=0,P=0,F=null,C.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};function Ic(r,e){if(e===oc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===dr||e===xs){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===dr)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var vo=class extends dn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fc(t)}),this.register(function(t){return new Bc(t)}),this.register(function(t){return new Yc(t)}),this.register(function(t){return new Zc(t)}),this.register(function(t){return new qc(t)}),this.register(function(t){return new kc(t)}),this.register(function(t){return new Hc(t)}),this.register(function(t){return new Vc(t)}),this.register(function(t){return new Gc(t)}),this.register(function(t){return new Oc(t)}),this.register(function(t){return new Wc(t)}),this.register(function(t){return new zc(t)}),this.register(function(t){return new jc(t)}),this.register(function(t){return new Xc(t)}),this.register(function(t){return new Dc(t)}),this.register(function(t){return new Kc(t)}),this.register(function(t){return new Jc(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Un.extractUrlBase(e);a=Un.resolveURL(l,this.path)}else a=Un.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new rr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===kd){try{a[Oe.KHR_BINARY_GLTF]=new Qc(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Oe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new sh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Oe.KHR_MATERIALS_UNLIT:a[u]=new Uc;break;case Oe.KHR_DRACO_MESH_COMPRESSION:a[u]=new $c(s,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:a[u]=new eh;break;case Oe.KHR_MESH_QUANTIZATION:a[u]=new th;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function fm(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Dc=class{constructor(e){this.parser=e,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],vt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ds(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new us(h),l.distance=u;break;case"spot":l=new hs(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),_n(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Uc=class{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return $t}extendParams(e,t,n){let i=[];e.color=new be(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],vt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,it))}return Promise.all(i)}},Oc=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Fc=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ee(o,o)}return Promise.all(s)}},Bc=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},zc=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},kc=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,it)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Hc=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Vc=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(o[0],o[1],o[2],vt),Promise.all(s)}},Gc=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Wc=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(o[0],o[1],o[2],vt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,it)),Promise.all(s)}},Xc=class{constructor(e){this.parser=e,this.name=Oe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},jc=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},Yc=class{constructor(e){this.parser=e,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Zc=class{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},qc=class{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Kc=class{constructor(e){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},Jc=class{constructor(e){this.name=Oe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Gt.TRIANGLES&&l.mode!==Gt.TRIANGLE_STRIP&&l.mode!==Gt.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let m of u){let _=new ye,f=new T,g=new Rt,v=new T(1,1,1),x=new Gr(m.geometry,m.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&f.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,_.compose(f,g,v));for(let M in c)if(M==="_COLOR_0"){let w=c[M];x.instanceColor=new Yn(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,c[M]);tt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},kd="glTF",Ss=12,Od={JSON:1313821514,BIN:5130562},Qc=class{constructor(e){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ss),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ss,s=new DataView(e,Ss),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Od.JSON){let l=new Uint8Array(e,Ss+a,o);this.content=n.decode(l)}else if(c===Od.BIN){let l=Ss+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$c=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=ih[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=ih[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=_r[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let m in p.attributes){let _=p.attributes[m],f=c[m];f!==void 0&&(_.normalized=f)}u(p)},o,l,vt,d)})})}},eh=class{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},th=class{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}},xo=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,m=e*l,_=m-l,f=-2*p+3*d,g=p-d,v=1-f,x=g-d+u;for(let M=0;M!==o;M++){let w=a[_+M+o],R=a[_+M+c]*h,P=a[m+M+o],F=a[m+M]*h;s[M]=v*w+x*R+f*P+g*F}return s}},mm=new Rt,nh=class extends xo{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return mm.fromArray(s).normalize().toArray(s),s}},Gt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:Ut,9729:mt,9984:to,9985:lr,9986:xi,9987:fn},Bd={33071:jn,33648:Xi,10497:Xn},Pc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ih={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gm={CUBICSPLINE:void 0,LINEAR:hi,STEP:ci},Lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _m(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new _i({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),r.DefaultMaterial}function wi(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _n(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vm(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function xm(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ym(r){let e,t=r.extensions&&r.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nc(t.attributes):e=r.indices+":"+Nc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Nc(r.targets[n]);return e}function Nc(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function rh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Mm(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Sm=new ye,sh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fm,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new ls(this.options.manager):this.textureLoader=new ps(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return wi(s,o,i),_n(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Un.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Pc[i.type],o=_r[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ot(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Pc[i.type],l=_r[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,_,f;if(p&&p!==u){let g=Math.floor(d/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,x=t.cache.get(v);x||(_=new l(o,g*p,i.count*p/h),x=new Ji(_,p/h),t.cache.add(v,x)),f=new Qi(x,c,d%p/h,m)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),f=new ot(_,c,m);if(i.sparse!==void 0){let g=Pc.SCALAR,v=_r[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,w=new v(a[1],x,i.sparse.count*g),R=new l(a[2],M,i.sparse.count*c);o!==null&&(f=new ot(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let P=0,F=w.length;P<F;P++){let N=w[P];if(f.setX(N,R[P*c]),c>=2&&f.setY(N,R[P*c+1]),c>=3&&f.setZ(N,R[P*c+2]),c>=4&&f.setW(N,R[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=m}return f})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Fd[d.magFilter]||mt,h.minFilter=Fd[d.minFilter]||fn,h.wrapS=Bd[d.wrapS]||Xn,h.wrapT=Bd[d.wrapT]||Xn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==mt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){let f=new ct(_);f.needsUpdate=!0,d(f)}),t.load(Un.resolveURL(u,s.path),m,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),_n(u,a),u.userData.mimeType=a.mimeType||Mm(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Oe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new tr,Ct.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new er,Ct.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return _i}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[Oe.KHR_MATERIALS_UNLIT]){let u=i[Oe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],vt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,it)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Lt);let h=s.alphaMode||Lc.OPAQUE;if(h===Lc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Lc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==$t&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ee(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==$t&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==$t){let u=s.emissiveFactor;o.emissive=new be().setRGB(u[0],u[1],u[2],vt)}return s.emissiveTexture!==void 0&&a!==$t&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,it)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),_n(u,s),t.associations.set(u,{materials:e}),s.extensions&&wi(i,u,s),u})}createUniqueName(e){let t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return zd(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=ym(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=zd(new qe,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?_m(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,m=h.length;p<m;p++){let _=h[p],f=a[p],g,v=l[p];if(f.mode===Gt.TRIANGLES||f.mode===Gt.TRIANGLE_STRIP||f.mode===Gt.TRIANGLE_FAN||f.mode===void 0)g=s.isSkinnedMesh===!0?new kr(_,v):new lt(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),f.mode===Gt.TRIANGLE_STRIP?g.geometry=Ic(g.geometry,xs):f.mode===Gt.TRIANGLE_FAN&&(g.geometry=Ic(g.geometry,dr));else if(f.mode===Gt.LINES)g=new Wr(_,v);else if(f.mode===Gt.LINE_STRIP)g=new fi(_,v);else if(f.mode===Gt.LINE_LOOP)g=new Xr(_,v);else if(f.mode===Gt.POINTS)g=new jr(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(g.geometry.morphAttributes).length>0&&xm(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),_n(g,s),f.extensions&&wi(i,g,f),t.assignFinalMaterial(g),u.push(g)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&wi(i,u[0],s),u[0];let d=new wt;s.extensions&&wi(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ft(pr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Dn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_n(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new ye;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Vr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],m=i.samplers[p.sampler],_=p.target,f=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],m=u[2],_=u[3],f=u[4],g=[];for(let x=0,M=d.length;x<M;x++){let w=d[x],R=p[x],P=m[x],F=_[x],N=f[x];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let z=n._createAnimationTracks(w,R,P,F,N);if(z)for(let H=0;H<z.length;H++)g.push(z[H])}let v=new os(s,void 0,g);return _n(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Sm)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new $i:l.length>1?h=new wt:l.length===1?h=l[0]:h=new tt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),_n(h,s),s.extensions&&wi(n,h,s),s.matrix!==void 0){let u=new ye;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new wt;n.name&&(s.name=i.createUniqueName(n.name)),_n(s,n),n.extensions&&wi(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof Ct||d instanceof ct)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,c=[];$n[s.path]===$n.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch($n[s.path]){case $n.weights:l=cn;break;case $n.rotation:l=hn;break;case $n.translation:case $n.scale:l=un;break;default:n.itemSize===1?l=cn:l=un;break}let h=i.interpolation!==void 0?gm[i.interpolation]:hi,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let m=new l(c[d]+"."+$n[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=rh(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof hn?nh:xo;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bm(r,e,t){let n=e.attributes,i=new gt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){let h=rh(_r[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new T,c=new T;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){let _=rh(_r[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Et;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function zd(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=ih[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return He.workingColorSpace!==vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${He.workingColorSpace}" not supported.`),_n(r,e),bm(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vm(r,e.targets,t):r})}var Hd="data:application/octet-stream;base64,Z2xURgIAAACkwQAA2AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NC4zLjQ3IiwidmVyc2lvbiI6IjIuMCJ9LCJzY2VuZSI6MCwic2NlbmVzIjpbeyJuYW1lIjoiU2NlbmUiLCJub2RlcyI6WzBdfV0sIm5vZGVzIjpbeyJtZXNoIjowLCJuYW1lIjoiQ3VydmUuMDA0Iiwicm90YXRpb24iOlswLjUsMC41LC0wLjUsMC41XX1dLCJtYXRlcmlhbHMiOlt7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiRnJvc3RlZCBHbGFzcyAoZ2xhc3MpIn1dLCJtZXNoZXMiOlt7Im5hbWUiOiJDdXJ2ZS4wMDQiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjEsIlRFWENPT1JEXzAiOjIsIlRFWENPT1JEXzEiOjN9LCJpbmRpY2VzIjo0LCJtYXRlcmlhbCI6MH1dfV0sImFjY2Vzc29ycyI6W3siYnVmZmVyVmlldyI6MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjEwOTAsIm1heCI6WzMuNDIyMDE0NDc0ODY4Nzc0NCwwLC0wLjAwMTQxMDg0MTk0MTgzMzQ5Nl0sIm1pbiI6WzAuMDAxNDExMTMzNjc4NjI5OTk0NCwtMC4yNjk5OTk5ODA5MjY1MTM2NywtMy43MzQ0OTg1MDA4MjM5NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxMDkwLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjEwOTAsInR5cGUiOiJWRUMyIn0seyJidWZmZXJWaWV3IjozLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTA5MCwidHlwZSI6IlZFQzIifSx7ImJ1ZmZlclZpZXciOjQsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoyMzUyLCJ0eXBlIjoiU0NBTEFSIn1dLCJidWZmZXJWaWV3cyI6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4cABvtX6RcC/3UdA4cABvtX6RcC/3UdA4cABvtX6RcCX8UdA4cABvluDRMCX8UdA4cABvluDRMCX8UdA4cABvluDRMC7K0hA4cABvsIXQ8C7K0hA4cABvsIXQ8C7K0hA4cABvsIXQ8AUikhA4cABvjC6QcAUikhA4cABvjC6QcAUikhA4cABvjC6QcCMCklA4cABvstsQMCMCklA4cABvstsQMCMCklA4cABvstsQMANq0lA4cABvroxP8ANq0lA4cABvroxP8ANq0lA4cABvroxP8CAaUpA4cABviQLPsCAaUpA4cABviQLPsCAaUpA4cABviQLPsDPQ0tA4cABvi/7PMDPQ0tA4cABvi/7PMDPQ0tA4cABvi/7PMDkN0xA4cABvgIEPMDkN0xA4cABvgIEPMDkN0xA4cABvgIEPMCpQ01A4cABvsMnO8CpQ01A4cABvsMnO8CpQ01A4cABvsMnO8AHZU5A4cABvploOsAHZU5A4cABvploOsAHZU5A4cABvploOsDomU9A4cABvqvIOcDomU9A4cABvqvIOcDomU9A4cABvqvIOcA14FBA4cABviBKOcA14FBA4cABviBKOcA14FBA4cABviBKOcBFoE1A4cABvqJMNsBFoE1A4cABvqJMNsA0pERA4cABvkUILsA0pERA4cABvkUILsCiETdA4cABvjaLIcCiETdA4cABvjaLIcAwDiZA4cABvqHjEcAwDiZA4cABvqHjEcB+vxJA4cABvrMfAMB+vxJA4cABvrMfAMBYlvw/4cABvjGb2r9Ylvw/4cABvjGb2r+0rdM/4cABvvz2tL+0rdM/4cABvvz2tL9QEK0/4cABviBvkb9QEK0/4cABviBvkb9sCYs/4cABvuw/ZL9sCYs/4cABvuw/ZL+SyF8/4cABvrBLMr+SyF8/4cABvrBLMr9O2Ds/4cABvjw6Eb9O2Ds/4cABvjw6Eb+M2C4/4cABvjtEBb+M2C4/4cABvjtEBb+M2C4/4cABvjtEBb+rRE9A4cABvjtEBb+rRE9A4cABvjtEBb+rRE9A4cABvjtEBb8rB09A4cABvkdbA78rB09A4cABvkdbA78rB09A4cABvkdbA79hzk5A4cABvvVmAb9hzk5A4cABvvVmAb9hzk5A4cABvvVmAb9rmk5A4cABvovP/r5rmk5A4cABvovP/r5rmk5A4cABvovP/r5oa05A4cABvnK8+r5oa05A4cABvnK8+r5oa05A4cABvnK8+r54QU5A4cABvqCV9r54QU5A4cABvqCV9r54QU5A4cABvqCV9r66HE5A4cABvhRc8r66HE5A4cABvhRc8r66HE5A4cABvhRc8r5O/U1A4cABvs8Q7r5O/U1A4cABvs8Q7r5O/U1A4cABvs8Q7r5S401A4cABvtK06b5S401A4cABvtK06b5S401A4cABvtK06b7mzk1A4cABvh1J5b7mzk1A4cABvh1J5b7mzk1A4cABvh1J5b4pwE1A4cABvrDO4L4pwE1A4cABvrDO4L4pwE1A4cABvrDO4L46t01A4cABvoxG3L46t01A4cABvoxG3L46t01A4cABvoxG3L46tE1A4cABvrKx1746tE1A4cABvrKx1746tE1A4cABvrKx175o0k1A4cABvkc/yb5o0k1A4cABvkc/yb5o0k1A4cABvkc/yb5SKk5A4cABvgJku75SKk5A4cABvgJku75SKk5A4cABvgJku74IuE5A4cABvmBArr4IuE5A4cABvmBArr4IuE5A4cABvmBArr6Zd09A4cABvt/0ob6Zd09A4cABvt/0ob6Zd09A4cABvt/0ob4WZVBA4cABvvyhlr4WZVBA4cABvvyhlr4WZVBA4cABvvyhlr6OfFFA4cABvjRojL6OfFFA4cABvjRojL6OfFFA4cABvjRojL4RulJA4cABvgVog74RulJA4cABvgVog74RulJA4cABvgVog76uGVRA4cABvtiDd76uGVRA4cABvtiDd76uGVRA4cABvtiDd751l1VA4cABvs4sa751l1VA4cABvs4sa751l1VA4cABvs4sa753L1dA4cABvuULYr53L1dA4cABvuULYr53L1dA4cABvuULYr7C3VhA4cABvhliXL7C3VhA4cABvhliXL7C3VhA4cABvhliXL5nnlpA4cABvmRwWr5nnlpA4cABvmRwWr5nnlpA4cABvmRwWr5nnlpA4cABvmRwWr66plpAcD2KvoxwWr66plpAcD2KvoxwWr66plpAcD2KvoxwWr66plpAcD2KvoxwWr4Nr1pAcD2KvglxWr4Nr1pAcD2KvglxWr4Nr1pAcD2KvglxWr4Nr1pAcD2KvglxWr5gt1pAcD2KvuJxWr5gt1pAcD2KvuJxWr5gt1pA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4cABvpomfb/GHj4+4cABvpomfb+ssW4+4cABvsouhL+ssW4+4cABvsouhL9Cfro+4cABvn6vk79Cfro+4cABvn6vk7+g9g8/4cABvsQaq7+g9g8/4cABvsQaq7+3iU8/4cABvvh1yL+3iU8/4cABvvh1yL+Z14s/4cABvnXG6b+Z14s/4cABvnXG6b/wDrI/4cABvsyIBsDwDrI/4cABvsyIBsBHRtg/4cABvl0uGMBHRtg/4cABvl0uGMAFWfw/4cABvpzWKMAFWfw/4cABvpzWKMBIEQ5A4cABvjaEN8BIEQ5A4cABvjaEN8AovxpA4cABvtk5Q8AovxpA4cABvtk5Q8DVIyNA4cABvjP6SsDVIyNA4cABvjP6SsAELSZA4cABvvHHTcAELSZA4cABvvHHTcAELSZA4cABvvHHTcDK9bg64cABvvHHTcDK9bg64cABvvHHTcDK9bg64cABvvHHTcDK9bg64cABvk5lW8DK9bg64cABvk5lW8DK9bg64cABvk5lW8DJoRo84cABvg8OW8DJoRo84cABvg8OW8DJoRo84cABvg8OW8BDJ5E84cABviW9WsBDJ5E84cABviW9WsBDJ5E84cABviW9WsBU+dY84cABvsRyWsBU+dY84cABvsRyWsBU+dY84cABvsRyWsD7Vg894cABviAvWsD7Vg894cABviAvWsD7Vg894cABviAvWsAEFjQ94cABvm3yWcAEFjQ94cABvm3yWcAEFjQ94cABvm3yWcA0rVk94cABvt68WcA0rVk94cABvt68WcA0rVk94cABvt68WcD9B4A94cABvqiOWcD9B4A94cABvqiOWcD9B4A94cABvqiOWcDjmJM94cABvv9nWcDjmJM94cABvv9nWcDjmJM94cABvv9nWcADg6c94cABvhZJWcADg6c94cABvhZJWcADg6c94cABvhZJWcAVwLs94cABviIyWcAVwLs94cABviIyWcAVwLs94cABviIyWcDQSdA94cABvlcjWcDQSdA94cABvlcjWcDQSdA94cABvlcjWcDsGeU94cABvuccWcDsGeU94cABvuccWcDsGeU94cABvuccWcDRNOU94cABvuYcWcDRNOU94cABvuYcWcDRNOU94cABvuYcWcAtf+U94cABvuIcWcAtf+U94cABvuIcWcCB7+U94cABvtwcWcCB7+U9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AAAAAE7/f781GR49AAAAACvPf78AAAAAAACAPwAAAAAwu5Y7AAAAAE7/f79qits7AAAAAIj+f78AAAAAAACAPwAAAABqits7AAAAAIj+f78AAAAAAACAPwAAAABfKMs7AAAAAL7+f79qits7AAAAAIj+f78AAAAAAACAPwAAAABfKMs7AAAAAL7+f78vb847AAAAALT+f78AAAAAAACAPwAAAAAvb847AAAAALT+f7+cQ9g7AAAAAJT+f78AAAAAAACAPwAAAACcQ9g7AAAAAJT+f78AAAAAAACAPwAAAAAvb847AAAAALT+f7+cQ9g7AAAAAJT+f78AAAAAAACAPwAAAABfKMs7AAAAAL7+f78vb847AAAAALT+f78AAAAAAACAPwAAAABfKMs7AAAAAL7+f79qits7AAAAAIj+f78AAAAAAACAPwAAAABqits7AAAAAIj+f78AAAAAAACAPwAAAABqits7AAAAAIj+f79XXRg8AAAAACr9f78AAAAAAACAPwAAAABXXRg8AAAAACr9f7/VuI29AAAAAOZif78AAAAAAACAPwAAAADVuI29AAAAAOZif7+EDVO+AAAAAOuAer8AAAAAAACAPwAAAACEDVO+AAAAAOuAer91i6y+AAAAAGoGcb8AAAAAAACAPwAAAAB1i6y+AAAAAGoGcb9eKOu+AAAAAKhmY78AAAAAAACAPwAAAABeKOu+AAAAAKhmY7/9QRK/AAAAADgbUr8AAAAAAACAPwAAAAD9QRK/AAAAADgbUr++/yu/AAAAAG2cPb8AAAAAAACAPwAAAAC+/yu/AAAAAG2cPb8eqEK/AAAAAGREJr8AAAAAAACAPwAAAAAeqEK/AAAAAGREJr/kG1a/AAAAAEBVDL8AAAAAAACAPwAAAADkG1a/AAAAAEBVDL/1KWa/AAAAAOYl4L4AAAAAAACAPwAAAAD1KWa/AAAAAOYl4L4Xl3K/AAAAADGJo74AAAAAAACAPwAAAAAXl3K/AAAAADGJo75sHHu/AAAAACMrR74AAAAAAACAPwAAAABsHHu/AAAAACMrR76RdH+/AAAAAKKGhb0AAAAAAACAPwAAAACRdH+/AAAAAKKGhb0/5H+/AAAAALFh7jwAAAAAAACAPwAAAADMBX+/AAAAAIbJsj0/5H+/AAAAALFh7jwAAAAAAACAPwAAAABpSn2/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AAAAAMlTVb8AAAAAAACAvwAAAACpsfA+AAAAAL/yYb+RHgM/AAAAAD7fW78AAAAAAACAvwAAAABcbdo+AAAAAOyIZ7+psfA+AAAAAL/yYb8AAAAAAACAvwAAAACNbcM+AAAAACmebL9cbdo+AAAAAOyIZ78AAAAAAACAvwAAAABTyKs+AAAAAEApcb+NbcM+AAAAACmebL8AAAAAAACAvwAAAADfjZM+AAAAAHwjdb9TyKs+AAAAAEApcb8AAAAAAACAvwAAAAB/j3U+AAAAALqHeL/fjZM+AAAAAHwjdb8AAAAAAACAvwAAAADPEUM+AAAAAONPe79/j3U+AAAAALqHeL8AAAAAAACAvwAAAADVxA8+AAAAAN12fb/PEUM+AAAAAONPe78AAAAAAACAvwAAAAAts7c9AAAAANX3fr/VxA8+AAAAAN12fb8AAAAAAACAvwAAAAA1GR49AAAAACvPf78ts7c9AAAAANX3fr8AAAAAAACAvwAAAAAwu5Y7AAAAAE7/f781GR49AAAAACvPf78AAAAAAACAvwAAAAAwu5Y7AAAAAE7/f79qits7AAAAAIj+f78AAAAAAACAvwAAAABqits7AAAAAIj+f78AAAAAAACAvwAAAABfKMs7AAAAAL7+f79qits7AAAAAIj+f78AAAAAAACAvwAAAABfKMs7AAAAAL7+f78vb847AAAAALT+f78AAAAAAACAvwAAAAAvb847AAAAALT+f7+cQ9g7AAAAAJT+f78AAAAAAACAvwAAAACcQ9g7AAAAAJT+f78AAAAAAACAvwAAAAAvb847AAAAALT+f7+cQ9g7AAAAAJT+f78AAAAAAACAvwAAAABfKMs7AAAAAL7+f78vb847AAAAALT+f78AAAAAAACAvwAAAABfKMs7AAAAAL7+f79qits7AAAAAIj+f78AAAAAAACAvwAAAABqits7AAAAAIj+f78AAAAAAACAvwAAAABqits7AAAAAIj+f79XXRg8AAAAACr9f78AAAAAAACAvwAAAABXXRg8AAAAACr9f7/VuI29AAAAAOZif78AAAAAAACAvwAAAADVuI29AAAAAOZif7+EDVO+AAAAAOuAer8AAAAAAACAvwAAAACEDVO+AAAAAOuAer91i6y+AAAAAGoGcb8AAAAAAACAvwAAAAB1i6y+AAAAAGoGcb9eKOu+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pwO6A8gDgQODA4YDeQN7A34DgQOGA4kDgQOJA4wDdwN5A34DgQOMA48DgQOPA5IDdQN3A34DgQOSA5UDgQOVA5gDcwN1A34DgQOYA5sDgQObA54DcQNzA34DgQOeA6EDgQOhA6QDbwNxA34DfgOBA6QDfgOkA6cDfgOnA8gDfgPIA8sDfgPLA84DfgPOA9EDfgPRA9QDfgPUA9cDfgPXA9oDfgPaA90DfgPdA+ADfgPgA+MDfgPjA+YDfgPmA+kDfgPpA+wDfgPsA+8DfgPvA/IDfgPyA/UDfgP1A/gDfgP4A/sDfgP7A/4DfgP+AwEEfgMBBAQEfgMEBAcEfgMHBAoEDQQRBBQEfgMKBA0EfgMNBBQEfgMUBBYEfgMWBBgEfgMYBBoEfgMaBBwEfgMcBB4EfgMeBCAEfgMgBCIEfgMiBCQEfgMkBCYEfgMmBCgEKAQqBCwELgQwBDIEKAQsBC4EfgMoBC4EMgQ0BDYEfgMuBDIEfgMyBDYEOAQ6BDwEfgM2BDgEbwN+AzgEOAQ8BD4EQAQVAhgCOAQ+BEAEbQNvAzgEawNtAzgEOARABBgCOAQYAhsCaQNrAzgEZANnA2kDYQNkA2kDaQM4BBsCaQMbAh4CXgNhA2kDWwNeA2kDaQMeAiECaQMhAiQCWANbA2kDVQNYA2kDaQMkAicCaQMnAioCUgNVA2kDTwNSA2kDaQMqAi0CaQMtAjACTANPA2kDSQNMA2kDaQMwAjMCaQMzAjYCRgNJA2kDQwNGA2kDaQM2AjkCaQM5AjwCQANDA2kDPQNAA2kDaQM8Aj8CaQM/AkICOgM9A2kDOgNpA0ICOgNCAkUCNwM6A0UCNwNFAkgCNAM3A0gCNANIAksCMQM0A0sCMQNLAk4CLgMxA04CLgNOAlECKwMuA1ECKwNRAlQCKAMrA1QCKANUAlcCJQMoA1cCWgJdAmACJQNXAloCIgMlA1oCWgJgAmICWgJiAmQCIgNaAmQCIgNkAmYCGgMcAx8DIgNmAmgCGgMfAyIDFAMXAxoDEgMUAxoDIgNoAmoCbAJuAnACIgNqAmwCEAMSAxoDDgMQAxoDIgNsAnACIgNwAnICDAMOAxoDCgMMAxoDIgNyAnQCdwJ6AnwCIgN0AncCCAMKAxoDBgMIAxoDGgMiA3cCdwJ8An8CdwJ/AoICBgMaA3cCBAMGA3cCdwKCAoUCdwKFAogCAgMEA3cCwQL0AgIDvgLBAgIDdwKIAosCdwKLAo4CvgICA3cCuwK+AncCdwKOApECdwKRApQCuAK7AncCtQK4AncCdwKUApcCdwKXApoCsgK1AncCrwKyAncCdwKaAp0CdwKdAqACrAKvAncCqQKsAncCdwKgAqMCpgKpAncCdwKjAqYCWQFWAVQBUQFOAUwBXAFZAVQBXwFcAVQBUQFMAUoBYgFfAVQBZQFiAVQBUQFKAUgBaAFlAVQBawFoAVQBUQFIAUYBbgFrAVQBcQFuAVQBUQFGAUQBdAFxAVQBdwF0AVQBUQFEAUIBdwFUAVEBgAF9AXoBegF3AVEBgAF6AVEBiAGFAYIBggGAAVEBiAGCAVEBiwGIAVEBjQGLAVEBlgGTAZABkAGNAVEBlgGQAVEBmwGYAZYBmwGWAVEBngGbAVEBoQGeAVEBpAGhAVEBpwGkAVEBqgGnAVEBrQGqAVEBsAGtAVEBswGwAVEBtgGzAVEBuQG2AVEBvAG5AVEBvwG8AVEBwgG/AVEBxQHCAVEByAHFAVEBywHIAVEBzgHLAVEB0QHOAVEB1AHRAVEB1wHUAVEB2gHXAVEB3QHaAVEB4AHdAVEB5wHkAeAB6QHnAeAB6QHgAVEB6wHpAVEB7QHrAVEB7wHtAVEB8QHvAVEB8wHxAVEB9QHzAVEB9wH1AVEB+QH3AVEB/wH9AfsB+wH5AVEB/wH7AVEBBQIDAgECAQL/AVEBBQIBAlEBCQIHAgUCDwINAgsCCwIJAgUCCwIFAlEBEQIPAgsCAwAAABMCEwIRAgsCCwJRAUIBCwJCAUABAwATAgsCBgADAAsCCwJAAT4BPAE6ATcBCwI+ATwBCQAGAAsCDAAJAAsCCwI8ATcBCwI3ATQBDwAMAAsCEgAPAAsCCwI0ATEBCwIxAS4BFQASAAsCGAAVAAsCCwIuASsBCwIrASgBGwAYAAsCHgAbAAsCCwIoASUBCwIlASIBIQAeAAsCJAAhAAsCCwIiAR8BCwIfARwBJwAkAAsCKgAnAAsCCwIcARkBCwIZARYBLQAqAAsCMAAtAAsCCwIWARMBCwITARABMAALAhABMAAQAQ0BMwAwAA0BMwANAQoBNgAzAAoBNgAKAQcBOQA2AAcBOQAHAQQBPAA5AAQBPAAEAQEBPwA8AAEBPwABAf4AQgA/AP4AQgD+APsASwBIAEUARQBCAPsARQD7APgATQBLAEUATwBNAEUARQD4APUA8gDvAO0ATwBFAPUA9QDyAO0A7QDqAOcA7QDnAOUAUQBPAPUAUwBRAPUA7QDlAOMA7QDjAOEAVQBTAPUAWQBXAFUAXQBbAFkAXQBZAFUA7QDhAN8A7QDfAN0AXQBVAPUAXwBdAPUA7QDdANsA7QDbANkAYgBfAPUAZwBlAGIAagBnAGIAYgD1AO0A7QDZANcA1QDTAKwA7QDXANUAagBiAO0AbQBqAO0A7QDVAKwA7QCsAKkAcABtAO0AcwBwAO0A7QCpAKYA7QCmAKMAdgBzAO0AeQB2AO0A7QCjAKAA7QCgAJ0AfAB5AO0AfwB8AO0A7QCdAJoA7QCaAJcAggB/AO0AhQCCAO0A7QCXAJQA7QCUAJEAiACFAO0AiwCIAO0A7QCRAI4A7QCOAIsA7gLxAv8C6gLtAv4C5gLpAv0C4gLlAvwC3gLhAvsC2gLdAvoC1gLZAvkC0gLVAvgCzgLRAvcCygLNAvYCxQLJAvUCxALIAgED4QHlARIE4QESBA4E4wHmARME4wETBBAE5gHoARUE5gEVBBME6AHqARcE6AEXBBUE6gHsARkE6gEZBBcE7AHuARsE7AEbBBkE7gHwAR0E7gEdBBsE8AHyAR8E8AEfBB0E8gH0ASEE8gEhBB8E9AH2ASME9AEjBCEE9gH4ASUE9gElBCME+AH6AScE+AEnBCUE+gH8ASkE+gEpBCcE/gEAAi0E/gEtBCsE3gHiAQ8E3gEPBAsEAAICAi8EAAIvBC0E2wHfAQwE2wEMBAgE2AHcAQkE2AEJBAUEAgIEAjEEAgIxBC8E1QHZAQYE1QEGBAIE0gHWAQME0gEDBP8DzwHTAQAEzwEABPwDzAHQAf0DzAH9A/kDBAIGAjMEBAIzBDEEyQHNAfoDyQH6A/YDxgHKAfcDxgH3A/MDwwHHAfQDwwH0A/ADwQHEAfEDwQHxA+4DBgIIAjUEBgI1BDMEvgHAAe0DvgHtA+sDuwG9AeoDuwHqA+gDCAIKAjcECAI3BDUEuAG6AecDuAHnA+UDtQG3AeQDtQHkA+IDsgG0AeEDsgHhA98DCgIMAjkECgI5BDcErwGxAd4DrwHeA9wDrAGuAdsDrAHbA9kDqQGrAdgDqQHYA9YDVQFYAYUDVQGFA4IDVwFbAYgDVwGIA4QDDAIOAjsEDAI7BDkEWgFeAYsDWgGLA4cDpgGoAdUDpgHVA9MDXQFhAY4DXQGOA4oDYAFkAZEDYAGRA40DYwFnAZQDYwGUA5ADowGlAdIDowHSA9ADZgFqAZcDZgGXA5MDaQFtAZoDaQGaA5YDoAGiAc8DoAHPA80DbAFwAZ0DbAGdA5kDbwFzAaADbwGgA5wDcgF2AaMDcgGjA58DnQGfAcwDnQHMA8oDdQF5AaYDdQGmA6IDeAF8AakDeAGpA6UDewF+AasDewGrA6gDfwGBAa4DfwGuA6wDgQGEAbEDgQGxA64DgwGGAbMDgwGzA7ADhwGJAbYDhwG2A7QDigGMAbkDigG5A7cDjAGPAbwDjAG8A7kDjgGSAb8DjgG/A7sDkQGUAcEDkQHBA74DlQGXAcQDlQHEA8IDlwGZAcYDlwHGA8QDmgGcAckDmgHJA8cDDgIQAj0EDgI9BDsEEAISAj8EEAI/BD0EEgIUAkEEEgJBBD8EFAIBABYCFAIWAkEEAgAEABkCAgAZAhcCBQAHABwCBQAcAhoCUAFTAYADUAGAA30DCAAKAB8CCAAfAh0CTwFSAX8DTwF/A3wDCwANACICCwAiAiACDgAQACUCDgAlAiMCEQATACgCEQAoAiYCTQFPAXwDTQF8A3oDFAAWACsCFAArAikCFwAZAC4CFwAuAiwCGgAcADECGgAxAi8CHQAfADQCHQA0AjICIAAiADcCIAA3AjUCIwAmADsCIwA7AjgCJQApAD4CJQA+AjoCKAAsAEECKABBAj0CSwFNAXoDSwF6A3gDKwAvAEQCKwBEAkACLgAyAEcCLgBHAkMCMQA1AEoCMQBKAkYCNAA4AE0CNABNAkkCNwA7AFACNwBQAkwCOgA+AFMCOgBTAk8CPQBBAFYCPQBWAlICQABEAFkCQABZAlUCQwBHAFwCQwBcAlgCRgBJAF4CRgBeAlsCSgBMAGECSgBhAl8CSQFLAXgDSQF4A3YDTABOAGMCTABjAmECTgBQAGUCTgBlAmMCRwFJAXYDRwF2A3QDUABSAGcCUABnAmUCRQFHAXQDRQF0A3IDUgBUAGkCUgBpAmcCQwFFAXIDQwFyA3ADVABWAGsCVABrAmkCQQFDAXADQQFwA24DVgBYAG0CVgBtAmsCPwFBAW4DPwFuA2wDWABaAG8CWABvAm0CPQE/AWwDPQFsA2oDOwE9AWoDOwFqA2gDWgBcAHECWgBxAm8COQE7AWgDOQFoA2YDNQE4AWUDNQFlA2IDMgE2AWMDMgFjA18DLwEzAWADLwFgA1wDLAEwAV0DLAFdA1kDKQEtAVoDKQFaA1YDJgEqAVcDJgFXA1MDIwEnAVQDIwFUA1ADIAEkAVEDIAFRA00DXABeAHMCXABzAnECHQEhAU4DHQFOA0oDGgEeAUsDGgFLA0cDFwEbAUgDFwFIA0QDFQEYAUUDFQFFA0IDEgEUAUEDEgFBAz8DDwERAT4DDwE+AzwDDAEOATsDDAE7AzkDCQELATgDCQE4AzYDBgEIATUDBgE1AzMDAwEFATIDAwEyAzADXgBgAHUCXgB1AnMCAAECAS8DAAEvAy0D/QD/ACwD/QAsAyoD+gD8ACkD+gApAycD9wD5ACYD9wAmAyQD9AD2ACMD9AAjAyED8ADzACAD8AAgAx0D7gDxAB4D7gAeAxsDYABjAHgCYAB4AnUCYQBkAHkCYQB5AnYCZgBoAH0CZgB9AnsCaQBrAIACaQCAAn4CbABuAIMCbACDAoECbwBxAIYCbwCGAoQCcgB0AIkCcgCJAocCdQB3AIwCdQCMAooCeAB6AI8CeACPAo0CewB9AJICewCSApACfgCAAJUCfgCVApMCgQCDAJgCgQCYApYChACGAJsChACbApkChwCKAJ8ChwCfApwCiQCNAKICiQCiAp4CjACQAKUCjAClAqECjwCTAKgCjwCoAqQCkgCWAKsCkgCrAqcClQCZAK4ClQCuAqoCmACcALECmACxAq0CmwCfALQCmwC0ArACngCiALcCngC3ArMCoQClALoCoQC6ArYCpACoAL0CpAC9ArkCpwCrAMACpwDAArwCqgCtAMICqgDCAr8CzwDSAPMCzwDzAvAC0QDUAAAD0QAAA/ICzADOAO8CzADvAuwCyQDLAOsCyQDrAugCxgDIAOcCxgDnAuQCwwDFAOMCwwDjAuACwADCAN8CwADfAtwCvQC/ANsCvQDbAtgCugC8ANcCugDXAtQCtwC5ANMCtwDTAtACtAC2AM8CtADPAswCsQCzAMsCsQDLAscCrgCwAMYCrgDGAsMC1ADWAAMD1AADAwAD1gDYAAUD1gAFAwMD2ADaAAcD2AAHAwUD2gDcAAkD2gAJAwcD3ADeAAsD3AALAwkD3gDgAA0D3gANAwsD4ADiAA8D4AAPAw0D4gDkABED4gARAw8D5ADmABMD5AATAxED5gDoABUD5gAVAxMD6QDsABkD6QAZAxYD6ADrABgD6AAYAxUD";var Vd="data:application/octet-stream;base64,Z2xURgIAAACQcAAArAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NC4zLjQ3IiwidmVyc2lvbiI6IjIuMCJ9LCJleHRlbnNpb25zVXNlZCI6WyJLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyIl0sInNjZW5lIjowLCJzY2VuZXMiOlt7Im5hbWUiOiJTY2VuZSIsIm5vZGVzIjpbMF19XSwibm9kZXMiOlt7Im1lc2giOjAsIm5hbWUiOiJDdXJ2ZS4wMDIiLCJyb3RhdGlvbiI6WzAuNSwwLjUsLTAuNSwwLjVdLCJ0cmFuc2xhdGlvbiI6WzAuNDA0ODAzOTYxNTE1NDI2NjQsMCwwXX1dLCJtYXRlcmlhbHMiOlt7ImFscGhhTW9kZSI6IkJMRU5EIiwiZG91YmxlU2lkZWQiOnRydWUsImV4dGVuc2lvbnMiOnsiS0hSX21hdGVyaWFsc19zcGVjdWxhciI6eyJzcGVjdWxhckZhY3RvciI6MC4wNzk5OTk5OTgyMTE4NjA2Nn19LCJuYW1lIjoiRnJvc3RlZCBHbGFzcyIsInBick1ldGFsbGljUm91Z2huZXNzIjp7Im1ldGFsbGljRmFjdG9yIjowfX1dLCJtZXNoZXMiOlt7Im5hbWUiOiJDdXJ2ZS4wMDIiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjEsIlRFWENPT1JEXzAiOjIsIlRFWENPT1JEXzEiOjN9LCJpbmRpY2VzIjo0LCJtYXRlcmlhbCI6MH1dfV0sImFjY2Vzc29ycyI6W3siYnVmZmVyVmlldyI6MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjYxMiwibWF4IjpbMi4wODc2MzU1MTcxMjAzNjEzLDAsLTAuMDAyMzk3MjM5MjA4MjIxNDM1NV0sIm1pbiI6WzAuMDAwODc1NTk5MzMzMDg1MTE5NywtMC4wNTYzMzY3MDgzNjY4NzA4OCwtMS43ODAzNTE5OTY0MjE4MTRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjYxMiwidHlwZSI6IlZF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Qa4JPAAAgD9Brgk8AACAP0GuiTwAAIA/Qa6JPAAAgD9Brok8AACAP2GFzjwAAIA/YYXOPAAAgD9hhc48AACAP0GuCT0AAIA/Qa4JPQAAgD9Brgk9AACAP9EZLD0AAIA/0RksPQAAgD/RGSw9AACAP2GFTj0AAIA/YYVOPQAAgD9hhU49AACAP/HwcD0AAIA/8fBwPQAAgD/x8HA9AACAP0GuiT0AAIA/Qa6JPQAAgD9Brok9AACAPwnkmj0AAIA/CeSaPQAAgD8J5Jo9AACAP9EZrD0AAIA/0RmsPQAAgD/RGaw9AACAP5lPvT0AAIA/mU+9PQAAgD+ZT709AACAP2GFzj0AAIA/YYXOPQAAgD9hhc49AACAPym73z0AAIA/KbvfPQAAgD/x8PA9AACAP/Hw8D0AAIA/XRMBPgAAgD9dEwE+AACAP0GuCT4AAIA/Qa4JPgAAgD8lSRI+AACAPyVJEj4AAIA/CeQaPgAAgD8J5Bo+AACAP+1+Iz4AAIA/7X4jPgAAgD/RGSw+AACAP9EZLD4AAIA/tbQ0PgAAgD+1tDQ+AACAP5lPPT4AAIA/mU89PgAAgD996kU+AACAP33qRT4AAIA/YYVOPgAAgD9hhU4+AACAP2GFTj4AAIA/RSBXPgAAgD9FIFc+AACAP0UgVz4AAIA/KbtfPgAAgD8pu18+AACAPym7Xz4AAIA/DVZoPgAAgD8NVmg+AACAPw1WaD4AAIA/8fBwPgAAgD/x8HA+AACAP/HwcD4AAIA/1Yt5PgAAgD/Vi3k+AACAP9WLeT4AAIA/XROBPgAAgD9dE4E+AACAP10TgT4AAIA/z2CFPgAAgD/PYIU+AACAP89ghT4AAIA/Qa6JPgAAgD9Brok+AACAP0GuiT4AAIA/s/uNPgAAgD+z+40+AACAP7P7jT4AAIA/JUmSPgAAgD8lSZI+AACAPyVJkj4AAIA/l5aWPgAAgD+XlpY+AACAP5eWlj4AAIA/CeSaPgAAgD8J5Jo+AACAPwnkmj4AAIA/ezGfPgAAgD97MZ8+AACAP+1+oz4AAIA/7X6jPgAAgD9fzKc+AACAP1/Mpz4AAIA/0RmsPgAAgD/RGaw+AACAP0NnsD4AAIA/Q2ewPgAAgD+1tLQ+AACAP7W0tD4AAIA/JwK5PgAAgD8nArk+AACAP5lPvT4AAIA/mU+9PgAAgD8LncE+AACAPwudwT4AAIA/ferFPgAAgD996sU+AACAP+83yj4AAIA/7zfKPgAAgD9hhc4+AACAP2GFzj4AAIA/YYXOPgAAgD/T0tI+AACAP9PS0j4AAIA/09LSPgAAgD9FINc+AACAP0Ug1z4AAIA/RSDXPgAAgD+3bds+AACAP7dt2z4AAIA/t23bPgAAgD8pu98+AACAPym73z4AAIA/KbvfPgAAgD+bCOQ+AACAP5sI5D4AAIA/mwjkPgAAgD8NVug+AACAPw1W6D4AAIA/DVboPgAAgD9/o+w+AACAP3+j7D4AAIA/f6PsPgAAgD/x8PA+AACAP/Hw8D4AAIA/8fDwPgAAgD9jPvU+AACAP2M+9T4AAIA/Yz71PgAAgD/Vi/k+AACAP9WL+T4AAIA/1Yv5PgAAgD9H2f0+AACAP0fZ/T4AAIA/R9n9PgAAgD9dEwE/AACAP10TAT8AAIA/XRMBPwAAgD8WOgM/AACAPxY6Az8AAIA/z2AFPwAAgD/PYAU/AACAP4iHBz8AAIA/iIcHPwAAgD9Brgk/AACAP0GuCT8AAIA/+tQLPwAAgD/61As/AACAP7P7DT8AAIA/s/sNPwAAgD9sIhA/AACAP2wiED8AAIA/JUkSPwAAgD8lSRI/AACAP95vFD8AAIA/3m8UPwAAgD+XlhY/AACAP5eWFj8AAIA/UL0YPwAAgD9QvRg/AACAP1C9GD8AAIA/CeQaPwAAgD8J5Bo/AACAPwnkGj8AAIA/wgodPwAAgD/CCh0/AACAP8IKHT8AAIA/ezEfPwAAgD97MR8/AACAP3sxHz8AAIA/NFghPwAAgD80WCE/AACAPzRYIT8AAIA/7X4jPwAAgD/tfiM/AACAP+1+Iz8AAIA/pqUlPwAAgD+mpSU/AACAP6alJT8AAIA/X8wnPwAAgD9fzCc/AACAP1/MJz8AAIA/GPMpPwAAgD8Y8yk/AACAPxjzKT8AAIA/0RksPwAAgD/RGSw/AACAP9EZLD8AAIA/ikAuPwAAgD+KQC4/AACAP4pALj8AAIA/Q2cwPwAAgD9DZzA/AACAP0NnMD8AAIA//I0yPwAAgD/8jTI/AACAP/yNMj8AAIA/tbQ0PwAAgD+1tDQ/AACAP7W0ND8AAIA/bts2PwAAgD9u2zY/AACAPycCOT8AAIA/JwI5PwAAgD/gKDs/AACAP+AoOz8AAIA/mU89PwAAgD+ZTz0/AACAP1J2Pz8AAIA/UnY/PwAAgD8LnUE/AACAPwudQT8AAIA/xMNDPwAAgD/Ew0M/AACAP33qRT8AAIA/fepFPwAAgD82EUg/AACAPzYRSD8AAIA/7zdKPwAAgD/vN0o/AACAP6heTD8AAIA/qF5MPwAAgD9hhU4/AACAP2GFTj8AAIA/YYVOPwAAgD8arFA/AACAPxqsUD8AAIA/GqxQPwAAgD/T0lI/AACAP9PSUj8AAIA/09JSPwAAgD+M+VQ/AACAP4z5VD8AAIA/jPlUPwAAgD9FIFc/AACAP0UgVz8AAIA/RSBXPwAAgD/+Rlk/AACAP/5GWT8AAIA//kZZPwAAgD+3bVs/AACAP7dtWz8AAIA/t21bPwAAgD9wlF0/AACAP3CUXT8AAIA/cJRdPwAAgD8pu18/AACAPym7Xz8AAIA/KbtfPwAAgD/i4WE/AACAP+LhYT8AAIA/4uFhPwAAgD+bCGQ/AACAP5sIZD8AAIA/mwhkPwAAgD9UL2Y/AACAP1QvZj8AAIA/VC9mPwAAgD8NVmg/AACAPw1WaD8AAIA/DVZoPwAAgD/GfGo/AACAP8Z8aj8AAIA/f6NsPwAAgD9/o2w/AACAPzjKbj8AAIA/OMpuPwAAgD/x8HA/AACAP/HwcD8AAIA/qhdzPwAAgD+qF3M/AACAP2M+dT8AAIA/Yz51PwAAgD8cZXc/AACAPxxldz8AAIA/1Yt5PwAAgD/Vi3k/AACAP46yez8AAIA/jrJ7PwAAgD9H2X0/AACAP0fZfT8AAIA/AACAPwAAgD8AAIA/AACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAP0GuCTwAAIA/Qa4JPAAAgD9Brgk8AACAP0GuiTwAAIA/Qa6JPAAAgD9Brok8AACAP2GFzjwAAIA/YYXOPAAAgD9hhc48AACAP0GuCT0AAIA/Qa4JPQAAgD9Brgk9AACAP9EZLD0AAIA/0RksPQAAgD/RGSw9AACAP2GFTj0AAIA/YYVOPQAAgD9hhU49AACAP/HwcD0AAIA/8fBwPQAAgD/x8HA9AACAP0GuiT0AAIA/Qa6JPQAAgD9Brok9AACAPwnkmj0AAIA/CeSaPQAAgD8J5Jo9AACAP9EZrD0AAIA/0RmsPQAAgD/RGaw9AACAP5lPvT0AAIA/mU+9PQAAgD+ZT709AACAP2GFzj0AAIA/YYXOPQAAgD9hhc49AACAPym73z0AAIA/KbvfPQAAgD/x8PA9AACAP/Hw8D0AAIA/XRMBPgAAgD9dEwE+AACAP0GuCT4AAIA/Qa4JPgAAgD8lSRI+AACAPyVJEj4AAIA/CeQaPgAAgD8J5Bo+AACAP+1+Iz4AAIA/7X4jPgAAgD/RGSw+AACAP9EZLD4AAIA/tbQ0PgAAgD+1tDQ+AACAP5lPPT4AAIA/mU89PgAAgD996kU+AACAP33qRT4AAIA/YYVOPgAAgD9hhU4+AACAP2GFTj4AAIA/RSBXPgAAgD9FIFc+AACAP0UgVz4AAIA/KbtfPgAAgD8pu18+AACAPym7Xz4AAIA/DVZoPgAAgD8NVmg+AACAPw1WaD4AAIA/8fBwPgAAgD/x8HA+AACAP/HwcD4AAIA/1Yt5PgAAgD/Vi3k+AACAP9WLeT4AAIA/XROBPgAAgD9dE4E+AACAP10TgT4AAIA/z2CFPgAAgD/PYIU+AACAP89ghT4AAIA/Qa6JPgAAgD9Brok+AACAP0GuiT4AAIA/s/uNPgAAgD+z+40+AACAP7P7jT4AAIA/JUmSPgAAgD8lSZI+AACAPyVJkj4AAIA/l5aWPgAAgD+XlpY+AACAP5eWlj4AAIA/CeSaPgAAgD8J5Jo+AACAPwnkmj4AAIA/ezGfPgAAgD97MZ8+AACAP+1+oz4AAIA/7X6jPgAAgD9fzKc+AACAP1/Mpz4AAIA/0RmsPgAAgD/RGaw+AACAP0NnsD4AAIA/Q2ewPgAAgD+1tLQ+AACAP7W0tD4AAIA/JwK5PgAAgD8nArk+AACAP5lPvT4AAIA/mU+9PgAAgD8LncE+AACAPwudwT4AAIA/ferFPgAAgD996sU+AACAP+83yj4AAIA/7zfKPgAAgD9hhc4+AACAP2GFzj4AAIA/YYXOPgAAgD/T0tI+AACAP9PS0j4AAIA/09LSPgAAgD9FINc+AACAP0Ug1z4AAIA/RSDXPgAAgD+3bds+AACAP7dt2z4AAIA/t23bPgAAgD8pu98+AACAPym73z4AAIA/KbvfPgAAgD+bCOQ+AACAP5sI5D4AAIA/mwjkPgAAgD8NVug+AACAPw1W6D4AAIA/DVboPgAAgD9/o+w+AACAP3+j7D4AAIA/f6PsPgAAgD/x8PA+AACAP/Hw8D4AAIA/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ZQFnATgBYQFjAVQCWgI4AUsCTgJQAlACVAI4ATgBYwFnATgBZwFpAUsCUAI4AUUCSAJLAj8CQgJFAjkCPAI/AjMCNgI5Ai0CMAIzAicCKgItAiECIwIlAiUCJwItAi0CMwI5AjkCPwJFAkUCSwI4ATgBaQFrAW0BbwFyATgBawFtATkCRQI4ASUCLQI5Ah0CHwIhAiECJQI5AjkCOAFtAW0BcgF1AXUBeAF7AXsBfgGBAYEBhAGHAYcBigGNAY0BkAGTAZYBmAGaAY0BkwGWAYEBhwGNAXUBewGBATkCbQF1AR0CIQI5AhsCHQI5AjkCdQGBAYEBjQGWAZYBmgGcAZwBngGgAZwBoAGiAYEBlgGcARsCOQKBARkCGwKBAYEBnAGiAaQBpgGoAYEBogGkARcCGQKBARMCFQIXAg4CEQITAhMCFwKBAYEBpAGoAaoBrAGvAYEBqAGqAQ4CEwKBAQsCDgKBAYEBqgGvAa8BsgG1AbUBuAG7AbsBvgHBAcEBxAHHAccBygHNAc0B0AHTAc0B0wHVAcEBxwHNAbUBuwHBAYEBrwG1AQgCCwKBAQUCCAKBAYEBtQHBAcEBzQHVAdcB2QHbAcEB1QHXAQICBQKBAf8BAgKBAYEBwQHXAYEB1wHbAfwB/wGBAfkB/AGBAYEB2wHdAd0B3wHhAeEB4wHlAeEB5QHnAYEB3QHhAfYB+QGBAfMB9gGBAYEB4QHnAYEB5wHqAfAB8wGBAYEB6gHtAYEB7QHwASkAJwAkACQAIQAeAB4AGwAYABgAFQASABIADwAMAAwACQAGAAYAAwAAADABLgEsAQYAAAAwARIADAAGAB4AGAASACkAJAAeAC0AKwApAC8ALQApACkAHgASABIABgAwATABLAEqATABKgEoASkAEgAwAS8AKQAwAS8AMAEoATUAMwAxADEALwAoASYBJAEiATEAKAEmATcANQAxADkANwAxADEAJgEiASIBIAEeAR4BHAEZARkBFgETARMBEAENAQ0BCgEHAQcBBAEBAQEB/gD7APsA+AD1APMA8QDvAPsA9QDzAAcBAQH7ABMBDQEHAR4BGQETATEAIgEeATkAMQAeAR4BEwEHAQcB+wDzAO8A7QDrAAcB8wDvADkAHgEHAUAAPQA7ADsAOQAHAQcB7wDrAAcB6wDpAEAAOwAHAUYAQwBAAEwASQBGAFIATwBMAFgAVQBSAF4AWwBYAGQAYQBeAGgAZgBkAG4AbABqAGoAaABkAGQAXgBYAFgAUgBMAEwARgBAAEAABwHpAEAA6QDnAFgATABAAGoAZABYAHAAbgBqAHYAdAByAHAAagBYAHgAdgByAHIAcABYAFgAQADnAOUA4wDhAFgA5wDlAHgAcgBYAH0AegB4AIMAgAB9AIkAhgCDAI8AjACJAJUAkgCPAJsAmACVAKEAngCbAKMAoQCbAJsAlQCPAI8AiQCDAIMAfQB4AFgA5QDhAOEA3wDcAFgA4QDcAIMAeABYAJsAjwCDAKUAowCbAKkApwClAK8ArQCrAKkApQCbAK8AqwCpALMAsQCvALUAswCvAK8AqQCbAJsAgwBYAFgA3ADZAFgA2QDWAK8AmwBYALUArwBYAFgA1gDTAFgA0wDQALgAtQBYALsAuABYAFgA0ADNAFgAzQDKAL4AuwBYAMEAvgBYAFgAygDHAMQAwQBYAMcAxABYAB8AIwBVAR8AVQFRASIAJQBXASIAVwFUASYAKABaASYAWgFYARwAIABSARwAUgFOASgAKgBcASgAXAFaASoALABeASoAXgFcARkAHQBPARkATwFLASwALgBgASwAYAFeARYAGgBMARYATAFIAS4AMABiAS4AYgFgATAAMgBkATAAZAFiARMAFwBJARMASQFFATIANABmATIAZgFkARAAFABGARAARgFCATQANgBoATQAaAFmATYAOABqATYAagFoAQ0AEQBDAQ0AQwE/ATgAOgBsATgAbAFqAToAPABuAToAbgFsATwAPgBwATwAcAFuAT8AQQBzAT8AcwFxAQoADgBAAQoAQAE8AUIARAB2AUIAdgF0AUUARwB5AUUAeQF3AUgASgB8AUgAfAF6AUsATQB/AUsAfwF9AQgACwA9AQgAPQE6AU4AUACCAU4AggGAAVEAUwCFAVEAhQGDAVQAVgCIAVQAiAGGAQUABwA5AQUAOQE3AVcAWQCLAVcAiwGJAVoAXACOAVoAjgGMAQIABAA2AQIANgE0AV0AXwCRAV0AkQGPATEBAQAzATEBMwFjAmAAYgCUAWAAlAGSAS8BMQFjAi8BYwJhAi0BLwFhAi0BYQJfAmMAZQCXAWMAlwGVASsBLQFfAisBXwJdAmUAZwCZAWUAmQGXASkBKwFdAikBXQJbAicBKQFbAicBWwJZAmcAaQCbAWcAmwGZASUBJwFZAiUBWQJXAiMBJQFXAiMBVwJVAmkAawCdAWkAnQGbASEBIwFVAiEBVQJTAh8BIQFTAh8BUwJRAh0BHwFRAh0BUQJPAhsBHQFPAhsBTwJNAhgBGgFMAhgBTAJKAmsAbQCfAWsAnwGdARUBFwFJAhUBSQJHAhIBFAFGAhIBRgJEAg8BEQFDAg8BQwJBAgwBDgFAAgwBQAI+AgkBCwE9AgkBPQI7AgYBCAE6AgYBOgI4AgMBBQE3AgMBNwI1AgABAgE0AgABNAIyAm0AbwChAW0AoQGfAf0A/wAxAv0AMQIvAvoA/AAuAvoALgIsAvcA+QArAvcAKwIpAvQA9gAoAvQAKAImAvIA9AAmAvIAJgIkAvAA8gAkAvAAJAIiAu4A8AAiAu4AIgIgAuwA7gAgAuwAIAIeAuoA7AAeAuoAHgIcAugA6gAcAugAHAIaAm8AcQCjAW8AowGhAeYA6AAaAuYAGgIYAuQA5gAYAuQAGAIWAuIA5AAWAuIAFgIUAuAA4gAUAuAAFAISAt0A4AASAt0AEgIPAtoA3gAQAtoAEAIMAtcA2wANAtcADQIJAtQA2AAKAtQACgIGAtEA1QAHAtEABwIDAs4A0gAEAs4ABAIAAssAzwABAssAAQL9AcgAzAD+AcgA/gH6AXEAcwClAXEApQGjAcUAyQD7AcUA+wH3AcIAxgD4AcIA+AH0Ab8AwwD1Ab8A9QHxAbwAwADyAbwA8gHuAbkAvQDvAbkA7wHrAbYAugDsAbYA7AHoAbQAtwDpAbQA6QHmAbIAtADmAbIA5gHkAXMAdQCnAXMApwGlAbAAsgDkAbAA5AHiAa4AsADiAa4A4gHgAXUAdwCpAXUAqQGnAawArgDgAawA4AHeAXcAeQCrAXcAqwGpAaoArADeAaoA3gHcAXkAewCtAXkArQGrAXwAfwCxAXwAsQGuAagAqgDcAagA3AHaAX4AggC0AX4AtAGwAaYAqADaAaYA2gHYAYEAhQC3AYEAtwGzAaQApgDYAaQA2AHWAYQAiAC6AYQAugG2AaIApADWAaIA1gHUAaAAogDUAaAA1AHSAZ0AnwDRAZ0A0QHPAYcAiwC9AYcAvQG5AYoAjgDAAYoAwAG8AZoAnADOAZoAzgHMAY0AkQDDAY0AwwG/AZcAmQDLAZcAywHJAZQAlgDIAZQAyAHGAZAAkwDFAZAAxQHCAQ==";var Gd="data:application/octet-stream;base64,Z2xURgIAAABEOwAAoAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NC4zLjQ3IiwidmVyc2lvbiI6IjIuMCJ9LCJleHRlbnNpb25zVXNlZCI6WyJLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyIl0sInNjZW5lIjowLCJzY2VuZXMiOlt7Im5hbWUiOiJTY2VuZSIsIm5vZGVzIjpbMF19XSwibm9kZXMiOlt7Im1lc2giOjAsIm5hbWUiOiJDdXJ2ZSIsInJvdGF0aW9uIjpbMC41LDAuNSwtMC41LDAuNV0sInRyYW5zbGF0aW9uIjpbMC42MTQ3OTQzMTM5MDc2MjMzLDAsMF19XSwibWF0ZXJpYWxzIjpbeyJhbHBoYU1vZGUiOiJCTEVORCIsImRvdWJsZVNpZGVkIjp0cnVlLCJleHRlbnNpb25zIjp7IktIUl9tYXRlcmlhbHNfc3BlY3VsYXIiOnsic3BlY3VsYXJGYWN0b3IiOjAuMDc5OTk5OTk4MjExODYwNjZ9fSwibmFtZSI6IkZyb3N0ZWQgR2xhc3MiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJtZXRhbGxpY0ZhY3RvciI6MH19XSwibWVzaGVzIjpbeyJuYW1lIjoiQ3VydmUiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjEsIlRFWENPT1JEXzAiOjIsIlRFWENPT1JEXzEiOjN9LCJpbmRpY2VzIjo0LCJtYXRlcmlhbCI6MH1dfV0sImFjY2Vzc29ycyI6W3siYnVmZmVyVmlldyI6MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjMxMiwibWF4IjpbMi4wNjUyNjEzNjM5ODMxNTQzLDAsLTAuMDAyOTQ3NTExMzg0MjYzNjM0N10sIm1pbiI6WzAuMDAwMjc1NjU0OTUxMTEwNDgyMiwtMC4wNTEyNzUxNzg3OTAwOTI0NywtMS4yNzc5NDcxODc0MjM3MDZdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjMxMiwidHlwZSI6IlZFQzMifSx7ImJ1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xMNDPwAAgD/Ew0M/AACAP8nISD8AAIA/ychIPwAAgD/JyEg/AACAP87NTT8AAIA/zs1NPwAAgD/OzU0/AACAP9PSUj8AAIA/09JSPwAAgD/T0lI/AACAP9jXVz8AAIA/2NdXPwAAgD/Y11c/AACAP93cXD8AAIA/3dxcPwAAgD/d3Fw/AACAP+LhYT8AAIA/4uFhPwAAgD/i4WE/AACAP+fmZj8AAIA/5+ZmPwAAgD/n5mY/AACAP+zraz8AAIA/7OtrPwAAgD/s62s/AACAP/HwcD8AAIA/8fBwPwAAgD/x8HA/AACAP/b1dT8AAIA/9vV1PwAAgD/29XU/AACAP/v6ej8AAIA/+/p6PwAAgD/7+no/AACAPwAAgD8AAIA/AACAPwAAgD8AAIA/AACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAP6GgoDwAAIA/oaCgPAAAgD+hoKA8AACAP6GgID0AAIA/oaAgPQAAgD+hoCA9AACAP/HwcD0AAIA/8fBwPQAAgD/x8HA9AACAP6GgoD0AAIA/oaCgPQAAgD+hoKA9AACAP8nIyD0AAIA/ycjIPQAAgD/JyMg9AACAP/Hw8D0AAIA/8fDwPQAAgD/x8PA9AACAP42MDD4AAIA/jYwMPgAAgD+NjAw+AACAP6GgID4AAIA/oaAgPgAAgD+hoCA+AACAP7W0ND4AAIA/tbQ0PgAAgD+1tDQ+AACAP8nISD4AAIA/ychIPgAAgD/JyEg+AACAP93cXD4AAIA/3dxcPgAAgD/d3Fw+AACAP/HwcD4AAIA/8fBwPgAAgD/x8HA+AACAP4OCgj4AAIA/g4KCPgAAgD+DgoI+AACAP42MjD4AAIA/jYyMPgAAgD+NjIw+AACAP5eWlj4AAIA/l5aWPgAAgD+XlpY+AACAP6GgoD4AAIA/oaCgPgAAgD+hoKA+AACAP6uqqj4AAIA/q6qqPgAAgD+rqqo+AACAP7W0tD4AAIA/tbS0PgAAgD+1tLQ+AACAP7++vj4AAIA/v76+PgAAgD+/vr4+AACAP8nIyD4AAIA/ycjIPgAAgD/JyMg+AACAP9PS0j4AAIA/09LSPgAAgD/T0tI+AACAP93c3D4AAIA/3dzcPgAAgD/d3Nw+AACAP+fm5j4AAIA/5+bmPgAAgD/n5uY+AACAP/Hw8D4AAIA/8fDwPgAAgD/x8PA+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8wD2APYA/AACAQIBCAEOAQ4BFAEaARoBIAEmASYBLAEyATIBnACiAKIAqACuAK4AtAC6ALoAwADGAMYAzADSANIA2ADeAN4A5ADqAOoA8AD2APYAAgEOAQ4BGgEmASYBMgGiAKIArgC6ALoAxgDSANIA3gDqAOoA9gAOAQ4BJgGiAKIAugDSANIA6gAOAQ4BogDSAAEABQChAAEAoQCdAAQABwCjAAQAowCgAAgACgCmAAgApgCkAAsADQCpAAsAqQCnAA4AEACsAA4ArACqABEAEwCvABEArwCtABQAFgCyABQAsgCwAJoAAgCeAJoAngA2AZcAmwA3AZcANwEzAZQAmAA0AZQANAEwARcAGQC1ABcAtQCzAJEAlQAxAZEAMQEtAY4AkgAuAY4ALgEqAYsAjwArAYsAKwEnARoAHAC4ABoAuAC2AIgAjAAoAYgAKAEkAYUAiQAlAYUAJQEhAR0AHwC7AB0AuwC5AIIAhgAiAYIAIgEeASAAIgC+ACAAvgC8ACMAJQDBACMAwQC/AH8AgwAfAX8AHwEbASYAKADEACYAxADCACkAKwDHACkAxwDFAHwAgAAcAXwAHAEYAXoAfQAZAXoAGQEWAXcAeQAVAXcAFQETASwALwDLACwAywDIAC4AMgDOAC4AzgDKADEANQDRADEA0QDNAHQAdgASAXQAEgEQAXEAcwAPAXEADwENATQAOADUADQA1ADQAG4AcAAMAW4ADAEKAWsAbQAJAWsACQEHATcAOwDXADcA1wDTAGgAagAGAWgABgEEAToAPgDaADoA2gDWAD0AQQDdAD0A3QDZAGUAZwADAWUAAwEBAUAARADgAEAA4ADcAEMARwDjAEMA4wDfAEYASgDmAEYA5gDiAGIAZAAAAWIAAAH+AEkATQDpAEkA6QDlAEwAUADsAEwA7ADoAE8AUgDuAE8A7gDrAF8AYQD9AF8A/QD7AFwAXgD6AFwA+gD4AFkAWwD3AFkA9wD1AFYAWAD0AFYA9ADyAFMAVQDxAFMA8QDvAA==";var Am=r=>"assets/"+r+(r==="imgOriginalThumbsUpGesture"?".svg":".png"),Ai=(r,e,t="screen")=>'<img class="'+t+'" src="'+Am(r)+'" alt="'+e+'" loading="lazy">',ah=()=>'<footer class="contact stack"><h2>Have something<br>in mind?</h2><p class="callout">Let\u2019s make it happen \u2197</p><p class="placeholder">YOUR EMAIL \xB7 LINKEDIN \xB7 RESUME</p><p class="copyright">\xA9 2026 Zhaolin Hu</p></footer>',Rm=()=>'<div class="capability-ticker" aria-label="Capabilities"><div class="ticker-track">'+["INTERACTION DESIGN","CREATIVE TECH","AI EXPERIENCE","PROTOTYPING","MOTION SYSTEMS","INTERACTION DESIGN","CREATIVE TECH","AI EXPERIENCE","PROTOTYPING","MOTION SYSTEMS"].map(r=>"<span>"+r+"</span>").join("")+"</div></div>",Cm=()=>'<div class="ray-home"><section class="ray-hero"><nav class="ray-nav" aria-label="Main navigation"><span class="ray-status">AVAILABLE FOR JOB</span><a class="ray-brand" href="#/" aria-label="Zhaolin Hu home"><span class="brand-full">\xA9ZHAOLIN HU \u2014 INTERACTION DESIGNER</span><span class="brand-short">\xA9ZHAOLIN \u2014 INTERACTION DESIGNER</span></a><a class="ray-work" href="#work">WORK</a><a class="ray-about" href="#/about">ABOUT</a><button class="ray-language" type="button" aria-label="Change language">LAN&nbsp;&nbsp; EN\u2304</button></nav><div class="glass-lower" aria-hidden="true"></div><h1 class="ray-wordmark">ZHAOLIN</h1><img class="hero-refraction" src="assets/hero-refraction.svg" alt="" aria-hidden="true"><div class="glass-upper glass-upper-blur" aria-hidden="true"></div><img class="glass-upper glass-upper-outline" src="assets/glass-upper.svg" alt="" aria-hidden="true">'+Rm()+'<p class="ray-intro">I\u2019m Zhaolin Hu. I explore how people connect with technology through AI, movement, and everyday experiences.</p><a class="scroll-prompt" href="#work">PLEASE SCROLL DOWN</a></section><section class="selected-work" id="work"><p>Selected work / 01\u201403</p><div class="ray-project-grid"><article class="project motion-card"><div class="cover"><p class="cover-title">BODY /<br>MIND</p><p class="card-meta">PROJECT PREVIEW / REPLACE WITH YOUR IMAGE</p></div><h2 class="project-title">Moving toward feeling \u2197</h2><p class="card-meta">Embodied interaction \xB7 Research</p></article><a class="project hovr-card" href="#/hovr" aria-label="Read HOVR case study"><div class="cover photo">'+Ai("imgHovrProjectCover","HOVR tablet in a kitchen","")+'<div class="hover-gradient" aria-hidden="true"></div><div class="hover-copy"><h2>HOVR</h2><p>A kitchen-focused tablet experience that combines gesture input, Kitchen Mode, and Entertainment Mode for hands-free multitasking.</p></div></div></a></div><article class="project ai-card"><div class="cover peach"><p class="cover-title">HUMAN<br>\xD7 AI</p><p class="card-meta">PROJECT PREVIEW / REPLACE WITH YOUR IMAGE</p></div><h2 class="project-title">Human \xD7 AI \u2197</h2><p class="card-meta">AI experience \xB7 Selected concept</p></article></section>'+ah()+"</div>",Im=()=>'<div class="page about"><h1>Curious about people.<br>Driven by interaction.</h1><section class="stack"><h3>A little about me</h3><p class="body-copy">I\u2019m Zhaolin Hu, an interaction designer with a background in product design, pursuing an MFA in Interactive Design at SCAD.</p><p class="body-copy">My interests sit at the intersection of AI experiences, embodied interaction, and creative technology.</p></section><section class="stack"><h2>Research \u2192 Interaction \u2192 Prototyping</h2><p class="muted">AI EXPERIENCE DESIGN<br>EMBODIED INTERACTION<br>UNITY / UNREAL / FIGMA<br>CREATIVE CODING</p></section>'+ah()+"</div>",Pm=[["Kitchen Mode","imgRecipeInterface","Keep recipes, ingredients, and timers accessible in a cooking-focused interface."],["Entertainment Mode","imgEntertainmentInterface","Browse media, play or pause content, and enjoy entertainment while cooking."]],Lm=[["Index finger","imgIndexFingerGestureIllustration","Move the cursor."],["Pinch","imgPinchGestureIllustration","Select an item."],["L gesture + movement","imgLGestureMovementGestureIllustration","Scroll up or down."],["Thumbs up","imgOriginalThumbsUpGesture","Accept an incoming call or message."],["Palm facing camera","imgPalmFacingCameraGestureIllustration","Dismiss a notification or reject a call."]],Nm=[["01 / Home","img01HomeScreen","Pinch to start."],["02 / Main","img02MainScreen","Choose a mode or shortcut."],["03 / Kitchen","imgRecipeInterface","Choose a recipe and follow its steps."],["04 / Entertainment","img04EntertainmentScreen","Browse and control media."]],Dm=()=>'<article class="page">'+Ai("imgHovrKitchenConceptHero","A hand operating HOVR beside a kitchen counter","hero-image")+'<section class="stack"><p class="eyebrow">INDIVIDUAL PROJECT / Q2 2026</p><h1 class="case-title">HOVR</h1><h2 class="case-tagline" style="font-size:clamp(40px,4vw,56px)">Hands busy.<br>Flow uninterrupted.</h2><p class="body-copy">A kitchen-focused tablet experience that combines gesture input, Kitchen Mode, and Entertainment Mode for hands-free multitasking.</p><dl class="facts" style="margin:0"><div><dt class="fact-label">MY ROLE</dt><dd style="margin:0">UX/UI Designer<br>Interaction Prototyper</dd></div><div><dt class="fact-label">TOOLS</dt><dd style="margin:0">Figma \xB7 Unity<br>MediaPipe \xB7 Xcode</dd></div><div><dt class="fact-label">FOCUS</dt><dd style="margin:0">Gesture interaction<br>Kitchen UX</dd></div><div><dt class="fact-label">OUTPUT</dt><dd style="margin:0">Interactive<br>iPad prototype</dd></div></dl></section><section class="stack"><p class="section-label">01 / THE PROBLEM</p><h2>Cooking occupies your hands.<br>Touch interrupts your flow.</h2><p class="body-copy">While cooking, people need to follow recipes, manage timers, enjoy media, and respond to communication. When their hands are occupied or messy, touching a device means pausing to wash and dry their hands.</p><div class="opportunity"><h2>How might we enable hands-free multitasking while cooking without disrupting workflow?</h2></div></section><section class="stack"><p class="section-label">02 / CORE EXPERIENCE</p><h2>Two modes. One continuous workflow.</h2><div class="grid">'+Pm.map(([r,e,t])=>'<div class="stack">'+Ai(e,r+" interface")+"<h3>"+r+"</h3><p>"+t+"</p></div>").join("")+'</div></section><section class="stack"><p class="section-label">03 / HANDS-FREE CONTROL</p><h2>Small gestures. Clear actions.</h2><p class="body-copy">The prototype maps real-time hand gestures to cursor movement, selection, scrolling, and interruption handling.</p>'+Lm.map(([r,e,t])=>'<div class="gesture">'+Ai(e,r+" gesture","gesture-icon"+(e==="imgOriginalThumbsUpGesture"?" svg":""))+'<div class="gesture-text"><h3>'+r+'</h3><p class="small">'+t+"</p></div></div>").join("")+'</section><section class="stack"><p class="section-label">04 / USER FLOW</p><h2>From launch to multitasking.</h2><div class="grid">'+Nm.map(([r,e,t])=>'<div class="stack"><h3>'+r+"</h3>"+Ai(e,r+" interface")+'<p class="small">'+t+"</p></div>").join("")+'</div><h2>Handle interruptions, then return to cooking.</h2><p class="body-copy">Calls and messages are simulated in Unity. Thumbs up accepts; a palm facing the camera dismisses. A shortcut area supports switching between cooking and entertainment.</p><div class="grid">'+[["Incoming call","imgIncomingCall"],["Message notification","imgMessageNotification"]].map(([r,e])=>'<figure class="stack">'+Ai(e,r+" interface")+'<figcaption class="small">'+r+"</figcaption></figure>").join("")+'</div></section><section class="stack"><p class="section-label">05 / PROTOTYPE IMPLEMENTATION</p><h2>Making gestures work on screen.</h2><p class="body-copy">The interaction prototype was built in Unity using MediaPipe for hand tracking, then built for iPad through Xcode for on-device testing.</p>'+Ai("imgDemoPoster","Unity prototype and camera tracking preview","demo-image")+'<a class="demo-link" href="https://www.figma.com/design/BLVSIJrju0HxRa18AE6Sw9?node-id=3-412" target="_blank" rel="noopener">View interaction demo in Figma</a><p class="small muted">Unity system mock-up \u2192 iPad build \u2192 on-device interaction testing</p><p class="body-copy">The prototype demonstrates interaction behavior. Live calling, messaging, and app installation are outside the implemented prototype; interruptions are simulated in Unity.</p></section>'+ah()+"</article>",bs;function Um(){bs&&bs.disconnect();let r=document.querySelectorAll("main section,main footer,.project,.gesture,main figure");if(r.forEach((e,t)=>{e.classList.add("scroll-reveal"),e.style.setProperty("--reveal-delay",t%3*70+"ms")}),matchMedia("(prefers-reduced-motion:reduce)").matches){r.forEach(e=>e.classList.add("is-revealed"));return}bs=new IntersectionObserver(e=>e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-revealed"),bs.unobserve(t.target))}),{threshold:.12,rootMargin:"0px 0px -8%"}),r.forEach(e=>bs.observe(e))}function Wd(){let r=location.hash,e=r==="#/about",t=r==="#/hovr",n=!e&&!t;document.body.classList.toggle("is-home",n),document.getElementById("main").innerHTML=e?Im():t?Dm():Cm(),document.title=t?"HOVR \u2014 Zhaolin Hu":e?"About \u2014 Zhaolin Hu":"Zhaolin Hu \u2014 Interaction Design",document.querySelectorAll(".nav a").forEach(i=>i.removeAttribute("aria-current")),document.getElementById(e?"about-link":"work-link").setAttribute("aria-current","page"),Um(),n&&requestAnimationFrame(Om),r==="#work"?requestAnimationFrame(()=>document.getElementById("work").scrollIntoView()):window.scrollTo(0,0)}window.addEventListener("hashchange",Wd);Wd();var yo;function Om(){yo&&yo();let r=document.querySelector(".ray-hero"),e=r?.querySelector(".hero-refraction");if(!r||!e||matchMedia("(prefers-reduced-motion:reduce)").matches)return;let t=document.createElement("canvas");t.className="refraction-canvas",t.setAttribute("aria-hidden","true"),r.insertBefore(t,e);let n=new Path2D("M1125.67 172.2C1113.79 184.968 1106.52 202.089 1106.52 220.909C1106.52 252.864 1127.48 279.922 1156.4 289.083L242 1105.5H1147.5C1141.98 1115.65 1138.84 1127.28 1138.84 1139.64C1138.84 1179.13 1170.85 1211.14 1210.34 1211.14C1211.06 1211.14 1211.78 1211.13 1212.5 1211.11V1284H242L60.375 1072.67C85.4739 1061.57 102.988 1036.45 102.988 1007.25C102.988 980.186 87.9552 956.637 65.7852 944.494L920 179H0.5V105.859C11.6907 113.443 25.1439 117.94 39.6367 118.123L40.5605 118.129C80.0488 118.129 112.06 86.1171 112.061 46.6289C112.061 29.0494 105.716 12.9512 95.1924 0.5H902.5L1125.67 172.2Z"),i=new Path2D("M16.3106 169.836C-32.1035 89.4355 33.911 -11.2843 126.952 1.0286L608.345 64.7352C657.844 71.2858 697.029 109.812 704.418 159.193L752.87 482.997C769.018 590.914 637.029 655.857 561.384 577.214L384.481 393.302C370.123 378.376 351.909 367.723 331.861 362.527L139.705 312.724C111.334 305.371 86.976 287.19 71.8572 262.082L16.3106 169.836Z"),s;try{s=new go({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(Q){console.warn("Three.js refraction unavailable:",Q),t.remove();return}s.setClearColor(0,0),s.outputColorSpace=it;let a=new zr,o=new Dn(-1,1,1,-1,0,2);o.position.z=1;let c=document.createElement("canvas"),l=document.createElement("canvas"),h=document.createElement("canvas"),u=new mi(c),d=new mi(l),p=new mi(h);u.colorSpace=it,u.minFilter=u.magFilter=mt,d.minFilter=d.magFilter=mt,p.minFilter=p.magFilter=mt;let m={uBackground:{value:u},uMask:{value:d},uCenterMask:{value:p},uResolution:{value:new ee(1,1)},uTime:{value:0},uPointer:{value:new ee(.5,.5)},uTilt:{value:new ee}},_=new It({transparent:!0,depthWrite:!1,uniforms:m,vertexShader:`
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
  `}),f=new lt(new Kn(2,2,64,64),_),g=[],v=[],x=Q=>new It({transparent:!0,depthWrite:!1,side:Lt,uniforms:{uBackground:m.uBackground,uResolution:m.uResolution,uTime:m.uTime,uMode:{value:Q}},vertexShader:`
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
  `}),M=x(0),w=x(1),R={Z:{desktop:{width:1.72,x:0,y:-.22,z:.05,rx:.055,ry:.12,rz:-.035},mobile:{width:2.15,x:.15,y:-.1,z:.05,rx:.04,ry:.09,rz:-.025}},w:{desktop:{width:1.05,x:-.02,y:.08,z:.14,rx:-.075,ry:-.14,rz:.045},mobile:{width:1.25,x:.08,y:.05,z:.14,rx:-.055,ry:-.1,rz:.035}},o:{desktop:{width:.9,x:-.42,y:-.42,z:.1,rx:.065,ry:.13,rz:-.055},mobile:{width:1.05,x:-.25,y:-.36,z:.1,rx:.05,ry:.09,rz:-.04}}},P=()=>{let Q=r.clientWidth<=640;g.forEach(({name:$,pivot:le})=>{let ce=R[$][Q?"mobile":"desktop"];le.scale.setScalar(ce.width),le.position.set(ce.x,ce.y,ce.z),le.rotation.set(ce.rx,ce.ry,ce.rz)}),t.dataset.glassModels=String(g.length)},F=new vo,N={Z:Hd,w:Vd,o:Gd};[["Z",M],["w",w],["o",w]].forEach(([Q,$])=>F.load(N[Q],le=>{if(!t.isConnected)return;let ce=le.scene,b=new gt().setFromObject(ce),S=b.getSize(new T),U=b.getCenter(new T);ce.position.sub(U);let I=1/Math.max(S.x,S.y,S.z);ce.scale.setScalar(I),ce.traverse(C=>{C.isMesh&&(v.push(C.material),C.material=$)});let y=new wt;y.add(ce),y.rotation.y=(Q==="Z"?-1:1)*Math.PI*.5,y.updateMatrixWorld(!0);let A=new gt().setFromObject(y).getCenter(new T);y.position.sub(A);let L=new wt;L.add(y),a.add(L),g.push({name:Q,pivot:L,oriented:y,content:ce}),P()},void 0,le=>console.warn(`${Q}.glb could not be loaded:`,le)));let z=0,H=0,O=1,Z=0,V=performance.now(),Y=.5,q=.5,te=.5,K=.5,de=()=>{z=r.clientWidth,H=r.clientHeight,O=Math.min(devicePixelRatio||1,1.6),s.setPixelRatio(O),s.setSize(z,H,!1);let Q=Math.round(z*O),$=Math.round(H*O);c.width=l.width=h.width=Q,c.height=l.height=h.height=$;let le=c.getContext("2d"),ce=l.getContext("2d"),b=h.getContext("2d");le.setTransform(O,0,0,O,0,0),ce.setTransform(O,0,0,O,0,0),b.setTransform(O,0,0,O,0,0),le.fillStyle="#f9f9f9",le.fillRect(0,0,z,H);let S=z<=640,U=S?86:z*.2084,I=S?14:z*.0639,y=S?62:43;le.font=`900 ${U}px "Helvetica Neue", "Arial Black", Arial, sans-serif`,le.fillStyle="#232323",le.textBaseline="top",le.fillText("ZHAOLIN",I,y);let A=S?8:z*.12,L=S?96:101,C=S?520:z*.8417,X=S?550:1283;ce.save(),ce.translate(A,L),ce.scale(C/1213,X/1284.5),ce.fillStyle="#fff",ce.shadowColor="rgba(255,255,255,.55)",ce.shadowBlur=3,ce.fill(n,"evenodd"),ce.restore();let B=S?58:z*.16,k=S?138:202,ne=S?332:z*.631,oe=S?338:860;b.save(),b.translate(B,k),b.scale(ne/754.225,oe/611.957),b.fillStyle="#fff",b.fill(i),b.restore(),u.needsUpdate=!0,d.needsUpdate=!0,p.needsUpdate=!0,m.uResolution.value.set(Q,$),P()},ve=Q=>{let $=r.getBoundingClientRect();Y=pr.clamp((Q.clientX-$.left)/$.width,0,1),q=pr.clamp(1-(Q.clientY-$.top)/$.height,0,1)},me=()=>{let Q=Math.max(0,r.offsetHeight-innerHeight),$=Math.min(Q,Math.max(0,-r.getBoundingClientRect().top));t.style.transform=`translate3d(0,${$}px,0)`},Me=Q=>{te+=(Y-te)*.055,K+=(q-K)*.055,m.uPointer.value.set(te,K),m.uTilt.value.set((te-.5)*2,(K-.5)*2),m.uTime.value=(Q-V)/1e3;let $=r.clientWidth<=640,le=(te-.5)*2,ce=(K-.5)*2;g.forEach(({name:b,pivot:S})=>{let U=R[b][$?"mobile":"desktop"],I=b==="Z"?1:.72;S.rotation.x=U.rx-ce*.055*I,S.rotation.y=U.ry+le*.075*I,S.rotation.z=U.rz+le*.012*I,S.position.x=U.x+le*.032*I,S.position.y=U.y+ce*.024*I}),s.render(a,o),Z=requestAnimationFrame(Me)},re=()=>requestAnimationFrame(()=>{de(),me()});r.addEventListener("pointermove",ve,{passive:!0}),addEventListener("resize",re,{passive:!0}),addEventListener("scroll",me,{passive:!0}),document.fonts.ready.then(()=>{de(),me(),Z=requestAnimationFrame(Me)}),yo=()=>{cancelAnimationFrame(Z),r.removeEventListener("pointermove",ve),removeEventListener("resize",re),removeEventListener("scroll",me),f.geometry.dispose(),_.dispose(),M.dispose(),w.dispose(),g.forEach(({content:Q})=>Q.traverse($=>{$.isMesh&&$.geometry.dispose()})),v.forEach(Q=>Q?.dispose?.()),u.dispose(),d.dispose(),p.dispose(),s.dispose(),t.remove(),yo=null}}var vn=document.querySelector(".cursor-aura");if(vn&&matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){let r=-100,e=-100,t=-100,n=-100,i=()=>{t+=(r-t)*.18,n+=(e-n)*.18,vn.style.left=t+"px",vn.style.top=n+"px",requestAnimationFrame(i)};addEventListener("pointermove",s=>{r=s.clientX,e=s.clientY,vn.classList.add("is-visible"),vn.classList.toggle("is-interactive",!!s.target.closest('a,button,[role="button"]'))}),addEventListener("pointerdown",()=>{vn.classList.remove("is-clicking"),vn.offsetWidth,vn.classList.add("is-clicking")}),addEventListener("pointerup",()=>vn.classList.remove("is-clicking")),document.documentElement.addEventListener("mouseleave",()=>vn.classList.remove("is-visible")),i()}})();
