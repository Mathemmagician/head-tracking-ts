var wg=Object.defineProperty;var md=Object.getOwnPropertySymbols;var Lg=Object.prototype.hasOwnProperty,Eg=Object.prototype.propertyIsEnumerable;var ud=(o,e,t)=>e in o?wg(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,gd=(o,e)=>{for(var t in e||(e={}))Lg.call(e,t)&&ud(o,t,e[t]);if(md)for(var t of md(e))Eg.call(e,t)&&ud(o,t,e[t]);return o};/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hd="134",$g=0,xd=1,Cg=2,pd=1,Gg=2,Tn=3,Po=0,et=1,no=2,fd=1,Tr=0,yn=1,Sd=2,vd=3,Md=4,Ng=5,wo=100,Bg=101,Ig=102,_d=103,Ad=104,Rg=200,Og=201,Dg=202,Fg=203,Td=204,yd=205,Ug=206,Vg=207,Hg=208,Xg=209,kg=210,Wg=0,zg=1,Kg=2,Na=3,Zg=4,Qg=5,Yg=6,Jg=7,Si=0,jg=1,qg=2,io=0,eh=1,th=2,rh=3,oh=4,nh=5,bd=300,bn=301,Pn=302,Ba=303,Ia=304,vi=306,Ra=307,Lo=1e3,Pt=1001,Mi=1002,tt=1003,Oa=1004,Da=1005,wt=1006,Pd=1007,Eo=1008,yr=1009,ih=1010,ah=1011,_i=1012,sh=1013,Ai=1014,ir=1015,$o=1016,lh=1017,dh=1018,ch=1019,wn=1020,mh=1021,ao=1022,ht=1023,uh=1024,gh=1025,hh=ht,Co=1026,Ln=1027,xh=1028,ph=1029,fh=1030,Sh=1031,vh=1032,Mh=1033,wd=33776,Ld=33777,Ed=33778,$d=33779,Cd=35840,Gd=35841,Nd=35842,Bd=35843,_h=36196,Id=37492,Rd=37496,Ah=37808,Th=37809,yh=37810,bh=37811,Ph=37812,wh=37813,Lh=37814,Eh=37815,$h=37816,Ch=37817,Gh=37818,Nh=37819,Bh=37820,Ih=37821,Rh=36492,Oh=37840,Dh=37841,Fh=37842,Uh=37843,Vh=37844,Hh=37845,Xh=37846,kh=37847,Wh=37848,zh=37849,Kh=37850,Zh=37851,Qh=37852,Yh=37853,Jh=2200,jh=2201,qh=2202,En=2300,Go=2301,Fa=2302,No=2400,Bo=2401,Ti=2402,Ua=2500,Od=2501,e0=0,t0=1,Dd=2,xt=3e3,Kt=3001,Va=3007,Ha=3002,r0=3003,Fd=3004,Ud=3005,Vd=3006,o0=3200,n0=3201,so=0,i0=1,Xa=7680,a0=519,$n=35044,yi=35048,Hd="300 es";class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}let bi=1234567;const Cn=Math.PI/180,Gn=180/Math.PI,lt=[];for(let o=0;o<256;o++)lt[o]=(o<16?"0":"")+o.toString(16);const s0=typeof crypto!="undefined"&&"randomUUID"in crypto;function Gt(){if(s0)return crypto.randomUUID().toUpperCase();const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(lt[o&255]+lt[o>>8&255]+lt[o>>16&255]+lt[o>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[r&255]+lt[r>>8&255]+lt[r>>16&255]+lt[r>>24&255]).toUpperCase()}function Lt(o,e,t){return Math.max(e,Math.min(t,o))}function ka(o,e){return(o%e+e)%e}function l0(o,e,t,r,n){return r+(o-e)*(n-r)/(t-e)}function d0(o,e,t){return o!==e?(t-o)/(e-o):0}function Nn(o,e,t){return(1-t)*o+t*e}function c0(o,e,t,r){return Nn(o,e,1-Math.exp(-t*r))}function m0(o,e=1){return e-Math.abs(ka(o,e*2)-e)}function u0(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function g0(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function h0(o,e){return o+Math.floor(Math.random()*(e-o+1))}function x0(o,e){return o+Math.random()*(e-o)}function p0(o){return o*(.5-Math.random())}function f0(o){return o!==void 0&&(bi=o%2147483647),bi=bi*16807%2147483647,(bi-1)/2147483646}function S0(o){return o*Cn}function v0(o){return o*Gn}function Wa(o){return(o&o-1)==0&&o!==0}function Xd(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function kd(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function M0(o,e,t,r,n){const i=Math.cos,a=Math.sin,s=i(t/2),l=a(t/2),d=i((e+r)/2),c=a((e+r)/2),m=i((e-r)/2),u=a((e-r)/2),g=i((r-e)/2),x=a((r-e)/2);switch(n){case"XYX":o.set(s*c,l*m,l*u,s*d);break;case"YZY":o.set(l*u,s*c,l*m,s*d);break;case"ZXZ":o.set(l*m,l*u,s*c,s*d);break;case"XZX":o.set(s*c,l*x,l*g,s*d);break;case"YXY":o.set(l*g,s*c,l*x,s*d);break;case"ZYZ":o.set(l*x,l*g,s*c,s*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}var _0=Object.freeze({__proto__:null,DEG2RAD:Cn,RAD2DEG:Gn,generateUUID:Gt,clamp:Lt,euclideanModulo:ka,mapLinear:l0,inverseLerp:d0,lerp:Nn,damp:c0,pingpong:m0,smoothstep:u0,smootherstep:g0,randInt:h0,randFloat:x0,randFloatSpread:p0,seededRandom:f0,degToRad:S0,radToDeg:v0,isPowerOfTwo:Wa,ceilPowerOfTwo:Xd,floorPowerOfTwo:kd,setQuaternionFromProperEuler:M0});class Z{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*r-a*n+e.x,this.y=i*n+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Z.prototype.isVector2=!0;class dt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,n,i,a,s,l,d){const c=this.elements;return c[0]=e,c[1]=n,c[2]=s,c[3]=t,c[4]=i,c[5]=l,c[6]=r,c[7]=a,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],s=r[3],l=r[6],d=r[1],c=r[4],m=r[7],u=r[2],g=r[5],x=r[8],f=n[0],S=n[3],h=n[6],p=n[1],_=n[4],M=n[7],b=n[2],w=n[5],v=n[8];return i[0]=a*f+s*p+l*b,i[3]=a*S+s*_+l*w,i[6]=a*h+s*M+l*v,i[1]=d*f+c*p+m*b,i[4]=d*S+c*_+m*w,i[7]=d*h+c*M+m*v,i[2]=u*f+g*p+x*b,i[5]=u*S+g*_+x*w,i[8]=u*h+g*M+x*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],s=e[5],l=e[6],d=e[7],c=e[8];return t*a*c-t*s*d-r*i*c+r*s*l+n*i*d-n*a*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],s=e[5],l=e[6],d=e[7],c=e[8],m=c*a-s*d,u=s*l-c*i,g=d*i-a*l,x=t*m+r*u+n*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/x;return e[0]=m*f,e[1]=(n*d-c*r)*f,e[2]=(s*r-n*a)*f,e[3]=u*f,e[4]=(c*t-n*l)*f,e[5]=(n*i-s*t)*f,e[6]=g*f,e[7]=(r*l-d*t)*f,e[8]=(a*t-r*i)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,a,s){const l=Math.cos(i),d=Math.sin(i);return this.set(r*l,r*d,-r*(l*a+d*s)+a+e,-n*d,n*l,-n*(-d*a+l*s)+s+t,0,0,1),this}scale(e,t){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),n=this.elements,i=n[0],a=n[3],s=n[6],l=n[1],d=n[4],c=n[7];return n[0]=t*i+r*l,n[3]=t*a+r*d,n[6]=t*s+r*c,n[1]=-r*i+t*l,n[4]=-r*a+t*d,n[7]=-r*s+t*c,this}translate(e,t){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}dt.prototype.isMatrix3=!0;function Wd(o){if(o.length===0)return-1/0;let e=o[0];for(let t=1,r=o.length;t<r;++t)o[t]>e&&(e=o[t]);return e}function Pi(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function zd(o,e=0){let t=3735928559^e,r=1103547991^e;for(let n=0,i;n<o.length;n++)i=o.charCodeAt(n),t=Math.imul(t^i,2654435761),r=Math.imul(r^i,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&r)+(t>>>0)}let Io;class Ro{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Io===void 0&&(Io=Pi("canvas")),Io.width=e.width,Io.height=e.height;const r=Io.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Io}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let A0=0;class rt extends br{constructor(e=rt.DEFAULT_IMAGE,t=rt.DEFAULT_MAPPING,r=Pt,n=Pt,i=wt,a=Eo,s=ht,l=yr,d=1,c=xt){super();Object.defineProperty(this,"id",{value:A0++}),this.uuid=Gt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=a,this.anisotropy=d,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const n=this.image;if(n.uuid===void 0&&(n.uuid=Gt()),!t&&e.images[n.uuid]===void 0){let i;if(Array.isArray(n)){i=[];for(let a=0,s=n.length;a<s;a++)n[a].isDataTexture?i.push(za(n[a].image)):i.push(za(n[a]))}else i=za(n);e.images[n.uuid]={uuid:n.uuid,url:i}}r.image=n.uuid}return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case Mi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case Mi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}rt.DEFAULT_IMAGE=void 0;rt.DEFAULT_MAPPING=bd;rt.prototype.isTexture=!0;function za(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?Ro.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ue{constructor(e=0,t=0,r=0,n=1){this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n+a[12]*i,this.y=a[1]*t+a[5]*r+a[9]*n+a[13]*i,this.z=a[2]*t+a[6]*r+a[10]*n+a[14]*i,this.w=a[3]*t+a[7]*r+a[11]*n+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const a=.01,s=.1,l=e.elements,d=l[0],c=l[4],m=l[8],u=l[1],g=l[5],x=l[9],f=l[2],S=l[6],h=l[10];if(Math.abs(c-u)<a&&Math.abs(m-f)<a&&Math.abs(x-S)<a){if(Math.abs(c+u)<s&&Math.abs(m+f)<s&&Math.abs(x+S)<s&&Math.abs(d+g+h-3)<s)return this.set(1,0,0,0),this;t=Math.PI;const _=(d+1)/2,M=(g+1)/2,b=(h+1)/2,w=(c+u)/4,v=(m+f)/4,$=(x+S)/4;return _>M&&_>b?_<a?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(_),n=w/r,i=v/r):M>b?M<a?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(M),r=w/n,i=$/n):b<a?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(b),r=v/i,n=$/i),this.set(r,n,i,t),this}let p=Math.sqrt((S-x)*(S-x)+(m-f)*(m-f)+(u-c)*(u-c));return Math.abs(p)<.001&&(p=1),this.x=(S-x)/p,this.y=(m-f)/p,this.z=(u-c)/p,this.w=Math.acos((d+g+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ue.prototype.isVector4=!0;class Zt extends br{constructor(e,t,r={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t),this.texture=new rt(void 0,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:wt,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=gd({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.prototype.isWebGLRenderTarget=!0;class T0 extends Zt{constructor(e,t,r){super(e,t);const n=this.texture;this.texture=[];for(let i=0;i<r;i++)this.texture[i]=n.clone()}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.texture.length;n<i;n++)this.texture[n].image.width=e,this.texture[n].image.height=t,this.texture[n].image.depth=r;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,r=e.texture.length;t<r;t++)this.texture[t]=e.texture[t].clone();return this}}T0.prototype.isWebGLMultipleRenderTargets=!0;class Kd extends Zt{constructor(e,t,r){super(e,t,r);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Kd.prototype.isWebGLMultisampleRenderTarget=!0;class ct{constructor(e=0,t=0,r=0,n=1){this._x=e,this._y=t,this._z=r,this._w=n}static slerp(e,t,r,n){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),r.slerpQuaternions(e,t,n)}static slerpFlat(e,t,r,n,i,a,s){let l=r[n+0],d=r[n+1],c=r[n+2],m=r[n+3];const u=i[a+0],g=i[a+1],x=i[a+2],f=i[a+3];if(s===0){e[t+0]=l,e[t+1]=d,e[t+2]=c,e[t+3]=m;return}if(s===1){e[t+0]=u,e[t+1]=g,e[t+2]=x,e[t+3]=f;return}if(m!==f||l!==u||d!==g||c!==x){let S=1-s;const h=l*u+d*g+c*x+m*f,p=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const b=Math.sqrt(_),w=Math.atan2(b,h*p);S=Math.sin(S*w)/b,s=Math.sin(s*w)/b}const M=s*p;if(l=l*S+u*M,d=d*S+g*M,c=c*S+x*M,m=m*S+f*M,S===1-s){const b=1/Math.sqrt(l*l+d*d+c*c+m*m);l*=b,d*=b,c*=b,m*=b}}e[t]=l,e[t+1]=d,e[t+2]=c,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,n,i,a){const s=r[n],l=r[n+1],d=r[n+2],c=r[n+3],m=i[a],u=i[a+1],g=i[a+2],x=i[a+3];return e[t]=s*x+c*m+l*g-d*u,e[t+1]=l*x+c*u+d*m-s*g,e[t+2]=d*x+c*g+s*u-l*m,e[t+3]=c*x-s*m-l*u-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=e._x,n=e._y,i=e._z,a=e._order,s=Math.cos,l=Math.sin,d=s(r/2),c=s(n/2),m=s(i/2),u=l(r/2),g=l(n/2),x=l(i/2);switch(a){case"XYZ":this._x=u*c*m+d*g*x,this._y=d*g*m-u*c*x,this._z=d*c*x+u*g*m,this._w=d*c*m-u*g*x;break;case"YXZ":this._x=u*c*m+d*g*x,this._y=d*g*m-u*c*x,this._z=d*c*x-u*g*m,this._w=d*c*m+u*g*x;break;case"ZXY":this._x=u*c*m-d*g*x,this._y=d*g*m+u*c*x,this._z=d*c*x+u*g*m,this._w=d*c*m-u*g*x;break;case"ZYX":this._x=u*c*m-d*g*x,this._y=d*g*m+u*c*x,this._z=d*c*x-u*g*m,this._w=d*c*m+u*g*x;break;case"YZX":this._x=u*c*m+d*g*x,this._y=d*g*m+u*c*x,this._z=d*c*x-u*g*m,this._w=d*c*m-u*g*x;break;case"XZY":this._x=u*c*m-d*g*x,this._y=d*g*m-u*c*x,this._z=d*c*x+u*g*m,this._w=d*c*m+u*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],a=t[1],s=t[5],l=t[9],d=t[2],c=t[6],m=t[10],u=r+s+m;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(c-l)*g,this._y=(i-d)*g,this._z=(a-n)*g}else if(r>s&&r>m){const g=2*Math.sqrt(1+r-s-m);this._w=(c-l)/g,this._x=.25*g,this._y=(n+a)/g,this._z=(i+d)/g}else if(s>m){const g=2*Math.sqrt(1+s-r-m);this._w=(i-d)/g,this._x=(n+a)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+m-r-s);this._w=(a-n)/g,this._x=(i+d)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,a=e._w,s=t._x,l=t._y,d=t._z,c=t._w;return this._x=r*c+a*s+n*d-i*l,this._y=n*c+a*l+i*s-r*d,this._z=i*c+a*d+r*l-n*s,this._w=a*c-r*s-n*l-i*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,a=this._w;let s=a*e._w+r*e._x+n*e._y+i*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=r,this._y=n,this._z=i,this;const l=1-s*s;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*r+t*this._x,this._y=g*n+t*this._y,this._z=g*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(l),c=Math.atan2(d,s),m=Math.sin((1-t)*c)/d,u=Math.sin(t*c)/d;return this._w=a*m+this._w*u,this._x=r*m+this._x*u,this._y=n*m+this._y*u,this._z=i*m+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,r){this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(i),r*Math.cos(i),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ct.prototype.isQuaternion=!0;class P{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,a=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*a,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*a,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,a=e.y,s=e.z,l=e.w,d=l*t+a*n-s*r,c=l*r+s*t-i*n,m=l*n+i*r-a*t,u=-i*t-a*r-s*n;return this.x=d*l+u*-i+c*-s-m*-a,this.y=c*l+u*-a+m*-i-d*-s,this.z=m*l+u*-s+d*-a-c*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,a=t.x,s=t.y,l=t.z;return this.x=n*l-i*s,this.y=i*a-r*l,this.z=r*s-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}P.prototype.isVector3=!0;const Ka=new P,Zd=new ct;class Nt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,n=1/0,i=-1/0,a=-1/0,s=-1/0;for(let l=0,d=e.length;l<d;l+=3){const c=e[l],m=e[l+1],u=e[l+2];c<t&&(t=c),m<r&&(r=m),u<n&&(n=u),c>i&&(i=c),m>a&&(a=m),u>s&&(s=u)}return this.min.set(t,r,n),this.max.set(i,a,s),this}setFromBufferAttribute(e){let t=1/0,r=1/0,n=1/0,i=-1/0,a=-1/0,s=-1/0;for(let l=0,d=e.count;l<d;l++){const c=e.getX(l),m=e.getY(l),u=e.getZ(l);c<t&&(t=c),m<r&&(r=m),u<n&&(n=u),c>i&&(i=c),m>a&&(a=m),u>s&&(s=u)}return this.min.set(t,r,n),this.max.set(i,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Za.copy(t.boundingBox),Za.applyMatrix4(e.matrixWorld),this.union(Za));const r=e.children;for(let n=0,i=r.length;n<i;n++)this.expandByObject(r[n]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(In),wi.subVectors(this.max,In),Oo.subVectors(e.a,In),Do.subVectors(e.b,In),Fo.subVectors(e.c,In),Pr.subVectors(Do,Oo),wr.subVectors(Fo,Do),lo.subVectors(Oo,Fo);let t=[0,-Pr.z,Pr.y,0,-wr.z,wr.y,0,-lo.z,lo.y,Pr.z,0,-Pr.x,wr.z,0,-wr.x,lo.z,0,-lo.x,-Pr.y,Pr.x,0,-wr.y,wr.x,0,-lo.y,lo.x,0];return!Qa(t,Oo,Do,Fo,wi)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Oo,Do,Fo,wi))?!1:(Li.crossVectors(Pr,wr),t=[Li.x,Li.y,Li.z],Qa(t,Oo,Do,Fo,wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Nt.prototype.isBox3=!0;const ar=[new P,new P,new P,new P,new P,new P,new P,new P],Bn=new P,Za=new Nt,Oo=new P,Do=new P,Fo=new P,Pr=new P,wr=new P,lo=new P,In=new P,wi=new P,Li=new P,co=new P;function Qa(o,e,t,r,n){for(let i=0,a=o.length-3;i<=a;i+=3){co.fromArray(o,i);const s=n.x*Math.abs(co.x)+n.y*Math.abs(co.y)+n.z*Math.abs(co.z),l=e.dot(co),d=t.dot(co),c=r.dot(co);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>s)return!1}return!0}const y0=new Nt,Qd=new P,Ya=new P,Ja=new P;class mo{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):y0.setFromPoints(e).getCenter(r);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ja.subVectors(e,this.center);const t=Ja.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.add(Ja.multiplyScalar(n/r)),this.radius+=n}return this}union(e){return Ya.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Qd.copy(e.center).add(Ya)),this.expandByPoint(Qd.copy(e.center).sub(Ya)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new P,ja=new P,Ei=new P,Lr=new P,qa=new P,$i=new P,es=new P;class Uo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.direction).multiplyScalar(t).add(this.origin),sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){ja.copy(e).add(t).multiplyScalar(.5),Ei.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(ja);const i=e.distanceTo(t)*.5,a=-this.direction.dot(Ei),s=Lr.dot(this.direction),l=-Lr.dot(Ei),d=Lr.lengthSq(),c=Math.abs(1-a*a);let m,u,g,x;if(c>0)if(m=a*l-s,u=a*s-l,x=i*c,m>=0)if(u>=-x)if(u<=x){const f=1/c;m*=f,u*=f,g=m*(m+a*u+2*s)+u*(a*m+u+2*l)+d}else u=i,m=Math.max(0,-(a*u+s)),g=-m*m+u*(u+2*l)+d;else u=-i,m=Math.max(0,-(a*u+s)),g=-m*m+u*(u+2*l)+d;else u<=-x?(m=Math.max(0,-(-a*i+s)),u=m>0?-i:Math.min(Math.max(-i,-l),i),g=-m*m+u*(u+2*l)+d):u<=x?(m=0,u=Math.min(Math.max(-i,-l),i),g=u*(u+2*l)+d):(m=Math.max(0,-(a*i+s)),u=m>0?i:Math.min(Math.max(-i,-l),i),g=-m*m+u*(u+2*l)+d);else u=a>0?-i:i,m=Math.max(0,-(a*u+s)),g=-m*m+u*(u+2*l)+d;return r&&r.copy(this.direction).multiplyScalar(m).add(this.origin),n&&n.copy(Ei).multiplyScalar(u).add(ja),g}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const r=sr.dot(this.direction),n=sr.dot(sr)-r*r,i=e.radius*e.radius;if(n>i)return null;const a=Math.sqrt(i-n),s=r-a,l=r+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,a,s,l;const d=1/this.direction.x,c=1/this.direction.y,m=1/this.direction.z,u=this.origin;return d>=0?(r=(e.min.x-u.x)*d,n=(e.max.x-u.x)*d):(r=(e.max.x-u.x)*d,n=(e.min.x-u.x)*d),c>=0?(i=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(i=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),r>a||i>n||((i>r||r!==r)&&(r=i),(a<n||n!==n)&&(n=a),m>=0?(s=(e.min.z-u.z)*m,l=(e.max.z-u.z)*m):(s=(e.max.z-u.z)*m,l=(e.min.z-u.z)*m),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,r,n,i){qa.subVectors(t,e),$i.subVectors(r,e),es.crossVectors(qa,$i);let a=this.direction.dot(es),s;if(a>0){if(n)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Lr.subVectors(this.origin,e);const l=s*this.direction.dot($i.crossVectors(Lr,$i));if(l<0)return null;const d=s*this.direction.dot(qa.cross(Lr));if(d<0||l+d>a)return null;const c=-s*Lr.dot(es);return c<0?null:this.at(c/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,n,i,a,s,l,d,c,m,u,g,x,f,S){const h=this.elements;return h[0]=e,h[4]=t,h[8]=r,h[12]=n,h[1]=i,h[5]=a,h[9]=s,h[13]=l,h[2]=d,h[6]=c,h[10]=m,h[14]=u,h[3]=g,h[7]=x,h[11]=f,h[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Vo.setFromMatrixColumn(e,0).length(),i=1/Vo.setFromMatrixColumn(e,1).length(),a=1/Vo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,r=e.x,n=e.y,i=e.z,a=Math.cos(r),s=Math.sin(r),l=Math.cos(n),d=Math.sin(n),c=Math.cos(i),m=Math.sin(i);if(e.order==="XYZ"){const u=a*c,g=a*m,x=s*c,f=s*m;t[0]=l*c,t[4]=-l*m,t[8]=d,t[1]=g+x*d,t[5]=u-f*d,t[9]=-s*l,t[2]=f-u*d,t[6]=x+g*d,t[10]=a*l}else if(e.order==="YXZ"){const u=l*c,g=l*m,x=d*c,f=d*m;t[0]=u+f*s,t[4]=x*s-g,t[8]=a*d,t[1]=a*m,t[5]=a*c,t[9]=-s,t[2]=g*s-x,t[6]=f+u*s,t[10]=a*l}else if(e.order==="ZXY"){const u=l*c,g=l*m,x=d*c,f=d*m;t[0]=u-f*s,t[4]=-a*m,t[8]=x+g*s,t[1]=g+x*s,t[5]=a*c,t[9]=f-u*s,t[2]=-a*d,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const u=a*c,g=a*m,x=s*c,f=s*m;t[0]=l*c,t[4]=x*d-g,t[8]=u*d+f,t[1]=l*m,t[5]=f*d+u,t[9]=g*d-x,t[2]=-d,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,g=a*d,x=s*l,f=s*d;t[0]=l*c,t[4]=f-u*m,t[8]=x*m+g,t[1]=m,t[5]=a*c,t[9]=-s*c,t[2]=-d*c,t[6]=g*m+x,t[10]=u-f*m}else if(e.order==="XZY"){const u=a*l,g=a*d,x=s*l,f=s*d;t[0]=l*c,t[4]=-m,t[8]=d*c,t[1]=u*m+f,t[5]=a*c,t[9]=g*m-x,t[2]=x*m-g,t[6]=s*c,t[10]=f*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b0,e,P0)}lookAt(e,t,r){const n=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),Er.crossVectors(r,Et),Er.lengthSq()===0&&(Math.abs(r.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),Er.crossVectors(r,Et)),Er.normalize(),Ci.crossVectors(Et,Er),n[0]=Er.x,n[4]=Ci.x,n[8]=Et.x,n[1]=Er.y,n[5]=Ci.y,n[9]=Et.y,n[2]=Er.z,n[6]=Ci.z,n[10]=Et.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],s=r[4],l=r[8],d=r[12],c=r[1],m=r[5],u=r[9],g=r[13],x=r[2],f=r[6],S=r[10],h=r[14],p=r[3],_=r[7],M=r[11],b=r[15],w=n[0],v=n[4],$=n[8],R=n[12],C=n[1],L=n[5],J=n[9],N=n[13],B=n[2],D=n[6],I=n[10],F=n[14],j=n[3],le=n[7],fe=n[11],ne=n[15];return i[0]=a*w+s*C+l*B+d*j,i[4]=a*v+s*L+l*D+d*le,i[8]=a*$+s*J+l*I+d*fe,i[12]=a*R+s*N+l*F+d*ne,i[1]=c*w+m*C+u*B+g*j,i[5]=c*v+m*L+u*D+g*le,i[9]=c*$+m*J+u*I+g*fe,i[13]=c*R+m*N+u*F+g*ne,i[2]=x*w+f*C+S*B+h*j,i[6]=x*v+f*L+S*D+h*le,i[10]=x*$+f*J+S*I+h*fe,i[14]=x*R+f*N+S*F+h*ne,i[3]=p*w+_*C+M*B+b*j,i[7]=p*v+_*L+M*D+b*le,i[11]=p*$+_*J+M*I+b*fe,i[15]=p*R+_*N+M*F+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],a=e[1],s=e[5],l=e[9],d=e[13],c=e[2],m=e[6],u=e[10],g=e[14],x=e[3],f=e[7],S=e[11],h=e[15];return x*(+i*l*m-n*d*m-i*s*u+r*d*u+n*s*g-r*l*g)+f*(+t*l*g-t*d*u+i*a*u-n*a*g+n*d*c-i*l*c)+S*(+t*d*m-t*s*g-i*a*m+r*a*g+i*s*c-r*d*c)+h*(-n*s*c-t*l*m+t*s*u+n*a*m-r*a*u+r*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],s=e[5],l=e[6],d=e[7],c=e[8],m=e[9],u=e[10],g=e[11],x=e[12],f=e[13],S=e[14],h=e[15],p=m*S*d-f*u*d+f*l*g-s*S*g-m*l*h+s*u*h,_=x*u*d-c*S*d-x*l*g+a*S*g+c*l*h-a*u*h,M=c*f*d-x*m*d+x*s*g-a*f*g-c*s*h+a*m*h,b=x*m*l-c*f*l-x*s*u+a*f*u+c*s*S-a*m*S,w=t*p+r*_+n*M+i*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/w;return e[0]=p*v,e[1]=(f*u*i-m*S*i-f*n*g+r*S*g+m*n*h-r*u*h)*v,e[2]=(s*S*i-f*l*i+f*n*d-r*S*d-s*n*h+r*l*h)*v,e[3]=(m*l*i-s*u*i-m*n*d+r*u*d+s*n*g-r*l*g)*v,e[4]=_*v,e[5]=(c*S*i-x*u*i+x*n*g-t*S*g-c*n*h+t*u*h)*v,e[6]=(x*l*i-a*S*i-x*n*d+t*S*d+a*n*h-t*l*h)*v,e[7]=(a*u*i-c*l*i+c*n*d-t*u*d-a*n*g+t*l*g)*v,e[8]=M*v,e[9]=(x*m*i-c*f*i-x*r*g+t*f*g+c*r*h-t*m*h)*v,e[10]=(a*f*i-x*s*i+x*r*d-t*f*d-a*r*h+t*s*h)*v,e[11]=(c*s*i-a*m*i-c*r*d+t*m*d+a*r*g-t*s*g)*v,e[12]=b*v,e[13]=(c*f*n-x*m*n+x*r*u-t*f*u-c*r*S+t*m*S)*v,e[14]=(x*s*n-a*f*n-x*r*l+t*f*l+a*r*S-t*s*S)*v,e[15]=(a*m*n-c*s*n+c*r*l-t*m*l-a*r*u+t*s*u)*v,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,a=e.x,s=e.y,l=e.z,d=i*a,c=i*s;return this.set(d*a+r,d*s-n*l,d*l+n*s,0,d*s+n*l,c*s+r,c*l-n*a,0,d*l-n*s,c*l+n*a,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,a){return this.set(1,r,i,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,a=t._y,s=t._z,l=t._w,d=i+i,c=a+a,m=s+s,u=i*d,g=i*c,x=i*m,f=a*c,S=a*m,h=s*m,p=l*d,_=l*c,M=l*m,b=r.x,w=r.y,v=r.z;return n[0]=(1-(f+h))*b,n[1]=(g+M)*b,n[2]=(x-_)*b,n[3]=0,n[4]=(g-M)*w,n[5]=(1-(u+h))*w,n[6]=(S+p)*w,n[7]=0,n[8]=(x+_)*v,n[9]=(S-p)*v,n[10]=(1-(u+f))*v,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=Vo.set(n[0],n[1],n[2]).length();const a=Vo.set(n[4],n[5],n[6]).length(),s=Vo.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],Ft.copy(this);const d=1/i,c=1/a,m=1/s;return Ft.elements[0]*=d,Ft.elements[1]*=d,Ft.elements[2]*=d,Ft.elements[4]*=c,Ft.elements[5]*=c,Ft.elements[6]*=c,Ft.elements[8]*=m,Ft.elements[9]*=m,Ft.elements[10]*=m,t.setFromRotationMatrix(Ft),r.x=i,r.y=a,r.z=s,this}makePerspective(e,t,r,n,i,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const s=this.elements,l=2*i/(t-e),d=2*i/(r-n),c=(t+e)/(t-e),m=(r+n)/(r-n),u=-(a+i)/(a-i),g=-2*a*i/(a-i);return s[0]=l,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=d,s[9]=m,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=g,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,r,n,i,a){const s=this.elements,l=1/(t-e),d=1/(r-n),c=1/(a-i),m=(t+e)*l,u=(r+n)*d,g=(a+i)*c;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-m,s[1]=0,s[5]=2*d,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-g,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}ue.prototype.isMatrix4=!0;const Vo=new P,Ft=new ue,b0=new P(0,0,0),P0=new P(1,1,1),Er=new P,Ci=new P,Et=new P,Yd=new ue,Jd=new ct;class Ho{constructor(e=0,t=0,r=0,n=Ho.DefaultOrder){this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],a=n[4],s=n[8],l=n[1],d=n[5],c=n[9],m=n[2],u=n[6],g=n[10];switch(t){case"XYZ":this._y=Math.asin(Lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-m,i),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Lt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-m,i)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(s,i)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new P(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ho.prototype.isEuler=!0;Ho.DefaultOrder="XYZ";Ho.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class w0{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let L0=0;const jd=new P,Xo=new ct,lr=new ue,Gi=new P,Rn=new P,E0=new P,$0=new ct,qd=new P(1,0,0),ec=new P(0,1,0),tc=new P(0,0,1),C0={type:"added"},rc={type:"removed"};class Re extends br{constructor(){super();Object.defineProperty(this,"id",{value:L0++}),this.uuid=Gt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DefaultUp.clone();const e=new P,t=new Ho,r=new ct,n=new P(1,1,1);function i(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ue},normalMatrix:{value:new dt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Re.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new w0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return jd.copy(e).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Gi.copy(e):Gi.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Rn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Rn,Gi,this.up):lr.lookAt(Gi,Rn,this.up),this.quaternion.setFromRotationMatrix(lr),n&&(lr.extractRotation(n.matrixWorld),Xo.setFromRotationMatrix(lr),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(C0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(rc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rn,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rn,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function i(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){const m=l[d];i(e.shapes,m)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,d=this.material.length;l<d;l++)s.push(i(e.materials,this.material[l]));n.material=s}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(i(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),d=a(e.textures),c=a(e.images),m=a(e.shapes),u=a(e.skeletons),g=a(e.animations);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),d.length>0&&(r.textures=d),c.length>0&&(r.images=c),m.length>0&&(r.shapes=m),u.length>0&&(r.skeletons=u),g.length>0&&(r.animations=g)}return r.object=n,r;function a(s){const l=[];for(const d in s){const c=s[d];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Re.DefaultUp=new P(0,1,0);Re.DefaultMatrixAutoUpdate=!0;Re.prototype.isObject3D=!0;const Ut=new P,dr=new P,ts=new P,cr=new P,ko=new P,Wo=new P,oc=new P,rs=new P,os=new P,ns=new P;class qe{constructor(e=new P,t=new P,r=new P){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Ut.subVectors(e,t),n.cross(Ut);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){Ut.subVectors(n,t),dr.subVectors(r,t),ts.subVectors(e,t);const a=Ut.dot(Ut),s=Ut.dot(dr),l=Ut.dot(ts),d=dr.dot(dr),c=dr.dot(ts),m=a*d-s*s;if(m===0)return i.set(-2,-1,-1);const u=1/m,g=(d*l-s*c)*u,x=(a*c-s*l)*u;return i.set(1-g-x,x,g)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,cr),cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getUV(e,t,r,n,i,a,s,l){return this.getBarycoord(e,t,r,n,cr),l.set(0,0),l.addScaledVector(i,cr.x),l.addScaledVector(a,cr.y),l.addScaledVector(s,cr.z),l}static isFrontFacing(e,t,r,n){return Ut.subVectors(r,t),dr.subVectors(e,t),Ut.cross(dr).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Ut.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qe.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qe.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,i){return qe.getUV(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return qe.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qe.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let a,s;ko.subVectors(n,r),Wo.subVectors(i,r),rs.subVectors(e,r);const l=ko.dot(rs),d=Wo.dot(rs);if(l<=0&&d<=0)return t.copy(r);os.subVectors(e,n);const c=ko.dot(os),m=Wo.dot(os);if(c>=0&&m<=c)return t.copy(n);const u=l*m-c*d;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(r).addScaledVector(ko,a);ns.subVectors(e,i);const g=ko.dot(ns),x=Wo.dot(ns);if(x>=0&&g<=x)return t.copy(i);const f=g*d-l*x;if(f<=0&&d>=0&&x<=0)return s=d/(d-x),t.copy(r).addScaledVector(Wo,s);const S=c*x-g*m;if(S<=0&&m-c>=0&&g-x>=0)return oc.subVectors(i,n),s=(m-c)/(m-c+(g-x)),t.copy(n).addScaledVector(oc,s);const h=1/(S+f+u);return a=f*h,s=u*h,t.copy(r).addScaledVector(ko,a).addScaledVector(Wo,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let G0=0;class ot extends br{constructor(){super();Object.defineProperty(this,"id",{value:G0++}),this.uuid=Gt(),this.name="",this.type="Material",this.fog=!0,this.blending=yn,this.side=Po,this.vertexColors=!1,this.opacity=1,this.format=ht,this.transparent=!1,this.blendSrc=Td,this.blendDst=yd,this.blendEquation=wo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===fd;continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==yn&&(r.blending=this.blending),this.side!==Po&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.format!==ht&&(r.format=this.format),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function n(i){const a=[];for(const s in i){const l=i[s];delete l.metadata,a.push(l)}return a}if(t){const i=n(e.textures),a=n(e.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ot.prototype.isMaterial=!0;const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={h:0,s:0,l:0},Ni={h:0,s:0,l:0};function is(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function as(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ss(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}class ie{constructor(e,t,r){return t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,r){return this.r=e,this.g=t,this.b=r,this}setHSL(e,t,r){if(e=ka(e,1),t=Lt(t,0,1),r=Lt(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,i=2*r-n;this.r=is(i,n,e+1/3),this.g=is(i,n,e),this.b=is(i,n,e-1/3)}return this}setStyle(e){function t(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const i=r[1],a=r[2];switch(i){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,t(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,t(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const s=parseFloat(n[1])/360,l=parseInt(n[2],10)/100,d=parseInt(n[3],10)/100;return t(n[4]),this.setHSL(s,l,d)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],i=n.length;if(i===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,this;if(i===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=nc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const r=t>0?1/t:1;return this.r=Math.pow(e.r,r),this.g=Math.pow(e.g,r),this.b=Math.pow(e.b,r),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,r=this.g,n=this.b,i=Math.max(t,r,n),a=Math.min(t,r,n);let s,l;const d=(a+i)/2;if(a===i)s=0,l=0;else{const c=i-a;switch(l=d<=.5?c/(i+a):c/(2-i-a),i){case t:s=(r-n)/c+(r<n?6:0);break;case r:s=(n-t)/c+2;break;case n:s=(t-r)/c+4;break}s/=6}return e.h=s,e.s=l,e.l=d,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,r){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=r,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(Ni);const r=Nn(Vt.h,Ni.h,t),n=Nn(Vt.s,Ni.s,t),i=Nn(Vt.l,Ni.l,t);return this.setHSL(r,n,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ie.NAMES=nc;ie.prototype.isColor=!0;ie.prototype.r=1;ie.prototype.g=1;ie.prototype.b=1;class $r extends ot{constructor(e){super();this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Si,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}$r.prototype.isMeshBasicMaterial=!0;const Ve=new P,Bi=new Z;class Ye{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=$n,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let r=0;for(let n=0,i=e.length;n<i;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),a=new ie),t[r++]=a.r,t[r++]=a.g,t[r++]=a.b}return this}copyVector2sArray(e){const t=this.array;let r=0;for(let n=0,i=e.length;n<i;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),a=new Z),t[r++]=a.x,t[r++]=a.y}return this}copyVector3sArray(e){const t=this.array;let r=0;for(let n=0,i=e.length;n<i;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),a=new P),t[r++]=a.x,t[r++]=a.y,t[r++]=a.z}return this}copyVector4sArray(e){const t=this.array;let r=0;for(let n=0,i=e.length;n<i;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),a=new Ue),t[r++]=a.x,t[r++]=a.y,t[r++]=a.z,t[r++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Bi.fromBufferAttribute(this,t),Bi.applyMatrix3(e),this.setXY(t,Bi.x,Bi.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix3(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.applyMatrix4(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.applyNormalMatrix(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.transformDirection(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$n&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Ye.prototype.isBufferAttribute=!0;class ic extends Ye{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ac extends Ye{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class N0 extends Ye{constructor(e,t,r){super(new Uint16Array(e),t,r)}}N0.prototype.isFloat16BufferAttribute=!0;class Je extends Ye{constructor(e,t,r){super(new Float32Array(e),t,r)}}let B0=0;const Bt=new ue,ls=new Re,zo=new P,$t=new Nt,On=new Nt,at=new P;class He extends br{constructor(){super();Object.defineProperty(this,"id",{value:B0++}),this.uuid=Gt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)>65535?ac:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new dt().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,r){return Bt.makeTranslation(e,t,r),this.applyMatrix4(Bt),this}scale(e,t,r){return Bt.makeScale(e,t,r),this.applyMatrix4(Bt),this}lookAt(e){return ls.lookAt(e),ls.updateMatrix(),this.applyMatrix4(ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zo).negate(),this.translate(zo.x,zo.y,zo.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];$t.setFromBufferAttribute(i),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const r=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors($t.min,On.min),$t.expandByPoint(at),at.addVectors($t.max,On.max),$t.expandByPoint(at)):($t.expandByPoint(On.min),$t.expandByPoint(On.max))}$t.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)at.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(at));if(t)for(let i=0,a=t.length;i<a;i++){const s=t[i],l=this.morphTargetsRelative;for(let d=0,c=s.count;d<c;d++)at.fromBufferAttribute(s,d),l&&(zo.fromBufferAttribute(e,d),at.add(zo)),n=Math.max(n,r.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,i=t.normal.array,a=t.uv.array,s=n.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ye(new Float32Array(4*s),4));const l=t.tangent.array,d=[],c=[];for(let C=0;C<s;C++)d[C]=new P,c[C]=new P;const m=new P,u=new P,g=new P,x=new Z,f=new Z,S=new Z,h=new P,p=new P;function _(C,L,J){m.fromArray(n,C*3),u.fromArray(n,L*3),g.fromArray(n,J*3),x.fromArray(a,C*2),f.fromArray(a,L*2),S.fromArray(a,J*2),u.sub(m),g.sub(m),f.sub(x),S.sub(x);const N=1/(f.x*S.y-S.x*f.y);!isFinite(N)||(h.copy(u).multiplyScalar(S.y).addScaledVector(g,-f.y).multiplyScalar(N),p.copy(g).multiplyScalar(f.x).addScaledVector(u,-S.x).multiplyScalar(N),d[C].add(h),d[L].add(h),d[J].add(h),c[C].add(p),c[L].add(p),c[J].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:r.length}]);for(let C=0,L=M.length;C<L;++C){const J=M[C],N=J.start,B=J.count;for(let D=N,I=N+B;D<I;D+=3)_(r[D+0],r[D+1],r[D+2])}const b=new P,w=new P,v=new P,$=new P;function R(C){v.fromArray(i,C*3),$.copy(v);const L=d[C];b.copy(L),b.sub(v.multiplyScalar(v.dot(L))).normalize(),w.crossVectors($,L);const N=w.dot(c[C])<0?-1:1;l[C*4]=b.x,l[C*4+1]=b.y,l[C*4+2]=b.z,l[C*4+3]=N}for(let C=0,L=M.length;C<L;++C){const J=M[C],N=J.start,B=J.count;for(let D=N,I=N+B;D<I;D+=3)R(r[D+0]),R(r[D+1]),R(r[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ye(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let u=0,g=r.count;u<g;u++)r.setXYZ(u,0,0,0);const n=new P,i=new P,a=new P,s=new P,l=new P,d=new P,c=new P,m=new P;if(e)for(let u=0,g=e.count;u<g;u+=3){const x=e.getX(u+0),f=e.getX(u+1),S=e.getX(u+2);n.fromBufferAttribute(t,x),i.fromBufferAttribute(t,f),a.fromBufferAttribute(t,S),c.subVectors(a,i),m.subVectors(n,i),c.cross(m),s.fromBufferAttribute(r,x),l.fromBufferAttribute(r,f),d.fromBufferAttribute(r,S),s.add(c),l.add(c),d.add(c),r.setXYZ(x,s.x,s.y,s.z),r.setXYZ(f,l.x,l.y,l.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let u=0,g=t.count;u<g;u+=3)n.fromBufferAttribute(t,u+0),i.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,i),m.subVectors(n,i),c.cross(m),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const n in r){if(e.attributes[n]===void 0)continue;const a=r[n].array,s=e.attributes[n],l=s.array,d=s.itemSize*t,c=Math.min(l.length,a.length-d);for(let m=0,u=d;m<c;m++,u++)a[u]=l[m]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(s,l){const d=s.array,c=s.itemSize,m=s.normalized,u=new d.constructor(l.length*c);let g=0,x=0;for(let f=0,S=l.length;f<S;f++){s.isInterleavedBufferAttribute?g=l[f]*s.data.stride+s.offset:g=l[f]*c;for(let h=0;h<c;h++)u[x++]=d[g++]}return new Ye(u,c,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new He,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],d=e(l,r);t.setAttribute(s,d)}const i=this.morphAttributes;for(const s in i){const l=[],d=i[s];for(let c=0,m=d.length;c<m;c++){const u=d[c],g=e(u,r);l.push(g)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const d=a[s];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const d=r[l];e.data.attributes[l]=d.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],c=[];for(let m=0,u=d.length;m<u;m++){const g=d[m];c.push(g.toJSON(e.data))}c.length>0&&(n[l]=c,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const d in n){const c=n[d];this.setAttribute(d,c.clone(t))}const i=e.morphAttributes;for(const d in i){const c=[],m=i[d];for(let u=0,g=m.length;u<g;u++)c.push(m[u].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,c=a.length;d<c;d++){const m=a[d];this.addGroup(m.start,m.count,m.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}He.prototype.isBufferGeometry=!0;const sc=new ue,Ko=new Uo,ds=new mo,Cr=new P,Gr=new P,Nr=new P,cs=new P,ms=new P,us=new P,Ii=new P,Ri=new P,Oi=new P,Di=new Z,Fi=new Z,Ui=new Z,gs=new P,Vi=new P;class _t extends Re{constructor(e=new He,t=new $r){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;if(n===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),ds.copy(r.boundingSphere),ds.applyMatrix4(i),e.ray.intersectsSphere(ds)===!1)||(sc.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(sc),r.boundingBox!==null&&Ko.intersectsBox(r.boundingBox)===!1))return;let a;if(r.isBufferGeometry){const s=r.index,l=r.attributes.position,d=r.morphAttributes.position,c=r.morphTargetsRelative,m=r.attributes.uv,u=r.attributes.uv2,g=r.groups,x=r.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,S=g.length;f<S;f++){const h=g[f],p=n[h.materialIndex],_=Math.max(h.start,x.start),M=Math.min(s.count,Math.min(h.start+h.count,x.start+x.count));for(let b=_,w=M;b<w;b+=3){const v=s.getX(b),$=s.getX(b+1),R=s.getX(b+2);a=Hi(this,p,e,Ko,l,d,c,m,u,v,$,R),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const f=Math.max(0,x.start),S=Math.min(s.count,x.start+x.count);for(let h=f,p=S;h<p;h+=3){const _=s.getX(h),M=s.getX(h+1),b=s.getX(h+2);a=Hi(this,n,e,Ko,l,d,c,m,u,_,M,b),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let f=0,S=g.length;f<S;f++){const h=g[f],p=n[h.materialIndex],_=Math.max(h.start,x.start),M=Math.min(l.count,Math.min(h.start+h.count,x.start+x.count));for(let b=_,w=M;b<w;b+=3){const v=b,$=b+1,R=b+2;a=Hi(this,p,e,Ko,l,d,c,m,u,v,$,R),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const f=Math.max(0,x.start),S=Math.min(l.count,x.start+x.count);for(let h=f,p=S;h<p;h+=3){const _=h,M=h+1,b=h+2;a=Hi(this,n,e,Ko,l,d,c,m,u,_,M,b),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}}else r.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}_t.prototype.isMesh=!0;function I0(o,e,t,r,n,i,a,s){let l;if(e.side===et?l=r.intersectTriangle(a,i,n,!0,s):l=r.intersectTriangle(n,i,a,e.side!==no,s),l===null)return null;Vi.copy(s),Vi.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Vi);return d<t.near||d>t.far?null:{distance:d,point:Vi.clone(),object:o}}function Hi(o,e,t,r,n,i,a,s,l,d,c,m){Cr.fromBufferAttribute(n,d),Gr.fromBufferAttribute(n,c),Nr.fromBufferAttribute(n,m);const u=o.morphTargetInfluences;if(i&&u){Ii.set(0,0,0),Ri.set(0,0,0),Oi.set(0,0,0);for(let x=0,f=i.length;x<f;x++){const S=u[x],h=i[x];S!==0&&(cs.fromBufferAttribute(h,d),ms.fromBufferAttribute(h,c),us.fromBufferAttribute(h,m),a?(Ii.addScaledVector(cs,S),Ri.addScaledVector(ms,S),Oi.addScaledVector(us,S)):(Ii.addScaledVector(cs.sub(Cr),S),Ri.addScaledVector(ms.sub(Gr),S),Oi.addScaledVector(us.sub(Nr),S)))}Cr.add(Ii),Gr.add(Ri),Nr.add(Oi)}o.isSkinnedMesh&&(o.boneTransform(d,Cr),o.boneTransform(c,Gr),o.boneTransform(m,Nr));const g=I0(o,e,t,r,Cr,Gr,Nr,gs);if(g){s&&(Di.fromBufferAttribute(s,d),Fi.fromBufferAttribute(s,c),Ui.fromBufferAttribute(s,m),g.uv=qe.getUV(gs,Cr,Gr,Nr,Di,Fi,Ui,new Z)),l&&(Di.fromBufferAttribute(l,d),Fi.fromBufferAttribute(l,c),Ui.fromBufferAttribute(l,m),g.uv2=qe.getUV(gs,Cr,Gr,Nr,Di,Fi,Ui,new Z));const x={a:d,b:c,c:m,normal:new P,materialIndex:0};qe.getNormal(Cr,Gr,Nr,x.normal),g.face=x}return g}class Dn extends He{constructor(e=1,t=1,r=1,n=1,i=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:a};const s=this;n=Math.floor(n),i=Math.floor(i),a=Math.floor(a);const l=[],d=[],c=[],m=[];let u=0,g=0;x("z","y","x",-1,-1,r,t,e,a,i,0),x("z","y","x",1,-1,r,t,-e,a,i,1),x("x","z","y",1,1,e,r,t,n,a,2),x("x","z","y",1,-1,e,r,-t,n,a,3),x("x","y","z",1,-1,e,t,r,n,i,4),x("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(m,2));function x(f,S,h,p,_,M,b,w,v,$,R){const C=M/v,L=b/$,J=M/2,N=b/2,B=w/2,D=v+1,I=$+1;let F=0,j=0;const le=new P;for(let fe=0;fe<I;fe++){const ne=fe*L-N;for(let ye=0;ye<D;ye++){const z=ye*C-J;le[f]=z*p,le[S]=ne*_,le[h]=B,d.push(le.x,le.y,le.z),le[f]=0,le[S]=0,le[h]=w>0?1:-1,c.push(le.x,le.y,le.z),m.push(ye/v),m.push(1-fe/$),F+=1}}for(let fe=0;fe<$;fe++)for(let ne=0;ne<v;ne++){const ye=u+ne+D*fe,z=u+ne+D*(fe+1),q=u+(ne+1)+D*(fe+1),ce=u+(ne+1)+D*fe;l.push(ye,z,ce),l.push(z,q,ce),j+=6}s.addGroup(g,j,R),g+=j,u+=F}}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zo(o){const e={};for(const t in o){e[t]={};for(const r in o[t]){const n=o[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function pt(o){const e={};for(let t=0;t<o.length;t++){const r=Zo(o[t]);for(const n in r)e[n]=r[n]}return e}const R0={clone:Zo,merge:pt};var O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class uo extends ot{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=O0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}uo.prototype.isShaderMaterial=!0;class hs extends Re{constructor(){super();this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}hs.prototype.isCamera=!0;class At extends hs{constructor(e=50,t=1,r=.1,n=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gn*2*Math.atan(Math.tan(Cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cn*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,d=a.fullHeight;i+=a.offsetX*n/l,t-=a.offsetY*r/d,n*=a.width/l,r*=a.height/d}const s=this.filmOffset;s!==0&&(i+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}At.prototype.isPerspectiveCamera=!0;const Qo=90,Yo=1;class xs extends Re{constructor(e,t,r){super();if(this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const n=new At(Qo,Yo,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new P(1,0,0)),this.add(n);const i=new At(Qo,Yo,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(-1,0,0)),this.add(i);const a=new At(Qo,Yo,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new P(0,1,0)),this.add(a);const s=new At(Qo,Yo,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new P(0,-1,0)),this.add(s);const l=new At(Qo,Yo,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,1)),this.add(l);const d=new At(Qo,Yo,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new P(0,0,-1)),this.add(d)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[n,i,a,s,l,d]=this.children,c=e.xr.enabled,m=e.getRenderTarget();e.xr.enabled=!1;const u=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,n),e.setRenderTarget(r,1),e.render(t,i),e.setRenderTarget(r,2),e.render(t,a),e.setRenderTarget(r,3),e.render(t,s),e.setRenderTarget(r,4),e.render(t,l),r.texture.generateMipmaps=u,e.setRenderTarget(r,5),e.render(t,d),e.setRenderTarget(m),e.xr.enabled=c}}class Xi extends rt{constructor(e,t,r,n,i,a,s,l,d,c){e=e!==void 0?e:[],t=t!==void 0?t:bn;super(e,t,r,n,i,a,s,l,d,c);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Xi.prototype.isCubeTexture=!0;class lc extends Zt{constructor(e,t,r){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=r);super(e,e,t);t=t||{},this.texture=new Xi(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=ht,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Dn(5,5,5),i=new uo({name:"CubemapFromEquirect",uniforms:Zo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:et,blending:Tr});i.uniforms.tEquirect.value=t;const a=new _t(n,i),s=t.minFilter;return t.minFilter===Eo&&(t.minFilter=wt),new xs(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,n);e.setRenderTarget(i)}}lc.prototype.isWebGLCubeRenderTarget=!0;const ps=new P,F0=new P,U0=new dt;class mr{constructor(e=new P(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=ps.subVectors(r,t).cross(F0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const r=e.delta(ps),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(r).multiplyScalar(i).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||U0.getNormalMatrix(e),n=this.coplanarPoint(ps).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}mr.prototype.isPlane=!0;const Jo=new mo,ki=new P;class Wi{constructor(e=new mr,t=new mr,r=new mr,n=new mr,i=new mr,a=new mr){this.planes=[e,t,r,n,i,a]}set(e,t,r,n,i,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(i),s[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,n=r[0],i=r[1],a=r[2],s=r[3],l=r[4],d=r[5],c=r[6],m=r[7],u=r[8],g=r[9],x=r[10],f=r[11],S=r[12],h=r[13],p=r[14],_=r[15];return t[0].setComponents(s-n,m-l,f-u,_-S).normalize(),t[1].setComponents(s+n,m+l,f+u,_+S).normalize(),t[2].setComponents(s+i,m+d,f+g,_+h).normalize(),t[3].setComponents(s-i,m-d,f-g,_-h).normalize(),t[4].setComponents(s-a,m-c,f-x,_-p).normalize(),t[5].setComponents(s+a,m+c,f+x,_+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Jo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Jo)}intersectsSprite(e){return Jo.center.set(0,0,0),Jo.radius=.7071067811865476,Jo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jo)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(ki.x=n.normal.x>0?e.max.x:e.min.x,ki.y=n.normal.y>0?e.max.y:e.min.y,ki.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dc(){let o=null,e=!1,t=null,r=null;function n(i,a){t(i,a),r=o.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=o.requestAnimationFrame(n),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){o=i}}}function V0(o,e){const t=e.isWebGL2,r=new WeakMap;function n(d,c){const m=d.array,u=d.usage,g=o.createBuffer();o.bindBuffer(c,g),o.bufferData(c,m,u),d.onUploadCallback();let x=5126;return m instanceof Float32Array?x=5126:m instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):m instanceof Uint16Array?d.isFloat16BufferAttribute?t?x=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):x=5123:m instanceof Int16Array?x=5122:m instanceof Uint32Array?x=5125:m instanceof Int32Array?x=5124:m instanceof Int8Array?x=5120:(m instanceof Uint8Array||m instanceof Uint8ClampedArray)&&(x=5121),{buffer:g,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version}}function i(d,c,m){const u=c.array,g=c.updateRange;o.bindBuffer(m,d),g.count===-1?o.bufferSubData(m,0,u):(t?o.bufferSubData(m,g.offset*u.BYTES_PER_ELEMENT,u,g.offset,g.count):o.bufferSubData(m,g.offset*u.BYTES_PER_ELEMENT,u.subarray(g.offset,g.offset+g.count)),g.count=-1)}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),r.get(d)}function s(d){d.isInterleavedBufferAttribute&&(d=d.data);const c=r.get(d);c&&(o.deleteBuffer(c.buffer),r.delete(d))}function l(d,c){if(d.isGLBufferAttribute){const u=r.get(d);(!u||u.version<d.version)&&r.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=r.get(d);m===void 0?r.set(d,n(d,c)):m.version<d.version&&(i(m.buffer,d,c),m.version=d.version)}return{get:a,remove:s,update:l}}class fs extends He{constructor(e=1,t=1,r=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,a=t/2,s=Math.floor(r),l=Math.floor(n),d=s+1,c=l+1,m=e/s,u=t/l,g=[],x=[],f=[],S=[];for(let h=0;h<c;h++){const p=h*u-a;for(let _=0;_<d;_++){const M=_*m-i;x.push(M,-p,0),f.push(0,0,1),S.push(_/s),S.push(1-h/l)}}for(let h=0;h<l;h++)for(let p=0;p<s;p++){const _=p+d*h,M=p+d*(h+1),b=p+1+d*(h+1),w=p+1+d*h;g.push(_,M,w),g.push(M,b,w)}this.setIndex(g),this.setAttribute("position",new Je(x,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(S,2))}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,W0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0="vec3 transformed = vec3( position );",Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,J0=`#ifdef USE_BUMPMAP
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ax=`#define PI 3.141592653589793
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
}`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lx=`vec3 transformedNormal = objectNormal;
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
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`
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
}`,xx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
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
}`,bx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wx=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Lx=`uniform bool receiveShadow;
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
#endif`,Ex=`#if defined( USE_ENVMAP )
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
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Bx=`PhysicalMaterial material;
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
#endif`,Ix=`struct PhysicalMaterial {
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
}`,Rx=`
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xx=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qx=`#ifdef USE_MORPHNORMALS
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
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,Jx=`#ifdef USE_MORPHTARGETS
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
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,qx=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
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
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#ifdef USE_SHADOWMAP
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
#endif`,pp=`#ifdef USE_SHADOWMAP
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
#endif`,fp=`#ifdef USE_SHADOWMAP
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
#endif`,Sp=`float getShadowMask() {
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
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,$p=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Gp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Np=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Bp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#include <envmap_common_pars_fragment>
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
}`,Up=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,Xp=`#define DISTANCE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,Jp=`uniform vec3 diffuse;
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
}`,jp=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,e1=`#define NORMAL
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
}`,t1=`#define NORMAL
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
}`,r1=`#define PHONG
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
}`,o1=`#define PHONG
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
}`,n1=`#define STANDARD
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
}`,i1=`#define STANDARD
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
}`,a1=`#define TOON
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
}`,s1=`#define TOON
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
}`,l1=`uniform float size;
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
}`,d1=`uniform vec3 diffuse;
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
}`,c1=`#include <common>
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
}`,m1=`uniform vec3 color;
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
}`,u1=`uniform float rotation;
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
}`,g1=`uniform vec3 diffuse;
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
}`,Ee={alphamap_fragment:H0,alphamap_pars_fragment:X0,alphatest_fragment:k0,alphatest_pars_fragment:W0,aomap_fragment:z0,aomap_pars_fragment:K0,begin_vertex:Z0,beginnormal_vertex:Q0,bsdfs:Y0,bumpmap_pars_fragment:J0,clipping_planes_fragment:j0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:ex,clipping_planes_vertex:tx,color_fragment:rx,color_pars_fragment:ox,color_pars_vertex:nx,color_vertex:ix,common:ax,cube_uv_reflection_fragment:sx,defaultnormal_vertex:lx,displacementmap_pars_vertex:dx,displacementmap_vertex:cx,emissivemap_fragment:mx,emissivemap_pars_fragment:ux,encodings_fragment:gx,encodings_pars_fragment:hx,envmap_fragment:xx,envmap_common_pars_fragment:px,envmap_pars_fragment:fx,envmap_pars_vertex:Sx,envmap_physical_pars_fragment:Ex,envmap_vertex:vx,fog_vertex:Mx,fog_pars_vertex:_x,fog_fragment:Ax,fog_pars_fragment:Tx,gradientmap_pars_fragment:yx,lightmap_fragment:bx,lightmap_pars_fragment:Px,lights_lambert_vertex:wx,lights_pars_begin:Lx,lights_toon_fragment:$x,lights_toon_pars_fragment:Cx,lights_phong_fragment:Gx,lights_phong_pars_fragment:Nx,lights_physical_fragment:Bx,lights_physical_pars_fragment:Ix,lights_fragment_begin:Rx,lights_fragment_maps:Ox,lights_fragment_end:Dx,logdepthbuf_fragment:Fx,logdepthbuf_pars_fragment:Ux,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Hx,map_fragment:Xx,map_pars_fragment:kx,map_particle_fragment:Wx,map_particle_pars_fragment:zx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:Zx,morphnormal_vertex:Qx,morphtarget_pars_vertex:Yx,morphtarget_vertex:Jx,normal_fragment_begin:jx,normal_fragment_maps:qx,normal_pars_fragment:ep,normal_pars_vertex:tp,normal_vertex:rp,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:ap,output_fragment:sp,packing:lp,premultiplied_alpha_fragment:dp,project_vertex:cp,dithering_fragment:mp,dithering_pars_fragment:up,roughnessmap_fragment:gp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:pp,shadowmap_vertex:fp,shadowmask_pars_fragment:Sp,skinbase_vertex:vp,skinning_pars_vertex:Mp,skinning_vertex:_p,skinnormal_vertex:Ap,specularmap_fragment:Tp,specularmap_pars_fragment:yp,tonemapping_fragment:bp,tonemapping_pars_fragment:Pp,transmission_fragment:wp,transmission_pars_fragment:Lp,uv_pars_fragment:Ep,uv_pars_vertex:$p,uv_vertex:Cp,uv2_pars_fragment:Gp,uv2_pars_vertex:Np,uv2_vertex:Bp,worldpos_vertex:Ip,background_vert:Rp,background_frag:Op,cube_vert:Dp,cube_frag:Fp,depth_vert:Up,depth_frag:Vp,distanceRGBA_vert:Hp,distanceRGBA_frag:Xp,equirect_vert:kp,equirect_frag:Wp,linedashed_vert:zp,linedashed_frag:Kp,meshbasic_vert:Zp,meshbasic_frag:Qp,meshlambert_vert:Yp,meshlambert_frag:Jp,meshmatcap_vert:jp,meshmatcap_frag:qp,meshnormal_vert:e1,meshnormal_frag:t1,meshphong_vert:r1,meshphong_frag:o1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:a1,meshtoon_frag:s1,points_vert:l1,points_frag:d1,shadow_vert:c1,shadow_frag:m1,sprite_vert:u1,sprite_frag:g1},te={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new dt},uv2Transform:{value:new dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}}},Qt={basic:{uniforms:pt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:pt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new ie(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:pt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:pt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:pt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new ie(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:pt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:pt([te.points,te.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:pt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:pt([te.common,te.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:pt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:pt([te.sprite,te.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},cube:{uniforms:pt([te.envmap,{opacity:{value:1}}]),vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:pt([te.common,te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:pt([te.lights,te.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Qt.physical={uniforms:pt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function h1(o,e,t,r,n){const i=new ie(0);let a=0,s,l,d=null,c=0,m=null;function u(x,f){let S=!1,h=f.isScene===!0?f.background:null;h&&h.isTexture&&(h=e.get(h));const p=o.xr,_=p.getSession&&p.getSession();_&&_.environmentBlendMode==="additive"&&(h=null),h===null?g(i,a):h&&h.isColor&&(g(h,1),S=!0),(o.autoClear||S)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),h&&(h.isCubeTexture||h.mapping===vi)?(l===void 0&&(l=new _t(new Dn(1,1,1),new uo({name:"BackgroundCubeMaterial",uniforms:Zo(Qt.cube.uniforms),vertexShader:Qt.cube.vertexShader,fragmentShader:Qt.cube.fragmentShader,side:et,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=h,l.material.uniforms.flipEnvMap.value=h.isCubeTexture&&h.isRenderTargetTexture===!1?-1:1,(d!==h||c!==h.version||m!==o.toneMapping)&&(l.material.needsUpdate=!0,d=h,c=h.version,m=o.toneMapping),x.unshift(l,l.geometry,l.material,0,0,null)):h&&h.isTexture&&(s===void 0&&(s=new _t(new fs(2,2),new uo({name:"BackgroundMaterial",uniforms:Zo(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Po,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(s)),s.material.uniforms.t2D.value=h,h.matrixAutoUpdate===!0&&h.updateMatrix(),s.material.uniforms.uvTransform.value.copy(h.matrix),(d!==h||c!==h.version||m!==o.toneMapping)&&(s.material.needsUpdate=!0,d=h,c=h.version,m=o.toneMapping),x.unshift(s,s.geometry,s.material,0,0,null))}function g(x,f){t.buffers.color.setClear(x.r,x.g,x.b,f,n)}return{getClearColor:function(){return i},setClearColor:function(x,f=1){i.set(x),a=f,g(i,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(i,a)},render:u}}function x1(o,e,t,r){const n=o.getParameter(34921),i=r.isWebGL2?null:e.get("OES_vertex_array_object"),a=r.isWebGL2||i!==null,s={},l=f(null);let d=l;function c(N,B,D,I,F){let j=!1;if(a){const le=x(I,D,B);d!==le&&(d=le,u(d.object)),j=S(I,F),j&&h(I,F)}else{const le=B.wireframe===!0;(d.geometry!==I.id||d.program!==D.id||d.wireframe!==le)&&(d.geometry=I.id,d.program=D.id,d.wireframe=le,j=!0)}N.isInstancedMesh===!0&&(j=!0),F!==null&&t.update(F,34963),j&&(v(N,B,D,I),F!==null&&o.bindBuffer(34963,t.get(F).buffer))}function m(){return r.isWebGL2?o.createVertexArray():i.createVertexArrayOES()}function u(N){return r.isWebGL2?o.bindVertexArray(N):i.bindVertexArrayOES(N)}function g(N){return r.isWebGL2?o.deleteVertexArray(N):i.deleteVertexArrayOES(N)}function x(N,B,D){const I=D.wireframe===!0;let F=s[N.id];F===void 0&&(F={},s[N.id]=F);let j=F[B.id];j===void 0&&(j={},F[B.id]=j);let le=j[I];return le===void 0&&(le=f(m()),j[I]=le),le}function f(N){const B=[],D=[],I=[];for(let F=0;F<n;F++)B[F]=0,D[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:D,attributeDivisors:I,object:N,attributes:{},index:null}}function S(N,B){const D=d.attributes,I=N.attributes;let F=0;for(const j in I){const le=D[j],fe=I[j];if(le===void 0||le.attribute!==fe||le.data!==fe.data)return!0;F++}return d.attributesNum!==F||d.index!==B}function h(N,B){const D={},I=N.attributes;let F=0;for(const j in I){const le=I[j],fe={};fe.attribute=le,le.data&&(fe.data=le.data),D[j]=fe,F++}d.attributes=D,d.attributesNum=F,d.index=B}function p(){const N=d.newAttributes;for(let B=0,D=N.length;B<D;B++)N[B]=0}function _(N){M(N,0)}function M(N,B){const D=d.newAttributes,I=d.enabledAttributes,F=d.attributeDivisors;D[N]=1,I[N]===0&&(o.enableVertexAttribArray(N),I[N]=1),F[N]!==B&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,B),F[N]=B)}function b(){const N=d.newAttributes,B=d.enabledAttributes;for(let D=0,I=B.length;D<I;D++)B[D]!==N[D]&&(o.disableVertexAttribArray(D),B[D]=0)}function w(N,B,D,I,F,j){r.isWebGL2===!0&&(D===5124||D===5125)?o.vertexAttribIPointer(N,B,D,F,j):o.vertexAttribPointer(N,B,D,I,F,j)}function v(N,B,D,I){if(r.isWebGL2===!1&&(N.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const F=I.attributes,j=D.getAttributes(),le=B.defaultAttributeValues;for(const fe in j){const ne=j[fe];if(ne.location>=0){let ye=F[fe];if(ye===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor)),ye!==void 0){const z=ye.normalized,q=ye.itemSize,ce=t.get(ye);if(ce===void 0)continue;const H=ce.buffer,Se=ce.type,Ae=ce.bytesPerElement;if(ye.isInterleavedBufferAttribute){const ae=ye.data,me=ae.stride,Pe=ye.offset;if(ae&&ae.isInstancedInterleavedBuffer){for(let X=0;X<ne.locationSize;X++)M(ne.location+X,ae.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let X=0;X<ne.locationSize;X++)_(ne.location+X);o.bindBuffer(34962,H);for(let X=0;X<ne.locationSize;X++)w(ne.location+X,q/ne.locationSize,Se,z,me*Ae,(Pe+q/ne.locationSize*X)*Ae)}else{if(ye.isInstancedBufferAttribute){for(let ae=0;ae<ne.locationSize;ae++)M(ne.location+ae,ye.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ae=0;ae<ne.locationSize;ae++)_(ne.location+ae);o.bindBuffer(34962,H);for(let ae=0;ae<ne.locationSize;ae++)w(ne.location+ae,q/ne.locationSize,Se,z,q*Ae,q/ne.locationSize*ae*Ae)}}else if(le!==void 0){const z=le[fe];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(ne.location,z);break;case 3:o.vertexAttrib3fv(ne.location,z);break;case 4:o.vertexAttrib4fv(ne.location,z);break;default:o.vertexAttrib1fv(ne.location,z)}}}}b()}function $(){L();for(const N in s){const B=s[N];for(const D in B){const I=B[D];for(const F in I)g(I[F].object),delete I[F];delete B[D]}delete s[N]}}function R(N){if(s[N.id]===void 0)return;const B=s[N.id];for(const D in B){const I=B[D];for(const F in I)g(I[F].object),delete I[F];delete B[D]}delete s[N.id]}function C(N){for(const B in s){const D=s[B];if(D[N.id]===void 0)continue;const I=D[N.id];for(const F in I)g(I[F].object),delete I[F];delete D[N.id]}}function L(){J(),d!==l&&(d=l,u(d.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:L,resetDefaultState:J,dispose:$,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:p,enableAttribute:_,disableUnusedAttributes:b}}function p1(o,e,t,r){const n=r.isWebGL2;let i;function a(d){i=d}function s(d,c){o.drawArrays(i,d,c),t.update(c,i,1)}function l(d,c,m){if(m===0)return;let u,g;if(n)u=o,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](i,d,c,m),t.update(c,i,m)}this.setMode=a,this.render=s,this.renderInstances=l}function f1(o,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function i(v){if(v==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=i(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const d=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,m=o.getParameter(34930),u=o.getParameter(35660),g=o.getParameter(3379),x=o.getParameter(34076),f=o.getParameter(34921),S=o.getParameter(36347),h=o.getParameter(36348),p=o.getParameter(36349),_=u>0,M=a||e.has("OES_texture_float"),b=_&&M,w=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:d,getMaxAnisotropy:n,getMaxPrecision:i,precision:s,logarithmicDepthBuffer:c,maxTextures:m,maxVertexTextures:u,maxTextureSize:g,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:S,maxVaryings:h,maxFragmentUniforms:p,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:w}}function S1(o){const e=this;let t=null,r=0,n=!1,i=!1;const a=new mr,s=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u,g){const x=m.length!==0||u||r!==0||n;return n=u,t=c(m,g,0),r=m.length,x},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1,d()},this.setState=function(m,u,g){const x=m.clippingPlanes,f=m.clipIntersection,S=m.clipShadows,h=o.get(m);if(!n||x===null||x.length===0||i&&!S)i?c(null):d();else{const p=i?0:r,_=p*4;let M=h.clippingState||null;l.value=M,M=c(x,u,_,g);for(let b=0;b!==_;++b)M[b]=t[b];h.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=p}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function c(m,u,g,x){const f=m!==null?m.length:0;let S=null;if(f!==0){if(S=l.value,x!==!0||S===null){const h=g+f*4,p=u.matrixWorldInverse;s.getNormalMatrix(p),(S===null||S.length<h)&&(S=new Float32Array(h));for(let _=0,M=g;_!==f;++_,M+=4)a.copy(m[_]).applyMatrix4(p,s),a.normal.toArray(S,M),S[M+3]=a.constant}l.value=S,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,S}}function v1(o){let e=new WeakMap;function t(a,s){return s===Ba?a.mapping=bn:s===Ia&&(a.mapping=Pn),a}function r(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Ba||s===Ia)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const d=o.getRenderTarget(),c=new lc(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),o.setRenderTarget(d),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const s=a.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class zi extends hs{constructor(e=-1,t=1,r=1,n=-1,i=.1,a=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,a=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=d*this.view.offsetX,a=i+d*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(i,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}zi.prototype.isOrthographicCamera=!0;class Ki extends uo{constructor(e){super(e);this.type="RawShaderMaterial"}}Ki.prototype.isRawShaderMaterial=!0;const jo=4,Br=8,Yt=Math.pow(2,Br),cc=[.125,.215,.35,.446,.526,.582],mc=Br-jo+1+cc.length,qo=20,Ir={[xt]:0,[Kt]:1,[Ha]:2,[Fd]:3,[Ud]:4,[Vd]:5,[Va]:6},Ss=new zi,{_lodPlanes:Fn,_sizeLods:uc,_sigmas:Zi}=A1(),gc=new ie;let vs=null;const go=(1+Math.sqrt(5))/2,en=1/go,hc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,go,en),new P(0,go,-en),new P(en,0,go),new P(-en,0,go),new P(go,en,0),new P(-go,en,0)];class M1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=T1(qo),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){vs=this._renderer.getRenderTarget();const i=this._allocateTargets();return this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=fc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=pc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Fn.length;e++)Fn[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(vs),e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e){vs=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:tt,minFilter:tt,generateMipmaps:!1,type:yr,format:hh,encoding:_1(e)?e.encoding:Ha,depthBuffer:!1},r=xc(t);return r.depthBuffer=!e,this._pingPongRenderTarget=xc(t),r}_compileMaterial(e){const t=new _t(Fn[0],e);this._renderer.compile(t,Ss)}_sceneToCubeUV(e,t,r,n){const i=90,a=1,s=new At(i,a,t,r),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,m=c.autoClear,u=c.outputEncoding,g=c.toneMapping;c.getClearColor(gc),c.toneMapping=io,c.outputEncoding=xt,c.autoClear=!1;const x=new $r({name:"PMREM.Background",side:et,depthWrite:!1,depthTest:!1}),f=new _t(new Dn,x);let S=!1;const h=e.background;h?h.isColor&&(x.color.copy(h),e.background=null,S=!0):(x.color.copy(gc),S=!0);for(let p=0;p<6;p++){const _=p%3;_==0?(s.up.set(0,l[p],0),s.lookAt(d[p],0,0)):_==1?(s.up.set(0,0,l[p]),s.lookAt(0,d[p],0)):(s.up.set(0,l[p],0),s.lookAt(0,0,d[p])),Qi(n,_*Yt,p>2?Yt:0,Yt,Yt),c.setRenderTarget(n),S&&c.render(f,s),c.render(e,s)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=g,c.outputEncoding=u,c.autoClear=m,e.background=h}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===ht&&t.type===yr&&t.encoding===Kt?e.value=Ir[xt]:e.value=Ir[t.encoding]}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===bn||e.mapping===Pn;n?this._cubemapShader==null&&(this._cubemapShader=fc()):this._equirectShader==null&&(this._equirectShader=pc());const i=n?this._cubemapShader:this._equirectShader,a=new _t(Fn[0],i),s=i.uniforms;s.envMap.value=e,n||s.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(s.inputEncoding,e),this._setEncoding(s.outputEncoding,t.texture),Qi(t,0,0,3*Yt,2*Yt),r.setRenderTarget(t),r.render(a,Ss)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<mc;n++){const i=Math.sqrt(Zi[n]*Zi[n]-Zi[n-1]*Zi[n-1]),a=hc[(n-1)%hc.length];this._blur(e,n-1,n,i,a)}t.autoClear=r}_blur(e,t,r,n,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,n,"latitudinal",i),this._halfBlur(a,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,a,s){const l=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,m=new _t(Fn[n],d),u=d.uniforms,g=uc[r]-1,x=isFinite(i)?Math.PI/(2*g):2*Math.PI/(2*qo-1),f=i/x,S=isFinite(i)?1+Math.floor(c*f):qo;S>qo&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qo}`);const h=[];let p=0;for(let w=0;w<qo;++w){const v=w/f,$=Math.exp(-v*v/2);h.push($),w==0?p+=$:w<S&&(p+=2*$)}for(let w=0;w<h.length;w++)h[w]=h[w]/p;u.envMap.value=e.texture,u.samples.value=S,u.weights.value=h,u.latitudinal.value=a==="latitudinal",s&&(u.poleAxis.value=s),u.dTheta.value=x,u.mipInt.value=Br-r,this._setEncoding(u.inputEncoding,e.texture),this._setEncoding(u.outputEncoding,e.texture);const _=uc[n],M=3*Math.max(0,Yt-2*_),b=(n===0?0:2*Yt)+2*_*(n>Br-jo?n-Br+jo:0);Qi(t,M,b,3*_,2*_),l.setRenderTarget(t),l.render(m,Ss)}}function _1(o){return o===void 0||o.type!==yr?!1:o.encoding===xt||o.encoding===Kt||o.encoding===Va}function A1(){const o=[],e=[],t=[];let r=Br;for(let n=0;n<mc;n++){const i=Math.pow(2,r);e.push(i);let a=1/i;n>Br-jo?a=cc[n-Br+jo-1]:n==0&&(a=0),t.push(a);const s=1/(i-1),l=-s/2,d=1+s/2,c=[l,l,d,l,d,d,l,l,d,d,l,d],m=6,u=6,g=3,x=2,f=1,S=new Float32Array(g*u*m),h=new Float32Array(x*u*m),p=new Float32Array(f*u*m);for(let M=0;M<m;M++){const b=M%3*2/3-1,w=M>2?0:-1,v=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];S.set(v,g*u*M),h.set(c,x*u*M);const $=[M,M,M,M,M,M];p.set($,f*u*M)}const _=new He;_.setAttribute("position",new Ye(S,g)),_.setAttribute("uv",new Ye(h,x)),_.setAttribute("faceIndex",new Ye(p,f)),o.push(_),r>jo&&r--}return{_lodPlanes:o,_sizeLods:e,_sigmas:t}}function xc(o){const e=new Zt(3*Yt,3*Yt,o);return e.texture.mapping=vi,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Qi(o,e,t,r,n){o.viewport.set(e,t,r,n),o.scissor.set(e,t,r,n)}function T1(o){const e=new Float32Array(o),t=new P(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:o},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Ir[xt]},outputEncoding:{value:Ir[xt]}},vertexShader:Ms(),fragmentShader:`

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

			${_s()}

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function pc(){const o=new Z(1,1);return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:o},inputEncoding:{value:Ir[xt]},outputEncoding:{value:Ir[xt]}},vertexShader:Ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${_s()}

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function fc(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Ir[xt]},outputEncoding:{value:Ir[xt]}},vertexShader:Ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${_s()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Ms(){return`

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
	`}function _s(){return`

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
	`}function y1(o){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const l=s.mapping,d=l===Ba||l===Ia,c=l===bn||l===Pn;if(d||c){if(e.has(s))return e.get(s).texture;{const m=s.image;if(d&&m&&m.height>0||c&&m&&n(m)){const u=o.getRenderTarget();t===null&&(t=new M1(o));const g=d?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,g),o.setRenderTarget(u),s.addEventListener("dispose",i),g.texture}else return null}}}return s}function n(s){let l=0;const d=6;for(let c=0;c<d;c++)s[c]!==void 0&&l++;return l===d}function i(s){const l=s.target;l.removeEventListener("dispose",i);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function b1(o){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function P1(o,e,t,r){const n={},i=new WeakMap;function a(m){const u=m.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete n[u.id];const g=i.get(u);g&&(e.remove(g),i.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(m,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function l(m){const u=m.attributes;for(const x in u)e.update(u[x],34962);const g=m.morphAttributes;for(const x in g){const f=g[x];for(let S=0,h=f.length;S<h;S++)e.update(f[S],34962)}}function d(m){const u=[],g=m.index,x=m.attributes.position;let f=0;if(g!==null){const p=g.array;f=g.version;for(let _=0,M=p.length;_<M;_+=3){const b=p[_+0],w=p[_+1],v=p[_+2];u.push(b,w,w,v,v,b)}}else{const p=x.array;f=x.version;for(let _=0,M=p.length/3-1;_<M;_+=3){const b=_+0,w=_+1,v=_+2;u.push(b,w,w,v,v,b)}}const S=new(Wd(u)>65535?ac:ic)(u,1);S.version=f;const h=i.get(m);h&&e.remove(h),i.set(m,S)}function c(m){const u=i.get(m);if(u){const g=m.index;g!==null&&u.version<g.version&&d(m)}else d(m);return i.get(m)}return{get:s,update:l,getWireframeAttribute:c}}function w1(o,e,t,r){const n=r.isWebGL2;let i;function a(u){i=u}let s,l;function d(u){s=u.type,l=u.bytesPerElement}function c(u,g){o.drawElements(i,g,s,u*l),t.update(g,i,1)}function m(u,g,x){if(x===0)return;let f,S;if(n)f=o,S="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[S](i,g,s,u*l,x),t.update(g,i,x)}this.setMode=a,this.setIndex=d,this.render=c,this.renderInstances=m}function L1(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(i/3);break;case 1:t.lines+=s*(i/2);break;case 3:t.lines+=s*(i-1);break;case 2:t.lines+=s*i;break;case 0:t.points+=s*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}class As extends rt{constructor(e=null,t=1,r=1,n=1){super(null);this.image={data:e,width:t,height:r,depth:n},this.magFilter=tt,this.minFilter=tt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}As.prototype.isDataTexture2DArray=!0;function E1(o,e){return o[0]-e[0]}function $1(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Sc(o,e){let t=1;const r=e.isInterleavedBufferAttribute?e.data.array:e.array;r instanceof Int8Array?t=127:r instanceof Int16Array?t=32767:r instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",r),o.divideScalar(t)}function C1(o,e,t){const r={},n=new Float32Array(8),i=new WeakMap,a=new P,s=[];for(let d=0;d<8;d++)s[d]=[d,0];function l(d,c,m,u){const g=d.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position.length;let f=i.get(c);if(f===void 0||f.count!==x){f!==void 0&&f.texture.dispose();const p=c.morphAttributes.normal!==void 0,_=c.morphAttributes.position,M=c.morphAttributes.normal||[],b=c.attributes.position.count,w=p===!0?2:1;let v=b*w,$=1;v>e.maxTextureSize&&($=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const R=new Float32Array(v*$*4*x),C=new As(R,v,$,x);C.format=ht,C.type=ir;const L=w*4;for(let J=0;J<x;J++){const N=_[J],B=M[J],D=v*$*4*J;for(let I=0;I<N.count;I++){a.fromBufferAttribute(N,I),N.normalized===!0&&Sc(a,N);const F=I*L;R[D+F+0]=a.x,R[D+F+1]=a.y,R[D+F+2]=a.z,R[D+F+3]=0,p===!0&&(a.fromBufferAttribute(B,I),B.normalized===!0&&Sc(a,B),R[D+F+4]=a.x,R[D+F+5]=a.y,R[D+F+6]=a.z,R[D+F+7]=0)}}f={count:x,texture:C,size:new Z(v,$)},i.set(c,f)}let S=0;for(let p=0;p<g.length;p++)S+=g[p];const h=c.morphTargetsRelative?1:1-S;u.getUniforms().setValue(o,"morphTargetBaseInfluence",h),u.getUniforms().setValue(o,"morphTargetInfluences",g),u.getUniforms().setValue(o,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(o,"morphTargetsTextureSize",f.size)}else{const x=g===void 0?0:g.length;let f=r[c.id];if(f===void 0||f.length!==x){f=[];for(let M=0;M<x;M++)f[M]=[M,0];r[c.id]=f}for(let M=0;M<x;M++){const b=f[M];b[0]=M,b[1]=g[M]}f.sort($1);for(let M=0;M<8;M++)M<x&&f[M][1]?(s[M][0]=f[M][0],s[M][1]=f[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(E1);const S=c.morphAttributes.position,h=c.morphAttributes.normal;let p=0;for(let M=0;M<8;M++){const b=s[M],w=b[0],v=b[1];w!==Number.MAX_SAFE_INTEGER&&v?(S&&c.getAttribute("morphTarget"+M)!==S[w]&&c.setAttribute("morphTarget"+M,S[w]),h&&c.getAttribute("morphNormal"+M)!==h[w]&&c.setAttribute("morphNormal"+M,h[w]),n[M]=v,p+=v):(S&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),h&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),n[M]=0)}const _=c.morphTargetsRelative?1:1-p;u.getUniforms().setValue(o,"morphTargetBaseInfluence",_),u.getUniforms().setValue(o,"morphTargetInfluences",n)}}return{update:l}}function G1(o,e,t,r){let n=new WeakMap;function i(l){const d=r.render.frame,c=l.geometry,m=e.get(l,c);return n.get(m)!==d&&(e.update(m),n.set(m,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),m}function a(){n=new WeakMap}function s(l){const d=l.target;d.removeEventListener("dispose",s),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:i,dispose:a}}class vc extends rt{constructor(e=null,t=1,r=1,n=1){super(null);this.image={data:e,width:t,height:r,depth:n},this.magFilter=tt,this.minFilter=tt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}vc.prototype.isDataTexture3D=!0;const Mc=new rt,N1=new As,B1=new vc,_c=new Xi,Ac=[],Tc=[],yc=new Float32Array(16),bc=new Float32Array(9),Pc=new Float32Array(4);function tn(o,e,t){const r=o[0];if(r<=0||r>0)return o;const n=e*t;let i=Ac[n];if(i===void 0&&(i=new Float32Array(n),Ac[n]=i),e!==0){r.toArray(i,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(i,s)}return i}function Tt(o,e){if(o.length!==e.length)return!1;for(let t=0,r=o.length;t<r;t++)if(o[t]!==e[t])return!1;return!0}function ft(o,e){for(let t=0,r=e.length;t<r;t++)o[t]=e[t]}function wc(o,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let r=0;r!==e;++r)t[r]=o.allocateTextureUnit();return t}function I1(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function R1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2fv(this.addr,e),ft(t,e)}}function O1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;o.uniform3fv(this.addr,e),ft(t,e)}}function D1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4fv(this.addr,e),ft(t,e)}}function F1(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(Tt(t,r))return;Pc.set(r),o.uniformMatrix2fv(this.addr,!1,Pc),ft(t,r)}}function U1(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(Tt(t,r))return;bc.set(r),o.uniformMatrix3fv(this.addr,!1,bc),ft(t,r)}}function V1(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(Tt(t,r))return;yc.set(r),o.uniformMatrix4fv(this.addr,!1,yc),ft(t,r)}}function H1(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function X1(o,e){const t=this.cache;Tt(t,e)||(o.uniform2iv(this.addr,e),ft(t,e))}function k1(o,e){const t=this.cache;Tt(t,e)||(o.uniform3iv(this.addr,e),ft(t,e))}function W1(o,e){const t=this.cache;Tt(t,e)||(o.uniform4iv(this.addr,e),ft(t,e))}function z1(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function K1(o,e){const t=this.cache;Tt(t,e)||(o.uniform2uiv(this.addr,e),ft(t,e))}function Z1(o,e){const t=this.cache;Tt(t,e)||(o.uniform3uiv(this.addr,e),ft(t,e))}function Q1(o,e){const t=this.cache;Tt(t,e)||(o.uniform4uiv(this.addr,e),ft(t,e))}function Y1(o,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(o.uniform1i(this.addr,n),r[0]=n),t.safeSetTexture2D(e||Mc,n)}function J1(o,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(o.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||B1,n)}function j1(o,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(o.uniform1i(this.addr,n),r[0]=n),t.safeSetTextureCube(e||_c,n)}function q1(o,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(o.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||N1,n)}function ef(o){switch(o){case 5126:return I1;case 35664:return R1;case 35665:return O1;case 35666:return D1;case 35674:return F1;case 35675:return U1;case 35676:return V1;case 5124:case 35670:return H1;case 35667:case 35671:return X1;case 35668:case 35672:return k1;case 35669:case 35673:return W1;case 5125:return z1;case 36294:return K1;case 36295:return Z1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return q1}}function tf(o,e){o.uniform1fv(this.addr,e)}function rf(o,e){const t=tn(e,this.size,2);o.uniform2fv(this.addr,t)}function of(o,e){const t=tn(e,this.size,3);o.uniform3fv(this.addr,t)}function nf(o,e){const t=tn(e,this.size,4);o.uniform4fv(this.addr,t)}function af(o,e){const t=tn(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function sf(o,e){const t=tn(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function lf(o,e){const t=tn(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function df(o,e){o.uniform1iv(this.addr,e)}function cf(o,e){o.uniform2iv(this.addr,e)}function mf(o,e){o.uniform3iv(this.addr,e)}function uf(o,e){o.uniform4iv(this.addr,e)}function gf(o,e){o.uniform1uiv(this.addr,e)}function hf(o,e){o.uniform2uiv(this.addr,e)}function xf(o,e){o.uniform3uiv(this.addr,e)}function pf(o,e){o.uniform4uiv(this.addr,e)}function ff(o,e,t){const r=e.length,n=wc(t,r);o.uniform1iv(this.addr,n);for(let i=0;i!==r;++i)t.safeSetTexture2D(e[i]||Mc,n[i])}function Sf(o,e,t){const r=e.length,n=wc(t,r);o.uniform1iv(this.addr,n);for(let i=0;i!==r;++i)t.safeSetTextureCube(e[i]||_c,n[i])}function vf(o){switch(o){case 5126:return tf;case 35664:return rf;case 35665:return of;case 35666:return nf;case 35674:return af;case 35675:return sf;case 35676:return lf;case 5124:case 35670:return df;case 35667:case 35671:return cf;case 35668:case 35672:return mf;case 35669:case 35673:return uf;case 5125:return gf;case 36294:return hf;case 36295:return xf;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35680:case 36300:case 36308:case 36293:return Sf}}function Mf(o,e,t){this.id=o,this.addr=t,this.cache=[],this.setValue=ef(e.type)}function Lc(o,e,t){this.id=o,this.addr=t,this.cache=[],this.size=e.size,this.setValue=vf(e.type)}Lc.prototype.updateCache=function(o){const e=this.cache;o instanceof Float32Array&&e.length!==o.length&&(this.cache=new Float32Array(o.length)),ft(e,o)};function Ec(o){this.id=o,this.seq=[],this.map={}}Ec.prototype.setValue=function(o,e,t){const r=this.seq;for(let n=0,i=r.length;n!==i;++n){const a=r[n];a.setValue(o,e[a.id],t)}};const Ts=/(\w+)(\])?(\[|\.)?/g;function $c(o,e){o.seq.push(e),o.map[e.id]=e}function _f(o,e,t){const r=o.name,n=r.length;for(Ts.lastIndex=0;;){const i=Ts.exec(r),a=Ts.lastIndex;let s=i[1];const l=i[2]==="]",d=i[3];if(l&&(s=s|0),d===void 0||d==="["&&a+2===n){$c(t,d===void 0?new Mf(s,o,e):new Lc(s,o,e));break}else{let m=t.map[s];m===void 0&&(m=new Ec(s),$c(t,m)),t=m}}}function Rr(o,e){this.seq=[],this.map={};const t=o.getProgramParameter(e,35718);for(let r=0;r<t;++r){const n=o.getActiveUniform(e,r),i=o.getUniformLocation(e,n.name);_f(n,i,this)}}Rr.prototype.setValue=function(o,e,t,r){const n=this.map[e];n!==void 0&&n.setValue(o,t,r)};Rr.prototype.setOptional=function(o,e,t){const r=e[t];r!==void 0&&this.setValue(o,t,r)};Rr.upload=function(o,e,t,r){for(let n=0,i=e.length;n!==i;++n){const a=e[n],s=t[a.id];s.needsUpdate!==!1&&a.setValue(o,s.value,r)}};Rr.seqWithValue=function(o,e){const t=[];for(let r=0,n=o.length;r!==n;++r){const i=o[r];i.id in e&&t.push(i)}return t};function Cc(o,e,t){const r=o.createShader(e);return o.shaderSource(r,t),o.compileShader(r),r}let Af=0;function Tf(o){const e=o.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Gc(o){switch(o){case xt:return["Linear","( value )"];case Kt:return["sRGB","( value )"];case Ha:return["RGBE","( value )"];case Fd:return["RGBM","( value, 7.0 )"];case Ud:return["RGBM","( value, 16.0 )"];case Vd:return["RGBD","( value, 256.0 )"];case Va:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case r0:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Nc(o,e,t){const r=o.getShaderParameter(e,35713),n=o.getShaderInfoLog(e).trim();return r&&n===""?"":t.toUpperCase()+`

`+n+`

`+Tf(o.getShaderSource(e))}function ho(o,e){const t=Gc(e);return"vec4 "+o+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function yf(o,e){const t=Gc(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function bf(o,e){let t;switch(e){case eh:t="Linear";break;case th:t="Reinhard";break;case rh:t="OptimizedCineon";break;case oh:t="ACESFilmic";break;case nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pf(o){return[o.extensionDerivatives||o.envMapCubeUV||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Un).join(`
`)}function wf(o){const e=[];for(const t in o){const r=o[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Lf(o,e){const t={},r=o.getProgramParameter(e,35721);for(let n=0;n<r;n++){const i=o.getActiveAttrib(e,n),a=i.name;let s=1;i.type===35674&&(s=2),i.type===35675&&(s=3),i.type===35676&&(s=4),t[a]={type:i.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function Un(o){return o!==""}function Bc(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ef=/^[ \t]*#include +<([\w\d./]+)>/gm;function ys(o){return o.replace(Ef,$f)}function $f(o,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ys(t)}const Cf=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Gf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(o){return o.replace(Gf,Oc).replace(Cf,Nf)}function Nf(o,e,t,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Oc(o,e,t,r)}function Oc(o,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function Dc(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bf(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Gg?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function If(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case bn:case Pn:e="ENVMAP_TYPE_CUBE";break;case vi:case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rf(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Pn:case Ra:e="ENVMAP_MODE_REFRACTION";break}return e}function Of(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Si:e="ENVMAP_BLENDING_MULTIPLY";break;case jg:e="ENVMAP_BLENDING_MIX";break;case qg:e="ENVMAP_BLENDING_ADD";break}return e}function Df(o,e,t,r){const n=o.getContext(),i=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=Bf(t),d=If(t),c=Rf(t),m=Of(t),u=o.gammaFactor>0?o.gammaFactor:1,g=t.isWebGL2?"":Pf(t),x=wf(i),f=n.createProgram();let S,h,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=[x].filter(Un).join(`
`),S.length>0&&(S+=`
`),h=[g,x].filter(Un).join(`
`),h.length>0&&(h+=`
`)):(S=[Dc(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+u,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Un).join(`
`),h=[g,Dc(t),"#define SHADER_NAME "+t.shaderName,x,"#define GAMMA_FACTOR "+u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==io?"#define TONE_MAPPING":"",t.toneMapping!==io?Ee.tonemapping_pars_fragment:"",t.toneMapping!==io?bf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===ao?"#define OPAQUE":"",Ee.encodings_pars_fragment,t.map?ho("mapTexelToLinear",t.mapEncoding):"",t.matcap?ho("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?ho("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?ho("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?ho("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?ho("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?ho("lightMapTexelToLinear",t.lightMapEncoding):"",yf("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Un).join(`
`)),a=ys(a),a=Bc(a,t),a=Ic(a,t),s=ys(s),s=Bc(s,t),s=Ic(s,t),a=Rc(a),s=Rc(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,h=["#define varying in",t.glslVersion===Hd?"":"out highp vec4 pc_fragColor;",t.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=p+S+a,M=p+h+s,b=Cc(n,35633,_),w=Cc(n,35632,M);if(n.attachShader(f,b),n.attachShader(f,w),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f),o.debug.checkShaderErrors){const R=n.getProgramInfoLog(f).trim(),C=n.getShaderInfoLog(b).trim(),L=n.getShaderInfoLog(w).trim();let J=!0,N=!0;if(n.getProgramParameter(f,35714)===!1){J=!1;const B=Nc(n,b,"vertex"),D=Nc(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,35715)+`

Program Info Log: `+R+`
`+B+`
`+D)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(C===""||L==="")&&(N=!1);N&&(this.diagnostics={runnable:J,programLog:R,vertexShader:{log:C,prefix:S},fragmentShader:{log:L,prefix:h}})}n.deleteShader(b),n.deleteShader(w);let v;this.getUniforms=function(){return v===void 0&&(v=new Rr(n,f)),v};let $;return this.getAttributes=function(){return $===void 0&&($=Lf(n,f)),$},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=Af++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=w,this}function Ff(o,e,t,r,n,i,a){const s=[],l=n.isWebGL2,d=n.logarithmicDepthBuffer,c=n.floatVertexTextures,m=n.maxVertexUniforms,u=n.vertexTextures;let g=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},f=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function S(v){const R=v.skeleton.bones;if(c)return 1024;{const L=Math.floor((m-20)/4),J=Math.min(L,R.length);return J<R.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+R.length+" bones. This GPU supports "+J+"."),0):J}}function h(v){let $;return v&&v.isTexture?$=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),$=v.texture.encoding):$=xt,l&&v&&v.isTexture&&v.format===ht&&v.type===yr&&v.encoding===Kt&&($=xt),$}function p(v,$,R,C,L){const J=C.fog,N=v.isMeshStandardMaterial?C.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||N),D=x[v.type],I=L.isSkinnedMesh?S(L):0;v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let F,j;if(D){const z=Qt[D];F=z.vertexShader,j=z.fragmentShader}else F=v.vertexShader,j=v.fragmentShader;const le=o.getRenderTarget(),fe=v.alphaTest>0,ne=v.clearcoat>0;return{isWebGL2:l,shaderID:D,shaderName:v.type,vertexShader:F,fragmentShader:j,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,instancing:L.isInstancedMesh===!0,instancingColor:L.isInstancedMesh===!0&&L.instanceColor!==null,supportsVertexTextures:u,outputEncoding:le!==null?h(le.texture):o.outputEncoding,map:!!v.map,mapEncoding:h(v.map),matcap:!!v.matcap,matcapEncoding:h(v.matcap),envMap:!!B,envMapMode:B&&B.mapping,envMapEncoding:h(B),envMapCubeUV:!!B&&(B.mapping===vi||B.mapping===Ra),lightMap:!!v.lightMap,lightMapEncoding:h(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:h(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===i0,tangentSpaceNormalMap:v.normalMapType===so,clearcoat:ne,clearcoatMap:ne&&!!v.clearcoatMap,clearcoatRoughnessMap:ne&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ne&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,specularColorMapEncoding:h(v.specularColorMap),alphaMap:!!v.alphaMap,alphaTest:fe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenColorMapEncoding:h(v.sheenColorMap),sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!L.geometry&&!!L.geometry.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.geometry&&!!L.geometry.attributes.color&&L.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!J,useFog:v.fog,fogExp2:J&&J.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0&&I>0,maxBones:I,useVertexTexture:c,morphTargets:!!L.geometry&&!!L.geometry.morphAttributes.position,morphNormals:!!L.geometry&&!!L.geometry.morphAttributes.normal,morphTargetsCount:!!L.geometry&&!!L.geometry.morphAttributes.position?L.geometry.morphAttributes.position.length:0,numDirLights:$.directional.length,numPointLights:$.point.length,numSpotLights:$.spot.length,numRectAreaLights:$.rectArea.length,numHemiLights:$.hemi.length,numDirLightShadows:$.directionalShadowMap.length,numPointLightShadows:$.pointShadowMap.length,numSpotLightShadows:$.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:v.format,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&R.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:io,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===no,flipSided:v.side===et,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||r.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function _(v){const $=[];if(v.shaderID?$.push(v.shaderID):($.push(zd(v.fragmentShader)),$.push(zd(v.vertexShader))),v.defines!==void 0)for(const R in v.defines)$.push(R),$.push(v.defines[R]);if(v.isRawShaderMaterial===!1){for(let R=0;R<f.length;R++)$.push(v[f[R]]);$.push(o.outputEncoding),$.push(o.gammaFactor)}return $.push(v.customProgramCacheKey),$.join()}function M(v){const $=x[v.type];let R;if($){const C=Qt[$];R=R0.clone(C.uniforms)}else R=v.uniforms;return R}function b(v,$){let R;for(let C=0,L=s.length;C<L;C++){const J=s[C];if(J.cacheKey===$){R=J,++R.usedTimes;break}}return R===void 0&&(R=new Df(o,$,v,i),s.push(R)),R}function w(v){if(--v.usedTimes==0){const $=s.indexOf(v);s[$]=s[s.length-1],s.pop(),v.destroy()}}return{getParameters:p,getProgramCacheKey:_,getUniforms:M,acquireProgram:b,releaseProgram:w,programs:s}}function Uf(){let o=new WeakMap;function e(i){let a=o.get(i);return a===void 0&&(a={},o.set(i,a)),a}function t(i){o.delete(i)}function r(i,a,s){o.get(i)[a]=s}function n(){o=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function Vf(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.program!==e.program?o.program.id-e.program.id:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Fc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Uc(o){const e=[];let t=0;const r=[],n=[],i=[],a={id:-1};function s(){t=0,r.length=0,n.length=0,i.length=0}function l(g,x,f,S,h,p){let _=e[t];const M=o.get(f);return _===void 0?(_={id:g.id,object:g,geometry:x,material:f,program:M.program||a,groupOrder:S,renderOrder:g.renderOrder,z:h,group:p},e[t]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=f,_.program=M.program||a,_.groupOrder=S,_.renderOrder=g.renderOrder,_.z=h,_.group=p),t++,_}function d(g,x,f,S,h,p){const _=l(g,x,f,S,h,p);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):r.push(_)}function c(g,x,f,S,h,p){const _=l(g,x,f,S,h,p);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):r.unshift(_)}function m(g,x){r.length>1&&r.sort(g||Vf),n.length>1&&n.sort(x||Fc),i.length>1&&i.sort(x||Fc)}function u(){for(let g=t,x=e.length;g<x;g++){const f=e[g];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.program=null,f.group=null}}return{opaque:r,transmissive:n,transparent:i,init:s,push:d,unshift:c,finish:u,sort:m}}function Hf(o){let e=new WeakMap;function t(n,i){let a;return e.has(n)===!1?(a=new Uc(o),e.set(n,[a])):i>=e.get(n).length?(a=new Uc(o),e.get(n).push(a)):a=e.get(n)[i],a}function r(){e=new WeakMap}return{get:t,dispose:r}}function Xf(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ie};break;case"SpotLight":t={position:new P,direction:new P,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":t={color:new ie,position:new P,halfWidth:new P,halfHeight:new P};break}return o[e.id]=t,t}}}function kf(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Wf=0;function zf(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function Kf(o,e){const t=new Xf,r=kf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,a=new ue,s=new ue;function l(c,m){let u=0,g=0,x=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let f=0,S=0,h=0,p=0,_=0,M=0,b=0,w=0;c.sort(zf);const v=m!==!0?Math.PI:1;for(let R=0,C=c.length;R<C;R++){const L=c[R],J=L.color,N=L.intensity,B=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=J.r*N*v,g+=J.g*N*v,x+=J.b*N*v;else if(L.isLightProbe)for(let I=0;I<9;I++)n.probe[I].addScaledVector(L.sh.coefficients[I],N);else if(L.isDirectionalLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*v),L.castShadow){const F=L.shadow,j=r.get(L);j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=I,f++}else if(L.isSpotLight){const I=t.get(L);if(I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(J).multiplyScalar(N*v),I.distance=B,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,L.castShadow){const F=L.shadow,j=r.get(L);j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,n.spotShadow[h]=j,n.spotShadowMap[h]=D,n.spotShadowMatrix[h]=L.shadow.matrix,w++}n.spot[h]=I,h++}else if(L.isRectAreaLight){const I=t.get(L);I.color.copy(J).multiplyScalar(N),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=I,p++}else if(L.isPointLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*v),I.distance=L.distance,I.decay=L.decay,L.castShadow){const F=L.shadow,j=r.get(L);j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,j.shadowCameraNear=F.camera.near,j.shadowCameraFar=F.camera.far,n.pointShadow[S]=j,n.pointShadowMap[S]=D,n.pointShadowMatrix[S]=L.shadow.matrix,b++}n.point[S]=I,S++}else if(L.isHemisphereLight){const I=t.get(L);I.skyColor.copy(L.color).multiplyScalar(N*v),I.groundColor.copy(L.groundColor).multiplyScalar(N*v),n.hemi[_]=I,_++}}p>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=x;const $=n.hash;($.directionalLength!==f||$.pointLength!==S||$.spotLength!==h||$.rectAreaLength!==p||$.hemiLength!==_||$.numDirectionalShadows!==M||$.numPointShadows!==b||$.numSpotShadows!==w)&&(n.directional.length=f,n.spot.length=h,n.rectArea.length=p,n.point.length=S,n.hemi.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotShadowMatrix.length=w,$.directionalLength=f,$.pointLength=S,$.spotLength=h,$.rectAreaLength=p,$.hemiLength=_,$.numDirectionalShadows=M,$.numPointShadows=b,$.numSpotShadows=w,n.version=Wf++)}function d(c,m){let u=0,g=0,x=0,f=0,S=0;const h=m.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const M=c[p];if(M.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(h),u++}else if(M.isSpotLight){const b=n.spot[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(h),x++}else if(M.isRectAreaLight){const b=n.rectArea[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(h),s.identity(),a.copy(M.matrixWorld),a.premultiply(h),s.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),f++}else if(M.isPointLight){const b=n.point[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(h),g++}else if(M.isHemisphereLight){const b=n.hemi[S];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(h),b.direction.normalize(),S++}}}return{setup:l,setupView:d,state:n}}function Vc(o,e){const t=new Kf(o,e),r=[],n=[];function i(){r.length=0,n.length=0}function a(m){r.push(m)}function s(m){n.push(m)}function l(m){t.setup(r,m)}function d(m){t.setupView(r,m)}return{init:i,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:d,pushLight:a,pushShadow:s}}function Zf(o,e){let t=new WeakMap;function r(i,a=0){let s;return t.has(i)===!1?(s=new Vc(o,e),t.set(i,[s])):a>=t.get(i).length?(s=new Vc(o,e),t.get(i).push(s)):s=t.get(i)[a],s}function n(){t=new WeakMap}return{get:r,dispose:n}}class Hc extends ot{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=o0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Hc.prototype.isMeshDepthMaterial=!0;class Xc extends ot{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Xc.prototype.isMeshDistanceMaterial=!0;const Qf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yf=`uniform sampler2D shadow_pass;
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
}`;function kc(o,e,t){let r=new Wi;const n=new Z,i=new Z,a=new Ue,s=new Hc({depthPacking:n0}),l=new Xc,d={},c=t.maxTextureSize,m={0:et,1:Po,2:no},u=new uo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Qf,fragmentShader:Yf}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const x=new He;x.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new _t(x,u),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd,this.render=function(M,b,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||M.length===0)return;const v=o.getRenderTarget(),$=o.getActiveCubeFace(),R=o.getActiveMipmapLevel(),C=o.state;C.setBlending(Tr),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let L=0,J=M.length;L<J;L++){const N=M[L],B=N.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);const D=B.getFrameExtents();if(n.multiply(D),i.copy(B.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(i.x=Math.floor(c/D.x),n.x=i.x*D.x,B.mapSize.x=i.x),n.y>c&&(i.y=Math.floor(c/D.y),n.y=i.y*D.y,B.mapSize.y=i.y)),B.map===null&&!B.isPointLightShadow&&this.type===Tn){const F={minFilter:wt,magFilter:wt,format:ht};B.map=new Zt(n.x,n.y,F),B.map.texture.name=N.name+".shadowMap",B.mapPass=new Zt(n.x,n.y,F),B.camera.updateProjectionMatrix()}if(B.map===null){const F={minFilter:tt,magFilter:tt,format:ht};B.map=new Zt(n.x,n.y,F),B.map.texture.name=N.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const I=B.getViewportCount();for(let F=0;F<I;F++){const j=B.getViewport(F);a.set(i.x*j.x,i.y*j.y,i.x*j.z,i.y*j.w),C.viewport(a),B.updateMatrices(N,F),r=B.getFrustum(),_(b,w,B.camera,N,this.type)}!B.isPointLightShadow&&this.type===Tn&&h(B,w),B.needsUpdate=!1}S.needsUpdate=!1,o.setRenderTarget(v,$,R)};function h(M,b){const w=e.update(f);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(b,null,w,u,f,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(b,null,w,g,f,null)}function p(M,b,w,v,$,R,C){let L=null;const J=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(J!==void 0?L=J:L=v.isPointLight===!0?l:s,o.localClippingEnabled&&w.clipShadows===!0&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const N=L.uuid,B=w.uuid;let D=d[N];D===void 0&&(D={},d[N]=D);let I=D[B];I===void 0&&(I=L.clone(),D[B]=I),L=I}return L.visible=w.visible,L.wireframe=w.wireframe,C===Tn?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:m[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(v.matrixWorld),L.nearDistance=$,L.farDistance=R),L}function _(M,b,w,v,$){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&$===Tn)&&(!M.frustumCulled||r.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const L=e.update(M),J=M.material;if(Array.isArray(J)){const N=L.groups;for(let B=0,D=N.length;B<D;B++){const I=N[B],F=J[I.materialIndex];if(F&&F.visible){const j=p(M,L,F,v,w.near,w.far,$);o.renderBufferDirect(w,null,L,j,M,I)}}}else if(J.visible){const N=p(M,L,J,v,w.near,w.far,$);o.renderBufferDirect(w,null,L,N,M,null)}}const C=M.children;for(let L=0,J=C.length;L<J;L++)_(C[L],b,w,v,$)}}function Jf(o,e,t){const r=t.isWebGL2;function n(){let E=!1;const oe=new Ue;let W=null;const xe=new Ue(0,0,0,0);return{setMask:function(de){W!==de&&!E&&(o.colorMask(de,de,de,de),W=de)},setLocked:function(de){E=de},setClear:function(de,Ce,ut,gt,_r){_r===!0&&(de*=gt,Ce*=gt,ut*=gt),oe.set(de,Ce,ut,gt),xe.equals(oe)===!1&&(o.clearColor(de,Ce,ut,gt),xe.copy(oe))},reset:function(){E=!1,W=null,xe.set(-1,0,0,0)}}}function i(){let E=!1,oe=null,W=null,xe=null;return{setTest:function(de){de?q(2929):ce(2929)},setMask:function(de){oe!==de&&!E&&(o.depthMask(de),oe=de)},setFunc:function(de){if(W!==de){if(de)switch(de){case Wg:o.depthFunc(512);break;case zg:o.depthFunc(519);break;case Kg:o.depthFunc(513);break;case Na:o.depthFunc(515);break;case Zg:o.depthFunc(514);break;case Qg:o.depthFunc(518);break;case Yg:o.depthFunc(516);break;case Jg:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);W=de}},setLocked:function(de){E=de},setClear:function(de){xe!==de&&(o.clearDepth(de),xe=de)},reset:function(){E=!1,oe=null,W=null,xe=null}}}function a(){let E=!1,oe=null,W=null,xe=null,de=null,Ce=null,ut=null,gt=null,_r=null;return{setTest:function(Qe){E||(Qe?q(2960):ce(2960))},setMask:function(Qe){oe!==Qe&&!E&&(o.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,nr,Ot){(W!==Qe||xe!==nr||de!==Ot)&&(o.stencilFunc(Qe,nr,Ot),W=Qe,xe=nr,de=Ot)},setOp:function(Qe,nr,Ot){(Ce!==Qe||ut!==nr||gt!==Ot)&&(o.stencilOp(Qe,nr,Ot),Ce=Qe,ut=nr,gt=Ot)},setLocked:function(Qe){E=Qe},setClear:function(Qe){_r!==Qe&&(o.clearStencil(Qe),_r=Qe)},reset:function(){E=!1,oe=null,W=null,xe=null,de=null,Ce=null,ut=null,gt=null,_r=null}}}const s=new n,l=new i,d=new a;let c={},m=null,u={},g=null,x=!1,f=null,S=null,h=null,p=null,_=null,M=null,b=null,w=!1,v=null,$=null,R=null,C=null,L=null;const J=o.getParameter(35661);let N=!1,B=0;const D=o.getParameter(7938);D.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(D)[1]),N=B>=1):D.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),N=B>=2);let I=null,F={};const j=o.getParameter(3088),le=o.getParameter(2978),fe=new Ue().fromArray(j),ne=new Ue().fromArray(le);function ye(E,oe,W){const xe=new Uint8Array(4),de=o.createTexture();o.bindTexture(E,de),o.texParameteri(E,10241,9728),o.texParameteri(E,10240,9728);for(let Ce=0;Ce<W;Ce++)o.texImage2D(oe+Ce,0,6408,1,1,0,6408,5121,xe);return de}const z={};z[3553]=ye(3553,3553,1),z[34067]=ye(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),d.setClear(0),q(2929),l.setFunc(Na),K(!1),ee(xd),q(2884),Pe(Tr);function q(E){c[E]!==!0&&(o.enable(E),c[E]=!0)}function ce(E){c[E]!==!1&&(o.disable(E),c[E]=!1)}function H(E){E!==m&&(o.bindFramebuffer(36160,E),m=E)}function Se(E,oe){return oe===null&&m!==null&&(oe=m),u[E]!==oe?(o.bindFramebuffer(E,oe),u[E]=oe,r&&(E===36009&&(u[36160]=oe),E===36160&&(u[36009]=oe)),!0):!1}function Ae(E){return g!==E?(o.useProgram(E),g=E,!0):!1}const ae={[wo]:32774,[Bg]:32778,[Ig]:32779};if(r)ae[_d]=32775,ae[Ad]=32776;else{const E=e.get("EXT_blend_minmax");E!==null&&(ae[_d]=E.MIN_EXT,ae[Ad]=E.MAX_EXT)}const me={[Rg]:0,[Og]:1,[Dg]:768,[Td]:770,[kg]:776,[Hg]:774,[Ug]:772,[Fg]:769,[yd]:771,[Xg]:775,[Vg]:773};function Pe(E,oe,W,xe,de,Ce,ut,gt){if(E===Tr){x===!0&&(ce(3042),x=!1);return}if(x===!1&&(q(3042),x=!0),E!==Ng){if(E!==f||gt!==w){if((S!==wo||_!==wo)&&(o.blendEquation(32774),S=wo,_=wo),gt)switch(E){case yn:o.blendFuncSeparate(1,771,1,771);break;case Sd:o.blendFunc(1,1);break;case vd:o.blendFuncSeparate(0,0,769,771);break;case Md:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case yn:o.blendFuncSeparate(770,771,1,771);break;case Sd:o.blendFunc(770,1);break;case vd:o.blendFunc(0,769);break;case Md:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}h=null,p=null,M=null,b=null,f=E,w=gt}return}de=de||oe,Ce=Ce||W,ut=ut||xe,(oe!==S||de!==_)&&(o.blendEquationSeparate(ae[oe],ae[de]),S=oe,_=de),(W!==h||xe!==p||Ce!==M||ut!==b)&&(o.blendFuncSeparate(me[W],me[xe],me[Ce],me[ut]),h=W,p=xe,M=Ce,b=ut),f=E,w=null}function X(E,oe){E.side===no?ce(2884):q(2884);let W=E.side===et;oe&&(W=!W),K(W),E.blending===yn&&E.transparent===!1?Pe(Tr):Pe(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),l.setFunc(E.depthFunc),l.setTest(E.depthTest),l.setMask(E.depthWrite),s.setMask(E.colorWrite);const xe=E.stencilWrite;d.setTest(xe),xe&&(d.setMask(E.stencilWriteMask),d.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),d.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),re(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?q(32926):ce(32926)}function K(E){v!==E&&(E?o.frontFace(2304):o.frontFace(2305),v=E)}function ee(E){E!==$g?(q(2884),E!==$&&(E===xd?o.cullFace(1029):E===Cg?o.cullFace(1028):o.cullFace(1032))):ce(2884),$=E}function ge(E){E!==R&&(N&&o.lineWidth(E),R=E)}function re(E,oe,W){E?(q(32823),(C!==oe||L!==W)&&(o.polygonOffset(oe,W),C=oe,L=W)):ce(32823)}function y(E){E?q(3089):ce(3089)}function A(E){E===void 0&&(E=33984+J-1),I!==E&&(o.activeTexture(E),I=E)}function V(E,oe){I===null&&A();let W=F[I];W===void 0&&(W={type:void 0,texture:void 0},F[I]=W),(W.type!==E||W.texture!==oe)&&(o.bindTexture(E,oe||z[E]),W.type=E,W.texture=oe)}function Q(){const E=F[I];E!==void 0&&E.type!==void 0&&(o.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Y(){try{o.compressedTexImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function se(){try{o.texImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Me(){try{o.texImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function pe(E){fe.equals(E)===!1&&(o.scissor(E.x,E.y,E.z,E.w),fe.copy(E))}function Te(E){ne.equals(E)===!1&&(o.viewport(E.x,E.y,E.z,E.w),ne.copy(E))}function he(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),r===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),c={},I=null,F={},m=null,u={},g=null,x=!1,f=null,S=null,h=null,p=null,_=null,M=null,b=null,w=!1,v=null,$=null,R=null,C=null,L=null,fe.set(0,0,o.canvas.width,o.canvas.height),ne.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),d.reset()}return{buffers:{color:s,depth:l,stencil:d},enable:q,disable:ce,bindFramebuffer:Se,bindXRFramebuffer:H,useProgram:Ae,setBlending:Pe,setMaterial:X,setFlipSided:K,setCullFace:ee,setLineWidth:ge,setPolygonOffset:re,setScissorTest:y,activeTexture:A,bindTexture:V,unbindTexture:Q,compressedTexImage2D:Y,texImage2D:se,texImage3D:Me,scissor:pe,viewport:Te,reset:he}}function jf(o,e,t,r,n,i,a){const s=n.isWebGL2,l=n.maxTextures,d=n.maxCubemapSize,c=n.maxTextureSize,m=n.maxSamples,u=new WeakMap;let g,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(y,A){return x?new OffscreenCanvas(y,A):Pi("canvas")}function S(y,A,V,Q){let Y=1;if((y.width>Q||y.height>Q)&&(Y=Q/Math.max(y.width,y.height)),Y<1||A===!0)if(typeof HTMLImageElement!="undefined"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&y instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&y instanceof ImageBitmap){const se=A?kd:Math.floor,Me=se(Y*y.width),pe=se(Y*y.height);g===void 0&&(g=f(Me,pe));const Te=V?f(Me,pe):g;return Te.width=Me,Te.height=pe,Te.getContext("2d").drawImage(y,0,0,Me,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Me+"x"+pe+")."),Te}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function h(y){return Wa(y.width)&&Wa(y.height)}function p(y){return s?!1:y.wrapS!==Pt||y.wrapT!==Pt||y.minFilter!==tt&&y.minFilter!==wt}function _(y,A){return y.generateMipmaps&&A&&y.minFilter!==tt&&y.minFilter!==wt}function M(y,A,V,Q,Y=1){o.generateMipmap(y);const se=r.get(A);se.__maxMipLevel=Math.log2(Math.max(V,Q,Y))}function b(y,A,V,Q){if(s===!1)return A;if(y!==null){if(o[y]!==void 0)return o[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Y=A;return A===6403&&(V===5126&&(Y=33326),V===5131&&(Y=33325),V===5121&&(Y=33321)),A===6407&&(V===5126&&(Y=34837),V===5131&&(Y=34843),V===5121&&(Y=32849)),A===6408&&(V===5126&&(Y=34836),V===5131&&(Y=34842),V===5121&&(Y=Q===Kt?35907:32856)),(Y===33325||Y===33326||Y===34842||Y===34836)&&e.get("EXT_color_buffer_float"),Y}function w(y){return y===tt||y===Oa||y===Da?9728:9729}function v(y){const A=y.target;A.removeEventListener("dispose",v),R(A),A.isVideoTexture&&u.delete(A),a.memory.textures--}function $(y){const A=y.target;A.removeEventListener("dispose",$),C(A)}function R(y){const A=r.get(y);A.__webglInit!==void 0&&(o.deleteTexture(A.__webglTexture),r.remove(y))}function C(y){const A=y.texture,V=r.get(y),Q=r.get(A);if(!!y){if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)o.deleteFramebuffer(V.__webglFramebuffer[Y]),V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer[Y]);else o.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&o.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer&&o.deleteRenderbuffer(V.__webglColorRenderbuffer),V.__webglDepthRenderbuffer&&o.deleteRenderbuffer(V.__webglDepthRenderbuffer);if(y.isWebGLMultipleRenderTargets)for(let Y=0,se=A.length;Y<se;Y++){const Me=r.get(A[Y]);Me.__webglTexture&&(o.deleteTexture(Me.__webglTexture),a.memory.textures--),r.remove(A[Y])}r.remove(A),r.remove(y)}}let L=0;function J(){L=0}function N(){const y=L;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),L+=1,y}function B(y,A){const V=r.get(y);if(y.isVideoTexture&&X(y),y.version>0&&V.__version!==y.version){const Q=y.image;if(Q===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(V,y,A);return}}t.activeTexture(33984+A),t.bindTexture(3553,V.__webglTexture)}function D(y,A){const V=r.get(y);if(y.version>0&&V.__version!==y.version){ye(V,y,A);return}t.activeTexture(33984+A),t.bindTexture(35866,V.__webglTexture)}function I(y,A){const V=r.get(y);if(y.version>0&&V.__version!==y.version){ye(V,y,A);return}t.activeTexture(33984+A),t.bindTexture(32879,V.__webglTexture)}function F(y,A){const V=r.get(y);if(y.version>0&&V.__version!==y.version){z(V,y,A);return}t.activeTexture(33984+A),t.bindTexture(34067,V.__webglTexture)}const j={[Lo]:10497,[Pt]:33071,[Mi]:33648},le={[tt]:9728,[Oa]:9984,[Da]:9986,[wt]:9729,[Pd]:9985,[Eo]:9987};function fe(y,A,V){if(V?(o.texParameteri(y,10242,j[A.wrapS]),o.texParameteri(y,10243,j[A.wrapT]),(y===32879||y===35866)&&o.texParameteri(y,32882,j[A.wrapR]),o.texParameteri(y,10240,le[A.magFilter]),o.texParameteri(y,10241,le[A.minFilter])):(o.texParameteri(y,10242,33071),o.texParameteri(y,10243,33071),(y===32879||y===35866)&&o.texParameteri(y,32882,33071),(A.wrapS!==Pt||A.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(y,10240,w(A.magFilter)),o.texParameteri(y,10241,w(A.minFilter)),A.minFilter!==tt&&A.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(A.type===ir&&e.has("OES_texture_float_linear")===!1||s===!1&&A.type===$o&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(o.texParameterf(y,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function ne(y,A){y.__webglInit===void 0&&(y.__webglInit=!0,A.addEventListener("dispose",v),y.__webglTexture=o.createTexture(),a.memory.textures++)}function ye(y,A,V){let Q=3553;A.isDataTexture2DArray&&(Q=35866),A.isDataTexture3D&&(Q=32879),ne(y,A),t.activeTexture(33984+V),t.bindTexture(Q,y.__webglTexture),o.pixelStorei(37440,A.flipY),o.pixelStorei(37441,A.premultiplyAlpha),o.pixelStorei(3317,A.unpackAlignment),o.pixelStorei(37443,0);const Y=p(A)&&h(A.image)===!1,se=S(A.image,Y,!1,c),Me=h(se)||s,pe=i.convert(A.format);let Te=i.convert(A.type),he=b(A.internalFormat,pe,Te,A.encoding);fe(Q,A,Me);let E;const oe=A.mipmaps;if(A.isDepthTexture)he=6402,s?A.type===ir?he=36012:A.type===Ai?he=33190:A.type===wn?he=35056:he=33189:A.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Co&&he===6402&&A.type!==_i&&A.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=_i,Te=i.convert(A.type)),A.format===Ln&&he===6402&&(he=34041,A.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=wn,Te=i.convert(A.type))),t.texImage2D(3553,0,he,se.width,se.height,0,pe,Te,null);else if(A.isDataTexture)if(oe.length>0&&Me){for(let W=0,xe=oe.length;W<xe;W++)E=oe[W],t.texImage2D(3553,W,he,E.width,E.height,0,pe,Te,E.data);A.generateMipmaps=!1,y.__maxMipLevel=oe.length-1}else t.texImage2D(3553,0,he,se.width,se.height,0,pe,Te,se.data),y.__maxMipLevel=0;else if(A.isCompressedTexture){for(let W=0,xe=oe.length;W<xe;W++)E=oe[W],A.format!==ht&&A.format!==ao?pe!==null?t.compressedTexImage2D(3553,W,he,E.width,E.height,0,E.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,W,he,E.width,E.height,0,pe,Te,E.data);y.__maxMipLevel=oe.length-1}else if(A.isDataTexture2DArray)t.texImage3D(35866,0,he,se.width,se.height,se.depth,0,pe,Te,se.data),y.__maxMipLevel=0;else if(A.isDataTexture3D)t.texImage3D(32879,0,he,se.width,se.height,se.depth,0,pe,Te,se.data),y.__maxMipLevel=0;else if(oe.length>0&&Me){for(let W=0,xe=oe.length;W<xe;W++)E=oe[W],t.texImage2D(3553,W,he,pe,Te,E);A.generateMipmaps=!1,y.__maxMipLevel=oe.length-1}else t.texImage2D(3553,0,he,pe,Te,se),y.__maxMipLevel=0;_(A,Me)&&M(Q,A,se.width,se.height),y.__version=A.version,A.onUpdate&&A.onUpdate(A)}function z(y,A,V){if(A.image.length!==6)return;ne(y,A),t.activeTexture(33984+V),t.bindTexture(34067,y.__webglTexture),o.pixelStorei(37440,A.flipY),o.pixelStorei(37441,A.premultiplyAlpha),o.pixelStorei(3317,A.unpackAlignment),o.pixelStorei(37443,0);const Q=A&&(A.isCompressedTexture||A.image[0].isCompressedTexture),Y=A.image[0]&&A.image[0].isDataTexture,se=[];for(let W=0;W<6;W++)!Q&&!Y?se[W]=S(A.image[W],!1,!0,d):se[W]=Y?A.image[W].image:A.image[W];const Me=se[0],pe=h(Me)||s,Te=i.convert(A.format),he=i.convert(A.type),E=b(A.internalFormat,Te,he,A.encoding);fe(34067,A,pe);let oe;if(Q){for(let W=0;W<6;W++){oe=se[W].mipmaps;for(let xe=0;xe<oe.length;xe++){const de=oe[xe];A.format!==ht&&A.format!==ao?Te!==null?t.compressedTexImage2D(34069+W,xe,E,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+W,xe,E,de.width,de.height,0,Te,he,de.data)}}y.__maxMipLevel=oe.length-1}else{oe=A.mipmaps;for(let W=0;W<6;W++)if(Y){t.texImage2D(34069+W,0,E,se[W].width,se[W].height,0,Te,he,se[W].data);for(let xe=0;xe<oe.length;xe++){const Ce=oe[xe].image[W].image;t.texImage2D(34069+W,xe+1,E,Ce.width,Ce.height,0,Te,he,Ce.data)}}else{t.texImage2D(34069+W,0,E,Te,he,se[W]);for(let xe=0;xe<oe.length;xe++){const de=oe[xe];t.texImage2D(34069+W,xe+1,E,Te,he,de.image[W])}}y.__maxMipLevel=oe.length}_(A,pe)&&M(34067,A,Me.width,Me.height),y.__version=A.version,A.onUpdate&&A.onUpdate(A)}function q(y,A,V,Q,Y){const se=i.convert(V.format),Me=i.convert(V.type),pe=b(V.internalFormat,se,Me,V.encoding);Y===32879||Y===35866?t.texImage3D(Y,0,pe,A.width,A.height,A.depth,0,se,Me,null):t.texImage2D(Y,0,pe,A.width,A.height,0,se,Me,null),t.bindFramebuffer(36160,y),o.framebufferTexture2D(36160,Q,Y,r.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function ce(y,A,V){if(o.bindRenderbuffer(36161,y),A.depthBuffer&&!A.stencilBuffer){let Q=33189;if(V){const Y=A.depthTexture;Y&&Y.isDepthTexture&&(Y.type===ir?Q=36012:Y.type===Ai&&(Q=33190));const se=Pe(A);o.renderbufferStorageMultisample(36161,se,Q,A.width,A.height)}else o.renderbufferStorage(36161,Q,A.width,A.height);o.framebufferRenderbuffer(36160,36096,36161,y)}else if(A.depthBuffer&&A.stencilBuffer){if(V){const Q=Pe(A);o.renderbufferStorageMultisample(36161,Q,35056,A.width,A.height)}else o.renderbufferStorage(36161,34041,A.width,A.height);o.framebufferRenderbuffer(36160,33306,36161,y)}else{const Q=A.isWebGLMultipleRenderTargets===!0?A.texture[0]:A.texture,Y=i.convert(Q.format),se=i.convert(Q.type),Me=b(Q.internalFormat,Y,se,Q.encoding);if(V){const pe=Pe(A);o.renderbufferStorageMultisample(36161,pe,Me,A.width,A.height)}else o.renderbufferStorage(36161,Me,A.width,A.height)}o.bindRenderbuffer(36161,null)}function H(y,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const Q=r.get(A.depthTexture).__webglTexture;if(A.depthTexture.format===Co)o.framebufferTexture2D(36160,36096,3553,Q,0);else if(A.depthTexture.format===Ln)o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function Se(y){const A=r.get(y),V=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture){if(V)throw new Error("target.depthTexture not supported in Cube render targets");H(A.__webglFramebuffer,y)}else if(V){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]=o.createRenderbuffer(),ce(A.__webglDepthbuffer[Q],y,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),ce(A.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function Ae(y){const A=y.texture,V=r.get(y),Q=r.get(A);y.addEventListener("dispose",$),y.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture=o.createTexture(),Q.__version=A.version,a.memory.textures++);const Y=y.isWebGLCubeRenderTarget===!0,se=y.isWebGLMultipleRenderTargets===!0,Me=y.isWebGLMultisampleRenderTarget===!0,pe=A.isDataTexture3D||A.isDataTexture2DArray,Te=h(y)||s;if(s&&A.format===ao&&(A.type===ir||A.type===$o)&&(A.format=ht,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),Y){V.__webglFramebuffer=[];for(let he=0;he<6;he++)V.__webglFramebuffer[he]=o.createFramebuffer()}else if(V.__webglFramebuffer=o.createFramebuffer(),se)if(n.drawBuffers){const he=y.texture;for(let E=0,oe=he.length;E<oe;E++){const W=r.get(he[E]);W.__webglTexture===void 0&&(W.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(Me)if(s){V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=o.createRenderbuffer(),o.bindRenderbuffer(36161,V.__webglColorRenderbuffer);const he=i.convert(A.format),E=i.convert(A.type),oe=b(A.internalFormat,he,E,A.encoding),W=Pe(y);o.renderbufferStorageMultisample(36161,W,oe,y.width,y.height),t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064,36161,V.__webglColorRenderbuffer),o.bindRenderbuffer(36161,null),y.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),ce(V.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(Y){t.bindTexture(34067,Q.__webglTexture),fe(34067,A,Te);for(let he=0;he<6;he++)q(V.__webglFramebuffer[he],y,A,36064,34069+he);_(A,Te)&&M(34067,A,y.width,y.height),t.unbindTexture()}else if(se){const he=y.texture;for(let E=0,oe=he.length;E<oe;E++){const W=he[E],xe=r.get(W);t.bindTexture(3553,xe.__webglTexture),fe(3553,W,Te),q(V.__webglFramebuffer,y,W,36064+E,3553),_(W,Te)&&M(3553,W,y.width,y.height)}t.unbindTexture()}else{let he=3553;pe&&(s?he=A.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(he,Q.__webglTexture),fe(he,A,Te),q(V.__webglFramebuffer,y,A,36064,he),_(A,Te)&&M(he,A,y.width,y.height,y.depth),t.unbindTexture()}y.depthBuffer&&Se(y)}function ae(y){const A=h(y)||s,V=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0,Y=V.length;Q<Y;Q++){const se=V[Q];if(_(se,A)){const Me=y.isWebGLCubeRenderTarget?34067:3553,pe=r.get(se).__webglTexture;t.bindTexture(Me,pe),M(Me,se,y.width,y.height),t.unbindTexture()}}}function me(y){if(y.isWebGLMultisampleRenderTarget)if(s){const A=y.width,V=y.height;let Q=16384;y.depthBuffer&&(Q|=256),y.stencilBuffer&&(Q|=1024);const Y=r.get(y);t.bindFramebuffer(36008,Y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Y.__webglFramebuffer),o.blitFramebuffer(0,0,A,V,0,0,A,V,Q,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Y.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Pe(y){return s&&y.isWebGLMultisampleRenderTarget?Math.min(m,y.samples):0}function X(y){const A=a.render.frame;u.get(y)!==A&&(u.set(y,A),y.update())}let K=!1,ee=!1;function ge(y,A){y&&y.isWebGLRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),K=!0),y=y.texture),B(y,A)}function re(y,A){y&&y.isWebGLCubeRenderTarget&&(ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ee=!0),y=y.texture),F(y,A)}this.allocateTextureUnit=N,this.resetTextureUnits=J,this.setTexture2D=B,this.setTexture2DArray=D,this.setTexture3D=I,this.setTextureCube=F,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=me,this.safeSetTexture2D=ge,this.safeSetTextureCube=re}function qf(o,e,t){const r=t.isWebGL2;function n(i){let a;if(i===yr)return 5121;if(i===lh)return 32819;if(i===dh)return 32820;if(i===ch)return 33635;if(i===ih)return 5120;if(i===ah)return 5122;if(i===_i)return 5123;if(i===sh)return 5124;if(i===Ai)return 5125;if(i===ir)return 5126;if(i===$o)return r?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===mh)return 6406;if(i===ao)return 6407;if(i===ht)return 6408;if(i===uh)return 6409;if(i===gh)return 6410;if(i===Co)return 6402;if(i===Ln)return 34041;if(i===xh)return 6403;if(i===ph)return 36244;if(i===fh)return 33319;if(i===Sh)return 33320;if(i===vh)return 36248;if(i===Mh)return 36249;if(i===wd||i===Ld||i===Ed||i===$d)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===wd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ld)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$d)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cd||i===Gd||i===Nd||i===Bd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Cd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_h)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((i===Id||i===Rd)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(i===Id)return a.COMPRESSED_RGB8_ETC2;if(i===Rd)return a.COMPRESSED_RGBA8_ETC2_EAC}if(i===Ah||i===Th||i===yh||i===bh||i===Ph||i===wh||i===Lh||i===Eh||i===$h||i===Ch||i===Gh||i===Nh||i===Bh||i===Ih||i===Oh||i===Dh||i===Fh||i===Uh||i===Vh||i===Hh||i===Xh||i===kh||i===Wh||i===zh||i===Kh||i===Zh||i===Qh||i===Yh)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?i:null;if(i===Rh)return a=e.get("EXT_texture_compression_bptc"),a!==null?i:null;if(i===wn)return r?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:n}}class Wc extends At{constructor(e=[]){super();this.cameras=e}}Wc.prototype.isArrayCamera=!0;class Or extends Re{constructor(){super();this.type="Group"}}Or.prototype.isGroup=!0;const eS={type:"move"};class bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,a=null;const s=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(s!==null&&(n=t.getPose(e.targetRaySpace,r),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(eS))),d&&e.hand){a=!0;for(const f of e.hand.values()){const S=t.getJointPose(f,r);if(d.joints[f.jointName]===void 0){const p=new Or;p.matrixAutoUpdate=!1,p.visible=!1,d.joints[f.jointName]=p,d.add(p)}const h=d.joints[f.jointName];S!==null&&(h.matrix.fromArray(S.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=S.radius),h.visible=S!==null}const c=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],u=c.position.distanceTo(m.position),g=.02,x=.005;d.inputState.pinching&&u>g+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=g-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=i!==null),d!==null&&(d.visible=a!==null),this}}class tS extends br{constructor(e,t){super();const r=this,n=e.state;let i=null,a=1,s=null,l="local-floor",d=null,c=null,m=null,u=null,g=null,x=!1,f=null,S=null,h=null,p=null,_=null,M=null;const b=[],w=new Map,v=new At;v.layers.enable(1),v.viewport=new Ue;const $=new At;$.layers.enable(2),$.viewport=new Ue;const R=[v,$],C=new Wc;C.layers.enable(1),C.layers.enable(2);let L=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=b[z];return q===void 0&&(q=new bs,b[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=b[z];return q===void 0&&(q=new bs,b[z]=q),q.getGripSpace()},this.getHand=function(z){let q=b[z];return q===void 0&&(q=new bs,b[z]=q),q.getHandSpace()};function N(z){const q=w.get(z.inputSource);q&&q.dispatchEvent({type:z.type,data:z.inputSource})}function B(){w.forEach(function(z,q){z.disconnect(q)}),w.clear(),L=null,J=null,n.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),m&&t.deleteFramebuffer(m),f&&t.deleteFramebuffer(f),S&&t.deleteRenderbuffer(S),h&&t.deleteRenderbuffer(h),m=null,f=null,S=null,h=null,g=null,u=null,c=null,i=null,ye.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){l=z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",D);const q=t.getContextAttributes();if(q.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0){const ce={antialias:q.antialias,alpha:q.alpha,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:g})}else if(t instanceof WebGLRenderingContext){const ce={antialias:!0,alpha:q.alpha,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(i,t,ce),i.updateRenderState({layers:[g]})}else{x=q.antialias;let ce=null;q.depth&&(M=256,q.stencil&&(M|=1024),_=q.stencil?33306:36096,ce=q.stencil?35056:33190);const H={colorFormat:q.alpha?32856:32849,depthFormat:ce,scaleFactor:a};c=new XRWebGLBinding(i,t),u=c.createProjectionLayer(H),m=t.createFramebuffer(),i.updateRenderState({layers:[u]}),x&&(f=t.createFramebuffer(),S=t.createRenderbuffer(),t.bindRenderbuffer(36161,S),t.renderbufferStorageMultisample(36161,4,32856,u.textureWidth,u.textureHeight),n.bindFramebuffer(36160,f),t.framebufferRenderbuffer(36160,36064,36161,S),t.bindRenderbuffer(36161,null),ce!==null&&(h=t.createRenderbuffer(),t.bindRenderbuffer(36161,h),t.renderbufferStorageMultisample(36161,4,ce,u.textureWidth,u.textureHeight),t.framebufferRenderbuffer(36160,_,36161,h),t.bindRenderbuffer(36161,null)),n.bindFramebuffer(36160,null))}s=await i.requestReferenceSpace(l),ye.setContext(i),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function D(z){const q=i.inputSources;for(let ce=0;ce<b.length;ce++)w.set(q[ce],b[ce]);for(let ce=0;ce<z.removed.length;ce++){const H=z.removed[ce],Se=w.get(H);Se&&(Se.dispatchEvent({type:"disconnected",data:H}),w.delete(H))}for(let ce=0;ce<z.added.length;ce++){const H=z.added[ce],Se=w.get(H);Se&&Se.dispatchEvent({type:"connected",data:H})}}const I=new P,F=new P;function j(z,q,ce){I.setFromMatrixPosition(q.matrixWorld),F.setFromMatrixPosition(ce.matrixWorld);const H=I.distanceTo(F),Se=q.projectionMatrix.elements,Ae=ce.projectionMatrix.elements,ae=Se[14]/(Se[10]-1),me=Se[14]/(Se[10]+1),Pe=(Se[9]+1)/Se[5],X=(Se[9]-1)/Se[5],K=(Se[8]-1)/Se[0],ee=(Ae[8]+1)/Ae[0],ge=ae*K,re=ae*ee,y=H/(-K+ee),A=y*-K;q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(A),z.translateZ(y),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const V=ae+y,Q=me+y,Y=ge-A,se=re+(H-A),Me=Pe*me/Q*V,pe=X*me/Q*V;z.projectionMatrix.makePerspective(Y,se,Me,pe,V,Q)}function le(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;C.near=$.near=v.near=z.near,C.far=$.far=v.far=z.far,(L!==C.near||J!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,J=C.far);const q=z.parent,ce=C.cameras;le(C,q);for(let Se=0;Se<ce.length;Se++)le(ce[Se],q);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),z.position.copy(C.position),z.quaternion.copy(C.quaternion),z.scale.copy(C.scale),z.matrix.copy(C.matrix),z.matrixWorld.copy(C.matrixWorld);const H=z.children;for(let Se=0,Ae=H.length;Se<Ae;Se++)H[Se].updateMatrixWorld(!0);ce.length===2?j(C,v,$):C.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(g!==null)return g.fixedFoveation},this.setFoveation=function(z){u!==null&&(u.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)};let fe=null;function ne(z,q){if(d=q.getViewerPose(s),p=q,d!==null){const H=d.views;g!==null&&n.bindXRFramebuffer(g.framebuffer);let Se=!1;H.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Ae=0;Ae<H.length;Ae++){const ae=H[Ae];let me=null;if(g!==null)me=g.getViewport(ae);else{const X=c.getViewSubImage(u,ae);n.bindXRFramebuffer(m),X.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,_,3553,X.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,X.colorTexture,0),me=X.viewport}const Pe=R[Ae];Pe.matrix.fromArray(ae.transform.matrix),Pe.projectionMatrix.fromArray(ae.projectionMatrix),Pe.viewport.set(me.x,me.y,me.width,me.height),Ae===0&&C.matrix.copy(Pe.matrix),Se===!0&&C.cameras.push(Pe)}x&&(n.bindXRFramebuffer(f),M!==null&&t.clear(M))}const ce=i.inputSources;for(let H=0;H<b.length;H++){const Se=b[H],Ae=ce[H];Se.update(Ae,q,s)}if(fe&&fe(z,q),x){const H=u.textureWidth,Se=u.textureHeight;n.bindFramebuffer(36008,f),n.bindFramebuffer(36009,m),t.invalidateFramebuffer(36008,[_]),t.invalidateFramebuffer(36009,[_]),t.blitFramebuffer(0,0,H,Se,0,0,H,Se,16384,9728),t.invalidateFramebuffer(36008,[36064]),n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),n.bindFramebuffer(36160,f)}p=null}const ye=new dc;ye.setAnimationLoop(ne),this.setAnimationLoop=function(z){fe=z},this.dispose=function(){}}}function rS(o){function e(h,p){h.fogColor.value.copy(p.color),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function t(h,p,_,M,b){p.isMeshBasicMaterial?r(h,p):p.isMeshLambertMaterial?(r(h,p),l(h,p)):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),d(h,p)):p.isMeshStandardMaterial?(r(h,p),p.isMeshPhysicalMaterial?u(h,p,b):m(h,p)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?(r(h,p),x(h,p)):p.isMeshDistanceMaterial?(r(h,p),f(h,p)):p.isMeshNormalMaterial?(r(h,p),S(h,p)):p.isLineBasicMaterial?(n(h,p),p.isLineDashedMaterial&&i(h,p)):p.isPointsMaterial?a(h,p,_,M):p.isSpriteMaterial?s(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const _=o.get(p).envMap;if(_){h.envMap.value=_,h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio;const w=o.get(_).__maxMipLevel;w!==void 0&&(h.maxMipLevel.value=w)}p.lightMap&&(h.lightMap.value=p.lightMap,h.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),h.uvTransform.value.copy(M.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),h.uv2Transform.value.copy(b.matrix))}function n(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function i(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,_,M){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*_,h.scale.value=M*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),h.uvTransform.value.copy(b.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap)}function d(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===et&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===et&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===et&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===et&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias)}function m(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===et&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===et&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),o.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function u(h,p,_){m(h,p),h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===et&&h.clearcoatNormalScale.value.negate())),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function g(h,p){p.matcap&&(h.matcap.value=p.matcap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===et&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===et&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias)}function x(h,p){p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias)}function f(h,p){p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}function S(h,p){p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===et&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===et&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function oS(){const o=Pi("canvas");return o.style.display="block",o}function Fe(o={}){const e=o.canvas!==void 0?o.canvas:oS(),t=o.context!==void 0?o.context:null,r=o.alpha!==void 0?o.alpha:!1,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,a=o.antialias!==void 0?o.antialias:!1,s=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,l=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,d=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let m=null,u=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=xt,this.physicallyCorrectLights=!1,this.toneMapping=io,this.toneMappingExposure=1;const f=this;let S=!1,h=0,p=0,_=null,M=-1,b=null;const w=new Ue,v=new Ue;let $=null,R=e.width,C=e.height,L=1,J=null,N=null;const B=new Ue(0,0,R,C),D=new Ue(0,0,R,C);let I=!1;const F=[],j=new Wi;let le=!1,fe=!1,ne=null;const ye=new ue,z=new P,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return _===null?L:1}let H=t;function Se(T,G){for(let U=0;U<T.length;U++){const O=T[U],k=e.getContext(O,G);if(k!==null)return k}return null}try{const T={alpha:r,depth:n,stencil:i,antialias:a,premultipliedAlpha:s,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:c};if(e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",gt,!1),H===null){const G=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&G.shift(),H=Se(G,T),H===null)throw Se(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ae,ae,me,Pe,X,K,ee,ge,re,y,A,V,Q,Y,se,Me,pe,Te,he,E,oe,W,xe;function de(){Ae=new b1(H),ae=new f1(H,Ae,o),Ae.init(ae),W=new qf(H,Ae,ae),me=new Jf(H,Ae,ae),F[0]=1029,Pe=new L1(H),X=new Uf,K=new jf(H,Ae,me,X,ae,W,Pe),ee=new v1(f),ge=new y1(f),re=new V0(H,ae),xe=new x1(H,Ae,re,ae),y=new P1(H,re,Pe,xe),A=new G1(H,y,re,Pe),he=new C1(H,ae,K),Me=new S1(X),V=new Ff(f,ee,ge,Ae,ae,xe,Me),Q=new rS(X),Y=new Hf(X),se=new Zf(Ae,ae),Te=new h1(f,ee,me,A,s),pe=new kc(f,A,ae),E=new p1(H,Ae,Pe,ae),oe=new w1(H,Ae,Pe,ae),Pe.programs=V.programs,f.capabilities=ae,f.extensions=Ae,f.properties=X,f.renderLists=Y,f.shadowMap=pe,f.state=me,f.info=Pe}de();const Ce=new tS(f,H);this.xr=Ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=Ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(T){T!==void 0&&(L=T,this.setSize(R,C,!1))},this.getSize=function(T){return T.set(R,C)},this.setSize=function(T,G,U){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=T,C=G,e.width=Math.floor(T*L),e.height=Math.floor(G*L),U!==!1&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(R*L,C*L).floor()},this.setDrawingBufferSize=function(T,G,U){R=T,C=G,L=U,e.width=Math.floor(T*U),e.height=Math.floor(G*U),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,G,U,O){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,G,U,O),me.viewport(w.copy(B).multiplyScalar(L).floor())},this.getScissor=function(T){return T.copy(D)},this.setScissor=function(T,G,U,O){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,G,U,O),me.scissor(v.copy(D).multiplyScalar(L).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(T){me.setScissorTest(I=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){N=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(T,G,U){let O=0;(T===void 0||T)&&(O|=16384),(G===void 0||G)&&(O|=256),(U===void 0||U)&&(O|=1024),H.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",gt,!1),Y.dispose(),se.dispose(),X.dispose(),ee.dispose(),ge.dispose(),A.dispose(),xe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ad),Ce.removeEventListener("sessionend",sd),ne&&(ne.dispose(),ne=null),qr.stop()};function ut(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Pe.autoReset,G=pe.enabled,U=pe.autoUpdate,O=pe.needsUpdate,k=pe.type;de(),Pe.autoReset=T,pe.enabled=G,pe.autoUpdate=U,pe.needsUpdate=O,pe.type=k}function _r(T){const G=T.target;G.removeEventListener("dispose",_r),Qe(G)}function Qe(T){nr(T),X.remove(T)}function nr(T){const G=X.get(T).programs;G!==void 0&&G.forEach(function(U){V.releaseProgram(U)})}this.renderBufferDirect=function(T,G,U,O,k,be){G===null&&(G=q);const _e=k.isMesh&&k.matrixWorld.determinant()<0,ve=yg(T,G,U,O,k);me.setMaterial(O,_e);let Le=U.index;const De=U.attributes.position;if(Le===null){if(De===void 0||De.count===0)return}else if(Le.count===0)return;let Ge=1;O.wireframe===!0&&(Le=y.getWireframeAttribute(U),Ge=2),xe.setup(k,O,ve,U,Le);let Be,Ke=E;Le!==null&&(Be=re.get(Le),Ke=oe,Ke.setIndex(Be));const eo=Le!==null?Le.count:De.count,Ie=U.drawRange.start*Ge,_n=U.drawRange.count*Ge,Xe=be!==null?be.start*Ge:0,to=be!==null?be.count*Ge:1/0,ro=Math.max(Ie,Xe),oo=Math.min(eo,Ie+_n,Xe+to)-1,Ar=Math.max(0,oo-ro+1);if(Ar!==0){if(k.isMesh)O.wireframe===!0?(me.setLineWidth(O.wireframeLinewidth*ce()),Ke.setMode(1)):Ke.setMode(4);else if(k.isLine){let Ze=O.linewidth;Ze===void 0&&(Ze=1),me.setLineWidth(Ze*ce()),k.isLineSegments?Ke.setMode(1):k.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else k.isPoints?Ke.setMode(0):k.isSprite&&Ke.setMode(4);if(k.isInstancedMesh)Ke.renderInstances(ro,Ar,k.count);else if(U.isInstancedBufferGeometry){const Ze=Math.min(U.instanceCount,U._maxInstanceCount);Ke.renderInstances(ro,Ar,Ze)}else Ke.render(ro,Ar)}},this.compile=function(T,G){u=se.get(T),u.init(),x.push(u),T.traverseVisible(function(U){U.isLight&&U.layers.test(G.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights(f.physicallyCorrectLights),T.traverse(function(U){const O=U.material;if(O)if(Array.isArray(O))for(let k=0;k<O.length;k++){const be=O[k];Ga(be,T,U)}else Ga(O,T,U)}),x.pop(),u=null};let Ot=null;function _g(T){Ot&&Ot(T)}function ad(){qr.stop()}function sd(){qr.start()}const qr=new dc;qr.setAnimationLoop(_g),typeof window!="undefined"&&qr.setContext(window),this.setAnimationLoop=function(T){Ot=T,Ce.setAnimationLoop(T),T===null?qr.stop():qr.start()},Ce.addEventListener("sessionstart",ad),Ce.addEventListener("sessionend",sd),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(G),G=Ce.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,G,_),u=se.get(T,x.length),u.init(),x.push(u),ye.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(ye),fe=this.localClippingEnabled,le=Me.init(this.clippingPlanes,fe,G),m=Y.get(T,g.length),m.init(),g.push(m),ld(T,G,0,f.sortObjects),m.finish(),f.sortObjects===!0&&m.sort(J,N),le===!0&&Me.beginShadows();const U=u.state.shadowsArray;if(pe.render(U,T,G),le===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Te.render(m,T),u.setupLights(f.physicallyCorrectLights),G.isArrayCamera){const O=G.cameras;for(let k=0,be=O.length;k<be;k++){const _e=O[k];dd(m,T,_e,_e.viewport)}}else dd(m,T,G);_!==null&&(K.updateMultisampleRenderTarget(_),K.updateRenderTargetMipmap(_)),T.isScene===!0&&T.onAfterRender(f,T,G),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1),xe.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?u=x[x.length-1]:u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function ld(T,G,U,O){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)U=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){O&&z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);const _e=A.update(T),ve=T.material;ve.visible&&m.push(T,_e,ve,U,z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Pe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Pe.render.frame),!T.frustumCulled||j.intersectsObject(T))){O&&z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);const _e=A.update(T),ve=T.material;if(Array.isArray(ve)){const Le=_e.groups;for(let De=0,Ge=Le.length;De<Ge;De++){const Be=Le[De],Ke=ve[Be.materialIndex];Ke&&Ke.visible&&m.push(T,_e,Ke,U,z.z,Be)}}else ve.visible&&m.push(T,_e,ve,U,z.z,null)}}const be=T.children;for(let _e=0,ve=be.length;_e<ve;_e++)ld(be[_e],G,U,O)}function dd(T,G,U,O){const k=T.opaque,be=T.transmissive,_e=T.transparent;u.setupLightsView(U),be.length>0&&Ag(k,G,U),O&&me.viewport(w.copy(O)),k.length>0&&fi(k,G,U),be.length>0&&fi(be,G,U),_e.length>0&&fi(_e,G,U)}function Ag(T,G,U){if(ne===null){const _e=a===!0&&ae.isWebGL2===!0?Kd:Zt;ne=new _e(1024,1024,{generateMipmaps:!0,type:W.convert($o)!==null?$o:yr,minFilter:Eo,magFilter:tt,wrapS:Pt,wrapT:Pt})}const O=f.getRenderTarget();f.setRenderTarget(ne),f.clear();const k=f.toneMapping;f.toneMapping=io,fi(T,G,U),f.toneMapping=k,K.updateMultisampleRenderTarget(ne),K.updateRenderTargetMipmap(ne),f.setRenderTarget(O)}function fi(T,G,U){const O=G.isScene===!0?G.overrideMaterial:null;for(let k=0,be=T.length;k<be;k++){const _e=T[k],ve=_e.object,Le=_e.geometry,De=O===null?_e.material:O,Ge=_e.group;ve.layers.test(U.layers)&&Tg(ve,G,U,Le,De,Ge)}}function Tg(T,G,U,O,k,be){T.onBeforeRender(f,G,U,O,k,be),T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(f,G,U,O,T,be),k.transparent===!0&&k.side===no?(k.side=et,k.needsUpdate=!0,f.renderBufferDirect(U,G,O,k,T,be),k.side=Po,k.needsUpdate=!0,f.renderBufferDirect(U,G,O,k,T,be),k.side=no):f.renderBufferDirect(U,G,O,k,T,be),T.onAfterRender(f,G,U,O,k,be)}function Ga(T,G,U){G.isScene!==!0&&(G=q);const O=X.get(T),k=u.state.lights,be=u.state.shadowsArray,_e=k.state.version,ve=V.getParameters(T,k.state,be,G,U),Le=V.getProgramCacheKey(ve);let De=O.programs;O.environment=T.isMeshStandardMaterial?G.environment:null,O.fog=G.fog,O.envMap=(T.isMeshStandardMaterial?ge:ee).get(T.envMap||O.environment),De===void 0&&(T.addEventListener("dispose",_r),De=new Map,O.programs=De);let Ge=De.get(Le);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===_e)return cd(T,ve),Ge}else ve.uniforms=V.getUniforms(T),T.onBuild(U,ve,f),T.onBeforeCompile(ve,f),Ge=V.acquireProgram(ve,Le),De.set(Le,Ge),O.uniforms=ve.uniforms;const Be=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=Me.uniform),cd(T,ve),O.needsLights=Pg(T),O.lightsStateVersion=_e,O.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotShadowMatrix.value=k.state.spotShadowMatrix,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix);const Ke=Ge.getUniforms(),eo=Rr.seqWithValue(Ke.seq,Be);return O.currentProgram=Ge,O.uniformsList=eo,Ge}function cd(T,G){const U=X.get(T);U.outputEncoding=G.outputEncoding,U.instancing=G.instancing,U.skinning=G.skinning,U.morphTargets=G.morphTargets,U.morphNormals=G.morphNormals,U.morphTargetsCount=G.morphTargetsCount,U.numClippingPlanes=G.numClippingPlanes,U.numIntersection=G.numClipIntersection,U.vertexAlphas=G.vertexAlphas,U.vertexTangents=G.vertexTangents}function yg(T,G,U,O,k){G.isScene!==!0&&(G=q),K.resetTextureUnits();const be=G.fog,_e=O.isMeshStandardMaterial?G.environment:null,ve=_===null?f.outputEncoding:_.texture.encoding,Le=(O.isMeshStandardMaterial?ge:ee).get(O.envMap||_e),De=O.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ge=!!O.normalMap&&!!U.attributes.tangent,Be=!!U.morphAttributes.position,Ke=!!U.morphAttributes.normal,eo=U.morphAttributes.position?U.morphAttributes.position.length:0,Ie=X.get(O),_n=u.state.lights;if(le===!0&&(fe===!0||T!==b)){const Dt=T===b&&O.id===M;Me.setState(O,T,Dt)}let Xe=!1;O.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==_n.state.version||Ie.outputEncoding!==ve||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Le||O.fog&&Ie.fog!==be||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Me.numPlanes||Ie.numIntersection!==Me.numIntersection)||Ie.vertexAlphas!==De||Ie.vertexTangents!==Ge||Ie.morphTargets!==Be||Ie.morphNormals!==Ke||ae.isWebGL2===!0&&Ie.morphTargetsCount!==eo)&&(Xe=!0):(Xe=!0,Ie.__version=O.version);let to=Ie.currentProgram;Xe===!0&&(to=Ga(O,G,k));let ro=!1,oo=!1,Ar=!1;const Ze=to.getUniforms(),An=Ie.uniforms;if(me.useProgram(to.program)&&(ro=!0,oo=!0,Ar=!0),O.id!==M&&(M=O.id,oo=!0),ro||b!==T){if(Ze.setValue(H,"projectionMatrix",T.projectionMatrix),ae.logarithmicDepthBuffer&&Ze.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,oo=!0,Ar=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Dt=Ze.map.cameraPosition;Dt!==void 0&&Dt.setValue(H,z.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ze.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||k.isSkinnedMesh)&&Ze.setValue(H,"viewMatrix",T.matrixWorldInverse)}if(k.isSkinnedMesh){Ze.setOptional(H,k,"bindMatrix"),Ze.setOptional(H,k,"bindMatrixInverse");const Dt=k.skeleton;Dt&&(ae.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Ze.setValue(H,"boneTexture",Dt.boneTexture,K),Ze.setValue(H,"boneTextureSize",Dt.boneTextureSize)):Ze.setOptional(H,Dt,"boneMatrices"))}return!!U&&(U.morphAttributes.position!==void 0||U.morphAttributes.normal!==void 0)&&he.update(k,U,O,to),(oo||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,Ze.setValue(H,"receiveShadow",k.receiveShadow)),oo&&(Ze.setValue(H,"toneMappingExposure",f.toneMappingExposure),Ie.needsLights&&bg(An,Ar),be&&O.fog&&Q.refreshFogUniforms(An,be),Q.refreshMaterialUniforms(An,O,L,C,ne),Rr.upload(H,Ie.uniformsList,An,K)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Rr.upload(H,Ie.uniformsList,An,K),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ze.setValue(H,"center",k.center),Ze.setValue(H,"modelViewMatrix",k.modelViewMatrix),Ze.setValue(H,"normalMatrix",k.normalMatrix),Ze.setValue(H,"modelMatrix",k.matrixWorld),to}function bg(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Pg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return h},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return _},this.setRenderTarget=function(T,G=0,U=0){_=T,h=G,p=U,T&&X.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T);let O=null,k=!1,be=!1;if(T){const ve=T.texture;(ve.isDataTexture3D||ve.isDataTexture2DArray)&&(be=!0);const Le=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(O=Le[G],k=!0):T.isWebGLMultisampleRenderTarget?O=X.get(T).__webglMultisampledFramebuffer:O=Le,w.copy(T.viewport),v.copy(T.scissor),$=T.scissorTest}else w.copy(B).multiplyScalar(L).floor(),v.copy(D).multiplyScalar(L).floor(),$=I;if(me.bindFramebuffer(36160,O)&&ae.drawBuffers){let ve=!1;if(T)if(T.isWebGLMultipleRenderTargets){const Le=T.texture;if(F.length!==Le.length||F[0]!==36064){for(let De=0,Ge=Le.length;De<Ge;De++)F[De]=36064+De;F.length=Le.length,ve=!0}}else(F.length!==1||F[0]!==36064)&&(F[0]=36064,F.length=1,ve=!0);else(F.length!==1||F[0]!==1029)&&(F[0]=1029,F.length=1,ve=!0);ve&&(ae.isWebGL2?H.drawBuffers(F):Ae.get("WEBGL_draw_buffers").drawBuffersWEBGL(F))}if(me.viewport(w),me.scissor(v),me.setScissorTest($),k){const ve=X.get(T.texture);H.framebufferTexture2D(36160,36064,34069+G,ve.__webglTexture,U)}else if(be){const ve=X.get(T.texture),Le=G||0;H.framebufferTextureLayer(36160,36064,ve.__webglTexture,U||0,Le)}M=-1},this.readRenderTargetPixels=function(T,G,U,O,k,be,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){me.bindFramebuffer(36160,ve);try{const Le=T.texture,De=Le.format,Ge=Le.type;if(De!==ht&&W.convert(De)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ge===$o&&(Ae.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ge!==yr&&W.convert(Ge)!==H.getParameter(35738)&&!(Ge===ir&&(ae.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H.checkFramebufferStatus(36160)===36053?G>=0&&G<=T.width-O&&U>=0&&U<=T.height-k&&H.readPixels(G,U,O,k,W.convert(De),W.convert(Ge),be):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Le=_!==null?X.get(_).__webglFramebuffer:null;me.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(T,G,U=0){const O=Math.pow(2,-U),k=Math.floor(G.image.width*O),be=Math.floor(G.image.height*O);let _e=W.convert(G.format);ae.isWebGL2&&(_e===6407&&(_e=32849),_e===6408&&(_e=32856)),K.setTexture2D(G,0),H.copyTexImage2D(3553,U,_e,T.x,T.y,k,be,0),me.unbindTexture()},this.copyTextureToTexture=function(T,G,U,O=0){const k=G.image.width,be=G.image.height,_e=W.convert(U.format),ve=W.convert(U.type);K.setTexture2D(U,0),H.pixelStorei(37440,U.flipY),H.pixelStorei(37441,U.premultiplyAlpha),H.pixelStorei(3317,U.unpackAlignment),G.isDataTexture?H.texSubImage2D(3553,O,T.x,T.y,k,be,_e,ve,G.image.data):G.isCompressedTexture?H.compressedTexSubImage2D(3553,O,T.x,T.y,G.mipmaps[0].width,G.mipmaps[0].height,_e,G.mipmaps[0].data):H.texSubImage2D(3553,O,T.x,T.y,_e,ve,G.image),O===0&&U.generateMipmaps&&H.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(T,G,U,O,k=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=T.max.x-T.min.x+1,_e=T.max.y-T.min.y+1,ve=T.max.z-T.min.z+1,Le=W.convert(O.format),De=W.convert(O.type);let Ge;if(O.isDataTexture3D)K.setTexture3D(O,0),Ge=32879;else if(O.isDataTexture2DArray)K.setTexture2DArray(O,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,O.flipY),H.pixelStorei(37441,O.premultiplyAlpha),H.pixelStorei(3317,O.unpackAlignment);const Be=H.getParameter(3314),Ke=H.getParameter(32878),eo=H.getParameter(3316),Ie=H.getParameter(3315),_n=H.getParameter(32877),Xe=U.isCompressedTexture?U.mipmaps[0]:U.image;H.pixelStorei(3314,Xe.width),H.pixelStorei(32878,Xe.height),H.pixelStorei(3316,T.min.x),H.pixelStorei(3315,T.min.y),H.pixelStorei(32877,T.min.z),U.isDataTexture||U.isDataTexture3D?H.texSubImage3D(Ge,k,G.x,G.y,G.z,be,_e,ve,Le,De,Xe.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ge,k,G.x,G.y,G.z,be,_e,ve,Le,Xe.data)):H.texSubImage3D(Ge,k,G.x,G.y,G.z,be,_e,ve,Le,De,Xe),H.pixelStorei(3314,Be),H.pixelStorei(32878,Ke),H.pixelStorei(3316,eo),H.pixelStorei(3315,Ie),H.pixelStorei(32877,_n),k===0&&O.generateMipmaps&&H.generateMipmap(Ge),me.unbindTexture()},this.initTexture=function(T){K.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){h=0,p=0,_=null,me.reset(),xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Fe.prototype.isWebGLRenderer=!0;class nS extends Fe{}nS.prototype.isWebGL1Renderer=!0;class zc extends Re{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}zc.prototype.isScene=!0;class rn{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$n,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Gt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let n=0,i=this.stride;n<i;n++)this.array[e+n]=t.array[r+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}rn.prototype.isInterleavedBuffer=!0;const je=new P;class on{constructor(e,t,r,n=!1){this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=n===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=n,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const n=r*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[n+i])}return new Ye(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new on(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const n=r*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[n+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}on.prototype.isInterleavedBufferAttribute=!0;class Kc extends ot{constructor(e){super();this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Kc.prototype.isSpriteMaterial=!0;let nn;const Vn=new P,an=new P,sn=new P,ln=new Z,Hn=new Z,Zc=new ue,Yi=new P,Xn=new P,Ji=new P,Qc=new Z,Ps=new Z,Yc=new Z;class iS extends Re{constructor(e){super();if(this.type="Sprite",nn===void 0){nn=new He;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new rn(t,5);nn.setIndex([0,1,2,0,2,3]),nn.setAttribute("position",new on(r,3,0,!1)),nn.setAttribute("uv",new on(r,2,3,!1))}this.geometry=nn,this.material=e!==void 0?e:new Kc,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),an.setFromMatrixScale(this.matrixWorld),Zc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&an.multiplyScalar(-sn.z);const r=this.material.rotation;let n,i;r!==0&&(i=Math.cos(r),n=Math.sin(r));const a=this.center;ji(Yi.set(-.5,-.5,0),sn,a,an,n,i),ji(Xn.set(.5,-.5,0),sn,a,an,n,i),ji(Ji.set(.5,.5,0),sn,a,an,n,i),Qc.set(0,0),Ps.set(1,0),Yc.set(1,1);let s=e.ray.intersectTriangle(Yi,Xn,Ji,!1,Vn);if(s===null&&(ji(Xn.set(-.5,.5,0),sn,a,an,n,i),Ps.set(0,1),s=e.ray.intersectTriangle(Yi,Ji,Xn,!1,Vn),s===null))return;const l=e.ray.origin.distanceTo(Vn);l<e.near||l>e.far||t.push({distance:l,point:Vn.clone(),uv:qe.getUV(Vn,Yi,Xn,Ji,Qc,Ps,Yc,new Z),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}iS.prototype.isSprite=!0;function ji(o,e,t,r,n,i){ln.subVectors(o,t).addScalar(.5).multiply(r),n!==void 0?(Hn.x=i*ln.x-n*ln.y,Hn.y=n*ln.x+i*ln.y):Hn.copy(ln),o.copy(e),o.x+=Hn.x,o.y+=Hn.y,o.applyMatrix4(Zc)}const Jc=new P,jc=new Ue,qc=new Ue,aS=new P,em=new ue;class ws extends _t{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ue,this.bindMatrixInverse=new ue}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ue,t=this.geometry.attributes.skinWeight;for(let r=0,n=t.count;r<n;r++){e.x=t.getX(r),e.y=t.getY(r),e.z=t.getZ(r),e.w=t.getW(r);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const r=this.skeleton,n=this.geometry;jc.fromBufferAttribute(n.attributes.skinIndex,e),qc.fromBufferAttribute(n.attributes.skinWeight,e),Jc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const a=qc.getComponent(i);if(a!==0){const s=jc.getComponent(i);em.multiplyMatrices(r.bones[s].matrixWorld,r.boneInverses[s]),t.addScaledVector(aS.copy(Jc).applyMatrix4(em),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}ws.prototype.isSkinnedMesh=!0;class Ls extends Re{constructor(){super();this.type="Bone"}}Ls.prototype.isBone=!0;class tm extends rt{constructor(e=null,t=1,r=1,n,i,a,s,l,d=tt,c=tt,m,u){super(null,a,s,l,d,c,n,i,m,u);this.image={data:e,width:t,height:r},this.magFilter=d,this.minFilter=c,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}tm.prototype.isDataTexture=!0;const rm=new ue,sS=new ue;class Es{constructor(e=[],t=[]){this.uuid=Gt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,n=this.bones.length;r<n;r++)this.boneInverses.push(new ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new ue;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,n=this.boneTexture;for(let i=0,a=e.length;i<a;i++){const s=e[i]?e[i].matrixWorld:sS;rm.multiplyMatrices(s,t[i]),rm.toArray(r,i*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Es(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Xd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new tm(t,e,e,ht,ir);return this.boneMatrices=t,this.boneTexture=r,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,n=e.bones.length;r<n;r++){const i=e.bones[r];let a=t[i];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),a=new Ls),this.bones.push(a),this.boneInverses.push(new ue().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let n=0,i=t.length;n<i;n++){const a=t[n];e.bones.push(a.uuid);const s=r[n];e.boneInverses.push(s.toArray())}return e}}class $s extends Ye{constructor(e,t,r,n=1){typeof r=="number"&&(n=r,r=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,r);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}$s.prototype.isInstancedBufferAttribute=!0;const om=new ue,nm=new ue,qi=[],kn=new _t;class lS extends _t{constructor(e,t,r){super(e,t);this.instanceMatrix=new $s(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const r=this.matrixWorld,n=this.count;if(kn.geometry=this.geometry,kn.material=this.material,kn.material!==void 0)for(let i=0;i<n;i++){this.getMatrixAt(i,om),nm.multiplyMatrices(r,om),kn.matrixWorld=nm,kn.raycast(e,qi);for(let a=0,s=qi.length;a<s;a++){const l=qi[a];l.instanceId=i,l.object=this,t.push(l)}qi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}lS.prototype.isInstancedMesh=!0;class dn extends ot{constructor(e){super();this.type="LineBasicMaterial",this.color=new ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}dn.prototype.isLineBasicMaterial=!0;const im=new P,am=new P,sm=new ue,Cs=new Uo,ea=new mo;class ta extends Re{constructor(e=new He,t=new dn){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,i=t.count;n<i;n++)im.fromBufferAttribute(t,n-1),am.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=im.distanceTo(am);e.setAttribute("lineDistance",new Je(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ea.copy(r.boundingSphere),ea.applyMatrix4(n),ea.radius+=i,e.ray.intersectsSphere(ea)===!1)return;sm.copy(n).invert(),Cs.copy(e.ray).applyMatrix4(sm);const s=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,d=new P,c=new P,m=new P,u=new P,g=this.isLineSegments?2:1;if(r.isBufferGeometry){const x=r.index,S=r.attributes.position;if(x!==null){const h=Math.max(0,a.start),p=Math.min(x.count,a.start+a.count);for(let _=h,M=p-1;_<M;_+=g){const b=x.getX(_),w=x.getX(_+1);if(d.fromBufferAttribute(S,b),c.fromBufferAttribute(S,w),Cs.distanceSqToSegment(d,c,u,m)>l)continue;u.applyMatrix4(this.matrixWorld);const $=e.ray.origin.distanceTo(u);$<e.near||$>e.far||t.push({distance:$,point:m.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),p=Math.min(S.count,a.start+a.count);for(let _=h,M=p-1;_<M;_+=g){if(d.fromBufferAttribute(S,_),c.fromBufferAttribute(S,_+1),Cs.distanceSqToSegment(d,c,u,m)>l)continue;u.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(u);w<e.near||w>e.far||t.push({distance:w,point:m.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}else r.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ta.prototype.isLine=!0;const lm=new P,dm=new P;class ra extends ta{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,i=t.count;n<i;n+=2)lm.fromBufferAttribute(t,n),dm.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+lm.distanceTo(dm);e.setAttribute("lineDistance",new Je(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}ra.prototype.isLineSegments=!0;class cm extends ta{constructor(e,t){super(e,t);this.type="LineLoop"}}cm.prototype.isLineLoop=!0;class Gs extends ot{constructor(e){super();this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Gs.prototype.isPointsMaterial=!0;const mm=new ue,Ns=new Uo,oa=new mo,na=new P;class um extends Re{constructor(e=new He,t=new Gs){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),oa.copy(r.boundingSphere),oa.applyMatrix4(n),oa.radius+=i,e.ray.intersectsSphere(oa)===!1)return;mm.copy(n).invert(),Ns.copy(e.ray).applyMatrix4(mm);const s=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s;if(r.isBufferGeometry){const d=r.index,m=r.attributes.position;if(d!==null){const u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=u,f=g;x<f;x++){const S=d.getX(x);na.fromBufferAttribute(m,S),gm(na,S,l,n,e,t,this)}}else{const u=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let x=u,f=g;x<f;x++)na.fromBufferAttribute(m,x),gm(na,x,l,n,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}um.prototype.isPoints=!0;function gm(o,e,t,r,n,i,a){const s=Ns.distanceSqToPoint(o);if(s<t){const l=new P;Ns.closestPointToPoint(o,l),l.applyMatrix4(r);const d=n.ray.origin.distanceTo(l);if(d<n.near||d>n.far)return;i.push({distance:d,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}class dS extends rt{constructor(e,t,r,n,i,a,s,l,d){super(e,t,r,n,i,a,s,l,d);this.format=s!==void 0?s:ao,this.minFilter=a!==void 0?a:wt,this.magFilter=i!==void 0?i:wt,this.generateMipmaps=!1;const c=this;function m(){c.needsUpdate=!0,e.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(m)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}dS.prototype.isVideoTexture=!0;class cS extends rt{constructor(e,t,r,n,i,a,s,l,d,c,m,u){super(null,a,s,l,d,c,n,i,m,u);this.image={width:t,height:r},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}cS.prototype.isCompressedTexture=!0;class mS extends rt{constructor(e,t,r,n,i,a,s,l,d){super(e,t,r,n,i,a,s,l,d);this.needsUpdate=!0}}mS.prototype.isCanvasTexture=!0;class uS extends rt{constructor(e,t,r,n,i,a,s,l,d,c){if(c=c!==void 0?c:Co,c!==Co&&c!==Ln)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&c===Co&&(r=_i),r===void 0&&c===Ln&&(r=wn);super(null,n,i,a,s,l,c,r,d);this.image={width:e,height:t},this.magFilter=s!==void 0?s:tt,this.minFilter=l!==void 0?l:tt,this.flipY=!1,this.generateMipmaps=!1}}uS.prototype.isDepthTexture=!0;new P;new P;new P;new qe;class It{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,n=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),i+=r.distanceTo(n),t.push(i),n=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let n=0;const i=r.length;let a;t?a=t:a=e*r[i-1];let s=0,l=i-1,d;for(;s<=l;)if(n=Math.floor(s+(l-s)/2),d=r[n]-a,d<0)s=n+1;else if(d>0)l=n-1;else{l=n;break}if(n=l,r[n]===a)return n/(i-1);const c=r[n],u=r[n+1]-c,g=(a-c)/u;return(n+g)/(i-1)}getTangent(e,t){const r=1e-4;let n=e-r,i=e+r;n<0&&(n=0),i>1&&(i=1);const a=this.getPoint(n),s=this.getPoint(i),l=t||(a.isVector2?new Z:new P);return l.copy(s).sub(a).normalize(),l}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new P,n=[],i=[],a=[],s=new P,l=new ue;for(let g=0;g<=e;g++){const x=g/e;n[g]=this.getTangentAt(x,new P)}i[0]=new P,a[0]=new P;let d=Number.MAX_VALUE;const c=Math.abs(n[0].x),m=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=d&&(d=c,r.set(1,0,0)),m<=d&&(d=m,r.set(0,1,0)),u<=d&&r.set(0,0,1),s.crossVectors(n[0],r).normalize(),i[0].crossVectors(n[0],s),a[0].crossVectors(n[0],i[0]);for(let g=1;g<=e;g++){if(i[g]=i[g-1].clone(),a[g]=a[g-1].clone(),s.crossVectors(n[g-1],n[g]),s.length()>Number.EPSILON){s.normalize();const x=Math.acos(Lt(n[g-1].dot(n[g]),-1,1));i[g].applyMatrix4(l.makeRotationAxis(s,x))}a[g].crossVectors(n[g],i[g])}if(t===!0){let g=Math.acos(Lt(i[0].dot(i[e]),-1,1));g/=e,n[0].dot(s.crossVectors(i[0],i[e]))>0&&(g=-g);for(let x=1;x<=e;x++)i[x].applyMatrix4(l.makeRotationAxis(n[x],g*x)),a[x].crossVectors(n[x],i[x])}return{tangents:n,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ia extends It{constructor(e=0,t=0,r=1,n=1,i=0,a=Math.PI*2,s=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=n,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=s,this.aRotation=l}getPoint(e,t){const r=t||new Z,n=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const a=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=n;for(;i>n;)i-=n;i<Number.EPSILON&&(a?i=0:i=n),this.aClockwise===!0&&!a&&(i===n?i=-n:i=i-n);const s=this.aStartAngle+e*i;let l=this.aX+this.xRadius*Math.cos(s),d=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const c=Math.cos(this.aRotation),m=Math.sin(this.aRotation),u=l-this.aX,g=d-this.aY;l=u*c-g*m+this.aX,d=u*m+g*c+this.aY}return r.set(l,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}ia.prototype.isEllipseCurve=!0;class hm extends ia{constructor(e,t,r,n,i,a){super(e,t,r,r,n,i,a);this.type="ArcCurve"}}hm.prototype.isArcCurve=!0;function Bs(){let o=0,e=0,t=0,r=0;function n(i,a,s,l){o=i,e=s,t=-3*i+3*a-2*s-l,r=2*i-2*a+s+l}return{initCatmullRom:function(i,a,s,l,d){n(a,s,d*(s-i),d*(l-a))},initNonuniformCatmullRom:function(i,a,s,l,d,c,m){let u=(a-i)/d-(s-i)/(d+c)+(s-a)/c,g=(s-a)/c-(l-a)/(c+m)+(l-s)/m;u*=c,g*=c,n(a,s,u,g)},calc:function(i){const a=i*i,s=a*i;return o+e*i+t*a+r*s}}}const aa=new P,Is=new Bs,Rs=new Bs,Os=new Bs;class xm extends It{constructor(e=[],t=!1,r="centripetal",n=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=n}getPoint(e,t=new P){const r=t,n=this.points,i=n.length,a=(i-(this.closed?0:1))*e;let s=Math.floor(a),l=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/i)+1)*i:l===0&&s===i-1&&(s=i-2,l=1);let d,c;this.closed||s>0?d=n[(s-1)%i]:(aa.subVectors(n[0],n[1]).add(n[0]),d=aa);const m=n[s%i],u=n[(s+1)%i];if(this.closed||s+2<i?c=n[(s+2)%i]:(aa.subVectors(n[i-1],n[i-2]).add(n[i-1]),c=aa),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let x=Math.pow(d.distanceToSquared(m),g),f=Math.pow(m.distanceToSquared(u),g),S=Math.pow(u.distanceToSquared(c),g);f<1e-4&&(f=1),x<1e-4&&(x=f),S<1e-4&&(S=f),Is.initNonuniformCatmullRom(d.x,m.x,u.x,c.x,x,f,S),Rs.initNonuniformCatmullRom(d.y,m.y,u.y,c.y,x,f,S),Os.initNonuniformCatmullRom(d.z,m.z,u.z,c.z,x,f,S)}else this.curveType==="catmullrom"&&(Is.initCatmullRom(d.x,m.x,u.x,c.x,this.tension),Rs.initCatmullRom(d.y,m.y,u.y,c.y,this.tension),Os.initCatmullRom(d.z,m.z,u.z,c.z,this.tension));return r.set(Is.calc(l),Rs.calc(l),Os.calc(l)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}xm.prototype.isCatmullRomCurve3=!0;function pm(o,e,t,r,n){const i=(r-e)*.5,a=(n-t)*.5,s=o*o,l=o*s;return(2*t-2*r+i+a)*l+(-3*t+3*r-2*i-a)*s+i*o+t}function gS(o,e){const t=1-o;return t*t*e}function hS(o,e){return 2*(1-o)*o*e}function xS(o,e){return o*o*e}function Wn(o,e,t,r){return gS(o,e)+hS(o,t)+xS(o,r)}function pS(o,e){const t=1-o;return t*t*t*e}function fS(o,e){const t=1-o;return 3*t*t*o*e}function SS(o,e){return 3*(1-o)*o*o*e}function vS(o,e){return o*o*o*e}function zn(o,e,t,r,n){return pS(o,e)+fS(o,t)+SS(o,r)+vS(o,n)}class Ds extends It{constructor(e=new Z,t=new Z,r=new Z,n=new Z){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new Z){const r=t,n=this.v0,i=this.v1,a=this.v2,s=this.v3;return r.set(zn(e,n.x,i.x,a.x,s.x),zn(e,n.y,i.y,a.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Ds.prototype.isCubicBezierCurve=!0;class fm extends It{constructor(e=new P,t=new P,r=new P,n=new P){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new P){const r=t,n=this.v0,i=this.v1,a=this.v2,s=this.v3;return r.set(zn(e,n.x,i.x,a.x,s.x),zn(e,n.y,i.y,a.y,s.y),zn(e,n.z,i.z,a.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}fm.prototype.isCubicBezierCurve3=!0;class sa extends It{constructor(e=new Z,t=new Z){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const r=t||new Z;return r.copy(this.v2).sub(this.v1).normalize(),r}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}sa.prototype.isLineCurve=!0;class MS extends It{constructor(e=new P,t=new P){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new P){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fs extends It{constructor(e=new Z,t=new Z,r=new Z){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Z){const r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(Wn(e,n.x,i.x,a.x),Wn(e,n.y,i.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Fs.prototype.isQuadraticBezierCurve=!0;class Sm extends It{constructor(e=new P,t=new P,r=new P){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new P){const r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(Wn(e,n.x,i.x,a.x),Wn(e,n.y,i.y,a.y),Wn(e,n.z,i.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Sm.prototype.isQuadraticBezierCurve3=!0;class Us extends It{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const r=t,n=this.points,i=(n.length-1)*e,a=Math.floor(i),s=i-a,l=n[a===0?a:a-1],d=n[a],c=n[a>n.length-2?n.length-1:a+1],m=n[a>n.length-3?n.length-1:a+2];return r.set(pm(s,l.x,d.x,c.x,m.x),pm(s,l.y,d.y,c.y,m.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new Z().fromArray(n))}return this}}Us.prototype.isSplineCurve=!0;var vm=Object.freeze({__proto__:null,ArcCurve:hm,CatmullRomCurve3:xm,CubicBezierCurve:Ds,CubicBezierCurve3:fm,EllipseCurve:ia,LineCurve:sa,LineCurve3:MS,QuadraticBezierCurve:Fs,QuadraticBezierCurve3:Sm,SplineCurve:Us});class _S extends It{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new sa(t,e))}getPoint(e,t){const r=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=r){const a=n[i]-r,s=this.curves[i],l=s.getLength(),d=l===0?0:1-a/l;return s.getPointAt(d,t)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,n=this.curves.length;r<n;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let n=0,i=this.curves;n<i.length;n++){const a=i[n],s=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(s);for(let d=0;d<l.length;d++){const c=l[d];r&&r.equals(c)||(t.push(c),r=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const n=e.curves[t];this.curves.push(new vm[n.type]().fromJSON(n))}return this}}class Vs extends _S{constructor(e){super();this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new sa(this.currentPoint.clone(),new Z(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,n){const i=new Fs(this.currentPoint.clone(),new Z(e,t),new Z(r,n));return this.curves.push(i),this.currentPoint.set(r,n),this}bezierCurveTo(e,t,r,n,i,a){const s=new Ds(this.currentPoint.clone(),new Z(e,t),new Z(r,n),new Z(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Us(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,n,i,a){const s=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+s,t+l,r,n,i,a),this}absarc(e,t,r,n,i,a){return this.absellipse(e,t,r,r,n,i,a),this}ellipse(e,t,r,n,i,a,s,l){const d=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+d,t+c,r,n,i,a,s,l),this}absellipse(e,t,r,n,i,a,s,l){const d=new ia(e,t,r,n,i,a,s,l);if(this.curves.length>0){const m=d.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(d);const c=d.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Kn extends Vs{constructor(e){super(e);this.uuid=Gt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,n=this.holes.length;r<n;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const n=e.holes[t];this.holes.push(new Vs().fromJSON(n))}return this}}const AS={triangulate:function(o,e,t=2){const r=e&&e.length,n=r?e[0]*t:o.length;let i=Mm(o,0,n,t,!0);const a=[];if(!i||i.next===i.prev)return a;let s,l,d,c,m,u,g;if(r&&(i=wS(o,e,i,t)),o.length>80*t){s=d=o[0],l=c=o[1];for(let x=t;x<n;x+=t)m=o[x],u=o[x+1],m<s&&(s=m),u<l&&(l=u),m>d&&(d=m),u>c&&(c=u);g=Math.max(d-s,c-l),g=g!==0?1/g:0}return Zn(i,a,t,s,l,g),a}};function Mm(o,e,t,r,n){let i,a;if(n===DS(o,e,t,r)>0)for(i=e;i<t;i+=r)a=Tm(i,o[i],o[i+1],a);else for(i=t-r;i>=e;i-=r)a=Tm(i,o[i],o[i+1],a);return a&&la(a,a.next)&&(Yn(a),a=a.next),a}function Dr(o,e){if(!o)return o;e||(e=o);let t=o,r;do if(r=!1,!t.steiner&&(la(t,t.next)||ze(t.prev,t,t.next)===0)){if(Yn(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Zn(o,e,t,r,n,i,a){if(!o)return;!a&&i&&GS(o,r,n,i);let s=o,l,d;for(;o.prev!==o.next;){if(l=o.prev,d=o.next,i?yS(o,r,n,i):TS(o)){e.push(l.i/t),e.push(o.i/t),e.push(d.i/t),Yn(o),o=d.next,s=d.next;continue}if(o=d,o===s){a?a===1?(o=bS(Dr(o),e,t),Zn(o,e,t,r,n,i,2)):a===2&&PS(o,e,t,r,n,i):Zn(Dr(o),e,t,r,n,i,1);break}}}function TS(o){const e=o.prev,t=o,r=o.next;if(ze(e,t,r)>=0)return!1;let n=o.next.next;for(;n!==o.prev;){if(cn(e.x,e.y,t.x,t.y,r.x,r.y,n.x,n.y)&&ze(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function yS(o,e,t,r){const n=o.prev,i=o,a=o.next;if(ze(n,i,a)>=0)return!1;const s=n.x<i.x?n.x<a.x?n.x:a.x:i.x<a.x?i.x:a.x,l=n.y<i.y?n.y<a.y?n.y:a.y:i.y<a.y?i.y:a.y,d=n.x>i.x?n.x>a.x?n.x:a.x:i.x>a.x?i.x:a.x,c=n.y>i.y?n.y>a.y?n.y:a.y:i.y>a.y?i.y:a.y,m=Hs(s,l,e,t,r),u=Hs(d,c,e,t,r);let g=o.prevZ,x=o.nextZ;for(;g&&g.z>=m&&x&&x.z<=u;){if(g!==o.prev&&g!==o.next&&cn(n.x,n.y,i.x,i.y,a.x,a.y,g.x,g.y)&&ze(g.prev,g,g.next)>=0||(g=g.prevZ,x!==o.prev&&x!==o.next&&cn(n.x,n.y,i.x,i.y,a.x,a.y,x.x,x.y)&&ze(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;g&&g.z>=m;){if(g!==o.prev&&g!==o.next&&cn(n.x,n.y,i.x,i.y,a.x,a.y,g.x,g.y)&&ze(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;x&&x.z<=u;){if(x!==o.prev&&x!==o.next&&cn(n.x,n.y,i.x,i.y,a.x,a.y,x.x,x.y)&&ze(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function bS(o,e,t){let r=o;do{const n=r.prev,i=r.next.next;!la(n,i)&&_m(n,r,r.next,i)&&Qn(n,i)&&Qn(i,n)&&(e.push(n.i/t),e.push(r.i/t),e.push(i.i/t),Yn(r),Yn(r.next),r=o=i),r=r.next}while(r!==o);return Dr(r)}function PS(o,e,t,r,n,i){let a=o;do{let s=a.next.next;for(;s!==a.prev;){if(a.i!==s.i&&IS(a,s)){let l=Am(a,s);a=Dr(a,a.next),l=Dr(l,l.next),Zn(a,e,t,r,n,i),Zn(l,e,t,r,n,i);return}s=s.next}a=a.next}while(a!==o)}function wS(o,e,t,r){const n=[];let i,a,s,l,d;for(i=0,a=e.length;i<a;i++)s=e[i]*r,l=i<a-1?e[i+1]*r:o.length,d=Mm(o,s,l,r,!1),d===d.next&&(d.steiner=!0),n.push(BS(d));for(n.sort(LS),i=0;i<n.length;i++)ES(n[i],t),t=Dr(t,t.next);return t}function LS(o,e){return o.x-e.x}function ES(o,e){if(e=$S(o,e),e){const t=Am(e,o);Dr(e,e.next),Dr(t,t.next)}}function $S(o,e){let t=e;const r=o.x,n=o.y;let i=-1/0,a;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i){if(i=u,u===r){if(n===t.y)return t;if(n===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(r===i)return a;const s=a,l=a.x,d=a.y;let c=1/0,m;t=a;do r>=t.x&&t.x>=l&&r!==t.x&&cn(n<d?r:i,n,l,d,n<d?i:r,n,t.x,t.y)&&(m=Math.abs(n-t.y)/(r-t.x),Qn(t,o)&&(m<c||m===c&&(t.x>a.x||t.x===a.x&&CS(a,t)))&&(a=t,c=m)),t=t.next;while(t!==s);return a}function CS(o,e){return ze(o.prev,o,e.prev)<0&&ze(e.next,o,o.next)<0}function GS(o,e,t,r){let n=o;do n.z===null&&(n.z=Hs(n.x,n.y,e,t,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==o);n.prevZ.nextZ=null,n.prevZ=null,NS(n)}function NS(o){let e,t,r,n,i,a,s,l,d=1;do{for(t=o,o=null,i=null,a=0;t;){for(a++,r=t,s=0,e=0;e<d&&(s++,r=r.nextZ,!!r);e++);for(l=d;s>0||l>0&&r;)s!==0&&(l===0||!r||t.z<=r.z)?(n=t,t=t.nextZ,s--):(n=r,r=r.nextZ,l--),i?i.nextZ=n:o=n,n.prevZ=i,i=n;t=r}i.nextZ=null,d*=2}while(a>1);return o}function Hs(o,e,t,r,n){return o=32767*(o-t)*n,e=32767*(e-r)*n,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function BS(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function cn(o,e,t,r,n,i,a,s){return(n-a)*(e-s)-(o-a)*(i-s)>=0&&(o-a)*(r-s)-(t-a)*(e-s)>=0&&(t-a)*(i-s)-(n-a)*(r-s)>=0}function IS(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!RS(o,e)&&(Qn(o,e)&&Qn(e,o)&&OS(o,e)&&(ze(o.prev,o,e.prev)||ze(o,e.prev,e))||la(o,e)&&ze(o.prev,o,o.next)>0&&ze(e.prev,e,e.next)>0)}function ze(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function la(o,e){return o.x===e.x&&o.y===e.y}function _m(o,e,t,r){const n=ca(ze(o,e,t)),i=ca(ze(o,e,r)),a=ca(ze(t,r,o)),s=ca(ze(t,r,e));return!!(n!==i&&a!==s||n===0&&da(o,t,e)||i===0&&da(o,r,e)||a===0&&da(t,o,r)||s===0&&da(t,e,r))}function da(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function ca(o){return o>0?1:o<0?-1:0}function RS(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&_m(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function Qn(o,e){return ze(o.prev,o,o.next)<0?ze(o,e,o.next)>=0&&ze(o,o.prev,e)>=0:ze(o,e,o.prev)<0||ze(o,o.next,e)<0}function OS(o,e){let t=o,r=!1;const n=(o.x+e.x)/2,i=(o.y+e.y)/2;do t.y>i!=t.next.y>i&&t.next.y!==t.y&&n<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==o);return r}function Am(o,e){const t=new Xs(o.i,o.x,o.y),r=new Xs(e.i,e.x,e.y),n=o.next,i=e.prev;return o.next=e,e.prev=o,t.next=n,n.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function Tm(o,e,t,r){const n=new Xs(o,e,t);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function Yn(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Xs(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function DS(o,e,t,r){let n=0;for(let i=e,a=t-r;i<t;i+=r)n+=(o[a]-o[i])*(o[i+1]+o[a+1]),a=i;return n}class Fr{static area(e){const t=e.length;let r=0;for(let n=t-1,i=0;i<t;n=i++)r+=e[n].x*e[i].y-e[i].x*e[n].y;return r*.5}static isClockWise(e){return Fr.area(e)<0}static triangulateShape(e,t){const r=[],n=[],i=[];ym(e),bm(r,e);let a=e.length;t.forEach(ym);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,bm(r,t[l]);const s=AS.triangulate(r,n);for(let l=0;l<s.length;l+=3)i.push(s.slice(l,l+3));return i}}function ym(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function bm(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class mn extends He{constructor(e=new Kn([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,n=[],i=[];for(let s=0,l=e.length;s<l;s++){const d=e[s];a(d)}this.setAttribute("position",new Je(n,3)),this.setAttribute("uv",new Je(i,2)),this.computeVertexNormals();function a(s){const l=[],d=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1;let m=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:g-.1,f=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:FS;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),m=t.amount);let _,M=!1,b,w,v,$;h&&(_=h.getSpacedPoints(c),M=!0,u=!1,b=h.computeFrenetFrames(c,!1),w=new P,v=new P,$=new P),u||(S=0,g=0,x=0,f=0);const R=s.extractPoints(d);let C=R.shape;const L=R.holes;if(!Fr.isClockWise(C)){C=C.reverse();for(let X=0,K=L.length;X<K;X++){const ee=L[X];Fr.isClockWise(ee)&&(L[X]=ee.reverse())}}const N=Fr.triangulateShape(C,L),B=C;for(let X=0,K=L.length;X<K;X++){const ee=L[X];C=C.concat(ee)}function D(X,K,ee){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(ee).add(X)}const I=C.length,F=N.length;function j(X,K,ee){let ge,re,y;const A=X.x-K.x,V=X.y-K.y,Q=ee.x-X.x,Y=ee.y-X.y,se=A*A+V*V,Me=A*Y-V*Q;if(Math.abs(Me)>Number.EPSILON){const pe=Math.sqrt(se),Te=Math.sqrt(Q*Q+Y*Y),he=K.x-V/pe,E=K.y+A/pe,oe=ee.x-Y/Te,W=ee.y+Q/Te,xe=((oe-he)*Y-(W-E)*Q)/(A*Y-V*Q);ge=he+A*xe-X.x,re=E+V*xe-X.y;const de=ge*ge+re*re;if(de<=2)return new Z(ge,re);y=Math.sqrt(de/2)}else{let pe=!1;A>Number.EPSILON?Q>Number.EPSILON&&(pe=!0):A<-Number.EPSILON?Q<-Number.EPSILON&&(pe=!0):Math.sign(V)===Math.sign(Y)&&(pe=!0),pe?(ge=-V,re=A,y=Math.sqrt(se)):(ge=A,re=V,y=Math.sqrt(se/2))}return new Z(ge/y,re/y)}const le=[];for(let X=0,K=B.length,ee=K-1,ge=X+1;X<K;X++,ee++,ge++)ee===K&&(ee=0),ge===K&&(ge=0),le[X]=j(B[X],B[ee],B[ge]);const fe=[];let ne,ye=le.concat();for(let X=0,K=L.length;X<K;X++){const ee=L[X];ne=[];for(let ge=0,re=ee.length,y=re-1,A=ge+1;ge<re;ge++,y++,A++)y===re&&(y=0),A===re&&(A=0),ne[ge]=j(ee[ge],ee[y],ee[A]);fe.push(ne),ye=ye.concat(ne)}for(let X=0;X<S;X++){const K=X/S,ee=g*Math.cos(K*Math.PI/2),ge=x*Math.sin(K*Math.PI/2)+f;for(let re=0,y=B.length;re<y;re++){const A=D(B[re],le[re],ge);Se(A.x,A.y,-ee)}for(let re=0,y=L.length;re<y;re++){const A=L[re];ne=fe[re];for(let V=0,Q=A.length;V<Q;V++){const Y=D(A[V],ne[V],ge);Se(Y.x,Y.y,-ee)}}}const z=x+f;for(let X=0;X<I;X++){const K=u?D(C[X],ye[X],z):C[X];M?(v.copy(b.normals[0]).multiplyScalar(K.x),w.copy(b.binormals[0]).multiplyScalar(K.y),$.copy(_[0]).add(v).add(w),Se($.x,$.y,$.z)):Se(K.x,K.y,0)}for(let X=1;X<=c;X++)for(let K=0;K<I;K++){const ee=u?D(C[K],ye[K],z):C[K];M?(v.copy(b.normals[X]).multiplyScalar(ee.x),w.copy(b.binormals[X]).multiplyScalar(ee.y),$.copy(_[X]).add(v).add(w),Se($.x,$.y,$.z)):Se(ee.x,ee.y,m/c*X)}for(let X=S-1;X>=0;X--){const K=X/S,ee=g*Math.cos(K*Math.PI/2),ge=x*Math.sin(K*Math.PI/2)+f;for(let re=0,y=B.length;re<y;re++){const A=D(B[re],le[re],ge);Se(A.x,A.y,m+ee)}for(let re=0,y=L.length;re<y;re++){const A=L[re];ne=fe[re];for(let V=0,Q=A.length;V<Q;V++){const Y=D(A[V],ne[V],ge);M?Se(Y.x,Y.y+_[c-1].y,_[c-1].x+ee):Se(Y.x,Y.y,m+ee)}}}q(),ce();function q(){const X=n.length/3;if(u){let K=0,ee=I*K;for(let ge=0;ge<F;ge++){const re=N[ge];Ae(re[2]+ee,re[1]+ee,re[0]+ee)}K=c+S*2,ee=I*K;for(let ge=0;ge<F;ge++){const re=N[ge];Ae(re[0]+ee,re[1]+ee,re[2]+ee)}}else{for(let K=0;K<F;K++){const ee=N[K];Ae(ee[2],ee[1],ee[0])}for(let K=0;K<F;K++){const ee=N[K];Ae(ee[0]+I*c,ee[1]+I*c,ee[2]+I*c)}}r.addGroup(X,n.length/3-X,0)}function ce(){const X=n.length/3;let K=0;H(B,K),K+=B.length;for(let ee=0,ge=L.length;ee<ge;ee++){const re=L[ee];H(re,K),K+=re.length}r.addGroup(X,n.length/3-X,1)}function H(X,K){let ee=X.length;for(;--ee>=0;){const ge=ee;let re=ee-1;re<0&&(re=X.length-1);for(let y=0,A=c+S*2;y<A;y++){const V=I*y,Q=I*(y+1),Y=K+ge+V,se=K+re+V,Me=K+re+Q,pe=K+ge+Q;ae(Y,se,Me,pe)}}}function Se(X,K,ee){l.push(X),l.push(K),l.push(ee)}function Ae(X,K,ee){me(X),me(K),me(ee);const ge=n.length/3,re=p.generateTopUV(r,n,ge-3,ge-2,ge-1);Pe(re[0]),Pe(re[1]),Pe(re[2])}function ae(X,K,ee,ge){me(X),me(K),me(ge),me(K),me(ee),me(ge);const re=n.length/3,y=p.generateSideWallUV(r,n,re-6,re-3,re-2,re-1);Pe(y[0]),Pe(y[1]),Pe(y[3]),Pe(y[1]),Pe(y[2]),Pe(y[3])}function me(X){n.push(l[X*3+0]),n.push(l[X*3+1]),n.push(l[X*3+2])}function Pe(X){i.push(X.x),i.push(X.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return US(t,r,e)}static fromJSON(e,t){const r=[];for(let i=0,a=e.shapes.length;i<a;i++){const s=t[e.shapes[i]];r.push(s)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new vm[n.type]().fromJSON(n)),new mn(r,e.options)}}const FS={generateTopUV:function(o,e,t,r,n){const i=e[t*3],a=e[t*3+1],s=e[r*3],l=e[r*3+1],d=e[n*3],c=e[n*3+1];return[new Z(i,a),new Z(s,l),new Z(d,c)]},generateSideWallUV:function(o,e,t,r,n,i){const a=e[t*3],s=e[t*3+1],l=e[t*3+2],d=e[r*3],c=e[r*3+1],m=e[r*3+2],u=e[n*3],g=e[n*3+1],x=e[n*3+2],f=e[i*3],S=e[i*3+1],h=e[i*3+2];return Math.abs(s-c)<Math.abs(a-d)?[new Z(a,1-l),new Z(d,1-m),new Z(u,1-x),new Z(f,1-h)]:[new Z(s,1-l),new Z(c,1-m),new Z(g,1-x),new Z(S,1-h)]}};function US(o,e,t){if(t.shapes=[],Array.isArray(o))for(let r=0,n=o.length;r<n;r++){const i=o[r];t.shapes.push(i.uuid)}else t.shapes.push(o.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ks extends He{constructor(e=new Kn([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],n=[],i=[],a=[];let s=0,l=0;if(Array.isArray(e)===!1)d(e);else for(let c=0;c<e.length;c++)d(e[c]),this.addGroup(s,l,c),s+=l,l=0;this.setIndex(r),this.setAttribute("position",new Je(n,3)),this.setAttribute("normal",new Je(i,3)),this.setAttribute("uv",new Je(a,2));function d(c){const m=n.length/3,u=c.extractPoints(t);let g=u.shape;const x=u.holes;Fr.isClockWise(g)===!1&&(g=g.reverse());for(let S=0,h=x.length;S<h;S++){const p=x[S];Fr.isClockWise(p)===!0&&(x[S]=p.reverse())}const f=Fr.triangulateShape(g,x);for(let S=0,h=x.length;S<h;S++){const p=x[S];g=g.concat(p)}for(let S=0,h=g.length;S<h;S++){const p=g[S];n.push(p.x,p.y,0),i.push(0,0,1),a.push(p.x,p.y)}for(let S=0,h=f.length;S<h;S++){const p=f[S],_=p[0]+m,M=p[1]+m,b=p[2]+m;r.push(_,M,b),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return VS(t,e)}static fromJSON(e,t){const r=[];for(let n=0,i=e.shapes.length;n<i;n++){const a=t[e.shapes[n]];r.push(a)}return new ks(r,e.curveSegments)}}function VS(o,e){if(e.shapes=[],Array.isArray(o))for(let t=0,r=o.length;t<r;t++){const n=o[t];e.shapes.push(n.uuid)}else e.shapes.push(o.uuid);return e}class Pm extends He{constructor(e=1,t=.4,r=8,n=6,i=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:n,arc:i},r=Math.floor(r),n=Math.floor(n);const a=[],s=[],l=[],d=[],c=new P,m=new P,u=new P;for(let g=0;g<=r;g++)for(let x=0;x<=n;x++){const f=x/n*i,S=g/r*Math.PI*2;m.x=(e+t*Math.cos(S))*Math.cos(f),m.y=(e+t*Math.cos(S))*Math.sin(f),m.z=t*Math.sin(S),s.push(m.x,m.y,m.z),c.x=e*Math.cos(f),c.y=e*Math.sin(f),u.subVectors(m,c).normalize(),l.push(u.x,u.y,u.z),d.push(x/n),d.push(g/r)}for(let g=1;g<=r;g++)for(let x=1;x<=n;x++){const f=(n+1)*g+x-1,S=(n+1)*(g-1)+x-1,h=(n+1)*(g-1)+x,p=(n+1)*g+x;a.push(f,S,p),a.push(S,h,p)}this.setIndex(a),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(d,2))}static fromJSON(e){return new Pm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class HS extends ot{constructor(e){super();this.type="ShadowMaterial",this.color=new ie(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}HS.prototype.isShadowMaterial=!0;class Jn extends ot{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Jn.prototype.isMeshStandardMaterial=!0;class xo extends Jn{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}xo.prototype.isMeshPhysicalMaterial=!0;class XS extends ot{constructor(e){super();this.type="MeshPhongMaterial",this.color=new ie(16777215),this.specular=new ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Si,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}XS.prototype.isMeshPhongMaterial=!0;class kS extends ot{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}kS.prototype.isMeshToonMaterial=!0;class WS extends ot{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}WS.prototype.isMeshNormalMaterial=!0;class zS extends ot{constructor(e){super();this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Si,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}zS.prototype.isMeshLambertMaterial=!0;class KS extends ot{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ie(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}KS.prototype.isMeshMatcapMaterial=!0;class ZS extends dn{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}ZS.prototype.isLineDashedMaterial=!0;const ke={arraySlice:function(o,e,t){return ke.isTypedArray(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)},convertArray:function(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)},isTypedArray:function(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)},getKeyframeOrder:function(o){function e(n,i){return o[n]-o[i]}const t=o.length,r=new Array(t);for(let n=0;n!==t;++n)r[n]=n;return r.sort(e),r},sortedArray:function(o,e,t){const r=o.length,n=new o.constructor(r);for(let i=0,a=0;a!==r;++i){const s=t[i]*e;for(let l=0;l!==e;++l)n[a++]=o[s+l]}return n},flattenJSON:function(o,e,t,r){let n=1,i=o[0];for(;i!==void 0&&i[r]===void 0;)i=o[n++];if(i===void 0)return;let a=i[r];if(a!==void 0)if(Array.isArray(a))do a=i[r],a!==void 0&&(e.push(i.time),t.push.apply(t,a)),i=o[n++];while(i!==void 0);else if(a.toArray!==void 0)do a=i[r],a!==void 0&&(e.push(i.time),a.toArray(t,t.length)),i=o[n++];while(i!==void 0);else do a=i[r],a!==void 0&&(e.push(i.time),t.push(a)),i=o[n++];while(i!==void 0)},subclip:function(o,e,t,r,n=30){const i=o.clone();i.name=e;const a=[];for(let l=0;l<i.tracks.length;++l){const d=i.tracks[l],c=d.getValueSize(),m=[],u=[];for(let g=0;g<d.times.length;++g){const x=d.times[g]*n;if(!(x<t||x>=r)){m.push(d.times[g]);for(let f=0;f<c;++f)u.push(d.values[g*c+f])}}m.length!==0&&(d.times=ke.convertArray(m,d.times.constructor),d.values=ke.convertArray(u,d.values.constructor),a.push(d))}i.tracks=a;let s=1/0;for(let l=0;l<i.tracks.length;++l)s>i.tracks[l].times[0]&&(s=i.tracks[l].times[0]);for(let l=0;l<i.tracks.length;++l)i.tracks[l].shift(-1*s);return i.resetDuration(),i},makeClipAdditive:function(o,e=0,t=o,r=30){r<=0&&(r=30);const n=t.tracks.length,i=e/r;for(let a=0;a<n;++a){const s=t.tracks[a],l=s.ValueTypeName;if(l==="bool"||l==="string")continue;const d=o.tracks.find(function(h){return h.name===s.name&&h.ValueTypeName===l});if(d===void 0)continue;let c=0;const m=s.getValueSize();s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=m/3);let u=0;const g=d.getValueSize();d.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=g/3);const x=s.times.length-1;let f;if(i<=s.times[0]){const h=c,p=m-c;f=ke.arraySlice(s.values,h,p)}else if(i>=s.times[x]){const h=x*m+c,p=h+m-c;f=ke.arraySlice(s.values,h,p)}else{const h=s.createInterpolant(),p=c,_=m-c;h.evaluate(i),f=ke.arraySlice(h.resultBuffer,p,_)}l==="quaternion"&&new ct().fromArray(f).normalize().conjugate().toArray(f);const S=d.times.length;for(let h=0;h<S;++h){const p=h*g+u;if(l==="quaternion")ct.multiplyQuaternionsFlat(d.values,p,f,0,d.values,p);else{const _=g-u*2;for(let M=0;M<_;++M)d.values[p+M]-=f[M]}}}return o.blendMode=Od,o}};class ur{constructor(e,t,r,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,n=t[r],i=t[r-1];e:{t:{let a;r:{o:if(!(e<n)){for(let s=r+2;;){if(n===void 0){if(e<i)break o;return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,e,i)}if(r===s)break;if(i=n,n=t[++r],e<n)break t}a=t.length;break r}if(!(e>=i)){const s=t[1];e<s&&(r=2,i=s);for(let l=r-2;;){if(i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(r===l)break;if(n=i,i=t[--r-1],e>=i)break t}a=r,r=0;break r}break e}for(;r<a;){const s=r+a>>>1;e<t[s]?a=s:r=s+1}if(n=t[r],i=t[r-1],i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(n===void 0)return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,i,e)}this._cachedIndex=r,this.intervalChanged_(r,i,n)}return this.interpolate_(r,i,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,i=e*n;for(let a=0;a!==n;++a)t[a]=r[i+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}ur.prototype.beforeStart_=ur.prototype.copySampleValue_;ur.prototype.afterEnd_=ur.prototype.copySampleValue_;class QS extends ur{constructor(e,t,r,n){super(e,t,r,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:No,endingEnd:No}}intervalChanged_(e,t,r){const n=this.parameterPositions;let i=e-2,a=e+1,s=n[i],l=n[a];if(s===void 0)switch(this.getSettings_().endingStart){case Bo:i=e,s=2*t-r;break;case Ti:i=n.length-2,s=t+n[i]-n[i+1];break;default:i=e,s=r}if(l===void 0)switch(this.getSettings_().endingEnd){case Bo:a=e,l=2*r-t;break;case Ti:a=1,l=r+n[1]-n[0];break;default:a=e-1,l=t}const d=(r-t)*.5,c=this.valueSize;this._weightPrev=d/(t-s),this._weightNext=d/(l-r),this._offsetPrev=i*c,this._offsetNext=a*c}interpolate_(e,t,r,n){const i=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s,d=l-s,c=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,g=this._weightNext,x=(r-t)/(n-t),f=x*x,S=f*x,h=-u*S+2*u*f-u*x,p=(1+u)*S+(-1.5-2*u)*f+(-.5+u)*x+1,_=(-1-g)*S+(1.5+g)*f+.5*x,M=g*S-g*f;for(let b=0;b!==s;++b)i[b]=h*a[c+b]+p*a[d+b]+_*a[l+b]+M*a[m+b];return i}}class wm extends ur{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){const i=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s,d=l-s,c=(r-t)/(n-t),m=1-c;for(let u=0;u!==s;++u)i[u]=a[d+u]*m+a[l+u]*c;return i}}class YS extends ur{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jt{constructor(e,t,r,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ke.convertArray(t,this.TimeBufferType),this.values=ke.convertArray(r,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:ke.convertArray(e.times,Array),values:ke.convertArray(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(r.interpolation=n)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new YS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new QS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case En:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return En;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]*=e}return this}trim(e,t){const r=this.times,n=r.length;let i=0,a=n-1;for(;i!==n&&r[i]<e;)++i;for(;a!==-1&&r[a]>t;)--a;if(++a,i!==0||a!==n){i>=a&&(a=Math.max(a,1),i=a-1);const s=this.getValueSize();this.times=ke.arraySlice(r,i,a),this.values=ke.arraySlice(this.values,i*s,a*s)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,n=this.values,i=r.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==i;s++){const l=r[s];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,l,a),e=!1;break}a=l}if(n!==void 0&&ke.isTypedArray(n))for(let s=0,l=n.length;s!==l;++s){const d=n[s];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,d),e=!1;break}}return e}optimize(){const e=ke.arraySlice(this.times),t=ke.arraySlice(this.values),r=this.getValueSize(),n=this.getInterpolation()===Fa,i=e.length-1;let a=1;for(let s=1;s<i;++s){let l=!1;const d=e[s],c=e[s+1];if(d!==c&&(s!==1||d!==e[0]))if(n)l=!0;else{const m=s*r,u=m-r,g=m+r;for(let x=0;x!==r;++x){const f=t[m+x];if(f!==t[u+x]||f!==t[g+x]){l=!0;break}}}if(l){if(s!==a){e[a]=e[s];const m=s*r,u=a*r;for(let g=0;g!==r;++g)t[u+g]=t[m+g]}++a}}if(i>0){e[a]=e[i];for(let s=i*r,l=a*r,d=0;d!==r;++d)t[l+d]=t[s+d];++a}return a!==e.length?(this.times=ke.arraySlice(e,0,a),this.values=ke.arraySlice(t,0,a*r)):(this.times=e,this.values=t),this}clone(){const e=ke.arraySlice(this.times,0),t=ke.arraySlice(this.values,0),r=this.constructor,n=new r(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Go;class un extends Jt{}un.prototype.ValueTypeName="bool";un.prototype.ValueBufferType=Array;un.prototype.DefaultInterpolation=En;un.prototype.InterpolantFactoryMethodLinear=void 0;un.prototype.InterpolantFactoryMethodSmooth=void 0;class Lm extends Jt{}Lm.prototype.ValueTypeName="color";class jn extends Jt{}jn.prototype.ValueTypeName="number";class JS extends ur{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){const i=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=(r-t)/(n-t);let d=e*s;for(let c=d+s;d!==c;d+=4)ct.slerpFlat(i,0,a,d-s,a,d,l);return i}}class po extends Jt{InterpolantFactoryMethodLinear(e){return new JS(this.times,this.values,this.getValueSize(),e)}}po.prototype.ValueTypeName="quaternion";po.prototype.DefaultInterpolation=Go;po.prototype.InterpolantFactoryMethodSmooth=void 0;class gn extends Jt{}gn.prototype.ValueTypeName="string";gn.prototype.ValueBufferType=Array;gn.prototype.DefaultInterpolation=En;gn.prototype.InterpolantFactoryMethodLinear=void 0;gn.prototype.InterpolantFactoryMethodSmooth=void 0;class qn extends Jt{}qn.prototype.ValueTypeName="vector";class Ws{constructor(e,t=-1,r,n=Ua){this.name=e,this.tracks=r,this.duration=t,this.blendMode=n,this.uuid=Gt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,n=1/(e.fps||1);for(let a=0,s=r.length;a!==s;++a)t.push(qS(r[a]).scale(n));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],r=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,a=r.length;i!==a;++i)t.push(Jt.toJSON(r[i]));return n}static CreateFromMorphTargetSequence(e,t,r,n){const i=t.length,a=[];for(let s=0;s<i;s++){let l=[],d=[];l.push((s+i-1)%i,s,(s+1)%i),d.push(0,1,0);const c=ke.getKeyframeOrder(l);l=ke.sortedArray(l,1,c),d=ke.sortedArray(d,1,c),!n&&l[0]===0&&(l.push(i),d.push(d[0])),a.push(new jn(".morphTargetInfluences["+t[s].name+"]",l,d).scale(1/r))}return new this(e,-1,a)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const n=e;r=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<r.length;n++)if(r[n].name===t)return r[n];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const n={},i=/^([\w-]*?)([\d]+)$/;for(let s=0,l=e.length;s<l;s++){const d=e[s],c=d.name.match(i);if(c&&c.length>1){const m=c[1];let u=n[m];u||(n[m]=u=[]),u.push(d)}}const a=[];for(const s in n)a.push(this.CreateFromMorphTargetSequence(s,n[s],t,r));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const r=function(m,u,g,x,f){if(g.length!==0){const S=[],h=[];ke.flattenJSON(g,S,h,x),S.length!==0&&f.push(new m(u,S,h))}},n=[],i=e.name||"default",a=e.fps||30,s=e.blendMode;let l=e.length||-1;const d=e.hierarchy||[];for(let m=0;m<d.length;m++){const u=d[m].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const g={};let x;for(x=0;x<u.length;x++)if(u[x].morphTargets)for(let f=0;f<u[x].morphTargets.length;f++)g[u[x].morphTargets[f]]=-1;for(const f in g){const S=[],h=[];for(let p=0;p!==u[x].morphTargets.length;++p){const _=u[x];S.push(_.time),h.push(_.morphTarget===f?1:0)}n.push(new jn(".morphTargetInfluence["+f+"]",S,h))}l=g.length*(a||1)}else{const g=".bones["+t[m].name+"]";r(qn,g+".position",u,"pos",n),r(po,g+".quaternion",u,"rot",n),r(qn,g+".scale",u,"scl",n)}}return n.length===0?null:new this(i,l,n,s)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,n=e.length;r!==n;++r){const i=this.tracks[r];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jS(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jn;case"vector":case"vector2":case"vector3":case"vector4":return qn;case"color":return Lm;case"quaternion":return po;case"bool":case"boolean":return un;case"string":return gn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function qS(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jS(o.type);if(o.times===void 0){const t=[],r=[];ke.flattenJSON(o.keys,t,r,"value"),o.times=t,o.values=r}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const hn={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class ev{constructor(e,t,r){const n=this;let i=!1,a=0,s=0,l;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(c){s++,i===!1&&n.onStart!==void 0&&n.onStart(c,a,s),i=!0},this.itemEnd=function(c){a++,n.onProgress!==void 0&&n.onProgress(c,a,s),a===s&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,m){return d.push(c,m),this},this.removeHandler=function(c){const m=d.indexOf(c);return m!==-1&&d.splice(m,2),this},this.getHandler=function(c){for(let m=0,u=d.length;m<u;m+=2){const g=d[m],x=d[m+1];if(g.global&&(g.lastIndex=0),g.test(c))return x}return null}}}const tv=new ev;class gr{constructor(e){this.manager=e!==void 0?e:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const hr={};class zs extends gr{constructor(e){super(e)}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=hn.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(hr[e]!==void 0){hr[e].push({onLoad:t,onProgress:r,onError:n});return}hr[e]=[],hr[e].push({onLoad:t,onProgress:r,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(s=>{if(s.status===200||s.status===0){s.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=hr[e],d=s.body.getReader(),c=s.headers.get("Content-Length"),m=c?parseInt(c):0,u=m!==0;let g=0;return new ReadableStream({start(x){f();function f(){d.read().then(({done:S,value:h})=>{if(S)x.close();else{g+=h.byteLength;const p=new ProgressEvent("progress",{lengthComputable:u,loaded:g,total:m});for(let _=0,M=l.length;_<M;_++){const b=l[_];b.onProgress&&b.onProgress(p)}x.enqueue(h),f()}})}}})}else throw Error(`fetch for "${s.url}" responded with ${s.status}: ${s.statusText}`)}).then(s=>{const l=new Response(s);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,this.mimeType));case"json":return l.json();default:return l.text()}}).then(s=>{hn.add(e,s);const l=hr[e];delete hr[e];for(let d=0,c=l.length;d<c;d++){const m=l[d];m.onLoad&&m.onLoad(s)}this.manager.itemEnd(e)}).catch(s=>{const l=hr[e];delete hr[e];for(let d=0,c=l.length;d<c;d++){const m=l[d];m.onError&&m.onError(s)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Em extends gr{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=hn.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;const s=Pi("img");function l(){c(),hn.add(e,this),t&&t(this),i.manager.itemEnd(e)}function d(m){c(),n&&n(m),i.manager.itemError(e),i.manager.itemEnd(e)}function c(){s.removeEventListener("load",l,!1),s.removeEventListener("error",d,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",d,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),i.manager.itemStart(e),s.src=e,s}}class rv extends gr{constructor(e){super(e)}load(e,t,r,n){const i=new Xi,a=new Em(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let s=0;function l(d){a.load(e[d],function(c){i.images[d]=c,s++,s===6&&(i.needsUpdate=!0,t&&t(i))},void 0,n)}for(let d=0;d<e.length;++d)l(d);return i}}class $m extends gr{constructor(e){super(e)}load(e,t,r,n){const i=new rt,a=new Em(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){i.image=s,i.needsUpdate=!0,t!==void 0&&t(i)},r,n),i}}class jt extends Re{constructor(e,t=1){super();this.type="Light",this.color=new ie(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}jt.prototype.isLight=!0;class ov extends jt{constructor(e,t,r){super(e,r);this.type="HemisphereLight",this.position.copy(Re.DefaultUp),this.updateMatrix(),this.groundColor=new ie(t)}copy(e){return jt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}ov.prototype.isHemisphereLight=!0;const Cm=new ue,Gm=new P,Nm=new P;class Ks{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Gm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gm),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),Cm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cm),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(t.projectionMatrix),r.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bm extends Ks{constructor(){super(new At(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,r=Gn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(r!==t.fov||n!==t.aspect||i!==t.far)&&(t.fov=r,t.aspect=n,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Bm.prototype.isSpotLightShadow=!0;class Im extends jt{constructor(e,t,r=0,n=Math.PI/3,i=0,a=1){super(e,t);this.type="SpotLight",this.position.copy(Re.DefaultUp),this.updateMatrix(),this.target=new Re,this.distance=r,this.angle=n,this.penumbra=i,this.decay=a,this.shadow=new Bm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Im.prototype.isSpotLight=!0;const Rm=new ue,ei=new P,Zs=new P;class Om extends Ks{constructor(){super(new At(90,1,.5,500));this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,n=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),ei.setFromMatrixPosition(e.matrixWorld),r.position.copy(ei),Zs.copy(r.position),Zs.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Zs),r.updateMatrixWorld(),n.makeTranslation(-ei.x,-ei.y,-ei.z),Rm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rm)}}Om.prototype.isPointLightShadow=!0;class Dm extends jt{constructor(e,t,r=0,n=1){super(e,t);this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new Om}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Dm.prototype.isPointLight=!0;class Fm extends Ks{constructor(){super(new zi(-5,5,5,-5,.5,500))}}Fm.prototype.isDirectionalLightShadow=!0;class Um extends jt{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Re.DefaultUp),this.updateMatrix(),this.target=new Re,this.shadow=new Fm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Um.prototype.isDirectionalLight=!0;class nv extends jt{constructor(e,t){super(e,t);this.type="AmbientLight"}}nv.prototype.isAmbientLight=!0;class iv extends jt{constructor(e,t,r=10,n=10){super(e,t);this.type="RectAreaLight",this.width=r,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}iv.prototype.isRectAreaLight=!0;class Vm{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const r=e.x,n=e.y,i=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*i),t.addScaledVector(a[3],.488603*r),t.addScaledVector(a[4],1.092548*(r*n)),t.addScaledVector(a[5],1.092548*(n*i)),t.addScaledVector(a[6],.315392*(3*i*i-1)),t.addScaledVector(a[7],1.092548*(r*i)),t.addScaledVector(a[8],.546274*(r*r-n*n)),t}getIrradianceAt(e,t){const r=e.x,n=e.y,i=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*n),t.addScaledVector(a[2],2*.511664*i),t.addScaledVector(a[3],2*.511664*r),t.addScaledVector(a[4],2*.429043*r*n),t.addScaledVector(a[5],2*.429043*n*i),t.addScaledVector(a[6],.743125*i*i-.247708),t.addScaledVector(a[7],2*.429043*r*i),t.addScaledVector(a[8],.429043*(r*r-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let r=0;r<9;r++)this.coefficients[r].addScaledVector(e.coefficients[r],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let r=0;r<9;r++)this.coefficients[r].lerp(e.coefficients[r],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const r=this.coefficients;for(let n=0;n<9;n++)r[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const r=this.coefficients;for(let n=0;n<9;n++)r[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const r=e.x,n=e.y,i=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*i,t[3]=.488603*r,t[4]=1.092548*r*n,t[5]=1.092548*n*i,t[6]=.315392*(3*i*i-1),t[7]=1.092548*r*i,t[8]=.546274*(r*r-n*n)}}Vm.prototype.isSphericalHarmonics3=!0;class Qs extends jt{constructor(e=new Vm,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Qs.prototype.isLightProbe=!0;class Ur{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let r=0,n=e.length;r<n;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class av extends He{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}av.prototype.isInstancedBufferGeometry=!0;class Hm extends gr{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=hn.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;const s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(l){hn.add(e,l),t&&t(l),i.manager.itemEnd(e)}).catch(function(l){n&&n(l),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}}Hm.prototype.isImageBitmapLoader=!0;let ma;const sv={getContext:function(){return ma===void 0&&(ma=new(window.AudioContext||window.webkitAudioContext)),ma},setContext:function(o){ma=o}};class lv extends gr{constructor(e){super(e)}load(e,t,r,n){const i=this,a=new zs(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(s){try{const l=s.slice(0);sv.getContext().decodeAudioData(l,function(c){t(c)})}catch(l){n?n(l):console.error(l),i.manager.itemError(e)}},r,n)}}class dv extends Qs{constructor(e,t,r=1){super(void 0,r);const n=new ie().set(e),i=new ie().set(t),a=new P(n.r,n.g,n.b),s=new P(i.r,i.g,i.b),l=Math.sqrt(Math.PI),d=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(s).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(s).multiplyScalar(d)}}dv.prototype.isHemisphereLightProbe=!0;class cv extends Qs{constructor(e,t=1){super(void 0,t);const r=new ie().set(e);this.sh.coefficients[0].set(r.r,r.g,r.b).multiplyScalar(2*Math.sqrt(Math.PI))}}cv.prototype.isAmbientLightProbe=!0;class kR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xm(){return(typeof performance=="undefined"?Date:performance).now()}class mv extends Re{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class uv{constructor(e,t,r){this.binding=e,this.valueSize=r;let n,i,a;switch(t){case"quaternion":n=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(r*6),this._workIndex=5;break;case"string":case"bool":n=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(r*5);break;default:n=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(r*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const r=this.buffer,n=this.valueSize,i=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let s=0;s!==n;++s)r[i+s]=r[s];a=t}else{a+=t;const s=t/a;this._mixBufferRegion(r,i,0,s,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,r=this.valueSize,n=r*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,r),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,r=this.buffer,n=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,s=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){const l=t*this._origIndex;this._mixBufferRegion(r,n,l,1-i,t)}a>0&&this._mixBufferRegionAdditive(r,n,this._addIndex*t,1,t);for(let l=t,d=t+t;l!==d;++l)if(r[l]!==r[l+t]){s.setValue(r,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,r=this.valueSize,n=r*this._origIndex;e.getValue(t,n);for(let i=r,a=n;i!==a;++i)t[i]=t[n+i%r];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let r=e;r<t;r++)this.buffer[r]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let r=0;r<this.valueSize;r++)this.buffer[t+r]=this.buffer[e+r]}_select(e,t,r,n,i){if(n>=.5)for(let a=0;a!==i;++a)e[t+a]=e[r+a]}_slerp(e,t,r,n){ct.slerpFlat(e,t,e,t,e,r,n)}_slerpAdditive(e,t,r,n,i){const a=this._workIndex*i;ct.multiplyQuaternionsFlat(e,a,e,t,e,r),ct.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,r,n,i){const a=1-n;for(let s=0;s!==i;++s){const l=t+s;e[l]=e[l]*a+e[r+s]*n}}_lerpAdditive(e,t,r,n,i){for(let a=0;a!==i;++a){const s=t+a;e[s]=e[s]+e[r+a]*n}}}const Ys="\\[\\]\\.:\\/",gv=new RegExp("["+Ys+"]","g"),Js="[^"+Ys+"]",hv="[^"+Ys.replace("\\.","")+"]",xv=/((?:WC+[\/:])*)/.source.replace("WC",Js),pv=/(WCOD+)?/.source.replace("WCOD",hv),fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Js),Sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Js),vv=new RegExp("^"+xv+pv+fv+Sv+"$"),Mv=["material","materials","bones"];class _v{constructor(e,t,r){const n=r||Oe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,n=this._bindings[r];n!==void 0&&n.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=r.length;n!==i;++n)r[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class Oe{constructor(e,t,r){this.path=t,this.parsedPath=r||Oe.parseTrackName(t),this.node=Oe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new Oe.Composite(e,t,r):new Oe(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gv,"")}static parseTrackName(e){const t=vv.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const i=r.nodeName.substring(n+1);Mv.indexOf(i)!==-1&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=i)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(i){for(let a=0;a<i.length;a++){const s=i[a];if(s.name===t||s.uuid===t)return s;const l=r(s.children);if(l)return l}return null},n=r(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)e[t++]=r[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)r[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)r[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)r[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,n=t.propertyName;let i=t.propertyIndex;if(e||(e=Oe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(r){let d=t.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===d){d=c;break}break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const a=e[n];if(a===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+n+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(i!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=i}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Oe.Composite=_v;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Av{constructor(e,t,r=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=r,this.blendMode=n;const i=t.tracks,a=i.length,s=new Array(a),l={endingStart:No,endingEnd:No};for(let d=0;d!==a;++d){const c=i[d].createInterpolant(null);s[d]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=s,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=jh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,r){if(e.fadeOut(t),this.fadeIn(t),r){const n=this._clip.duration,i=e._clip.duration,a=i/n,s=n/i;e.warp(1,a,t),this.warp(s,1,t)}return this}crossFadeTo(e,t,r){return e.crossFadeFrom(this,t,r)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,r){const n=this._mixer,i=n.time,a=this.timeScale;let s=this._timeScaleInterpolant;s===null&&(s=n._lendControlInterpolant(),this._timeScaleInterpolant=s);const l=s.parameterPositions,d=s.sampleValues;return l[0]=i,l[1]=i+r,d[0]=e/a,d[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,r,n){if(!this.enabled){this._updateWeight(e);return}const i=this._startTime;if(i!==null){const l=(e-i)*r;if(l<0||r===0)return;this._startTime=null,t=r*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),s=this._updateWeight(e);if(s>0){const l=this._interpolants,d=this._propertyBindings;switch(this.blendMode){case Od:for(let c=0,m=l.length;c!==m;++c)l[c].evaluate(a),d[c].accumulateAdditive(s);break;case Ua:default:for(let c=0,m=l.length;c!==m;++c)l[c].evaluate(a),d[c].accumulate(n,s)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const r=this._weightInterpolant;if(r!==null){const n=r.evaluate(e)[0];t*=n,e>r.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const r=this._timeScaleInterpolant;r!==null&&(t*=r.evaluate(e)[0],e>r.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,r=this.loop;let n=this.time+e,i=this._loopCount;const a=r===qh;if(e===0)return i===-1?n:a&&(i&1)==1?t-n:n;if(r===Jh){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const s=Math.floor(n/t);n-=t*s,i+=Math.abs(s);const l=this.repetitions-i;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const d=e<0;this._setEndings(d,!d,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}else this.time=n;if(a&&(i&1)==1)return t-n}return n}_setEndings(e,t,r){const n=this._interpolantSettings;r?(n.endingStart=Bo,n.endingEnd=Bo):(e?n.endingStart=this.zeroSlopeAtStart?Bo:No:n.endingStart=Ti,t?n.endingEnd=this.zeroSlopeAtEnd?Bo:No:n.endingEnd=Ti)}_scheduleFading(e,t,r){const n=this._mixer,i=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const s=a.parameterPositions,l=a.sampleValues;return s[0]=i,l[0]=t,s[1]=i+e,l[1]=r,this}}class Tv extends br{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const r=e._localRoot||this._root,n=e._clip.tracks,i=n.length,a=e._propertyBindings,s=e._interpolants,l=r.uuid,d=this._bindingsByRootAndName;let c=d[l];c===void 0&&(c={},d[l]=c);for(let m=0;m!==i;++m){const u=n[m],g=u.name;let x=c[g];if(x!==void 0)a[m]=x;else{if(x=a[m],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,g));continue}const f=t&&t._propertyBindings[m].binding.parsedPath;x=new uv(Oe.create(r,g,f),u.ValueTypeName,u.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,g),a[m]=x}s[m].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const r=(e._localRoot||this._root).uuid,n=e._clip.uuid,i=this._actionsByClip[n];this._bindAction(e,i&&i.knownActions[0]),this._addInactiveAction(e,n,r)}const t=e._propertyBindings;for(let r=0,n=t.length;r!==n;++r){const i=t[r];i.useCount++==0&&(this._lendBinding(i),i.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let r=0,n=t.length;r!==n;++r){const i=t[r];--i.useCount==0&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,r){const n=this._actions,i=this._actionsByClip;let a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{const s=a.knownActions;e._byClipCacheIndex=s.length,s.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[r]=e}_removeInactiveAction(e){const t=this._actions,r=t[t.length-1],n=e._cacheIndex;r._cacheIndex=n,t[n]=r,t.pop(),e._cacheIndex=null;const i=e._clip.uuid,a=this._actionsByClip,s=a[i],l=s.knownActions,d=l[l.length-1],c=e._byClipCacheIndex;d._byClipCacheIndex=c,l[c]=d,l.pop(),e._byClipCacheIndex=null;const m=s.actionByRoot,u=(e._localRoot||this._root).uuid;delete m[u],l.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let r=0,n=t.length;r!==n;++r){const i=t[r];--i.referenceCount==0&&this._removeInactiveBinding(i)}}_lendAction(e){const t=this._actions,r=e._cacheIndex,n=this._nActiveActions++,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=r,t[r]=i}_takeBackAction(e){const t=this._actions,r=e._cacheIndex,n=--this._nActiveActions,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=r,t[r]=i}_addInactiveBinding(e,t,r){const n=this._bindingsByRootAndName,i=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[r]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){const t=this._bindings,r=e.binding,n=r.rootNode.uuid,i=r.path,a=this._bindingsByRootAndName,s=a[n],l=t[t.length-1],d=e._cacheIndex;l._cacheIndex=d,t[d]=l,t.pop(),delete s[i],Object.keys(s).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,r=e._cacheIndex,n=this._nActiveBindings++,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=r,t[r]=i}_takeBackBinding(e){const t=this._bindings,r=e._cacheIndex,n=--this._nActiveBindings,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=r,t[r]=i}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let r=e[t];return r===void 0&&(r=new wm(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),r.__cacheIndex=t,e[t]=r),r}_takeBackControlInterpolant(e){const t=this._controlInterpolants,r=e.__cacheIndex,n=--this._nActiveControlInterpolants,i=t[n];e.__cacheIndex=n,t[n]=e,i.__cacheIndex=r,t[r]=i}clipAction(e,t,r){const n=t||this._root,i=n.uuid;let a=typeof e=="string"?Ws.findByName(n,e):e;const s=a!==null?a.uuid:e,l=this._actionsByClip[s];let d=null;if(r===void 0&&(a!==null?r=a.blendMode:r=Ua),l!==void 0){const m=l.actionByRoot[i];if(m!==void 0&&m.blendMode===r)return m;d=l.knownActions[0],a===null&&(a=d._clip)}if(a===null)return null;const c=new Av(this,a,t,r);return this._bindAction(c,d),this._addInactiveAction(c,s,i),c}existingAction(e,t){const r=t||this._root,n=r.uuid,i=typeof e=="string"?Ws.findByName(r,e):e,a=i?i.uuid:e,s=this._actionsByClip[a];return s!==void 0&&s.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let r=t-1;r>=0;--r)e[r].stop();return this}update(e){e*=this.timeScale;const t=this._actions,r=this._nActiveActions,n=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let d=0;d!==r;++d)t[d]._update(n,e,i,a);const s=this._bindings,l=this._nActiveBindings;for(let d=0;d!==l;++d)s[d].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,r=e.uuid,n=this._actionsByClip,i=n[r];if(i!==void 0){const a=i.knownActions;for(let s=0,l=a.length;s!==l;++s){const d=a[s];this._deactivateAction(d);const c=d._cacheIndex,m=t[t.length-1];d._cacheIndex=null,d._byClipCacheIndex=null,m._cacheIndex=c,t[c]=m,t.pop(),this._removeInactiveBindingsForAction(d)}delete n[r]}}uncacheRoot(e){const t=e.uuid,r=this._actionsByClip;for(const a in r){const s=r[a].actionByRoot,l=s[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,i=n[t];if(i!==void 0)for(const a in i){const s=i[a];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(e,t){const r=this.existingAction(e,t);r!==null&&(this._deactivateAction(r),this._removeInactiveAction(r))}}Tv.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class yv extends rn{constructor(e,t,r=1){super(e,t);this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}yv.prototype.isInstancedInterleavedBuffer=!0;const Vr=new P,ua=new ue,js=new ue;class bv extends ra{constructor(e){const t=km(e),r=new He,n=[],i=[],a=new ie(0,0,1),s=new ie(0,1,0);for(let d=0;d<t.length;d++){const c=t[d];c.parent&&c.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(a.r,a.g,a.b),i.push(s.r,s.g,s.b))}r.setAttribute("position",new Je(n,3)),r.setAttribute("color",new Je(i,3));const l=new dn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(r,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,r=this.geometry,n=r.getAttribute("position");js.copy(this.root.matrixWorld).invert();for(let i=0,a=0;i<t.length;i++){const s=t[i];s.parent&&s.parent.isBone&&(ua.multiplyMatrices(js,s.matrixWorld),Vr.setFromMatrixPosition(ua),n.setXYZ(a,Vr.x,Vr.y,Vr.z),ua.multiplyMatrices(js,s.parent.matrixWorld),Vr.setFromMatrixPosition(ua),n.setXYZ(a+1,Vr.x,Vr.y,Vr.z),a+=2)}r.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function km(o){const e=[];o&&o.isBone&&e.push(o);for(let t=0;t<o.children.length;t++)e.push.apply(e,km(o.children[t]));return e}class Pv extends ra{constructor(e=10,t=10,r=4473924,n=8947848){r=new ie(r),n=new ie(n);const i=t/2,a=e/t,s=e/2,l=[],d=[];for(let u=0,g=0,x=-s;u<=t;u++,x+=a){l.push(-s,0,x,s,0,x),l.push(x,0,-s,x,0,s);const f=u===i?r:n;f.toArray(d,g),g+=3,f.toArray(d,g),g+=3,f.toArray(d,g),g+=3,f.toArray(d,g),g+=3}const c=new He;c.setAttribute("position",new Je(l,3)),c.setAttribute("color",new Je(d,3));const m=new dn({vertexColors:!0,toneMapped:!1});super(c,m);this.type="GridHelper"}}const wv=new Float32Array(1);new Int32Array(wv.buffer);It.create=function(o,e){return console.log("THREE.Curve.create() has been deprecated"),o.prototype=Object.create(It.prototype),o.prototype.constructor=o,o.prototype.getPoint=e,o};Vs.prototype.fromPoints=function(o){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(o)};Pv.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};bv.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};gr.prototype.extractUrlBase=function(o){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Ur.extractUrlBase(o)};gr.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Nt.prototype.center=function(o){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(o)};Nt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Nt.prototype.isIntersectionBox=function(o){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};Nt.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};Nt.prototype.size=function(o){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(o)};mo.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Wi.prototype.setFromMatrix=function(o){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(o)};dt.prototype.flattenToArrayOffset=function(o,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,e)};dt.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};dt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};dt.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};dt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};dt.prototype.getInverse=function(o){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};ue.prototype.extractPosition=function(o){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(o)};ue.prototype.flattenToArrayOffset=function(o,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,e)};ue.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new P().setFromMatrixColumn(this,3)};ue.prototype.setRotationFromQuaternion=function(o){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(o)};ue.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ue.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};ue.prototype.multiplyVector4=function(o){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};ue.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ue.prototype.rotateAxis=function(o){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),o.transformDirection(this)};ue.prototype.crossVector=function(o){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};ue.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ue.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ue.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ue.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ue.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ue.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};ue.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ue.prototype.makeFrustum=function(o,e,t,r,n,i){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(o,e,r,t,n,i)};ue.prototype.getInverse=function(o){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};mr.prototype.isIntersectionLine=function(o){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(o)};ct.prototype.multiplyVector3=function(o){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),o.applyQuaternion(this)};ct.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Uo.prototype.isIntersectionBox=function(o){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};Uo.prototype.isIntersectionPlane=function(o){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(o)};Uo.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};qe.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};qe.prototype.barycoordFromPoint=function(o,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(o,e)};qe.prototype.midpoint=function(o){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(o)};qe.prototypenormal=function(o){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(o)};qe.prototype.plane=function(o){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(o)};qe.barycoordFromPoint=function(o,e,t,r,n){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),qe.getBarycoord(o,e,t,r,n)};qe.normal=function(o,e,t,r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),qe.getNormal(o,e,t,r)};Kn.prototype.extractAllPoints=function(o){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(o)};Kn.prototype.extrude=function(o){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new mn(this,o)};Kn.prototype.makeGeometry=function(o){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ks(this,o)};Z.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};Z.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};Z.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};P.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};P.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};P.prototype.getPositionFromMatrix=function(o){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(o)};P.prototype.getScaleFromMatrix=function(o){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(o)};P.prototype.getColumnFromMatrix=function(o,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,o)};P.prototype.applyProjection=function(o){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(o)};P.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};P.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};P.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ue.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};Ue.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Re.prototype.getChildByName=function(o){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(o)};Re.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Re.prototype.translate=function(o,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,o)};Re.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Re.prototype.applyMatrix=function(o){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(Re.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(o){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=o}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});_t.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(_t.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),e0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});ws.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};At.prototype.setLens=function(o,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(o)};Object.defineProperties(jt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(o){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=o}},shadowCameraLeft:{set:function(o){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=o}},shadowCameraRight:{set:function(o){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=o}},shadowCameraTop:{set:function(o){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=o}},shadowCameraBottom:{set:function(o){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=o}},shadowCameraNear:{set:function(o){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=o}},shadowCameraFar:{set:function(o){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=o}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(o){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=o}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(o){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=o}},shadowMapHeight:{set:function(o){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=o}}});Object.defineProperties(Ye.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===yi},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(yi)}}});Ye.prototype.setDynamic=function(o){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?yi:$n),this};Ye.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ye.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};He.prototype.addIndex=function(o){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(o)};He.prototype.addAttribute=function(o,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(o,new Ye(arguments[1],arguments[2]))):o==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(o,e)};He.prototype.addDrawCall=function(o,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(o,e)};He.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};He.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};He.prototype.removeAttribute=function(o){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(o)};He.prototype.applyMatrix=function(o){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(He.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});rn.prototype.setDynamic=function(o){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?yi:$n),this};rn.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};mn.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};mn.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};mn.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};zc.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ot.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ie}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(o){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=o===fd}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(o){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=o}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(uo.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(o){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=o}}});Fe.prototype.clearTarget=function(o,e,t,r){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(o),this.clear(e,t,r)};Fe.prototype.animate=function(o){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(o)};Fe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Fe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Fe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Fe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Fe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Fe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Fe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Fe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Fe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Fe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Fe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Fe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Fe.prototype.enableScissorTest=function(o){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(o)};Fe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Fe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Fe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Fe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Fe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Fe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Fe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Fe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Fe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Fe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Fe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=o}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=o}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(o){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=o===!0?Kt:xt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(kc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Zt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=o}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=o}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=o}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=o}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(o){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=o}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(o){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=o}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(o){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=o}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(o){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=o}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(o){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=o}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(o){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=o}}});mv.prototype.load=function(o){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new lv().load(o,function(r){e.setBuffer(r)}),this};xs.prototype.updateCubeMap=function(o,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(o,e)};xs.prototype.clear=function(o,e,t,r){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(o,e,t,r)};Ro.crossOrigin=void 0;Ro.loadTexture=function(o,e,t,r){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const n=new $m;n.setCrossOrigin(this.crossOrigin);const i=n.load(o,t,void 0,r);return e&&(i.mapping=e),i};Ro.loadTextureCube=function(o,e,t,r){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const n=new rv;n.setCrossOrigin(this.crossOrigin);const i=n.load(o,t,void 0,r);return e&&(i.mapping=e),i};Ro.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Ro.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hd}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hd);const Lv={type:"change"};class WR extends br{constructor(e,t){super();t===void 0&&(console.warn('THREE.FlyControls: The second parameter "domElement" is now mandatory.'),t=document),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const r=this,n=1e-6,i=new ct,a=new P;this.tmpQuaternion=new ct,this.mouseStatus=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new P(0,0,0),this.rotationVector=new P(0,0,0),this.keydown=function(u){if(!u.altKey){switch(u.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(u){switch(u.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.mousedown=function(u){if(this.dragToLook)this.mouseStatus++;else{switch(u.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.mousemove=function(u){if(!this.dragToLook||this.mouseStatus>0){const g=this.getContainerDimensions(),x=g.size[0]/2,f=g.size[1]/2;this.moveState.yawLeft=-(u.pageX-g.offset[0]-x)/x,this.moveState.pitchDown=(u.pageY-g.offset[1]-f)/f,this.updateRotationVector()}},this.mouseup=function(u){if(this.dragToLook)this.mouseStatus--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(u.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(u){const g=u*r.movementSpeed,x=u*r.rollSpeed;r.object.translateX(r.moveVector.x*g),r.object.translateY(r.moveVector.y*g),r.object.translateZ(r.moveVector.z*g),r.tmpQuaternion.set(r.rotationVector.x*x,r.rotationVector.y*x,r.rotationVector.z*x,1).normalize(),r.object.quaternion.multiply(r.tmpQuaternion),(a.distanceToSquared(r.object.position)>n||8*(1-i.dot(r.object.quaternion))>n)&&(r.dispatchEvent(Lv),i.copy(r.object.quaternion),a.copy(r.object.position))},this.updateMovementVector=function(){const u=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-u+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",Wm),this.domElement.removeEventListener("mousedown",l),this.domElement.removeEventListener("mousemove",s),this.domElement.removeEventListener("mouseup",d),window.removeEventListener("keydown",c),window.removeEventListener("keyup",m)};const s=this.mousemove.bind(this),l=this.mousedown.bind(this),d=this.mouseup.bind(this),c=this.keydown.bind(this),m=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",Wm),this.domElement.addEventListener("mousemove",s),this.domElement.addEventListener("mousedown",l),this.domElement.addEventListener("mouseup",d),window.addEventListener("keydown",c),window.addEventListener("keyup",m),this.updateMovementVector(),this.updateRotationVector()}}function Wm(o){o.preventDefault()}class zR extends gr{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Uv(t)})}load(e,t,r,n){const i=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Ur.extractUrlBase(e),this.manager.itemStart(e);const s=function(d){n?n(d):console.error(d),i.manager.itemError(e),i.manager.itemEnd(e)},l=new zs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(d){try{i.parse(d,a,function(c){t(c),i.manager.itemEnd(e)},s)}catch(c){s(c)}},r,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,n){let i;const a={},s={};if(typeof e=="string")i=e;else if(Ur.decodeText(new Uint8Array(e,0,4))===zm){try{a[Ne.KHR_BINARY_GLTF]=new Vv(e)}catch(m){n&&n(m);return}i=a[Ne.KHR_BINARY_GLTF].content}else i=Ur.decodeText(new Uint8Array(e));const l=JSON.parse(i);if(l.asset===void 0||l.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new qv(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const m=this.pluginCallbacks[c](d);s[m.name]=m,a[m.name]=!0}if(l.extensionsUsed)for(let c=0;c<l.extensionsUsed.length;++c){const m=l.extensionsUsed[c],u=l.extensionsRequired||[];switch(m){case Ne.KHR_MATERIALS_UNLIT:a[m]=new Cv;break;case Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[m]=new kv;break;case Ne.KHR_DRACO_MESH_COMPRESSION:a[m]=new Hv(l,this.dracoLoader);break;case Ne.KHR_TEXTURE_TRANSFORM:a[m]=new Xv;break;case Ne.KHR_MESH_QUANTIZATION:a[m]=new Wv;break;default:u.indexOf(m)>=0&&s[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}d.setExtensions(a),d.setPlugins(s),d.parse(r,n)}}function Ev(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Ne={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class $v{constructor(e){this.parser=e,this.name=Ne.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,n=t.length;r<n;r++){const i=t[r];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let n=t.cache.get(r);if(n)return n;const i=t.json,l=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let d;const c=new ie(16777215);l.color!==void 0&&c.fromArray(l.color);const m=l.range!==void 0?l.range:0;switch(l.type){case"directional":d=new Um(c),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new Dm(c),d.distance=m;break;case"spot":d=new Im(c),d.distance=m,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,d.angle=l.spot.outerConeAngle,d.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return d.position.set(0,0,0),d.decay=2,l.intensity!==void 0&&(d.intensity=l.intensity),d.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(d),t.cache.add(r,n),n}createNodeAttachment(e){const t=this,r=this.parser,i=r.json.nodes[e],s=(i.extensions&&i.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(l){return r._getNodeRef(t.cache,s,l)})}}class Cv{constructor(){this.name=Ne.KHR_MATERIALS_UNLIT}getMaterialType(){return $r}extendParams(e,t,r){const n=[];e.color=new ie(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const a=i.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}i.baseColorTexture!==void 0&&n.push(r.assignTexture(e,"map",i.baseColorTexture))}return Promise.all(n)}}class Gv{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:xo}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(r.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(r.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(r.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const s=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Z(s,s)}return Promise.all(i)}}class Nv{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_SHEEN}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:xo}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(r.assignTexture(t,"sheenColorMap",a.sheenColorTexture)),a.sheenRoughnessTexture!==void 0&&i.push(r.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(i)}}class Bv{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:xo}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(r.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(i)}}class Iv{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_VOLUME}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:xo}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&i.push(r.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||0;const s=a.attenuationColor||[1,1,1];return t.attenuationColor=new ie(s[0],s[1],s[2]),Promise.all(i)}}class Rv{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_IOR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:xo}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class Ov{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_SPECULAR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:xo}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&i.push(r.assignTexture(t,"specularIntensityMap",a.specularTexture));const s=a.specularColorFactor||[1,1,1];return t.specularColor=new ie(s[0],s[1],s[2]),a.specularColorTexture!==void 0&&i.push(r.assignTexture(t,"specularColorMap",a.specularColorTexture).then(function(l){l.encoding=Kt})),Promise.all(i)}}class Dv{constructor(e){this.parser=e,this.name=Ne.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,n=r.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const i=n.extensions[this.name],a=r.images[i.source],s=t.options.ktx2Loader;if(!s){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a,s)}}class Fv{constructor(e){this.parser=e,this.name=Ne.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,n=r.json,i=n.textures[e];if(!i.extensions||!i.extensions[t])return null;const a=i.extensions[t],s=n.images[a.source];let l=r.textureLoader;if(s.uri){const d=r.options.manager.getHandler(s.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return r.loadTextureImage(e,s,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Uv{constructor(e){this.name=Ne.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const n=r.extensions[this.name],i=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([i,a.ready]).then(function(s){const l=n.byteOffset||0,d=n.byteLength||0,c=n.count,m=n.byteStride,u=new ArrayBuffer(c*m),g=new Uint8Array(s[0],l,d);return a.decodeGltfBuffer(new Uint8Array(u),c,m,g,n.mode,n.filter),u})}else return null}}const zm="glTF",ti=12,Km={JSON:1313821514,BIN:5130562};class Vv{constructor(e){this.name=Ne.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ti);if(this.header={magic:Ur.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ti,n=new DataView(e,ti);let i=0;for(;i<r;){const a=n.getUint32(i,!0);i+=4;const s=n.getUint32(i,!0);if(i+=4,s===Km.JSON){const l=new Uint8Array(e,ti+i,a);this.content=Ur.decodeText(l)}else if(s===Km.BIN){const l=ti+i;this.body=e.slice(l,l+a)}i+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Hv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ne.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,n=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,s={},l={},d={};for(const c in a){const m=el[c]||c.toLowerCase();s[m]=a[c]}for(const c in e.attributes){const m=el[c]||c.toLowerCase();if(a[c]!==void 0){const u=r.accessors[e.attributes[c]],g=ri[u.componentType];d[m]=g,l[m]=u.normalized===!0}}return t.getDependency("bufferView",i).then(function(c){return new Promise(function(m){n.decodeDracoFile(c,function(u){for(const g in u.attributes){const x=u.attributes[g],f=l[g];f!==void 0&&(x.normalized=f)}m(u)},s,d)})})}}class Xv{constructor(){this.name=Ne.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qs extends Jn{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),r=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),n=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),i=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`

`+o.getShaderInfoLog(t));return t}function fR(o){return $a(o,xi).map(function(e){return{index:_o(e,1,0),Y:rr(e,2),label:We(e,3)!=null?_o(e,3,""):void 0,displayName:We(e,4)!=null?_o(e,4,""):void 0}})}function mg(o){return{x:rr(o,1),y:rr(o,2),z:rr(o,3),visibility:We(o,4)!=null?rr(o,4):void 0}}function td(o,e){this.h=o,this.g=e,this.l=0}function ug(o,e,t){return SR(o,e),typeof o.g.canvas.transferToImageBitmap=="function"?Promise.resolve(o.g.canvas.transferToImageBitmap()):t?Promise.resolve(o.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(o.g.canvas):(o.i===void 0&&(o.i=document.createElement("canvas")),new Promise(function(r){o.i.height=o.g.canvas.height,o.i.width=o.g.canvas.width,o.i.getContext("2d",{}).drawImage(o.g.canvas,0,0,o.g.canvas.width,o.g.canvas.height),r(o.i)}))}function SR(o,e){var t=o.g;if(o.m===void 0){var r=cg(t,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),n=cg(t,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),i=t.createProgram();if(t.attachShader(i,r),t.attachShader(i,n),t.linkProgram(i),!t.getProgramParameter(i,t.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+t.getProgramInfoLog(i));r=o.m=i,t.useProgram(r),n=t.getUniformLocation(r,"sampler0"),o.j={I:t.getAttribLocation(r,"aVertex"),H:t.getAttribLocation(r,"aTex"),da:n},o.s=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,o.s),t.enableVertexAttribArray(o.j.I),t.vertexAttribPointer(o.j.I,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),o.o=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,o.o),t.enableVertexAttribArray(o.j.H),t.vertexAttribPointer(o.j.H,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.uniform1i(n,0)}r=o.j,t.useProgram(o.m),t.canvas.width=e.width,t.canvas.height=e.height,t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0),o.h.bindTexture2d(e.glName),t.enableVertexAttribArray(r.I),t.bindBuffer(t.ARRAY_BUFFER,o.s),t.vertexAttribPointer(r.I,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(r.H),t.bindBuffer(t.ARRAY_BUFFER,o.o),t.vertexAttribPointer(r.H,2,t.FLOAT,!1,0,0),t.bindFramebuffer(t.DRAW_FRAMEBUFFER?t.DRAW_FRAMEBUFFER:t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.colorMask(!0,!0,!0,!0),t.drawArrays(t.TRIANGLE_FAN,0,4),t.disableVertexAttribArray(r.I),t.disableVertexAttribArray(r.H),t.bindBuffer(t.ARRAY_BUFFER,null),o.h.bindTexture2d(0)}function vR(o){this.g=o}var MR=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function _R(o,e){return e+o}function gg(o,e){window[o]=e}function AR(o){var e=document.createElement("script");return e.setAttribute("src",o),e.setAttribute("crossorigin","anonymous"),new Promise(function(t){e.addEventListener("load",function(){t()},!1),e.addEventListener("error",function(){t()},!1),document.body.appendChild(e)})}function TR(){return bt(this,function o(){return yt(o,function(e){switch(e.g){case 1:return e.m=2,it(e,WebAssembly.instantiate(MR),4);case 4:e.g=3,e.m=0;break;case 2:return e.m=0,e.j=null,e.return(!1);case 3:return e.return(!0)}})})}function rd(o){if(this.g=o,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=o&&o.locateFile||_R,typeof window=="object")var e=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location!="undefined")e=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=e,o.options){e=Ct(Object.keys(o.options));for(var t=e.next();!t.done;t=e.next()){t=t.value;var r=o.options[t].default;r!==void 0&&(this.j[t]=typeof r=="function"?r():r)}}}vt=rd.prototype;vt.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function yR(o,e){return o.g.files===void 0?[]:typeof o.g.files=="function"?o.g.files(e):o.g.files}function bR(o){return bt(o,function e(){var t=this,r,n,i,a,s,l,d,c,m,u,g;return yt(e,function(x){switch(x.g){case 1:return r=t,t.R?(n=yR(t,t.j),it(x,TR(),2)):x.return();case 2:if(i=x.h,typeof window=="object")return gg("createMediapipeSolutionsWasm",{locateFile:t.locateFile}),gg("createMediapipeSolutionsPackedAssets",{locateFile:t.locateFile}),l=n.filter(function(f){return f.data!==void 0}),d=n.filter(function(f){return f.data===void 0}),c=Promise.all(l.map(function(f){var S=od(r,f.url);if(f.path!==void 0){var h=f.path;S=S.then(function(p){return r.overrideFile(h,p),Promise.resolve(p)})}return S})),m=Promise.all(d.map(function(f){return f.simd===void 0||f.simd&&i||!f.simd&&!i?AR(r.locateFile(f.url,r.S)):Promise.resolve()})).then(function(){return bt(r,function f(){var S,h,p=this;return yt(f,function(_){if(_.g==1)return S=window.createMediapipeSolutionsWasm,h=window.createMediapipeSolutionsPackedAssets,it(_,S(h),2);p.h=_.h,_.g=0})})}),u=function(){return bt(r,function f(){var S=this;return yt(f,function(h){return S.g.graph&&S.g.graph.url?h=it(h,od(S,S.g.graph.url),0):(h.g=0,h=void 0),h})})}(),it(x,Promise.all([m,c,u]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return a=n.filter(function(f){return f.simd===void 0||f.simd&&i||!f.simd&&!i}).map(function(f){return r.locateFile(f.url,r.S)}),importScripts.apply(null,Zr(a)),it(x,createMediapipeSolutionsWasm(Module),6);case 6:t.h=x.h,t.l=new OffscreenCanvas(1,1),t.h.canvas=t.l,s=t.h.GL.createContext(t.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext!="undefined"?2:1}),t.h.GL.makeContextCurrent(s),x.g=4;break;case 7:if(t.l=document.createElement("canvas"),g=t.l.getContext("webgl2",{}),!g&&(g=t.l.getContext("webgl",{}),!g))return alert("Failed to create WebGL canvas context when passing video frame."),x.return();t.D=g,t.h.canvas=t.l,t.h.createContext(t.l,!0,!0,{});case 4:t.i=new t.h.SolutionWasm,t.R=!1,x.g=0}})})}function PR(o){return bt(o,function e(){var t=this,r,n,i,a,s,l,d,c;return yt(e,function(m){if(m.g==1){if(t.g.graph&&t.g.graph.url&&t.P===t.g.graph.url)return m.return();if(t.o=!0,!t.g.graph||!t.g.graph.url){m.g=2;return}return t.P=t.g.graph.url,it(m,od(t,t.g.graph.url),3)}for(m.g!=2&&(r=m.h,t.i.loadGraph(r)),n=Ct(Object.keys(t.B)),i=n.next();!i.done;i=n.next())a=i.value,t.i.overrideFile(a,t.B[a]);if(t.B={},t.g.listeners)for(s=Ct(t.g.listeners),l=s.next();!l.done;l=s.next())d=l.value,$R(t,d);c=t.j,t.j={},t.setOptions(c),m.g=0})})}vt.reset=function(){return bt(this,function o(){var e=this;return yt(o,function(t){e.i&&(e.i.reset(),e.m={},e.s={}),t.g=0})})};vt.setOptions=function(o,e){var t=this;if(e=e||this.g.options){for(var r=[],n=[],i={},a=Ct(Object.keys(o)),s=a.next();!s.done;i={K:i.K,L:i.L},s=a.next()){var l=s.value;l in this.j&&this.j[l]===o[l]||(this.j[l]=o[l],s=e[l],s!==void 0&&(s.onChange&&(i.K=s.onChange,i.L=o[l],r.push(function(d){return function(){return bt(t,function c(){var m,u=this;return yt(c,function(g){if(g.g==1)return it(g,d.K(d.L),2);m=g.h,m===!0&&(u.o=!0),g.g=0})})}}(i))),s.graphOptionXref&&(l={valueNumber:s.type===1?o[l]:0,valueBoolean:s.type===0?o[l]:!1,valueString:s.type===2?o[l]:""},s=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),s.graphOptionXref),l),n.push(s))))}(r.length!==0||n.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(n),this.u=(this.u===void 0?[]:this.u).concat(r))}};function wR(o){return bt(o,function e(){var t=this,r,n,i,a,s,l,d;return yt(e,function(c){switch(c.g){case 1:if(!t.o)return c.return();if(!t.u){c.g=2;break}r=Ct(t.u),n=r.next();case 3:if(n.done){c.g=5;break}return i=n.value,it(c,i(),4);case 4:n=r.next(),c.g=3;break;case 5:t.u=void 0;case 2:if(t.A){for(a=new t.h.GraphOptionChangeRequestList,s=Ct(t.A),l=s.next();!l.done;l=s.next())d=l.value,a.push_back(d);t.i.changeOptions(a),a.delete(),t.A=void 0}t.o=!1,c.g=0}})})}vt.initialize=function(){return bt(this,function o(){var e=this;return yt(o,function(t){return t.g==1?it(t,bR(e),2):t.g!=3?it(t,PR(e),3):it(t,wR(e),0)})})};function od(o,e){return bt(o,function t(){var r=this,n,i;return yt(t,function(a){return e in r.F?a.return(r.F[e]):(n=r.locateFile(e,""),i=fetch(n).then(function(s){return s.arrayBuffer()}),r.F[e]=i,a.return(i))})})}vt.overrideFile=function(o,e){this.i?this.i.overrideFile(o,e):this.B[o]=e};vt.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()};vt.send=function(o,e){return bt(this,function t(){var r=this,n,i,a,s,l,d,c,m,u;return yt(t,function(g){switch(g.g){case 1:return r.g.inputs?(n=1e3*(e==null?performance.now():e),it(g,r.C,2)):g.return();case 2:return it(g,r.initialize(),3);case 3:for(i=new r.h.PacketDataList,a=Ct(Object.keys(o)),s=a.next();!s.done;s=a.next())if(l=s.value,d=r.g.inputs[l]){e:{var x=r,f=o[l];switch(d.type){case"video":var S=x.m[d.stream];if(S||(S=new td(x.h,x.D),x.m[d.stream]=S),x=S,x.l===0&&(x.l=x.h.createTexture()),typeof HTMLVideoElement!="undefined"&&f instanceof HTMLVideoElement){var h=f.videoWidth;S=f.videoHeight}else typeof HTMLImageElement!="undefined"&&f instanceof HTMLImageElement?(h=f.naturalWidth,S=f.naturalHeight):(h=f.width,S=f.height);S={glName:x.l,width:h,height:S},h=x.g,h.canvas.width=S.width,h.canvas.height=S.height,h.activeTexture(h.TEXTURE0),x.h.bindTexture2d(x.l),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,f),x.h.bindTexture2d(0),x=S;break e;case"detections":for(S=x.m[d.stream],S||(S=new vR(x.h),x.m[d.stream]=S),x=S,x.data||(x.data=new x.g.DetectionListData),x.data.reset(f.length),S=0;S<f.length;++S){h=f[S];var p=x.data,_=p.setBoundingBox,M=S,b=h.T,w=new ed;$e(w,1,b.Z),$e(w,2,b.$),$e(w,3,b.height),$e(w,4,b.width),$e(w,5,b.rotation),$e(w,6,b.X);var v=b=new Yl;zt(v,1,We(w,1)),zt(v,2,We(w,2)),zt(v,3,We(w,3)),zt(v,4,We(w,4)),zt(v,5,We(w,5));var $=We(w,6);if($!=null&&$!=null){Jr(v.g,48);var R=v.g,C=$;$=0>C,C=Math.abs(C);var L=C>>>0;for(C=Math.floor((C-L)/4294967296),C>>>=0,$&&(C=~C>>>0,L=(~L>>>0)+1,4294967295<L&&(L=0,C++,4294967295<C&&(C=0))),vr=L,Yr=C,$=vr,L=Yr;0<L||127<$;)R.push($&127|128),$=($>>>7|L<<25)>>>0,L>>>=7;R.push($)}if(jl(w,v),b=Jl(b),_.call(p,M,b),h.O)for(p=0;p<h.O.length;++p)w=h.O[p],v=!!w.visibility,_=x.data,M=_.addNormalizedLandmark,b=S,w=Object.assign(Object.assign({},w),{visibility:v?w.visibility:0}),v=new Mn,$e(v,1,w.x),$e(v,2,w.y),$e(v,3,w.z),w.visibility&&$e(v,4,w.visibility),R=w=new Yl,zt(R,1,We(v,1)),zt(R,2,We(v,2)),zt(R,3,We(v,3)),zt(R,4,We(v,4)),zt(R,5,We(v,5)),jl(v,R),w=Jl(w),M.call(_,b,w);if(h.M)for(p=0;p<h.M.length;++p){if(_=x.data,M=_.addClassification,b=S,w=h.M[p],v=new xi,$e(v,2,w.Y),w.index&&$e(v,1,w.index),w.label&&$e(v,3,w.label),w.displayName&&$e(v,4,w.displayName),R=w=new Yl,L=We(v,1),L!=null&&L!=null)if(Jr(R.g,8),$=R.g,0<=L)Jr($,L);else{for(C=0;9>C;C++)$.push(L&127|128),L>>=7;$.push(1)}zt(R,2,We(v,2)),$=We(v,3),$!=null&&($=Xu($),Jr(R.g,26),Jr(R.g,$.length),vn(R,R.g.end()),vn(R,$)),$=We(v,4),$!=null&&($=Xu($),Jr(R.g,34),Jr(R.g,$.length),vn(R,R.g.end()),vn(R,$)),jl(v,R),w=Jl(w),M.call(_,b,w)}}x=x.data;break e;default:x={}}}switch(c=x,m=d.stream,d.type){case"video":i.pushTexture2d(Object.assign(Object.assign({},c),{stream:m,timestamp:n}));break;case"detections":u=c,u.stream=m,u.timestamp=n,i.pushDetectionList(u);break;default:throw Error("Unknown input config type: '"+d.type+"'")}}return r.i.send(i),it(g,r.C,4);case 4:i.delete(),g.g=0}})})};function LR(o,e,t){return bt(o,function r(){var n,i,a,s,l,d,c=this,m,u,g,x,f,S,h,p;return yt(r,function(_){switch(_.g){case 1:if(!t)return _.return(e);for(n={},i=0,a=Ct(Object.keys(t)),s=a.next();!s.done;s=a.next())l=s.value,d=t[l],typeof d!="string"&&d.type==="texture"&&e[d.stream]!==void 0&&++i;1<i&&(c.G=!1),m=Ct(Object.keys(t)),s=m.next();case 2:if(s.done){_.g=4;break}if(u=s.value,g=t[u],typeof g=="string")return h=n,p=u,it(_,ER(c,u,e[g]),14);if(x=e[g.stream],g.type==="detection_list"){if(x){for(var M=x.getRectList(),b=x.getLandmarksList(),w=x.getClassificationsList(),v=[],$=0;$<M.size();++$){var R=M.get($);e:{var C=new ed;for(R=new gi(R);Mr(R);)switch(R.i){case 13:var L=Rt(R);$e(C,1,L);break;case 21:L=Rt(R),$e(C,2,L);break;case 29:L=Rt(R),$e(C,3,L);break;case 37:L=Rt(R),$e(C,4,L);break;case 45:L=Rt(R),$e(C,5,L);break;case 48:L=ba(R.g),$e(C,6,L);break;default:if(!jr(C,R))break e}}C={Z:rr(C,1),$:rr(C,2),height:rr(C,3),width:rr(C,4),rotation:rr(C,5,0),X:_o(C,6,0)},R=$a(dg(b.get($)),Mn).map(mg);var J=w.get($);e:for(L=new ql,J=new gi(J);Mr(J);)switch(J.i){case 10:L.addClassification(wa(J,new xi,cR));break;default:if(!jr(L,J))break e}C={T:C,O:R,M:fR(L)},v.push(C)}M=v}else M=[];n[u]=M,_.g=7;break}if(g.type==="proto_list"){if(x){for(M=Array(x.size()),b=0;b<x.size();b++)M[b]=x.get(b);x.delete()}else M=[];n[u]=M,_.g=7;break}if(x===void 0){_.g=3;break}if(g.type==="float_list"){n[u]=x,_.g=7;break}if(g.type==="proto"){n[u]=x,_.g=7;break}if(g.type!=="texture")throw Error("Unknown output config type: '"+g.type+"'");return f=c.s[u],f||(f=new td(c.h,c.D),c.s[u]=f),it(_,ug(f,x,c.G),13);case 13:S=_.h,n[u]=S;case 7:g.transform&&n[u]&&(n[u]=g.transform(n[u])),_.g=3;break;case 14:h[p]=_.h;case 3:s=m.next(),_.g=2;break;case 4:return _.return(n)}})})}function ER(o,e,t){return bt(o,function r(){var n=this,i;return yt(r,function(a){return typeof t=="number"||t instanceof Uint8Array||t instanceof n.h.Uint8BlobList?a.return(t):t instanceof n.h.Texture2dDataOut?(i=n.s[e],i||(i=new td(n.h,n.D),n.s[e]=i),a.return(ug(i,t,n.G))):a.return(void 0)})})}function $R(o,e){for(var t=e.name||"$",r=[].concat(Zr(e.wants)),n=new o.h.StringList,i=Ct(e.wants),a=i.next();!a.done;a=i.next())n.push_back(a.value);i=o.h.PacketListener.implement({onResults:function(s){for(var l={},d=0;d<e.wants.length;++d)l[r[d]]=s.get(d);var c=o.listeners[t];c&&(o.C=LR(o,l,e.outs).then(function(m){m=c(m);for(var u=0;u<e.wants.length;++u){var g=l[r[u]];typeof g=="object"&&g.hasOwnProperty&&g.hasOwnProperty("delete")&&g.delete()}m&&(o.C=m)}))}}),o.i.attachMultiListener(n,i),n.delete()}vt.onResults=function(o,e){this.listeners[e||"$"]=o};Mt("Solution",rd);Mt("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function CR(o){o=pR(o);var e=o.getMesh();if(!e)return o;var t=new Float32Array(e.getVertexBufferList());e.getVertexBufferList=function(){return t};var r=new Uint32Array(e.getIndexBufferList());return e.getIndexBufferList=function(){return r},o}var GR={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(o){return o.map(CR)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(o){return o.map(function(e){return $a(dg(e),Mn).map(mg)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},hg=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],xg=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],pg=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],fg=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Sg=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],vg=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],NR=[].concat(Zr(hg),Zr(xg),Zr(pg),Zr(fg),Zr(Sg),Zr(vg));function Mg(o){o=o||{},o=Object.assign(Object.assign({},GR),o),this.g=new rd(o)}vt=Mg.prototype;vt.close=function(){return this.g.close(),Promise.resolve()};vt.onResults=function(o){this.g.onResults(o)};vt.initialize=function(){return bt(this,function o(){var e=this;return yt(o,function(t){return it(t,e.g.initialize(),0)})})};vt.reset=function(){this.g.reset()};vt.send=function(o){return bt(this,function e(){var t=this;return yt(e,function(r){return it(r,t.g.send(o),0)})})};vt.setOptions=function(o){this.g.setOptions(o)};Mt("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}});Mt("FaceMesh",Mg);Mt("FACEMESH_LIPS",hg);Mt("FACEMESH_LEFT_EYE",xg);Mt("FACEMESH_LEFT_EYEBROW",pg);Mt("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]);Mt("FACEMESH_RIGHT_EYE",fg);Mt("FACEMESH_RIGHT_EYEBROW",Sg);Mt("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]);Mt("FACEMESH_FACE_OVAL",vg);Mt("FACEMESH_CONTOURS",NR);Mt("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]);Mt("matrixDataToMatrix",function(o){for(var e=o.getCols(),t=o.getRows(),r=o.getPackedDataList(),n=[],i=0;i<t;i++)n.push(Array(e));for(i=0;i<t;i++)for(var a=0;a<e;a++){var s=o.getLayout()===1?i*e+a:a*t+i;n[i][a]=r[s]}return n});Mt("VERSION","0.4.1633559619");var eO=window.FACEMESH_TESSELATION,tO=window.FACEMESH_FACE_OVAL,rO=window.FACEMESH_LIPS,oO=window.FACEMESH_RIGHT_IRIS,nO=window.FACEMESH_LEFT_IRIS,iO=window.FaceMesh,BR=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,e,t){return o==Array.prototype||o==Object.prototype||(o[e]=t.value),o};function IR(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof global=="object"&&global];for(var e=0;e<o.length;++e){var t=o[e];if(t&&t.Math==Math)return t}throw Error("Cannot find global object")}var RR=IR(globalThis);function OR(o,e){if(e)e:{var t=RR;o=o.split(".");for(var r=0;r<o.length-1;r++){var n=o[r];if(!(n in t))break e;t=t[n]}o=o[o.length-1],r=t[o],e=e(r),e!=r&&e!=null&&BR(t,o,{configurable:!0,writable:!0,value:e})}}var DR=typeof Object.assign=="function"?Object.assign:function(o,e){for(var t=1;t<arguments.length;t++){var r=arguments[t];if(r)for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(o[n]=r[n])}return o};OR("Object.assign",function(o){return o||DR});var FR=globalThis||self,UR={facingMode:"user",width:640,height:480};function nd(o,e){this.video=o,this.h=0,this.g=Object.assign(Object.assign({},UR),e)}function id(o){window.requestAnimationFrame(function(){HR(o)})}function VR(o,e){o.video.srcObject=e,o.video.onloadedmetadata=function(){o.video.play(),id(o)}}function HR(o){var e=null;o.video.paused||o.video.currentTime===o.h||(o.h=o.video.currentTime,e=o.g.onFrame()),e?e.then(function(){id(o)}):id(o)}nd.prototype.start=function(){var o=this;navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists.");var e=this.g;return navigator.mediaDevices.getUserMedia({video:{facingMode:e.facingMode,width:e.width,height:e.height}}).then(function(t){VR(o,t)}).catch(function(t){throw console.error("Failed to acquire camera feed: "+t),alert("Failed to acquire camera feed: "+t),t})};var pi=["Camera"],or=FR;pi[0]in or||typeof or.execScript=="undefined"||or.execScript("var "+pi[0]);for(var bo;pi.length&&(bo=pi.shift());)pi.length||nd===void 0?or[bo]&&or[bo]!==Object.prototype[bo]?or=or[bo]:or=or[bo]={}:or[bo]=nd;var aO=window.Camera;export{nv as A,kR as C,WR as F,zR as G,Jn as M,Dm as P,zc as S,Pm as T,P as V,Fe as W,_t as a,At as b,aO as c,KR as d,ZR as e,JR as f,QR as g,YR as h,jR as i,qR as j,eO as k,tO as l,rO as m,oO as n,nO as o,iO as s};