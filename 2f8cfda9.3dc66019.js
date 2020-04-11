/*! For license information please see 2f8cfda9.3dc66019.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(6),c=(r(119),r(118)),a={id:"createSelector",title:"createSelector",sidebar_label:"createSelector",hide_title:!0},u={id:"api/createSelector",title:"createSelector",description:"# `createSelector`",source:"@site/../docs/api/createSelector.md",permalink:"/redux-toolkit//api/createSelector",sidebar_label:"createSelector",sidebar:"docs",previous:{title:"createSlice",permalink:"/redux-toolkit//api/createSlice"},next:{title:"createAsyncThunk",permalink:"/redux-toolkit//api/createAsyncThunk"}},i=[],l={rightToc:i};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"createselector"},Object(c.b)("inlineCode",{parentName:"h1"},"createSelector")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"createSelector")," utility from the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect"}),"Reselect library"),", re-exported for ease of use."),Object(c.b)("p",null,"For more details on using ",Object(c.b)("inlineCode",{parentName:"p"},"createSelector"),", see:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/reselect"}),"Reselect API documentation")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://react-redux.js.org/next/api/hooks#using-memoizing-selectors"}),"React-Redux docs: Hooks API - Using memoizing selectors")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/"}),"Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md"}),"React/Redux Links: Reducers and Selectors"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Note"),": Prior to v0.7, RTK re-exported ",Object(c.b)("inlineCode",{parentName:"p"},"createSelector")," from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/planttheidea/selectorator"}),Object(c.b)("inlineCode",{parentName:"a"},"selectorator")),", which\nallowed using string keypaths as input selectors. This was removed, as it ultimately did not provide enough benefits, and\nthe string keypaths made static typing for selectors difficult.")))}f.isMDXComponent=!0},118:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},s=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=f(r),d=n,b=s["".concat(a,".").concat(d)]||s[d]||p[d]||c;return r?o.a.createElement(b,u({ref:t},l,{components:r})):o.a.createElement(b,u({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},119:function(e,t,r){"use strict";e.exports=r(120)},120:function(e,t,r){"use strict";var n=r(121),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e,t,r,n,o,c,a,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=[r,n,o,c,a,u],l=0;(e=Error(t.replace(/%s/g,(function(){return i[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function O(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function S(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||j}function w(){}function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||j}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=S.prototype;var x=k.prototype=new w;x.constructor=k,n(x,S.prototype),x.isPureReactComponent=!0;var P={current:null},_={current:null},C=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var n=void 0,o={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:c,type:e,key:a,ref:u,props:o,_owner:_.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var $=/\/+/g,T=[];function A(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function D(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var i=!1;if(null===t)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case c:case a:i=!0}}if(i)return n(o,t,""===r?"."+M(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+M(u=t[l],l);i+=e(u,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=h&&t[h]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(u=t.next()).done;)i+=e(u=u.value,f=r+M(u,l++),n,o);else"object"===u&&O("31","[object Object]"===(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return i}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var c="";null!=r&&(c=(""+r).replace($,"$&/")+"/"),D(e,U,t=A(t,c,n,o)),I(t)}function L(){var e=P.current;return null===e&&O("321"),e}var V={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,q,t=A(null,null,t,r)),I(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return N(e)||O("143"),e}},createRef:function(){return{current:null}},Component:S,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,r){return L().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,r){return L().useReducer(e,t,r)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:u,StrictMode:i,Suspense:b,createElement:R,cloneElement:function(e,t,r){null==e&&O("267",e);var o=void 0,a=n({},e.props),u=e.key,i=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,l=_.current),void 0!==t.key&&(u=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)C.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))a.children=r;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];a.children=f}return{$$typeof:c,type:e.type,key:u,ref:i,props:a,_owner:l}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:N,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentOwner:_,assign:n}},z={default:V},H=z&&V||z;e.exports=H.default||H},121:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,i=a(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(i[f]=r[f]);if(n){u=n(r);for(var s=0;s<u.length;s++)c.call(r,u[s])&&(i[u[s]]=r[u[s]])}}return i}}}]);