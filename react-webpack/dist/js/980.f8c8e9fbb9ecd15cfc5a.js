"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[980],{980:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var o=n(7294);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function i(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(s,t);var e,n,r,f,a=(r=s,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(r);if(f){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return i(this,t)});function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this,t)).state={count:100,num:200,msg:"Hello Life"},console.log("----constructor"),e}return e=s,(n=[{key:"componentDidMount",value:function(){console.log("----componentDidMount")}},{key:"shouldComponentUpdate",value:function(t,e){return this.state.num===e.num}},{key:"componentDidUpdate",value:function(t,e){e.count,console.log("----componentDidUpdate")}},{key:"componentWillUnmount",value:function(){console.log("----componentWillUnmount")}},{key:"renderName",value:function(){return o.createElement("h1",null,"我的名义")}},{key:"changeCount",value:function(){this.setState((function(t){return{count:t.count+1}}))}},{key:"changeNum",value:function(){this.setState((function(t){return{num:t.num+1}}))}},{key:"render",value:function(){var t=this,e=this.state.count;return console.log("----render"),o.createElement("div",null,o.createElement("h1",null,"学习生命周期"),o.createElement("h1",null,e),o.createElement("button",{onClick:function(){return t.changeCount()}},"自增"),o.createElement("button",{onClick:function(){return t.changeNum()}},"测试"),this.renderName())}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),s}(o.Component)}}]);
//# sourceMappingURL=980.f8c8e9fbb9ecd15cfc5a.js.map