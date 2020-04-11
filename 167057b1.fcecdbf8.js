/*! For license information please see 167057b1.fcecdbf8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,i({ref:t},u,{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";e.exports=n(120)},120:function(e,t,n){"use strict";var r=n(121),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.concurrent_mode"):60111,b=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function j(e,t,n,r,a,o,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,c,i],u=0;(e=Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function O(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);j(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}function N(){}function C(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=w.prototype;var S=C.prototype=new N;S.constructor=C,r(S,w.prototype),S.isPureReactComponent=!0;var T={current:null},x={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r=void 0,a={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,r)&&!E.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,P=[];function I(e,t,n,r){if(P.length){var a=P.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function M(e,t,n){return null==e?0:function e(t,n,r,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case c:l=!0}}if(l)return r(a,t,""===n?"."+D(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+D(i=t[u],u);l+=e(i,s,r,a)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,s=n+D(i,u++),r,a);else"object"===i&&O("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function z(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(_,"$&/")+"/"),M(e,z,t=I(t,o,r,a)),$(t)}function F(){var e=T.current;return null===e&&O("321"),e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,U,t=I(null,null,t,n)),$(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){return R(e)||O("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:C,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,StrictMode:l,Suspense:f,createElement:A,cloneElement:function(e,t,n){null==e&&O("267",e);var a=void 0,c=r({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,u=x.current),void 0!==t.key&&(i=""+t.key);var s=void 0;for(a in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)k.call(t,a)&&!E.hasOwnProperty(a)&&(c[a]=void 0===t[a]&&void 0!==s?s[a]:t[a])}if(1===(a=arguments.length-2))c.children=n;else if(1<a){s=Array(a);for(var p=0;p<a;p++)s[p]=arguments[p+2];c.children=s}return{$$typeof:o,type:e.type,key:i,ref:l,props:c,_owner:u}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.8.6",unstable_ConcurrentMode:d,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:T,ReactCurrentOwner:x,assign:r}},W={default:L},V=W&&L||W;e.exports=V.default||V},121:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)o.call(n,i[p])&&(l[i[p]]=n[i[p]])}}return l}},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),o=(n(119),n(118)),c={id:"createAction",title:"createAction",sidebar_label:"createAction",hide_title:!0},i={id:"api/createAction",title:"createAction",description:"# `createAction`",source:"@site/../docs/api/createAction.md",permalink:"/redux-toolkit//api/createAction",sidebar_label:"createAction",sidebar:"docs",previous:{title:"createReducer",permalink:"/redux-toolkit//api/createReducer"},next:{title:"createSlice",permalink:"/redux-toolkit//api/createSlice"}},l=[{value:"Using Prepare Callbacks to Customize Action Contents",id:"using-prepare-callbacks-to-customize-action-contents",children:[]},{value:"Usage with createReducer()",id:"usage-with-createreducer",children:[]},{value:"Non-String Action Types",id:"non-string-action-types",children:[]},{value:"actionCreator.match",id:"actioncreatormatch",children:[{value:"As a TypeScript TypeGuard",id:"as-a-typescript-typeguard",children:[]},{value:"With redux-observable",id:"with-redux-observable",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"createaction"},Object(o.b)("inlineCode",{parentName:"h1"},"createAction")),Object(o.b)("p",null,"A helper function for defining a Redux ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/basics/actions"}),"action")," type and creator."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function createAction(type, prepareAction?)\n")),Object(o.b)("p",null,"The usual way to define an action in Redux is to separately declare an ",Object(o.b)("em",{parentName:"p"},"action type")," constant and an ",Object(o.b)("em",{parentName:"p"},"action creator")," function for constructing actions of that type."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const INCREMENT = 'counter/increment'\n\nfunction increment(amount) {\n  return {\n    type: INCREMENT,\n    payload: amount\n  }\n}\n\nconst action = increment(3)\n// { type: 'counter/increment', payload: 3 }\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"createAction")," helper combines these two declarations into one. It takes an action type and returns an action creator for that type. The action creator can be called either without arguments or with a ",Object(o.b)("inlineCode",{parentName:"p"},"payload")," to be attached to the action. Also, the action creator overrides ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString"}),"toString()")," so that the action type becomes its string representation."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const increment = createAction('counter/increment')\n\nlet action = increment()\n// { type: 'counter/increment' }\n\naction = increment(3)\n// returns { type: 'counter/increment', payload: 3 }\n\nconsole.log(increment.toString())\n// 'counter/increment'\n\nconsole.log(`The action type is: ${increment}`)\n// 'The action type is: counter/increment'\n")),Object(o.b)("h2",{id:"using-prepare-callbacks-to-customize-action-contents"},"Using Prepare Callbacks to Customize Action Contents"),Object(o.b)("p",null,"By default, the generated action creators accept a single argument, which becomes ",Object(o.b)("inlineCode",{parentName:"p"},"action.payload"),". This requires the caller to construct the entire payload correctly and pass it in."),Object(o.b)("p",null,"In many cases, you may want to write additional logic to customize the creation of the ",Object(o.b)("inlineCode",{parentName:"p"},"payload")," value, such as accepting multiple parameters for the action creator, generating a random ID, or getting the current timestamp. To do this, ",Object(o.b)("inlineCode",{parentName:"p"},"createAction"),' accepts an optional second argument: a "prepare callback" that will be used to construct the payload value.'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import v4 from 'uuid/v4'\n\nconst addTodo = createAction('todos/add', function prepare(text) {\n  return {\n    payload: {\n      text,\n      id: v4(),\n      createdAt: new Date().toISOString()\n    }\n  }\n})\n\nconsole.log(addTodo('Write more docs'))\n/**\n * {\n *   type: 'todos/add',\n *   payload: {\n *     text: 'Write more docs',\n *     id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',\n *     createdAt: '2019-10-03T07:53:36.581Z'\n *   }\n * }\n **/\n")),Object(o.b)("p",null,"If provided, all arguments from the action creator will be passed to the prepare callback, and it should return an object with the ",Object(o.b)("inlineCode",{parentName:"p"},"payload")," field (otherwise the payload of created actions will be ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),"). Additionally, the object can have a ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," and/or an ",Object(o.b)("inlineCode",{parentName:"p"},"error")," field that will also be added to created actions. ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," may contain extra information about the action, ",Object(o.b)("inlineCode",{parentName:"p"},"error")," may contain details about the action failure. These three fields (",Object(o.b)("inlineCode",{parentName:"p"},"payload"),", ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," and ",Object(o.b)("inlineCode",{parentName:"p"},"error"),") adhere to the specification of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/redux-utilities/flux-standard-action#actions"}),"Flux Standard Actions"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," The type field will be added automatically."),Object(o.b)("h2",{id:"usage-with-createreducer"},"Usage with createReducer()"),Object(o.b)("p",null,"Because of their ",Object(o.b)("inlineCode",{parentName:"p"},"toString()")," override, action creators returned by ",Object(o.b)("inlineCode",{parentName:"p"},"createAction()")," can be used directly as keys for the case reducers passed to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit//api/createReducer"}),"createReducer()"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const increment = createAction('counter/increment')\nconst decrement = createAction('counter/decrement')\n\nconst counterReducer = createReducer(0, {\n  [increment]: (state, action) => state + action.payload,\n  [decrement]: (state, action) => state - action.payload\n})\n")),Object(o.b)("p",null,"This works because object keys that are not natively supported by JavaScript (like, in this case, functions) are implicitly converted to strings, and the action creators\u2019 string representations happen to be the action types they produce."),Object(o.b)("h2",{id:"non-string-action-types"},"Non-String Action Types"),Object(o.b)("p",null,"In principle, Redux lets you use any kind of value as an action type. Instead of strings, you could theoretically use numbers, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/Symbol"}),"symbols"),", or anything else (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants"}),"although it's recommended that the value should at least be serializable"),")."),Object(o.b)("p",null,"However, Redux Toolkit rests on the assumption that you use string action types. Specifically, some of its features rely on the fact that with strings, the ",Object(o.b)("inlineCode",{parentName:"p"},"toString()")," method of an ",Object(o.b)("inlineCode",{parentName:"p"},"createAction()")," action creator returns the matching action type. This is not the case for non-string action types because ",Object(o.b)("inlineCode",{parentName:"p"},"toString()")," will return the string-converted type value rather than the type itself."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const INCREMENT = Symbol('increment')\nconst increment = createAction(INCREMENT)\n\nincrement.toString()\n// returns the string 'Symbol(increment)',\n// not the INCREMENT symbol itself\n\nincrement.toString() === INCREMENT\n// false\n")),Object(o.b)("p",null,"This means that, for instance, you cannot use a non-string-type action creator as a case reducer key for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit//api/createReducer"}),"createReducer()"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const INCREMENT = Symbol('increment')\nconst increment = createAction(INCREMENT)\n\nconst counterReducer = createReducer(0, {\n  // The following case reducer will NOT trigger for\n  // increment() actions because `increment` will be\n  // interpreted as a string, rather than being evaluated\n  // to the INCREMENT symbol.\n  [increment]: (state, action) => state + action.payload,\n\n  // You would need to use the action type explicitly instead.\n  [INCREMENT]: (state, action) => state + action.payload\n})\n")),Object(o.b)("p",null,"For this reason, ",Object(o.b)("strong",{parentName:"p"},"we strongly recommend you to only use string action types"),"."),Object(o.b)("h2",{id:"actioncreatormatch"},"actionCreator.match"),Object(o.b)("p",null,"Every generated actionCreator has a ",Object(o.b)("inlineCode",{parentName:"p"},".match(action)")," method that can be used to determine if the passed action is of the same type as an action that would be created by the action creator."),Object(o.b)("p",null,"This has different uses:"),Object(o.b)("h3",{id:"as-a-typescript-typeguard"},"As a TypeScript TypeGuard"),Object(o.b)("p",null,"This ",Object(o.b)("inlineCode",{parentName:"p"},"match")," method is a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards"}),"TypeScript type guard")," and can be used to discriminate the ",Object(o.b)("inlineCode",{parentName:"p"},"payload")," type of an action."),Object(o.b)("p",null,"This behavior can be particularly useful when used in custom middlewares, where manual casts might be neccessary otherwise."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const increment = createAction<number>('INCREMENT')\n\nfunction someFunction(action: Action) {\n  // accessing action.payload would result in an error here\n  if (increment.match(action)) {\n    // action.payload can be used as `number` here\n  }\n}\n")),Object(o.b)("h3",{id:"with-redux-observable"},"With redux-observable"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"match")," method can also be used as a filter method, which makes it powerful when used with redux-observable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const increment = createAction<number>('INCREMENT')\n\nexport const epic = (actions$: Observable<Action>) =>\n  actions$.pipe(\n    filter(increment.match),\n    map(action => {\n      // action.payload can be safely used as number here (and will also be correctly inferred by TypeScript)\n      // ...\n    })\n  )\n")))}s.isMDXComponent=!0}}]);