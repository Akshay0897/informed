!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("informed",[],t):"object"==typeof exports?exports.informed=t():e.informed=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=22)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectContext=t.GroupContext=t.FieldContext=t.FormContext=void 0;var n,o=r(0),u=(n=o)&&n.__esModule?n:{default:n};var i=u.default.createContext(),a=u.default.createContext(),l=u.default.createContext(),f=u.default.createContext();t.FormContext=i,t.FieldContext=a,t.GroupContext=l,t.SelectContext=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=i(r(0)),u=i(r(6));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.forwardRef(function(t,r){return o.default.createElement(u.default,n({component:e,forwardedRef:r},t))})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(0),i=(n=u)&&n.__esModule?n:{default:n},a=r(1);t.default=function(e){return i.default.forwardRef(function(t,r){return i.default.createElement(a.FormContext.Consumer,null,function(n){var u=n.formApi;return i.default.createElement(e,o({formApi:u,ref:r},t))})})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(0),i=(n=u)&&n.__esModule?n:{default:n},a=r(1);t.default=function(e){return i.default.forwardRef(function(t,r){return i.default.createElement(a.GroupContext.Consumer,null,function(n){var u=n.radioGroupApi,a=n.radioGroupState;return i.default.createElement(e,o({radioGroupApi:u,radioGroupState:a,ref:r},t))})})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bindToField=t.withFieldState=t.withFieldApi=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=f(r(0)),i=f(r(3)),a=f(r(7)),l=f(r(16));function f(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var s=function(e,t){return{getValue:function(){return e.getValue(t)},setValue:function(r){return e.setValue(t,r)},getTouched:function(){return e.getTouched(t)},setTouched:function(r){return e.setTouched(t,r)},getError:function(){return e.getError(t)},setError:function(r){return e.setError(t,r)}}},d=function(e,t){return{value:e.getValue(t),touched:e.getTouched(t),error:e.getError(t)}};t.withFieldApi=function(e){return function(t){return(0,i.default)(function(r){var n=r.formApi,i=c(r,["formApi"]);return u.default.createElement(t,o({fieldApi:s(n,e)},i))})}},t.withFieldState=function(e){return function(t){return(0,i.default)(function(r){var n=r.formApi,i=c(r,["formApi"]);return u.default.createElement(t,o({fieldState:d(n,e)},i))})}},t.bindToField=function(e){return(0,a.default)((0,i.default)(function(t){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e)),n=e.formApi,o=e.controller,u=e.field,i=e.validate,a=e.validateOnBlur,f=e.validateOnChange,c=e.initialValue;t.state=d(n,u),t.fieldApi=s(n,u);var p=function(e){e===n.getFullField(u)&&t.setState(d(n,u))},h=function(){t.setState(d(n,u))};return t.register=function(){o.on("field",p),o.on("update",h),o.register(n.getFullField(u),new l.default(n.getFullField(u),t.fieldApi,{validateOnBlur:a,validateOnChange:f,validate:i,initialValue:c}))},t.deregister=function(){o.removeListener("field",p),o.removeListener("update",h),o.deregister(n.getFullField(u))},t.register=t.register.bind(t),t.deregister=t.deregister.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,u.default.PureComponent),n(r,[{key:"render",value:function(){var t=this.props,r=(t.formApi,t.formState,t.controller,t.validate,t.validateOnBlur,t.validateOnChange,c(t,["formApi","formState","controller","validate","validateOnBlur","validateOnChange"]));return u.default.createElement(e,o({register:this.register,deregister:this.deregister,fieldApi:this.fieldApi,fieldState:this.state},r))}}]),r}()))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),a=(n=i)&&n.__esModule?n:{default:n},l=r(5);var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.me=a.default.createRef(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.PureComponent),u(t,[{key:"componentDidMount",value:function(){this.props.register()}},{key:"componentWillUnmount",value:function(){this.props.deregister()}},{key:"componentDidUpdate",value:function(){var e=this;this.props.debug&&this.me&&(this.me.current.style.backgroundColor="red",setTimeout(function(){e.me.current.style.backgroundColor="white"},500))}},{key:"render",value:function(){var e=this.props,t=e.fieldApi,r=e.fieldState,n=e.children,u=e.component,i=e.render,l=(e.field,e.register,e.deregister,e.forwardedRef),f=e.debug,c=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["fieldApi","fieldState","children","component","render","field","register","deregister","forwardedRef","debug"]),s=o({fieldApi:t,fieldState:r,forwardedRef:f?this.me:l},c);return u?a.default.createElement(u,s,n):i?i(s):"function"==typeof n?n(s):n}}]),t}();t.default=(0,l.bindToField)(f)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(0),i=(n=u)&&n.__esModule?n:{default:n},a=r(1);t.default=function(e){return i.default.forwardRef(function(t,r){return i.default.createElement(a.FormContext.Consumer,null,function(n){var u=n.controller;return i.default.createElement(e,o({controller:u,ref:r},t))})})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(0),i=(n=u)&&n.__esModule?n:{default:n},a=r(1);t.default=function(e){return i.default.forwardRef(function(t,r){return i.default.createElement(a.FormContext.Consumer,null,function(n){var u=n.formState;return i.default.createElement(e,o({formState:u,ref:r},t))})})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(0),i=f(u),a=r(1),l=f(r(2));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){return i.default.createElement(a.GroupContext.Provider,{value:this.groupContext},this.props.children)}},{key:"groupContext",get:function(){return{radioGroupApi:n({},this.props.fieldApi,{onChange:this.props.onChange,onBlur:this.props.onBlur}),radioGroupState:this.props.fieldState}}}]),t}();t.default=(0,l.default)(c)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=i(r(0)),u=i(r(2));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}t.default=(0,u.default)(function(e){var t=e.fieldApi,r=e.fieldState,u=a(e,["fieldApi","fieldState"]),i=r.value,l=t.setValue,f=t.setTouched,c=u.onChange,s=u.onBlur,d=u.forwardedRef,p=a(u,["onChange","onBlur","forwardedRef"]);return o.default.createElement("input",n({},p,{ref:d,checked:!!i,onChange:function(e){l(e.target.checked),c&&c(e)},onBlur:function(e){f(),s&&s(e)},type:"checkbox"}))})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(0),i=(n=u)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.value,r=e.forwardedRef,n=e.children,u=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["value","forwardedRef","children"]);return i.default.createElement("option",o({ref:r,value:t,key:t},u),n)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=a(r(0)),i=a(r(2));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleChange=r.handleChange.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"handleChange",value:function(e){var t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(this.refs.select)).filter(function(e){return e.selected}).map(function(e){return e.value});this.props.fieldApi.setValue(this.props.multiple?t:t[0]||""),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this.props,t=e.fieldApi,r=e.fieldState,o=l(e,["fieldApi","fieldState"]),i=r.value,a=(t.setValue,t.setTouched),f=(o.onChange,o.onBlur),c=(o.forwardedRef,o.children),s=o.multiple,d=l(o,["onChange","onBlur","forwardedRef","children","multiple"]);return u.default.createElement("select",n({},d,{multiple:s,ref:"select",value:i||(s?[]:""),onChange:this.handleChange,onBlur:function(e){a(),f&&f(e)}}),c)}}]),t}();t.default=(0,i.default)(f)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=i(r(0)),u=i(r(2));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}t.default=(0,u.default)(function(e){var t=e.fieldApi,r=e.fieldState,u=a(e,["fieldApi","fieldState"]),i=r.value,l=t.setValue,f=t.setTouched,c=u.onChange,s=u.onBlur,d=u.forwardedRef,p=a(u,["onChange","onBlur","forwardedRef"]);return o.default.createElement("textarea",n({},p,{ref:d,value:i||"",onChange:function(e){l(e.target.value),c&&c(e)},onBlur:function(e){f(),s&&s(e)}}))})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=i(r(0)),u=i(r(4));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}t.default=(0,u.default)(function(e){var t=e.radioGroupApi,r=e.radioGroupState,u=a(e,["radioGroupApi","radioGroupState"]),i=r.value,l=t.setValue,f=t.setTouched,c=t.onChange,s=t.onBlur,d=u.value,p=u.onChange,h=u.onBlur,v=u.forwardedRef,b=a(u,["value","onChange","onBlur","forwardedRef"]);return o.default.createElement("input",n({},b,{ref:v,value:d,checked:i===d,onChange:function(e){e.target.checked&&(l(d),p&&p(e),c&&c(e))},onBlur:function(e){f(),h&&h(e),s&&s(e)},type:"radio"}))})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=i(r(0)),u=i(r(2));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}t.default=(0,u.default)(function(e){var t=e.fieldApi,r=e.fieldState,u=a(e,["fieldApi","fieldState"]),i=r.value,l=t.setValue,f=t.setTouched,c=u.onChange,s=u.onBlur,d=u.forwardedRef,p=a(u,["onChange","onBlur","forwardedRef"]);return o.default.createElement("input",n({},p,{ref:d,value:i||0===i?i:"",onChange:function(e){l(e.target.value),c&&c(e)},onBlur:function(e){f(),s&&s(e)}}))})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.field=t,this.config=n,this.api=r}return n(e,[{key:"validate",value:function(e){if(this.config.validate)return this.config.validate(this.api.getValue(),e)}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(0),i=s(u),a=r(1),l=s(r(3)),f=s(r(8)),c=s(r(7));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t,r,n){return{formApi:o({},t,{getValue:function(r){return t.getValue(e+"."+r)},setValue:function(r,n){return t.setValue(e+"."+r,n)},getTouched:function(r){return t.getTouched(e+"."+r)},setTouched:function(r,n){return t.setTouched(e+"."+r,n)},getError:function(r){return t.getError(e+"."+r)},setError:function(r,n){return t.setError(e+"."+r,n)},getFullField:function(t){return e+"."+t}}),formState:r,controller:n}},p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.scope,o=e.formApi,u=e.formState,i=e.controller;return r.formContext=d(n,o,u,i),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),n(t,[{key:"render",value:function(){var e=this.props.children;return i.default.createElement(a.FormContext.Provider,{value:this.formContext},e)}}]),t}();t.default=(0,f.default)((0,c.default)((0,l.default)(p)))},function(e,t){e.exports=require("events")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var u=function(e){return e.replace(/\[(\d+)]/g,".__int__$1").replace(/\['([^.]+)']/g,".$1").split(".").map(function(e){return 0===e.indexOf("__int__")?parseInt(e.substring(7),10):e})};function i(e){return Array.isArray(e)}function a(e){return!Array.isArray(e)&&"object"===(void 0===e?"undefined":o(e))&&null!==e}var l=function e(t){if(a(t)){var r=new Map;return Object.keys(t).forEach(function(n){var o=e(t[n]);null!=o&&r.set(n,o)}),r}if(i(t)){var n=new Map;return t.forEach(function(t,r){var o=e(t);null!=o&&n.set(r,o)}),n}return t},f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.object=JSON.parse(JSON.stringify(t)),this.map=l(this.object)}return n(e,[{key:"empty",value:function(){return 0===this.map.size}},{key:"rebuild",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.object=JSON.parse(JSON.stringify(e)),this.map=l(this.object)}},{key:"get",value:function(e){var t=u(e),r=function e(r,n,o,u){if(null!=r)return null==o?r[n]:e(r[n],t[u+1],t[u+2],u+1)};return r(this.object,t[0],t[1],0)}},{key:"set",value:function(e,t){var r=u(e),n=function e(n,o,u,l,f){if(null!=n)if(null!=l){null!=t&&("number"!=typeof l||i(n[u])||(n[u]=[],o.set(u,new Map)),"number"==typeof l||a(n[u])||(n[u]={},o.set(u,new Map)));var c=a(n[u])||i(n[u])?o.get(u):o;e(n[u],c,r[f+1],r[f+2],f+1),0===c.size&&(delete n[u],o.delete(u))}else null==t?(delete n[u],o.delete(u)):(n[u]=t,o.set(u,t))};n(this.object,this.map,r[0],r[1],0)}},{key:"delete",value:function(e){this.set(e,null)}}]),e}();t.default=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(19),i=(n=u)&&n.__esModule?n:{default:n};var a=r(18).EventEmitter,l=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.getFormState=function(){return n.state},n.setFormState=function(e){n.values.rebuild(e.values),n.touched.rebuild(e.touched),n.errors.rebuild(e.errors),n.emit("change",n.state),n.emit("values",n.state.values),n.emit("update",n.state)},n.setValues=function(e){n.values.rebuild(e),n.emit("change",n.state),n.emit("values",n.state.values),n.emit("update",n.state)},n.setValue=function(e,t){n.values.set(e,t);var r=n.fields.get(e);r.config.validateOnChange&&n.errors.set(e,r.validate(n.state.values)),n.emit("change",n.state),n.emit("values",n.state.values),n.emit("field",e)},n.setTouched=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n.touched.set(e,t);var r=n.fields.get(e);r.config.validateOnBlur&&n.errors.set(e,r.validate(n.state.values)),n.emit("change",n.state),n.emit("field",e)},n.setError=function(e,t){n.errors.set(e,t),n.emit("change",n.state),n.emit("field",e)},n.getValue=function(e){return n.values.get(e)},n.getTouched=function(e){return n.touched.get(e)},n.getError=function(e){return n.errors.get(e)},n.getFullField=function(e){return e},n.register=function(e,t){n.fields.set(e,t),t.config.initialValue&&n.values.set(e,t.config.initialValue)},n.remove=function(e){n.fields.delete(e),n.values.delete(e),n.touched.delete(e),n.errors.delete(e),n.emit("change",n.state)},n.deregister=function(e){n.remove(e)},n.valid=function(){return n.errors.empty()},n.reset=function(){n.values.rebuild(n.config.initialValues),n.touched.rebuild(),n.errors.rebuild(),n.fields.forEach(function(e){e.config.initialValue&&n.values.set(e.field,e.config.initialValue)}),n.emit("change",n.state),n.emit("update",n.state)},n.submitForm=function(e){n.config.dontPreventDefault||e.preventDefault(e),n.fields.forEach(function(e){var t=e.field;n.touched.set(t,!0),n.errors.set(t,e.validate(n.state.values))}),n.emit("change",n.state),n.emit("update",n.state),n.valid()?(n.hooks.preSubmit&&(n.values.rebuild(n.hooks.preSubmit(n.state.values)),n.emit("change",n.state),n.emit("update",n.state)),n.hooks.onSubmit&&n.hooks.onSubmit(n.state.values)):n.hooks.onSubmitFailure&&n.hooks.onSubmitFailure(n.state.errors)},n.hooks=e,n.config=r,n.values=new i.default(r.initialValues),n.touched=new i.default,n.errors=new i.default,n.api={setValue:n.setValue,getValue:n.getValue,setTouched:n.setTouched,getTouched:n.getTouched,setError:n.setError,getError:n.getError,getFullField:n.getFullField,submitForm:n.submitForm,getState:n.getFormState,setState:n.setFormState,setValues:n.setValues,reset:n.reset},n.fields=new Map,e.getApi&&e.getApi(n.api),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a),o(t,[{key:"state",get:function(){return{values:this.values.object,touched:this.touched.object,errors:this.errors.object,pristine:this.pristine,dirty:this.dirty,invalid:this.invalid}}},{key:"pristine",get:function(){return this.touched.empty()&&this.values.empty()}},{key:"dirty",get:function(){return!this.pristine}},{key:"invalid",get:function(){return!this.errors.empty()}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(0),i=f(u),a=r(1),l=f(r(20));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.onSubmit,o=e.preSubmit,u=e.getApi,i=e.dontPreventDefault,a=e.onSubmitFailure,f=e.initialValues;return r.controller=new l.default({onSubmit:n,getApi:u,preSubmit:o,onSubmitFailure:a},{dontPreventDefault:i,initialValues:f}),r.controller.on("change",function(){return r.forceUpdate()}),r.controller.on("change",function(t){e.onChange&&e.onChange(t)}),r.controller.on("values",function(t){e.onValueChange&&e.onValueChange(t)}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){var e=this.props,t=(e.children,e.component,e.render,e.onSubmit,e.preSubmit,e.getApi,e.dontPreventDefault,e.onSubmitFailure,e.initialValues,e.onValueChange,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","component","render","onSubmit","preSubmit","getApi","dontPreventDefault","onSubmitFailure","initialValues","onValueChange"]));return i.default.createElement(a.FormContext.Provider,{value:this.formContext},i.default.createElement("form",n({},t,{onSubmit:this.formContext.formApi.submitForm}),this.content))}},{key:"formContext",get:function(){return{formApi:this.controller.api,formState:this.controller.state,controller:this.controller}}},{key:"content",get:function(){var e=this.props,t=e.children,r=e.component,n=e.render,o=this.formContext;return r?i.default.createElement(r,o,t):n?n(o):"function"==typeof t?t(o):t}}]),t}();t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RadioGroup=t.Checkbox=t.Option=t.Select=t.TextArea=t.Radio=t.Text=t.withRadioGroup=t.withFieldState=t.withFieldApi=t.withFormState=t.withFormApi=t.Field=t.Scope=t.Form=void 0;var n=y(r(21)),o=y(r(17)),u=y(r(6)),i=y(r(3)),a=y(r(8)),l=r(5),f=y(r(4)),c=y(r(15)),s=y(r(14)),d=y(r(13)),p=y(r(12)),h=y(r(11)),v=y(r(10)),b=y(r(9));function y(e){return e&&e.__esModule?e:{default:e}}t.Form=n.default,t.Scope=o.default,t.Field=u.default,t.withFormApi=i.default,t.withFormState=a.default,t.withFieldApi=l.withFieldApi,t.withFieldState=l.withFieldState,t.withRadioGroup=f.default,t.Text=c.default,t.Radio=s.default,t.TextArea=d.default,t.Select=p.default,t.Option=h.default,t.Checkbox=v.default,t.RadioGroup=b.default}])});