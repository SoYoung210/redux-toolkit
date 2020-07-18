/*! For license information please see 86912ab7.be5ea69b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),c=n(6),o=(n(119),n(118)),a={id:"basic-tutorial",title:"\uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc",sidebar_label:"\uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc",hide_title:!0},i={id:"tutorials/basic-tutorial",title:"\uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc",description:"# \uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc: Redux Toolkit \uc18c\uac1c",source:"@site/../docs/tutorials/basic-tutorial.md",permalink:"/redux-toolkit/tutorials/basic-tutorial",sidebar_label:"\uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc",sidebar:"docs",previous:{title:"Quick Start",permalink:"/redux-toolkit/introduction/quick-start"},next:{title:"\uc911\uae09 \ud29c\ud1a0\ub9ac\uc5bc",permalink:"/redux-toolkit/tutorials/intermediate-tutorial"}},u=[{value:"Introduction: Counter Application",id:"introduction-counter-application",children:[{value:"Redux &quot;Counter-Vanilla&quot; \uc608\uc81c",id:"redux-counter-vanilla-\uc608\uc81c",children:[]},{value:"\uc870\uae08 \ub354 \uc77c\ubc18\uc801\uc778 \uce74\uc6b4\ud130 \uc608\uc81c",id:"\uc870\uae08-\ub354-\uc77c\ubc18\uc801\uc778-\uce74\uc6b4\ud130-\uc608\uc81c",children:[]},{value:"Introducing: <code>configureStore</code>",id:"introducing-configurestore",children:[]},{value:"Introducing: <code>createAction</code>",id:"introducing-createaction",children:[]},{value:"Introducing: <code>createReducer</code>",id:"introducing-createreducer",children:[]},{value:"Introducing: <code>createSlice</code>",id:"introducing-createslice",children:[]}]},{value:"Summary",id:"summary",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\uae30\ubcf8-\ud29c\ud1a0\ub9ac\uc5bc-redux-toolkit-\uc18c\uac1c"},"\uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc: Redux Toolkit \uc18c\uac1c"),Object(o.b)("p",null,'Redux Toolkit\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4 ! \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 Redux Toolkit\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uae30\ubcf8\uc801\uc778 \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc18c\uac1c\ud569\ub2c8\ub2e4. (\uc904\uc5ec\uc11c "RTK"\ub77c\uace0 \uc54c\ub824\uc9c4)'),Object(o.b)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 React\uc640 Redux\uc5d0 \uc774\ubbf8 \uc775\uc219\ud558\ub2e4\ub294 \uac83\uc744 \uc804\uc81c\ub85c \ud569\ub2c8\ub2e4. \ub9cc\uc57d \uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org"}),"Redux docs"),"\uc640 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-redux.js.org"}),"React-Redux docs"),'\ub97c \uba3c\uc800 \uc77d\uc5b4\ubcf4\uc138\uc694. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 RTK\uc0ac\uc6a9\uc774 "\uc77c\ubc18\uc801\uc778" Redux \uc0ac\uc6a9\ubc95\uacfc \uc5b4\ub5bb\uac8c \ub2e4\ub978\uc9c0 \uc18c\uac1c\ud569\ub2c8\ub2e4.'),Object(o.b)("h2",{id:"introduction-counter-application"},"Introduction: Counter Application"),Object(o.b)("p",null,"\uac04\ub2e8\ud55c Redux \uc608\uc81c(counter)\ub97c \uba3c\uc800 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),Object(o.b)("h3",{id:"redux-counter-vanilla-\uc608\uc81c"},'Redux "Counter-Vanilla" \uc608\uc81c'),Object(o.b)("p",null,"Redux \ubb38\uc11c\uc5d0 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/introduction/examples#counter-vanilla"}),'"counter-vanilla" \uc608\uc81c'),"\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc704 \uc608\uc81c\uc5d0\uc11c\ub294\uc22b\uc790\ub97c \uc800\uc7a5\ud558\ub294 reducer\ub85c \uac04\ub2e8\ud55c Redux store\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function counter(state, action) {\n  if (typeof state === 'undefined') {\n    return 0\n  }\n\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1\n    case 'DECREMENT':\n      return state - 1\n    default:\n      return state\n  }\n}\n\nvar store = Redux.createStore(counter)\n\ndocument.getElementById('increment').addEventListener('click', function() {\n  store.dispatch({ type: 'INCREMENT' })\n})\n")),Object(o.b)("p",null,"\uc704 \ucf54\ub4dc\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"counter"),"\ub77c\ub294 reducer\ub97c \uc0dd\uc131\ud558\uace0 \uae30\ubcf8 \uc0c1\ud0dc\uac12\uc744 0\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4. ",Object(o.b)("inlineCode",{parentName:"p"},'"INCREMENT"'),"\uc640 ",Object(o.b)("inlineCode",{parentName:"p"},'"DECREMENT"')," \uc561\uc158\uc744 \uc815\uc758\ud558\uace0 \ubc84\ud2bc\uc774 \ud074\ub9ad\ub418\uc5c8\uc744 \ub54c ",Object(o.b)("inlineCode",{parentName:"p"},'"INCREMENT"')," \uc561\uc158\uc744 dispatch\ud569\ub2c8\ub2e4."),Object(o.b)("h3",{id:"\uc870\uae08-\ub354-\uc77c\ubc18\uc801\uc778-\uce74\uc6b4\ud130-\uc608\uc81c"},"\uc870\uae08 \ub354 \uc77c\ubc18\uc801\uc778 \uce74\uc6b4\ud130 \uc608\uc81c"),Object(o.b)("p",null,"\uc704 \uc608\uc81c\ub294 \ub2e8\uc21c\ud558\uc9c0\ub9cc \ub2e4\uc18c \ube44\ud604\uc2e4\uc801\uc785\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 redux\uc571\uc740 \uc815\uc758\ub418\uc9c0 \uc54a\uc740 \ud568\uc218 \ub9e4\uac1c \ubcc0\uc218\uc5d0 \ub300\ud55c \uae30\ubcf8 \uc778\uc790\ub97c \ud3ec\ud568\ud558\uc5ec ES6\uad6c\ubb38\uc744 \ud65c\uc6a9\ud558\uc5ec \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ucf54\ub4dc\uc5d0\uc11c \uc9c1\uc811 \uc561\uc158 \uac1d\uccb4\ub97c \uc791\uc131\ud558\ub294 \ub300\uc2e0 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/basics/actions#action-creators"}),'"action creator" \ud568\uc218'),"\ub97c \uc791\uc131\ud558\uace0 \uc561\uc158 \ud0c0\uc785\uc744 \uc791\uc131\ud558\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4."),Object(o.b)("p",null,"\uc774\ub7ec\ud55c \uc811\uadfc\ubc29\uc2dd\uc73c\ub85c \uc704 \uc608\uc81c\ub97c \ub2e4\uc2dc \uc791\uc131\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const INCREMENT = 'INCREMENT'\nconst DECREMENT = 'DECREMENT'\n\nfunction increment() {\n  return { type: INCREMENT }\n}\n\nfunction decrement() {\n  return { type: DECREMENT }\n}\n\nfunction counter(state = 0, action) {\n  switch (action.type) {\n    case INCREMENT:\n      return state + 1\n    case DECREMENT:\n      return state - 1\n    default:\n      return state\n  }\n}\n\nconst store = Redux.createStore(counter)\n\ndocument.getElementById('increment').addEventListener('click', () => {\n  store.dispatch(increment())\n})\n")),Object(o.b)("p",null,"\uc608\uc81c\uac00 \uc791\uae30\ub54c\ubb38\uc5d0 \ucf54\ub4dc \ud615\ud0dc\uc5d0 \ud070 \ucc28\uc774\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\ubcf8 \uc778\uc790\ub97c \uc124\uc815\ud574\uc90c\uc73c\ub85c\uc368 \uc55e\uc120 \uc608\uc81c\ubcf4\ub2e4 \ucf54\ub4dc \uc591\uc744 \uc904\uc600\uc9c0\ub9cc action \uc0dd\uc131\uc790 \ud568\uc218\ub97c \uc801\uc5b4\uc8fc\ub294 \uc791\uc5c5\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0, ",Object(o.b)("inlineCode",{parentName:"p"},"const INCREMENT = 'INCREMENT'"),"\ub77c\uace0 \uc801\ub294 \uc911\ubcf5\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.:)"),Object(o.b)("p",null,"\ub610\ud55c, switch\uad6c\ubb38\uc774 \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc744 \uad34\ub86d\uac8c \ud569\ub2c8\ub2e4. \uc77c\uc885\uc758 lookup \ud14c\uc774\ube14\ub85c \ubc14\uafc0 \uc218 \uc788\ub2e4\uba74 \uc88b\uc744 \uac83\uc785\ub2c8\ub2e4."),Object(o.b)("h3",{id:"introducing-configurestore"},"Introducing: ",Object(o.b)("inlineCode",{parentName:"h3"},"configureStore")),Object(o.b)("p",null,"Redux Toolkit\uc5d0\ub294 Redux\ucf54\ub4dc\ub97c \ub2e8\uc21c\ud654\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uba87 \uac00\uc9c0 \uae30\ub2a5\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \uae30\ub2a5\uc740 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/configureStore"}),Object(o.b)("inlineCode",{parentName:"a"},"configureStore")),"\uc785\ub2c8\ub2e4."),Object(o.b)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c ",Object(o.b)("inlineCode",{parentName:"p"},"createStore()"),"\ub97c \ud638\ucd9c\ud558\uace0 root reducer\ud568\uc218\ub97c \uc804\ub2ec\ud558\uc5ec redux store\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4. Redux Toolkit\uc740 ",Object(o.b)("inlineCode",{parentName:"p"},"createStore()"),"\ub97c \ub798\ud551\ud55c ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore()")," \ud568\uc218\ub97c \uc81c\uacf5\ud558\uace0 \uc774 \ud568\uc218\ub294 \uae30\ubcf8\uc801\uc73c\ub85c createStore\uc640 \ub3d9\uc77c\ud55c \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore"),"\ub294 store\ub97c \uc0dd\uc131\ud558\ub294 \ub2e8\uacc4\uc5d0\uc11c \uba87 \uac00\uc9c0 \uc720\uc6a9\ud55c \uac1c\ubc1c \ub3c4\uad6c\uac00 \uc124\uc815\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4."),Object(o.b)("p",null,"\uae30\uc874 ",Object(o.b)("inlineCode",{parentName:"p"},"createStore"),"\uc0ac\uc6a9\uc744 ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore"),"\ub85c \uc27d\uac8c \ubc14\uafc0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore"),"\ud568\uc218\ub294 \uc5ec\ub7ec \uac1c\uc758 \uc778\uc790 \ub300\uc2e0 \uc774\ub984\uc774 \uc9c0\uc815\ub41c \ud558\ub098\uc758 object\ub97c \uc778\uc790\ub85c \ubc1b\uc73c\ubbc0\ub85c, reducer\ud568\uc218\ub97c ",Object(o.b)("inlineCode",{parentName:"p"},"reducer"),"\ub77c\ub294 \uc774\ub984\uc73c\ub85c \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Before:\nconst store = createStore(counter)\n\n// After:\nconst store = configureStore({\n  reducer: counter\n})\n")),Object(o.b)("p",null,"\uc544\ub9c8 \ud06c\uac8c \ub2e4\ub978\uac83 \ucc98\ub7fc \ubcf4\uc774\uc9c0\ub294 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore"),"\ub97c \ud1b5\ud574 \uc0dd\uc131 \ub41c store\ub294 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zalmoxisus/redux-devtools-extension"}),"Redux DevTools Extension"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec dispatch\ub41c action\uacfc history \uadf8\ub9ac\uace0 state\ubcc0\uacbd\uc0ac\ud56d\ub4e4\uc744 \uc27d\uac8c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("p",null,"\uadf8\ub9ac\uace0 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/getDefaultMiddleware"}),"Redux middleware\uac00 \uae30\ubcf8\uc801\uc73c\ub85c \ud3ec\ud568"),"\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub0b4\uc6a9\uc740 \ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc790\uc138\ud558\uac8c \uc0b4\ud3b4\ubd05\ub2c8\ub2e4."),Object(o.b)("h3",{id:"introducing-createaction"},"Introducing: ",Object(o.b)("inlineCode",{parentName:"h3"},"createAction")),Object(o.b)("p",null,"\ub2e4\uc74c\uc73c\ub85c, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/createAction"}),Object(o.b)("inlineCode",{parentName:"a"},"createAction")),"\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createAction"),'\uc740 \uc561\uc158 \ud0c0\uc785 \ubb38\uc790\uc5f4\uc744 \uc778\uc790\ub85c \ubc1b\uace0, \ud574\ub2f9 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub294 \uc561\uc158 \uc0dd\uc131\uc790\ud568\uc218\ub97c \ubc18\ud654\ud569\ub2c8\ub2e4. (\uc0ac\uc2e4 \uc774 \ud568\uc218\uc758 \uc774\ub984\uc774 \uc815\ud655\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. - \uc6b0\ub9ac\ub294 "\uc561\uc158 \uac1d\uccb4"\uac00 \uc544\ub2cc "\uc561\uc158 \uc0dd\uc131\uc790 \ud568\uc218"\ub97c \uc0dd\uc131\ud558\uace0 \uc788\uc9c0\ub9cc \uc774 \uc774\ub984\uc774 ',Object(o.b)("inlineCode",{parentName:"p"},"createActionCreator"),"\uc774\ub984\ubcf4\ub2e4 \uc9e7\uace0 \uae30\uc5b5\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4.) \uc544\ub798 \ub450 \uc608\uc81c\ub294 \ub3d9\uc77c\ud569\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// \uae30\uc874: \uc561\uc158 type\uacfc \uc0dd\uc131\ud568\uc218\ub97c \ubaa8\ub450 \uc791\uc131\nconst INCREMENT = 'INCREMENT'\n\nfunction incrementOriginal() {\n  return { type: INCREMENT }\n}\n\nconsole.log(incrementOriginal())\n// {type: \"INCREMENT\"}\n\n// `createAction` \uc0ac\uc6a9:\nconst incrementNew = createAction('INCREMENT')\n\nconsole.log(incrementNew())\n// {type: \"INCREMENT\"}\n")),Object(o.b)("p",null,"reducer\uc5d0\uc11c \uc561\uc158 type\uc744 \ucc38\uc870\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c\uc694? ",Object(o.b)("inlineCode",{parentName:"p"},"createAction"),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uc774 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8\ub294, \uc561\uc158 \uc0dd\uc131\uc790\uc758 ",Object(o.b)("inlineCode",{parentName:"p"},"toString()"),"\uba54\uc18c\ub4dc\uac00 \uc7ac\uc815\uc758\ub418\uc5b4\uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\ub97c \uc774\uc6a9\ud558\uba74 \uc561\uc158 type \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \ub450 \ubc88\uc7ac\ub294, ",Object(o.b)("inlineCode",{parentName:"p"},".type"),"\uc744 \uc774\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const increment = createAction(\'INCREMENT\')\n\nconsole.log(increment.toString())\n// "INCREMENT"\n\nconsole.log(increment.type)\n// "INCREMENT"\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createAction"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774\uc804 counter\uc608\uc81c\ub97c \ub2e8\uc21c\ud654 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const increment = createAction('INCREMENT')\nconst decrement = createAction('DECREMENT')\n\nfunction counter(state = 0, action) {\n  switch (action.type) {\n    case increment.type:\n      return state + 1\n    case decrement.type:\n      return state - 1\n    default:\n      return state\n  }\n}\n\nconst store = Redux.createStore(counter)\n\ndocument.getElementById('increment').addEventListener('click', () => {\n  store.dispatch(increment())\n})\n")),Object(o.b)("p",null,"\ucf54\ub4dc\uc591\uc774 \uc904\uc5b4\ub4e4\uc5c8\uace0, ",Object(o.b)("inlineCode",{parentName:"p"},"INCREMENT"),"\ub77c\ub294 \ub2e8\uc5b4\uac00 \uc911\ubcf5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(o.b)("h3",{id:"introducing-createreducer"},"Introducing: ",Object(o.b)("inlineCode",{parentName:"h3"},"createReducer")),Object(o.b)("p",null,"\uc774\uc81c reducer\ud568\uc218\ub97c \uc0b4\ud3b4 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. ",Object(o.b)("inlineCode",{parentName:"p"},"if"),"\ubb38\uacfc \ubc18\ubcf5\ubb38\uc744 \ud3ec\ud568\ud558\uc5ec reducer\uc5d0\uc11c \uc6d0\ud558\ub294 \uc870\uac74 \ub17c\ub9ac\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc, \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \ubc29\ubc95\uc740 ",Object(o.b)("inlineCode",{parentName:"p"},"action.type"),"\ud544\ub4dc\ub97c \ud655\uc778\ud558\uace0 \uac01 \uc720\ud615\uc5d0 \ub300\ud574 \uc801\uc808\ud55c \ub85c\uc9c1\uc744 \uc218\ud589\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. reducer\ub294 \ucd08\uae30 \uc0c1\ud0dc\uac12\uc744 \uc81c\uacf5\ud558\uace0, \ud604\uc7ac \uc561\uc158\uacfc \uad00\uacc4\uc5c6\ub294 \uc0c1\ud0dc\ub294 \uadf8\ub300\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4."),Object(o.b)("p",null,'Redux Toolkit\uc5d0\ub294 " lookup \ud14c\uc774\ube14"\uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\uc5ec reducer\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub294 ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/createReducer"}),Object(o.b)("inlineCode",{parentName:"a"},"createReducer")," \ud568\uc218"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uac1d\uccb4\uc758 \uac01 \ud0a4\ub294 redux\uc758 \uc561\uc158 type\ubb38\uc790\uc5f4\uc774\uba70 \uac12\uc740 reducer\ud568\uc218\uc785\ub2c8\ub2e4. \uae30\uc874 ",Object(o.b)("inlineCode",{parentName:"p"},"counter"),"\uae30\ub2a5 \uc815\uc758\ub97c \uc774 \uae30\ub2a5\uc744 \ud1b5\ud574 \ub2e4\uc2dc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc561\uc158 type \ubb38\uc790\uc5f4\uc744 \ud0a4\ub85c \uc0ac\uc6a9\ud574\uc57c \ud558\ubbc0\ub85c ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://javascript.info/object#computed-properties"}),'ES6 object "computed \uc18d\uc131" \uad6c\ubb38'),"\uc744 \uc0ac\uc6a9\ud558\uc5ec type\ubb38\uc790\uc5f4 \ubcc0\uc218\ub85c \ud0a4\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const increment = createAction('INCREMENT')\nconst decrement = createAction('DECREMENT')\n\nconst counter = createReducer(0, {\n  [increment.type]: state => state + 1,\n  [decrement.type]: state => state - 1\n})\n")),Object(o.b)("p",null,"\ub610\ub294, computed \uc18d\uc131 \uad6c\ubb38\uc740 \ub0b4\ubd80\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ubcc0\uc218\uc5d0 \ub300\ud574 ",Object(o.b)("inlineCode",{parentName:"p"},"toString()"),"\uc744 \ud638\ucd9c\ud558\ubbc0\ub85c ",Object(o.b)("inlineCode",{parentName:"p"},".type"),"\ud544\ub4dc\uc5c6\uc774 \uc9c1\uc811 \uc561\uc158 \uc0dd\uc131\uc790 \ud568\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const counter = createReducer(0, {\n  [increment]: state => state + 1,\n  [decrement]: state => state - 1\n})\n")),Object(o.b)("p",null,"\uc9c0\uae08\uae4c\uc9c0 \uacfc\uc815\uc5d0 \ub300\ud55c \uc804\uccb4 \ucf54\ub4dc\ub97c \ubcf4\uace0 \uc2f6\ub2e4\uba74 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/counter-vanilla-redux-toolkit-sjouq"}),Object(o.b)("inlineCode",{parentName:"a"},"createAction"),"\uacfc ",Object(o.b)("inlineCode",{parentName:"a"},"createReducer")," \uc608\uc2dc\ub97c \ubcf4\uc5ec\uc8fc\ub294 \uc774 CodeSandbox"),"\ub97c \ucc38\uace0\ud558\uc138\uc694."),Object(o.b)("h3",{id:"introducing-createslice"},"Introducing: ",Object(o.b)("inlineCode",{parentName:"h3"},"createSlice")),Object(o.b)("p",null,"\uc774 \uc2dc\uc810\uc5d0\uc11c counter\uc608\uc81c\uac00 \uc5b4\ub5bb\uac8c \ubcf4\uc5ec\uc9c0\ub294\uc9c0 \uc0b4\ud3b4 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const increment = createAction('INCREMENT')\nconst decrement = createAction('DECREMENT')\n\nconst counter = createReducer(0, {\n  [increment]: state => state + 1,\n  [decrement]: state => state - 1\n})\n\nconst store = configureStore({\n  reducer: counter\n})\n\ndocument.getElementById('increment').addEventListener('click', () => {\n  store.dispatch(increment())\n})\n")),Object(o.b)("p",null,"\uadf8\ub807\uac8c \ub098\uc058\uc9c0 \uc54a\uc9c0\ub9cc, \uc6b0\ub9ac\ub294 \ud55c \uac00\uc9c0 \ud070 \ubcc0\ud654\ub97c \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc561\uc158 \uc0dd\uc131 \ud568\uc218\ub97c \ubcc4\ub3c4\ub85c \uc0dd\uc131\ud558\ub098 \uc561\uc158 \ud0c0\uc785\ubb38\uc790\uc5f4\uc744 \uc801\uc5b4\uc8fc\uc5b4\uc57c \ud558\ub294 \uc774\uc720\ub294 \ubb34\uc5c7\uc77c\uae4c\uc694? \uac00\uc7a5 \uc911\uc694\ud55c \uac83\uc740 reducer\ud568\uc218 \ubd80\ubd84\uc785\ub2c8\ub2e4."),Object(o.b)("p",null,"\uc774 \uae30\ub2a5\uc5d0 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/createSlice"}),Object(o.b)("inlineCode",{parentName:"a"},"createSlice")," \ud568\uc218"),"\uac00 \ub4f1\uc7a5\ud569\ub2c8\ub2e4. \uac1d\uccb4\uc5d0 reducer\ud568\uc218\ub4e4\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\uace0 \uc774\ub97c \uae30\ubc18\uc73c\ub85c \uc561\uc158 \ud0c0\uc785\ubb38\uc790\uc5f4\uacfc \uc561\uc158 \uc0dd\uc131\uc790 \ud568\uc218\ub97c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createSlice"),"\ub294 \uc0dd\uc131\ub41c reducer\ud568\uc218\ub97c ",Object(o.b)("inlineCode",{parentName:"p"},"reducer"),'\ub77c\ub294 \ud544\ub4dc\ub97c \ud3ec\ud568\ud558\ub294 "slice"\uac1d\uccb4\uc640 ',Object(o.b)("inlineCode",{parentName:"p"},"actions"),"\ub77c\ub294 \uac1d\uccb4 \ub0b4\ubd80\uc5d0\uc11c \uc0dd\uc11c\ub41c \uc561\uc158 \uc0dd\uc131\ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),Object(o.b)("p",null,"\ub2e4\uc74c\uc740 ",Object(o.b)("inlineCode",{parentName:"p"},"createSlice"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uce74\uc6b4\ud130 \uc608\uc81c\uc785\ub2c8\ub2e4:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const counterSlice = createSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: {\n    increment: state => state + 1,\n    decrement: state => state - 1\n  }\n})\n\nconst store = configureStore({\n  reducer: counterSlice.reducer\n})\n\ndocument.getElementById('increment').addEventListener('click', () => {\n  store.dispatch(counterSlice.actions.increment())\n})\n")),Object(o.b)("p",null,"\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0, ES6 \ub514\uc2a4\ud2b8\ub7ed\ucc98\ub9c1 \uad6c\ubb38\uc744 \uc774\uc6a9\ud558\uc5ec \uc561\uc158 \uc0dd\uc131\uc790 \ud568\uc218\uc640 reducer\ub97c \ubcc0\uc218\ub85c \uc0ac\uc6a9\ud558\uae30\ub97c \uc6d0\ud560 \uac83\uc785\ub2c8\ub2e4:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { actions, reducer } = counterSlice\nconst { increment, decrement } = actions\n")),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"\ud568\uc218\ub4e4\uc758 \uae30\ub2a5\uc744 \uc694\uc57d\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"configureStore"),": redux\uc5d0\uc11c \uc81c\uacf5\ud558\ub358 ",Object(o.b)("inlineCode",{parentName:"li"},"createStore"),"\uc640 \uac19\uc740 store\ub97c \uc0dd\uc131\ud558\uc9c0\ub9cc \uc778\uc790\ub85c \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\uace0 Redux DevTools Extension\uc744 \uc790\ub3d9\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createAction"),": \uc561\uc158 \ud0c0\uc785\ubb38\uc790\uc5f4\uc744 \ubc1b\uc544 \uc774 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub294 \uc561\uc158 \uc0dd\uc131\uc790 \ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createReducer"),": \ucd08\uae30 \uc0c1\ud0dc\uac12\uacfc reducer\ud568\uc218\uc5d0 \ub300\ud55c lookup\ud14c\uc774\ube14\uc744 \ubc1b\uc544 \uc774\ub97c \ucc98\ub9ac\ud558\ub294 reducer\ub97c \uc791\uc131\ud569\ub2c8\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createSlice"),": reducer\uc774\ub984\uacfc \ud568\uc218\uac00 \ud3ec\ud568\ub41c \ucd08\uae30 \uc0c1\ud0dc\uc640 lookup\ud14c\uc774\ube14\uc744 \ubc1b\uc544 \uc561\uc158 \uc0dd\uc131\uc790 \ud568\uc218, \uc561\uc158 \uc720\ud615 \ubb38\uc790\uc5f4 \ubc0f \ub9ac\ub4c0\uc11c \ud568\uc218\ub97c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),Object(o.b)("p",null,'\uc704 \uae30\ub2a5\ub4e4\uc740 \ubaa8\ub450 Redux\uc758 \uc791\ub3d9 \ubc29\uc2dd\uc5d0 \ub300\ud574 \uc544\ubb34\uac83\ub3c4 \ubcc0\uacbd\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc5ec\uc804\ud788 redux store\ub97c \uc0dd\uc131\ud558\uace0 "\uc5b4\ub5a4 \uc77c\uc744 \ud558\ub294\uc9c0"\uc5d0 \ub300\ud55c \uc561\uc158 \uac1d\uccb4\ub97c dispatch\ud558\uace0 reducer\ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc5c5\ub370\uc774\ud2b8 \ub41c \uc0c1\ud0dc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ub610\ud55c Redux Toolkit\uae30\ub2a5\uc740 \ucf54\ub4dc\uc758 "redux store"\ubd80\ubd84\ub9cc \ucc98\ub9ac\ud558\ubbc0\ub85c UI\ub97c \ube4c\ub4dc\ud558\ub294\ub370 \uc5b4\ub5a4 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\ub4e0 \uad00\uacc4 \uc5c6\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc704 \uc608\uc81c\uc5d0\uc11c\ub294 "Vanilla JS"\uc744 \uc0ac\uc6a9\ud588\uc9c0\ub9cc, React, Angular, Vue \ub610\ub294 \ub2e4\ub978 UI\ub808\uc774\uc5b4\uc640 \ub3d9\uc77c\ud55c store\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),Object(o.b)("p",null,'\ub9c8\uc9c0\ub9c9\uc73c\ub85c, \uc608\uc81c\ub97c \uc0b4\ud3b4\ubcf4\uba74 \ube44\ub3d9\uae30 \ub85c\uc9c1\uc744 \uc791\uc131\ud55c \uacf3\uc5d0 "\uc99d\uac00 \ube44\ub3d9\uae30"\ubc84\ud2bc\uc774 \uc788\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4:'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"document.getElementById('incrementAsync').addEventListener('click', function() {\n  setTimeout(function() {\n    store.dispatch(increment())\n  }, 1000)\n})\n")),Object(o.b)("p",null,"\ube44\ub3d9\uae30 \ucc98\ub9ac\ub97c reducer\uc640 \ubcc4\ub3c4\ub85c \uc720\uc9c0\ud558\uace0 \uc788\uc73c\uba70 store\ub97c \uc5c5\ub370\uc774\ud2b8 \ud574\uc57c\ud560 \ub54c \uc561\uc158\uc744 dispatch\ud569\ub2c8\ub2e4. Redux Toolkit\uc740 \uc774 \uc810\uc5d0 \ub300\ud574 \uc544\ubb34\uac83\ub3c4 \ubcc0\uacbd\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."),Object(o.b)("p",null,"\uc804\uccb4 \uc608\uc81c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),Object(o.b)("iframe",{src:"https://codesandbox.io/embed/counter-vanilla-createslice-redux-toolkit-6gkxx?fontsize=14&hidenavigation=1&theme=dark&view=editor",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"counter-vanilla createSlice - Redux Toolkit",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(o.b)("p",null,"\uc774\uc81c \uac01 \ud568\uc218\uc758 \uae30\ubcf8 \uc0ac\ud56d\uc744 \uc54c\uc558\uc73c\ubbc0\ub85c \ub2e4\uc74c \ub2e8\uacc4\uc5d0\uc11c\ub294 ",Object(o.b)("em",{parentName:"p"},"\uc57d\uac04")," \ub354 \ud070 \uc608\uc81c\uc5d0\uc11c \ud574\ub2f9 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc791\ub3d9\ubc29\uc2dd\uc744 \ub354 \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud574\uc11c\ub294 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/tutorials/intermediate-tutorial"}),"Intermediate Tutorial"),"\uc5d0\uc11c \ub2e4\ub8e8\uaca0\uc2b5\ub2c8\ub2e4."))}p.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,f=b["".concat(a,".").concat(s)]||b[s]||d[s]||o;return n?c.a.createElement(f,i({ref:t},l,{components:n})):c.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";e.exports=n(120)},120:function(e,t,n){"use strict";var r=n(121),c="function"==typeof Symbol&&Symbol.for,o=c?Symbol.for("react.element"):60103,a=c?Symbol.for("react.portal"):60106,i=c?Symbol.for("react.fragment"):60107,u=c?Symbol.for("react.strict_mode"):60108,l=c?Symbol.for("react.profiler"):60114,p=c?Symbol.for("react.provider"):60109,b=c?Symbol.for("react.context"):60110,d=c?Symbol.for("react.concurrent_mode"):60111,s=c?Symbol.for("react.forward_ref"):60112,f=c?Symbol.for("react.suspense"):60113,m=c?Symbol.for("react.memo"):60115,j=c?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function y(e,t,n,r,c,o,a,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,c,o,a,i],l=0;(e=Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function N(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);y(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function E(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}function v(){}function C(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&N("85"),this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=E.prototype;var x=C.prototype=new v;x.constructor=C,r(x,E.prototype),x.isPureReactComponent=!0;var R={current:null},S={current:null},k=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r=void 0,c={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!w.hasOwnProperty(r)&&(c[r]=t[r]);var u=arguments.length-2;if(1===u)c.children=n;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];c.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===c[r]&&(c[r]=u[r]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:S.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var M=/\/+/g,_=[];function P(e,t,n,r){if(_.length){var c=_.pop();return c.result=e,c.keyPrefix=t,c.func=n,c.context=r,c.count=0,c}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,c){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case o:case a:u=!0}}if(u)return r(c,t,""===n?"."+$(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var p=n+$(i=t[l],l);u+=e(i,p,r,c)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=O&&t[O]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),l=0;!(i=t.next()).done;)u+=e(i=i.value,p=n+$(i,l++),r,c);else"object"===i&&N("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,c=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,r,n,(function(e){return e})):null!=e&&(I(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,c+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),r.push(e))}function B(e,t,n,r,c){var o="";null!=n&&(o=(""+n).replace(M,"$&/")+"/"),D(e,q,t=P(t,o,r,c)),A(t)}function U(){var e=R.current;return null===e&&N("321"),e}var V={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return B(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,L,t=P(null,null,t,n)),A(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return B(e,t,null,(function(e){return e})),t},only:function(e){return I(e)||N("143"),e}},createRef:function(){return{current:null}},Component:E,PureComponent:C,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:j,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:i,StrictMode:u,Suspense:f,createElement:T,cloneElement:function(e,t,n){null==e&&N("267",e);var c=void 0,a=r({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key);var p=void 0;for(c in e.type&&e.type.defaultProps&&(p=e.type.defaultProps),t)k.call(t,c)&&!w.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==p?p[c]:t[c])}if(1===(c=arguments.length-2))a.children=n;else if(1<c){p=Array(c);for(var b=0;b<c;b++)p[b]=arguments[b+2];a.children=p}return{$$typeof:o,type:e.type,key:i,ref:u,props:a,_owner:l}},createFactory:function(e){var t=T.bind(null,e);return t.type=e,t},isValidElement:I,version:"16.8.6",unstable_ConcurrentMode:d,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:R,ReactCurrentOwner:S,assign:r}},F={default:V},z=F&&V||F;e.exports=z.default||z},121:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(c){return!1}}()?Object.assign:function(e,t){for(var n,i,u=a(e),l=1;l<arguments.length;l++){for(var p in n=Object(arguments[l]))c.call(n,p)&&(u[p]=n[p]);if(r){i=r(n);for(var b=0;b<i.length;b++)o.call(n,i[b])&&(u[i[b]]=n[i[b]])}}return u}}}]);