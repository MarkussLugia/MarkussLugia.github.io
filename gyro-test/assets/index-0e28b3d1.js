var w=Object.defineProperty;var z=(n,t,e)=>t in n?w(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var r=(n,t,e)=>(z(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();class y{constructor(t,e){r(this,"container");r(this,"children",[]);r(this,"config",{xMove:!0,yMove:!0,basis:"auto",moveRatio:.08,anchorDepth:50,updateInterval:60});r(this,"temp",{moveDistanceBasis:0,containerObserver:null,childWidth:0,childHeight:0,childLeft:0,childTop:0});r(this,"intervalId",0);r(this,"xRatio",0);r(this,"yRatio",0);r(this,"halfPI",Math.PI/2);Object.assign(this.config,e),t?this.container=t:this.container=document.createElement("div"),new ResizeObserver(()=>{this.updateSize()}).observe(this.container),this.intervalId=setInterval(()=>{this.updatePositionEase(this.xRatio,this.yRatio)},this.config.updateInterval)}addChild(t,e){if(!t)return;const a=new S(t);a.depth=e.depth,a.target.style.zIndex=`${e.depth}`,a.target.style.transition=`${this.config.updateInterval+20}ms linear`,this.updateChildSize(a),this.children.push(a)}static computeOffsetMax(t,e,a){const i=e>50?e:100-e,s=(t-e)/i;return a*s}updateSize(){const t=this.container.getBoundingClientRect();let e=this.config.moveRatio*2+1;switch(this.temp.childWidth=Math.ceil(t.width*e),this.temp.childHeight=Math.ceil(t.height*e),this.temp.childLeft=Math.ceil(t.width*this.config.moveRatio),this.temp.childTop=Math.ceil(t.height*this.config.moveRatio),this.config.basis){case"width":this.temp.moveDistanceBasis=t.width*this.config.moveRatio;break;case"height":this.temp.moveDistanceBasis=t.height*this.config.moveRatio;break;case"auto":t.width<t.height?this.temp.moveDistanceBasis=t.width*this.config.moveRatio:this.temp.moveDistanceBasis=t.height*this.config.moveRatio;break;default:this.temp.moveDistanceBasis=0}this.children.forEach(a=>this.updateChildSize(a))}updateChildSize(t){t.target.style.width=`${this.temp.childWidth}px`,t.target.style.height=`${this.temp.childHeight}px`,t.target.style.left=`-${this.temp.childLeft}px`,t.target.style.top=`-${this.temp.childTop}px`,t.offsetMax=y.computeOffsetMax(t.depth,this.config.anchorDepth,this.temp.moveDistanceBasis)}updatePositionEase(t,e){this.updatePosition(Math.sin(this.halfPI*t),Math.sin(this.halfPI*e))}updatePosition(t,e){this.children.forEach(a=>{a.updatePosition(t,e)})}}class S{constructor(t){r(this,"target");r(this,"offsetMax",0);r(this,"depth",0);this.target=t}updatePosition(t,e){this.target.style.transform=`translate(${t*this.offsetMax}px,${e*this.offsetMax}px)`}}class h{constructor(t){r(this,"config",{respondRange:80,autoCorrection:!0,autoCorrRange:100});r(this,"temp",{firstEventSkip:!1,initialized:!1,baseAlpha:null,baseBeta:null,baseGamma:null,alphaRatio:0,betaRatio:0,gammaRatio:0});r(this,"listeners",[]);t&&(Object.assign(this.config,t),typeof t.startAlpha=="number"&&(this.temp.baseAlpha=t.startAlpha),typeof t.startBeta=="number"&&(this.temp.baseBeta=t.startBeta),typeof t.startGamma=="number"&&(this.temp.baseGamma=t.startGamma)),window.addEventListener("deviceorientation",e=>{if(!this.temp.firstEventSkip){this.temp.firstEventSkip=!0;return}this.temp.initialized||this.initBase(e),this.handleOrientation(e),this.temp.initialized||(this.temp.initialized=!0)})}static calcDelta(t,e,a){let i=e-t;return i>a/2?i-=a:i<-a/2&&(i+=a),i}initBase(t){const{alpha:e,beta:a,gamma:i}=t;console.log("init",e,a,i),this.temp.baseAlpha==null&&(this.temp.baseAlpha=typeof e=="number"?e:0),this.temp.baseBeta==null&&(this.temp.baseBeta=(typeof a=="number"?a:0)+180),this.temp.baseGamma==null&&(this.temp.baseGamma=(typeof i=="number"?i:0)+90)}static calcNormalize(t,e){return t>e?1:t<-e?-1:0}static calcNormalizeCorr(t,e,a){let i=[0,0];return t>e&&(i[0]=1,t>a&&(i[1]=t-a)),t<-e&&(i[0]=-1,t>a&&(i[1]=-a-t)),i}handleOrientation(t){const{alpha:e,beta:a,gamma:i}=t;let s=h.calcDelta(this.temp.baseAlpha,e,360),m=h.calcDelta(this.temp.baseBeta,a+180,360),f=h.calcDelta(this.temp.baseGamma,i+90,180),[u,g,b]=[s,m,f];const o=this.config.respondRange/2;if(this.config.autoCorrection){const c=this.config.autoCorrRange/2;let p=h.calcNormalizeCorr(s,o,c);p[0]!=0&&(u=o*p[0],this.temp.baseAlpha=this.temp.baseAlpha+p[1]);let d=h.calcNormalizeCorr(m,o,c);d[0]!=0&&(g=o*d[0],this.temp.baseBeta=this.temp.baseBeta+d[1]);let v=h.calcNormalizeCorr(f,o,c);v[0]!=0&&(b=o*v[0],this.temp.baseGamma=this.temp.baseGamma+v[1])}else{let c=h.calcNormalize(s,o);c!=0&&(u=o*c);let p=h.calcNormalize(m,o);p!=0&&(g=o*p);let d=h.calcNormalize(f,o);d!=0&&(b=o*d)}let[R,B,C]=[u/o,g/o,b/o];Object.assign(this.temp,{alphaRatio:R,betaRatio:B,gammaRatio:C}),this.listeners.forEach(c=>c(R,B,C))}addListener(t){this.listeners.push(t),this.temp.initialized&&t(this.temp.alphaRatio,this.temp.betaRatio,this.temp.gammaRatio)}}const l=new y(document.querySelector("#depth-frame"),{moveRatio:.12,anchorDepth:90});l.addChild(document.querySelector("#bg"),{depth:0});l.addChild(document.querySelector("#front"),{depth:80});l.addChild(document.querySelector("#fw1"),{depth:65});l.addChild(document.querySelector("#fw2"),{depth:45});l.addChild(document.querySelector("#fw3"),{depth:35});l.addChild(document.querySelector("#fw4"),{depth:25});l.addChild(document.querySelector("#fw5"),{depth:10});const M=new h;M.addListener((n,t,e)=>{l.xRatio=e,l.yRatio=t,l.updatePositionEase(e,t)});