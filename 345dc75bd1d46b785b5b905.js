"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[345],{345:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(294),a=n(105),i=n.n(a);const o=function(){return r.createElement("div",{id:"loader",className:"loader hidden"},r.createElement(i(),{color:"var(--main-color)",size:"30px"}),";")}},105:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(294)),s=n(657),u=(0,n(10).createAnimation)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");t.default=function(e){var t=e.loading,n=void 0===t||t,a=e.color,i=void 0===a?"#000000":a,o=e.speedMultiplier,d=void 0===o?1:o,p=e.cssOverride,f=void 0===p?{}:p,v=e.size,m=void 0===v?15:v,h=e.margin,y=void 0===h?2:h,b=c(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),O=r({display:"inherit"},f),g=function(e){return{backgroundColor:i,width:(0,s.cssValue)(m),height:(0,s.cssValue)(m),margin:(0,s.cssValue)(y),borderRadius:"100%",display:"inline-block",animation:"".concat(u," ").concat(.75/d,"s ").concat(.12*e/d,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return n?l.createElement("span",r({style:O},b),l.createElement("span",{style:g(1)}),l.createElement("span",{style:g(2)}),l.createElement("span",{style:g(3)})):null}},10:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0,t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(o,0),r}},657:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(e.match(/[^0-9]*$/)||"").toString();return n[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=345dc75bd1d46b785b5b905.js.map