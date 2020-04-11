/*! For license information please see 169866e8.ea5dafbc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(f,l({ref:t},u,{components:n})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";e.exports=n(120)},120:function(e,t,n){"use strict";var r=n(121),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.concurrent_mode"):60111,b=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function O(e,t,n,r,a,o,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,o,i,l],u=0;(e=Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function j(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);O(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function x(){}function S(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&j("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=w.prototype;var N=S.prototype=new x;N.constructor=S,r(N,w.prototype),N.isPureReactComponent=!0;var C={current:null},k={current:null},E=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var r=void 0,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var M=/\/+/g,R=[];function A(e,t,n,r){if(R.length){var a=R.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return r(a,t,""===n?"."+$(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+$(l=t[u],u);c+=e(l,s,r,a)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=y&&t[y]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(l=t.next()).done;)c+=e(l=l.value,s=n+$(l,u++),r,a);else"object"===l&&j("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function z(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(M,"$&/")+"/"),D(e,q,t=A(t,o,r,a)),T(t)}function U(){var e=C.current;return null===e&&j("321"),e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,z,t=A(null,null,t,n)),T(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){return _(e)||j("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:l,StrictMode:c,Suspense:f,createElement:I,cloneElement:function(e,t,n){null==e&&j("267",e);var a=void 0,i=r({},e.props),l=e.key,c=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,u=k.current),void 0!==t.key&&(l=""+t.key);var s=void 0;for(a in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)E.call(t,a)&&!P.hasOwnProperty(a)&&(i[a]=void 0===t[a]&&void 0!==s?s[a]:t[a])}if(1===(a=arguments.length-2))i.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:o,type:e.type,key:l,ref:c,props:i,_owner:u}},createFactory:function(e){var t=I.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentOwner:k,assign:r}},V={default:F},X=V&&F||V;e.exports=X.default||X},121:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(c[s]=n[s]);if(r){l=r(n);for(var d=0;d<l.length;d++)o.call(n,l[d])&&(c[l[d]]=n[l[d]])}}return c}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),o=(n(119),n(118)),i={id:"other-exports",title:"Other Exports",sidebar_label:"Other Exports",hide_title:!0},l={id:"api/other-exports",title:"Other Exports",description:"# Other Exports",source:"@site/../docs/api/otherExports.md",permalink:"/redux-toolkit//api/other-exports",sidebar_label:"Other Exports",sidebar:"docs",previous:{title:"createEntityAdapter",permalink:"/redux-toolkit//api/createEntityAdapter"}},c=[{value:"Internal Exports",id:"internal-exports",children:[{value:"<code>createImmutableStateInvariantMiddleware</code>",id:"createimmutablestateinvariantmiddleware",children:[]},{value:"<code>createSerializableStateInvariantMiddleware</code>",id:"createserializablestateinvariantmiddleware",children:[]},{value:"<code>isPlain</code>",id:"isplain",children:[]},{value:"<code>nanoid</code>",id:"nanoid",children:[]}]},{value:"Exports from Other Libraries",id:"exports-from-other-libraries",children:[{value:"<code>createNextState</code>",id:"createnextstate",children:[]},{value:"<code>combineReducers</code>",id:"combinereducers",children:[]},{value:"<code>compose</code>",id:"compose",children:[]},{value:"<code>bindActionCreators</code>",id:"bindactioncreators",children:[]},{value:"<code>createStore</code>",id:"createstore",children:[]},{value:"<code>applyMiddleware</code>",id:"applymiddleware",children:[]}]}],u={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"other-exports"},"Other Exports"),Object(o.b)("p",null,"Redux Toolkit exports some of its internal utilities, and re-exports additional functions from other dependencies as well."),Object(o.b)("h2",{id:"internal-exports"},"Internal Exports"),Object(o.b)("h3",{id:"createimmutablestateinvariantmiddleware"},Object(o.b)("inlineCode",{parentName:"h3"},"createImmutableStateInvariantMiddleware")),Object(o.b)("p",null,"Creates an instance of the ",Object(o.b)("inlineCode",{parentName:"p"},"immutable-state-invariant")," middleware described in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit//api/getDefaultMiddleware"}),Object(o.b)("inlineCode",{parentName:"a"},"getDefaultMiddleware")),"."),Object(o.b)("p",null,"Accepts a single configuration object parameter, with the following options:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"function createImmutableStateInvariantMiddleware({\n  // The function to check if a value is considered to be immutable.\n  // This function is applied recursively to every value contained in the state.\n  // The default implementation will return true for primitive types (like numbers, strings, booleans, null and undefined).\n  isImmutable?: (value: any) => boolean\n  // An array of dot-separated path strings that match named nodes from the root state to ignore when checking for immutability.\n  // Defaults to undefined\n  ignoredPaths?: string[]\n})\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {\n  createSlice,\n  configureStore,\n  createImmutableStateInvariantMiddleware\n} from '@reduxjs/toolkit'\n\nconst exampleSlice = createSlice({\n  name: 'example',\n  initialState: {\n    user: 'will track changes',\n    ignoredPath: 'single level',\n    ignoredNested: {\n      one: 'one',\n      two: 'two'\n    }\n  },\n  reducers: {}\n})\n\nconst immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({\n  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two']\n})\n\nconst store = configureStore({\n  reducer: exampleSlice.reducer,\n  middleware: [immutableInvariantMiddleware]\n})\n")),Object(o.b)("h3",{id:"createserializablestateinvariantmiddleware"},Object(o.b)("inlineCode",{parentName:"h3"},"createSerializableStateInvariantMiddleware")),Object(o.b)("p",null,"Creates an instance of the ",Object(o.b)("inlineCode",{parentName:"p"},"serializable-state-invariant")," middleware described in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit//api/getDefaultMiddleware"}),Object(o.b)("inlineCode",{parentName:"a"},"getDefaultMiddleware")),"."),Object(o.b)("p",null,"Accepts a single configuration object parameter, with the following options:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"function createSerializableStateInvariantMiddleware({\n  // The function to check if a value is considered serializable.\n  // This function is applied recursively to every value contained in the state.\n  // Defaults to `isPlain()`.\n  isSerializable?: (value: any) => boolean\n  // The function that will be used to retrieve entries from each value.\n  // If unspecified, `Object.entries` will be used.\n  // Defaults to `undefined`.\n  getEntries?: (value: any) => [string, any][]\n  // An array of action types to ignore when checking for serializability.\n  // Defaults to []\n  ignoredActions?: string[]\n  // An array of dot-separated path strings to ignore when checking for serializability.\n  // Defaults to []\n  ignoredPaths?: string[]\n})\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { Iterable } from 'immutable'\nimport {\n  configureStore,\n  createSerializableStateInvariantMiddleware,\n  isPlain\n} from '@reduxjs/toolkit'\n\n// Augment middleware to consider Immutable.JS iterables serializable\nconst isSerializable = value => Iterable.isIterable(value) || isPlain(value)\n\nconst getEntries = value =>\n  Iterable.isIterable(value) ? value.entries() : Object.entries(value)\n\nconst serializableMiddleware = createSerializableStateInvariantMiddleware({\n  isSerializable,\n  getEntries\n})\n\nconst store = configureStore({\n  reducer,\n  middleware: [serializableMiddleware]\n})\n")),Object(o.b)("h3",{id:"isplain"},Object(o.b)("inlineCode",{parentName:"h3"},"isPlain")),Object(o.b)("p",null,"The default function used to determine if a value is considered serializable."),Object(o.b)("p",null,"Current definition:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function isPlain(val) {\n  return (\n    typeof val === 'undefined' ||\n    val === null ||\n    typeof val === 'string' ||\n    typeof val === 'boolean' ||\n    typeof val === 'number' ||\n    Array.isArray(val) ||\n    isPlainObject(val)\n  )\n}\n")),Object(o.b)("h3",{id:"nanoid"},Object(o.b)("inlineCode",{parentName:"h3"},"nanoid")),Object(o.b)("p",null,"An inlined copy of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ai/nanoid"}),Object(o.b)("inlineCode",{parentName:"a"},"nanoid/nonsecure")),". Generates a non-cryptographically-secure random ID string. Automatically used by ",Object(o.b)("inlineCode",{parentName:"p"},"createAsyncThunk")," for request IDs, but may also be useful for other cases as well."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { nanoid } from '@reduxjs/toolkit'\n\nconsole.log(nanoid())\n// 'dgPXxUz_6fWIQBD8XmiSy'\n")),Object(o.b)("h2",{id:"exports-from-other-libraries"},"Exports from Other Libraries"),Object(o.b)("h3",{id:"createnextstate"},Object(o.b)("inlineCode",{parentName:"h3"},"createNextState")),Object(o.b)("p",null,"The default immutable update function from the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://immerjs.github.io/immer/"}),Object(o.b)("inlineCode",{parentName:"a"},"immer")," library"),", re-exported here as ",Object(o.b)("inlineCode",{parentName:"p"},"createNextState")," (also commonly referred to as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://immerjs.github.io/immer/docs/produce"}),Object(o.b)("inlineCode",{parentName:"a"},"produce")),")"),Object(o.b)("h3",{id:"combinereducers"},Object(o.b)("inlineCode",{parentName:"h3"},"combineReducers")),Object(o.b)("p",null,"Redux's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/api/combinereducers"}),Object(o.b)("inlineCode",{parentName:"a"},"combineReducers")),", re-exported for convenience. While ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore")," calls this internally, you may wish to call it yourself to compose multiple levels of slice reducers."),Object(o.b)("h3",{id:"compose"},Object(o.b)("inlineCode",{parentName:"h3"},"compose")),Object(o.b)("p",null,"Redux's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/api/compose"}),Object(o.b)("inlineCode",{parentName:"a"},"compose")),". It composes functions from right to left.\nThis is a functional programming utility. You might want to use it to apply several store custom enhancers/ functions in a row."),Object(o.b)("h3",{id:"bindactioncreators"},Object(o.b)("inlineCode",{parentName:"h3"},"bindActionCreators")),Object(o.b)("p",null,"Redux's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/api/bindactioncreators"}),Object(o.b)("inlineCode",{parentName:"a"},"bindActionCreators")),". It wraps action creators with ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch()")," so that they dispatch immediately when called."),Object(o.b)("h3",{id:"createstore"},Object(o.b)("inlineCode",{parentName:"h3"},"createStore")),Object(o.b)("p",null,"Redux's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/api/createstore"}),Object(o.b)("inlineCode",{parentName:"a"},"createStore")),". You should not need to use this directly."),Object(o.b)("h3",{id:"applymiddleware"},Object(o.b)("inlineCode",{parentName:"h3"},"applyMiddleware")),Object(o.b)("p",null,"Redux's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/api/applymiddleware"}),Object(o.b)("inlineCode",{parentName:"a"},"applyMiddleware")),". You should not need to use this directly."))}s.isMDXComponent=!0}}]);