"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[910],{8910:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(7294);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function i(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}const a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(s,e);var t,n,o,a,f=(o=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(o);if(a){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=f.call(this,e)).state={bool:!0,row:0,cc:0,list:[{id:1,name:"张三",age:10},{id:2,name:"李四",age:20},{id:3,name:"王五",age:30},{id:4,name:"赵六",age:40}]},t}return t=s,(n=[{key:"renderRow",value:function(){var e=null;switch(this.state.row){case 0:e=r.createElement("h1",null,"第一行文字");break;case 1:e=r.createElement("h1",null,"第二行文字");break;case 2:e=r.createElement("h1",null,"第三行文字");break;case 3:e=r.createElement("h1",null,"第四行文字")}return e}},{key:"renderList1",value:function(){return this.state.list.map((function(e,t){return r.createElement("div",{key:e.id},t," - ",e.id," - ",e.name," - ",e.age)}))}},{key:"renderList2",value:function(){return this.state.list.map((function(e,t){return r.createElement("div",{key:e.id},t," - ",e.id," - ",e.name," - ",e.age)}))}},{key:"renderList3",value:function(){var e=this.state.list,t=[];return e.forEach((function(e,n){t.push(r.createElement("div",{key:e.id},n," - ",e.id," - ",e.name," - ",e.age))})),t}},{key:"rowSkip",value:function(e,t){console.log("---clicked",e),console.log("---clicked",t)}},{key:"listSkip",value:function(e){console.log("---clicked",e.target.dataset.id)}},{key:"render",value:function(){var e=this,t=this.state,n=t.bool,o=t.cc,c=t.list;return r.createElement("div",null,r.createElement("h1",null,"学习条件渲染、列表渲染、动态样式"),r.createElement("hr",null),r.createElement("h1",{style:{display:n?"block":"none"}},"我是一个可有可无的人"),r.createElement("button",{onClick:function(){return e.setState((function(e){return{bool:!e.bool}}))}},"显示与隐藏"),r.createElement("hr",null),this.renderRow(),r.createElement("button",{onClick:function(){return e.setState((function(e){return{row:(e.row+1)%4}}))}},"切换行显示"),r.createElement("hr",null),r.createElement("h1",{className:"c".concat(o," long")},"变色龙"),r.createElement("button",{onClick:function(){return e.setState({cc:Math.floor(4*Math.random())})}},"开始表演"),r.createElement("hr",null),c.map((function(t,n){return r.createElement("div",{key:t.id},r.createElement("span",null,n," - ",t.id," - ",t.name," - ",t.age),r.createElement("button",{onClick:function(n){return e.rowSkip(t,n)}},"详情"))})),r.createElement("hr",null),r.createElement("div",{onClick:function(t){return e.listSkip(t)}},c.map((function(e,t){return r.createElement("div",{key:e.id},r.createElement("span",null,t," - ",e.id," - ",e.name," - ",e.age),r.createElement("button",{"data-id":e.id},"详情"))}))),r.createElement("hr",null),this.renderList1(),r.createElement("hr",null),this.renderList2(),r.createElement("hr",null),this.renderList3())}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.PureComponent)}}]);
//# sourceMappingURL=910.e380a8b8fde68aab3bc1.js.map