/*! For license information please see 3515a574.b8b62c9a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(1),o=(r(119),r(118));const a={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",hide_title:!0},c={id:"introduction/quick-start",title:"Quick Start",description:"# Quick Start",source:"@site/../docs/introduction/quick-start.md",permalink:"/redux-toolkit//introduction/quick-start",sidebar_label:"Quick Start",sidebar:"docs",next:{title:"Basic Tutorial",permalink:"/redux-toolkit//tutorials/basic-tutorial"}},u=[{value:"\ubaa9\uc801",id:"\ubaa9\uc801",children:[]},{value:"\ud3ec\ud568\ub418\ub294 \uac83",id:"\ud3ec\ud568\ub418\ub294-\uac83",children:[]},{value:"\uc124\uce58",id:"\uc124\uce58",children:[{value:"Create React App\uacfc \ud568\uaed8 \uc0ac\uc6a9",id:"create-react-app\uacfc-\ud568\uaed8-\uc0ac\uc6a9",children:[]},{value:"\uae30\uc874 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0ac\uc6a9",id:"\uae30\uc874-\ud504\ub85c\uc81d\ud2b8\uc5d0-\uc0ac\uc6a9",children:[]},{value:"\ub3c4\uc6c0 \ubc1b\uae30, \uc81c\uc548",id:"\ub3c4\uc6c0-\ubc1b\uae30-\uc81c\uc548",children:[]}]}],i={rightToc:u};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"quick-start"},"Quick Start"),Object(o.b)("h2",{id:"\ubaa9\uc801"},"\ubaa9\uc801"),Object(o.b)("p",null,"Redux Toolkit \ud328\ud0a4\uc9c0\ub294 Redux \ub17c\ub9ac\ub97c \uc791\uc131\ud558\ub294 \ud45c\uc900 \ubc29\ubc95\uc785\ub2c8\ub2e4.  Redux\uc5d0 \ub300\ud55c \uc138 \uac00\uc9c0 \uc77c\ubc18\uc801\uc778 \uad00\uc2ec\uc0ac\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub9cc\ub4e4\uc5b4 \uc84c\uc2b5\ub2c8\ub2e4."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'"Redux \uc800\uc7a5\uc18c \uad6c\uc131\uc774 \ub108\ubb34 \ubcf5\uc7a1\ud569\ub2c8\ub2e4"'),Object(o.b)("li",{parentName:"ul"},'"Redux\uac00 \uc720\uc6a9\ud55c \uae30\ub2a5\uc744 \uc218\ud589 \ud560 \uc218 \uc788\ub3c4\ub85d \ub9ce\uc740 \ud328\ud0a4\uc9c0\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."'),Object(o.b)("li",{parentName:"ul"},'"Redux\uc5d0\ub294 boilerplate \ucf54\ub4dc\uac00 \ub108\ubb34 \ub9ce\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"')),Object(o.b)("p",null,"\ubaa8\ub4e0 Use Case\ub97c \ud574\uacb0\ud560 \uc218\ub294 \uc5c6\uc9c0\ub9cc create-react-app \ubc0f apollo-boost\uc758 \uc815\uc2e0\uc73c\ub85c \uc124\uc815 \ud504\ub85c\uc138\uc2a4\ub97c \ucd94\uc0c1\ud654\ud558\uace0 \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 Use Case\ub97c \ucc98\ub9ac\ud558\uace0 \uc0ac\uc6a9\uc790\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub97c \ub2e8\uc21c\ud654 \uc2dc\ud0ac \uc218 \uc788\ub294  \uc720\uc6a9\ud55c util\uc744  \uc81c\uacf5\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),Object(o.b)("p",null,"\uc774 \ud328\ud0a4\uc9c0\ub294 Redux\uc5d0 \ub300\ud55c ",Object(o.b)("em",{parentName:"p"},"\ubaa8\ub4e0 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c \uac83\uc774 \uc544\ub2c8\uba70"),' \uc758\ub3c4\uc801\uc73c\ub85c \ub300\uc751 \ubc94\uc704\uac00 \uc81c\ud55c\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. "\uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucea1\uc290\ud654 \ub41c Redux \ubaa8\ub4c8", \ub370\uc774\ud130 fetch, \ud3f4\ub354 \ub610\ub294 \ud30c\uc77c \uad6c\uc870, redux store\uc758 \uc5d4\ud2f0\ud2f0 \uad00\uacc4 \uad00\ub9ac \ub4f1\uacfc \uac19\uc740 \uac1c\ub150\uc740 \ub2e4\ub8e8\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.'),Object(o.b)("p",null,"\uc989, \uc774 \ub3c4\uad6c\ub294 ",Object(o.b)("strong",{parentName:"p"},"\ubaa8\ub4e0 Redux \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc720\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.")," Redux Toolkit\uc744 \uc0ac\uc6a9\ud558\uba74 \ucc98\uc74c \ud504\ub85c\uc81d\ud2b8\uc5d0 Redux\ub97c \uc0ac\uc6a9\ud558\ub294 \uc0ac\uc6a9\uc790\uc774\ub4e0, \uae30\uc874 \ud504\ub85c\uadf8\ub7a8\uc744 \ub2e8\uc21c\ud654 \ud558\ub824\ub294 \uc219\ub828 \ub41c \uc0ac\uc6a9\uc790\uc774\ub4e0 Redux \ucf54\ub4dc\ub97c \uac1c\uc120 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("h2",{id:"\ud3ec\ud568\ub418\ub294-\uac83"},"\ud3ec\ud568\ub418\ub294 \uac83"),Object(o.b)("p",null,"Redux Toolkit\uc5d0\ub294 \ub2e4\uc74c \ub0b4\uc6a9\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://redux-toolkit.js.org/api/configurestore/"}),Object(o.b)("inlineCode",{parentName:"a"},"configureStore()")," \ud568\uc218"),"\ub294 \ub2e8\uc21c\ud654 \ub41c \uad6c\uc131 \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4 . \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\ub97c \uc790\ub3d9\uc73c\ub85c \uacb0\ud569\ud558\uace0 \uc81c\uacf5\ud558\ub294 Redux \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \ucd94\uac00\ud558\uace0, \uae30\ubcf8\uc801\uc73c\ub85c redux-thunk\ub97c \ud3ec\ud568\ud558\uba70 Redux DevTools Extension\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://redux-toolkit.js.org/api/createreducer/"}),Object(o.b)("inlineCode",{parentName:"a"},"createReducer()"),"\uc720\ud2f8\ub9ac\ud2f0"),"\ub294 switch \ubb38\uc744 \uc791\uc131\ud558\uc9c0 \uc54a\uace0 reducer\ud568\uc218\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ub610\ud55c  ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/immerjs/immer"}),Object(o.b)("inlineCode",{parentName:"a"},"immer \ub77c\uc774\ube0c\ub7ec\ub9ac")),"\ub97c \uc0ac\uc6a9\ud558\uc5ec ",Object(o.b)("inlineCode",{parentName:"li"},"state.todos [3] .completed = true"),"\uc640 \uac19\uc740 \uc77c\ubc18\uc801\uc778 \ucf54\ub4dc\ub85c \ub354 \uac04\ub2e8\ud558\uac8c \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud558\uba74\uc11c \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://redux-toolkit.js.org/api/createaction/"}),Object(o.b)("inlineCode",{parentName:"a"},"createAction()")," \uc720\ud2f8\ub9ac\ud2f0"),"\ub294 \uc8fc\uc5b4\uc9c4 action type\uc5d0 \ub530\ub77c action create\ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ud568\uc218 \uc790\uccb4\uc5d0",Object(o.b)("inlineCode",{parentName:"li"},"toString()"),"\uc774 \uc815\uc758\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \ubcc4\ub3c4\uc758 \uc0c1\uc218\ub97c \uc120\uc5b8\ud560 \ud544\uc694 \uc5c6\uc774 \ud568\uc218 \uc774\ub984\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://redux-toolkit.js.org/api/createslice/"}),Object(o.b)("inlineCode",{parentName:"a"},"createSlice()")," \ud568\uc218")," \ub9ac\ub4c0\uc11c \ud568\uc218 \uc138\ud2b8\ub85c\uc11c, \uc2ac\ub77c\uc774\uc2a4 \uc774\ub984 \ubc0f \ucd08\uae30 \uc0c1\ud0dc \uac12\uc744 \ubc1b\uc544\uc11c \uc790\ub3d9\uc73c\ub85c slice reducer\uc640 action creator, action types\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://redux-toolkit.js.org/api/createselector/"}),Object(o.b)("inlineCode",{parentName:"a"},"createSelector()"),"\uc720\ud2f8\ub9ac\ud2f0"),"\ub294 ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/reselect"}),"Reselect")," \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uae30 \uc27d\ub3c4\ub85d re-export\ud55c \uac83\uc785\ub2c8\ub2e4.")),Object(o.b)("h2",{id:"\uc124\uce58"},"\uc124\uce58"),Object(o.b)("h3",{id:"create-react-app\uacfc-\ud568\uaed8-\uc0ac\uc6a9"},"Create React App\uacfc \ud568\uaed8 \uc0ac\uc6a9"),Object(o.b)("p",null,"React \ubc0f Redux Toolkit\uc73c\ub85c \uc0c8 \uc571\uc744 \uc2dc\uc791\ud558\ub294 \uad8c\uc7a5 \ubc29\ubc95\uc740 React \uad6c\uc131 \uc694\uc18c\uc640 React Redux\uc758 \ud1b5\ud569\uc744 \ud65c\uc6a9\ud558\ub294 React \uc571 \uc791\uc131\uc744\uc704\ud55c \uacf5\uc2dd Redux + JS \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template redux\n")),Object(o.b)("h3",{id:"\uae30\uc874-\ud504\ub85c\uc81d\ud2b8\uc5d0-\uc0ac\uc6a9"},"\uae30\uc874 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0ac\uc6a9"),Object(o.b)("p",null,"Redux Toolkit\uc740 \ubaa8\ub4c8 \ubc88\ub4e4\ub7ec \ub610\ub294 \ub178\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 NPM \ud328\ud0a4\uc9c0\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# NPM\nnpm install @reduxjs/toolkit\n\n# Yarn\nyarn add @reduxjs/toolkit\n")),Object(o.b)("h3",{id:"\ub3c4\uc6c0-\ubc1b\uae30-\uc81c\uc548"},"\ub3c4\uc6c0 \ubc1b\uae30, \uc81c\uc548"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.reactiflux.com/"}),"Reactiflux Discord \ucee4\ubba4\ub2c8\ud2f0"),"\uc758 ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://discordapp.com/invite/0ZcbPKXt5bZ6au5t"}),"#redux \ucc44\ub110")),"\uc740 Redux \ud559\uc2b5 \ubc0f \uc0ac\uc6a9\uacfc \uad00\ub828\ub41c \ubaa8\ub4e0 \uc9c8\ubb38\uc5d0 \ub300\ud55c \uacf5\uc2dd \uc0ac\uc774\ud2b8 \uc785\ub2c8\ub2e4. Reactiflux\ub294 \uc5b4\uc6b8\ub9ac\uace0, \uc9c8\ubb38\ud558\uace0, \ubc30\uc6b0\uae30\uc5d0 \uc88b\uc740 \uacf3\uc785\ub2c8\ub2e4."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/"}),"Stack Overflow"),"\uc5d0\uc11c ",Object(o.b)("strong",{parentName:"p"},"#redux \ud0dc\uadf8"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c8\ubb38\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."))}l.isMDXComponent=!0},118:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},f=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),b=n,d=f["".concat(c,".").concat(b)]||f[b]||s[b]||a;return r?o.a.createElement(d,u({ref:t},l,{components:r})):o.a.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},119:function(e,t,r){"use strict";e.exports=r(120)},120:function(e,t,r){"use strict";var n=r(121),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.concurrent_mode"):60111,b=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function j(e,t,r,n,o,a,c,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=[r,n,o,a,c,u],l=0;(e=Error(t.replace(/%s/g,(function(){return i[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function h(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);j(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function k(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=x.prototype;var S=w.prototype=new k;S.constructor=w,n(S,x.prototype),S.isPureReactComponent=!0;var R={current:null},N={current:null},C=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n=void 0,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:N.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var $=/\/+/g,T=[];function D(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function q(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var i=!1;if(null===t)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case c:i=!0}}if(i)return n(o,t,""===r?"."+A(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var p=r+A(u=t[l],l);i+=e(u,p,n,o)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=O&&t[O]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),l=0;!(u=t.next()).done;)i+=e(u=u.value,p=r+A(u,l++),n,o);else"object"===u&&h("31","[object Object]"===(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return i}(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace($,"$&/")+"/"),q(e,U,t=D(t,a,n,o)),M(t)}function L(){var e=R.current;return null===e&&h("321"),e}var Q={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;q(e,I,t=D(null,null,t,r)),M(t)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return E(e)||h("143"),e}},createRef:function(){return{current:null}},Component:x,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,r){return L().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,r){return L().useReducer(e,t,r)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:u,StrictMode:i,Suspense:d,createElement:_,cloneElement:function(e,t,r){null==e&&h("267",e);var o=void 0,c=n({},e.props),u=e.key,i=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,l=N.current),void 0!==t.key&&(u=""+t.key);var p=void 0;for(o in e.type&&e.type.defaultProps&&(p=e.type.defaultProps),t)C.call(t,o)&&!P.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==p?p[o]:t[o])}if(1===(o=arguments.length-2))c.children=r;else if(1<o){p=Array(o);for(var f=0;f<o;f++)p[f]=arguments[f+2];c.children=p}return{$$typeof:a,type:e.type,key:u,ref:i,props:c,_owner:l}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.8.6",unstable_ConcurrentMode:s,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:R,ReactCurrentOwner:N,assign:n}},V={default:Q},X=V&&Q||V;e.exports=X.default||X},121:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,i=c(e),l=1;l<arguments.length;l++){for(var p in r=Object(arguments[l]))o.call(r,p)&&(i[p]=r[p]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(i[u[f]]=r[u[f]])}}return i}}}]);