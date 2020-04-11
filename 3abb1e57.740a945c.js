/*! For license information please see 3abb1e57.740a945c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(1),a=(n(119),n(118));const o={id:"getDefaultMiddleware",title:"getDefaultMiddleware",sidebar_label:"getDefaultMiddleware",hide_title:!0},i={id:"api/getDefaultMiddleware",title:"getDefaultMiddleware",description:"# `getDefaultMiddleware`",source:"@site/../docs/api/getDefaultMiddleware.md",permalink:"/redux-toolkit//api/getDefaultMiddleware",sidebar_label:"getDefaultMiddleware",sidebar:"docs",previous:{title:"configureStore",permalink:"/redux-toolkit//api/configureStore"},next:{title:"createReducer",permalink:"/redux-toolkit//api/createReducer"}},l=[{value:"Intended Usage",id:"intended-usage",children:[]},{value:"Included Default Middleware",id:"included-default-middleware",children:[{value:"Development",id:"development",children:[]},{value:"Production",id:"production",children:[]}]},{value:"Customizing the Included Middleware",id:"customizing-the-included-middleware",children:[]},{value:"API Reference",id:"api-reference",children:[]}],u={rightToc:l};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"getdefaultmiddleware"},Object(a.b)("inlineCode",{parentName:"h1"},"getDefaultMiddleware")),Object(a.b)("p",null,"Returns an array containing the default list of middleware."),Object(a.b)("h2",{id:"intended-usage"},"Intended Usage"),Object(a.b)("p",null,"By default, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/redux-toolkit/api/configureStore"}),Object(a.b)("inlineCode",{parentName:"a"},"configureStore"))," adds some middleware to the Redux store setup automatically."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const store = configureStore({\n  reducer: rootReducer\n})\n\n// Store has one or more middleware added, because the middleware list was not customized\n")),Object(a.b)("p",null,"If you want to customize the list of middleware, you can supply an array of middleware functions to ",Object(a.b)("inlineCode",{parentName:"p"},"configureStore"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const store = configureStore({\n  reducer: rootReducer,\n  middleware: [thunk, logger]\n})\n\n// Store specifically has the thunk and logger middleware applied\n")),Object(a.b)("p",null,"However, when you supply the ",Object(a.b)("inlineCode",{parentName:"p"},"middleware")," option, you are responsible for defining ",Object(a.b)("em",{parentName:"p"},"all")," the middleware you want added\nto the store. ",Object(a.b)("inlineCode",{parentName:"p"},"configureStore")," will not add any extra middleware beyond what you listed."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," is useful if you want to add some custom middleware, but also still want to have the default\nmiddleware added as well:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const store = configureStore({\n  reducer: rootReducer,\n  middleware: [...getDefaultMiddleware(), logger]\n})\n\n// Store has all of the default middleware added, _plus_ the logger middleware\n")),Object(a.b)("h2",{id:"included-default-middleware"},"Included Default Middleware"),Object(a.b)("h3",{id:"development"},"Development"),Object(a.b)("p",null,"One of the goals of Redux Toolkit is to provide opinionated defaults and prevent common mistakes. As part of that,\n",Object(a.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," includes some middleware that are added ",Object(a.b)("strong",{parentName:"p"},"in development builds of your app only")," to\nprovide runtime checks for two common issues:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/redux-toolkit/api/other-exports#createimmutablestateinvariantmiddleware"}),Object(a.b)("inlineCode",{parentName:"a"},"immutable-state-invariant")),": deeply compares\nstate values for mutations. It can detect mutations in reducers during a dispatch, and also mutations that occur between\ndispatches (such as in a component or a selector). When a mutation is detected, it will throw an error and indicate the key\npath for where the mutated value was detected in the state tree. (Forked from ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/leoasis/redux-immutable-state-invariant"}),Object(a.b)("inlineCode",{parentName:"a"},"redux-immutable-state-invariant")),".)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/redux-toolkit/api/other-exports#createserializablestateinvariantmiddleware"}),Object(a.b)("inlineCode",{parentName:"a"},"serializable-state-invariant-middleware")),": a custom middleware created specifically for use in Redux Toolkit. Similar in\nconcept to ",Object(a.b)("inlineCode",{parentName:"p"},"immutable-state-invariant"),", but deeply checks your state tree and your actions for non-serializable values\nsuch as functions, Promises, Symbols, and other non-plain-JS-data values. When a non-serializable value is detected, a\nconsole error will be printed with the key path for where the non-serializable value was detected."))),Object(a.b)("p",null,"In addition to these development tool middleware, it also adds ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux-thunk"}),Object(a.b)("inlineCode",{parentName:"a"},"redux-thunk")),"\nby default, since thunks are the basic recommended side effects middleware for Redux."),Object(a.b)("p",null,"Currently, the return value is:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const middleware = [thunk, immutableStateInvariant, serializableStateInvariant]\n")),Object(a.b)("h3",{id:"production"},"Production"),Object(a.b)("p",null,"Currently, the return value is:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const middleware = [thunk]\n")),Object(a.b)("h2",{id:"customizing-the-included-middleware"},"Customizing the Included Middleware"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," accepts an options object that allows customizing each middleware in two ways:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Each middleware can be excluded from inclusion in the array by passing ",Object(a.b)("inlineCode",{parentName:"li"},"false")," for its corresponding field"),Object(a.b)("li",{parentName:"ul"},"Each middleware can have its options customized by passing the matching options object for its corresponding field")),Object(a.b)("p",null,'This example shows excluding the serializable state check middleware, and passing a specific value for the thunk\nmiddleware\'s "extra argument":'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const customizedMiddleware = getDefaultMiddleware({\n  thunk: {\n    extraArgument: myCustomApiService\n  },\n  serializableCheck: false\n})\n")),Object(a.b)("h2",{id:"api-reference"},"API Reference"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"interface ThunkOptions<E = any> {\n  extraArgument: E\n}\n\ninterface ImmutableStateInvariantMiddlewareOptions {\n  isImmutable?: (value: any) => boolean\n  ignore?: string[]\n}\n\ninterface SerializableStateInvariantMiddlewareOptions {\n  /**\n   * The function to check if a value is considered serializable. This\n   * function is applied recursively to every value contained in the\n   * state. Defaults to `isPlain()`.\n   */\n  isSerializable?: (value: any) => boolean\n  /**\n   * The function that will be used to retrieve entries from each\n   * value.  If unspecified, `Object.entries` will be used. Defaults\n   * to `undefined`.\n   */\n  getEntries?: (value: any) => [string, any][]\n\n  /**\n   * An array of action types to ignore when checking for serializability, Defaults to []\n   */\n  ignoredActions?: string[]\n\n  /**\n   * An array of dot-separated path strings to ignore when checking for serializability, Defaults to []\n   */\n  ignoredPaths?: string[]\n}\n\ninterface GetDefaultMiddlewareOptions {\n  thunk?: boolean | ThunkOptions\n  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions\n  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions\n}\n\nfunction getDefaultMiddleware<S = any>(\n  options: GetDefaultMiddlewareOptions = {}\n): Middleware<{}, S>[]\n")))}c.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=d(n),p=r,b=s["".concat(i,".").concat(p)]||s[p]||f[p]||o;return n?a.a.createElement(b,l({ref:t},c,{components:n})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";e.exports=n(120)},120:function(e,t,n){"use strict";var r=n(121),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,d=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.concurrent_mode"):60111,p=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e,t,n,r,a,o,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],c=0;(e=Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function O(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);g(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function j(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||w}function k(){}function S(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||w}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=j.prototype;var x=S.prototype=new k;x.constructor=S,r(x,j.prototype),x.isPureReactComponent=!0;var N={current:null},C={current:null},P=Object.prototype.hasOwnProperty,M={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r=void 0,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!M.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var c=Array(u),d=0;d<u;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:C.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g,I=[];function R(e,t,n,r){if(I.length){var a=I.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function z(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function T(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var u=!1;if(null===t)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case o:case i:u=!0}}if(u)return r(a,t,""===n?"."+$(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var d=n+$(l=t[c],c);u+=e(l,d,r,a)}else if(null===t||"object"!=typeof t?d=null:d="function"==typeof(d=h&&t[h]||t["@@iterator"])?d:null,"function"==typeof d)for(t=d.call(t),c=0;!(l=t.next()).done;)u+=e(l=l.value,d=n+$(l,c++),r,a);else"object"===l&&O("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(D(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(E,"$&/")+"/"),T(e,U,t=R(t,o,r,a)),z(t)}function F(){var e=N.current;return null===e&&O("321"),e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,A,t=R(null,null,t,n)),z(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){return D(e)||O("143"),e}},createRef:function(){return{current:null}},Component:j,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:l,StrictMode:u,Suspense:b,createElement:_,cloneElement:function(e,t,n){null==e&&O("267",e);var a=void 0,i=r({},e.props),l=e.key,u=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,c=C.current),void 0!==t.key&&(l=""+t.key);var d=void 0;for(a in e.type&&e.type.defaultProps&&(d=e.type.defaultProps),t)P.call(t,a)&&!M.hasOwnProperty(a)&&(i[a]=void 0===t[a]&&void 0!==d?d[a]:t[a])}if(1===(a=arguments.length-2))i.children=n;else if(1<a){d=Array(a);for(var s=0;s<a;s++)d[s]=arguments[s+2];i.children=d}return{$$typeof:o,type:e.type,key:l,ref:u,props:i,_owner:c}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:D,version:"16.8.6",unstable_ConcurrentMode:f,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:N,ReactCurrentOwner:C,assign:r}},V={default:L},B=V&&L||V;e.exports=B.default||B},121:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,u=i(e),c=1;c<arguments.length;c++){for(var d in n=Object(arguments[c]))a.call(n,d)&&(u[d]=n[d]);if(r){l=r(n);for(var s=0;s<l.length;s++)o.call(n,l[s])&&(u[l[s]]=n[l[s]])}}return u}}}]);