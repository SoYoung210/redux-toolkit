/*! For license information please see 00c0714a.4a1b5174.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,i({ref:t},l,{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";e.exports=n(120)},120:function(e,t,n){"use strict";var r=n(121),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.concurrent_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e,t,n,r,o,a,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,c,i],l=0;(e=Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function j(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);g(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||O}function x(){}function k(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||O}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&j("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=w.prototype;var S=k.prototype=new x;S.constructor=k,r(S,w.prototype),S.isPureReactComponent=!0;var N={current:null},R={current:null},C=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r=void 0,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,r)&&!T.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:R.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,A=[];function $(e,t,n,r){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function M(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case c:u=!0}}if(u)return r(o,t,""===n?"."+D(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+D(i=t[l],l);u+=e(i,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(i=t.next()).done;)u+=e(i=i.value,s=n+D(i,l++),r,o);else"object"===i&&j("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),M(e,U,t=$(t,a,r,o)),I(t)}function L(){var e=N.current;return null===e&&j("321"),e}var V={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,q,t=$(null,null,t,n)),I(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return _(e)||j("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,n){return L().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,n){return L().useReducer(e,t,n)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:i,StrictMode:u,Suspense:b,createElement:P,cloneElement:function(e,t,n){null==e&&j("267",e);var o=void 0,c=r({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=R.current),void 0!==t.key&&(i=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)C.call(t,o)&&!T.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))c.children=n;else if(1<o){s=Array(o);for(var p=0;p<o;p++)s[p]=arguments[p+2];c.children=s}return{$$typeof:a,type:e.type,key:i,ref:u,props:c,_owner:l}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.8.6",unstable_ConcurrentMode:d,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:N,ReactCurrentOwner:R,assign:r}},W={default:V},J=W&&V||W;e.exports=J.default||J},121:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,u=c(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(u[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(u[i[p]]=n[i[p]])}}return u}},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(119),n(118)),c={id:"createReducer",title:"createReducer",sidebar_label:"createReducer",hide_title:!0},i={id:"api/createReducer",title:"createReducer",description:"# `createReducer()`",source:"@site/../docs/api/createReducer.md",permalink:"/redux-toolkit/api/createReducer",sidebar_label:"createReducer",sidebar:"docs",previous:{title:"getDefaultMiddleware",permalink:"/redux-toolkit/api/getDefaultMiddleware"},next:{title:"createAction",permalink:"/redux-toolkit/api/createAction"}},u=[{value:"The &quot;builder callback&quot; API",id:"the-builder-callback-api",children:[]},{value:"Direct State Mutation",id:"direct-state-mutation",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"createreducer"},Object(a.b)("inlineCode",{parentName:"h1"},"createReducer()")),Object(a.b)("p",null,'A utility that simplifies creating Redux reducer functions, by defining them as lookup tables of functions to handle each action type. It also allows you to drastically simplify immutable update logic, by writing "mutative" code inside your reducers.'),Object(a.b)("p",null,"Redux ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/basics/reducers"}),"reducers")," are often implemented using a ",Object(a.b)("inlineCode",{parentName:"p"},"switch")," statement, with one ",Object(a.b)("inlineCode",{parentName:"p"},"case")," for every handled action type."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function counterReducer(state = 0, action) {\n  switch (action.type) {\n    case 'increment':\n      return state + action.payload\n    case 'decrement':\n      return state - action.payload\n    default:\n      return state\n  }\n}\n")),Object(a.b)("p",null,"This approach works well, but is a bit boilerplate-y and error-prone. For instance, it is easy to forget the ",Object(a.b)("inlineCode",{parentName:"p"},"default")," case or setting the initial state."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"createReducer")," helper streamlines the implementation of such reducers. It takes two arguments. The first one is the initial state. The second is an object mapping from action types to ",Object(a.b)("em",{parentName:"p"},"case reducers"),", each of which handles one specific action type."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const counterReducer = createReducer(0, {\n  increment: (state, action) => state + action.payload,\n  decrement: (state, action) => state - action.payload\n})\n")),Object(a.b)("p",null,"Action creators that were generated using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/createAction"}),Object(a.b)("inlineCode",{parentName:"a"},"createAction"))," may be used directly as the keys here, using\ncomputed property syntax."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note"),": If you are using TypeScript, we recommend using the ",Object(a.b)("inlineCode",{parentName:"p"},"builder callback")," API that is shown below. If you do not use the ",Object(a.b)("inlineCode",{parentName:"p"},"builder callback")," and are using TypeScript, you will need to use ",Object(a.b)("inlineCode",{parentName:"p"},"actionCreator.type")," or ",Object(a.b)("inlineCode",{parentName:"p"},"actionCreator.toString()"),"\nto force the TS compiler to accept the computed property. Please see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/usage/usage-with-typescript#type-safety-with-extraReducers"}),"Usage With TypeScript")," for further details.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const increment = createAction('increment')\nconst decrement = createAction('decrement')\n\nconst counterReducer = createReducer(0, {\n  [increment]: (state, action) => state + action.payload,\n  [decrement.type]: (state, action) => state - action.payload\n})\n")),Object(a.b)("h3",{id:"the-builder-callback-api"},'The "builder callback" API'),Object(a.b)("p",null,"Instead of using a simple object as an argument to ",Object(a.b)("inlineCode",{parentName:"p"},"createReducer"),", you can also provide a callback that receives an ",Object(a.b)("inlineCode",{parentName:"p"},"ActionReducerMapBuilder")," instance:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"createReducer(0, builder =>\n  builder.addCase(increment, (state, action) => {\n    // action is inferred correctly here\n  })\n)\n")),Object(a.b)("p",null,"This is intended for use with TypeScript, as passing a plain object full of reducer functions cannot infer their types correctly in this case. It has no real benefit when used with plain JS."),Object(a.b)("p",null,"We recommend using this API if stricter type safety is necessary when defining reducer argument objects."),Object(a.b)("h2",{id:"direct-state-mutation"},"Direct State Mutation"),Object(a.b)("p",null,"Redux requires reducer functions to be pure and treat state values as immutable. While this is essential for making state updates predictable and observable, it can sometimes make the implementation of such updates awkward. Consider the following example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const addTodo = createAction('todos/add')\nconst toggleTodo = createAction('todos/toggle')\n\nconst todosReducer = createReducer([], {\n  [addTodo]: (state, action) => {\n    const todo = action.payload\n    return [...state, todo]\n  },\n  [toggleTodo]: (state, action) => {\n    const index = action.payload\n    const todo = state[index]\n    return [\n      ...state.slice(0, index),\n      { ...todo, completed: !todo.completed }\n      ...state.slice(index + 1)\n    ]\n  }\n})\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"addTodo")," reducer is pretty easy to follow if you know the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"}),"ES6 spread syntax"),". However, the code for ",Object(a.b)("inlineCode",{parentName:"p"},"toggleTodo")," is much less straightforward, especially considering that it only sets a single flag."),Object(a.b)("p",null,"To make things easier, ",Object(a.b)("inlineCode",{parentName:"p"},"createReducer")," uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mweststrate/immer"}),"immer")," to let you write reducers as if they were mutating the state directly. In reality, the reducer receives a proxy state that translates all mutations into equivalent copy operations."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const addTodo = createAction('todos/add')\nconst toggleTodo = createAction('todos/toggle')\n\nconst todosReducer = createReducer([], {\n  [addTodo]: (state, action) => {\n    // This push() operation gets translated into the same\n    // extended-array creation as in the previous example.\n    const todo = action.payload\n    state.push(todo)\n  },\n  [toggleTodo]: (state, action) => {\n    // The \"mutating\" version of this case reducer is much\n    //  more direct than the explicitly pure one.\n    const index = action.payload\n    const todo = state[index]\n    todo.completed = !todo.completed\n  }\n})\n")),Object(a.b)("p",null,"If you choose to write reducers in this style, make sure to learn about the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://immerjs.github.io/immer/docs/pitfalls"}),"pitfalls mentioned in the immer docs")," . Most importantly, you need to ensure that you either mutate the ",Object(a.b)("inlineCode",{parentName:"p"},"state")," argument or return a new state, ",Object(a.b)("em",{parentName:"p"},"but not both"),". For example, the following reducer would throw an exception if a ",Object(a.b)("inlineCode",{parentName:"p"},"toggleTodo")," action is passed:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const todosReducer = createReducer([], {\n  [toggleTodo]: (state, action) => {\n    const index = action.payload\n    const todo = state[index]\n\n    // This case reducer both mutates the passed-in state...\n    todo.completed = !todo.completed\n\n    // ... and returns a new value. This will throw an\n    // exception. In this example, the easiest fix is\n    // to remove the `return` statement.\n    return [...state.slice(0, index), todo, ...state.slice(index + 1)]\n  }\n})\n")))}s.isMDXComponent=!0}}]);