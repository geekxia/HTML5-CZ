"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[841],{2841:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(7294),r=n(1647);const l=function(e){var t=e.cates,n=e.value,r=e.onChange;return a.createElement("div",{className:"cates"},t.map((function(e){return a.createElement("span",{className:n===e.tab?"on":"",onClick:function(){return r(e.tab)},key:e.id},e.label)})))},o=function(e){var t=e.value,n=e.onChange,r=(0,a.useMemo)((function(){return t<=3?[1,2,3,4,5]:[t-2,t-1,t,t+1,t+2]}),[t]);return a.createElement("div",{className:"pages"},a.createElement("span",{onClick:function(){1===t?alert("已经是第一页了"):n(t-1)}},"<<"),t>3&&a.createElement("span",null,"..."),r.map((function(e){return a.createElement("span",{key:e,className:e===t?"on":"",onClick:function(){return n(e)}},e)})),a.createElement("span",null,"..."),a.createElement("span",{onClick:function(){return n(t+1)}},">>"))},c=function(e){var t=e.list;return a.createElement("div",{className:"article-list"},t.map((function(e){return a.createElement("div",{className:"article",key:e.id},a.createElement("img",{src:e.author.avatar_url}),a.createElement("div",{className:"num"},a.createElement("span",null,e.reply_count),a.createElement("span",null,"/"),a.createElement("span",null,e.visit_count)),(e.top||e.good||e.first)&&a.createElement("span",{className:"label ".concat(e.top||e.good?"on":"")},e.label),a.createElement("span",{className:"title"},e.title),a.createElement("span",{className:"time"},(t=e.last_reply_at,(n=(Date.now()-Date.parse(t))/1e3)/60<1?Math.floor(n)+" 秒前":n/60/60<1?Math.floor(n/60)+" 分钟前":n/60/60/24<1?Math.floor(n/60/60)+" 小时前":n/60/60/24/30<1?Math.floor(n/60/60/24)+" 天前":n/60/60/24/30/12<1?Math.floor(n/60/60/24/30)+" 月前":Math.floor(n/60/60/24/30/12)+" 年前")));var t,n})))};function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const s=(0,r.f3)(["cnode"])((0,r.Pi)((function(e){var t=e.cnode,n=u((0,a.useState)([{id:1,tab:"",label:"全部"},{id:2,tab:"good",label:"精华"},{id:3,tab:"share",label:"分享"},{id:4,tab:"ask",label:"问答"},{id:5,tab:"job",label:"招聘"}]),1)[0],r=u((0,a.useState)(""),2),i=r[0],s=r[1],m=u((0,a.useState)(1),2),f=m[0],p=m[1];return(0,a.useEffect)((function(){console.log("调接口"),t.getList({page:f,tab:i,limit:5})}),[i,f]),a.createElement("div",null,a.createElement(l,{cates:n,value:i,onChange:function(e){return s(e)}}),a.createElement(c,{list:t.list}),a.createElement(o,{value:f,onChange:function(e){return p(e)}}))})))}}]);
//# sourceMappingURL=841.9010aca2ceecd11463f2.js.map