var Im=Object.defineProperty;var sl=Object.getOwnPropertySymbols;var Rm=Object.prototype.hasOwnProperty,Om=Object.prototype.propertyIsEnumerable;var ll=(i,e,t)=>e in i?Im(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,dl=(i,e)=>{for(var t in e||(e={}))Rm.call(e,t)&&ll(i,t,e[t]);if(sl)for(var t of sl(e))Om.call(e,t)&&ll(i,t,e[t]);return i};/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="134",Dm=0,ml=1,Fm=2,ul=1,Um=2,_n=3,$o=0,Ft=1,ho=2,gl=1,Wr=0,An=1,hl=2,xl=3,pl=4,Vm=5,Co=100,Hm=101,Xm=102,fl=103,Sl=104,km=200,Wm=201,zm=202,Km=203,vl=204,Ml=205,Zm=206,Qm=207,Ym=208,Jm=209,jm=210,qm=0,eu=1,tu=2,sa=3,ru=4,ou=5,nu=6,iu=7,ii=0,au=1,su=2,xo=0,lu=1,du=2,cu=3,mu=4,uu=5,_l=300,Tn=301,yn=302,la=303,da=304,ai=306,ca=307,Go=1e3,sr=1001,si=1002,Ut=1003,ma=1004,ua=1005,lr=1006,Al=1007,No=1008,zr=1009,gu=1010,hu=1011,li=1012,xu=1013,di=1014,Nr=1015,Bo=1016,pu=1017,fu=1018,Su=1019,bn=1020,vu=1021,po=1022,Yt=1023,Mu=1024,_u=1025,Au=Yt,Io=1026,Pn=1027,Tu=1028,yu=1029,bu=1030,Pu=1031,wu=1032,Lu=1033,Tl=33776,yl=33777,bl=33778,Pl=33779,wl=35840,Ll=35841,El=35842,$l=35843,Eu=36196,Cl=37492,Gl=37496,$u=37808,Cu=37809,Gu=37810,Nu=37811,Bu=37812,Iu=37813,Ru=37814,Ou=37815,Du=37816,Fu=37817,Uu=37818,Vu=37819,Hu=37820,Xu=37821,ku=36492,Wu=37840,zu=37841,Ku=37842,Zu=37843,Qu=37844,Yu=37845,Ju=37846,ju=37847,qu=37848,eg=37849,tg=37850,rg=37851,og=37852,ng=37853,ig=2200,ag=2201,sg=2202,wn=2300,Ro=2301,ga=2302,Oo=2400,Do=2401,ci=2402,ha=2500,Nl=2501,lg=0,dg=1,Bl=2,Jt=3e3,Tr=3001,xa=3007,pa=3002,cg=3003,Il=3004,Rl=3005,Ol=3006,mg=3200,ug=3201,fo=0,gg=1,fa=7680,hg=519,Ln=35044,mi=35048,Dl="300 es";class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const n=o.indexOf(t);n!==-1&&o.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let n=0,a=o.length;n<a;n++)o[n].call(this,e);e.target=null}}}let ui=1234567;const En=Math.PI/180,$n=180/Math.PI,zt=[];for(let i=0;i<256;i++)zt[i]=(i<16?"0":"")+i.toString(16);const xg=typeof crypto!="undefined"&&"randomUUID"in crypto;function gr(){if(xg)return crypto.randomUUID().toUpperCase();const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]).toUpperCase()}function dr(i,e,t){return Math.max(e,Math.min(t,i))}function Sa(i,e){return(i%e+e)%e}function pg(i,e,t,r,o){return r+(i-e)*(o-r)/(t-e)}function fg(i,e,t){return i!==e?(t-i)/(e-i):0}function Cn(i,e,t){return(1-t)*i+t*e}function Sg(i,e,t,r){return Cn(i,e,1-Math.exp(-t*r))}function vg(i,e=1){return e-Math.abs(Sa(i,e*2)-e)}function Mg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _g(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ag(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tg(i,e){return i+Math.random()*(e-i)}function yg(i){return i*(.5-Math.random())}function bg(i){return i!==void 0&&(ui=i%2147483647),ui=ui*16807%2147483647,(ui-1)/2147483646}function Pg(i){return i*En}function wg(i){return i*$n}function va(i){return(i&i-1)==0&&i!==0}function Fl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ul(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lg(i,e,t,r,o){const n=Math.cos,a=Math.sin,s=n(t/2),l=a(t/2),d=n((e+r)/2),c=a((e+r)/2),u=n((e-r)/2),g=a((e-r)/2),x=n((r-e)/2),h=a((r-e)/2);switch(o){case"XYX":i.set(s*c,l*u,l*g,s*d);break;case"YZY":i.set(l*g,s*c,l*u,s*d);break;case"ZXZ":i.set(l*u,l*g,s*c,s*d);break;case"XZX":i.set(s*c,l*h,l*x,s*d);break;case"YXY":i.set(l*x,s*c,l*h,s*d);break;case"ZYZ":i.set(l*h,l*x,s*c,s*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}var Eg=Object.freeze({__proto__:null,DEG2RAD:En,RAD2DEG:$n,generateUUID:gr,clamp:dr,euclideanModulo:Sa,mapLinear:pg,inverseLerp:fg,lerp:Cn,damp:Sg,pingpong:vg,smoothstep:Mg,smootherstep:_g,randInt:Ag,randFloat:Tg,randFloatSpread:yg,seededRandom:bg,degToRad:Pg,radToDeg:wg,isPowerOfTwo:va,ceilPowerOfTwo:Fl,floorPowerOfTwo:Ul,setQuaternionFromProperEuler:Lg});class ue{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*r-a*o+e.x,this.y=n*o+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}ue.prototype.isVector2=!0;class Kt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,o,n,a,s,l,d){const c=this.elements;return c[0]=e,c[1]=o,c[2]=s,c[3]=t,c[4]=n,c[5]=l,c[6]=r,c[7]=a,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,n=this.elements,a=r[0],s=r[3],l=r[6],d=r[1],c=r[4],u=r[7],g=r[2],x=r[5],h=r[8],v=o[0],_=o[3],p=o[6],f=o[1],b=o[4],y=o[7],C=o[2],I=o[5],T=o[8];return n[0]=a*v+s*f+l*C,n[3]=a*_+s*b+l*I,n[6]=a*p+s*y+l*T,n[1]=d*v+c*f+u*C,n[4]=d*_+c*b+u*I,n[7]=d*p+c*y+u*T,n[2]=g*v+x*f+h*C,n[5]=g*_+x*b+h*I,n[8]=g*p+x*y+h*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],n=e[3],a=e[4],s=e[5],l=e[6],d=e[7],c=e[8];return t*a*c-t*s*d-r*n*c+r*s*l+o*n*d-o*a*l}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],n=e[3],a=e[4],s=e[5],l=e[6],d=e[7],c=e[8],u=c*a-s*d,g=s*l-c*n,x=d*n-a*l,h=t*u+r*g+o*x;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/h;return e[0]=u*v,e[1]=(o*d-c*r)*v,e[2]=(s*r-o*a)*v,e[3]=g*v,e[4]=(c*t-o*l)*v,e[5]=(o*n-s*t)*v,e[6]=x*v,e[7]=(r*l-d*t)*v,e[8]=(a*t-r*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,n,a,s){const l=Math.cos(n),d=Math.sin(n);return this.set(r*l,r*d,-r*(l*a+d*s)+a+e,-o*d,o*l,-o*(-d*a+l*s)+s+t,0,0,1),this}scale(e,t){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),o=this.elements,n=o[0],a=o[3],s=o[6],l=o[1],d=o[4],c=o[7];return o[0]=t*n+r*l,o[3]=t*a+r*d,o[6]=t*s+r*c,o[1]=-r*n+t*l,o[4]=-r*a+t*d,o[7]=-r*s+t*c,this}translate(e,t){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Kt.prototype.isMatrix3=!0;function Vl(i){if(i.length===0)return-1/0;let e=i[0];for(let t=1,r=i.length;t<r;++t)i[t]>e&&(e=i[t]);return e}function gi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hl(i,e=0){let t=3735928559^e,r=1103547991^e;for(let o=0,n;o<i.length;o++)n=i.charCodeAt(o),t=Math.imul(t^n,2654435761),r=Math.imul(r^n,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&r)+(t>>>0)}let Fo;class Uo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fo===void 0&&(Fo=gi("canvas")),Fo.width=e.width,Fo.height=e.height;const r=Fo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Fo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let $g=0;class Vt extends Kr{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,r=sr,o=sr,n=lr,a=No,s=Yt,l=zr,d=1,c=Jt){super();Object.defineProperty(this,"id",{value:$g++}),this.uuid=gr(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=o,this.magFilter=n,this.minFilter=a,this.anisotropy=d,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const o=this.image;if(o.uuid===void 0&&(o.uuid=gr()),!t&&e.images[o.uuid]===void 0){let n;if(Array.isArray(o)){n=[];for(let a=0,s=o.length;a<s;a++)o[a].isDataTexture?n.push(Ma(o[a].image)):n.push(Ma(o[a]))}else n=Ma(o);e.images[o.uuid]={uuid:o.uuid,url:n}}r.image=o.uuid}return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Go:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case si:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Go:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case si:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}Vt.DEFAULT_IMAGE=void 0;Vt.DEFAULT_MAPPING=_l;Vt.prototype.isTexture=!0;function Ma(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class _t{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o+a[12]*n,this.y=a[1]*t+a[5]*r+a[9]*o+a[13]*n,this.z=a[2]*t+a[6]*r+a[10]*o+a[14]*n,this.w=a[3]*t+a[7]*r+a[11]*o+a[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,n;const a=.01,s=.1,l=e.elements,d=l[0],c=l[4],u=l[8],g=l[1],x=l[5],h=l[9],v=l[2],_=l[6],p=l[10];if(Math.abs(c-g)<a&&Math.abs(u-v)<a&&Math.abs(h-_)<a){if(Math.abs(c+g)<s&&Math.abs(u+v)<s&&Math.abs(h+_)<s&&Math.abs(d+x+p-3)<s)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,y=(x+1)/2,C=(p+1)/2,I=(c+g)/4,T=(u+v)/4,X=(h+_)/4;return b>y&&b>C?b<a?(r=0,o=.707106781,n=.707106781):(r=Math.sqrt(b),o=I/r,n=T/r):y>C?y<a?(r=.707106781,o=0,n=.707106781):(o=Math.sqrt(y),r=I/o,n=X/o):C<a?(r=.707106781,o=.707106781,n=0):(n=Math.sqrt(C),r=T/n,o=X/n),this.set(r,o,n,t),this}let f=Math.sqrt((_-h)*(_-h)+(u-v)*(u-v)+(g-c)*(g-c));return Math.abs(f)<.001&&(f=1),this.x=(_-h)/f,this.y=(u-v)/f,this.z=(g-c)/f,this.w=Math.acos((d+x+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}_t.prototype.isVector4=!0;class yr extends Kr{constructor(e,t,r={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.texture=new Vt(void 0,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:lr,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=dl({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}yr.prototype.isWebGLRenderTarget=!0;class Cg extends yr{constructor(e,t,r){super(e,t);const o=this.texture;this.texture=[];for(let n=0;n<r;n++)this.texture[n]=o.clone()}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,n=this.texture.length;o<n;o++)this.texture[o].image.width=e,this.texture[o].image.height=t,this.texture[o].image.depth=r;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,r=e.texture.length;t<r;t++)this.texture[t]=e.texture[t].clone();return this}}Cg.prototype.isWebGLMultipleRenderTargets=!0;class Xl extends yr{constructor(e,t,r){super(e,t,r);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Xl.prototype.isWebGLMultisampleRenderTarget=!0;class Zt{constructor(e=0,t=0,r=0,o=1){this._x=e,this._y=t,this._z=r,this._w=o}static slerp(e,t,r,o){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),r.slerpQuaternions(e,t,o)}static slerpFlat(e,t,r,o,n,a,s){let l=r[o+0],d=r[o+1],c=r[o+2],u=r[o+3];const g=n[a+0],x=n[a+1],h=n[a+2],v=n[a+3];if(s===0){e[t+0]=l,e[t+1]=d,e[t+2]=c,e[t+3]=u;return}if(s===1){e[t+0]=g,e[t+1]=x,e[t+2]=h,e[t+3]=v;return}if(u!==v||l!==g||d!==x||c!==h){let _=1-s;const p=l*g+d*x+c*h+u*v,f=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),I=Math.atan2(C,p*f);_=Math.sin(_*I)/C,s=Math.sin(s*I)/C}const y=s*f;if(l=l*_+g*y,d=d*_+x*y,c=c*_+h*y,u=u*_+v*y,_===1-s){const C=1/Math.sqrt(l*l+d*d+c*c+u*u);l*=C,d*=C,c*=C,u*=C}}e[t]=l,e[t+1]=d,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,o,n,a){const s=r[o],l=r[o+1],d=r[o+2],c=r[o+3],u=n[a],g=n[a+1],x=n[a+2],h=n[a+3];return e[t]=s*h+c*u+l*x-d*g,e[t+1]=l*h+c*g+d*u-s*x,e[t+2]=d*h+c*x+s*g-l*u,e[t+3]=c*h-s*u-l*g-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=e._x,o=e._y,n=e._z,a=e._order,s=Math.cos,l=Math.sin,d=s(r/2),c=s(o/2),u=s(n/2),g=l(r/2),x=l(o/2),h=l(n/2);switch(a){case"XYZ":this._x=g*c*u+d*x*h,this._y=d*x*u-g*c*h,this._z=d*c*h+g*x*u,this._w=d*c*u-g*x*h;break;case"YXZ":this._x=g*c*u+d*x*h,this._y=d*x*u-g*c*h,this._z=d*c*h-g*x*u,this._w=d*c*u+g*x*h;break;case"ZXY":this._x=g*c*u-d*x*h,this._y=d*x*u+g*c*h,this._z=d*c*h+g*x*u,this._w=d*c*u-g*x*h;break;case"ZYX":this._x=g*c*u-d*x*h,this._y=d*x*u+g*c*h,this._z=d*c*h-g*x*u,this._w=d*c*u+g*x*h;break;case"YZX":this._x=g*c*u+d*x*h,this._y=d*x*u+g*c*h,this._z=d*c*h-g*x*u,this._w=d*c*u-g*x*h;break;case"XZY":this._x=g*c*u-d*x*h,this._y=d*x*u-g*c*h,this._z=d*c*h+g*x*u,this._w=d*c*u+g*x*h;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],n=t[8],a=t[1],s=t[5],l=t[9],d=t[2],c=t[6],u=t[10],g=r+s+u;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(c-l)*x,this._y=(n-d)*x,this._z=(a-o)*x}else if(r>s&&r>u){const x=2*Math.sqrt(1+r-s-u);this._w=(c-l)/x,this._x=.25*x,this._y=(o+a)/x,this._z=(n+d)/x}else if(s>u){const x=2*Math.sqrt(1+s-r-u);this._w=(n-d)/x,this._x=(o+a)/x,this._y=.25*x,this._z=(l+c)/x}else{const x=2*Math.sqrt(1+u-r-s);this._w=(a-o)/x,this._x=(n+d)/x,this._y=(l+c)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dr(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,n=e._z,a=e._w,s=t._x,l=t._y,d=t._z,c=t._w;return this._x=r*c+a*s+o*d-n*l,this._y=o*c+a*l+n*s-r*d,this._z=n*c+a*d+r*l-o*s,this._w=a*c-r*s-o*l-n*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,n=this._z,a=this._w;let s=a*e._w+r*e._x+o*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=r,this._y=o,this._z=n,this;const l=1-s*s;if(l<=Number.EPSILON){const x=1-t;return this._w=x*a+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(l),c=Math.atan2(d,s),u=Math.sin((1-t)*c)/d,g=Math.sin(t*c)/d;return this._w=a*u+this._w*g,this._x=r*u+this._x*g,this._y=o*u+this._y*g,this._z=n*u+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,r){this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(o),r*Math.sin(n),r*Math.cos(n),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Zt.prototype.isQuaternion=!0;class G{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*o,this.y=n[1]*t+n[4]*r+n[7]*o,this.z=n[2]*t+n[5]*r+n[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,n=e.elements,a=1/(n[3]*t+n[7]*r+n[11]*o+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*o+n[12])*a,this.y=(n[1]*t+n[5]*r+n[9]*o+n[13])*a,this.z=(n[2]*t+n[6]*r+n[10]*o+n[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,n=e.x,a=e.y,s=e.z,l=e.w,d=l*t+a*o-s*r,c=l*r+s*t-n*o,u=l*o+n*r-a*t,g=-n*t-a*r-s*o;return this.x=d*l+g*-n+c*-s-u*-a,this.y=c*l+g*-a+u*-n-d*-s,this.z=u*l+g*-s+d*-a-c*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*o,this.y=n[1]*t+n[5]*r+n[9]*o,this.z=n[2]*t+n[6]*r+n[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,n=e.z,a=t.x,s=t.y,l=t.z;return this.x=o*l-n*s,this.y=n*a-r*l,this.z=r*s-o*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(dr(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}G.prototype.isVector3=!0;const _a=new G,kl=new Zt;class hr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,o=1/0,n=-1/0,a=-1/0,s=-1/0;for(let l=0,d=e.length;l<d;l+=3){const c=e[l],u=e[l+1],g=e[l+2];c<t&&(t=c),u<r&&(r=u),g<o&&(o=g),c>n&&(n=c),u>a&&(a=u),g>s&&(s=g)}return this.min.set(t,r,o),this.max.set(n,a,s),this}setFromBufferAttribute(e){let t=1/0,r=1/0,o=1/0,n=-1/0,a=-1/0,s=-1/0;for(let l=0,d=e.count;l<d;l++){const c=e.getX(l),u=e.getY(l),g=e.getZ(l);c<t&&(t=c),u<r&&(r=u),g<o&&(o=g),c>n&&(n=c),u>a&&(a=u),g>s&&(s=g)}return this.min.set(t,r,o),this.max.set(n,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox),Aa.applyMatrix4(e.matrixWorld),this.union(Aa));const r=e.children;for(let o=0,n=r.length;o<n;o++)this.expandByObject(r[o]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nn),hi.subVectors(this.max,Nn),Vo.subVectors(e.a,Nn),Ho.subVectors(e.b,Nn),Xo.subVectors(e.c,Nn),Zr.subVectors(Ho,Vo),Qr.subVectors(Xo,Ho),So.subVectors(Vo,Xo);let t=[0,-Zr.z,Zr.y,0,-Qr.z,Qr.y,0,-So.z,So.y,Zr.z,0,-Zr.x,Qr.z,0,-Qr.x,So.z,0,-So.x,-Zr.y,Zr.x,0,-Qr.y,Qr.x,0,-So.y,So.x,0];return!Ta(t,Vo,Ho,Xo,hi)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Vo,Ho,Xo,hi))?!1:(xi.crossVectors(Zr,Qr),t=[xi.x,xi.y,xi.z],Ta(t,Vo,Ho,Xo,hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}hr.prototype.isBox3=!0;const Br=[new G,new G,new G,new G,new G,new G,new G,new G],Gn=new G,Aa=new hr,Vo=new G,Ho=new G,Xo=new G,Zr=new G,Qr=new G,So=new G,Nn=new G,hi=new G,xi=new G,vo=new G;function Ta(i,e,t,r,o){for(let n=0,a=i.length-3;n<=a;n+=3){vo.fromArray(i,n);const s=o.x*Math.abs(vo.x)+o.y*Math.abs(vo.y)+o.z*Math.abs(vo.z),l=e.dot(vo),d=t.dot(vo),c=r.dot(vo);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>s)return!1}return!0}const Gg=new hr,Wl=new G,ya=new G,ba=new G;class Mo{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Gg.setFromPoints(e).getCenter(r);let o=0;for(let n=0,a=e.length;n<a;n++)o=Math.max(o,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ba.subVectors(e,this.center);const t=ba.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.add(ba.multiplyScalar(o/r)),this.radius+=o}return this}union(e){return ya.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Wl.copy(e.center).add(ya)),this.expandByPoint(Wl.copy(e.center).sub(ya)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ir=new G,Pa=new G,pi=new G,Yr=new G,wa=new G,fi=new G,La=new G;class ko{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.direction).multiplyScalar(t).add(this.origin),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Pa.copy(e).add(t).multiplyScalar(.5),pi.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(Pa);const n=e.distanceTo(t)*.5,a=-this.direction.dot(pi),s=Yr.dot(this.direction),l=-Yr.dot(pi),d=Yr.lengthSq(),c=Math.abs(1-a*a);let u,g,x,h;if(c>0)if(u=a*l-s,g=a*s-l,h=n*c,u>=0)if(g>=-h)if(g<=h){const v=1/c;u*=v,g*=v,x=u*(u+a*g+2*s)+g*(a*u+g+2*l)+d}else g=n,u=Math.max(0,-(a*g+s)),x=-u*u+g*(g+2*l)+d;else g=-n,u=Math.max(0,-(a*g+s)),x=-u*u+g*(g+2*l)+d;else g<=-h?(u=Math.max(0,-(-a*n+s)),g=u>0?-n:Math.min(Math.max(-n,-l),n),x=-u*u+g*(g+2*l)+d):g<=h?(u=0,g=Math.min(Math.max(-n,-l),n),x=g*(g+2*l)+d):(u=Math.max(0,-(a*n+s)),g=u>0?n:Math.min(Math.max(-n,-l),n),x=-u*u+g*(g+2*l)+d);else g=a>0?-n:n,u=Math.max(0,-(a*g+s)),x=-u*u+g*(g+2*l)+d;return r&&r.copy(this.direction).multiplyScalar(u).add(this.origin),o&&o.copy(pi).multiplyScalar(g).add(Pa),x}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);const r=Ir.dot(this.direction),o=Ir.dot(Ir)-r*r,n=e.radius*e.radius;if(o>n)return null;const a=Math.sqrt(n-o),s=r-a,l=r+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,n,a,s,l;const d=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,o=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,o=(e.min.x-g.x)*d),c>=0?(n=(e.min.y-g.y)*c,a=(e.max.y-g.y)*c):(n=(e.max.y-g.y)*c,a=(e.min.y-g.y)*c),r>a||n>o||((n>r||r!==r)&&(r=n),(a<o||o!==o)&&(o=a),u>=0?(s=(e.min.z-g.z)*u,l=(e.max.z-g.z)*u):(s=(e.max.z-g.z)*u,l=(e.min.z-g.z)*u),r>l||s>o)||((s>r||r!==r)&&(r=s),(l<o||o!==o)&&(o=l),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,r,o,n){wa.subVectors(t,e),fi.subVectors(r,e),La.crossVectors(wa,fi);let a=this.direction.dot(La),s;if(a>0){if(o)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Yr.subVectors(this.origin,e);const l=s*this.direction.dot(fi.crossVectors(Yr,fi));if(l<0)return null;const d=s*this.direction.dot(wa.cross(Yr));if(d<0||l+d>a)return null;const c=-s*Yr.dot(La);return c<0?null:this.at(c/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,o,n,a,s,l,d,c,u,g,x,h,v,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=o,p[1]=n,p[5]=a,p[9]=s,p[13]=l,p[2]=d,p[6]=c,p[10]=u,p[14]=g,p[3]=x,p[7]=h,p[11]=v,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Wo.setFromMatrixColumn(e,0).length(),n=1/Wo.setFromMatrixColumn(e,1).length(),a=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,r=e.x,o=e.y,n=e.z,a=Math.cos(r),s=Math.sin(r),l=Math.cos(o),d=Math.sin(o),c=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const g=a*c,x=a*u,h=s*c,v=s*u;t[0]=l*c,t[4]=-l*u,t[8]=d,t[1]=x+h*d,t[5]=g-v*d,t[9]=-s*l,t[2]=v-g*d,t[6]=h+x*d,t[10]=a*l}else if(e.order==="YXZ"){const g=l*c,x=l*u,h=d*c,v=d*u;t[0]=g+v*s,t[4]=h*s-x,t[8]=a*d,t[1]=a*u,t[5]=a*c,t[9]=-s,t[2]=x*s-h,t[6]=v+g*s,t[10]=a*l}else if(e.order==="ZXY"){const g=l*c,x=l*u,h=d*c,v=d*u;t[0]=g-v*s,t[4]=-a*u,t[8]=h+x*s,t[1]=x+h*s,t[5]=a*c,t[9]=v-g*s,t[2]=-a*d,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const g=a*c,x=a*u,h=s*c,v=s*u;t[0]=l*c,t[4]=h*d-x,t[8]=g*d+v,t[1]=l*u,t[5]=v*d+g,t[9]=x*d-h,t[2]=-d,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const g=a*l,x=a*d,h=s*l,v=s*d;t[0]=l*c,t[4]=v-g*u,t[8]=h*u+x,t[1]=u,t[5]=a*c,t[9]=-s*c,t[2]=-d*c,t[6]=x*u+h,t[10]=g-v*u}else if(e.order==="XZY"){const g=a*l,x=a*d,h=s*l,v=s*d;t[0]=l*c,t[4]=-u,t[8]=d*c,t[1]=g*u+v,t[5]=a*c,t[9]=x*u-h,t[2]=h*u-x,t[6]=s*c,t[10]=v*u+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ng,e,Bg)}lookAt(e,t,r){const o=this.elements;return mr.subVectors(e,t),mr.lengthSq()===0&&(mr.z=1),mr.normalize(),Jr.crossVectors(r,mr),Jr.lengthSq()===0&&(Math.abs(r.z)===1?mr.x+=1e-4:mr.z+=1e-4,mr.normalize(),Jr.crossVectors(r,mr)),Jr.normalize(),Si.crossVectors(mr,Jr),o[0]=Jr.x,o[4]=Si.x,o[8]=mr.x,o[1]=Jr.y,o[5]=Si.y,o[9]=mr.y,o[2]=Jr.z,o[6]=Si.z,o[10]=mr.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,n=this.elements,a=r[0],s=r[4],l=r[8],d=r[12],c=r[1],u=r[5],g=r[9],x=r[13],h=r[2],v=r[6],_=r[10],p=r[14],f=r[3],b=r[7],y=r[11],C=r[15],I=o[0],T=o[4],X=o[8],q=o[12],j=o[1],B=o[5],ge=o[9],D=o[13],k=o[2],W=o[6],H=o[10],Z=o[14],fe=o[3],we=o[7],Le=o[11],Me=o[15];return n[0]=a*I+s*j+l*k+d*fe,n[4]=a*T+s*B+l*W+d*we,n[8]=a*X+s*ge+l*H+d*Le,n[12]=a*q+s*D+l*Z+d*Me,n[1]=c*I+u*j+g*k+x*fe,n[5]=c*T+u*B+g*W+x*we,n[9]=c*X+u*ge+g*H+x*Le,n[13]=c*q+u*D+g*Z+x*Me,n[2]=h*I+v*j+_*k+p*fe,n[6]=h*T+v*B+_*W+p*we,n[10]=h*X+v*ge+_*H+p*Le,n[14]=h*q+v*D+_*Z+p*Me,n[3]=f*I+b*j+y*k+C*fe,n[7]=f*T+b*B+y*W+C*we,n[11]=f*X+b*ge+y*H+C*Le,n[15]=f*q+b*D+y*Z+C*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],n=e[12],a=e[1],s=e[5],l=e[9],d=e[13],c=e[2],u=e[6],g=e[10],x=e[14],h=e[3],v=e[7],_=e[11],p=e[15];return h*(+n*l*u-o*d*u-n*s*g+r*d*g+o*s*x-r*l*x)+v*(+t*l*x-t*d*g+n*a*g-o*a*x+o*d*c-n*l*c)+_*(+t*d*u-t*s*x-n*a*u+r*a*x+n*s*c-r*d*c)+p*(-o*s*c-t*l*u+t*s*g+o*a*u-r*a*g+r*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],n=e[3],a=e[4],s=e[5],l=e[6],d=e[7],c=e[8],u=e[9],g=e[10],x=e[11],h=e[12],v=e[13],_=e[14],p=e[15],f=u*_*d-v*g*d+v*l*x-s*_*x-u*l*p+s*g*p,b=h*g*d-c*_*d-h*l*x+a*_*x+c*l*p-a*g*p,y=c*v*d-h*u*d+h*s*x-a*v*x-c*s*p+a*u*p,C=h*u*l-c*v*l-h*s*g+a*v*g+c*s*_-a*u*_,I=t*f+r*b+o*y+n*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/I;return e[0]=f*T,e[1]=(v*g*n-u*_*n-v*o*x+r*_*x+u*o*p-r*g*p)*T,e[2]=(s*_*n-v*l*n+v*o*d-r*_*d-s*o*p+r*l*p)*T,e[3]=(u*l*n-s*g*n-u*o*d+r*g*d+s*o*x-r*l*x)*T,e[4]=b*T,e[5]=(c*_*n-h*g*n+h*o*x-t*_*x-c*o*p+t*g*p)*T,e[6]=(h*l*n-a*_*n-h*o*d+t*_*d+a*o*p-t*l*p)*T,e[7]=(a*g*n-c*l*n+c*o*d-t*g*d-a*o*x+t*l*x)*T,e[8]=y*T,e[9]=(h*u*n-c*v*n-h*r*x+t*v*x+c*r*p-t*u*p)*T,e[10]=(a*v*n-h*s*n+h*r*d-t*v*d-a*r*p+t*s*p)*T,e[11]=(c*s*n-a*u*n-c*r*d+t*u*d+a*r*x-t*s*x)*T,e[12]=C*T,e[13]=(c*v*o-h*u*o+h*r*g-t*v*g-c*r*_+t*u*_)*T,e[14]=(h*s*o-a*v*o-h*r*l+t*v*l+a*r*_-t*s*_)*T,e[15]=(a*u*o-c*s*o+c*r*l-t*u*l-a*r*g+t*s*g)*T,this}scale(e){const t=this.elements,r=e.x,o=e.y,n=e.z;return t[0]*=r,t[4]*=o,t[8]*=n,t[1]*=r,t[5]*=o,t[9]*=n,t[2]*=r,t[6]*=o,t[10]*=n,t[3]*=r,t[7]*=o,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),n=1-r,a=e.x,s=e.y,l=e.z,d=n*a,c=n*s;return this.set(d*a+r,d*s-o*l,d*l+o*s,0,d*s+o*l,c*s+r,c*l-o*a,0,d*l-o*s,c*l+o*a,n*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,n,a){return this.set(1,r,n,0,e,1,a,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,n=t._x,a=t._y,s=t._z,l=t._w,d=n+n,c=a+a,u=s+s,g=n*d,x=n*c,h=n*u,v=a*c,_=a*u,p=s*u,f=l*d,b=l*c,y=l*u,C=r.x,I=r.y,T=r.z;return o[0]=(1-(v+p))*C,o[1]=(x+y)*C,o[2]=(h-b)*C,o[3]=0,o[4]=(x-y)*I,o[5]=(1-(g+p))*I,o[6]=(_+f)*I,o[7]=0,o[8]=(h+b)*T,o[9]=(_-f)*T,o[10]=(1-(g+v))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let n=Wo.set(o[0],o[1],o[2]).length();const a=Wo.set(o[4],o[5],o[6]).length(),s=Wo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(n=-n),e.x=o[12],e.y=o[13],e.z=o[14],Sr.copy(this);const d=1/n,c=1/a,u=1/s;return Sr.elements[0]*=d,Sr.elements[1]*=d,Sr.elements[2]*=d,Sr.elements[4]*=c,Sr.elements[5]*=c,Sr.elements[6]*=c,Sr.elements[8]*=u,Sr.elements[9]*=u,Sr.elements[10]*=u,t.setFromRotationMatrix(Sr),r.x=n,r.y=a,r.z=s,this}makePerspective(e,t,r,o,n,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const s=this.elements,l=2*n/(t-e),d=2*n/(r-o),c=(t+e)/(t-e),u=(r+o)/(r-o),g=-(a+n)/(a-n),x=-2*a*n/(a-n);return s[0]=l,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=d,s[9]=u,s[13]=0,s[2]=0,s[6]=0,s[10]=g,s[14]=x,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,r,o,n,a){const s=this.elements,l=1/(t-e),d=1/(r-o),c=1/(a-n),u=(t+e)*l,g=(r+o)*d,x=(a+n)*c;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-u,s[1]=0,s[5]=2*d,s[9]=0,s[13]=-g,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-x,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}Fe.prototype.isMatrix4=!0;const Wo=new G,Sr=new Fe,Ng=new G(0,0,0),Bg=new G(1,1,1),Jr=new G,Si=new G,mr=new G,zl=new Fe,Kl=new Zt;class zo{constructor(e=0,t=0,r=0,o=zo.DefaultOrder){this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,n=o[0],a=o[4],s=o[8],l=o[1],d=o[5],c=o[9],u=o[2],g=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(dr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,x),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-dr(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,x),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(dr(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-u,x),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-dr(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(dr(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(s,x));break;case"XZY":this._z=Math.asin(-dr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-c,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new G(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}zo.prototype.isEuler=!0;zo.DefaultOrder="XYZ";zo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ig{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let Rg=0;const Zl=new G,Ko=new Zt,Rr=new Fe,vi=new G,Bn=new G,Og=new G,Dg=new Zt,Ql=new G(1,0,0),Yl=new G(0,1,0),Jl=new G(0,0,1),Fg={type:"added"},jl={type:"removed"};class ft extends Kr{constructor(){super();Object.defineProperty(this,"id",{value:Rg++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DefaultUp.clone();const e=new G,t=new zo,r=new Zt,o=new G(1,1,1);function n(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Kt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ft.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ig,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.premultiply(Ko),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return Zl.copy(e).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vi.copy(e):vi.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(Bn,vi,this.up):Rr.lookAt(vi,Bn,this.up),this.quaternion.setFromRotationMatrix(Rr),o&&(Rr.extractRotation(o.matrixWorld),Ko.setFromRotationMatrix(Rr),this.quaternion.premultiply(Ko.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(jl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,e,Og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,Dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let n=0,a=o.length;n<a;n++)o[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function n(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){const u=l[d];n(e.shapes,u)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,d=this.material.length;l<d;l++)s.push(n(e.materials,this.material[l]));o.material=s}else o.material=n(e.materials,this.material);if(this.children.length>0){o.children=[];for(let s=0;s<this.children.length;s++)o.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];o.animations.push(n(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),d=a(e.textures),c=a(e.images),u=a(e.shapes),g=a(e.skeletons),x=a(e.animations);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),d.length>0&&(r.textures=d),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x)}return r.object=o,r;function a(s){const l=[];for(const d in s){const c=s[d];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ft.DefaultUp=new G(0,1,0);ft.DefaultMatrixAutoUpdate=!0;ft.prototype.isObject3D=!0;const vr=new G,Or=new G,Ea=new G,Dr=new G,Zo=new G,Qo=new G,ql=new G,$a=new G,Ca=new G,Ga=new G;class Dt{constructor(e=new G,t=new G,r=new G){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),vr.subVectors(e,t),o.cross(vr);const n=o.lengthSq();return n>0?o.multiplyScalar(1/Math.sqrt(n)):o.set(0,0,0)}static getBarycoord(e,t,r,o,n){vr.subVectors(o,t),Or.subVectors(r,t),Ea.subVectors(e,t);const a=vr.dot(vr),s=vr.dot(Or),l=vr.dot(Ea),d=Or.dot(Or),c=Or.dot(Ea),u=a*d-s*s;if(u===0)return n.set(-2,-1,-1);const g=1/u,x=(d*l-s*c)*g,h=(a*c-s*l)*g;return n.set(1-x-h,h,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Dr),Dr.x>=0&&Dr.y>=0&&Dr.x+Dr.y<=1}static getUV(e,t,r,o,n,a,s,l){return this.getBarycoord(e,t,r,o,Dr),l.set(0,0),l.addScaledVector(n,Dr.x),l.addScaledVector(a,Dr.y),l.addScaledVector(s,Dr.z),l}static isFrontFacing(e,t,r,o){return vr.subVectors(r,t),Or.subVectors(e,t),vr.cross(Or).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vr.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),vr.cross(Or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,o,n){return Dt.getUV(e,this.a,this.b,this.c,t,r,o,n)}containsPoint(e){return Dt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,n=this.c;let a,s;Zo.subVectors(o,r),Qo.subVectors(n,r),$a.subVectors(e,r);const l=Zo.dot($a),d=Qo.dot($a);if(l<=0&&d<=0)return t.copy(r);Ca.subVectors(e,o);const c=Zo.dot(Ca),u=Qo.dot(Ca);if(c>=0&&u<=c)return t.copy(o);const g=l*u-c*d;if(g<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(r).addScaledVector(Zo,a);Ga.subVectors(e,n);const x=Zo.dot(Ga),h=Qo.dot(Ga);if(h>=0&&x<=h)return t.copy(n);const v=x*d-l*h;if(v<=0&&d>=0&&h<=0)return s=d/(d-h),t.copy(r).addScaledVector(Qo,s);const _=c*h-x*u;if(_<=0&&u-c>=0&&x-h>=0)return ql.subVectors(n,o),s=(u-c)/(u-c+(x-h)),t.copy(o).addScaledVector(ql,s);const p=1/(_+v+g);return a=v*p,s=g*p,t.copy(r).addScaledVector(Zo,a).addScaledVector(Qo,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ug=0;class Ht extends Kr{constructor(){super();Object.defineProperty(this,"id",{value:Ug++}),this.uuid=gr(),this.name="",this.type="Material",this.fog=!0,this.blending=An,this.side=$o,this.vertexColors=!1,this.opacity=1,this.format=Yt,this.transparent=!1,this.blendSrc=vl,this.blendDst=Ml,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===gl;continue}const o=this[t];if(o===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==An&&(r.blending=this.blending),this.side!==$o&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.format!==Yt&&(r.format=this.format),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function o(n){const a=[];for(const s in n){const l=n[s];delete l.metadata,a.push(l)}return a}if(t){const n=o(e.textures),a=o(e.images);n.length>0&&(r.textures=n),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let n=0;n!==o;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Ht.prototype.isMaterial=!0;const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Mi={h:0,s:0,l:0};function Na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ba(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}class Ce{constructor(e,t,r){return t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,r){return this.r=e,this.g=t,this.b=r,this}setHSL(e,t,r){if(e=Sa(e,1),t=dr(t,0,1),r=dr(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,n=2*r-o;this.r=Na(n,o,e+1/3),this.g=Na(n,o,e),this.b=Na(n,o,e-1/3)}return this}setStyle(e){function t(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const n=r[1],a=r[2];switch(n){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,t(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,t(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const s=parseFloat(o[1])/360,l=parseInt(o[2],10)/100,d=parseInt(o[3],10)/100;return t(o[4]),this.setHSL(s,l,d)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],n=o.length;if(n===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,this;if(n===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=ed[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const r=t>0?1/t:1;return this.r=Math.pow(e.r,r),this.g=Math.pow(e.g,r),this.b=Math.pow(e.b,r),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,r=this.g,o=this.b,n=Math.max(t,r,o),a=Math.min(t,r,o);let s,l;const d=(a+n)/2;if(a===n)s=0,l=0;else{const c=n-a;switch(l=d<=.5?c/(n+a):c/(2-n-a),n){case t:s=(r-o)/c+(r<o?6:0);break;case r:s=(o-t)/c+2;break;case o:s=(t-r)/c+4;break}s/=6}return e.h=s,e.s=l,e.l=d,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,r){return this.getHSL(Mr),Mr.h+=e,Mr.s+=t,Mr.l+=r,this.setHSL(Mr.h,Mr.s,Mr.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Mi);const r=Cn(Mr.h,Mi.h,t),o=Cn(Mr.s,Mi.s,t),n=Cn(Mr.l,Mi.l,t);return this.setHSL(r,o,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ce.NAMES=ed;Ce.prototype.isColor=!0;Ce.prototype.r=1;Ce.prototype.g=1;Ce.prototype.b=1;class jr extends Ht{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ii,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}jr.prototype.isMeshBasicMaterial=!0;const bt=new G,_i=new ue;class It{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=Ln,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,n=this.itemSize;o<n;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let r=0;for(let o=0,n=e.length;o<n;o++){let a=e[o];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",o),a=new Ce),t[r++]=a.r,t[r++]=a.g,t[r++]=a.b}return this}copyVector2sArray(e){const t=this.array;let r=0;for(let o=0,n=e.length;o<n;o++){let a=e[o];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",o),a=new ue),t[r++]=a.x,t[r++]=a.y}return this}copyVector3sArray(e){const t=this.array;let r=0;for(let o=0,n=e.length;o<n;o++){let a=e[o];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",o),a=new G),t[r++]=a.x,t[r++]=a.y,t[r++]=a.z}return this}copyVector4sArray(e){const t=this.array;let r=0;for(let o=0,n=e.length;o<n;o++){let a=e[o];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",o),a=new _t),t[r++]=a.x,t[r++]=a.y,t[r++]=a.z,t[r++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)_i.fromBufferAttribute(this,t),_i.applyMatrix3(e),this.setXY(t,_i.x,_i.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)bt.x=this.getX(t),bt.y=this.getY(t),bt.z=this.getZ(t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)bt.x=this.getX(t),bt.y=this.getY(t),bt.z=this.getZ(t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)bt.x=this.getX(t),bt.y=this.getY(t),bt.z=this.getZ(t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ln&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}It.prototype.isBufferAttribute=!0;class td extends It{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class rd extends It{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Vg extends It{constructor(e,t,r){super(new Uint16Array(e),t,r)}}Vg.prototype.isFloat16BufferAttribute=!0;class Rt extends It{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Hg=0;const xr=new Fe,Ra=new ft,Yo=new G,ur=new hr,In=new hr,Wt=new G;class Pt extends Kr{constructor(){super();Object.defineProperty(this,"id",{value:Hg++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vl(e)>65535?rd:td)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new Kt().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,r){return xr.makeTranslation(e,t,r),this.applyMatrix4(xr),this}scale(e,t,r){return xr.makeScale(e,t,r),this.applyMatrix4(xr),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yo).negate(),this.translate(Yo.x,Yo.y,Yo.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const n=e[r];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const n=t[r];ur.setFromBufferAttribute(n),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,ur.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,ur.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(ur.min),this.boundingBox.expandByPoint(ur.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(ur.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(ur.min,In.min),ur.expandByPoint(Wt),Wt.addVectors(ur.max,In.max),ur.expandByPoint(Wt)):(ur.expandByPoint(In.min),ur.expandByPoint(In.max))}ur.getCenter(r);let o=0;for(let n=0,a=e.count;n<a;n++)Wt.fromBufferAttribute(e,n),o=Math.max(o,r.distanceToSquared(Wt));if(t)for(let n=0,a=t.length;n<a;n++){const s=t[n],l=this.morphTargetsRelative;for(let d=0,c=s.count;d<c;d++)Wt.fromBufferAttribute(s,d),l&&(Yo.fromBufferAttribute(e,d),Wt.add(Yo)),o=Math.max(o,r.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=t.position.array,n=t.normal.array,a=t.uv.array,s=o.length/3;t.tangent===void 0&&this.setAttribute("tangent",new It(new Float32Array(4*s),4));const l=t.tangent.array,d=[],c=[];for(let j=0;j<s;j++)d[j]=new G,c[j]=new G;const u=new G,g=new G,x=new G,h=new ue,v=new ue,_=new ue,p=new G,f=new G;function b(j,B,ge){u.fromArray(o,j*3),g.fromArray(o,B*3),x.fromArray(o,ge*3),h.fromArray(a,j*2),v.fromArray(a,B*2),_.fromArray(a,ge*2),g.sub(u),x.sub(u),v.sub(h),_.sub(h);const D=1/(v.x*_.y-_.x*v.y);!isFinite(D)||(p.copy(g).multiplyScalar(_.y).addScaledVector(x,-v.y).multiplyScalar(D),f.copy(x).multiplyScalar(v.x).addScaledVector(g,-_.x).multiplyScalar(D),d[j].add(p),d[B].add(p),d[ge].add(p),c[j].add(f),c[B].add(f),c[ge].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:r.length}]);for(let j=0,B=y.length;j<B;++j){const ge=y[j],D=ge.start,k=ge.count;for(let W=D,H=D+k;W<H;W+=3)b(r[W+0],r[W+1],r[W+2])}const C=new G,I=new G,T=new G,X=new G;function q(j){T.fromArray(n,j*3),X.copy(T);const B=d[j];C.copy(B),C.sub(T.multiplyScalar(T.dot(B))).normalize(),I.crossVectors(X,B);const D=I.dot(c[j])<0?-1:1;l[j*4]=C.x,l[j*4+1]=C.y,l[j*4+2]=C.z,l[j*4+3]=D}for(let j=0,B=y.length;j<B;++j){const ge=y[j],D=ge.start,k=ge.count;for(let W=D,H=D+k;W<H;W+=3)q(r[W+0]),q(r[W+1]),q(r[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const o=new G,n=new G,a=new G,s=new G,l=new G,d=new G,c=new G,u=new G;if(e)for(let g=0,x=e.count;g<x;g+=3){const h=e.getX(g+0),v=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(t,h),n.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),c.subVectors(a,n),u.subVectors(o,n),c.cross(u),s.fromBufferAttribute(r,h),l.fromBufferAttribute(r,v),d.fromBufferAttribute(r,_),s.add(c),l.add(c),d.add(c),r.setXYZ(h,s.x,s.y,s.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(_,d.x,d.y,d.z)}else for(let g=0,x=t.count;g<x;g+=3)o.fromBufferAttribute(t,g+0),n.fromBufferAttribute(t,g+1),a.fromBufferAttribute(t,g+2),c.subVectors(a,n),u.subVectors(o,n),c.cross(u),r.setXYZ(g+0,c.x,c.y,c.z),r.setXYZ(g+1,c.x,c.y,c.z),r.setXYZ(g+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const o in r){if(e.attributes[o]===void 0)continue;const a=r[o].array,s=e.attributes[o],l=s.array,d=s.itemSize*t,c=Math.min(l.length,a.length-d);for(let u=0,g=d;u<c;u++,g++)a[g]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(s,l){const d=s.array,c=s.itemSize,u=s.normalized,g=new d.constructor(l.length*c);let x=0,h=0;for(let v=0,_=l.length;v<_;v++){s.isInterleavedBufferAttribute?x=l[v]*s.data.stride+s.offset:x=l[v]*c;for(let p=0;p<c;p++)g[h++]=d[x++]}return new It(g,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,r=this.index.array,o=this.attributes;for(const s in o){const l=o[s],d=e(l,r);t.setAttribute(s,d)}const n=this.morphAttributes;for(const s in n){const l=[],d=n[s];for(let c=0,u=d.length;c<u;c++){const g=d[c],x=e(g,r);l.push(x)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const d=a[s];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const d=r[l];e.data.attributes[l]=d.toJSON(e.data)}const o={};let n=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],c=[];for(let u=0,g=d.length;u<g;u++){const x=d[u];c.push(x.toJSON(e.data))}c.length>0&&(o[l]=c,n=!0)}n&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const d in o){const c=o[d];this.setAttribute(d,c.clone(t))}const n=e.morphAttributes;for(const d in n){const c=[],u=n[d];for(let g=0,x=u.length;g<x;g++)c.push(u[g].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,c=a.length;d<c;d++){const u=a[d];this.addGroup(u.start,u.count,u.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Pt.prototype.isBufferGeometry=!0;const od=new Fe,Jo=new ko,Oa=new Mo,qr=new G,eo=new G,to=new G,Da=new G,Fa=new G,Ua=new G,Ai=new G,Ti=new G,yi=new G,bi=new ue,Pi=new ue,wi=new ue,Va=new G,Li=new G;class or extends ft{constructor(e=new Pt,t=new jr){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=o.length;n<a;n++){const s=o[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const r=this.geometry,o=this.material,n=this.matrixWorld;if(o===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),Oa.copy(r.boundingSphere),Oa.applyMatrix4(n),e.ray.intersectsSphere(Oa)===!1)||(od.copy(n).invert(),Jo.copy(e.ray).applyMatrix4(od),r.boundingBox!==null&&Jo.intersectsBox(r.boundingBox)===!1))return;let a;if(r.isBufferGeometry){const s=r.index,l=r.attributes.position,d=r.morphAttributes.position,c=r.morphTargetsRelative,u=r.attributes.uv,g=r.attributes.uv2,x=r.groups,h=r.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,_=x.length;v<_;v++){const p=x[v],f=o[p.materialIndex],b=Math.max(p.start,h.start),y=Math.min(s.count,Math.min(p.start+p.count,h.start+h.count));for(let C=b,I=y;C<I;C+=3){const T=s.getX(C),X=s.getX(C+1),q=s.getX(C+2);a=Ei(this,f,e,Jo,l,d,c,u,g,T,X,q),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,h.start),_=Math.min(s.count,h.start+h.count);for(let p=v,f=_;p<f;p+=3){const b=s.getX(p),y=s.getX(p+1),C=s.getX(p+2);a=Ei(this,o,e,Jo,l,d,c,u,g,b,y,C),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=x.length;v<_;v++){const p=x[v],f=o[p.materialIndex],b=Math.max(p.start,h.start),y=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let C=b,I=y;C<I;C+=3){const T=C,X=C+1,q=C+2;a=Ei(this,f,e,Jo,l,d,c,u,g,T,X,q),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=v,f=_;p<f;p+=3){const b=p,y=p+1,C=p+2;a=Ei(this,o,e,Jo,l,d,c,u,g,b,y,C),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}else r.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}or.prototype.isMesh=!0;function Xg(i,e,t,r,o,n,a,s){let l;if(e.side===Ft?l=r.intersectTriangle(a,n,o,!0,s):l=r.intersectTriangle(o,n,a,e.side!==ho,s),l===null)return null;Li.copy(s),Li.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Li);return d<t.near||d>t.far?null:{distance:d,point:Li.clone(),object:i}}function Ei(i,e,t,r,o,n,a,s,l,d,c,u){qr.fromBufferAttribute(o,d),eo.fromBufferAttribute(o,c),to.fromBufferAttribute(o,u);const g=i.morphTargetInfluences;if(n&&g){Ai.set(0,0,0),Ti.set(0,0,0),yi.set(0,0,0);for(let h=0,v=n.length;h<v;h++){const _=g[h],p=n[h];_!==0&&(Da.fromBufferAttribute(p,d),Fa.fromBufferAttribute(p,c),Ua.fromBufferAttribute(p,u),a?(Ai.addScaledVector(Da,_),Ti.addScaledVector(Fa,_),yi.addScaledVector(Ua,_)):(Ai.addScaledVector(Da.sub(qr),_),Ti.addScaledVector(Fa.sub(eo),_),yi.addScaledVector(Ua.sub(to),_)))}qr.add(Ai),eo.add(Ti),to.add(yi)}i.isSkinnedMesh&&(i.boneTransform(d,qr),i.boneTransform(c,eo),i.boneTransform(u,to));const x=Xg(i,e,t,r,qr,eo,to,Va);if(x){s&&(bi.fromBufferAttribute(s,d),Pi.fromBufferAttribute(s,c),wi.fromBufferAttribute(s,u),x.uv=Dt.getUV(Va,qr,eo,to,bi,Pi,wi,new ue)),l&&(bi.fromBufferAttribute(l,d),Pi.fromBufferAttribute(l,c),wi.fromBufferAttribute(l,u),x.uv2=Dt.getUV(Va,qr,eo,to,bi,Pi,wi,new ue));const h={a:d,b:c,c:u,normal:new G,materialIndex:0};Dt.getNormal(qr,eo,to,h.normal),x.face=h}return x}class Rn extends Pt{constructor(e=1,t=1,r=1,o=1,n=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:n,depthSegments:a};const s=this;o=Math.floor(o),n=Math.floor(n),a=Math.floor(a);const l=[],d=[],c=[],u=[];let g=0,x=0;h("z","y","x",-1,-1,r,t,e,a,n,0),h("z","y","x",1,-1,r,t,-e,a,n,1),h("x","z","y",1,1,e,r,t,o,a,2),h("x","z","y",1,-1,e,r,-t,o,a,3),h("x","y","z",1,-1,e,t,r,o,n,4),h("x","y","z",-1,-1,e,t,-r,o,n,5),this.setIndex(l),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(u,2));function h(v,_,p,f,b,y,C,I,T,X,q){const j=y/T,B=C/X,ge=y/2,D=C/2,k=I/2,W=T+1,H=X+1;let Z=0,fe=0;const we=new G;for(let Le=0;Le<H;Le++){const Me=Le*B-D;for(let Xe=0;Xe<W;Xe++){const se=Xe*j-ge;we[v]=se*f,we[_]=Me*b,we[p]=k,d.push(we.x,we.y,we.z),we[v]=0,we[_]=0,we[p]=I>0?1:-1,c.push(we.x,we.y,we.z),u.push(Xe/T),u.push(1-Le/X),Z+=1}}for(let Le=0;Le<X;Le++)for(let Me=0;Me<T;Me++){const Xe=g+Me+W*Le,se=g+Me+W*(Le+1),xe=g+(Me+1)+W*(Le+1),Ne=g+(Me+1)+W*Le;l.push(Xe,se,Ne),l.push(se,xe,Ne),fe+=6}s.addGroup(x,fe,q),x+=fe,g+=Z}}static fromJSON(e){return new Rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jo(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function jt(i){const e={};for(let t=0;t<i.length;t++){const r=jo(i[t]);for(const o in r)e[o]=r[o]}return e}const kg={clone:jo,merge:jt};var Wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _o extends Ht{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Wg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const a=this.uniforms[o].value;a&&a.isTexture?t.uniforms[o]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[o]={type:"m4",value:a.toArray()}:t.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}_o.prototype.isShaderMaterial=!0;class Ha extends ft{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Ha.prototype.isCamera=!0;class nr extends Ha{constructor(e=50,t=1,r=.1,o=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$n*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(En*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $n*2*Math.atan(Math.tan(En*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,o,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(En*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,n=-.5*o;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,d=a.fullHeight;n+=a.offsetX*o/l,t-=a.offsetY*r/d,o*=a.width/l,r*=a.height/d}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+o,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}nr.prototype.isPerspectiveCamera=!0;const qo=90,en=1;class Xa extends ft{constructor(e,t,r){super();if(this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const o=new nr(qo,en,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new G(1,0,0)),this.add(o);const n=new nr(qo,en,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new G(-1,0,0)),this.add(n);const a=new nr(qo,en,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new G(0,1,0)),this.add(a);const s=new nr(qo,en,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new G(0,-1,0)),this.add(s);const l=new nr(qo,en,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new G(0,0,1)),this.add(l);const d=new nr(qo,en,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new G(0,0,-1)),this.add(d)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[o,n,a,s,l,d]=this.children,c=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,o),e.setRenderTarget(r,1),e.render(t,n),e.setRenderTarget(r,2),e.render(t,a),e.setRenderTarget(r,3),e.render(t,s),e.setRenderTarget(r,4),e.render(t,l),r.texture.generateMipmaps=g,e.setRenderTarget(r,5),e.render(t,d),e.setRenderTarget(u),e.xr.enabled=c}}class $i extends Vt{constructor(e,t,r,o,n,a,s,l,d,c){e=e!==void 0?e:[],t=t!==void 0?t:Tn;super(e,t,r,o,n,a,s,l,d,c);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}$i.prototype.isCubeTexture=!0;class nd extends yr{constructor(e,t,r){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=r);super(e,e,t);t=t||{},this.texture=new $i(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:lr,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Yt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Rn(5,5,5),n=new _o({name:"CubemapFromEquirect",uniforms:jo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ft,blending:Wr});n.uniforms.tEquirect.value=t;const a=new or(o,n),s=t.minFilter;return t.minFilter===No&&(t.minFilter=lr),new Xa(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,o){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,o);e.setRenderTarget(n)}}nd.prototype.isWebGLCubeRenderTarget=!0;const ka=new G,Kg=new G,Zg=new Kt;class Fr{constructor(e=new G(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ka.subVectors(r,t).cross(Kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const r=e.delta(ka),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/o;return n<0||n>1?null:t.copy(r).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Zg.getNormalMatrix(e),o=this.coplanarPoint(ka).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Fr.prototype.isPlane=!0;const tn=new Mo,Ci=new G;class Gi{constructor(e=new Fr,t=new Fr,r=new Fr,o=new Fr,n=new Fr,a=new Fr){this.planes=[e,t,r,o,n,a]}set(e,t,r,o,n,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(o),s[4].copy(n),s[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,o=r[0],n=r[1],a=r[2],s=r[3],l=r[4],d=r[5],c=r[6],u=r[7],g=r[8],x=r[9],h=r[10],v=r[11],_=r[12],p=r[13],f=r[14],b=r[15];return t[0].setComponents(s-o,u-l,v-g,b-_).normalize(),t[1].setComponents(s+o,u+l,v+g,b+_).normalize(),t[2].setComponents(s+n,u+d,v+x,b+p).normalize(),t[3].setComponents(s-n,u-d,v-x,b-p).normalize(),t[4].setComponents(s-a,u-c,v-h,b-f).normalize(),t[5].setComponents(s+a,u+c,v+h,b+f).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(tn)}intersectsSprite(e){return tn.center.set(0,0,0),tn.radius=.7071067811865476,tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(tn)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ci.x=o.normal.x>0?e.max.x:e.min.x,Ci.y=o.normal.y>0?e.max.y:e.min.y,Ci.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ci)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function id(){let i=null,e=!1,t=null,r=null;function o(n,a){t(n,a),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){i=n}}}function Qg(i,e){const t=e.isWebGL2,r=new WeakMap;function o(d,c){const u=d.array,g=d.usage,x=i.createBuffer();i.bindBuffer(c,x),i.bufferData(c,u,g),d.onUploadCallback();let h=5126;return u instanceof Float32Array?h=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?d.isFloat16BufferAttribute?t?h=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):h=5123:u instanceof Int16Array?h=5122:u instanceof Uint32Array?h=5125:u instanceof Int32Array?h=5124:u instanceof Int8Array?h=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(h=5121),{buffer:x,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:d.version}}function n(d,c,u){const g=c.array,x=c.updateRange;i.bindBuffer(u,d),x.count===-1?i.bufferSubData(u,0,g):(t?i.bufferSubData(u,x.offset*g.BYTES_PER_ELEMENT,g,x.offset,x.count):i.bufferSubData(u,x.offset*g.BYTES_PER_ELEMENT,g.subarray(x.offset,x.offset+x.count)),x.count=-1)}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),r.get(d)}function s(d){d.isInterleavedBufferAttribute&&(d=d.data);const c=r.get(d);c&&(i.deleteBuffer(c.buffer),r.delete(d))}function l(d,c){if(d.isGLBufferAttribute){const g=r.get(d);(!g||g.version<d.version)&&r.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const u=r.get(d);u===void 0?r.set(d,o(d,c)):u.version<d.version&&(n(u.buffer,d,c),u.version=d.version)}return{get:a,remove:s,update:l}}class Wa extends Pt{constructor(e=1,t=1,r=1,o=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const n=e/2,a=t/2,s=Math.floor(r),l=Math.floor(o),d=s+1,c=l+1,u=e/s,g=t/l,x=[],h=[],v=[],_=[];for(let p=0;p<c;p++){const f=p*g-a;for(let b=0;b<d;b++){const y=b*u-n;h.push(y,-f,0),v.push(0,0,1),_.push(b/s),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let f=0;f<s;f++){const b=f+d*p,y=f+d*(p+1),C=f+1+d*(p+1),I=f+1+d*p;x.push(b,y,I),x.push(y,C,I)}this.setIndex(x),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(_,2))}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rh="vec3 transformed = vec3( position );",oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,ih=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hh=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,xh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,ph=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_h="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ah=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Th=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wh=`#ifdef USE_ENVMAP
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
#endif`,Lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Nh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ih=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Rh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Oh=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Dh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Hh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Xh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
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
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
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
}`,kh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Kh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jh=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,n0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,s0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,y0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,P0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,E0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,R0=`#ifdef USE_TRANSMISSION
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
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,O0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,D0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,F0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,U0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,V0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,H0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Z0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Y0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,J0=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ex=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,sx=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,mx=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,it={alphamap_fragment:Yg,alphamap_pars_fragment:Jg,alphatest_fragment:jg,alphatest_pars_fragment:qg,aomap_fragment:eh,aomap_pars_fragment:th,begin_vertex:rh,beginnormal_vertex:oh,bsdfs:nh,bumpmap_pars_fragment:ih,clipping_planes_fragment:ah,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:lh,clipping_planes_vertex:dh,color_fragment:ch,color_pars_fragment:mh,color_pars_vertex:uh,color_vertex:gh,common:hh,cube_uv_reflection_fragment:xh,defaultnormal_vertex:ph,displacementmap_pars_vertex:fh,displacementmap_vertex:Sh,emissivemap_fragment:vh,emissivemap_pars_fragment:Mh,encodings_fragment:_h,encodings_pars_fragment:Ah,envmap_fragment:Th,envmap_common_pars_fragment:yh,envmap_pars_fragment:bh,envmap_pars_vertex:Ph,envmap_physical_pars_fragment:Oh,envmap_vertex:wh,fog_vertex:Lh,fog_pars_vertex:Eh,fog_fragment:$h,fog_pars_fragment:Ch,gradientmap_pars_fragment:Gh,lightmap_fragment:Nh,lightmap_pars_fragment:Bh,lights_lambert_vertex:Ih,lights_pars_begin:Rh,lights_toon_fragment:Dh,lights_toon_pars_fragment:Fh,lights_phong_fragment:Uh,lights_phong_pars_fragment:Vh,lights_physical_fragment:Hh,lights_physical_pars_fragment:Xh,lights_fragment_begin:kh,lights_fragment_maps:Wh,lights_fragment_end:zh,logdepthbuf_fragment:Kh,logdepthbuf_pars_fragment:Zh,logdepthbuf_pars_vertex:Qh,logdepthbuf_vertex:Yh,map_fragment:Jh,map_pars_fragment:jh,map_particle_fragment:qh,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:r0,morphnormal_vertex:o0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:a0,normal_fragment_maps:s0,normal_pars_fragment:l0,normal_pars_vertex:d0,normal_vertex:c0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:h0,output_fragment:x0,packing:p0,premultiplied_alpha_fragment:f0,project_vertex:S0,dithering_fragment:v0,dithering_pars_fragment:M0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:y0,shadowmap_vertex:b0,shadowmask_pars_fragment:P0,skinbase_vertex:w0,skinning_pars_vertex:L0,skinning_vertex:E0,skinnormal_vertex:$0,specularmap_fragment:C0,specularmap_pars_fragment:G0,tonemapping_fragment:N0,tonemapping_pars_fragment:B0,transmission_fragment:I0,transmission_pars_fragment:R0,uv_pars_fragment:O0,uv_pars_vertex:D0,uv_vertex:F0,uv2_pars_fragment:U0,uv2_pars_vertex:V0,uv2_vertex:H0,worldpos_vertex:X0,background_vert:k0,background_frag:W0,cube_vert:z0,cube_frag:K0,depth_vert:Z0,depth_frag:Q0,distanceRGBA_vert:Y0,distanceRGBA_frag:J0,equirect_vert:j0,equirect_frag:q0,linedashed_vert:ex,linedashed_frag:tx,meshbasic_vert:rx,meshbasic_frag:ox,meshlambert_vert:nx,meshlambert_frag:ix,meshmatcap_vert:ax,meshmatcap_frag:sx,meshnormal_vert:lx,meshnormal_frag:dx,meshphong_vert:cx,meshphong_frag:mx,meshphysical_vert:ux,meshphysical_frag:gx,meshtoon_vert:hx,meshtoon_frag:xx,points_vert:px,points_frag:fx,shadow_vert:Sx,shadow_frag:vx,sprite_vert:Mx,sprite_frag:_x},Te={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Kt},uv2Transform:{value:new Kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}}},br={basic:{uniforms:jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.fog,Te.lights,{emissive:{value:new Ce(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:jt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:jt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:jt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:jt([Te.points,Te.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:jt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:jt([Te.common,Te.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:jt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:jt([Te.sprite,Te.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null}},vertexShader:it.background_vert,fragmentShader:it.background_frag},cube:{uniforms:jt([Te.envmap,{opacity:{value:1}}]),vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:jt([Te.common,Te.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:jt([Te.lights,Te.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};br.physical={uniforms:jt([br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ue(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};function Ax(i,e,t,r,o){const n=new Ce(0);let a=0,s,l,d=null,c=0,u=null;function g(h,v){let _=!1,p=v.isScene===!0?v.background:null;p&&p.isTexture&&(p=e.get(p));const f=i.xr,b=f.getSession&&f.getSession();b&&b.environmentBlendMode==="additive"&&(p=null),p===null?x(n,a):p&&p.isColor&&(x(p,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ai)?(l===void 0&&(l=new or(new Rn(1,1,1),new _o({name:"BackgroundCubeMaterial",uniforms:jo(br.cube.uniforms),vertexShader:br.cube.vertexShader,fragmentShader:br.cube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(d!==p||c!==p.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=p,c=p.version,u=i.toneMapping),h.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(s===void 0&&(s=new or(new Wa(2,2),new _o({name:"BackgroundMaterial",uniforms:jo(br.background.uniforms),vertexShader:br.background.vertexShader,fragmentShader:br.background.fragmentShader,side:$o,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(s)),s.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),s.material.uniforms.uvTransform.value.copy(p.matrix),(d!==p||c!==p.version||u!==i.toneMapping)&&(s.material.needsUpdate=!0,d=p,c=p.version,u=i.toneMapping),h.unshift(s,s.geometry,s.material,0,0,null))}function x(h,v){t.buffers.color.setClear(h.r,h.g,h.b,v,o)}return{getClearColor:function(){return n},setClearColor:function(h,v=1){n.set(h),a=v,x(n,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,x(n,a)},render:g}}function Tx(i,e,t,r){const o=i.getParameter(34921),n=r.isWebGL2?null:e.get("OES_vertex_array_object"),a=r.isWebGL2||n!==null,s={},l=v(null);let d=l;function c(D,k,W,H,Z){let fe=!1;if(a){const we=h(H,W,k);d!==we&&(d=we,g(d.object)),fe=_(H,Z),fe&&p(H,Z)}else{const we=k.wireframe===!0;(d.geometry!==H.id||d.program!==W.id||d.wireframe!==we)&&(d.geometry=H.id,d.program=W.id,d.wireframe=we,fe=!0)}D.isInstancedMesh===!0&&(fe=!0),Z!==null&&t.update(Z,34963),fe&&(T(D,k,W,H),Z!==null&&i.bindBuffer(34963,t.get(Z).buffer))}function u(){return r.isWebGL2?i.createVertexArray():n.createVertexArrayOES()}function g(D){return r.isWebGL2?i.bindVertexArray(D):n.bindVertexArrayOES(D)}function x(D){return r.isWebGL2?i.deleteVertexArray(D):n.deleteVertexArrayOES(D)}function h(D,k,W){const H=W.wireframe===!0;let Z=s[D.id];Z===void 0&&(Z={},s[D.id]=Z);let fe=Z[k.id];fe===void 0&&(fe={},Z[k.id]=fe);let we=fe[H];return we===void 0&&(we=v(u()),fe[H]=we),we}function v(D){const k=[],W=[],H=[];for(let Z=0;Z<o;Z++)k[Z]=0,W[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:H,object:D,attributes:{},index:null}}function _(D,k){const W=d.attributes,H=D.attributes;let Z=0;for(const fe in H){const we=W[fe],Le=H[fe];if(we===void 0||we.attribute!==Le||we.data!==Le.data)return!0;Z++}return d.attributesNum!==Z||d.index!==k}function p(D,k){const W={},H=D.attributes;let Z=0;for(const fe in H){const we=H[fe],Le={};Le.attribute=we,we.data&&(Le.data=we.data),W[fe]=Le,Z++}d.attributes=W,d.attributesNum=Z,d.index=k}function f(){const D=d.newAttributes;for(let k=0,W=D.length;k<W;k++)D[k]=0}function b(D){y(D,0)}function y(D,k){const W=d.newAttributes,H=d.enabledAttributes,Z=d.attributeDivisors;W[D]=1,H[D]===0&&(i.enableVertexAttribArray(D),H[D]=1),Z[D]!==k&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),Z[D]=k)}function C(){const D=d.newAttributes,k=d.enabledAttributes;for(let W=0,H=k.length;W<H;W++)k[W]!==D[W]&&(i.disableVertexAttribArray(W),k[W]=0)}function I(D,k,W,H,Z,fe){r.isWebGL2===!0&&(W===5124||W===5125)?i.vertexAttribIPointer(D,k,W,Z,fe):i.vertexAttribPointer(D,k,W,H,Z,fe)}function T(D,k,W,H){if(r.isWebGL2===!1&&(D.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();const Z=H.attributes,fe=W.getAttributes(),we=k.defaultAttributeValues;for(const Le in fe){const Me=fe[Le];if(Me.location>=0){let Xe=Z[Le];if(Xe===void 0&&(Le==="instanceMatrix"&&D.instanceMatrix&&(Xe=D.instanceMatrix),Le==="instanceColor"&&D.instanceColor&&(Xe=D.instanceColor)),Xe!==void 0){const se=Xe.normalized,xe=Xe.itemSize,Ne=t.get(Xe);if(Ne===void 0)continue;const ee=Ne.buffer,Re=Ne.type,Ve=Ne.bytesPerElement;if(Xe.isInterleavedBufferAttribute){const _e=Xe.data,be=_e.stride,ke=Xe.offset;if(_e&&_e.isInstancedInterleavedBuffer){for(let re=0;re<Me.locationSize;re++)y(Me.location+re,_e.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let re=0;re<Me.locationSize;re++)b(Me.location+re);i.bindBuffer(34962,ee);for(let re=0;re<Me.locationSize;re++)I(Me.location+re,xe/Me.locationSize,Re,se,be*Ve,(ke+xe/Me.locationSize*re)*Ve)}else{if(Xe.isInstancedBufferAttribute){for(let _e=0;_e<Me.locationSize;_e++)y(Me.location+_e,Xe.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let _e=0;_e<Me.locationSize;_e++)b(Me.location+_e);i.bindBuffer(34962,ee);for(let _e=0;_e<Me.locationSize;_e++)I(Me.location+_e,xe/Me.locationSize,Re,se,xe*Ve,xe/Me.locationSize*_e*Ve)}}else if(we!==void 0){const se=we[Le];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Me.location,se);break;case 3:i.vertexAttrib3fv(Me.location,se);break;case 4:i.vertexAttrib4fv(Me.location,se);break;default:i.vertexAttrib1fv(Me.location,se)}}}}C()}function X(){B();for(const D in s){const k=s[D];for(const W in k){const H=k[W];for(const Z in H)x(H[Z].object),delete H[Z];delete k[W]}delete s[D]}}function q(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const W in k){const H=k[W];for(const Z in H)x(H[Z].object),delete H[Z];delete k[W]}delete s[D.id]}function j(D){for(const k in s){const W=s[k];if(W[D.id]===void 0)continue;const H=W[D.id];for(const Z in H)x(H[Z].object),delete H[Z];delete W[D.id]}}function B(){ge(),d!==l&&(d=l,g(d.object))}function ge(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:B,resetDefaultState:ge,dispose:X,releaseStatesOfGeometry:q,releaseStatesOfProgram:j,initAttributes:f,enableAttribute:b,disableUnusedAttributes:C}}function yx(i,e,t,r){const o=r.isWebGL2;let n;function a(d){n=d}function s(d,c){i.drawArrays(n,d,c),t.update(c,n,1)}function l(d,c,u){if(u===0)return;let g,x;if(o)g=i,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](n,d,c,u),t.update(c,n,u)}this.setMode=a,this.render=s,this.renderInstances=l}function bx(i,e,t){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(T){if(T==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=n(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const d=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,u=i.getParameter(34930),g=i.getParameter(35660),x=i.getParameter(3379),h=i.getParameter(34076),v=i.getParameter(34921),_=i.getParameter(36347),p=i.getParameter(36348),f=i.getParameter(36349),b=g>0,y=a||e.has("OES_texture_float"),C=b&&y,I=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:h,maxAttributes:v,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:f,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:I}}function Px(i){const e=this;let t=null,r=0,o=!1,n=!1;const a=new Fr,s=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,g,x){const h=u.length!==0||g||r!==0||o;return o=g,t=c(u,x,0),r=u.length,h},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1,d()},this.setState=function(u,g,x){const h=u.clippingPlanes,v=u.clipIntersection,_=u.clipShadows,p=i.get(u);if(!o||h===null||h.length===0||n&&!_)n?c(null):d();else{const f=n?0:r,b=f*4;let y=p.clippingState||null;l.value=y,y=c(h,g,b,x);for(let C=0;C!==b;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=f}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function c(u,g,x,h){const v=u!==null?u.length:0;let _=null;if(v!==0){if(_=l.value,h!==!0||_===null){const p=x+v*4,f=g.matrixWorldInverse;s.getNormalMatrix(f),(_===null||_.length<p)&&(_=new Float32Array(p));for(let b=0,y=x;b!==v;++b,y+=4)a.copy(u[b]).applyMatrix4(f,s),a.normal.toArray(_,y),_[y+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function wx(i){let e=new WeakMap;function t(a,s){return s===la?a.mapping=Tn:s===da&&(a.mapping=yn),a}function r(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===la||s===da)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const d=i.getRenderTarget(),c=new nd(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),i.setRenderTarget(d),a.addEventListener("dispose",o),t(c.texture,a.mapping)}else return null}}return a}function o(a){const s=a.target;s.removeEventListener("dispose",o);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}class Ni extends Ha{constructor(e=-1,t=1,r=1,o=-1,n=.1,a=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let n=r-e,a=r+e,s=o+t,l=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=d*this.view.offsetX,a=n+d*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(n,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Ni.prototype.isOrthographicCamera=!0;class Bi extends _o{constructor(e){super(e);this.type="RawShaderMaterial"}}Bi.prototype.isRawShaderMaterial=!0;const rn=4,ro=8,Pr=Math.pow(2,ro),ad=[.125,.215,.35,.446,.526,.582],sd=ro-rn+1+ad.length,on=20,oo={[Jt]:0,[Tr]:1,[pa]:2,[Il]:3,[Rl]:4,[Ol]:5,[xa]:6},za=new Ni,{_lodPlanes:On,_sizeLods:ld,_sigmas:Ii}=$x(),dd=new Ce;let Ka=null;const Ao=(1+Math.sqrt(5))/2,nn=1/Ao,cd=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Ao,nn),new G(0,Ao,-nn),new G(nn,0,Ao),new G(-nn,0,Ao),new G(Ao,nn,0),new G(-Ao,nn,0)];class Lx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Cx(on),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Ka=this._renderer.getRenderTarget();const n=this._allocateTargets();return this._sceneToCubeUV(e,r,o,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=gd(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=ud(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<On.length;e++)On[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Ka),e.scissorTest=!1,Ri(e,0,0,e.width,e.height)}_fromTexture(e){Ka=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:zr,format:Au,encoding:Ex(e)?e.encoding:pa,depthBuffer:!1},r=md(t);return r.depthBuffer=!e,this._pingPongRenderTarget=md(t),r}_compileMaterial(e){const t=new or(On[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,r,o){const n=90,a=1,s=new nr(n,a,t,r),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,g=c.outputEncoding,x=c.toneMapping;c.getClearColor(dd),c.toneMapping=xo,c.outputEncoding=Jt,c.autoClear=!1;const h=new jr({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),v=new or(new Rn,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(dd),_=!0);for(let f=0;f<6;f++){const b=f%3;b==0?(s.up.set(0,l[f],0),s.lookAt(d[f],0,0)):b==1?(s.up.set(0,0,l[f]),s.lookAt(0,d[f],0)):(s.up.set(0,l[f],0),s.lookAt(0,0,d[f])),Ri(o,b*Pr,f>2?Pr:0,Pr,Pr),c.setRenderTarget(o),_&&c.render(v,s),c.render(e,s)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=x,c.outputEncoding=g,c.autoClear=u,e.background=p}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===Yt&&t.type===zr&&t.encoding===Tr?e.value=oo[Jt]:e.value=oo[t.encoding]}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Tn||e.mapping===yn;o?this._cubemapShader==null&&(this._cubemapShader=gd()):this._equirectShader==null&&(this._equirectShader=ud());const n=o?this._cubemapShader:this._equirectShader,a=new or(On[0],n),s=n.uniforms;s.envMap.value=e,o||s.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(s.inputEncoding,e),this._setEncoding(s.outputEncoding,t.texture),Ri(t,0,0,3*Pr,2*Pr),r.setRenderTarget(t),r.render(a,za)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let o=1;o<sd;o++){const n=Math.sqrt(Ii[o]*Ii[o]-Ii[o-1]*Ii[o-1]),a=cd[(o-1)%cd.length];this._blur(e,o-1,o,n,a)}t.autoClear=r}_blur(e,t,r,o,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,o,"latitudinal",n),this._halfBlur(a,e,r,r,o,"longitudinal",n)}_halfBlur(e,t,r,o,n,a,s){const l=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new or(On[o],d),g=d.uniforms,x=ld[r]-1,h=isFinite(n)?Math.PI/(2*x):2*Math.PI/(2*on-1),v=n/h,_=isFinite(n)?1+Math.floor(c*v):on;_>on&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${on}`);const p=[];let f=0;for(let I=0;I<on;++I){const T=I/v,X=Math.exp(-T*T/2);p.push(X),I==0?f+=X:I<_&&(f+=2*X)}for(let I=0;I<p.length;I++)p[I]=p[I]/f;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=p,g.latitudinal.value=a==="latitudinal",s&&(g.poleAxis.value=s),g.dTheta.value=h,g.mipInt.value=ro-r,this._setEncoding(g.inputEncoding,e.texture),this._setEncoding(g.outputEncoding,e.texture);const b=ld[o],y=3*Math.max(0,Pr-2*b),C=(o===0?0:2*Pr)+2*b*(o>ro-rn?o-ro+rn:0);Ri(t,y,C,3*b,2*b),l.setRenderTarget(t),l.render(u,za)}}function Ex(i){return i===void 0||i.type!==zr?!1:i.encoding===Jt||i.encoding===Tr||i.encoding===xa}function $x(){const i=[],e=[],t=[];let r=ro;for(let o=0;o<sd;o++){const n=Math.pow(2,r);e.push(n);let a=1/n;o>ro-rn?a=ad[o-ro+rn-1]:o==0&&(a=0),t.push(a);const s=1/(n-1),l=-s/2,d=1+s/2,c=[l,l,d,l,d,d,l,l,d,d,l,d],u=6,g=6,x=3,h=2,v=1,_=new Float32Array(x*g*u),p=new Float32Array(h*g*u),f=new Float32Array(v*g*u);for(let y=0;y<u;y++){const C=y%3*2/3-1,I=y>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];_.set(T,x*g*y),p.set(c,h*g*y);const X=[y,y,y,y,y,y];f.set(X,v*g*y)}const b=new Pt;b.setAttribute("position",new It(_,x)),b.setAttribute("uv",new It(p,h)),b.setAttribute("faceIndex",new It(f,v)),i.push(b),r>rn&&r--}return{_lodPlanes:i,_sizeLods:e,_sigmas:t}}function md(i){const e=new yr(3*Pr,3*Pr,i);return e.texture.mapping=ai,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Ri(i,e,t,r,o){i.viewport.set(e,t,r,o),i.scissor.set(e,t,r,o)}function Cx(i){const e=new Float32Array(i),t=new G(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:i},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:oo[Jt]},outputEncoding:{value:oo[Jt]}},vertexShader:Za(),fragmentShader:`

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

			${Qa()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function ud(){const i=new ue(1,1);return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:i},inputEncoding:{value:oo[Jt]},outputEncoding:{value:oo[Jt]}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Qa()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function gd(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:oo[Jt]},outputEncoding:{value:oo[Jt]}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Qa()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Za(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function Qa(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Gx(i){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const l=s.mapping,d=l===la||l===da,c=l===Tn||l===yn;if(d||c){if(e.has(s))return e.get(s).texture;{const u=s.image;if(d&&u&&u.height>0||c&&u&&o(u)){const g=i.getRenderTarget();t===null&&(t=new Lx(i));const x=d?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,x),i.setRenderTarget(g),s.addEventListener("dispose",n),x.texture}else return null}}}return s}function o(s){let l=0;const d=6;for(let c=0;c<d;c++)s[c]!==void 0&&l++;return l===d}function n(s){const l=s.target;l.removeEventListener("dispose",n);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function Nx(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(r){const o=t(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function Bx(i,e,t,r){const o={},n=new WeakMap;function a(u){const g=u.target;g.index!==null&&e.remove(g.index);for(const h in g.attributes)e.remove(g.attributes[h]);g.removeEventListener("dispose",a),delete o[g.id];const x=n.get(g);x&&(e.remove(x),n.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function s(u,g){return o[g.id]===!0||(g.addEventListener("dispose",a),o[g.id]=!0,t.memory.geometries++),g}function l(u){const g=u.attributes;for(const h in g)e.update(g[h],34962);const x=u.morphAttributes;for(const h in x){const v=x[h];for(let _=0,p=v.length;_<p;_++)e.update(v[_],34962)}}function d(u){const g=[],x=u.index,h=u.attributes.position;let v=0;if(x!==null){const f=x.array;v=x.version;for(let b=0,y=f.length;b<y;b+=3){const C=f[b+0],I=f[b+1],T=f[b+2];g.push(C,I,I,T,T,C)}}else{const f=h.array;v=h.version;for(let b=0,y=f.length/3-1;b<y;b+=3){const C=b+0,I=b+1,T=b+2;g.push(C,I,I,T,T,C)}}const _=new(Vl(g)>65535?rd:td)(g,1);_.version=v;const p=n.get(u);p&&e.remove(p),n.set(u,_)}function c(u){const g=n.get(u);if(g){const x=u.index;x!==null&&g.version<x.version&&d(u)}else d(u);return n.get(u)}return{get:s,update:l,getWireframeAttribute:c}}function Ix(i,e,t,r){const o=r.isWebGL2;let n;function a(g){n=g}let s,l;function d(g){s=g.type,l=g.bytesPerElement}function c(g,x){i.drawElements(n,x,s,g*l),t.update(x,n,1)}function u(g,x,h){if(h===0)return;let v,_;if(o)v=i,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](n,x,s,g*l,h),t.update(x,n,h)}this.setMode=a,this.setIndex=d,this.render=c,this.renderInstances=u}function Rx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(n/3);break;case 1:t.lines+=s*(n/2);break;case 3:t.lines+=s*(n-1);break;case 2:t.lines+=s*n;break;case 0:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function o(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}class Ya extends Vt{constructor(e=null,t=1,r=1,o=1){super(null);this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ya.prototype.isDataTexture2DArray=!0;function Ox(i,e){return i[0]-e[0]}function Dx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function hd(i,e){let t=1;const r=e.isInterleavedBufferAttribute?e.data.array:e.array;r instanceof Int8Array?t=127:r instanceof Int16Array?t=32767:r instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",r),i.divideScalar(t)}function Fx(i,e,t){const r={},o=new Float32Array(8),n=new WeakMap,a=new G,s=[];for(let d=0;d<8;d++)s[d]=[d,0];function l(d,c,u,g){const x=d.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position.length;let v=n.get(c);if(v===void 0||v.count!==h){v!==void 0&&v.texture.dispose();const f=c.morphAttributes.normal!==void 0,b=c.morphAttributes.position,y=c.morphAttributes.normal||[],C=c.attributes.position.count,I=f===!0?2:1;let T=C*I,X=1;T>e.maxTextureSize&&(X=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const q=new Float32Array(T*X*4*h),j=new Ya(q,T,X,h);j.format=Yt,j.type=Nr;const B=I*4;for(let ge=0;ge<h;ge++){const D=b[ge],k=y[ge],W=T*X*4*ge;for(let H=0;H<D.count;H++){a.fromBufferAttribute(D,H),D.normalized===!0&&hd(a,D);const Z=H*B;q[W+Z+0]=a.x,q[W+Z+1]=a.y,q[W+Z+2]=a.z,q[W+Z+3]=0,f===!0&&(a.fromBufferAttribute(k,H),k.normalized===!0&&hd(a,k),q[W+Z+4]=a.x,q[W+Z+5]=a.y,q[W+Z+6]=a.z,q[W+Z+7]=0)}}v={count:h,texture:j,size:new ue(T,X)},n.set(c,v)}let _=0;for(let f=0;f<x.length;f++)_+=x[f];const p=c.morphTargetsRelative?1:1-_;g.getUniforms().setValue(i,"morphTargetBaseInfluence",p),g.getUniforms().setValue(i,"morphTargetInfluences",x),g.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),g.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const h=x===void 0?0:x.length;let v=r[c.id];if(v===void 0||v.length!==h){v=[];for(let y=0;y<h;y++)v[y]=[y,0];r[c.id]=v}for(let y=0;y<h;y++){const C=v[y];C[0]=y,C[1]=x[y]}v.sort(Dx);for(let y=0;y<8;y++)y<h&&v[y][1]?(s[y][0]=v[y][0],s[y][1]=v[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(Ox);const _=c.morphAttributes.position,p=c.morphAttributes.normal;let f=0;for(let y=0;y<8;y++){const C=s[y],I=C[0],T=C[1];I!==Number.MAX_SAFE_INTEGER&&T?(_&&c.getAttribute("morphTarget"+y)!==_[I]&&c.setAttribute("morphTarget"+y,_[I]),p&&c.getAttribute("morphNormal"+y)!==p[I]&&c.setAttribute("morphNormal"+y,p[I]),o[y]=T,f+=T):(_&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),p&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),o[y]=0)}const b=c.morphTargetsRelative?1:1-f;g.getUniforms().setValue(i,"morphTargetBaseInfluence",b),g.getUniforms().setValue(i,"morphTargetInfluences",o)}}return{update:l}}function Ux(i,e,t,r){let o=new WeakMap;function n(l){const d=r.render.frame,c=l.geometry,u=e.get(l,c);return o.get(u)!==d&&(e.update(u),o.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){o=new WeakMap}function s(l){const d=l.target;d.removeEventListener("dispose",s),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:n,dispose:a}}class xd extends Vt{constructor(e=null,t=1,r=1,o=1){super(null);this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}xd.prototype.isDataTexture3D=!0;const pd=new Vt,Vx=new Ya,Hx=new xd,fd=new $i,Sd=[],vd=[],Md=new Float32Array(16),_d=new Float32Array(9),Ad=new Float32Array(4);function an(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let n=Sd[o];if(n===void 0&&(n=new Float32Array(o),Sd[o]=n),e!==0){r.toArray(n,0);for(let a=1,s=0;a!==e;++a)s+=t,i[a].toArray(n,s)}return n}function ir(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Td(i,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function Xx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ir(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ir(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ir(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Kx(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ir(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(ir(t,r))return;Ad.set(r),i.uniformMatrix2fv(this.addr,!1,Ad),qt(t,r)}}function Zx(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ir(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(ir(t,r))return;_d.set(r),i.uniformMatrix3fv(this.addr,!1,_d),qt(t,r)}}function Qx(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ir(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(ir(t,r))return;Md.set(r),i.uniformMatrix4fv(this.addr,!1,Md),qt(t,r)}}function Yx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jx(i,e){const t=this.cache;ir(t,e)||(i.uniform2iv(this.addr,e),qt(t,e))}function jx(i,e){const t=this.cache;ir(t,e)||(i.uniform3iv(this.addr,e),qt(t,e))}function qx(i,e){const t=this.cache;ir(t,e)||(i.uniform4iv(this.addr,e),qt(t,e))}function ep(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tp(i,e){const t=this.cache;ir(t,e)||(i.uniform2uiv(this.addr,e),qt(t,e))}function rp(i,e){const t=this.cache;ir(t,e)||(i.uniform3uiv(this.addr,e),qt(t,e))}function op(i,e){const t=this.cache;ir(t,e)||(i.uniform4uiv(this.addr,e),qt(t,e))}function np(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.safeSetTexture2D(e||pd,o)}function ip(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Hx,o)}function ap(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.safeSetTextureCube(e||fd,o)}function sp(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Vx,o)}function lp(i){switch(i){case 5126:return Xx;case 35664:return kx;case 35665:return Wx;case 35666:return zx;case 35674:return Kx;case 35675:return Zx;case 35676:return Qx;case 5124:case 35670:return Yx;case 35667:case 35671:return Jx;case 35668:case 35672:return jx;case 35669:case 35673:return qx;case 5125:return ep;case 36294:return tp;case 36295:return rp;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return sp}}function dp(i,e){i.uniform1fv(this.addr,e)}function cp(i,e){const t=an(e,this.size,2);i.uniform2fv(this.addr,t)}function mp(i,e){const t=an(e,this.size,3);i.uniform3fv(this.addr,t)}function up(i,e){const t=an(e,this.size,4);i.uniform4fv(this.addr,t)}function gp(i,e){const t=an(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hp(i,e){const t=an(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xp(i,e){const t=an(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pp(i,e){i.uniform1iv(this.addr,e)}function fp(i,e){i.uniform2iv(this.addr,e)}function Sp(i,e){i.uniform3iv(this.addr,e)}function vp(i,e){i.uniform4iv(this.addr,e)}function Mp(i,e){i.uniform1uiv(this.addr,e)}function _p(i,e){i.uniform2uiv(this.addr,e)}function Ap(i,e){i.uniform3uiv(this.addr,e)}function Tp(i,e){i.uniform4uiv(this.addr,e)}function yp(i,e,t){const r=e.length,o=Td(t,r);i.uniform1iv(this.addr,o);for(let n=0;n!==r;++n)t.safeSetTexture2D(e[n]||pd,o[n])}function bp(i,e,t){const r=e.length,o=Td(t,r);i.uniform1iv(this.addr,o);for(let n=0;n!==r;++n)t.safeSetTextureCube(e[n]||fd,o[n])}function Pp(i){switch(i){case 5126:return dp;case 35664:return cp;case 35665:return mp;case 35666:return up;case 35674:return gp;case 35675:return hp;case 35676:return xp;case 5124:case 35670:return pp;case 35667:case 35671:return fp;case 35668:case 35672:return Sp;case 35669:case 35673:return vp;case 5125:return Mp;case 36294:return _p;case 36295:return Ap;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35680:case 36300:case 36308:case 36293:return bp}}function wp(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=lp(e.type)}function yd(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Pp(e.type)}yd.prototype.updateCache=function(i){const e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),qt(e,i)};function bd(i){this.id=i,this.seq=[],this.map={}}bd.prototype.setValue=function(i,e,t){const r=this.seq;for(let o=0,n=r.length;o!==n;++o){const a=r[o];a.setValue(i,e[a.id],t)}};const Ja=/(\w+)(\])?(\[|\.)?/g;function Pd(i,e){i.seq.push(e),i.map[e.id]=e}function Lp(i,e,t){const r=i.name,o=r.length;for(Ja.lastIndex=0;;){const n=Ja.exec(r),a=Ja.lastIndex;let s=n[1];const l=n[2]==="]",d=n[3];if(l&&(s=s|0),d===void 0||d==="["&&a+2===o){Pd(t,d===void 0?new wp(s,i,e):new yd(s,i,e));break}else{let u=t.map[s];u===void 0&&(u=new bd(s),Pd(t,u)),t=u}}}function no(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let r=0;r<t;++r){const o=i.getActiveUniform(e,r),n=i.getUniformLocation(e,o.name);Lp(o,n,this)}}no.prototype.setValue=function(i,e,t,r){const o=this.map[e];o!==void 0&&o.setValue(i,t,r)};no.prototype.setOptional=function(i,e,t){const r=e[t];r!==void 0&&this.setValue(i,t,r)};no.upload=function(i,e,t,r){for(let o=0,n=e.length;o!==n;++o){const a=e[o],s=t[a.id];s.needsUpdate!==!1&&a.setValue(i,s.value,r)}};no.seqWithValue=function(i,e){const t=[];for(let r=0,o=i.length;r!==o;++r){const n=i[r];n.id in e&&t.push(n)}return t};function wd(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}let Ep=0;function $p(i){const e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Ld(i){switch(i){case Jt:return["Linear","( value )"];case Tr:return["sRGB","( value )"];case pa:return["RGBE","( value )"];case Il:return["RGBM","( value, 7.0 )"];case Rl:return["RGBM","( value, 16.0 )"];case Ol:return["RGBD","( value, 256.0 )"];case xa:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case cg:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Ed(i,e,t){const r=i.getShaderParameter(e,35713),o=i.getShaderInfoLog(e).trim();return r&&o===""?"":t.toUpperCase()+`

`+o+`

`+$p(i.getShaderSource(e))}function To(i,e){const t=Ld(e);return"vec4 "+i+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Cp(i,e){const t=Ld(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gp(i,e){let t;switch(e){case lu:t="Linear";break;case du:t="Reinhard";break;case cu:t="OptimizedCineon";break;case mu:t="ACESFilmic";break;case uu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Np(i){return[i.extensionDerivatives||i.envMapCubeUV||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dn).join(`
`)}function Bp(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Ip(i,e){const t={},r=i.getProgramParameter(e,35721);for(let o=0;o<r;o++){const n=i.getActiveAttrib(e,o),a=n.name;let s=1;n.type===35674&&(s=2),n.type===35675&&(s=3),n.type===35676&&(s=4),t[a]={type:n.type,location:i.getAttribLocation(e,a),locationSize:s}}return t}function Dn(i){return i!==""}function $d(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(i){return i.replace(Rp,Op)}function Op(i,e){const t=it[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ja(t)}const Dp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(Fp,Nd).replace(Dp,Up)}function Up(i,e,t,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Nd(i,e,t,r)}function Nd(i,e,t,r){let o="";for(let n=parseInt(e);n<parseInt(t);n++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return o}function Bd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function Hp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Tn:case yn:e="ENVMAP_TYPE_CUBE";break;case ai:case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yn:case ca:e="ENVMAP_MODE_REFRACTION";break}return e}function kp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ii:e="ENVMAP_BLENDING_MULTIPLY";break;case au:e="ENVMAP_BLENDING_MIX";break;case su:e="ENVMAP_BLENDING_ADD";break}return e}function Wp(i,e,t,r){const o=i.getContext(),n=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=Vp(t),d=Hp(t),c=Xp(t),u=kp(t),g=i.gammaFactor>0?i.gammaFactor:1,x=t.isWebGL2?"":Np(t),h=Bp(n),v=o.createProgram();let _,p,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[h].filter(Dn).join(`
`),_.length>0&&(_+=`
`),p=[x,h].filter(Dn).join(`
`),p.length>0&&(p+=`
`)):(_=[Bd(t),"#define SHADER_NAME "+t.shaderName,h,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+g,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dn).join(`
`),p=[x,Bd(t),"#define SHADER_NAME "+t.shaderName,h,"#define GAMMA_FACTOR "+g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xo?"#define TONE_MAPPING":"",t.toneMapping!==xo?it.tonemapping_pars_fragment:"",t.toneMapping!==xo?Gp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===po?"#define OPAQUE":"",it.encodings_pars_fragment,t.map?To("mapTexelToLinear",t.mapEncoding):"",t.matcap?To("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?To("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?To("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?To("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?To("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?To("lightMapTexelToLinear",t.lightMapEncoding):"",Cp("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dn).join(`
`)),a=ja(a),a=$d(a,t),a=Cd(a,t),s=ja(s),s=$d(s,t),s=Cd(s,t),a=Gd(a),s=Gd(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Dl?"":"out highp vec4 pc_fragColor;",t.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=f+_+a,y=f+p+s,C=wd(o,35633,b),I=wd(o,35632,y);if(o.attachShader(v,C),o.attachShader(v,I),t.index0AttributeName!==void 0?o.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(v,0,"position"),o.linkProgram(v),i.debug.checkShaderErrors){const q=o.getProgramInfoLog(v).trim(),j=o.getShaderInfoLog(C).trim(),B=o.getShaderInfoLog(I).trim();let ge=!0,D=!0;if(o.getProgramParameter(v,35714)===!1){ge=!1;const k=Ed(o,C,"vertex"),W=Ed(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(v,35715)+`

Program Info Log: `+q+`
`+k+`
`+W)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(j===""||B==="")&&(D=!1);D&&(this.diagnostics={runnable:ge,programLog:q,vertexShader:{log:j,prefix:_},fragmentShader:{log:B,prefix:p}})}o.deleteShader(C),o.deleteShader(I);let T;this.getUniforms=function(){return T===void 0&&(T=new no(o,v)),T};let X;return this.getAttributes=function(){return X===void 0&&(X=Ip(o,v)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Ep++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=I,this}function zp(i,e,t,r,o,n,a){const s=[],l=o.isWebGL2,d=o.logarithmicDepthBuffer,c=o.floatVertexTextures,u=o.maxVertexUniforms,g=o.vertexTextures;let x=o.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function _(T){const q=T.skeleton.bones;if(c)return 1024;{const B=Math.floor((u-20)/4),ge=Math.min(B,q.length);return ge<q.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+q.length+" bones. This GPU supports "+ge+"."),0):ge}}function p(T){let X;return T&&T.isTexture?X=T.encoding:T&&T.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),X=T.texture.encoding):X=Jt,l&&T&&T.isTexture&&T.format===Yt&&T.type===zr&&T.encoding===Tr&&(X=Jt),X}function f(T,X,q,j,B){const ge=j.fog,D=T.isMeshStandardMaterial?j.environment:null,k=(T.isMeshStandardMaterial?t:e).get(T.envMap||D),W=h[T.type],H=B.isSkinnedMesh?_(B):0;T.precision!==null&&(x=o.getMaxPrecision(T.precision),x!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));let Z,fe;if(W){const se=br[W];Z=se.vertexShader,fe=se.fragmentShader}else Z=T.vertexShader,fe=T.fragmentShader;const we=i.getRenderTarget(),Le=T.alphaTest>0,Me=T.clearcoat>0;return{isWebGL2:l,shaderID:W,shaderName:T.type,vertexShader:Z,fragmentShader:fe,defines:T.defines,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:g,outputEncoding:we!==null?p(we.texture):i.outputEncoding,map:!!T.map,mapEncoding:p(T.map),matcap:!!T.matcap,matcapEncoding:p(T.matcap),envMap:!!k,envMapMode:k&&k.mapping,envMapEncoding:p(k),envMapCubeUV:!!k&&(k.mapping===ai||k.mapping===ca),lightMap:!!T.lightMap,lightMapEncoding:p(T.lightMap),aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,emissiveMapEncoding:p(T.emissiveMap),bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===gg,tangentSpaceNormalMap:T.normalMapType===fo,clearcoat:Me,clearcoatMap:Me&&!!T.clearcoatMap,clearcoatRoughnessMap:Me&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:Me&&!!T.clearcoatNormalMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,specularColorMapEncoding:p(T.specularColorMap),alphaMap:!!T.alphaMap,alphaTest:Le,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenColorMapEncoding:p(T.sheenColorMap),sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!B.geometry&&!!B.geometry.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!B.geometry&&!!B.geometry.attributes.color&&B.geometry.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||T.sheenRoughnessMap,uvsVertexOnly:!(!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatNormalMap||T.transmission>0||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheen>0||!!T.sheenColorMap||!!T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!ge,useFog:T.fog,fogExp2:ge&&ge.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0&&H>0,maxBones:H,useVertexTexture:c,morphTargets:!!B.geometry&&!!B.geometry.morphAttributes.position,morphNormals:!!B.geometry&&!!B.geometry.morphAttributes.normal,morphTargetsCount:!!B.geometry&&!!B.geometry.morphAttributes.position?B.geometry.morphAttributes.position.length:0,numDirLights:X.directional.length,numPointLights:X.point.length,numSpotLights:X.spot.length,numRectAreaLights:X.rectArea.length,numHemiLights:X.hemi.length,numDirLightShadows:X.directionalShadowMap.length,numPointLightShadows:X.pointShadowMap.length,numSpotLightShadows:X.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:T.format,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:T.toneMapped?i.toneMapping:xo,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ho,flipSided:T.side===Ft,depthPacking:T.depthPacking!==void 0?T.depthPacking:!1,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||r.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function b(T){const X=[];if(T.shaderID?X.push(T.shaderID):(X.push(Hl(T.fragmentShader)),X.push(Hl(T.vertexShader))),T.defines!==void 0)for(const q in T.defines)X.push(q),X.push(T.defines[q]);if(T.isRawShaderMaterial===!1){for(let q=0;q<v.length;q++)X.push(T[v[q]]);X.push(i.outputEncoding),X.push(i.gammaFactor)}return X.push(T.customProgramCacheKey),X.join()}function y(T){const X=h[T.type];let q;if(X){const j=br[X];q=kg.clone(j.uniforms)}else q=T.uniforms;return q}function C(T,X){let q;for(let j=0,B=s.length;j<B;j++){const ge=s[j];if(ge.cacheKey===X){q=ge,++q.usedTimes;break}}return q===void 0&&(q=new Wp(i,X,T,n),s.push(q)),q}function I(T){if(--T.usedTimes==0){const X=s.indexOf(T);s[X]=s[s.length-1],s.pop(),T.destroy()}}return{getParameters:f,getProgramCacheKey:b,getUniforms:y,acquireProgram:C,releaseProgram:I,programs:s}}function Kp(){let i=new WeakMap;function e(n){let a=i.get(n);return a===void 0&&(a={},i.set(n,a)),a}function t(n){i.delete(n)}function r(n,a,s){i.get(n)[a]=s}function o(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:o}}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.program!==e.program?i.program.id-e.program.id:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rd(i){const e=[];let t=0;const r=[],o=[],n=[],a={id:-1};function s(){t=0,r.length=0,o.length=0,n.length=0}function l(x,h,v,_,p,f){let b=e[t];const y=i.get(v);return b===void 0?(b={id:x.id,object:x,geometry:h,material:v,program:y.program||a,groupOrder:_,renderOrder:x.renderOrder,z:p,group:f},e[t]=b):(b.id=x.id,b.object=x,b.geometry=h,b.material=v,b.program=y.program||a,b.groupOrder=_,b.renderOrder=x.renderOrder,b.z=p,b.group=f),t++,b}function d(x,h,v,_,p,f){const b=l(x,h,v,_,p,f);v.transmission>0?o.push(b):v.transparent===!0?n.push(b):r.push(b)}function c(x,h,v,_,p,f){const b=l(x,h,v,_,p,f);v.transmission>0?o.unshift(b):v.transparent===!0?n.unshift(b):r.unshift(b)}function u(x,h){r.length>1&&r.sort(x||Zp),o.length>1&&o.sort(h||Id),n.length>1&&n.sort(h||Id)}function g(){for(let x=t,h=e.length;x<h;x++){const v=e[x];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:r,transmissive:o,transparent:n,init:s,push:d,unshift:c,finish:g,sort:u}}function Qp(i){let e=new WeakMap;function t(o,n){let a;return e.has(o)===!1?(a=new Rd(i),e.set(o,[a])):n>=e.get(o).length?(a=new Rd(i),e.get(o).push(a)):a=e.get(o)[n],a}function r(){e=new WeakMap}return{get:t,dispose:r}}function Yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ce};break;case"SpotLight":t={position:new G,direction:new G,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jp=0;function qp(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function e1(i,e){const t=new Yp,r=Jp(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)o.probe.push(new G);const n=new G,a=new Fe,s=new Fe;function l(c,u){let g=0,x=0,h=0;for(let q=0;q<9;q++)o.probe[q].set(0,0,0);let v=0,_=0,p=0,f=0,b=0,y=0,C=0,I=0;c.sort(qp);const T=u!==!0?Math.PI:1;for(let q=0,j=c.length;q<j;q++){const B=c[q],ge=B.color,D=B.intensity,k=B.distance,W=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ge.r*D*T,x+=ge.g*D*T,h+=ge.b*D*T;else if(B.isLightProbe)for(let H=0;H<9;H++)o.probe[H].addScaledVector(B.sh.coefficients[H],D);else if(B.isDirectionalLight){const H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity*T),B.castShadow){const Z=B.shadow,fe=r.get(B);fe.shadowBias=Z.bias,fe.shadowNormalBias=Z.normalBias,fe.shadowRadius=Z.radius,fe.shadowMapSize=Z.mapSize,o.directionalShadow[v]=fe,o.directionalShadowMap[v]=W,o.directionalShadowMatrix[v]=B.shadow.matrix,y++}o.directional[v]=H,v++}else if(B.isSpotLight){const H=t.get(B);if(H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(ge).multiplyScalar(D*T),H.distance=k,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,B.castShadow){const Z=B.shadow,fe=r.get(B);fe.shadowBias=Z.bias,fe.shadowNormalBias=Z.normalBias,fe.shadowRadius=Z.radius,fe.shadowMapSize=Z.mapSize,o.spotShadow[p]=fe,o.spotShadowMap[p]=W,o.spotShadowMatrix[p]=B.shadow.matrix,I++}o.spot[p]=H,p++}else if(B.isRectAreaLight){const H=t.get(B);H.color.copy(ge).multiplyScalar(D),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),o.rectArea[f]=H,f++}else if(B.isPointLight){const H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity*T),H.distance=B.distance,H.decay=B.decay,B.castShadow){const Z=B.shadow,fe=r.get(B);fe.shadowBias=Z.bias,fe.shadowNormalBias=Z.normalBias,fe.shadowRadius=Z.radius,fe.shadowMapSize=Z.mapSize,fe.shadowCameraNear=Z.camera.near,fe.shadowCameraFar=Z.camera.far,o.pointShadow[_]=fe,o.pointShadowMap[_]=W,o.pointShadowMatrix[_]=B.shadow.matrix,C++}o.point[_]=H,_++}else if(B.isHemisphereLight){const H=t.get(B);H.skyColor.copy(B.color).multiplyScalar(D*T),H.groundColor.copy(B.groundColor).multiplyScalar(D*T),o.hemi[b]=H,b++}}f>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_FLOAT_1,o.rectAreaLTC2=Te.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_HALF_1,o.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=g,o.ambient[1]=x,o.ambient[2]=h;const X=o.hash;(X.directionalLength!==v||X.pointLength!==_||X.spotLength!==p||X.rectAreaLength!==f||X.hemiLength!==b||X.numDirectionalShadows!==y||X.numPointShadows!==C||X.numSpotShadows!==I)&&(o.directional.length=v,o.spot.length=p,o.rectArea.length=f,o.point.length=_,o.hemi.length=b,o.directionalShadow.length=y,o.directionalShadowMap.length=y,o.pointShadow.length=C,o.pointShadowMap.length=C,o.spotShadow.length=I,o.spotShadowMap.length=I,o.directionalShadowMatrix.length=y,o.pointShadowMatrix.length=C,o.spotShadowMatrix.length=I,X.directionalLength=v,X.pointLength=_,X.spotLength=p,X.rectAreaLength=f,X.hemiLength=b,X.numDirectionalShadows=y,X.numPointShadows=C,X.numSpotShadows=I,o.version=jp++)}function d(c,u){let g=0,x=0,h=0,v=0,_=0;const p=u.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const y=c[f];if(y.isDirectionalLight){const C=o.directional[g];C.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),g++}else if(y.isSpotLight){const C=o.spot[h];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),h++}else if(y.isRectAreaLight){const C=o.rectArea[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),s.identity(),a.copy(y.matrixWorld),a.premultiply(p),s.extractRotation(a),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),v++}else if(y.isPointLight){const C=o.point[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),x++}else if(y.isHemisphereLight){const C=o.hemi[_];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(p),C.direction.normalize(),_++}}}return{setup:l,setupView:d,state:o}}function Od(i,e){const t=new e1(i,e),r=[],o=[];function n(){r.length=0,o.length=0}function a(u){r.push(u)}function s(u){o.push(u)}function l(u){t.setup(r,u)}function d(u){t.setupView(r,u)}return{init:n,state:{lightsArray:r,shadowsArray:o,lights:t},setupLights:l,setupLightsView:d,pushLight:a,pushShadow:s}}function t1(i,e){let t=new WeakMap;function r(n,a=0){let s;return t.has(n)===!1?(s=new Od(i,e),t.set(n,[s])):a>=t.get(n).length?(s=new Od(i,e),t.get(n).push(s)):s=t.get(n)[a],s}function o(){t=new WeakMap}return{get:r,dispose:o}}class Dd extends Ht{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Dd.prototype.isMeshDepthMaterial=!0;class Fd extends Ht{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Fd.prototype.isMeshDistanceMaterial=!0;const r1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
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
}`;function Ud(i,e,t){let r=new Gi;const o=new ue,n=new ue,a=new _t,s=new Dd({depthPacking:ug}),l=new Fd,d={},c=t.maxTextureSize,u={0:Ft,1:$o,2:ho},g=new _o({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:r1,fragmentShader:o1}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const h=new Pt;h.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new or(h,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul,this.render=function(y,C,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||y.length===0)return;const T=i.getRenderTarget(),X=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Wr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);for(let B=0,ge=y.length;B<ge;B++){const D=y[B],k=D.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const W=k.getFrameExtents();if(o.multiply(W),n.copy(k.mapSize),(o.x>c||o.y>c)&&(o.x>c&&(n.x=Math.floor(c/W.x),o.x=n.x*W.x,k.mapSize.x=n.x),o.y>c&&(n.y=Math.floor(c/W.y),o.y=n.y*W.y,k.mapSize.y=n.y)),k.map===null&&!k.isPointLightShadow&&this.type===_n){const Z={minFilter:lr,magFilter:lr,format:Yt};k.map=new yr(o.x,o.y,Z),k.map.texture.name=D.name+".shadowMap",k.mapPass=new yr(o.x,o.y,Z),k.camera.updateProjectionMatrix()}if(k.map===null){const Z={minFilter:Ut,magFilter:Ut,format:Yt};k.map=new yr(o.x,o.y,Z),k.map.texture.name=D.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const H=k.getViewportCount();for(let Z=0;Z<H;Z++){const fe=k.getViewport(Z);a.set(n.x*fe.x,n.y*fe.y,n.x*fe.z,n.y*fe.w),j.viewport(a),k.updateMatrices(D,Z),r=k.getFrustum(),b(C,I,k.camera,D,this.type)}!k.isPointLightShadow&&this.type===_n&&p(k,I),k.needsUpdate=!1}_.needsUpdate=!1,i.setRenderTarget(T,X,q)};function p(y,C){const I=e.update(v);g.defines.VSM_SAMPLES!==y.blurSamples&&(g.defines.VSM_SAMPLES=y.blurSamples,x.defines.VSM_SAMPLES=y.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),g.uniforms.shadow_pass.value=y.map.texture,g.uniforms.resolution.value=y.mapSize,g.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(C,null,I,g,v,null),x.uniforms.shadow_pass.value=y.mapPass.texture,x.uniforms.resolution.value=y.mapSize,x.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(C,null,I,x,v,null)}function f(y,C,I,T,X,q,j){let B=null;const ge=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(ge!==void 0?B=ge:B=T.isPointLight===!0?l:s,i.localClippingEnabled&&I.clipShadows===!0&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0){const D=B.uuid,k=I.uuid;let W=d[D];W===void 0&&(W={},d[D]=W);let H=W[k];H===void 0&&(H=B.clone(),W[k]=H),B=H}return B.visible=I.visible,B.wireframe=I.wireframe,j===_n?B.side=I.shadowSide!==null?I.shadowSide:I.side:B.side=I.shadowSide!==null?I.shadowSide:u[I.side],B.alphaMap=I.alphaMap,B.alphaTest=I.alphaTest,B.clipShadows=I.clipShadows,B.clippingPlanes=I.clippingPlanes,B.clipIntersection=I.clipIntersection,B.displacementMap=I.displacementMap,B.displacementScale=I.displacementScale,B.displacementBias=I.displacementBias,B.wireframeLinewidth=I.wireframeLinewidth,B.linewidth=I.linewidth,T.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(T.matrixWorld),B.nearDistance=X,B.farDistance=q),B}function b(y,C,I,T,X){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&X===_n)&&(!y.frustumCulled||r.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,y.matrixWorld);const B=e.update(y),ge=y.material;if(Array.isArray(ge)){const D=B.groups;for(let k=0,W=D.length;k<W;k++){const H=D[k],Z=ge[H.materialIndex];if(Z&&Z.visible){const fe=f(y,B,Z,T,I.near,I.far,X);i.renderBufferDirect(I,null,B,fe,y,H)}}}else if(ge.visible){const D=f(y,B,ge,T,I.near,I.far,X);i.renderBufferDirect(I,null,B,D,y,null)}}const j=y.children;for(let B=0,ge=j.length;B<ge;B++)b(j[B],C,I,T,X)}}function n1(i,e,t){const r=t.isWebGL2;function o(){let R=!1;const ve=new _t;let ie=null;const Ie=new _t(0,0,0,0);return{setMask:function(Ge){ie!==Ge&&!R&&(i.colorMask(Ge,Ge,Ge,Ge),ie=Ge)},setLocked:function(Ge){R=Ge},setClear:function(Ge,je,Gt,At,A){A===!0&&(Ge*=At,je*=At,Gt*=At),ve.set(Ge,je,Gt,At),Ie.equals(ve)===!1&&(i.clearColor(Ge,je,Gt,At),Ie.copy(ve))},reset:function(){R=!1,ie=null,Ie.set(-1,0,0,0)}}}function n(){let R=!1,ve=null,ie=null,Ie=null;return{setTest:function(Ge){Ge?xe(2929):Ne(2929)},setMask:function(Ge){ve!==Ge&&!R&&(i.depthMask(Ge),ve=Ge)},setFunc:function(Ge){if(ie!==Ge){if(Ge)switch(Ge){case qm:i.depthFunc(512);break;case eu:i.depthFunc(519);break;case tu:i.depthFunc(513);break;case sa:i.depthFunc(515);break;case ru:i.depthFunc(514);break;case ou:i.depthFunc(518);break;case nu:i.depthFunc(516);break;case iu:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);ie=Ge}},setLocked:function(Ge){R=Ge},setClear:function(Ge){Ie!==Ge&&(i.clearDepth(Ge),Ie=Ge)},reset:function(){R=!1,ve=null,ie=null,Ie=null}}}function a(){let R=!1,ve=null,ie=null,Ie=null,Ge=null,je=null,Gt=null,At=null,A=null;return{setTest:function(w){R||(w?xe(2960):Ne(2960))},setMask:function(w){ve!==w&&!R&&(i.stencilMask(w),ve=w)},setFunc:function(w,N,O){(ie!==w||Ie!==N||Ge!==O)&&(i.stencilFunc(w,N,O),ie=w,Ie=N,Ge=O)},setOp:function(w,N,O){(je!==w||Gt!==N||At!==O)&&(i.stencilOp(w,N,O),je=w,Gt=N,At=O)},setLocked:function(w){R=w},setClear:function(w){A!==w&&(i.clearStencil(w),A=w)},reset:function(){R=!1,ve=null,ie=null,Ie=null,Ge=null,je=null,Gt=null,At=null,A=null}}}const s=new o,l=new n,d=new a;let c={},u=null,g={},x=null,h=!1,v=null,_=null,p=null,f=null,b=null,y=null,C=null,I=!1,T=null,X=null,q=null,j=null,B=null;const ge=i.getParameter(35661);let D=!1,k=0;const W=i.getParameter(7938);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),D=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),D=k>=2);let H=null,Z={};const fe=i.getParameter(3088),we=i.getParameter(2978),Le=new _t().fromArray(fe),Me=new _t().fromArray(we);function Xe(R,ve,ie){const Ie=new Uint8Array(4),Ge=i.createTexture();i.bindTexture(R,Ge),i.texParameteri(R,10241,9728),i.texParameteri(R,10240,9728);for(let je=0;je<ie;je++)i.texImage2D(ve+je,0,6408,1,1,0,6408,5121,Ie);return Ge}const se={};se[3553]=Xe(3553,3553,1),se[34067]=Xe(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),d.setClear(0),xe(2929),l.setFunc(sa),le(!1),pe(ml),xe(2884),ke(Wr);function xe(R){c[R]!==!0&&(i.enable(R),c[R]=!0)}function Ne(R){c[R]!==!1&&(i.disable(R),c[R]=!1)}function ee(R){R!==u&&(i.bindFramebuffer(36160,R),u=R)}function Re(R,ve){return ve===null&&u!==null&&(ve=u),g[R]!==ve?(i.bindFramebuffer(R,ve),g[R]=ve,r&&(R===36009&&(g[36160]=ve),R===36160&&(g[36009]=ve)),!0):!1}function Ve(R){return x!==R?(i.useProgram(R),x=R,!0):!1}const _e={[Co]:32774,[Hm]:32778,[Xm]:32779};if(r)_e[fl]=32775,_e[Sl]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(_e[fl]=R.MIN_EXT,_e[Sl]=R.MAX_EXT)}const be={[km]:0,[Wm]:1,[zm]:768,[vl]:770,[jm]:776,[Ym]:774,[Zm]:772,[Km]:769,[Ml]:771,[Jm]:775,[Qm]:773};function ke(R,ve,ie,Ie,Ge,je,Gt,At){if(R===Wr){h===!0&&(Ne(3042),h=!1);return}if(h===!1&&(xe(3042),h=!0),R!==Vm){if(R!==v||At!==I){if((_!==Co||b!==Co)&&(i.blendEquation(32774),_=Co,b=Co),At)switch(R){case An:i.blendFuncSeparate(1,771,1,771);break;case hl:i.blendFunc(1,1);break;case xl:i.blendFuncSeparate(0,0,769,771);break;case pl:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case An:i.blendFuncSeparate(770,771,1,771);break;case hl:i.blendFunc(770,1);break;case xl:i.blendFunc(0,769);break;case pl:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}p=null,f=null,y=null,C=null,v=R,I=At}return}Ge=Ge||ve,je=je||ie,Gt=Gt||Ie,(ve!==_||Ge!==b)&&(i.blendEquationSeparate(_e[ve],_e[Ge]),_=ve,b=Ge),(ie!==p||Ie!==f||je!==y||Gt!==C)&&(i.blendFuncSeparate(be[ie],be[Ie],be[je],be[Gt]),p=ie,f=Ie,y=je,C=Gt),v=R,I=null}function re(R,ve){R.side===ho?Ne(2884):xe(2884);let ie=R.side===Ft;ve&&(ie=!ie),le(ie),R.blending===An&&R.transparent===!1?ke(Wr):ke(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),s.setMask(R.colorWrite);const Ie=R.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(R.stencilWriteMask),d.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),d.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Se(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xe(32926):Ne(32926)}function le(R){T!==R&&(R?i.frontFace(2304):i.frontFace(2305),T=R)}function pe(R){R!==Dm?(xe(2884),R!==X&&(R===ml?i.cullFace(1029):R===Fm?i.cullFace(1028):i.cullFace(1032))):Ne(2884),X=R}function Be(R){R!==q&&(D&&i.lineWidth(R),q=R)}function Se(R,ve,ie){R?(xe(32823),(j!==ve||B!==ie)&&(i.polygonOffset(ve,ie),j=ve,B=ie)):Ne(32823)}function $(R){R?xe(3089):Ne(3089)}function P(R){R===void 0&&(R=33984+ge-1),H!==R&&(i.activeTexture(R),H=R)}function J(R,ve){H===null&&P();let ie=Z[H];ie===void 0&&(ie={type:void 0,texture:void 0},Z[H]=ie),(ie.type!==R||ie.texture!==ve)&&(i.bindTexture(R,ve||se[R]),ie.type=R,ie.texture=ve)}function me(){const R=Z[H];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Oe(R){Le.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Le.copy(R))}function We(R){Me.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Me.copy(R))}function $e(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),r===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,Z={},u=null,g={},x=null,h=!1,v=null,_=null,p=null,f=null,b=null,y=null,C=null,I=!1,T=null,X=null,q=null,j=null,B=null,Le.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),d.reset()}return{buffers:{color:s,depth:l,stencil:d},enable:xe,disable:Ne,bindFramebuffer:Re,bindXRFramebuffer:ee,useProgram:Ve,setBlending:ke,setMaterial:re,setFlipSided:le,setCullFace:pe,setLineWidth:Be,setPolygonOffset:Se,setScissorTest:$,activeTexture:P,bindTexture:J,unbindTexture:me,compressedTexImage2D:de,texImage2D:Pe,texImage3D:He,scissor:Oe,viewport:We,reset:$e}}function i1(i,e,t,r,o,n,a){const s=o.isWebGL2,l=o.maxTextures,d=o.maxCubemapSize,c=o.maxTextureSize,u=o.maxSamples,g=new WeakMap;let x,h=!1;try{h=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v($,P){return h?new OffscreenCanvas($,P):gi("canvas")}function _($,P,J,me){let de=1;if(($.width>me||$.height>me)&&(de=me/Math.max($.width,$.height)),de<1||P===!0)if(typeof HTMLImageElement!="undefined"&&$ instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&$ instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&$ instanceof ImageBitmap){const Pe=P?Ul:Math.floor,He=Pe(de*$.width),Oe=Pe(de*$.height);x===void 0&&(x=v(He,Oe));const We=J?v(He,Oe):x;return We.width=He,We.height=Oe,We.getContext("2d").drawImage($,0,0,He,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+He+"x"+Oe+")."),We}else return"data"in $&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),$;return $}function p($){return va($.width)&&va($.height)}function f($){return s?!1:$.wrapS!==sr||$.wrapT!==sr||$.minFilter!==Ut&&$.minFilter!==lr}function b($,P){return $.generateMipmaps&&P&&$.minFilter!==Ut&&$.minFilter!==lr}function y($,P,J,me,de=1){i.generateMipmap($);const Pe=r.get(P);Pe.__maxMipLevel=Math.log2(Math.max(J,me,de))}function C($,P,J,me){if(s===!1)return P;if($!==null){if(i[$]!==void 0)return i[$];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+$+"'")}let de=P;return P===6403&&(J===5126&&(de=33326),J===5131&&(de=33325),J===5121&&(de=33321)),P===6407&&(J===5126&&(de=34837),J===5131&&(de=34843),J===5121&&(de=32849)),P===6408&&(J===5126&&(de=34836),J===5131&&(de=34842),J===5121&&(de=me===Tr?35907:32856)),(de===33325||de===33326||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function I($){return $===Ut||$===ma||$===ua?9728:9729}function T($){const P=$.target;P.removeEventListener("dispose",T),q(P),P.isVideoTexture&&g.delete(P),a.memory.textures--}function X($){const P=$.target;P.removeEventListener("dispose",X),j(P)}function q($){const P=r.get($);P.__webglInit!==void 0&&(i.deleteTexture(P.__webglTexture),r.remove($))}function j($){const P=$.texture,J=r.get($),me=r.get(P);if(!!$){if(me.__webglTexture!==void 0&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),$.depthTexture&&$.depthTexture.dispose(),$.isWebGLCubeRenderTarget)for(let de=0;de<6;de++)i.deleteFramebuffer(J.__webglFramebuffer[de]),J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[de]);else i.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer&&i.deleteRenderbuffer(J.__webglColorRenderbuffer),J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer);if($.isWebGLMultipleRenderTargets)for(let de=0,Pe=P.length;de<Pe;de++){const He=r.get(P[de]);He.__webglTexture&&(i.deleteTexture(He.__webglTexture),a.memory.textures--),r.remove(P[de])}r.remove(P),r.remove($)}}let B=0;function ge(){B=0}function D(){const $=B;return $>=l&&console.warn("THREE.WebGLTextures: Trying to use "+$+" texture units while this GPU supports only "+l),B+=1,$}function k($,P){const J=r.get($);if($.isVideoTexture&&re($),$.version>0&&J.__version!==$.version){const me=$.image;if(me===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(J,$,P);return}}t.activeTexture(33984+P),t.bindTexture(3553,J.__webglTexture)}function W($,P){const J=r.get($);if($.version>0&&J.__version!==$.version){Xe(J,$,P);return}t.activeTexture(33984+P),t.bindTexture(35866,J.__webglTexture)}function H($,P){const J=r.get($);if($.version>0&&J.__version!==$.version){Xe(J,$,P);return}t.activeTexture(33984+P),t.bindTexture(32879,J.__webglTexture)}function Z($,P){const J=r.get($);if($.version>0&&J.__version!==$.version){se(J,$,P);return}t.activeTexture(33984+P),t.bindTexture(34067,J.__webglTexture)}const fe={[Go]:10497,[sr]:33071,[si]:33648},we={[Ut]:9728,[ma]:9984,[ua]:9986,[lr]:9729,[Al]:9985,[No]:9987};function Le($,P,J){if(J?(i.texParameteri($,10242,fe[P.wrapS]),i.texParameteri($,10243,fe[P.wrapT]),($===32879||$===35866)&&i.texParameteri($,32882,fe[P.wrapR]),i.texParameteri($,10240,we[P.magFilter]),i.texParameteri($,10241,we[P.minFilter])):(i.texParameteri($,10242,33071),i.texParameteri($,10243,33071),($===32879||$===35866)&&i.texParameteri($,32882,33071),(P.wrapS!==sr||P.wrapT!==sr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri($,10240,I(P.magFilter)),i.texParameteri($,10241,I(P.minFilter)),P.minFilter!==Ut&&P.minFilter!==lr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(P.type===Nr&&e.has("OES_texture_float_linear")===!1||s===!1&&P.type===Bo&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||r.get(P).__currentAnisotropy)&&(i.texParameterf($,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,o.getMaxAnisotropy())),r.get(P).__currentAnisotropy=P.anisotropy)}}function Me($,P){$.__webglInit===void 0&&($.__webglInit=!0,P.addEventListener("dispose",T),$.__webglTexture=i.createTexture(),a.memory.textures++)}function Xe($,P,J){let me=3553;P.isDataTexture2DArray&&(me=35866),P.isDataTexture3D&&(me=32879),Me($,P),t.activeTexture(33984+J),t.bindTexture(me,$.__webglTexture),i.pixelStorei(37440,P.flipY),i.pixelStorei(37441,P.premultiplyAlpha),i.pixelStorei(3317,P.unpackAlignment),i.pixelStorei(37443,0);const de=f(P)&&p(P.image)===!1,Pe=_(P.image,de,!1,c),He=p(Pe)||s,Oe=n.convert(P.format);let We=n.convert(P.type),$e=C(P.internalFormat,Oe,We,P.encoding);Le(me,P,He);let R;const ve=P.mipmaps;if(P.isDepthTexture)$e=6402,s?P.type===Nr?$e=36012:P.type===di?$e=33190:P.type===bn?$e=35056:$e=33189:P.type===Nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Io&&$e===6402&&P.type!==li&&P.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=li,We=n.convert(P.type)),P.format===Pn&&$e===6402&&($e=34041,P.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=bn,We=n.convert(P.type))),t.texImage2D(3553,0,$e,Pe.width,Pe.height,0,Oe,We,null);else if(P.isDataTexture)if(ve.length>0&&He){for(let ie=0,Ie=ve.length;ie<Ie;ie++)R=ve[ie],t.texImage2D(3553,ie,$e,R.width,R.height,0,Oe,We,R.data);P.generateMipmaps=!1,$.__maxMipLevel=ve.length-1}else t.texImage2D(3553,0,$e,Pe.width,Pe.height,0,Oe,We,Pe.data),$.__maxMipLevel=0;else if(P.isCompressedTexture){for(let ie=0,Ie=ve.length;ie<Ie;ie++)R=ve[ie],P.format!==Yt&&P.format!==po?Oe!==null?t.compressedTexImage2D(3553,ie,$e,R.width,R.height,0,R.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,ie,$e,R.width,R.height,0,Oe,We,R.data);$.__maxMipLevel=ve.length-1}else if(P.isDataTexture2DArray)t.texImage3D(35866,0,$e,Pe.width,Pe.height,Pe.depth,0,Oe,We,Pe.data),$.__maxMipLevel=0;else if(P.isDataTexture3D)t.texImage3D(32879,0,$e,Pe.width,Pe.height,Pe.depth,0,Oe,We,Pe.data),$.__maxMipLevel=0;else if(ve.length>0&&He){for(let ie=0,Ie=ve.length;ie<Ie;ie++)R=ve[ie],t.texImage2D(3553,ie,$e,Oe,We,R);P.generateMipmaps=!1,$.__maxMipLevel=ve.length-1}else t.texImage2D(3553,0,$e,Oe,We,Pe),$.__maxMipLevel=0;b(P,He)&&y(me,P,Pe.width,Pe.height),$.__version=P.version,P.onUpdate&&P.onUpdate(P)}function se($,P,J){if(P.image.length!==6)return;Me($,P),t.activeTexture(33984+J),t.bindTexture(34067,$.__webglTexture),i.pixelStorei(37440,P.flipY),i.pixelStorei(37441,P.premultiplyAlpha),i.pixelStorei(3317,P.unpackAlignment),i.pixelStorei(37443,0);const me=P&&(P.isCompressedTexture||P.image[0].isCompressedTexture),de=P.image[0]&&P.image[0].isDataTexture,Pe=[];for(let ie=0;ie<6;ie++)!me&&!de?Pe[ie]=_(P.image[ie],!1,!0,d):Pe[ie]=de?P.image[ie].image:P.image[ie];const He=Pe[0],Oe=p(He)||s,We=n.convert(P.format),$e=n.convert(P.type),R=C(P.internalFormat,We,$e,P.encoding);Le(34067,P,Oe);let ve;if(me){for(let ie=0;ie<6;ie++){ve=Pe[ie].mipmaps;for(let Ie=0;Ie<ve.length;Ie++){const Ge=ve[Ie];P.format!==Yt&&P.format!==po?We!==null?t.compressedTexImage2D(34069+ie,Ie,R,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+ie,Ie,R,Ge.width,Ge.height,0,We,$e,Ge.data)}}$.__maxMipLevel=ve.length-1}else{ve=P.mipmaps;for(let ie=0;ie<6;ie++)if(de){t.texImage2D(34069+ie,0,R,Pe[ie].width,Pe[ie].height,0,We,$e,Pe[ie].data);for(let Ie=0;Ie<ve.length;Ie++){const je=ve[Ie].image[ie].image;t.texImage2D(34069+ie,Ie+1,R,je.width,je.height,0,We,$e,je.data)}}else{t.texImage2D(34069+ie,0,R,We,$e,Pe[ie]);for(let Ie=0;Ie<ve.length;Ie++){const Ge=ve[Ie];t.texImage2D(34069+ie,Ie+1,R,We,$e,Ge.image[ie])}}$.__maxMipLevel=ve.length}b(P,Oe)&&y(34067,P,He.width,He.height),$.__version=P.version,P.onUpdate&&P.onUpdate(P)}function xe($,P,J,me,de){const Pe=n.convert(J.format),He=n.convert(J.type),Oe=C(J.internalFormat,Pe,He,J.encoding);de===32879||de===35866?t.texImage3D(de,0,Oe,P.width,P.height,P.depth,0,Pe,He,null):t.texImage2D(de,0,Oe,P.width,P.height,0,Pe,He,null),t.bindFramebuffer(36160,$),i.framebufferTexture2D(36160,me,de,r.get(J).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne($,P,J){if(i.bindRenderbuffer(36161,$),P.depthBuffer&&!P.stencilBuffer){let me=33189;if(J){const de=P.depthTexture;de&&de.isDepthTexture&&(de.type===Nr?me=36012:de.type===di&&(me=33190));const Pe=ke(P);i.renderbufferStorageMultisample(36161,Pe,me,P.width,P.height)}else i.renderbufferStorage(36161,me,P.width,P.height);i.framebufferRenderbuffer(36160,36096,36161,$)}else if(P.depthBuffer&&P.stencilBuffer){if(J){const me=ke(P);i.renderbufferStorageMultisample(36161,me,35056,P.width,P.height)}else i.renderbufferStorage(36161,34041,P.width,P.height);i.framebufferRenderbuffer(36160,33306,36161,$)}else{const me=P.isWebGLMultipleRenderTargets===!0?P.texture[0]:P.texture,de=n.convert(me.format),Pe=n.convert(me.type),He=C(me.internalFormat,de,Pe,me.encoding);if(J){const Oe=ke(P);i.renderbufferStorageMultisample(36161,Oe,He,P.width,P.height)}else i.renderbufferStorage(36161,He,P.width,P.height)}i.bindRenderbuffer(36161,null)}function ee($,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,$),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),k(P.depthTexture,0);const me=r.get(P.depthTexture).__webglTexture;if(P.depthTexture.format===Io)i.framebufferTexture2D(36160,36096,3553,me,0);else if(P.depthTexture.format===Pn)i.framebufferTexture2D(36160,33306,3553,me,0);else throw new Error("Unknown depthTexture format")}function Re($){const P=r.get($),J=$.isWebGLCubeRenderTarget===!0;if($.depthTexture){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ee(P.__webglFramebuffer,$)}else if(J){P.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(36160,P.__webglFramebuffer[me]),P.__webglDepthbuffer[me]=i.createRenderbuffer(),Ne(P.__webglDepthbuffer[me],$,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),Ne(P.__webglDepthbuffer,$,!1);t.bindFramebuffer(36160,null)}function Ve($){const P=$.texture,J=r.get($),me=r.get(P);$.addEventListener("dispose",X),$.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture=i.createTexture(),me.__version=P.version,a.memory.textures++);const de=$.isWebGLCubeRenderTarget===!0,Pe=$.isWebGLMultipleRenderTargets===!0,He=$.isWebGLMultisampleRenderTarget===!0,Oe=P.isDataTexture3D||P.isDataTexture2DArray,We=p($)||s;if(s&&P.format===po&&(P.type===Nr||P.type===Bo)&&(P.format=Yt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),de){J.__webglFramebuffer=[];for(let $e=0;$e<6;$e++)J.__webglFramebuffer[$e]=i.createFramebuffer()}else if(J.__webglFramebuffer=i.createFramebuffer(),Pe)if(o.drawBuffers){const $e=$.texture;for(let R=0,ve=$e.length;R<ve;R++){const ie=r.get($e[R]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(He)if(s){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,J.__webglColorRenderbuffer);const $e=n.convert(P.format),R=n.convert(P.type),ve=C(P.internalFormat,$e,R,P.encoding),ie=ke($);i.renderbufferStorageMultisample(36161,ie,ve,$.width,$.height),t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,J.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),$.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(J.__webglDepthRenderbuffer,$,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(de){t.bindTexture(34067,me.__webglTexture),Le(34067,P,We);for(let $e=0;$e<6;$e++)xe(J.__webglFramebuffer[$e],$,P,36064,34069+$e);b(P,We)&&y(34067,P,$.width,$.height),t.unbindTexture()}else if(Pe){const $e=$.texture;for(let R=0,ve=$e.length;R<ve;R++){const ie=$e[R],Ie=r.get(ie);t.bindTexture(3553,Ie.__webglTexture),Le(3553,ie,We),xe(J.__webglFramebuffer,$,ie,36064+R,3553),b(ie,We)&&y(3553,ie,$.width,$.height)}t.unbindTexture()}else{let $e=3553;Oe&&(s?$e=P.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture($e,me.__webglTexture),Le($e,P,We),xe(J.__webglFramebuffer,$,P,36064,$e),b(P,We)&&y($e,P,$.width,$.height,$.depth),t.unbindTexture()}$.depthBuffer&&Re($)}function _e($){const P=p($)||s,J=$.isWebGLMultipleRenderTargets===!0?$.texture:[$.texture];for(let me=0,de=J.length;me<de;me++){const Pe=J[me];if(b(Pe,P)){const He=$.isWebGLCubeRenderTarget?34067:3553,Oe=r.get(Pe).__webglTexture;t.bindTexture(He,Oe),y(He,Pe,$.width,$.height),t.unbindTexture()}}}function be($){if($.isWebGLMultisampleRenderTarget)if(s){const P=$.width,J=$.height;let me=16384;$.depthBuffer&&(me|=256),$.stencilBuffer&&(me|=1024);const de=r.get($);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer),i.blitFramebuffer(0,0,P,J,0,0,P,J,me,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ke($){return s&&$.isWebGLMultisampleRenderTarget?Math.min(u,$.samples):0}function re($){const P=a.render.frame;g.get($)!==P&&(g.set($,P),$.update())}let le=!1,pe=!1;function Be($,P){$&&$.isWebGLRenderTarget&&(le===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),le=!0),$=$.texture),k($,P)}function Se($,P){$&&$.isWebGLCubeRenderTarget&&(pe===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),pe=!0),$=$.texture),Z($,P)}this.allocateTextureUnit=D,this.resetTextureUnits=ge,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=H,this.setTextureCube=Z,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=be,this.safeSetTexture2D=Be,this.safeSetTextureCube=Se}function a1(i,e,t){const r=t.isWebGL2;function o(n){let a;if(n===zr)return 5121;if(n===pu)return 32819;if(n===fu)return 32820;if(n===Su)return 33635;if(n===gu)return 5120;if(n===hu)return 5122;if(n===li)return 5123;if(n===xu)return 5124;if(n===di)return 5125;if(n===Nr)return 5126;if(n===Bo)return r?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===vu)return 6406;if(n===po)return 6407;if(n===Yt)return 6408;if(n===Mu)return 6409;if(n===_u)return 6410;if(n===Io)return 6402;if(n===Pn)return 34041;if(n===Tu)return 6403;if(n===yu)return 36244;if(n===bu)return 33319;if(n===Pu)return 33320;if(n===wu)return 36248;if(n===Lu)return 36249;if(n===Tl||n===yl||n===bl||n===Pl)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Tl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===Ll||n===El||n===$l)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$l)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((n===Cl||n===Gl)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(n===Cl)return a.COMPRESSED_RGB8_ETC2;if(n===Gl)return a.COMPRESSED_RGBA8_ETC2_EAC}if(n===$u||n===Cu||n===Gu||n===Nu||n===Bu||n===Iu||n===Ru||n===Ou||n===Du||n===Fu||n===Uu||n===Vu||n===Hu||n===Xu||n===Wu||n===zu||n===Ku||n===Zu||n===Qu||n===Yu||n===Ju||n===ju||n===qu||n===eg||n===tg||n===rg||n===og||n===ng)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?n:null;if(n===ku)return a=e.get("EXT_texture_compression_bptc"),a!==null?n:null;if(n===bn)return r?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:o}}class Vd extends nr{constructor(e=[]){super();this.cameras=e}}Vd.prototype.isArrayCamera=!0;class io extends ft{constructor(){super();this.type="Group"}}io.prototype.isGroup=!0;const s1={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,n=null,a=null;const s=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(s!==null&&(o=t.getPose(e.targetRaySpace,r),o!==null&&(s.matrix.fromArray(o.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),o.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(o.linearVelocity)):s.hasLinearVelocity=!1,o.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(o.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(s1))),d&&e.hand){a=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,r);if(d.joints[v.jointName]===void 0){const f=new io;f.matrixAutoUpdate=!1,f.visible=!1,d.joints[v.jointName]=f,d.add(f)}const p=d.joints[v.jointName];_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=_.radius),p.visible=_!==null}const c=d.joints["index-finger-tip"],u=d.joints["thumb-tip"],g=c.position.distanceTo(u.position),x=.02,h=.005;d.inputState.pinching&&g>x+h?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=x-h&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));return s!==null&&(s.visible=o!==null),l!==null&&(l.visible=n!==null),d!==null&&(d.visible=a!==null),this}}class l1 extends Kr{constructor(e,t){super();const r=this,o=e.state;let n=null,a=1,s=null,l="local-floor",d=null,c=null,u=null,g=null,x=null,h=!1,v=null,_=null,p=null,f=null,b=null,y=null;const C=[],I=new Map,T=new nr;T.layers.enable(1),T.viewport=new _t;const X=new nr;X.layers.enable(2),X.viewport=new _t;const q=[T,X],j=new Vd;j.layers.enable(1),j.layers.enable(2);let B=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=C[se];return xe===void 0&&(xe=new qa,C[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=C[se];return xe===void 0&&(xe=new qa,C[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=C[se];return xe===void 0&&(xe=new qa,C[se]=xe),xe.getHandSpace()};function D(se){const xe=I.get(se.inputSource);xe&&xe.dispatchEvent({type:se.type,data:se.inputSource})}function k(){I.forEach(function(se,xe){se.disconnect(xe)}),I.clear(),B=null,ge=null,o.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),u&&t.deleteFramebuffer(u),v&&t.deleteFramebuffer(v),_&&t.deleteRenderbuffer(_),p&&t.deleteRenderbuffer(p),u=null,v=null,_=null,p=null,x=null,g=null,c=null,n=null,Xe.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){l=se,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(se){if(n=se,n!==null){n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",k),n.addEventListener("inputsourceschange",W);const xe=t.getContextAttributes();if(xe.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0){const Ne={antialias:xe.antialias,alpha:xe.alpha,depth:xe.depth,stencil:xe.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(n,t,Ne),n.updateRenderState({baseLayer:x})}else if(t instanceof WebGLRenderingContext){const Ne={antialias:!0,alpha:xe.alpha,depth:xe.depth,stencil:xe.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(n,t,Ne),n.updateRenderState({layers:[x]})}else{h=xe.antialias;let Ne=null;xe.depth&&(y=256,xe.stencil&&(y|=1024),b=xe.stencil?33306:36096,Ne=xe.stencil?35056:33190);const ee={colorFormat:xe.alpha?32856:32849,depthFormat:Ne,scaleFactor:a};c=new XRWebGLBinding(n,t),g=c.createProjectionLayer(ee),u=t.createFramebuffer(),n.updateRenderState({layers:[g]}),h&&(v=t.createFramebuffer(),_=t.createRenderbuffer(),t.bindRenderbuffer(36161,_),t.renderbufferStorageMultisample(36161,4,32856,g.textureWidth,g.textureHeight),o.bindFramebuffer(36160,v),t.framebufferRenderbuffer(36160,36064,36161,_),t.bindRenderbuffer(36161,null),Ne!==null&&(p=t.createRenderbuffer(),t.bindRenderbuffer(36161,p),t.renderbufferStorageMultisample(36161,4,Ne,g.textureWidth,g.textureHeight),t.framebufferRenderbuffer(36160,b,36161,p),t.bindRenderbuffer(36161,null)),o.bindFramebuffer(36160,null))}s=await n.requestReferenceSpace(l),Xe.setContext(n),Xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function W(se){const xe=n.inputSources;for(let Ne=0;Ne<C.length;Ne++)I.set(xe[Ne],C[Ne]);for(let Ne=0;Ne<se.removed.length;Ne++){const ee=se.removed[Ne],Re=I.get(ee);Re&&(Re.dispatchEvent({type:"disconnected",data:ee}),I.delete(ee))}for(let Ne=0;Ne<se.added.length;Ne++){const ee=se.added[Ne],Re=I.get(ee);Re&&Re.dispatchEvent({type:"connected",data:ee})}}const H=new G,Z=new G;function fe(se,xe,Ne){H.setFromMatrixPosition(xe.matrixWorld),Z.setFromMatrixPosition(Ne.matrixWorld);const ee=H.distanceTo(Z),Re=xe.projectionMatrix.elements,Ve=Ne.projectionMatrix.elements,_e=Re[14]/(Re[10]-1),be=Re[14]/(Re[10]+1),ke=(Re[9]+1)/Re[5],re=(Re[9]-1)/Re[5],le=(Re[8]-1)/Re[0],pe=(Ve[8]+1)/Ve[0],Be=_e*le,Se=_e*pe,$=ee/(-le+pe),P=$*-le;xe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(P),se.translateZ($),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const J=_e+$,me=be+$,de=Be-P,Pe=Se+(ee-P),He=ke*be/me*J,Oe=re*be/me*J;se.projectionMatrix.makePerspective(de,Pe,He,Oe,J,me)}function we(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(n===null)return;j.near=X.near=T.near=se.near,j.far=X.far=T.far=se.far,(B!==j.near||ge!==j.far)&&(n.updateRenderState({depthNear:j.near,depthFar:j.far}),B=j.near,ge=j.far);const xe=se.parent,Ne=j.cameras;we(j,xe);for(let Re=0;Re<Ne.length;Re++)we(Ne[Re],xe);j.matrixWorld.decompose(j.position,j.quaternion,j.scale),se.position.copy(j.position),se.quaternion.copy(j.quaternion),se.scale.copy(j.scale),se.matrix.copy(j.matrix),se.matrixWorld.copy(j.matrixWorld);const ee=se.children;for(let Re=0,Ve=ee.length;Re<Ve;Re++)ee[Re].updateMatrixWorld(!0);Ne.length===2?fe(j,T,X):j.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return j},this.getFoveation=function(){if(g!==null)return g.fixedFoveation;if(x!==null)return x.fixedFoveation},this.setFoveation=function(se){g!==null&&(g.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)};let Le=null;function Me(se,xe){if(d=xe.getViewerPose(s),f=xe,d!==null){const ee=d.views;x!==null&&o.bindXRFramebuffer(x.framebuffer);let Re=!1;ee.length!==j.cameras.length&&(j.cameras.length=0,Re=!0);for(let Ve=0;Ve<ee.length;Ve++){const _e=ee[Ve];let be=null;if(x!==null)be=x.getViewport(_e);else{const re=c.getViewSubImage(g,_e);o.bindXRFramebuffer(u),re.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,b,3553,re.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,re.colorTexture,0),be=re.viewport}const ke=q[Ve];ke.matrix.fromArray(_e.transform.matrix),ke.projectionMatrix.fromArray(_e.projectionMatrix),ke.viewport.set(be.x,be.y,be.width,be.height),Ve===0&&j.matrix.copy(ke.matrix),Re===!0&&j.cameras.push(ke)}h&&(o.bindXRFramebuffer(v),y!==null&&t.clear(y))}const Ne=n.inputSources;for(let ee=0;ee<C.length;ee++){const Re=C[ee],Ve=Ne[ee];Re.update(Ve,xe,s)}if(Le&&Le(se,xe),h){const ee=g.textureWidth,Re=g.textureHeight;o.bindFramebuffer(36008,v),o.bindFramebuffer(36009,u),t.invalidateFramebuffer(36008,[b]),t.invalidateFramebuffer(36009,[b]),t.blitFramebuffer(0,0,ee,Re,0,0,ee,Re,16384,9728),t.invalidateFramebuffer(36008,[36064]),o.bindFramebuffer(36008,null),o.bindFramebuffer(36009,null),o.bindFramebuffer(36160,v)}f=null}const Xe=new id;Xe.setAnimationLoop(Me),this.setAnimationLoop=function(se){Le=se},this.dispose=function(){}}}function d1(i){function e(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function t(p,f,b,y,C){f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),l(p,f)):f.isMeshToonMaterial?(r(p,f),c(p,f)):f.isMeshPhongMaterial?(r(p,f),d(p,f)):f.isMeshStandardMaterial?(r(p,f),f.isMeshPhysicalMaterial?g(p,f,C):u(p,f)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?(r(p,f),h(p,f)):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?(r(p,f),_(p,f)):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&n(p,f)):f.isPointsMaterial?a(p,f,b,y):f.isSpriteMaterial?s(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=i.get(f).envMap;if(b){p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio;const I=i.get(b).__maxMipLevel;I!==void 0&&(p.maxMipLevel.value=I)}f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let C;f.aoMap?C=f.aoMap:f.lightMap&&(C=f.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uv2Transform.value.copy(C.matrix))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function n(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,b,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=y*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let C;f.map?C=f.map:f.alphaMap&&(C=f.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uvTransform.value.copy(C.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let b;f.map?b=f.map:f.alphaMap&&(b=f.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,f){f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ft&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ft&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias)}function c(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ft&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ft&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ft&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ft&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),i.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,b){u(p,f),p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ft&&p.clearcoatNormalScale.value.negate())),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function x(p,f){f.matcap&&(p.matcap.value=f.matcap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ft&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ft&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias)}function h(p,f){f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias)}function v(p,f){f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}function _(p,f){f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ft&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ft&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function c1(){const i=gi("canvas");return i.style.display="block",i}function Mt(i={}){const e=i.canvas!==void 0?i.canvas:c1(),t=i.context!==void 0?i.context:null,r=i.alpha!==void 0?i.alpha:!1,o=i.depth!==void 0?i.depth:!0,n=i.stencil!==void 0?i.stencil:!0,a=i.antialias!==void 0?i.antialias:!1,s=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,l=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,d=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u=null,g=null;const x=[],h=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Jt,this.physicallyCorrectLights=!1,this.toneMapping=xo,this.toneMappingExposure=1;const v=this;let _=!1,p=0,f=0,b=null,y=-1,C=null;const I=new _t,T=new _t;let X=null,q=e.width,j=e.height,B=1,ge=null,D=null;const k=new _t(0,0,q,j),W=new _t(0,0,q,j);let H=!1;const Z=[],fe=new Gi;let we=!1,Le=!1,Me=null;const Xe=new Fe,se=new G,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return b===null?B:1}let ee=t;function Re(L,V){for(let Q=0;Q<L.length;Q++){const K=L[Q],ae=e.getContext(K,V);if(ae!==null)return ae}return null}try{const L={alpha:r,depth:o,stencil:n,antialias:a,premultipliedAlpha:s,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:c};if(e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",At,!1),ee===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),ee=Re(V,L),ee===null)throw Re(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ee.getShaderPrecisionFormat===void 0&&(ee.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ve,_e,be,ke,re,le,pe,Be,Se,$,P,J,me,de,Pe,He,Oe,We,$e,R,ve,ie,Ie;function Ge(){Ve=new Nx(ee),_e=new bx(ee,Ve,i),Ve.init(_e),ie=new a1(ee,Ve,_e),be=new n1(ee,Ve,_e),Z[0]=1029,ke=new Rx(ee),re=new Kp,le=new i1(ee,Ve,be,re,_e,ie,ke),pe=new wx(v),Be=new Gx(v),Se=new Qg(ee,_e),Ie=new Tx(ee,Ve,Se,_e),$=new Bx(ee,Se,ke,Ie),P=new Ux(ee,$,Se,ke),$e=new Fx(ee,_e,le),He=new Px(re),J=new zp(v,pe,Be,Ve,_e,Ie,He),me=new d1(re),de=new Qp(re),Pe=new t1(Ve,_e),We=new Ax(v,pe,be,P,s),Oe=new Ud(v,P,_e),R=new yx(ee,Ve,ke,_e),ve=new Ix(ee,Ve,ke,_e),ke.programs=J.programs,v.capabilities=_e,v.extensions=Ve,v.properties=re,v.renderLists=de,v.shadowMap=Oe,v.state=be,v.info=ke}Ge();const je=new l1(v,ee);this.xr=je,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const L=Ve.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ve.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(L){L!==void 0&&(B=L,this.setSize(q,j,!1))},this.getSize=function(L){return L.set(q,j)},this.setSize=function(L,V,Q){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,j=V,e.width=Math.floor(L*B),e.height=Math.floor(V*B),Q!==!1&&(e.style.width=L+"px",e.style.height=V+"px"),this.setViewport(0,0,L,V)},this.getDrawingBufferSize=function(L){return L.set(q*B,j*B).floor()},this.setDrawingBufferSize=function(L,V,Q){q=L,j=V,B=Q,e.width=Math.floor(L*Q),e.height=Math.floor(V*Q),this.setViewport(0,0,L,V)},this.getCurrentViewport=function(L){return L.copy(I)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,V,Q,K){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,V,Q,K),be.viewport(I.copy(k).multiplyScalar(B).floor())},this.getScissor=function(L){return L.copy(W)},this.setScissor=function(L,V,Q,K){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,V,Q,K),be.scissor(T.copy(W).multiplyScalar(B).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(L){be.setScissorTest(H=L)},this.setOpaqueSort=function(L){ge=L},this.setTransparentSort=function(L){D=L},this.getClearColor=function(L){return L.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(L,V,Q){let K=0;(L===void 0||L)&&(K|=16384),(V===void 0||V)&&(K|=256),(Q===void 0||Q)&&(K|=1024),ee.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",At,!1),de.dispose(),Pe.dispose(),re.dispose(),pe.dispose(),Be.dispose(),P.dispose(),Ie.dispose(),je.dispose(),je.removeEventListener("sessionstart",ce),je.removeEventListener("sessionend",Y),Me&&(Me.dispose(),Me=null),ne.stop()};function Gt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const L=ke.autoReset,V=Oe.enabled,Q=Oe.autoUpdate,K=Oe.needsUpdate,ae=Oe.type;Ge(),ke.autoReset=L,Oe.enabled=V,Oe.autoUpdate=Q,Oe.needsUpdate=K,Oe.type=ae}function A(L){const V=L.target;V.removeEventListener("dispose",A),w(V)}function w(L){N(L),re.remove(L)}function N(L){const V=re.get(L).programs;V!==void 0&&V.forEach(function(Q){J.releaseProgram(Q)})}this.renderBufferDirect=function(L,V,Q,K,ae,Ze){V===null&&(V=xe);const Ke=ae.isMesh&&ae.matrixWorld.determinant()<0,Ue=ar(L,V,Q,K,ae);be.setMaterial(K,Ke);let et=Q.index;const ht=Q.attributes.position;if(et===null){if(ht===void 0||ht.count===0)return}else if(et.count===0)return;let rt=1;K.wireframe===!0&&(et=$.getWireframeAttribute(Q),rt=2),Ie.setup(ae,K,Ue,Q,et);let lt,Tt=R;et!==null&&(lt=Se.get(et),Tt=ve,Tt.setIndex(lt));const tr=et!==null?et.count:ht.count,mt=Q.drawRange.start*rt,go=Q.drawRange.count*rt,xt=Ze!==null?Ze.start*rt:0,Cr=Ze!==null?Ze.count*rt:1/0,Ar=Math.max(mt,xt),Gr=Math.min(tr,mt+go,xt+Cr)-1,fr=Math.max(0,Gr-Ar+1);if(fr!==0){if(ae.isMesh)K.wireframe===!0?(be.setLineWidth(K.wireframeLinewidth*Ne()),Tt.setMode(1)):Tt.setMode(4);else if(ae.isLine){let yt=K.linewidth;yt===void 0&&(yt=1),be.setLineWidth(yt*Ne()),ae.isLineSegments?Tt.setMode(1):ae.isLineLoop?Tt.setMode(2):Tt.setMode(3)}else ae.isPoints?Tt.setMode(0):ae.isSprite&&Tt.setMode(4);if(ae.isInstancedMesh)Tt.renderInstances(Ar,fr,ae.count);else if(Q.isInstancedBufferGeometry){const yt=Math.min(Q.instanceCount,Q._maxInstanceCount);Tt.renderInstances(Ar,fr,yt)}else Tt.render(Ar,fr)}},this.compile=function(L,V){g=Pe.get(L),g.init(),h.push(g),L.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights(v.physicallyCorrectLights),L.traverse(function(Q){const K=Q.material;if(K)if(Array.isArray(K))for(let ae=0;ae<K.length;ae++){const Ze=K[ae];$t(Ze,L,Q)}else $t(K,L,Q)}),h.pop(),g=null};let O=null;function z(L){O&&O(L)}function ce(){ne.stop()}function Y(){ne.start()}const ne=new id;ne.setAnimationLoop(z),typeof window!="undefined"&&ne.setContext(window),this.setAnimationLoop=function(L){O=L,je.setAnimationLoop(L),L===null?ne.stop():ne.start()},je.addEventListener("sessionstart",ce),je.addEventListener("sessionend",Y),this.render=function(L,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;L.autoUpdate===!0&&L.updateMatrixWorld(),V.parent===null&&V.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(V),V=je.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,V,b),g=Pe.get(L,h.length),g.init(),h.push(g),Xe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),fe.setFromProjectionMatrix(Xe),Le=this.localClippingEnabled,we=He.init(this.clippingPlanes,Le,V),u=de.get(L,x.length),u.init(),x.push(u),Ae(L,V,0,v.sortObjects),u.finish(),v.sortObjects===!0&&u.sort(ge,D),we===!0&&He.beginShadows();const Q=g.state.shadowsArray;if(Oe.render(Q,L,V),we===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(u,L),g.setupLights(v.physicallyCorrectLights),V.isArrayCamera){const K=V.cameras;for(let ae=0,Ze=K.length;ae<Ze;ae++){const Ke=K[ae];ye(u,L,Ke,Ke.viewport)}}else ye(u,L,V);b!==null&&(le.updateMultisampleRenderTarget(b),le.updateRenderTargetMipmap(b)),L.isScene===!0&&L.onAfterRender(v,L,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1),Ie.resetDefaultState(),y=-1,C=null,h.pop(),h.length>0?g=h[h.length-1]:g=null,x.pop(),x.length>0?u=x[x.length-1]:u=null};function Ae(L,V,Q,K){if(L.visible===!1)return;if(L.layers.test(V.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(V);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||fe.intersectsSprite(L)){K&&se.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Xe);const Ke=P.update(L),Ue=L.material;Ue.visible&&u.push(L,Ke,Ue,Q,se.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==ke.render.frame&&(L.skeleton.update(),L.skeleton.frame=ke.render.frame),!L.frustumCulled||fe.intersectsObject(L))){K&&se.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Xe);const Ke=P.update(L),Ue=L.material;if(Array.isArray(Ue)){const et=Ke.groups;for(let ht=0,rt=et.length;ht<rt;ht++){const lt=et[ht],Tt=Ue[lt.materialIndex];Tt&&Tt.visible&&u.push(L,Ke,Tt,Q,se.z,lt)}}else Ue.visible&&u.push(L,Ke,Ue,Q,se.z,null)}}const Ze=L.children;for(let Ke=0,Ue=Ze.length;Ke<Ue;Ke++)Ae(Ze[Ke],V,Q,K)}function ye(L,V,Q,K){const ae=L.opaque,Ze=L.transmissive,Ke=L.transparent;g.setupLightsView(Q),Ze.length>0&&wt(ae,V,Q),K&&be.viewport(I.copy(K)),ae.length>0&&Nt(ae,V,Q),Ze.length>0&&Nt(Ze,V,Q),Ke.length>0&&Nt(Ke,V,Q)}function wt(L,V,Q){if(Me===null){const Ke=a===!0&&_e.isWebGL2===!0?Xl:yr;Me=new Ke(1024,1024,{generateMipmaps:!0,type:ie.convert(Bo)!==null?Bo:zr,minFilter:No,magFilter:Ut,wrapS:sr,wrapT:sr})}const K=v.getRenderTarget();v.setRenderTarget(Me),v.clear();const ae=v.toneMapping;v.toneMapping=xo,Nt(L,V,Q),v.toneMapping=ae,le.updateMultisampleRenderTarget(Me),le.updateRenderTargetMipmap(Me),v.setRenderTarget(K)}function Nt(L,V,Q){const K=V.isScene===!0?V.overrideMaterial:null;for(let ae=0,Ze=L.length;ae<Ze;ae++){const Ke=L[ae],Ue=Ke.object,et=Ke.geometry,ht=K===null?Ke.material:K,rt=Ke.group;Ue.layers.test(Q.layers)&&Et(Ue,V,Q,et,ht,rt)}}function Et(L,V,Q,K,ae,Ze){L.onBeforeRender(v,V,Q,K,ae,Ze),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ae.onBeforeRender(v,V,Q,K,L,Ze),ae.transparent===!0&&ae.side===ho?(ae.side=Ft,ae.needsUpdate=!0,v.renderBufferDirect(Q,V,K,ae,L,Ze),ae.side=$o,ae.needsUpdate=!0,v.renderBufferDirect(Q,V,K,ae,L,Ze),ae.side=ho):v.renderBufferDirect(Q,V,K,ae,L,Ze),L.onAfterRender(v,V,Q,K,ae,Ze)}function $t(L,V,Q){V.isScene!==!0&&(V=xe);const K=re.get(L),ae=g.state.lights,Ze=g.state.shadowsArray,Ke=ae.state.version,Ue=J.getParameters(L,ae.state,Ze,V,Q),et=J.getProgramCacheKey(Ue);let ht=K.programs;K.environment=L.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(L.isMeshStandardMaterial?Be:pe).get(L.envMap||K.environment),ht===void 0&&(L.addEventListener("dispose",A),ht=new Map,K.programs=ht);let rt=ht.get(et);if(rt!==void 0){if(K.currentProgram===rt&&K.lightsStateVersion===Ke)return Qt(L,Ue),rt}else Ue.uniforms=J.getUniforms(L),L.onBuild(Q,Ue,v),L.onBeforeCompile(Ue,v),rt=J.acquireProgram(Ue,et),ht.set(et,rt),K.uniforms=Ue.uniforms;const lt=K.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(lt.clippingPlanes=He.uniform),Qt(L,Ue),K.needsLights=$r(L),K.lightsStateVersion=Ke,K.needsLights&&(lt.ambientLightColor.value=ae.state.ambient,lt.lightProbe.value=ae.state.probe,lt.directionalLights.value=ae.state.directional,lt.directionalLightShadows.value=ae.state.directionalShadow,lt.spotLights.value=ae.state.spot,lt.spotLightShadows.value=ae.state.spotShadow,lt.rectAreaLights.value=ae.state.rectArea,lt.ltc_1.value=ae.state.rectAreaLTC1,lt.ltc_2.value=ae.state.rectAreaLTC2,lt.pointLights.value=ae.state.point,lt.pointLightShadows.value=ae.state.pointShadow,lt.hemisphereLights.value=ae.state.hemi,lt.directionalShadowMap.value=ae.state.directionalShadowMap,lt.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,lt.spotShadowMap.value=ae.state.spotShadowMap,lt.spotShadowMatrix.value=ae.state.spotShadowMatrix,lt.pointShadowMap.value=ae.state.pointShadowMap,lt.pointShadowMatrix.value=ae.state.pointShadowMatrix);const Tt=rt.getUniforms(),tr=no.seqWithValue(Tt.seq,lt);return K.currentProgram=rt,K.uniformsList=tr,rt}function Qt(L,V){const Q=re.get(L);Q.outputEncoding=V.outputEncoding,Q.instancing=V.instancing,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents}function ar(L,V,Q,K,ae){V.isScene!==!0&&(V=xe),le.resetTextureUnits();const Ze=V.fog,Ke=K.isMeshStandardMaterial?V.environment:null,Ue=b===null?v.outputEncoding:b.texture.encoding,et=(K.isMeshStandardMaterial?Be:pe).get(K.envMap||Ke),ht=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,rt=!!K.normalMap&&!!Q.attributes.tangent,lt=!!Q.morphAttributes.position,Tt=!!Q.morphAttributes.normal,tr=Q.morphAttributes.position?Q.morphAttributes.position.length:0,mt=re.get(K),go=g.state.lights;if(we===!0&&(Le===!0||L!==C)){const cr=L===C&&K.id===y;He.setState(K,L,cr)}let xt=!1;K.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==go.state.version||mt.outputEncoding!==Ue||ae.isInstancedMesh&&mt.instancing===!1||!ae.isInstancedMesh&&mt.instancing===!0||ae.isSkinnedMesh&&mt.skinning===!1||!ae.isSkinnedMesh&&mt.skinning===!0||mt.envMap!==et||K.fog&&mt.fog!==Ze||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==He.numPlanes||mt.numIntersection!==He.numIntersection)||mt.vertexAlphas!==ht||mt.vertexTangents!==rt||mt.morphTargets!==lt||mt.morphNormals!==Tt||_e.isWebGL2===!0&&mt.morphTargetsCount!==tr)&&(xt=!0):(xt=!0,mt.__version=K.version);let Cr=mt.currentProgram;xt===!0&&(Cr=$t(K,V,ae));let Ar=!1,Gr=!1,fr=!1;const yt=Cr.getUniforms(),kr=mt.uniforms;if(be.useProgram(Cr.program)&&(Ar=!0,Gr=!0,fr=!0),K.id!==y&&(y=K.id,Gr=!0),Ar||C!==L){if(yt.setValue(ee,"projectionMatrix",L.projectionMatrix),_e.logarithmicDepthBuffer&&yt.setValue(ee,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),C!==L&&(C=L,Gr=!0,fr=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const cr=yt.map.cameraPosition;cr!==void 0&&cr.setValue(ee,se.setFromMatrixPosition(L.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&yt.setValue(ee,"isOrthographic",L.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||ae.isSkinnedMesh)&&yt.setValue(ee,"viewMatrix",L.matrixWorldInverse)}if(ae.isSkinnedMesh){yt.setOptional(ee,ae,"bindMatrix"),yt.setOptional(ee,ae,"bindMatrixInverse");const cr=ae.skeleton;cr&&(_e.floatVertexTextures?(cr.boneTexture===null&&cr.computeBoneTexture(),yt.setValue(ee,"boneTexture",cr.boneTexture,le),yt.setValue(ee,"boneTextureSize",cr.boneTextureSize)):yt.setOptional(ee,cr,"boneMatrices"))}return!!Q&&(Q.morphAttributes.position!==void 0||Q.morphAttributes.normal!==void 0)&&$e.update(ae,Q,K,Cr),(Gr||mt.receiveShadow!==ae.receiveShadow)&&(mt.receiveShadow=ae.receiveShadow,yt.setValue(ee,"receiveShadow",ae.receiveShadow)),Gr&&(yt.setValue(ee,"toneMappingExposure",v.toneMappingExposure),mt.needsLights&&_r(kr,fr),Ze&&K.fog&&me.refreshFogUniforms(kr,Ze),me.refreshMaterialUniforms(kr,K,B,j,Me),no.upload(ee,mt.uniformsList,kr,le)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(no.upload(ee,mt.uniformsList,kr,le),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&yt.setValue(ee,"center",ae.center),yt.setValue(ee,"modelViewMatrix",ae.modelViewMatrix),yt.setValue(ee,"normalMatrix",ae.normalMatrix),yt.setValue(ee,"modelMatrix",ae.matrixWorld),Cr}function _r(L,V){L.ambientLightColor.needsUpdate=V,L.lightProbe.needsUpdate=V,L.directionalLights.needsUpdate=V,L.directionalLightShadows.needsUpdate=V,L.pointLights.needsUpdate=V,L.pointLightShadows.needsUpdate=V,L.spotLights.needsUpdate=V,L.spotLightShadows.needsUpdate=V,L.rectAreaLights.needsUpdate=V,L.hemisphereLights.needsUpdate=V}function $r(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return b},this.setRenderTarget=function(L,V=0,Q=0){b=L,p=V,f=Q,L&&re.get(L).__webglFramebuffer===void 0&&le.setupRenderTarget(L);let K=null,ae=!1,Ze=!1;if(L){const Ue=L.texture;(Ue.isDataTexture3D||Ue.isDataTexture2DArray)&&(Ze=!0);const et=re.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(K=et[V],ae=!0):L.isWebGLMultisampleRenderTarget?K=re.get(L).__webglMultisampledFramebuffer:K=et,I.copy(L.viewport),T.copy(L.scissor),X=L.scissorTest}else I.copy(k).multiplyScalar(B).floor(),T.copy(W).multiplyScalar(B).floor(),X=H;if(be.bindFramebuffer(36160,K)&&_e.drawBuffers){let Ue=!1;if(L)if(L.isWebGLMultipleRenderTargets){const et=L.texture;if(Z.length!==et.length||Z[0]!==36064){for(let ht=0,rt=et.length;ht<rt;ht++)Z[ht]=36064+ht;Z.length=et.length,Ue=!0}}else(Z.length!==1||Z[0]!==36064)&&(Z[0]=36064,Z.length=1,Ue=!0);else(Z.length!==1||Z[0]!==1029)&&(Z[0]=1029,Z.length=1,Ue=!0);Ue&&(_e.isWebGL2?ee.drawBuffers(Z):Ve.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}if(be.viewport(I),be.scissor(T),be.setScissorTest(X),ae){const Ue=re.get(L.texture);ee.framebufferTexture2D(36160,36064,34069+V,Ue.__webglTexture,Q)}else if(Ze){const Ue=re.get(L.texture),et=V||0;ee.framebufferTextureLayer(36160,36064,Ue.__webglTexture,Q||0,et)}y=-1},this.readRenderTargetPixels=function(L,V,Q,K,ae,Ze,Ke){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=re.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ke!==void 0&&(Ue=Ue[Ke]),Ue){be.bindFramebuffer(36160,Ue);try{const et=L.texture,ht=et.format,rt=et.type;if(ht!==Yt&&ie.convert(ht)!==ee.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=rt===Bo&&(Ve.has("EXT_color_buffer_half_float")||_e.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(rt!==zr&&ie.convert(rt)!==ee.getParameter(35738)&&!(rt===Nr&&(_e.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee.checkFramebufferStatus(36160)===36053?V>=0&&V<=L.width-K&&Q>=0&&Q<=L.height-ae&&ee.readPixels(V,Q,K,ae,ie.convert(ht),ie.convert(rt),Ze):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const et=b!==null?re.get(b).__webglFramebuffer:null;be.bindFramebuffer(36160,et)}}},this.copyFramebufferToTexture=function(L,V,Q=0){const K=Math.pow(2,-Q),ae=Math.floor(V.image.width*K),Ze=Math.floor(V.image.height*K);let Ke=ie.convert(V.format);_e.isWebGL2&&(Ke===6407&&(Ke=32849),Ke===6408&&(Ke=32856)),le.setTexture2D(V,0),ee.copyTexImage2D(3553,Q,Ke,L.x,L.y,ae,Ze,0),be.unbindTexture()},this.copyTextureToTexture=function(L,V,Q,K=0){const ae=V.image.width,Ze=V.image.height,Ke=ie.convert(Q.format),Ue=ie.convert(Q.type);le.setTexture2D(Q,0),ee.pixelStorei(37440,Q.flipY),ee.pixelStorei(37441,Q.premultiplyAlpha),ee.pixelStorei(3317,Q.unpackAlignment),V.isDataTexture?ee.texSubImage2D(3553,K,L.x,L.y,ae,Ze,Ke,Ue,V.image.data):V.isCompressedTexture?ee.compressedTexSubImage2D(3553,K,L.x,L.y,V.mipmaps[0].width,V.mipmaps[0].height,Ke,V.mipmaps[0].data):ee.texSubImage2D(3553,K,L.x,L.y,Ke,Ue,V.image),K===0&&Q.generateMipmaps&&ee.generateMipmap(3553),be.unbindTexture()},this.copyTextureToTexture3D=function(L,V,Q,K,ae=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ze=L.max.x-L.min.x+1,Ke=L.max.y-L.min.y+1,Ue=L.max.z-L.min.z+1,et=ie.convert(K.format),ht=ie.convert(K.type);let rt;if(K.isDataTexture3D)le.setTexture3D(K,0),rt=32879;else if(K.isDataTexture2DArray)le.setTexture2DArray(K,0),rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ee.pixelStorei(37440,K.flipY),ee.pixelStorei(37441,K.premultiplyAlpha),ee.pixelStorei(3317,K.unpackAlignment);const lt=ee.getParameter(3314),Tt=ee.getParameter(32878),tr=ee.getParameter(3316),mt=ee.getParameter(3315),go=ee.getParameter(32877),xt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;ee.pixelStorei(3314,xt.width),ee.pixelStorei(32878,xt.height),ee.pixelStorei(3316,L.min.x),ee.pixelStorei(3315,L.min.y),ee.pixelStorei(32877,L.min.z),Q.isDataTexture||Q.isDataTexture3D?ee.texSubImage3D(rt,ae,V.x,V.y,V.z,Ze,Ke,Ue,et,ht,xt.data):Q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ee.compressedTexSubImage3D(rt,ae,V.x,V.y,V.z,Ze,Ke,Ue,et,xt.data)):ee.texSubImage3D(rt,ae,V.x,V.y,V.z,Ze,Ke,Ue,et,ht,xt),ee.pixelStorei(3314,lt),ee.pixelStorei(32878,Tt),ee.pixelStorei(3316,tr),ee.pixelStorei(3315,mt),ee.pixelStorei(32877,go),ae===0&&K.generateMipmaps&&ee.generateMipmap(rt),be.unbindTexture()},this.initTexture=function(L){le.setTexture2D(L,0),be.unbindTexture()},this.resetState=function(){p=0,f=0,b=null,be.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Mt.prototype.isWebGLRenderer=!0;class m1 extends Mt{}m1.prototype.isWebGL1Renderer=!0;class Hd extends ft{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Hd.prototype.isScene=!0;class sn{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ln,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=gr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,n=this.stride;o<n;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}sn.prototype.isInterleavedBuffer=!0;const Ot=new G;class ln{constructor(e,t,r,o=!1){this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Ot.x=this.getX(t),Ot.y=this.getY(t),Ot.z=this.getZ(t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Ot.x=this.getX(t),Ot.y=this.getY(t),Ot.z=this.getZ(t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Ot.x=this.getX(t),Ot.y=this.getY(t),Ot.z=this.getZ(t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[o+n])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ln(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[o+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}ln.prototype.isInterleavedBufferAttribute=!0;class Xd extends Ht{constructor(e){super();this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Xd.prototype.isSpriteMaterial=!0;let dn;const Fn=new G,cn=new G,mn=new G,un=new ue,Un=new ue,kd=new Fe,Oi=new G,Vn=new G,Di=new G,Wd=new ue,es=new ue,zd=new ue;class u1 extends ft{constructor(e){super();if(this.type="Sprite",dn===void 0){dn=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new sn(t,5);dn.setIndex([0,1,2,0,2,3]),dn.setAttribute("position",new ln(r,3,0,!1)),dn.setAttribute("uv",new ln(r,2,3,!1))}this.geometry=dn,this.material=e!==void 0?e:new Xd,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cn.setFromMatrixScale(this.matrixWorld),kd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cn.multiplyScalar(-mn.z);const r=this.material.rotation;let o,n;r!==0&&(n=Math.cos(r),o=Math.sin(r));const a=this.center;Fi(Oi.set(-.5,-.5,0),mn,a,cn,o,n),Fi(Vn.set(.5,-.5,0),mn,a,cn,o,n),Fi(Di.set(.5,.5,0),mn,a,cn,o,n),Wd.set(0,0),es.set(1,0),zd.set(1,1);let s=e.ray.intersectTriangle(Oi,Vn,Di,!1,Fn);if(s===null&&(Fi(Vn.set(-.5,.5,0),mn,a,cn,o,n),es.set(0,1),s=e.ray.intersectTriangle(Oi,Di,Vn,!1,Fn),s===null))return;const l=e.ray.origin.distanceTo(Fn);l<e.near||l>e.far||t.push({distance:l,point:Fn.clone(),uv:Dt.getUV(Fn,Oi,Vn,Di,Wd,es,zd,new ue),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}u1.prototype.isSprite=!0;function Fi(i,e,t,r,o,n){un.subVectors(i,t).addScalar(.5).multiply(r),o!==void 0?(Un.x=n*un.x-o*un.y,Un.y=o*un.x+n*un.y):Un.copy(un),i.copy(e),i.x+=Un.x,i.y+=Un.y,i.applyMatrix4(kd)}const Kd=new G,Zd=new _t,Qd=new _t,g1=new G,Yd=new Fe;class ts extends or{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let r=0,o=t.count;r<o;r++){e.x=t.getX(r),e.y=t.getY(r),e.z=t.getZ(r),e.w=t.getW(r);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const r=this.skeleton,o=this.geometry;Zd.fromBufferAttribute(o.attributes.skinIndex,e),Qd.fromBufferAttribute(o.attributes.skinWeight,e),Kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const a=Qd.getComponent(n);if(a!==0){const s=Zd.getComponent(n);Yd.multiplyMatrices(r.bones[s].matrixWorld,r.boneInverses[s]),t.addScaledVector(g1.copy(Kd).applyMatrix4(Yd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}ts.prototype.isSkinnedMesh=!0;class rs extends ft{constructor(){super();this.type="Bone"}}rs.prototype.isBone=!0;class Jd extends Vt{constructor(e=null,t=1,r=1,o,n,a,s,l,d=Ut,c=Ut,u,g){super(null,a,s,l,d,c,o,n,u,g);this.image={data:e,width:t,height:r},this.magFilter=d,this.minFilter=c,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Jd.prototype.isDataTexture=!0;const jd=new Fe,h1=new Fe;class os{constructor(e=[],t=[]){this.uuid=gr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,o=this.bones.length;r<o;r++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new Fe;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,o=this.boneTexture;for(let n=0,a=e.length;n<a;n++){const s=e[n]?e[n].matrixWorld:h1;jd.multiplyMatrices(s,t[n]),jd.toArray(r,n*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new os(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Fl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new Jd(t,e,e,Yt,Nr);return this.boneMatrices=t,this.boneTexture=r,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const o=this.bones[t];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,o=e.bones.length;r<o;r++){const n=e.bones[r];let a=t[n];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),a=new rs),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let o=0,n=t.length;o<n;o++){const a=t[o];e.bones.push(a.uuid);const s=r[o];e.boneInverses.push(s.toArray())}return e}}class ns extends It{constructor(e,t,r,o=1){typeof r=="number"&&(o=r,r=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,r);this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}ns.prototype.isInstancedBufferAttribute=!0;const qd=new Fe,ec=new Fe,Ui=[],Hn=new or;class x1 extends or{constructor(e,t,r){super(e,t);this.instanceMatrix=new ns(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const r=this.matrixWorld,o=this.count;if(Hn.geometry=this.geometry,Hn.material=this.material,Hn.material!==void 0)for(let n=0;n<o;n++){this.getMatrixAt(n,qd),ec.multiplyMatrices(r,qd),Hn.matrixWorld=ec,Hn.raycast(e,Ui);for(let a=0,s=Ui.length;a<s;a++){const l=Ui[a];l.instanceId=n,l.object=this,t.push(l)}Ui.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}x1.prototype.isInstancedMesh=!0;class gn extends Ht{constructor(e){super();this.type="LineBasicMaterial",this.color=new Ce(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}gn.prototype.isLineBasicMaterial=!0;const tc=new G,rc=new G,oc=new Fe,is=new ko,Vi=new Mo;class Hi extends ft{constructor(e=new Pt,t=new gn){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,n=t.count;o<n;o++)tc.fromBufferAttribute(t,o-1),rc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=tc.distanceTo(rc);e.setAttribute("lineDistance",new Rt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,n=e.params.Line.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vi.copy(r.boundingSphere),Vi.applyMatrix4(o),Vi.radius+=n,e.ray.intersectsSphere(Vi)===!1)return;oc.copy(o).invert(),is.copy(e.ray).applyMatrix4(oc);const s=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,d=new G,c=new G,u=new G,g=new G,x=this.isLineSegments?2:1;if(r.isBufferGeometry){const h=r.index,_=r.attributes.position;if(h!==null){const p=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let b=p,y=f-1;b<y;b+=x){const C=h.getX(b),I=h.getX(b+1);if(d.fromBufferAttribute(_,C),c.fromBufferAttribute(_,I),is.distanceSqToSegment(d,c,g,u)>l)continue;g.applyMatrix4(this.matrixWorld);const X=e.ray.origin.distanceTo(g);X<e.near||X>e.far||t.push({distance:X,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),f=Math.min(_.count,a.start+a.count);for(let b=p,y=f-1;b<y;b+=x){if(d.fromBufferAttribute(_,b),c.fromBufferAttribute(_,b+1),is.distanceSqToSegment(d,c,g,u)>l)continue;g.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(g);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else r.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=o.length;n<a;n++){const s=o[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Hi.prototype.isLine=!0;const nc=new G,ic=new G;class Xi extends Hi{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,n=t.count;o<n;o+=2)nc.fromBufferAttribute(t,o),ic.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+nc.distanceTo(ic);e.setAttribute("lineDistance",new Rt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Xi.prototype.isLineSegments=!0;class ac extends Hi{constructor(e,t){super(e,t);this.type="LineLoop"}}ac.prototype.isLineLoop=!0;class as extends Ht{constructor(e){super();this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}as.prototype.isPointsMaterial=!0;const sc=new Fe,ss=new ko,ki=new Mo,Wi=new G;class lc extends ft{constructor(e=new Pt,t=new as){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,n=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ki.copy(r.boundingSphere),ki.applyMatrix4(o),ki.radius+=n,e.ray.intersectsSphere(ki)===!1)return;sc.copy(o).invert(),ss.copy(e.ray).applyMatrix4(sc);const s=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s;if(r.isBufferGeometry){const d=r.index,u=r.attributes.position;if(d!==null){const g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let h=g,v=x;h<v;h++){const _=d.getX(h);Wi.fromBufferAttribute(u,_),dc(Wi,_,l,o,e,t,this)}}else{const g=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let h=g,v=x;h<v;h++)Wi.fromBufferAttribute(u,h),dc(Wi,h,l,o,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=o.length;n<a;n++){const s=o[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}lc.prototype.isPoints=!0;function dc(i,e,t,r,o,n,a){const s=ss.distanceSqToPoint(i);if(s<t){const l=new G;ss.closestPointToPoint(i,l),l.applyMatrix4(r);const d=o.ray.origin.distanceTo(l);if(d<o.near||d>o.far)return;n.push({distance:d,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}class p1 extends Vt{constructor(e,t,r,o,n,a,s,l,d){super(e,t,r,o,n,a,s,l,d);this.format=s!==void 0?s:po,this.minFilter=a!==void 0?a:lr,this.magFilter=n!==void 0?n:lr,this.generateMipmaps=!1;const c=this;function u(){c.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}p1.prototype.isVideoTexture=!0;class f1 extends Vt{constructor(e,t,r,o,n,a,s,l,d,c,u,g){super(null,a,s,l,d,c,o,n,u,g);this.image={width:t,height:r},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}f1.prototype.isCompressedTexture=!0;class S1 extends Vt{constructor(e,t,r,o,n,a,s,l,d){super(e,t,r,o,n,a,s,l,d);this.needsUpdate=!0}}S1.prototype.isCanvasTexture=!0;class v1 extends Vt{constructor(e,t,r,o,n,a,s,l,d,c){if(c=c!==void 0?c:Io,c!==Io&&c!==Pn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&c===Io&&(r=li),r===void 0&&c===Pn&&(r=bn);super(null,o,n,a,s,l,c,r,d);this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1}}v1.prototype.isDepthTexture=!0;new G;new G;new G;new Dt;class pr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),n+=r.distanceTo(o),t.push(n),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const n=r.length;let a;t?a=t:a=e*r[n-1];let s=0,l=n-1,d;for(;s<=l;)if(o=Math.floor(s+(l-s)/2),d=r[o]-a,d<0)s=o+1;else if(d>0)l=o-1;else{l=o;break}if(o=l,r[o]===a)return o/(n-1);const c=r[o],g=r[o+1]-c,x=(a-c)/g;return(o+x)/(n-1)}getTangent(e,t){const r=1e-4;let o=e-r,n=e+r;o<0&&(o=0),n>1&&(n=1);const a=this.getPoint(o),s=this.getPoint(n),l=t||(a.isVector2?new ue:new G);return l.copy(s).sub(a).normalize(),l}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new G,o=[],n=[],a=[],s=new G,l=new Fe;for(let x=0;x<=e;x++){const h=x/e;o[x]=this.getTangentAt(h,new G)}n[0]=new G,a[0]=new G;let d=Number.MAX_VALUE;const c=Math.abs(o[0].x),u=Math.abs(o[0].y),g=Math.abs(o[0].z);c<=d&&(d=c,r.set(1,0,0)),u<=d&&(d=u,r.set(0,1,0)),g<=d&&r.set(0,0,1),s.crossVectors(o[0],r).normalize(),n[0].crossVectors(o[0],s),a[0].crossVectors(o[0],n[0]);for(let x=1;x<=e;x++){if(n[x]=n[x-1].clone(),a[x]=a[x-1].clone(),s.crossVectors(o[x-1],o[x]),s.length()>Number.EPSILON){s.normalize();const h=Math.acos(dr(o[x-1].dot(o[x]),-1,1));n[x].applyMatrix4(l.makeRotationAxis(s,h))}a[x].crossVectors(o[x],n[x])}if(t===!0){let x=Math.acos(dr(n[0].dot(n[e]),-1,1));x/=e,o[0].dot(s.crossVectors(n[0],n[e]))>0&&(x=-x);for(let h=1;h<=e;h++)n[h].applyMatrix4(l.makeRotationAxis(o[h],x*h)),a[h].crossVectors(o[h],n[h])}return{tangents:o,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zi extends pr{constructor(e=0,t=0,r=1,o=1,n=0,a=Math.PI*2,s=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=s,this.aRotation=l}getPoint(e,t){const r=t||new ue,o=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=o;for(;n>o;)n-=o;n<Number.EPSILON&&(a?n=0:n=o),this.aClockwise===!0&&!a&&(n===o?n=-o:n=n-o);const s=this.aStartAngle+e*n;let l=this.aX+this.xRadius*Math.cos(s),d=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),g=l-this.aX,x=d-this.aY;l=g*c-x*u+this.aX,d=g*u+x*c+this.aY}return r.set(l,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}zi.prototype.isEllipseCurve=!0;class cc extends zi{constructor(e,t,r,o,n,a){super(e,t,r,r,o,n,a);this.type="ArcCurve"}}cc.prototype.isArcCurve=!0;function ls(){let i=0,e=0,t=0,r=0;function o(n,a,s,l){i=n,e=s,t=-3*n+3*a-2*s-l,r=2*n-2*a+s+l}return{initCatmullRom:function(n,a,s,l,d){o(a,s,d*(s-n),d*(l-a))},initNonuniformCatmullRom:function(n,a,s,l,d,c,u){let g=(a-n)/d-(s-n)/(d+c)+(s-a)/c,x=(s-a)/c-(l-a)/(c+u)+(l-s)/u;g*=c,x*=c,o(a,s,g,x)},calc:function(n){const a=n*n,s=a*n;return i+e*n+t*a+r*s}}}const Ki=new G,ds=new ls,cs=new ls,ms=new ls;class mc extends pr{constructor(e=[],t=!1,r="centripetal",o=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new G){const r=t,o=this.points,n=o.length,a=(n-(this.closed?0:1))*e;let s=Math.floor(a),l=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/n)+1)*n:l===0&&s===n-1&&(s=n-2,l=1);let d,c;this.closed||s>0?d=o[(s-1)%n]:(Ki.subVectors(o[0],o[1]).add(o[0]),d=Ki);const u=o[s%n],g=o[(s+1)%n];if(this.closed||s+2<n?c=o[(s+2)%n]:(Ki.subVectors(o[n-1],o[n-2]).add(o[n-1]),c=Ki),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let h=Math.pow(d.distanceToSquared(u),x),v=Math.pow(u.distanceToSquared(g),x),_=Math.pow(g.distanceToSquared(c),x);v<1e-4&&(v=1),h<1e-4&&(h=v),_<1e-4&&(_=v),ds.initNonuniformCatmullRom(d.x,u.x,g.x,c.x,h,v,_),cs.initNonuniformCatmullRom(d.y,u.y,g.y,c.y,h,v,_),ms.initNonuniformCatmullRom(d.z,u.z,g.z,c.z,h,v,_)}else this.curveType==="catmullrom"&&(ds.initCatmullRom(d.x,u.x,g.x,c.x,this.tension),cs.initCatmullRom(d.y,u.y,g.y,c.y,this.tension),ms.initCatmullRom(d.z,u.z,g.z,c.z,this.tension));return r.set(ds.calc(l),cs.calc(l),ms.calc(l)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new G().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}mc.prototype.isCatmullRomCurve3=!0;function uc(i,e,t,r,o){const n=(r-e)*.5,a=(o-t)*.5,s=i*i,l=i*s;return(2*t-2*r+n+a)*l+(-3*t+3*r-2*n-a)*s+n*i+t}function M1(i,e){const t=1-i;return t*t*e}function _1(i,e){return 2*(1-i)*i*e}function A1(i,e){return i*i*e}function Xn(i,e,t,r){return M1(i,e)+_1(i,t)+A1(i,r)}function T1(i,e){const t=1-i;return t*t*t*e}function y1(i,e){const t=1-i;return 3*t*t*i*e}function b1(i,e){return 3*(1-i)*i*i*e}function P1(i,e){return i*i*i*e}function kn(i,e,t,r,o){return T1(i,e)+y1(i,t)+b1(i,r)+P1(i,o)}class us extends pr{constructor(e=new ue,t=new ue,r=new ue,o=new ue){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ue){const r=t,o=this.v0,n=this.v1,a=this.v2,s=this.v3;return r.set(kn(e,o.x,n.x,a.x,s.x),kn(e,o.y,n.y,a.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}us.prototype.isCubicBezierCurve=!0;class gc extends pr{constructor(e=new G,t=new G,r=new G,o=new G){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new G){const r=t,o=this.v0,n=this.v1,a=this.v2,s=this.v3;return r.set(kn(e,o.x,n.x,a.x,s.x),kn(e,o.y,n.y,a.y,s.y),kn(e,o.z,n.z,a.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}gc.prototype.isCubicBezierCurve3=!0;class Zi extends pr{constructor(e=new ue,t=new ue){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const r=t||new ue;return r.copy(this.v2).sub(this.v1).normalize(),r}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Zi.prototype.isLineCurve=!0;class w1 extends pr{constructor(e=new G,t=new G){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new G){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gs extends pr{constructor(e=new ue,t=new ue,r=new ue){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ue){const r=t,o=this.v0,n=this.v1,a=this.v2;return r.set(Xn(e,o.x,n.x,a.x),Xn(e,o.y,n.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}gs.prototype.isQuadraticBezierCurve=!0;class hc extends pr{constructor(e=new G,t=new G,r=new G){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new G){const r=t,o=this.v0,n=this.v1,a=this.v2;return r.set(Xn(e,o.x,n.x,a.x),Xn(e,o.y,n.y,a.y),Xn(e,o.z,n.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}hc.prototype.isQuadraticBezierCurve3=!0;class hs extends pr{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const r=t,o=this.points,n=(o.length-1)*e,a=Math.floor(n),s=n-a,l=o[a===0?a:a-1],d=o[a],c=o[a>o.length-2?o.length-1:a+1],u=o[a>o.length-3?o.length-1:a+2];return r.set(uc(s,l.x,d.x,c.x,u.x),uc(s,l.y,d.y,c.y,u.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ue().fromArray(o))}return this}}hs.prototype.isSplineCurve=!0;var xc=Object.freeze({__proto__:null,ArcCurve:cc,CatmullRomCurve3:mc,CubicBezierCurve:us,CubicBezierCurve3:gc,EllipseCurve:zi,LineCurve:Zi,LineCurve3:w1,QuadraticBezierCurve:gs,QuadraticBezierCurve3:hc,SplineCurve:hs});class L1 extends pr{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Zi(t,e))}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let n=0;for(;n<o.length;){if(o[n]>=r){const a=o[n]-r,s=this.curves[n],l=s.getLength(),d=l===0?0:1-a/l;return s.getPointAt(d,t)}n++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,n=this.curves;o<n.length;o++){const a=n[o],s=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(s);for(let d=0;d<l.length;d++){const c=l[d];r&&r.equals(c)||(t.push(c),r=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new xc[o.type]().fromJSON(o))}return this}}class xs extends L1{constructor(e){super();this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Zi(this.currentPoint.clone(),new ue(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const n=new gs(this.currentPoint.clone(),new ue(e,t),new ue(r,o));return this.curves.push(n),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,n,a){const s=new us(this.currentPoint.clone(),new ue(e,t),new ue(r,o),new ue(n,a));return this.curves.push(s),this.currentPoint.set(n,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new hs(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,n,a){const s=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+s,t+l,r,o,n,a),this}absarc(e,t,r,o,n,a){return this.absellipse(e,t,r,r,o,n,a),this}ellipse(e,t,r,o,n,a,s,l){const d=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+d,t+c,r,o,n,a,s,l),this}absellipse(e,t,r,o,n,a,s,l){const d=new zi(e,t,r,o,n,a,s,l);if(this.curves.length>0){const u=d.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(d);const c=d.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wn extends xs{constructor(e){super(e);this.uuid=gr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new xs().fromJSON(o))}return this}}const E1={triangulate:function(i,e,t=2){const r=e&&e.length,o=r?e[0]*t:i.length;let n=pc(i,0,o,t,!0);const a=[];if(!n||n.next===n.prev)return a;let s,l,d,c,u,g,x;if(r&&(n=B1(i,e,n,t)),i.length>80*t){s=d=i[0],l=c=i[1];for(let h=t;h<o;h+=t)u=i[h],g=i[h+1],u<s&&(s=u),g<l&&(l=g),u>d&&(d=u),g>c&&(c=g);x=Math.max(d-s,c-l),x=x!==0?1/x:0}return zn(n,a,t,s,l,x),a}};function pc(i,e,t,r,o){let n,a;if(o===W1(i,e,t,r)>0)for(n=e;n<t;n+=r)a=vc(n,i[n],i[n+1],a);else for(n=t-r;n>=e;n-=r)a=vc(n,i[n],i[n+1],a);return a&&Qi(a,a.next)&&(Zn(a),a=a.next),a}function ao(i,e){if(!i)return i;e||(e=i);let t=i,r;do if(r=!1,!t.steiner&&(Qi(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Zn(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function zn(i,e,t,r,o,n,a){if(!i)return;!a&&n&&F1(i,r,o,n);let s=i,l,d;for(;i.prev!==i.next;){if(l=i.prev,d=i.next,n?C1(i,r,o,n):$1(i)){e.push(l.i/t),e.push(i.i/t),e.push(d.i/t),Zn(i),i=d.next,s=d.next;continue}if(i=d,i===s){a?a===1?(i=G1(ao(i),e,t),zn(i,e,t,r,o,n,2)):a===2&&N1(i,e,t,r,o,n):zn(ao(i),e,t,r,o,n,1);break}}}function $1(i){const e=i.prev,t=i,r=i.next;if(Ct(e,t,r)>=0)return!1;let o=i.next.next;for(;o!==i.prev;){if(hn(e.x,e.y,t.x,t.y,r.x,r.y,o.x,o.y)&&Ct(o.prev,o,o.next)>=0)return!1;o=o.next}return!0}function C1(i,e,t,r){const o=i.prev,n=i,a=i.next;if(Ct(o,n,a)>=0)return!1;const s=o.x<n.x?o.x<a.x?o.x:a.x:n.x<a.x?n.x:a.x,l=o.y<n.y?o.y<a.y?o.y:a.y:n.y<a.y?n.y:a.y,d=o.x>n.x?o.x>a.x?o.x:a.x:n.x>a.x?n.x:a.x,c=o.y>n.y?o.y>a.y?o.y:a.y:n.y>a.y?n.y:a.y,u=ps(s,l,e,t,r),g=ps(d,c,e,t,r);let x=i.prevZ,h=i.nextZ;for(;x&&x.z>=u&&h&&h.z<=g;){if(x!==i.prev&&x!==i.next&&hn(o.x,o.y,n.x,n.y,a.x,a.y,x.x,x.y)&&Ct(x.prev,x,x.next)>=0||(x=x.prevZ,h!==i.prev&&h!==i.next&&hn(o.x,o.y,n.x,n.y,a.x,a.y,h.x,h.y)&&Ct(h.prev,h,h.next)>=0))return!1;h=h.nextZ}for(;x&&x.z>=u;){if(x!==i.prev&&x!==i.next&&hn(o.x,o.y,n.x,n.y,a.x,a.y,x.x,x.y)&&Ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;h&&h.z<=g;){if(h!==i.prev&&h!==i.next&&hn(o.x,o.y,n.x,n.y,a.x,a.y,h.x,h.y)&&Ct(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function G1(i,e,t){let r=i;do{const o=r.prev,n=r.next.next;!Qi(o,n)&&fc(o,r,r.next,n)&&Kn(o,n)&&Kn(n,o)&&(e.push(o.i/t),e.push(r.i/t),e.push(n.i/t),Zn(r),Zn(r.next),r=i=n),r=r.next}while(r!==i);return ao(r)}function N1(i,e,t,r,o,n){let a=i;do{let s=a.next.next;for(;s!==a.prev;){if(a.i!==s.i&&H1(a,s)){let l=Sc(a,s);a=ao(a,a.next),l=ao(l,l.next),zn(a,e,t,r,o,n),zn(l,e,t,r,o,n);return}s=s.next}a=a.next}while(a!==i)}function B1(i,e,t,r){const o=[];let n,a,s,l,d;for(n=0,a=e.length;n<a;n++)s=e[n]*r,l=n<a-1?e[n+1]*r:i.length,d=pc(i,s,l,r,!1),d===d.next&&(d.steiner=!0),o.push(V1(d));for(o.sort(I1),n=0;n<o.length;n++)R1(o[n],t),t=ao(t,t.next);return t}function I1(i,e){return i.x-e.x}function R1(i,e){if(e=O1(i,e),e){const t=Sc(e,i);ao(e,e.next),ao(t,t.next)}}function O1(i,e){let t=e;const r=i.x,o=i.y;let n=-1/0,a;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const g=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=r&&g>n){if(n=g,g===r){if(o===t.y)return t;if(o===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(r===n)return a;const s=a,l=a.x,d=a.y;let c=1/0,u;t=a;do r>=t.x&&t.x>=l&&r!==t.x&&hn(o<d?r:n,o,l,d,o<d?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Kn(t,i)&&(u<c||u===c&&(t.x>a.x||t.x===a.x&&D1(a,t)))&&(a=t,c=u)),t=t.next;while(t!==s);return a}function D1(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function F1(i,e,t,r){let o=i;do o.z===null&&(o.z=ps(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,U1(o)}function U1(i){let e,t,r,o,n,a,s,l,d=1;do{for(t=i,i=null,n=null,a=0;t;){for(a++,r=t,s=0,e=0;e<d&&(s++,r=r.nextZ,!!r);e++);for(l=d;s>0||l>0&&r;)s!==0&&(l===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,s--):(o=r,r=r.nextZ,l--),n?n.nextZ=o:i=o,o.prevZ=n,n=o;t=r}n.nextZ=null,d*=2}while(a>1);return i}function ps(i,e,t,r,o){return i=32767*(i-t)*o,e=32767*(e-r)*o,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function V1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hn(i,e,t,r,o,n,a,s){return(o-a)*(e-s)-(i-a)*(n-s)>=0&&(i-a)*(r-s)-(t-a)*(e-s)>=0&&(t-a)*(n-s)-(o-a)*(r-s)>=0}function H1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!X1(i,e)&&(Kn(i,e)&&Kn(e,i)&&k1(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||Qi(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qi(i,e){return i.x===e.x&&i.y===e.y}function fc(i,e,t,r){const o=Ji(Ct(i,e,t)),n=Ji(Ct(i,e,r)),a=Ji(Ct(t,r,i)),s=Ji(Ct(t,r,e));return!!(o!==n&&a!==s||o===0&&Yi(i,t,e)||n===0&&Yi(i,r,e)||a===0&&Yi(t,i,r)||s===0&&Yi(t,e,r))}function Yi(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ji(i){return i>0?1:i<0?-1:0}function X1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&fc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Kn(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function k1(i,e){let t=i,r=!1;const o=(i.x+e.x)/2,n=(i.y+e.y)/2;do t.y>n!=t.next.y>n&&t.next.y!==t.y&&o<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==i);return r}function Sc(i,e){const t=new fs(i.i,i.x,i.y),r=new fs(e.i,e.x,e.y),o=i.next,n=e.prev;return i.next=e,e.prev=i,t.next=o,o.prev=t,r.next=t,t.prev=r,n.next=r,r.prev=n,r}function vc(i,e,t,r){const o=new fs(i,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function Zn(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fs(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W1(i,e,t,r){let o=0;for(let n=e,a=t-r;n<t;n+=r)o+=(i[a]-i[n])*(i[n+1]+i[a+1]),a=n;return o}class so{static area(e){const t=e.length;let r=0;for(let o=t-1,n=0;n<t;o=n++)r+=e[o].x*e[n].y-e[n].x*e[o].y;return r*.5}static isClockWise(e){return so.area(e)<0}static triangulateShape(e,t){const r=[],o=[],n=[];Mc(e),_c(r,e);let a=e.length;t.forEach(Mc);for(let l=0;l<t.length;l++)o.push(a),a+=t[l].length,_c(r,t[l]);const s=E1.triangulate(r,o);for(let l=0;l<s.length;l+=3)n.push(s.slice(l,l+3));return n}}function Mc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function _c(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class xn extends Pt{constructor(e=new Wn([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],n=[];for(let s=0,l=e.length;s<l;s++){const d=e[s];a(d)}this.setAttribute("position",new Rt(o,3)),this.setAttribute("uv",new Rt(n,2)),this.computeVertexNormals();function a(s){const l=[],d=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,h=t.bevelSize!==void 0?t.bevelSize:x-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,f=t.UVGenerator!==void 0?t.UVGenerator:z1;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let b,y=!1,C,I,T,X;p&&(b=p.getSpacedPoints(c),y=!0,g=!1,C=p.computeFrenetFrames(c,!1),I=new G,T=new G,X=new G),g||(_=0,x=0,h=0,v=0);const q=s.extractPoints(d);let j=q.shape;const B=q.holes;if(!so.isClockWise(j)){j=j.reverse();for(let re=0,le=B.length;re<le;re++){const pe=B[re];so.isClockWise(pe)&&(B[re]=pe.reverse())}}const D=so.triangulateShape(j,B),k=j;for(let re=0,le=B.length;re<le;re++){const pe=B[re];j=j.concat(pe)}function W(re,le,pe){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().multiplyScalar(pe).add(re)}const H=j.length,Z=D.length;function fe(re,le,pe){let Be,Se,$;const P=re.x-le.x,J=re.y-le.y,me=pe.x-re.x,de=pe.y-re.y,Pe=P*P+J*J,He=P*de-J*me;if(Math.abs(He)>Number.EPSILON){const Oe=Math.sqrt(Pe),We=Math.sqrt(me*me+de*de),$e=le.x-J/Oe,R=le.y+P/Oe,ve=pe.x-de/We,ie=pe.y+me/We,Ie=((ve-$e)*de-(ie-R)*me)/(P*de-J*me);Be=$e+P*Ie-re.x,Se=R+J*Ie-re.y;const Ge=Be*Be+Se*Se;if(Ge<=2)return new ue(Be,Se);$=Math.sqrt(Ge/2)}else{let Oe=!1;P>Number.EPSILON?me>Number.EPSILON&&(Oe=!0):P<-Number.EPSILON?me<-Number.EPSILON&&(Oe=!0):Math.sign(J)===Math.sign(de)&&(Oe=!0),Oe?(Be=-J,Se=P,$=Math.sqrt(Pe)):(Be=P,Se=J,$=Math.sqrt(Pe/2))}return new ue(Be/$,Se/$)}const we=[];for(let re=0,le=k.length,pe=le-1,Be=re+1;re<le;re++,pe++,Be++)pe===le&&(pe=0),Be===le&&(Be=0),we[re]=fe(k[re],k[pe],k[Be]);const Le=[];let Me,Xe=we.concat();for(let re=0,le=B.length;re<le;re++){const pe=B[re];Me=[];for(let Be=0,Se=pe.length,$=Se-1,P=Be+1;Be<Se;Be++,$++,P++)$===Se&&($=0),P===Se&&(P=0),Me[Be]=fe(pe[Be],pe[$],pe[P]);Le.push(Me),Xe=Xe.concat(Me)}for(let re=0;re<_;re++){const le=re/_,pe=x*Math.cos(le*Math.PI/2),Be=h*Math.sin(le*Math.PI/2)+v;for(let Se=0,$=k.length;Se<$;Se++){const P=W(k[Se],we[Se],Be);Re(P.x,P.y,-pe)}for(let Se=0,$=B.length;Se<$;Se++){const P=B[Se];Me=Le[Se];for(let J=0,me=P.length;J<me;J++){const de=W(P[J],Me[J],Be);Re(de.x,de.y,-pe)}}}const se=h+v;for(let re=0;re<H;re++){const le=g?W(j[re],Xe[re],se):j[re];y?(T.copy(C.normals[0]).multiplyScalar(le.x),I.copy(C.binormals[0]).multiplyScalar(le.y),X.copy(b[0]).add(T).add(I),Re(X.x,X.y,X.z)):Re(le.x,le.y,0)}for(let re=1;re<=c;re++)for(let le=0;le<H;le++){const pe=g?W(j[le],Xe[le],se):j[le];y?(T.copy(C.normals[re]).multiplyScalar(pe.x),I.copy(C.binormals[re]).multiplyScalar(pe.y),X.copy(b[re]).add(T).add(I),Re(X.x,X.y,X.z)):Re(pe.x,pe.y,u/c*re)}for(let re=_-1;re>=0;re--){const le=re/_,pe=x*Math.cos(le*Math.PI/2),Be=h*Math.sin(le*Math.PI/2)+v;for(let Se=0,$=k.length;Se<$;Se++){const P=W(k[Se],we[Se],Be);Re(P.x,P.y,u+pe)}for(let Se=0,$=B.length;Se<$;Se++){const P=B[Se];Me=Le[Se];for(let J=0,me=P.length;J<me;J++){const de=W(P[J],Me[J],Be);y?Re(de.x,de.y+b[c-1].y,b[c-1].x+pe):Re(de.x,de.y,u+pe)}}}xe(),Ne();function xe(){const re=o.length/3;if(g){let le=0,pe=H*le;for(let Be=0;Be<Z;Be++){const Se=D[Be];Ve(Se[2]+pe,Se[1]+pe,Se[0]+pe)}le=c+_*2,pe=H*le;for(let Be=0;Be<Z;Be++){const Se=D[Be];Ve(Se[0]+pe,Se[1]+pe,Se[2]+pe)}}else{for(let le=0;le<Z;le++){const pe=D[le];Ve(pe[2],pe[1],pe[0])}for(let le=0;le<Z;le++){const pe=D[le];Ve(pe[0]+H*c,pe[1]+H*c,pe[2]+H*c)}}r.addGroup(re,o.length/3-re,0)}function Ne(){const re=o.length/3;let le=0;ee(k,le),le+=k.length;for(let pe=0,Be=B.length;pe<Be;pe++){const Se=B[pe];ee(Se,le),le+=Se.length}r.addGroup(re,o.length/3-re,1)}function ee(re,le){let pe=re.length;for(;--pe>=0;){const Be=pe;let Se=pe-1;Se<0&&(Se=re.length-1);for(let $=0,P=c+_*2;$<P;$++){const J=H*$,me=H*($+1),de=le+Be+J,Pe=le+Se+J,He=le+Se+me,Oe=le+Be+me;_e(de,Pe,He,Oe)}}}function Re(re,le,pe){l.push(re),l.push(le),l.push(pe)}function Ve(re,le,pe){be(re),be(le),be(pe);const Be=o.length/3,Se=f.generateTopUV(r,o,Be-3,Be-2,Be-1);ke(Se[0]),ke(Se[1]),ke(Se[2])}function _e(re,le,pe,Be){be(re),be(le),be(Be),be(le),be(pe),be(Be);const Se=o.length/3,$=f.generateSideWallUV(r,o,Se-6,Se-3,Se-2,Se-1);ke($[0]),ke($[1]),ke($[3]),ke($[1]),ke($[2]),ke($[3])}function be(re){o.push(l[re*3+0]),o.push(l[re*3+1]),o.push(l[re*3+2])}function ke(re){n.push(re.x),n.push(re.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return K1(t,r,e)}static fromJSON(e,t){const r=[];for(let n=0,a=e.shapes.length;n<a;n++){const s=t[e.shapes[n]];r.push(s)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new xc[o.type]().fromJSON(o)),new xn(r,e.options)}}const z1={generateTopUV:function(i,e,t,r,o){const n=e[t*3],a=e[t*3+1],s=e[r*3],l=e[r*3+1],d=e[o*3],c=e[o*3+1];return[new ue(n,a),new ue(s,l),new ue(d,c)]},generateSideWallUV:function(i,e,t,r,o,n){const a=e[t*3],s=e[t*3+1],l=e[t*3+2],d=e[r*3],c=e[r*3+1],u=e[r*3+2],g=e[o*3],x=e[o*3+1],h=e[o*3+2],v=e[n*3],_=e[n*3+1],p=e[n*3+2];return Math.abs(s-c)<Math.abs(a-d)?[new ue(a,1-l),new ue(d,1-u),new ue(g,1-h),new ue(v,1-p)]:[new ue(s,1-l),new ue(c,1-u),new ue(x,1-h),new ue(_,1-p)]}};function K1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let r=0,o=i.length;r<o;r++){const n=i[r];t.shapes.push(n.uuid)}else t.shapes.push(i.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ss extends Pt{constructor(e=new Wn([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],n=[],a=[];let s=0,l=0;if(Array.isArray(e)===!1)d(e);else for(let c=0;c<e.length;c++)d(e[c]),this.addGroup(s,l,c),s+=l,l=0;this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(n,3)),this.setAttribute("uv",new Rt(a,2));function d(c){const u=o.length/3,g=c.extractPoints(t);let x=g.shape;const h=g.holes;so.isClockWise(x)===!1&&(x=x.reverse());for(let _=0,p=h.length;_<p;_++){const f=h[_];so.isClockWise(f)===!0&&(h[_]=f.reverse())}const v=so.triangulateShape(x,h);for(let _=0,p=h.length;_<p;_++){const f=h[_];x=x.concat(f)}for(let _=0,p=x.length;_<p;_++){const f=x[_];o.push(f.x,f.y,0),n.push(0,0,1),a.push(f.x,f.y)}for(let _=0,p=v.length;_<p;_++){const f=v[_],b=f[0]+u,y=f[1]+u,C=f[2]+u;r.push(b,y,C),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Z1(t,e)}static fromJSON(e,t){const r=[];for(let o=0,n=e.shapes.length;o<n;o++){const a=t[e.shapes[o]];r.push(a)}return new Ss(r,e.curveSegments)}}function Z1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,r=i.length;t<r;t++){const o=i[t];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e}class Ac extends Pt{constructor(e=1,t=.4,r=8,o=6,n=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:n},r=Math.floor(r),o=Math.floor(o);const a=[],s=[],l=[],d=[],c=new G,u=new G,g=new G;for(let x=0;x<=r;x++)for(let h=0;h<=o;h++){const v=h/o*n,_=x/r*Math.PI*2;u.x=(e+t*Math.cos(_))*Math.cos(v),u.y=(e+t*Math.cos(_))*Math.sin(v),u.z=t*Math.sin(_),s.push(u.x,u.y,u.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),g.subVectors(u,c).normalize(),l.push(g.x,g.y,g.z),d.push(h/o),d.push(x/r)}for(let x=1;x<=r;x++)for(let h=1;h<=o;h++){const v=(o+1)*x+h-1,_=(o+1)*(x-1)+h-1,p=(o+1)*(x-1)+h,f=(o+1)*x+h;a.push(v,_,f),a.push(_,p,f)}this.setIndex(a),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(d,2))}static fromJSON(e){return new Ac(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Q1 extends Ht{constructor(e){super();this.type="ShadowMaterial",this.color=new Ce(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Q1.prototype.isShadowMaterial=!0;class Qn extends Ht{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Qn.prototype.isMeshStandardMaterial=!0;class yo extends Qn{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dr(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}yo.prototype.isMeshPhysicalMaterial=!0;class Y1 extends Ht{constructor(e){super();this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ii,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Y1.prototype.isMeshPhongMaterial=!0;class J1 extends Ht{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}J1.prototype.isMeshToonMaterial=!0;class j1 extends Ht{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}j1.prototype.isMeshNormalMaterial=!0;class q1 extends Ht{constructor(e){super();this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ii,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}q1.prototype.isMeshLambertMaterial=!0;class ef extends Ht{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ce(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}ef.prototype.isMeshMatcapMaterial=!0;class tf extends gn{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}tf.prototype.isLineDashedMaterial=!0;const Lt={arraySlice:function(i,e,t){return Lt.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(o,n){return i[o]-i[n]}const t=i.length,r=new Array(t);for(let o=0;o!==t;++o)r[o]=o;return r.sort(e),r},sortedArray:function(i,e,t){const r=i.length,o=new i.constructor(r);for(let n=0,a=0;a!==r;++n){const s=t[n]*e;for(let l=0;l!==e;++l)o[a++]=i[s+l]}return o},flattenJSON:function(i,e,t,r){let o=1,n=i[0];for(;n!==void 0&&n[r]===void 0;)n=i[o++];if(n===void 0)return;let a=n[r];if(a!==void 0)if(Array.isArray(a))do a=n[r],a!==void 0&&(e.push(n.time),t.push.apply(t,a)),n=i[o++];while(n!==void 0);else if(a.toArray!==void 0)do a=n[r],a!==void 0&&(e.push(n.time),a.toArray(t,t.length)),n=i[o++];while(n!==void 0);else do a=n[r],a!==void 0&&(e.push(n.time),t.push(a)),n=i[o++];while(n!==void 0)},subclip:function(i,e,t,r,o=30){const n=i.clone();n.name=e;const a=[];for(let l=0;l<n.tracks.length;++l){const d=n.tracks[l],c=d.getValueSize(),u=[],g=[];for(let x=0;x<d.times.length;++x){const h=d.times[x]*o;if(!(h<t||h>=r)){u.push(d.times[x]);for(let v=0;v<c;++v)g.push(d.values[x*c+v])}}u.length!==0&&(d.times=Lt.convertArray(u,d.times.constructor),d.values=Lt.convertArray(g,d.values.constructor),a.push(d))}n.tracks=a;let s=1/0;for(let l=0;l<n.tracks.length;++l)s>n.tracks[l].times[0]&&(s=n.tracks[l].times[0]);for(let l=0;l<n.tracks.length;++l)n.tracks[l].shift(-1*s);return n.resetDuration(),n},makeClipAdditive:function(i,e=0,t=i,r=30){r<=0&&(r=30);const o=t.tracks.length,n=e/r;for(let a=0;a<o;++a){const s=t.tracks[a],l=s.ValueTypeName;if(l==="bool"||l==="string")continue;const d=i.tracks.find(function(p){return p.name===s.name&&p.ValueTypeName===l});if(d===void 0)continue;let c=0;const u=s.getValueSize();s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=u/3);let g=0;const x=d.getValueSize();d.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(g=x/3);const h=s.times.length-1;let v;if(n<=s.times[0]){const p=c,f=u-c;v=Lt.arraySlice(s.values,p,f)}else if(n>=s.times[h]){const p=h*u+c,f=p+u-c;v=Lt.arraySlice(s.values,p,f)}else{const p=s.createInterpolant(),f=c,b=u-c;p.evaluate(n),v=Lt.arraySlice(p.resultBuffer,f,b)}l==="quaternion"&&new Zt().fromArray(v).normalize().conjugate().toArray(v);const _=d.times.length;for(let p=0;p<_;++p){const f=p*x+g;if(l==="quaternion")Zt.multiplyQuaternionsFlat(d.values,f,v,0,d.values,f);else{const b=x-g*2;for(let y=0;y<b;++y)d.values[f+y]-=v[y]}}}return i.blendMode=Nl,i}};class Ur{constructor(e,t,r,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,o=t[r],n=t[r-1];e:{t:{let a;r:{o:if(!(e<o)){for(let s=r+2;;){if(o===void 0){if(e<n)break o;return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,e,n)}if(r===s)break;if(n=o,o=t[++r],e<o)break t}a=t.length;break r}if(!(e>=n)){const s=t[1];e<s&&(r=2,n=s);for(let l=r-2;;){if(n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,o);if(r===l)break;if(o=n,n=t[--r-1],e>=n)break t}a=r,r=0;break r}break e}for(;r<a;){const s=r+a>>>1;e<t[s]?a=s:r=s+1}if(o=t[r],n=t[r-1],n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,o);if(o===void 0)return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,n,e)}this._cachedIndex=r,this.intervalChanged_(r,n,o)}return this.interpolate_(r,n,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,o=this.valueSize,n=e*o;for(let a=0;a!==o;++a)t[a]=r[n+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Ur.prototype.beforeStart_=Ur.prototype.copySampleValue_;Ur.prototype.afterEnd_=Ur.prototype.copySampleValue_;class rf extends Ur{constructor(e,t,r,o){super(e,t,r,o);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oo,endingEnd:Oo}}intervalChanged_(e,t,r){const o=this.parameterPositions;let n=e-2,a=e+1,s=o[n],l=o[a];if(s===void 0)switch(this.getSettings_().endingStart){case Do:n=e,s=2*t-r;break;case ci:n=o.length-2,s=t+o[n]-o[n+1];break;default:n=e,s=r}if(l===void 0)switch(this.getSettings_().endingEnd){case Do:a=e,l=2*r-t;break;case ci:a=1,l=r+o[1]-o[0];break;default:a=e-1,l=t}const d=(r-t)*.5,c=this.valueSize;this._weightPrev=d/(t-s),this._weightNext=d/(l-r),this._offsetPrev=n*c,this._offsetNext=a*c}interpolate_(e,t,r,o){const n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s,d=l-s,c=this._offsetPrev,u=this._offsetNext,g=this._weightPrev,x=this._weightNext,h=(r-t)/(o-t),v=h*h,_=v*h,p=-g*_+2*g*v-g*h,f=(1+g)*_+(-1.5-2*g)*v+(-.5+g)*h+1,b=(-1-x)*_+(1.5+x)*v+.5*h,y=x*_-x*v;for(let C=0;C!==s;++C)n[C]=p*a[c+C]+f*a[d+C]+b*a[l+C]+y*a[u+C];return n}}class Tc extends Ur{constructor(e,t,r,o){super(e,t,r,o)}interpolate_(e,t,r,o){const n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s,d=l-s,c=(r-t)/(o-t),u=1-c;for(let g=0;g!==s;++g)n[g]=a[d+g]*u+a[l+g]*c;return n}}class of extends Ur{constructor(e,t,r,o){super(e,t,r,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class wr{constructor(e,t,r,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lt.convertArray(t,this.TimeBufferType),this.values=Lt.convertArray(r,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Lt.convertArray(e.times,Array),values:Lt.convertArray(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(r.interpolation=o)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wn:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wn;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,o=t.length;r!==o;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,o=t.length;r!==o;++r)t[r]*=e}return this}trim(e,t){const r=this.times,o=r.length;let n=0,a=o-1;for(;n!==o&&r[n]<e;)++n;for(;a!==-1&&r[a]>t;)--a;if(++a,n!==0||a!==o){n>=a&&(a=Math.max(a,1),n=a-1);const s=this.getValueSize();this.times=Lt.arraySlice(r,n,a),this.values=Lt.arraySlice(this.values,n*s,a*s)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,o=this.values,n=r.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==n;s++){const l=r[s];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,l,a),e=!1;break}a=l}if(o!==void 0&&Lt.isTypedArray(o))for(let s=0,l=o.length;s!==l;++s){const d=o[s];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,d),e=!1;break}}return e}optimize(){const e=Lt.arraySlice(this.times),t=Lt.arraySlice(this.values),r=this.getValueSize(),o=this.getInterpolation()===ga,n=e.length-1;let a=1;for(let s=1;s<n;++s){let l=!1;const d=e[s],c=e[s+1];if(d!==c&&(s!==1||d!==e[0]))if(o)l=!0;else{const u=s*r,g=u-r,x=u+r;for(let h=0;h!==r;++h){const v=t[u+h];if(v!==t[g+h]||v!==t[x+h]){l=!0;break}}}if(l){if(s!==a){e[a]=e[s];const u=s*r,g=a*r;for(let x=0;x!==r;++x)t[g+x]=t[u+x]}++a}}if(n>0){e[a]=e[n];for(let s=n*r,l=a*r,d=0;d!==r;++d)t[l+d]=t[s+d];++a}return a!==e.length?(this.times=Lt.arraySlice(e,0,a),this.values=Lt.arraySlice(t,0,a*r)):(this.times=e,this.values=t),this}clone(){const e=Lt.arraySlice(this.times,0),t=Lt.arraySlice(this.values,0),r=this.constructor,o=new r(this.name,e,t);return o.createInterpolant=this.createInterpolant,o}}wr.prototype.TimeBufferType=Float32Array;wr.prototype.ValueBufferType=Float32Array;wr.prototype.DefaultInterpolation=Ro;class pn extends wr{}pn.prototype.ValueTypeName="bool";pn.prototype.ValueBufferType=Array;pn.prototype.DefaultInterpolation=wn;pn.prototype.InterpolantFactoryMethodLinear=void 0;pn.prototype.InterpolantFactoryMethodSmooth=void 0;class yc extends wr{}yc.prototype.ValueTypeName="color";class Yn extends wr{}Yn.prototype.ValueTypeName="number";class nf extends Ur{constructor(e,t,r,o){super(e,t,r,o)}interpolate_(e,t,r,o){const n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=(r-t)/(o-t);let d=e*s;for(let c=d+s;d!==c;d+=4)Zt.slerpFlat(n,0,a,d-s,a,d,l);return n}}class bo extends wr{InterpolantFactoryMethodLinear(e){return new nf(this.times,this.values,this.getValueSize(),e)}}bo.prototype.ValueTypeName="quaternion";bo.prototype.DefaultInterpolation=Ro;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class fn extends wr{}fn.prototype.ValueTypeName="string";fn.prototype.ValueBufferType=Array;fn.prototype.DefaultInterpolation=wn;fn.prototype.InterpolantFactoryMethodLinear=void 0;fn.prototype.InterpolantFactoryMethodSmooth=void 0;class Jn extends wr{}Jn.prototype.ValueTypeName="vector";class vs{constructor(e,t=-1,r,o=ha){this.name=e,this.tracks=r,this.duration=t,this.blendMode=o,this.uuid=gr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,o=1/(e.fps||1);for(let a=0,s=r.length;a!==s;++a)t.push(sf(r[a]).scale(o));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],r=e.tracks,o={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,a=r.length;n!==a;++n)t.push(wr.toJSON(r[n]));return o}static CreateFromMorphTargetSequence(e,t,r,o){const n=t.length,a=[];for(let s=0;s<n;s++){let l=[],d=[];l.push((s+n-1)%n,s,(s+1)%n),d.push(0,1,0);const c=Lt.getKeyframeOrder(l);l=Lt.sortedArray(l,1,c),d=Lt.sortedArray(d,1,c),!o&&l[0]===0&&(l.push(n),d.push(d[0])),a.push(new Yn(".morphTargetInfluences["+t[s].name+"]",l,d).scale(1/r))}return new this(e,-1,a)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const o=e;r=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<r.length;o++)if(r[o].name===t)return r[o];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const o={},n=/^([\w-]*?)([\d]+)$/;for(let s=0,l=e.length;s<l;s++){const d=e[s],c=d.name.match(n);if(c&&c.length>1){const u=c[1];let g=o[u];g||(o[u]=g=[]),g.push(d)}}const a=[];for(const s in o)a.push(this.CreateFromMorphTargetSequence(s,o[s],t,r));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const r=function(u,g,x,h,v){if(x.length!==0){const _=[],p=[];Lt.flattenJSON(x,_,p,h),_.length!==0&&v.push(new u(g,_,p))}},o=[],n=e.name||"default",a=e.fps||30,s=e.blendMode;let l=e.length||-1;const d=e.hierarchy||[];for(let u=0;u<d.length;u++){const g=d[u].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const x={};let h;for(h=0;h<g.length;h++)if(g[h].morphTargets)for(let v=0;v<g[h].morphTargets.length;v++)x[g[h].morphTargets[v]]=-1;for(const v in x){const _=[],p=[];for(let f=0;f!==g[h].morphTargets.length;++f){const b=g[h];_.push(b.time),p.push(b.morphTarget===v?1:0)}o.push(new Yn(".morphTargetInfluence["+v+"]",_,p))}l=x.length*(a||1)}else{const x=".bones["+t[u].name+"]";r(Jn,x+".position",g,"pos",o),r(bo,x+".quaternion",g,"rot",o),r(Jn,x+".scale",g,"scl",o)}}return o.length===0?null:new this(n,l,o,s)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,o=e.length;r!==o;++r){const n=this.tracks[r];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function af(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yn;case"vector":case"vector2":case"vector3":case"vector4":return Jn;case"color":return yc;case"quaternion":return bo;case"bool":case"boolean":return pn;case"string":return fn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function sf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=af(i.type);if(i.times===void 0){const t=[],r=[];Lt.flattenJSON(i.keys,t,r,"value"),i.times=t,i.values=r}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Sn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lf{constructor(e,t,r){const o=this;let n=!1,a=0,s=0,l;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(c){s++,n===!1&&o.onStart!==void 0&&o.onStart(c,a,s),n=!0},this.itemEnd=function(c){a++,o.onProgress!==void 0&&o.onProgress(c,a,s),a===s&&(n=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(c){o.onError!==void 0&&o.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return d.push(c,u),this},this.removeHandler=function(c){const u=d.indexOf(c);return u!==-1&&d.splice(u,2),this},this.getHandler=function(c){for(let u=0,g=d.length;u<g;u+=2){const x=d[u],h=d[u+1];if(x.global&&(x.lastIndex=0),x.test(c))return h}return null}}}const df=new lf;class Vr{constructor(e){this.manager=e!==void 0?e:df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,n){r.load(e,o,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Hr={};class Ms extends Vr{constructor(e){super(e)}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=Sn.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Hr[e]!==void 0){Hr[e].push({onLoad:t,onProgress:r,onError:o});return}Hr[e]=[],Hr[e].push({onLoad:t,onProgress:r,onError:o});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(s=>{if(s.status===200||s.status===0){s.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=Hr[e],d=s.body.getReader(),c=s.headers.get("Content-Length"),u=c?parseInt(c):0,g=u!==0;let x=0;return new ReadableStream({start(h){v();function v(){d.read().then(({done:_,value:p})=>{if(_)h.close();else{x+=p.byteLength;const f=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:u});for(let b=0,y=l.length;b<y;b++){const C=l[b];C.onProgress&&C.onProgress(f)}h.enqueue(p),v()}})}}})}else throw Error(`fetch for "${s.url}" responded with ${s.status}: ${s.statusText}`)}).then(s=>{const l=new Response(s);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,this.mimeType));case"json":return l.json();default:return l.text()}}).then(s=>{Sn.add(e,s);const l=Hr[e];delete Hr[e];for(let d=0,c=l.length;d<c;d++){const u=l[d];u.onLoad&&u.onLoad(s)}this.manager.itemEnd(e)}).catch(s=>{const l=Hr[e];delete Hr[e];for(let d=0,c=l.length;d<c;d++){const u=l[d];u.onError&&u.onError(s)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bc extends Vr{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=Sn.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;const s=gi("img");function l(){c(),Sn.add(e,this),t&&t(this),n.manager.itemEnd(e)}function d(u){c(),o&&o(u),n.manager.itemError(e),n.manager.itemEnd(e)}function c(){s.removeEventListener("load",l,!1),s.removeEventListener("error",d,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",d,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),n.manager.itemStart(e),s.src=e,s}}class cf extends Vr{constructor(e){super(e)}load(e,t,r,o){const n=new $i,a=new bc(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let s=0;function l(d){a.load(e[d],function(c){n.images[d]=c,s++,s===6&&(n.needsUpdate=!0,t&&t(n))},void 0,o)}for(let d=0;d<e.length;++d)l(d);return n}}class Pc extends Vr{constructor(e){super(e)}load(e,t,r,o){const n=new Vt,a=new bc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){n.image=s,n.needsUpdate=!0,t!==void 0&&t(n)},r,o),n}}class Lr extends ft{constructor(e,t=1){super();this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Lr.prototype.isLight=!0;class mf extends Lr{constructor(e,t,r){super(e,r);this.type="HemisphereLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e){return Lr.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}mf.prototype.isHemisphereLight=!0;const wc=new Fe,Lc=new G,Ec=new G;class _s{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ec),t.updateMatrixWorld(),wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(t.projectionMatrix),r.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $c extends _s{constructor(){super(new nr(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,r=$n*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(r!==t.fov||o!==t.aspect||n!==t.far)&&(t.fov=r,t.aspect=o,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}$c.prototype.isSpotLightShadow=!0;class Cc extends Lr{constructor(e,t,r=0,o=Math.PI/3,n=0,a=1){super(e,t);this.type="SpotLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.target=new ft,this.distance=r,this.angle=o,this.penumbra=n,this.decay=a,this.shadow=new $c}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Cc.prototype.isSpotLight=!0;const Gc=new Fe,jn=new G,As=new G;class Nc extends _s{constructor(){super(new nr(90,1,.5,500));this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,n=e.distance||r.far;n!==r.far&&(r.far=n,r.updateProjectionMatrix()),jn.setFromMatrixPosition(e.matrixWorld),r.position.copy(jn),As.copy(r.position),As.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(As),r.updateMatrixWorld(),o.makeTranslation(-jn.x,-jn.y,-jn.z),Gc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc)}}Nc.prototype.isPointLightShadow=!0;class Bc extends Lr{constructor(e,t,r=0,o=1){super(e,t);this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Nc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Bc.prototype.isPointLight=!0;class Ic extends _s{constructor(){super(new Ni(-5,5,5,-5,.5,500))}}Ic.prototype.isDirectionalLightShadow=!0;class Rc extends Lr{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.target=new ft,this.shadow=new Ic}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Rc.prototype.isDirectionalLight=!0;class uf extends Lr{constructor(e,t){super(e,t);this.type="AmbientLight"}}uf.prototype.isAmbientLight=!0;class gf extends Lr{constructor(e,t,r=10,o=10){super(e,t);this.type="RectAreaLight",this.width=r,this.height=o}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}gf.prototype.isRectAreaLight=!0;class Oc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new G)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const r=e.x,o=e.y,n=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*o),t.addScaledVector(a[2],.488603*n),t.addScaledVector(a[3],.488603*r),t.addScaledVector(a[4],1.092548*(r*o)),t.addScaledVector(a[5],1.092548*(o*n)),t.addScaledVector(a[6],.315392*(3*n*n-1)),t.addScaledVector(a[7],1.092548*(r*n)),t.addScaledVector(a[8],.546274*(r*r-o*o)),t}getIrradianceAt(e,t){const r=e.x,o=e.y,n=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*o),t.addScaledVector(a[2],2*.511664*n),t.addScaledVector(a[3],2*.511664*r),t.addScaledVector(a[4],2*.429043*r*o),t.addScaledVector(a[5],2*.429043*o*n),t.addScaledVector(a[6],.743125*n*n-.247708),t.addScaledVector(a[7],2*.429043*r*n),t.addScaledVector(a[8],.429043*(r*r-o*o)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let r=0;r<9;r++)this.coefficients[r].addScaledVector(e.coefficients[r],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let r=0;r<9;r++)this.coefficients[r].lerp(e.coefficients[r],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const r=this.coefficients;for(let o=0;o<9;o++)r[o].fromArray(e,t+o*3);return this}toArray(e=[],t=0){const r=this.coefficients;for(let o=0;o<9;o++)r[o].toArray(e,t+o*3);return e}static getBasisAt(e,t){const r=e.x,o=e.y,n=e.z;t[0]=.282095,t[1]=.488603*o,t[2]=.488603*n,t[3]=.488603*r,t[4]=1.092548*r*o,t[5]=1.092548*o*n,t[6]=.315392*(3*n*n-1),t[7]=1.092548*r*n,t[8]=.546274*(r*r-o*o)}}Oc.prototype.isSphericalHarmonics3=!0;class Ts extends Lr{constructor(e=new Oc,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Ts.prototype.isLightProbe=!0;class lo{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let r=0,o=e.length;r<o;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hf extends Pt{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}hf.prototype.isInstancedBufferGeometry=!0;class Dc extends Vr{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=Sn.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;const s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(l){Sn.add(e,l),t&&t(l),n.manager.itemEnd(e)}).catch(function(l){o&&o(l),n.manager.itemError(e),n.manager.itemEnd(e)}),n.manager.itemStart(e)}}Dc.prototype.isImageBitmapLoader=!0;let ji;const xf={getContext:function(){return ji===void 0&&(ji=new(window.AudioContext||window.webkitAudioContext)),ji},setContext:function(i){ji=i}};class pf extends Vr{constructor(e){super(e)}load(e,t,r,o){const n=this,a=new Ms(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(s){try{const l=s.slice(0);xf.getContext().decodeAudioData(l,function(c){t(c)})}catch(l){o?o(l):console.error(l),n.manager.itemError(e)}},r,o)}}class ff extends Ts{constructor(e,t,r=1){super(void 0,r);const o=new Ce().set(e),n=new Ce().set(t),a=new G(o.r,o.g,o.b),s=new G(n.r,n.g,n.b),l=Math.sqrt(Math.PI),d=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(s).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(s).multiplyScalar(d)}}ff.prototype.isHemisphereLightProbe=!0;class Sf extends Ts{constructor(e,t=1){super(void 0,t);const r=new Ce().set(e);this.sh.coefficients[0].set(r.r,r.g,r.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Sf.prototype.isAmbientLightProbe=!0;class T6{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fc(){return(typeof performance=="undefined"?Date:performance).now()}class vf extends ft{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Mf{constructor(e,t,r){this.binding=e,this.valueSize=r;let o,n,a;switch(t){case"quaternion":o=this._slerp,n=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(r*6),this._workIndex=5;break;case"string":case"bool":o=this._select,n=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(r*5);break;default:o=this._lerp,n=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(r*5)}this._mixBufferRegion=o,this._mixBufferRegionAdditive=n,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const r=this.buffer,o=this.valueSize,n=e*o+o;let a=this.cumulativeWeight;if(a===0){for(let s=0;s!==o;++s)r[n+s]=r[s];a=t}else{a+=t;const s=t/a;this._mixBufferRegion(r,n,0,s,o)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,r=this.valueSize,o=r*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,o,0,e,r),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,r=this.buffer,o=e*t+t,n=this.cumulativeWeight,a=this.cumulativeWeightAdditive,s=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,n<1){const l=t*this._origIndex;this._mixBufferRegion(r,o,l,1-n,t)}a>0&&this._mixBufferRegionAdditive(r,o,this._addIndex*t,1,t);for(let l=t,d=t+t;l!==d;++l)if(r[l]!==r[l+t]){s.setValue(r,o);break}}saveOriginalState(){const e=this.binding,t=this.buffer,r=this.valueSize,o=r*this._origIndex;e.getValue(t,o);for(let n=r,a=o;n!==a;++n)t[n]=t[o+n%r];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let r=e;r<t;r++)this.buffer[r]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let r=0;r<this.valueSize;r++)this.buffer[t+r]=this.buffer[e+r]}_select(e,t,r,o,n){if(o>=.5)for(let a=0;a!==n;++a)e[t+a]=e[r+a]}_slerp(e,t,r,o){Zt.slerpFlat(e,t,e,t,e,r,o)}_slerpAdditive(e,t,r,o,n){const a=this._workIndex*n;Zt.multiplyQuaternionsFlat(e,a,e,t,e,r),Zt.slerpFlat(e,t,e,t,e,a,o)}_lerp(e,t,r,o,n){const a=1-o;for(let s=0;s!==n;++s){const l=t+s;e[l]=e[l]*a+e[r+s]*o}}_lerpAdditive(e,t,r,o,n){for(let a=0;a!==n;++a){const s=t+a;e[s]=e[s]+e[r+a]*o}}}const ys="\\[\\]\\.:\\/",_f=new RegExp("["+ys+"]","g"),bs="[^"+ys+"]",Af="[^"+ys.replace("\\.","")+"]",Tf=/((?:WC+[\/:])*)/.source.replace("WC",bs),yf=/(WCOD+)?/.source.replace("WCOD",Af),bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bs),Pf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bs),wf=new RegExp("^"+Tf+yf+bf+Pf+"$"),Lf=["material","materials","bones"];class Ef{constructor(e,t,r){const o=r||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,o=this._bindings[r];o!==void 0&&o.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let o=this._targetGroup.nCachedObjects_,n=r.length;o!==n;++o)r[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class St{constructor(e,t,r){this.path=t,this.parsedPath=r||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,r):new St(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_f,"")}static parseTrackName(e){const t=wf.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const n=r.nodeName.substring(o+1);Lf.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(n){for(let a=0;a<n.length;a++){const s=n[a];if(s.name===t||s.uuid===t)return s;const l=r(s.children);if(l)return l}return null},o=r(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let o=0,n=r.length;o!==n;++o)e[t++]=r[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let o=0,n=r.length;o!==n;++o)r[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let o=0,n=r.length;o!==n;++o)r[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let o=0,n=r.length;o!==n;++o)r[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,o=t.propertyName;let n=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(r){let d=t.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===d){d=c;break}break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const a=e[o];if(a===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=n}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=Ef;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $f{constructor(e,t,r=null,o=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=r,this.blendMode=o;const n=t.tracks,a=n.length,s=new Array(a),l={endingStart:Oo,endingEnd:Oo};for(let d=0;d!==a;++d){const c=n[d].createInterpolant(null);s[d]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=s,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ag,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,r){if(e.fadeOut(t),this.fadeIn(t),r){const o=this._clip.duration,n=e._clip.duration,a=n/o,s=o/n;e.warp(1,a,t),this.warp(s,1,t)}return this}crossFadeTo(e,t,r){return e.crossFadeFrom(this,t,r)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,r){const o=this._mixer,n=o.time,a=this.timeScale;let s=this._timeScaleInterpolant;s===null&&(s=o._lendControlInterpolant(),this._timeScaleInterpolant=s);const l=s.parameterPositions,d=s.sampleValues;return l[0]=n,l[1]=n+r,d[0]=e/a,d[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,r,o){if(!this.enabled){this._updateWeight(e);return}const n=this._startTime;if(n!==null){const l=(e-n)*r;if(l<0||r===0)return;this._startTime=null,t=r*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),s=this._updateWeight(e);if(s>0){const l=this._interpolants,d=this._propertyBindings;switch(this.blendMode){case Nl:for(let c=0,u=l.length;c!==u;++c)l[c].evaluate(a),d[c].accumulateAdditive(s);break;case ha:default:for(let c=0,u=l.length;c!==u;++c)l[c].evaluate(a),d[c].accumulate(o,s)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const r=this._weightInterpolant;if(r!==null){const o=r.evaluate(e)[0];t*=o,e>r.parameterPositions[1]&&(this.stopFading(),o===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const r=this._timeScaleInterpolant;r!==null&&(t*=r.evaluate(e)[0],e>r.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,r=this.loop;let o=this.time+e,n=this._loopCount;const a=r===sg;if(e===0)return n===-1?o:a&&(n&1)==1?t-o:o;if(r===ig){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(o>=t)o=t;else if(o<0)o=0;else{this.time=o;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(n===-1&&(e>=0?(n=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),o>=t||o<0){const s=Math.floor(o/t);o-=t*s,n+=Math.abs(s);const l=this.repetitions-n;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,o=e>0?t:0,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const d=e<0;this._setEndings(d,!d,a)}else this._setEndings(!1,!1,a);this._loopCount=n,this.time=o,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}else this.time=o;if(a&&(n&1)==1)return t-o}return o}_setEndings(e,t,r){const o=this._interpolantSettings;r?(o.endingStart=Do,o.endingEnd=Do):(e?o.endingStart=this.zeroSlopeAtStart?Do:Oo:o.endingStart=ci,t?o.endingEnd=this.zeroSlopeAtEnd?Do:Oo:o.endingEnd=ci)}_scheduleFading(e,t,r){const o=this._mixer,n=o.time;let a=this._weightInterpolant;a===null&&(a=o._lendControlInterpolant(),this._weightInterpolant=a);const s=a.parameterPositions,l=a.sampleValues;return s[0]=n,l[0]=t,s[1]=n+e,l[1]=r,this}}class Cf extends Kr{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const r=e._localRoot||this._root,o=e._clip.tracks,n=o.length,a=e._propertyBindings,s=e._interpolants,l=r.uuid,d=this._bindingsByRootAndName;let c=d[l];c===void 0&&(c={},d[l]=c);for(let u=0;u!==n;++u){const g=o[u],x=g.name;let h=c[x];if(h!==void 0)a[u]=h;else{if(h=a[u],h!==void 0){h._cacheIndex===null&&(++h.referenceCount,this._addInactiveBinding(h,l,x));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;h=new Mf(St.create(r,x,v),g.ValueTypeName,g.getValueSize()),++h.referenceCount,this._addInactiveBinding(h,l,x),a[u]=h}s[u].resultBuffer=h.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const r=(e._localRoot||this._root).uuid,o=e._clip.uuid,n=this._actionsByClip[o];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,o,r)}const t=e._propertyBindings;for(let r=0,o=t.length;r!==o;++r){const n=t[r];n.useCount++==0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let r=0,o=t.length;r!==o;++r){const n=t[r];--n.useCount==0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,r){const o=this._actions,n=this._actionsByClip;let a=n[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,n[t]=a;else{const s=a.knownActions;e._byClipCacheIndex=s.length,s.push(e)}e._cacheIndex=o.length,o.push(e),a.actionByRoot[r]=e}_removeInactiveAction(e){const t=this._actions,r=t[t.length-1],o=e._cacheIndex;r._cacheIndex=o,t[o]=r,t.pop(),e._cacheIndex=null;const n=e._clip.uuid,a=this._actionsByClip,s=a[n],l=s.knownActions,d=l[l.length-1],c=e._byClipCacheIndex;d._byClipCacheIndex=c,l[c]=d,l.pop(),e._byClipCacheIndex=null;const u=s.actionByRoot,g=(e._localRoot||this._root).uuid;delete u[g],l.length===0&&delete a[n],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let r=0,o=t.length;r!==o;++r){const n=t[r];--n.referenceCount==0&&this._removeInactiveBinding(n)}}_lendAction(e){const t=this._actions,r=e._cacheIndex,o=this._nActiveActions++,n=t[o];e._cacheIndex=o,t[o]=e,n._cacheIndex=r,t[r]=n}_takeBackAction(e){const t=this._actions,r=e._cacheIndex,o=--this._nActiveActions,n=t[o];e._cacheIndex=o,t[o]=e,n._cacheIndex=r,t[r]=n}_addInactiveBinding(e,t,r){const o=this._bindingsByRootAndName,n=this._bindings;let a=o[t];a===void 0&&(a={},o[t]=a),a[r]=e,e._cacheIndex=n.length,n.push(e)}_removeInactiveBinding(e){const t=this._bindings,r=e.binding,o=r.rootNode.uuid,n=r.path,a=this._bindingsByRootAndName,s=a[o],l=t[t.length-1],d=e._cacheIndex;l._cacheIndex=d,t[d]=l,t.pop(),delete s[n],Object.keys(s).length===0&&delete a[o]}_lendBinding(e){const t=this._bindings,r=e._cacheIndex,o=this._nActiveBindings++,n=t[o];e._cacheIndex=o,t[o]=e,n._cacheIndex=r,t[r]=n}_takeBackBinding(e){const t=this._bindings,r=e._cacheIndex,o=--this._nActiveBindings,n=t[o];e._cacheIndex=o,t[o]=e,n._cacheIndex=r,t[r]=n}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let r=e[t];return r===void 0&&(r=new Tc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),r.__cacheIndex=t,e[t]=r),r}_takeBackControlInterpolant(e){const t=this._controlInterpolants,r=e.__cacheIndex,o=--this._nActiveControlInterpolants,n=t[o];e.__cacheIndex=o,t[o]=e,n.__cacheIndex=r,t[r]=n}clipAction(e,t,r){const o=t||this._root,n=o.uuid;let a=typeof e=="string"?vs.findByName(o,e):e;const s=a!==null?a.uuid:e,l=this._actionsByClip[s];let d=null;if(r===void 0&&(a!==null?r=a.blendMode:r=ha),l!==void 0){const u=l.actionByRoot[n];if(u!==void 0&&u.blendMode===r)return u;d=l.knownActions[0],a===null&&(a=d._clip)}if(a===null)return null;const c=new $f(this,a,t,r);return this._bindAction(c,d),this._addInactiveAction(c,s,n),c}existingAction(e,t){const r=t||this._root,o=r.uuid,n=typeof e=="string"?vs.findByName(r,e):e,a=n?n.uuid:e,s=this._actionsByClip[a];return s!==void 0&&s.actionByRoot[o]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let r=t-1;r>=0;--r)e[r].stop();return this}update(e){e*=this.timeScale;const t=this._actions,r=this._nActiveActions,o=this.time+=e,n=Math.sign(e),a=this._accuIndex^=1;for(let d=0;d!==r;++d)t[d]._update(o,e,n,a);const s=this._bindings,l=this._nActiveBindings;for(let d=0;d!==l;++d)s[d].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,r=e.uuid,o=this._actionsByClip,n=o[r];if(n!==void 0){const a=n.knownActions;for(let s=0,l=a.length;s!==l;++s){const d=a[s];this._deactivateAction(d);const c=d._cacheIndex,u=t[t.length-1];d._cacheIndex=null,d._byClipCacheIndex=null,u._cacheIndex=c,t[c]=u,t.pop(),this._removeInactiveBindingsForAction(d)}delete o[r]}}uncacheRoot(e){const t=e.uuid,r=this._actionsByClip;for(const a in r){const s=r[a].actionByRoot,l=s[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const o=this._bindingsByRootAndName,n=o[t];if(n!==void 0)for(const a in n){const s=n[a];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(e,t){const r=this.existingAction(e,t);r!==null&&(this._deactivateAction(r),this._removeInactiveAction(r))}}Cf.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Gf extends sn{constructor(e,t,r=1){super(e,t);this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Gf.prototype.isInstancedInterleavedBuffer=!0;const co=new G,qi=new Fe,Ps=new Fe;class Nf extends Xi{constructor(e){const t=Uc(e),r=new Pt,o=[],n=[],a=new Ce(0,0,1),s=new Ce(0,1,0);for(let d=0;d<t.length;d++){const c=t[d];c.parent&&c.parent.isBone&&(o.push(0,0,0),o.push(0,0,0),n.push(a.r,a.g,a.b),n.push(s.r,s.g,s.b))}r.setAttribute("position",new Rt(o,3)),r.setAttribute("color",new Rt(n,3));const l=new gn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(r,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,r=this.geometry,o=r.getAttribute("position");Ps.copy(this.root.matrixWorld).invert();for(let n=0,a=0;n<t.length;n++){const s=t[n];s.parent&&s.parent.isBone&&(qi.multiplyMatrices(Ps,s.matrixWorld),co.setFromMatrixPosition(qi),o.setXYZ(a,co.x,co.y,co.z),qi.multiplyMatrices(Ps,s.parent.matrixWorld),co.setFromMatrixPosition(qi),o.setXYZ(a+1,co.x,co.y,co.z),a+=2)}r.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Uc(i){const e=[];i&&i.isBone&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,Uc(i.children[t]));return e}class Bf extends Xi{constructor(e=10,t=10,r=4473924,o=8947848){r=new Ce(r),o=new Ce(o);const n=t/2,a=e/t,s=e/2,l=[],d=[];for(let g=0,x=0,h=-s;g<=t;g++,h+=a){l.push(-s,0,h,s,0,h),l.push(h,0,-s,h,0,s);const v=g===n?r:o;v.toArray(d,x),x+=3,v.toArray(d,x),x+=3,v.toArray(d,x),x+=3,v.toArray(d,x),x+=3}const c=new Pt;c.setAttribute("position",new Rt(l,3)),c.setAttribute("color",new Rt(d,3));const u=new gn({vertexColors:!0,toneMapped:!1});super(c,u);this.type="GridHelper"}}const If=new Float32Array(1);new Int32Array(If.buffer);pr.create=function(i,e){return console.log("THREE.Curve.create() has been deprecated"),i.prototype=Object.create(pr.prototype),i.prototype.constructor=i,i.prototype.getPoint=e,i};xs.prototype.fromPoints=function(i){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(i)};Bf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Nf.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Vr.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),lo.extractUrlBase(i)};Vr.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};hr.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};hr.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};hr.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};hr.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};hr.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};Mo.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Gi.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};Kt.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Kt.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};Kt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Kt.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};Kt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Kt.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Fe.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};Fe.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Fe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new G().setFromMatrixColumn(this,3)};Fe.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};Fe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Fe.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Fe.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Fe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Fe.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};Fe.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Fe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Fe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Fe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Fe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Fe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Fe.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Fe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Fe.prototype.makeFrustum=function(i,e,t,r,o,n){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,r,t,o,n)};Fe.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Fr.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};Zt.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};Zt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};ko.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};ko.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};ko.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};Dt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Dt.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};Dt.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};Dt.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};Dt.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};Dt.barycoordFromPoint=function(i,e,t,r,o){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Dt.getBarycoord(i,e,t,r,o)};Dt.normal=function(i,e,t,r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Dt.getNormal(i,e,t,r)};Wn.prototype.extractAllPoints=function(i){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(i)};Wn.prototype.extrude=function(i){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new xn(this,i)};Wn.prototype.makeGeometry=function(i){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ss(this,i)};ue.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};ue.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};ue.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};G.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};G.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};G.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};G.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};G.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};G.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};G.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};G.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};G.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};_t.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};_t.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ft.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};ft.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};ft.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};ft.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};ft.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(ft.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});or.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(or.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),lg},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});ts.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};nr.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(Lr.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(It.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===mi},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(mi)}}});It.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?mi:Ln),this};It.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},It.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Pt.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};Pt.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new It(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};Pt.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};Pt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Pt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Pt.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};Pt.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Pt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});sn.prototype.setDynamic=function(i){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?mi:Ln),this};sn.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};xn.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};xn.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};xn.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Hd.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Ht.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ce}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===gl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(_o.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});Mt.prototype.clearTarget=function(i,e,t,r){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,r)};Mt.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};Mt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Mt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Mt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Mt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Mt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Mt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Mt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Mt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Mt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Mt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Mt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Mt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Mt.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};Mt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Mt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Mt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Mt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Mt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Mt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Mt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Mt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Mt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Mt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Mt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?Tr:Jt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Ud.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(yr.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});vf.prototype.load=function(i){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new pf().load(i,function(r){e.setBuffer(r)}),this};Xa.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};Xa.prototype.clear=function(i,e,t,r){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,r)};Uo.crossOrigin=void 0;Uo.loadTexture=function(i,e,t,r){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const o=new Pc;o.setCrossOrigin(this.crossOrigin);const n=o.load(i,t,void 0,r);return e&&(n.mapping=e),n};Uo.loadTextureCube=function(i,e,t,r){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const o=new cf;o.setCrossOrigin(this.crossOrigin);const n=o.load(i,t,void 0,r);return e&&(n.mapping=e),n};Uo.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Uo.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);const Rf={type:"change"};class y6 extends Kr{constructor(e,t){super();t===void 0&&(console.warn('THREE.FlyControls: The second parameter "domElement" is now mandatory.'),t=document),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const r=this,o=1e-6,n=new Zt,a=new G;this.tmpQuaternion=new Zt,this.mouseStatus=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new G(0,0,0),this.rotationVector=new G(0,0,0),this.keydown=function(g){if(!g.altKey){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.mousedown=function(g){if(this.dragToLook)this.mouseStatus++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.mousemove=function(g){if(!this.dragToLook||this.mouseStatus>0){const x=this.getContainerDimensions(),h=x.size[0]/2,v=x.size[1]/2;this.moveState.yawLeft=-(g.pageX-x.offset[0]-h)/h,this.moveState.pitchDown=(g.pageY-x.offset[1]-v)/v,this.updateRotationVector()}},this.mouseup=function(g){if(this.dragToLook)this.mouseStatus--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(g){const x=g*r.movementSpeed,h=g*r.rollSpeed;r.object.translateX(r.moveVector.x*x),r.object.translateY(r.moveVector.y*x),r.object.translateZ(r.moveVector.z*x),r.tmpQuaternion.set(r.rotationVector.x*h,r.rotationVector.y*h,r.rotationVector.z*h,1).normalize(),r.object.quaternion.multiply(r.tmpQuaternion),(a.distanceToSquared(r.object.position)>o||8*(1-n.dot(r.object.quaternion))>o)&&(r.dispatchEvent(Rf),n.copy(r.object.quaternion),a.copy(r.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",Vc),this.domElement.removeEventListener("mousedown",l),this.domElement.removeEventListener("mousemove",s),this.domElement.removeEventListener("mouseup",d),window.removeEventListener("keydown",c),window.removeEventListener("keyup",u)};const s=this.mousemove.bind(this),l=this.mousedown.bind(this),d=this.mouseup.bind(this),c=this.keydown.bind(this),u=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",Vc),this.domElement.addEventListener("mousemove",s),this.domElement.addEventListener("mousedown",l),this.domElement.addEventListener("mouseup",d),window.addEventListener("keydown",c),window.addEventListener("keyup",u),this.updateMovementVector(),this.updateRotationVector()}}function Vc(i){i.preventDefault()}class b6 extends Vr{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Uf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Zf(t)})}load(e,t,r,o){const n=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=lo.extractUrlBase(e),this.manager.itemStart(e);const s=function(d){o?o(d):console.error(d),n.manager.itemError(e),n.manager.itemEnd(e)},l=new Ms(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(d){try{n.parse(d,a,function(c){t(c),n.manager.itemEnd(e)},s)}catch(c){s(c)}},r,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,o){let n;const a={},s={};if(typeof e=="string")n=e;else if(lo.decodeText(new Uint8Array(e,0,4))===Hc){try{a[st.KHR_BINARY_GLTF]=new Qf(e)}catch(u){o&&o(u);return}n=a[st.KHR_BINARY_GLTF].content}else n=lo.decodeText(new Uint8Array(e));const l=JSON.parse(n);if(l.asset===void 0||l.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new sS(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](d);s[u.name]=u,a[u.name]=!0}if(l.extensionsUsed)for(let c=0;c<l.extensionsUsed.length;++c){const u=l.extensionsUsed[c],g=l.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:a[u]=new Ff;break;case st.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[u]=new jf;break;case st.KHR_DRACO_MESH_COMPRESSION:a[u]=new Yf(l,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[u]=new Jf;break;case st.KHR_MESH_QUANTIZATION:a[u]=new qf;break;default:g.indexOf(u)>=0&&s[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}d.setExtensions(a),d.setPlugins(s),d.parse(r,o)}}function Of(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Df{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,o=t.length;r<o;r++){const n=t[r];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let o=t.cache.get(r);if(o)return o;const n=t.json,l=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let d;const c=new Ce(16777215);l.color!==void 0&&c.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":d=new Rc(c),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new Bc(c),d.distance=u;break;case"spot":d=new Cc(c),d.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,d.angle=l.spot.outerConeAngle,d.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return d.position.set(0,0,0),d.decay=2,l.intensity!==void 0&&(d.intensity=l.intensity),d.name=t.createUniqueName(l.name||"light_"+e),o=Promise.resolve(d),t.cache.add(r,o),o}createNodeAttachment(e){const t=this,r=this.parser,n=r.json.nodes[e],s=(n.extensions&&n.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(l){return r._getNodeRef(t.cache,s,l)})}}class Ff{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return jr}extendParams(e,t,r){const o=[];e.color=new Ce(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const a=n.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}n.baseColorTexture!==void 0&&o.push(r.assignTexture(e,"map",n.baseColorTexture))}return Promise.all(o)}}class Uf{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:yo}extendMaterialParams(e,t){const r=this.parser,o=r.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const n=[],a=o.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&n.push(r.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&n.push(r.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(n.push(r.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const s=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(s,s)}return Promise.all(n)}}class Vf{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:yo}extendMaterialParams(e,t){const r=this.parser,o=r.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=o.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&n.push(r.assignTexture(t,"sheenColorMap",a.sheenColorTexture)),a.sheenRoughnessTexture!==void 0&&n.push(r.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(n)}}class Hf{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:yo}extendMaterialParams(e,t){const r=this.parser,o=r.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const n=[],a=o.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&n.push(r.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(n)}}class Xf{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:yo}extendMaterialParams(e,t){const r=this.parser,o=r.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const n=[],a=o.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&n.push(r.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||0;const s=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ce(s[0],s[1],s[2]),Promise.all(n)}}class kf{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:yo}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const n=o.extensions[this.name];return t.ior=n.ior!==void 0?n.ior:1.5,Promise.resolve()}}class Wf{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:yo}extendMaterialParams(e,t){const r=this.parser,o=r.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const n=[],a=o.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&n.push(r.assignTexture(t,"specularIntensityMap",a.specularTexture));const s=a.specularColorFactor||[1,1,1];return t.specularColor=new Ce(s[0],s[1],s[2]),a.specularColorTexture!==void 0&&n.push(r.assignTexture(t,"specularColorMap",a.specularColorTexture).then(function(l){l.encoding=Tr})),Promise.all(n)}}class zf{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,o=r.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const n=o.extensions[this.name],a=r.images[n.source],s=t.options.ktx2Loader;if(!s){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a,s)}}class Kf{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,o=r.json,n=o.textures[e];if(!n.extensions||!n.extensions[t])return null;const a=n.extensions[t],s=o.images[a.source];let l=r.textureLoader;if(s.uri){const d=r.options.manager.getHandler(s.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return r.loadTextureImage(e,s,l);if(o.extensionsRequired&&o.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Zf{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const o=r.extensions[this.name],n=this.parser.getDependency("buffer",o.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([n,a.ready]).then(function(s){const l=o.byteOffset||0,d=o.byteLength||0,c=o.count,u=o.byteStride,g=new ArrayBuffer(c*u),x=new Uint8Array(s[0],l,d);return a.decodeGltfBuffer(new Uint8Array(g),c,u,x,o.mode,o.filter),g})}else return null}}const Hc="glTF",qn=12,Xc={JSON:1313821514,BIN:5130562};class Qf{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qn);if(this.header={magic:lo.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-qn,o=new DataView(e,qn);let n=0;for(;n<r;){const a=o.getUint32(n,!0);n+=4;const s=o.getUint32(n,!0);if(n+=4,s===Xc.JSON){const l=new Uint8Array(e,qn+n,a);this.content=lo.decodeText(l)}else if(s===Xc.BIN){const l=qn+n;this.body=e.slice(l,l+a)}n+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Yf{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,o=this.dracoLoader,n=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,s={},l={},d={};for(const c in a){const u=Ls[c]||c.toLowerCase();s[u]=a[c]}for(const c in e.attributes){const u=Ls[c]||c.toLowerCase();if(a[c]!==void 0){const g=r.accessors[e.attributes[c]],x=ei[g.componentType];d[u]=x,l[u]=g.normalized===!0}}return t.getDependency("bufferView",n).then(function(c){return new Promise(function(u){o.decodeDracoFile(c,function(g){for(const x in g.attributes){const h=g.attributes[x],v=l[x];v!==void 0&&(h.normalized=v)}u(g)},s,d)})})}}class Jf{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ws extends Qn{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),r=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),o=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),n=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`

`+m.getShaderInfoLog(M));return M}function Gr(m){return Nt(m,K).map(function(S){return{index:ne(S,1,0),Y:Ae(S,2),label:z(S,3)!=null?ne(S,3,""):void 0,displayName:z(S,4)!=null?ne(S,4,""):void 0}})}function fr(m){return{x:Ae(m,1),y:Ae(m,2),z:Ae(m,3),visibility:z(m,4)!=null?Ae(m,4):void 0}}function yt(m,S){this.h=m,this.g=S,this.l=0}function kr(m,S,M){return cr(m,S),typeof m.g.canvas.transferToImageBitmap=="function"?Promise.resolve(m.g.canvas.transferToImageBitmap()):M?Promise.resolve(m.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(m.g.canvas):(m.i===void 0&&(m.i=document.createElement("canvas")),new Promise(function(E){m.i.height=m.g.canvas.height,m.i.width=m.g.canvas.width,m.i.getContext("2d",{}).drawImage(m.g.canvas,0,0,m.g.canvas.width,m.g.canvas.height),E(m.i)}))}function cr(m,S){var M=m.g;if(m.m===void 0){var E=Ar(M,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),F=Ar(M,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),te=M.createProgram();if(M.attachShader(te,E),M.attachShader(te,F),M.linkProgram(te),!M.getProgramParameter(te,M.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+M.getProgramInfoLog(te));E=m.m=te,M.useProgram(E),F=M.getUniformLocation(E,"sampler0"),m.j={I:M.getAttribLocation(E,"aVertex"),H:M.getAttribLocation(E,"aTex"),da:F},m.s=M.createBuffer(),M.bindBuffer(M.ARRAY_BUFFER,m.s),M.enableVertexAttribArray(m.j.I),M.vertexAttribPointer(m.j.I,2,M.FLOAT,!1,0,0),M.bufferData(M.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),M.STATIC_DRAW),M.bindBuffer(M.ARRAY_BUFFER,null),m.o=M.createBuffer(),M.bindBuffer(M.ARRAY_BUFFER,m.o),M.enableVertexAttribArray(m.j.H),M.vertexAttribPointer(m.j.H,2,M.FLOAT,!1,0,0),M.bufferData(M.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),M.STATIC_DRAW),M.bindBuffer(M.ARRAY_BUFFER,null),M.uniform1i(F,0)}E=m.j,M.useProgram(m.m),M.canvas.width=S.width,M.canvas.height=S.height,M.viewport(0,0,S.width,S.height),M.activeTexture(M.TEXTURE0),m.h.bindTexture2d(S.glName),M.enableVertexAttribArray(E.I),M.bindBuffer(M.ARRAY_BUFFER,m.s),M.vertexAttribPointer(E.I,2,M.FLOAT,!1,0,0),M.enableVertexAttribArray(E.H),M.bindBuffer(M.ARRAY_BUFFER,m.o),M.vertexAttribPointer(E.H,2,M.FLOAT,!1,0,0),M.bindFramebuffer(M.DRAW_FRAMEBUFFER?M.DRAW_FRAMEBUFFER:M.FRAMEBUFFER,null),M.clearColor(0,0,0,0),M.clear(M.COLOR_BUFFER_BIT),M.colorMask(!0,!0,!0,!0),M.drawArrays(M.TRIANGLE_FAN,0,4),M.disableVertexAttribArray(E.I),M.disableVertexAttribArray(E.H),M.bindBuffer(M.ARRAY_BUFFER,null),m.h.bindTexture2d(0)}function Mm(m){this.g=m}var _m=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Am(m,S){return S+m}function qs(m,S){window[m]=S}function Tm(m){var S=document.createElement("script");return S.setAttribute("src",m),S.setAttribute("crossorigin","anonymous"),new Promise(function(M){S.addEventListener("load",function(){M()},!1),S.addEventListener("error",function(){M()},!1),document.body.appendChild(S)})}function ym(){return Q(this,function m(){return q(m,function(S){switch(S.g){case 1:return S.m=2,b(S,WebAssembly.instantiate(_m),4);case 4:S.g=3,S.m=0;break;case 2:return S.m=0,S.j=null,S.return(!1);case 3:return S.return(!0)}})})}function ia(m){if(this.g=m,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=m&&m.locateFile||Am,typeof window=="object")var S=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location!="undefined")S=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=S,m.options){S=s(Object.keys(m.options));for(var M=S.next();!M.done;M=S.next()){M=M.value;var E=m.options[M].default;E!==void 0&&(this.j[M]=typeof E=="function"?E():E)}}}i=ia.prototype,i.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function bm(m,S){return m.g.files===void 0?[]:typeof m.g.files=="function"?m.g.files(S):m.g.files}function Pm(m){return Q(m,function S(){var M=this,E,F,te,U,oe,he,Ee,Qe,pt,ot,Je;return q(S,function(De){switch(De.g){case 1:return E=M,M.R?(F=bm(M,M.j),b(De,ym(),2)):De.return();case 2:if(te=De.h,typeof window=="object")return qs("createMediapipeSolutionsWasm",{locateFile:M.locateFile}),qs("createMediapipeSolutionsPackedAssets",{locateFile:M.locateFile}),he=F.filter(function(Ye){return Ye.data!==void 0}),Ee=F.filter(function(Ye){return Ye.data===void 0}),Qe=Promise.all(he.map(function(Ye){var tt=aa(E,Ye.url);if(Ye.path!==void 0){var at=Ye.path;tt=tt.then(function(kt){return E.overrideFile(at,kt),Promise.resolve(kt)})}return tt})),pt=Promise.all(Ee.map(function(Ye){return Ye.simd===void 0||Ye.simd&&te||!Ye.simd&&!te?Tm(E.locateFile(Ye.url,E.S)):Promise.resolve()})).then(function(){return Q(E,function Ye(){var tt,at,kt=this;return q(Ye,function(vt){if(vt.g==1)return tt=window.createMediapipeSolutionsWasm,at=window.createMediapipeSolutionsPackedAssets,b(vt,tt(at),2);kt.h=vt.h,vt.g=0})})}),ot=function(){return Q(E,function Ye(){var tt=this;return q(Ye,function(at){return tt.g.graph&&tt.g.graph.url?at=b(at,aa(tt,tt.g.graph.url),0):(at.g=0,at=void 0),at})})}(),b(De,Promise.all([pt,Qe,ot]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return U=F.filter(function(Ye){return Ye.simd===void 0||Ye.simd&&te||!Ye.simd&&!te}).map(function(Ye){return E.locateFile(Ye.url,E.S)}),importScripts.apply(null,l(U)),b(De,createMediapipeSolutionsWasm(Module),6);case 6:M.h=De.h,M.l=new OffscreenCanvas(1,1),M.h.canvas=M.l,oe=M.h.GL.createContext(M.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext!="undefined"?2:1}),M.h.GL.makeContextCurrent(oe),De.g=4;break;case 7:if(M.l=document.createElement("canvas"),Je=M.l.getContext("webgl2",{}),!Je&&(Je=M.l.getContext("webgl",{}),!Je))return alert("Failed to create WebGL canvas context when passing video frame."),De.return();M.D=Je,M.h.canvas=M.l,M.h.createContext(M.l,!0,!0,{});case 4:M.i=new M.h.SolutionWasm,M.R=!1,De.g=0}})})}function wm(m){return Q(m,function S(){var M=this,E,F,te,U,oe,he,Ee,Qe;return q(S,function(pt){if(pt.g==1){if(M.g.graph&&M.g.graph.url&&M.P===M.g.graph.url)return pt.return();if(M.o=!0,!M.g.graph||!M.g.graph.url){pt.g=2;return}return M.P=M.g.graph.url,b(pt,aa(M,M.g.graph.url),3)}for(pt.g!=2&&(E=pt.h,M.i.loadGraph(E)),F=s(Object.keys(M.B)),te=F.next();!te.done;te=F.next())U=te.value,M.i.overrideFile(U,M.B[U]);if(M.B={},M.g.listeners)for(oe=s(M.g.listeners),he=oe.next();!he.done;he=oe.next())Ee=he.value,Cm(M,Ee);Qe=M.j,M.j={},M.setOptions(Qe),pt.g=0})})}i.reset=function(){return Q(this,function m(){var S=this;return q(m,function(M){S.i&&(S.i.reset(),S.m={},S.s={}),M.g=0})})},i.setOptions=function(m,S){var M=this;if(S=S||this.g.options){for(var E=[],F=[],te={},U=s(Object.keys(m)),oe=U.next();!oe.done;te={K:te.K,L:te.L},oe=U.next()){var he=oe.value;he in this.j&&this.j[he]===m[he]||(this.j[he]=m[he],oe=S[he],oe!==void 0&&(oe.onChange&&(te.K=oe.onChange,te.L=m[he],E.push(function(Ee){return function(){return Q(M,function Qe(){var pt,ot=this;return q(Qe,function(Je){if(Je.g==1)return b(Je,Ee.K(Ee.L),2);pt=Je.h,pt===!0&&(ot.o=!0),Je.g=0})})}}(te))),oe.graphOptionXref&&(he={valueNumber:oe.type===1?m[he]:0,valueBoolean:oe.type===0?m[he]:!1,valueString:oe.type===2?m[he]:""},oe=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),oe.graphOptionXref),he),F.push(oe))))}(E.length!==0||F.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(F),this.u=(this.u===void 0?[]:this.u).concat(E))}};function Lm(m){return Q(m,function S(){var M=this,E,F,te,U,oe,he,Ee;return q(S,function(Qe){switch(Qe.g){case 1:if(!M.o)return Qe.return();if(!M.u){Qe.g=2;break}E=s(M.u),F=E.next();case 3:if(F.done){Qe.g=5;break}return te=F.value,b(Qe,te(),4);case 4:F=E.next(),Qe.g=3;break;case 5:M.u=void 0;case 2:if(M.A){for(U=new M.h.GraphOptionChangeRequestList,oe=s(M.A),he=oe.next();!he.done;he=oe.next())Ee=he.value,U.push_back(Ee);M.i.changeOptions(U),U.delete(),M.A=void 0}M.o=!1,Qe.g=0}})})}i.initialize=function(){return Q(this,function m(){var S=this;return q(m,function(M){return M.g==1?b(M,Pm(S),2):M.g!=3?b(M,wm(S),3):b(M,Lm(S),0)})})};function aa(m,S){return Q(m,function M(){var E=this,F,te;return q(M,function(U){return S in E.F?U.return(E.F[S]):(F=E.locateFile(S,""),te=fetch(F).then(function(oe){return oe.arrayBuffer()}),E.F[S]=te,U.return(te))})})}i.overrideFile=function(m,S){this.i?this.i.overrideFile(m,S):this.B[m]=S},i.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},i.send=function(m,S){return Q(this,function M(){var E=this,F,te,U,oe,he,Ee,Qe,pt,ot;return q(M,function(Je){switch(Je.g){case 1:return E.g.inputs?(F=1e3*(S==null?performance.now():S),b(Je,E.C,2)):Je.return();case 2:return b(Je,E.initialize(),3);case 3:for(te=new E.h.PacketDataList,U=s(Object.keys(m)),oe=U.next();!oe.done;oe=U.next())if(he=oe.value,Ee=E.g.inputs[he]){e:{var De=E,Ye=m[he];switch(Ee.type){case"video":var tt=De.m[Ee.stream];if(tt||(tt=new yt(De.h,De.D),De.m[Ee.stream]=tt),De=tt,De.l===0&&(De.l=De.h.createTexture()),typeof HTMLVideoElement!="undefined"&&Ye instanceof HTMLVideoElement){var at=Ye.videoWidth;tt=Ye.videoHeight}else typeof HTMLImageElement!="undefined"&&Ye instanceof HTMLImageElement?(at=Ye.naturalWidth,tt=Ye.naturalHeight):(at=Ye.width,tt=Ye.height);tt={glName:De.l,width:at,height:tt},at=De.g,at.canvas.width=tt.width,at.canvas.height=tt.height,at.activeTexture(at.TEXTURE0),De.h.bindTexture2d(De.l),at.texImage2D(at.TEXTURE_2D,0,at.RGBA,at.RGBA,at.UNSIGNED_BYTE,Ye),De.h.bindTexture2d(0),De=tt;break e;case"detections":for(tt=De.m[Ee.stream],tt||(tt=new Mm(De.h),De.m[Ee.stream]=tt),De=tt,De.data||(De.data=new De.g.DetectionListData),De.data.reset(Ye.length),tt=0;tt<Ye.length;++tt){at=Ye[tt];var kt=De.data,vt=kt.setBoundingBox,rr=tt,Bt=at.T,qe=new Tt;ye(qe,1,Bt.Z),ye(qe,2,Bt.$),ye(qe,3,Bt.height),ye(qe,4,Bt.width),ye(qe,5,Bt.rotation),ye(qe,6,Bt.X);var dt=Bt=new We;ve(dt,1,z(qe,1)),ve(dt,2,z(qe,2)),ve(dt,3,z(qe,3)),ve(dt,4,z(qe,4)),ve(dt,5,z(qe,5));var ut=z(qe,6);if(ut!=null&&ut!=null){Se(dt.g,48);var nt=dt.g,ct=ut;ut=0>ct,ct=Math.abs(ct);var gt=ct>>>0;for(ct=Math.floor((ct-gt)/4294967296),ct>>>=0,ut&&(ct=~ct>>>0,gt=(~gt>>>0)+1,4294967295<gt&&(gt=0,ct++,4294967295<ct&&(ct=0))),_e=gt,be=ct,ut=_e,gt=be;0<gt||127<ut;)nt.push(ut&127|128),ut=(ut>>>7|gt<<25)>>>0,gt>>>=7;nt.push(ut)}if(ar(qe,dt),Bt=R(Bt),vt.call(kt,rr,Bt),at.O)for(kt=0;kt<at.O.length;++kt)qe=at.O[kt],dt=!!qe.visibility,vt=De.data,rr=vt.addNormalizedLandmark,Bt=tt,qe=Object.assign(Object.assign({},qe),{visibility:dt?qe.visibility:0}),dt=new Ue,ye(dt,1,qe.x),ye(dt,2,qe.y),ye(dt,3,qe.z),qe.visibility&&ye(dt,4,qe.visibility),nt=qe=new We,ve(nt,1,z(dt,1)),ve(nt,2,z(dt,2)),ve(nt,3,z(dt,3)),ve(nt,4,z(dt,4)),ve(nt,5,z(dt,5)),ar(dt,nt),qe=R(qe),rr.call(vt,Bt,qe);if(at.M)for(kt=0;kt<at.M.length;++kt){if(vt=De.data,rr=vt.addClassification,Bt=tt,qe=at.M[kt],dt=new K,ye(dt,2,qe.Y),qe.index&&ye(dt,1,qe.index),qe.label&&ye(dt,3,qe.label),qe.displayName&&ye(dt,4,qe.displayName),nt=qe=new We,gt=z(dt,1),gt!=null&&gt!=null)if(Se(nt.g,8),ut=nt.g,0<=gt)Se(ut,gt);else{for(ct=0;9>ct;ct++)ut.push(gt&127|128),gt>>=7;ut.push(1)}ve(nt,2,z(dt,2)),ut=z(dt,3),ut!=null&&(ut=we(ut),Se(nt.g,26),Se(nt.g,ut.length),$e(nt,nt.g.end()),$e(nt,ut)),ut=z(dt,4),ut!=null&&(ut=we(ut),Se(nt.g,34),Se(nt.g,ut.length),$e(nt,nt.g.end()),$e(nt,ut)),ar(dt,nt),qe=R(qe),rr.call(vt,Bt,qe)}}De=De.data;break e;default:De={}}}switch(Qe=De,pt=Ee.stream,Ee.type){case"video":te.pushTexture2d(Object.assign(Object.assign({},Qe),{stream:pt,timestamp:F}));break;case"detections":ot=Qe,ot.stream=pt,ot.timestamp=F,te.pushDetectionList(ot);break;default:throw Error("Unknown input config type: '"+Ee.type+"'")}}return E.i.send(te),b(Je,E.C,4);case 4:te.delete(),Je.g=0}})})};function Em(m,S,M){return Q(m,function E(){var F,te,U,oe,he,Ee,Qe=this,pt,ot,Je,De,Ye,tt,at,kt;return q(E,function(vt){switch(vt.g){case 1:if(!M)return vt.return(S);for(F={},te=0,U=s(Object.keys(M)),oe=U.next();!oe.done;oe=U.next())he=oe.value,Ee=M[he],typeof Ee!="string"&&Ee.type==="texture"&&S[Ee.stream]!==void 0&&++te;1<te&&(Qe.G=!1),pt=s(Object.keys(M)),oe=pt.next();case 2:if(oe.done){vt.g=4;break}if(ot=oe.value,Je=M[ot],typeof Je=="string")return at=F,kt=ot,b(vt,$m(Qe,ot,S[Je]),14);if(De=S[Je.stream],Je.type==="detection_list"){if(De){for(var rr=De.getRectList(),Bt=De.getLandmarksList(),qe=De.getClassificationsList(),dt=[],ut=0;ut<rr.size();++ut){var nt=rr.get(ut);e:{var ct=new Tt;for(nt=new $(nt);P(nt);)switch(nt.i){case 13:var gt=de(nt);ye(ct,1,gt);break;case 21:gt=de(nt),ye(ct,2,gt);break;case 29:gt=de(nt),ye(ct,3,gt);break;case 37:gt=de(nt),ye(ct,4,gt);break;case 45:gt=de(nt),ye(ct,5,gt);break;case 48:gt=le(nt.g),ye(ct,6,gt);break;default:if(!_r(ct,nt))break e}}ct={Z:Ae(ct,1),$:Ae(ct,2),height:Ae(ct,3),width:Ae(ct,4),rotation:Ae(ct,5,0),X:ne(ct,6,0)},nt=Nt(rt(Bt.get(ut)),Ue).map(fr);var Eo=qe.get(ut);e:for(gt=new Ze,Eo=new $(Eo);P(Eo);)switch(Eo.i){case 10:gt.addClassification(me(Eo,new K,ae));break;default:if(!_r(gt,Eo))break e}ct={T:ct,O:nt,M:Gr(gt)},dt.push(ct)}rr=dt}else rr=[];F[ot]=rr,vt.g=7;break}if(Je.type==="proto_list"){if(De){for(rr=Array(De.size()),Bt=0;Bt<De.size();Bt++)rr[Bt]=De.get(Bt);De.delete()}else rr=[];F[ot]=rr,vt.g=7;break}if(De===void 0){vt.g=3;break}if(Je.type==="float_list"){F[ot]=De,vt.g=7;break}if(Je.type==="proto"){F[ot]=De,vt.g=7;break}if(Je.type!=="texture")throw Error("Unknown output config type: '"+Je.type+"'");return Ye=Qe.s[ot],Ye||(Ye=new yt(Qe.h,Qe.D),Qe.s[ot]=Ye),b(vt,kr(Ye,De,Qe.G),13);case 13:tt=vt.h,F[ot]=tt;case 7:Je.transform&&F[ot]&&(F[ot]=Je.transform(F[ot])),vt.g=3;break;case 14:at[kt]=vt.h;case 3:oe=pt.next(),vt.g=2;break;case 4:return vt.return(F)}})})}function $m(m,S,M){return Q(m,function E(){var F=this,te;return q(E,function(U){return typeof M=="number"||M instanceof Uint8Array||M instanceof F.h.Uint8BlobList?U.return(M):M instanceof F.h.Texture2dDataOut?(te=F.s[S],te||(te=new yt(F.h,F.D),F.s[S]=te),U.return(kr(te,M,F.G))):U.return(void 0)})})}function Cm(m,S){for(var M=S.name||"$",E=[].concat(l(S.wants)),F=new m.h.StringList,te=s(S.wants),U=te.next();!U.done;U=te.next())F.push_back(U.value);te=m.h.PacketListener.implement({onResults:function(oe){for(var he={},Ee=0;Ee<S.wants.length;++Ee)he[E[Ee]]=oe.get(Ee);var Qe=m.listeners[M];Qe&&(m.C=Em(m,he,S.outs).then(function(pt){pt=Qe(pt);for(var ot=0;ot<S.wants.length;++ot){var Je=he[E[ot]];typeof Je=="object"&&Je.hasOwnProperty&&Je.hasOwnProperty("delete")&&Je.delete()}pt&&(m.C=pt)}))}}),m.i.attachMultiListener(F,te),F.delete()}i.onResults=function(m,S){this.listeners[S||"$"]=m},D("Solution",ia),D("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Gm(m){m=Cr(m);var S=m.getMesh();if(!S)return m;var M=new Float32Array(S.getVertexBufferList());S.getVertexBufferList=function(){return M};var E=new Uint32Array(S.getIndexBufferList());return S.getIndexBufferList=function(){return E},m}var Nm={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(m){return m.map(Gm)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(m){return m.map(function(S){return Nt(rt(S),Ue).map(fr)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},el=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],tl=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],rl=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],ol=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],nl=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],il=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Bm=[].concat(l(el),l(tl),l(rl),l(ol),l(nl),l(il));function al(m){m=m||{},m=Object.assign(Object.assign({},Nm),m),this.g=new ia(m)}i=al.prototype,i.close=function(){return this.g.close(),Promise.resolve()},i.onResults=function(m){this.g.onResults(m)},i.initialize=function(){return Q(this,function m(){var S=this;return q(m,function(M){return b(M,S.g.initialize(),0)})})},i.reset=function(){this.g.reset()},i.send=function(m){return Q(this,function S(){var M=this;return q(S,function(E){return b(E,M.g.send(m),0)})})},i.setOptions=function(m){this.g.setOptions(m)},D("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),D("FaceMesh",al),D("FACEMESH_LIPS",el),D("FACEMESH_LEFT_EYE",tl),D("FACEMESH_LEFT_EYEBROW",rl),D("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),D("FACEMESH_RIGHT_EYE",ol),D("FACEMESH_RIGHT_EYEBROW",nl),D("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),D("FACEMESH_FACE_OVAL",il),D("FACEMESH_CONTOURS",Bm),D("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),D("matrixDataToMatrix",function(m){for(var S=m.getCols(),M=m.getRows(),E=m.getPackedDataList(),F=[],te=0;te<M;te++)F.push(Array(S));for(te=0;te<M;te++)for(var U=0;U<S;U++){var oe=m.getLayout()===1?te*S+U:U*M+te;F[te][U]=E[oe]}return F}),D("VERSION","0.4.1633559619")}).call(ze);var $6={};(function(){var i=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,v,_){return h==Array.prototype||h==Object.prototype||(h[v]=_.value),h};function e(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof ze=="object"&&ze];for(var v=0;v<h.length;++v){var _=h[v];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var t=e(this);function r(h,v){if(v)e:{var _=t;h=h.split(".");for(var p=0;p<h.length-1;p++){var f=h[p];if(!(f in _))break e;_=_[f]}h=h[h.length-1],p=_[h],v=v(p),v!=p&&v!=null&&i(_,h,{configurable:!0,writable:!0,value:v})}}var o=typeof Object.assign=="function"?Object.assign:function(h,v){for(var _=1;_<arguments.length;_++){var p=arguments[_];if(p)for(var f in p)Object.prototype.hasOwnProperty.call(p,f)&&(h[f]=p[f])}return h};r("Object.assign",function(h){return h||o});var n=this||self,a={facingMode:"user",width:640,height:480};function s(h,v){this.video=h,this.h=0,this.g=Object.assign(Object.assign({},a),v)}function l(h){window.requestAnimationFrame(function(){c(h)})}function d(h,v){h.video.srcObject=v,h.video.onloadedmetadata=function(){h.video.play(),l(h)}}function c(h){var v=null;h.video.paused||h.video.currentTime===h.h||(h.h=h.video.currentTime,v=h.g.onFrame()),v?v.then(function(){l(h)}):l(h)}s.prototype.start=function(){var h=this;navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists.");var v=this.g;return navigator.mediaDevices.getUserMedia({video:{facingMode:v.facingMode,width:v.width,height:v.height}}).then(function(_){d(h,_)}).catch(function(_){throw console.error("Failed to acquire camera feed: "+_),alert("Failed to acquire camera feed: "+_),_})};var u=["Camera"],g=n;u[0]in g||typeof g.execScript=="undefined"||g.execScript("var "+u[0]);for(var x;u.length&&(x=u.shift());)u.length||s===void 0?g[x]&&g[x]!==Object.prototype[x]?g=g[x]:g=g[x]={}:g[x]=s}).call(ze);export{uf as A,T6 as C,y6 as F,b6 as G,Qn as M,Bc as P,Hd as S,Ac as T,G as V,Mt as W,or as a,nr as b,w6 as c,P6 as d,$6 as e,E6 as f,L6 as g};