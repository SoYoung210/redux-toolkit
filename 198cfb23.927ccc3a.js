/*! For license information please see 198cfb23.927ccc3a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||c;return n?a.a.createElement(f,i({ref:t},l,{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";e.exports=n(120)},120:function(e,t,n){"use strict";var r=n(121),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.concurrent_mode"):60111,b=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function j(e,t,n,r,a,c,o,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,c,o,i],l=0;(e=Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function O(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);j(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}function x(){}function k(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=w.prototype;var S=k.prototype=new x;S.constructor=k,r(S,w.prototype),S.isPureReactComponent=!0;var N={current:null},C={current:null},R=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r=void 0,a={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)R.call(t,r)&&!A.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:c,type:e,key:o,ref:i,props:a,_owner:C.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g,T=[];function $(e,t,n,r){if(T.length){var a=T.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function B(e,t,n){return null==e?0:function e(t,n,r,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case c:case o:u=!0}}if(u)return r(a,t,""===n?"."+q(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+q(i=t[l],l);u+=e(i,s,r,a)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(i=t.next()).done;)u+=e(i=i.value,s=n+q(i,l++),r,a);else"object"===i&&O("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,a){var c="";null!=n&&(c=(""+n).replace(E,"$&/")+"/"),B(e,D,t=$(t,c,r,a)),I(t)}function F(){var e=N.current;return null===e&&O("321"),e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;B(e,M,t=$(null,null,t,n)),I(t)},count:function(e){return B(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){return _(e)||O("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,StrictMode:u,Suspense:f,createElement:P,cloneElement:function(e,t,n){null==e&&O("267",e);var a=void 0,o=r({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=C.current),void 0!==t.key&&(i=""+t.key);var s=void 0;for(a in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)R.call(t,a)&&!A.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==s?s[a]:t[a])}if(1===(a=arguments.length-2))o.children=n;else if(1<a){s=Array(a);for(var p=0;p<a;p++)s[p]=arguments[p+2];o.children=s}return{$$typeof:c,type:e.type,key:i,ref:u,props:o,_owner:l}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.8.6",unstable_ConcurrentMode:d,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:N,ReactCurrentOwner:C,assign:r}},V={default:L},z=V&&L||V;e.exports=z.default||z},121:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,u=o(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))a.call(n,s)&&(u[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)c.call(n,i[p])&&(u[i[p]]=n[i[p]])}}return u}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(1),a=(n(119),n(118));const c={id:"createSlice",title:"createSlice",sidebar_label:"createSlice",hide_title:!0},o={id:"api/createSlice",title:"createSlice",description:"# `createSlice`",source:"@site/../docs/api/createSlice.md",permalink:"/redux-toolkit//api/createSlice",sidebar_label:"createSlice",sidebar:"docs",previous:{title:"createAction",permalink:"/redux-toolkit//api/createAction"},next:{title:"createSelector",permalink:"/redux-toolkit//api/createSelector"}},i=[{value:"Parameters",id:"parameters",children:[{value:"<code>reducers</code>",id:"reducers",children:[]},{value:"<code>initialState</code>",id:"initialstate",children:[]},{value:"<code>name</code>",id:"name",children:[]},{value:"<code>extraReducers</code>",id:"extrareducers",children:[]},{value:"The &quot;builder callback&quot; API for <code>extraReducers</code>",id:"the-builder-callback-api-for-extrareducers",children:[]}]},{value:"Return Value",id:"return-value",children:[]},{value:"Examples",id:"examples",children:[]}],u={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"createslice"},Object(a.b)("inlineCode",{parentName:"h1"},"createSlice")),Object(a.b)("p",null,'A function that accepts an initial state, an object full of reducer functions, and a "slice name",\nand automatically generates action creators and action types that correspond to the reducers and state.'),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createSlice")," accepts a single configuration object parameter, with the following options:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'function createSlice({\n    // An object of "case reducers". Key names will be used to generate actions.\n    reducers: Object<string, ReducerFunction | ReducerAndPrepareObject>\n    // The initial state for the reducer\n    initialState: any,\n    // A name, used in action types\n    name: string,\n    // An additional object of "case reducers". Keys should be other action types.\n    extraReducers?:\n    | Object<string, ReducerFunction>\n    | ((builder: ActionReducerMapBuilder<State>) => void)\n})\n')),Object(a.b)("h3",{id:"reducers"},Object(a.b)("inlineCode",{parentName:"h3"},"reducers")),Object(a.b)("p",null,'An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent\nto a single case statement in a switch).'),Object(a.b)("p",null,"The keys in the object will be used to generate string action type constants, and these will show up in the Redux\nDevTools Extension when they are dispatched. Also, if any other part of the application happens to dispatch an action\nwith the exact same type string, the corresponding reducer will be run. Therefore, you should give the functions\ndescriptive names."),Object(a.b)("p",null,"This object will be passed to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/redux-toolkit/api/createReducer"}),Object(a.b)("inlineCode",{parentName:"a"},"createReducer")),', so the reducers may safely "mutate" the\nstate they are given.'),Object(a.b)("h4",{id:"customizing-generated-action-creators"},"Customizing Generated Action Creators"),Object(a.b)("p",null,"If you need to customize the creation of the payload value of an action creator by means of a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/redux-toolkit/api/createAction#using-prepare-callbacks-to-customize-action-contents"}),Object(a.b)("inlineCode",{parentName:"a"},"prepare callback")),", the value of the appropriate field of the ",Object(a.b)("inlineCode",{parentName:"p"},"reducers")," argument object should be an object instead of a function. This object must contain two properties: ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," and ",Object(a.b)("inlineCode",{parentName:"p"},"prepare"),". The value of the ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," field should be the case reducer function while the value of the ",Object(a.b)("inlineCode",{parentName:"p"},"prepare")," field should be the prepare callback function."),Object(a.b)("h3",{id:"initialstate"},Object(a.b)("inlineCode",{parentName:"h3"},"initialState")),Object(a.b)("p",null,"The initial state value for this slice of state."),Object(a.b)("h3",{id:"name"},Object(a.b)("inlineCode",{parentName:"h3"},"name")),Object(a.b)("p",null,"A string name for this slice of state. Generated action type constants will use this as a prefix."),Object(a.b)("h3",{id:"extrareducers"},Object(a.b)("inlineCode",{parentName:"h3"},"extraReducers")),Object(a.b)("p",null,'One of the key concepts of Redux is that each slice reducer "owns" its slice of state, and that many slice reducers\ncan independently respond to the same action type. ',Object(a.b)("inlineCode",{parentName:"p"},"extraReducers")," allows ",Object(a.b)("inlineCode",{parentName:"p"},"createSlice")," to respond to other action types\nbesides the types it has generated."),Object(a.b)("p",null,"Like ",Object(a.b)("inlineCode",{parentName:"p"},"reducers"),", ",Object(a.b)("inlineCode",{parentName:"p"},"extraReducers")," should be an object containing Redux case reducer functions. However, the keys should\nbe other Redux string action type constants, and ",Object(a.b)("inlineCode",{parentName:"p"},"createSlice")," will ",Object(a.b)("em",{parentName:"p"},"not")," auto-generate action types or action creators\nfor reducers included in this parameter."),Object(a.b)("p",null,"As with ",Object(a.b)("inlineCode",{parentName:"p"},"reducers"),", these reducers will also be passed to ",Object(a.b)("inlineCode",{parentName:"p"},"createReducer"),' and may "mutate" their state safely.'),Object(a.b)("p",null,"If two fields from ",Object(a.b)("inlineCode",{parentName:"p"},"reducers")," and ",Object(a.b)("inlineCode",{parentName:"p"},"extraReducers")," happen to end up with the same action type string,\nthe function from ",Object(a.b)("inlineCode",{parentName:"p"},"reducers")," will be used to handle that action type."),Object(a.b)("p",null,"Action creators that were generated using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/redux-toolkit/api/createAction"}),Object(a.b)("inlineCode",{parentName:"a"},"createAction"))," may be used directly as the keys here, using\ncomputed property syntax."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const incrementBy = createAction('incrementBy')\n\ncreateSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: {},\n  extraReducers: {\n    [incrementBy]: (state, action) => {\n      return state + action.payload\n    }\n  }\n})\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note"),": If you are using TypeScript, we recommend using the ",Object(a.b)("inlineCode",{parentName:"p"},"builder callback")," API that is shown below. If you do not use the ",Object(a.b)("inlineCode",{parentName:"p"},"builder callback")," and are using TypeScript, you will need to use ",Object(a.b)("inlineCode",{parentName:"p"},"actionCreator.type")," or ",Object(a.b)("inlineCode",{parentName:"p"},"actionCreator.toString()"),"\nto force the TS compiler to accept the computed property. Please see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/redux-toolkit/usage/usage-with-typescript#type-safety-with-extraReducers"}),"Usage With TypeScript")," for further details.")),Object(a.b)("h3",{id:"the-builder-callback-api-for-extrareducers"},'The "builder callback" API for ',Object(a.b)("inlineCode",{parentName:"h3"},"extraReducers")),Object(a.b)("p",null,"Instead of using a simple object as ",Object(a.b)("inlineCode",{parentName:"p"},"extraReducers"),", you can also use a callback that receives a ",Object(a.b)("inlineCode",{parentName:"p"},"ActionReducerMapBuilder")," instance."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const incrementBy = createAction<number>('incrementBy')\n\ncreateSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: {},\n  extraReducers: builder => {\n    builder.addCase(incrementBy, (state, action) => {\n      // action is inferred correctly here with `action.payload` as a `number`\n      return state + action.payload\n    })\n  }\n})\n")),Object(a.b)("p",null,"We recommend using this API if stricter type safety is necessary when defining reducer argument objects. It's particularly useful for working with actions produced by ",Object(a.b)("inlineCode",{parentName:"p"},"createAction")," and ",Object(a.b)("inlineCode",{parentName:"p"},"createAsyncThunk"),"."),Object(a.b)("h2",{id:"return-value"},"Return Value"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createSlice")," will return an object that looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"{\n    name : string,\n    reducer : ReducerFunction,\n    actions : Object<string, ActionCreator>,\n}\n")),Object(a.b)("p",null,"Each function defined in the ",Object(a.b)("inlineCode",{parentName:"p"},"reducers")," argument will have a corresponding action creator generated using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/redux-toolkit/api/createAction"}),Object(a.b)("inlineCode",{parentName:"a"},"createAction")),"\nand included in the result's ",Object(a.b)("inlineCode",{parentName:"p"},"actions")," field using the same function name."),Object(a.b)("p",null,"The generated ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," function is suitable for passing to the Redux ",Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),' function as a "slice reducer".'),Object(a.b)("p",null,"You may want to consider destructuring the action creators and exporting them individually, for ease of searching\nfor references in a larger codebase."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note"),": the result object is conceptually similar to a\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go"}),'"Redux duck" code structure'),".\nThe actual code structure you use is up to you, but there are a couple caveats to keep in mind:"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"Actions are not exclusively limited to a single slice. Any part of the reducer logic can (and should!) respond\nto any dispatched action."),Object(a.b)("li",{parentName:"ul"},"At the same time, circular references can cause import problems. If slices A and B are defined in\nseparate files, and each file tries to import the other so it can listen to other actions, unexpected\nbehavior may occur."))),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'\nimport { createStore, combineReducers } from 'redux'\n\nconst incrementBy = createAction<number>('incrementBy')\nconst decrementBy = createAction<number>('decrementBy')\n\nconst counter = createSlice({\n  name: 'counter',\n  initialState: 0 as number,\n  reducers: {\n    increment: state => state + 1,\n    decrement: state => state - 1,\n    multiply: {\n      reducer: (state, action: PayloadAction<number>) => state * action.payload,\n      prepare: (value: number) => ({ payload: value || 2 }) // fallback if the payload is a falsy value\n    }\n  },\n  // \"builder callback API\", recommended for TypeScript users\n  extraReducers: builder => {\n    builder.addCase(incrementBy, (state, action) => {\n      return state + action.payload\n    })\n    builder.addCase(decrementBy, (state, action) => {\n      return state - action.payload\n    })\n  }\n})\n\nconst user = createSlice({\n  name: 'user',\n  initialState: { name: '', age: 20 },\n  reducers: {\n    setUserName: (state, action) => {\n      state.name = action.payload // mutate the state all you want with immer\n    }\n  },\n  // \"map object API\"\n  extraReducers: {\n    [counter.actions.increment]: (state, action) => {\n      state.age += 1\n    }\n  }\n})\n\nconst reducer = combineReducers({\n  counter: counter.reducer,\n  user: user.reducer\n})\n\nconst store = createStore(reducer)\n\nstore.dispatch(counter.actions.increment())\n// -> { counter: 1, user: {name : '', age: 21} }\nstore.dispatch(counter.actions.increment())\n// -> { counter: 2, user: {name: '', age: 22} }\nstore.dispatch(counter.actions.multiply(3))\n// -> { counter: 6, user: {name: '', age: 22} }\nstore.dispatch(counter.actions.multiply())\n// -> { counter: 12, user: {name: '', age: 22} }\nconsole.log(`${counter.actions.decrement}`)\n// -> \"counter/decrement\"\nstore.dispatch(user.actions.setUserName('eric'))\n// -> { counter: 6, user: { name: 'eric', age: 22} }\n")))}l.isMDXComponent=!0}}]);