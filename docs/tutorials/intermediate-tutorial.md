---
id: intermediate-tutorial
title: 중급 튜토리얼
sidebar_label: 중급 튜토리얼
hide_title: true
---

# 중급 튜토리얼: Redux Toolkit in Action

[기본 튜토리얼](./basic-tutorial.md)에서는 Redux Toolkit에 포함 된 주요 API의 기능과 간단한 예제를 다뤄보았고, React, NPM, Webpack등의 빌드 도구를 사용하지 않고 HTML 페이지의 일반 JS 스크립트 태그에서 Redux 및 RTK(Redux Toolkit)을 사용할 수 있다는 것을 알게 되었습니다.

이번 튜토리얼에서는 RTK를 React 앱에서 어떻게 사용해보는지 소개합니다. 구체적으로, [Redux "todos" 예제](https://redux.js.org/introduction/examples#todos)를 RTK로 구현해볼 것입니다.

이번 튜토리얼에서 다루게 될 개념들 입니다:

- "Redux"코드를 어떻게 RTK로 바꾸는지
- RTK를 React+Redux 앱에서 어떻게 사용하는지
- RTK의 강력한 기능 중 하나인 'Redux 코드를 어떻게 간결하게 만드는 방법'

또한, RTK에 국한된 것은 아니지만 React-Redux 코드를 개선할 수 있는 몇 가지 방법을 살펴보겠습니다.

이 튜토리얼에서 다루는 모든 코드는 [github.com/reduxjs/rtk-convert-todos-example](https://github.com/reduxjs/rtk-convert-todos-example)에서 확인하실 수 있습니다.
튜토리얼은 이 저장소의 커밋 히스토리를 따라가며 진행되고, 개별 커밋에 대한 링크는 다음과 같이 블록으로 강조 표시 됩니다.

> - Commit message here

## Redux Todos 예제 리뷰

[현재 "todos" 예제 코드](https://github.com/reduxjs/redux/tree/9c9a4d2a1c62c9dbddcbb05488f8bd77d24c81de/examples/todos/src)를 살펴보면 몇 가지 사항을 확인할 수 있습니다:

- [`todos` reducer 함수](https://github.com/reduxjs/redux/blob/9c9a4d2a1c62c9dbddcbb05488f8bd77d24c81de/examples/todos/src/reducers/todos.js)는 중첩된 JS 객체와 배열을 "수동으로" 복사하며 불변성을 관리하고 있습니다.
- [`actions` 파일](https://github.com/reduxjs/redux/blob/9c9a4d2a1c62c9dbddcbb05488f8bd77d24c81de/examples/todos/src/actions/index.js)에는 직접 작성한 액션 생성자 함수가 있으며 reducer파일과 action파일에서 중복으로 사용되는 액션 type문자열이 있습니다.
- 예제의 코드는 `actions` 와 `reducers`를 각각 별도의 파일로 가지고 있으며, 이를 ["폴더 별"로 분리하여](https://redux.js.org/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go)관리 합니다.
- React컴포넌트는 ["container/presentational" 패턴](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)으로 작성되며, 여기서 "presentational"컴포넌트는와 [Redux "container" 연결에 대한 정의는 다른 폴더에 있습니다.](https://github.com/reduxjs/redux/tree/9c9a4d2a1c62c9dbddcbb05488f8bd77d24c81de/examples/todos/src/containers)
- 일부 코드는 Redux "best practice"를 따르지 않습니다. 이 튜토리얼을 진행하면서 몇 가지 구체적인 예시를 살펴 보겠습니다.

이 예제는 작은 앱입니다. 이는 실제로 React와 Redux를 어떻게 함께 쓸 수 있는 지에 대한 기본사항을 설명하기 위한 것이며, 실제 프로덕션 앱에 적용시 이 튜토리얼의 방식으 "맞는 방법"으로 사용할 필요는 없습니다. 대부분의 개발자가 문서와 예제에서 볼 수 있는 패턴을 사용하는데, 이는 개선의 여지가 있습니다.

## 초기 단계

### Project에 Redux Toolkit 추가하기

todos예제는 Redux저장소에 있기 때문에 Redux "todos" 소스 코드를 새로운 Create-React-App 프로젝트에 복사하고 Prettier를 추가하여 코드의 형식이 일관되게 유지하도록 합니다. `/src`폴더에서 시작하는 "절대경로 import"를 사용할 수 있도록 하는 [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)파일도 있습니다.

> - [Initial commit](https://github.com/reduxjs/rtk-convert-todos-example/commit/a8e0a9a9d77b9dcd9e881079e7cca449084ca7b1).
> - [Add jsconfig.json to support absolute imports](https://github.com/reduxjs/rtk-convert-todos-example/commit/b866e205b9ebece84367f11d2faabc557bd08e23)

기본 튜토리얼에서는 Redux Toolkit을 개별 스크립트로 연결했습니다. 그러나 일반적인 앱에서는 RTK를 package dependency로 추가해야 합니다. 이는 NPM 또는 Yarn패키지 관리자를 사용하여 수행할 수 있습니다:

```bash
# NPM을 사용할 경우:
npm install @reduxjs/toolkit

# Yarn을 사용할 경우:
yarn add @reduxjs/toolkit
```

설치가 완료되면, `package.json` 파일과 "lock file"을 패키지 관리자에 추가하고 커밋해야 합니다.(NPM: `package-lock.json`, YARN: `yarn.lock`).

> - [Add Redux Toolkit](https://github.com/reduxjs/rtk-convert-todos-example/commit/c3f47aeaecf855561e4db9d452b928f1b8b6c016)

이 작업이 완료되면, 이제 코드를 작성할 수 있습니다.

### Store에서 `configureStore`를 사용하도록 수정

"카운터"예제와 마찬가지로 일반 Redux `createStore`기능을 RTK의 `configureStore`로 변경할 수 있습니다. 이 과정에서 Redux DevTools 확장 프로그램이 자동으로 설정됩니다.

이 과정에서의 변경은 간단합니다. `src/index.js`에서 `createStore`대신 `configureStore`를 사용하도록 수정하면 됩니다. `configureStore`는 옵션 객체를 정확한 key와 함께 넘겨야 하므로 `rootReducer`를 첫 번째 매개변수로 전달하는 대신 `reducer`라는 key의 value로 전달합니다.

> - [Convert store setup to use configureStore](https://github.com/reduxjs/rtk-convert-todos-example/commit/cdfc15edbd82beda9ef0521aa191574b6cc7695a)

```diff {3-4,9-12}
import React from "react";
import { render } from "react-dom";
-import { createStore } from "redux";
+import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";

- const store = createStore(rootReducer);
+ const store = configureStore({
+   reducer: rootReducer,
+});
```

**여전히 이전과 동일한 root reducer를 사용하고 있으며 Redux Store는변경 중입니다. 변경된 것은 Store를 생성하는 과정에서 개발이 편리하도록 도구(역주: Redux Dev Tools)가 자동으로 설정된 것 뿐입니다.**

[Redux DevTools 브라우저 확장프로그램](https://github.com/zalmoxisus/redux-devtools-extension)이 설치되어 있는 경우 개발자 모드에서 store의 현재 상태를 확인할 수 있습니다.

![Redux DevTools Extension screenshot showing initial state](/assets/tutorials/intermediate/int-tut-01-redux-devtools.png)

## Todo Slice만들기

todo app을 다시 만드는 첫 번째 단계는 todo 로직을 새로운 "slice"로 변환하는 것입니다.

### Slices 이해하기

현재, todos코드는 두 부분으로 나뉩니다. 리듀서 로직은 `reducers/todo.js`에 있고, action creator들은 `actions.index.js`에 있습니다. 더 규모가 큰 `constants/todo.js`와 같은 파일에서 액션type을 관리하고 두 곳에서 공통적으로 사용합니다.

RTK의 [`createReducer`](../api/createReducer.md)를 사용하면 해당 로직을 한 곳에서 관리할 수 있습니다. 내부적으로 `createReducer`와 `createAction`을 사용하므로 **대부분의 앱에서는 이 두 함수를 직접 사용할 필요 없이 `createSlice`만 사용하면 됩니다.**

'slice'가 무엇인지 궁금할 것입니다. 일반적인 Redux앱은 상태트리의 최상단에 JS객체를 가지고 있으며, 이 객체는  [`combineReducers` 함수](https://redux.js.org/api/combinereducers)에서 여러 reducer들을 하나로 결합한 "root reducer"입니다.**이 객체에서 key/value로 구분되는 object를 "slice"라고 하며, slice의 상태를 업데이트 하는 리듀서를 ["slice reducer"](https://redux.js.org/recipes/structuring-reducers/splitting-reducer-logic)라고 합니다.**
이 앱에서 루트 리듀서는 다음과 같습니다.:

```js
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})
```

따라서, `combineReducers`로 결합된 상태는 `{todos: [], visibilityFilter: "SHOW_ALL"}`와 같습니다. `state.todos`는 "slice"이고, `todos`reducer는 "slice reducer"입니다.

### 기존의 Todos Reducer

기존의 todos reducer는 다음과 같습니다:

```js
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos
```

위 경우 세 가지 케이스를 처리하고 있습니다.:

- 기존의 `state`배열을 복사하고 마지막에 새로운 아이템을 추가합니다.
- `state.map()`을 사용하여 기존 배열을 복사하여 할일 항목을 toggle처리하고 업데이트해야 하는 아이템을 복사 및 교체하고, 업데이트가 필요하지 않은 항목들은 그대로 반환합니다.
- 기존 상태를 반홚여 다른 모든 action에 응답합니다.

`[]`값으로 상태를 초기화하고 reducer를 default로 export합니다.

### Slice Reducer작성

위 작업을 `createSlice`로 더 간단하게 수행할 수 있습니다.

제일 먼저, `/features/todos/todosSlice.js`에 새 파일을 추가합니다. 폴더와 파일을 구성하는 방식은 중요하지 않지만, 대부분의 앱에서 ["feature folder" 접근방식](https://redux.js.org/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go)이 효과적입니다. 파일 이름은 개발자의 재량에 달려있지만, `someFeatureSlice.js`규칙이 합리적입니다.

이 파일에서는, 아래와 같은 로직을 추가하겠습니다.:

> - [Add an initial todos slice](https://github.com/reduxjs/rtk-convert-todos-example/commit/48ce059dbb0fce1b961631821534fbcb766d3471)

```js
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload
      state.push({ id, text, completed: false })
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer
```

#### `createSlice` 옵션

어떤 옵션들이 있는지 살펴봅니다.:

- `createSlice`는 다음 옵션과 함께 option 객체를 인자로 사용합니다. takes an options object as its argument, with these options:
  - `name`: 생성 된 action types를 생성하기 위해 사용되는 prefix
  - `initialState`: reducer의 초기 상태
  - `reducers`: key는 action type문자열이 되고 함수는 해당 액션이 dispatch될때 실행될 reducer입니다.(`switch-case`문과 비슷해서 ["case reducers"](https://redux.js.org/recipes/structuring-reducers/splitting-reducer-logic)라고도 합니다.)

따라서, `"todos/addTodo"`액션이 dispatch될 때 `addTodo`reducer가 수행됩니다.

`default`핸들러는 없습니다. `createSlice`에 의해 생성된 리듀서는 현재 dispatch된 액션이 아닌 다른 액션들에 대해 자동으로 현재 상태를 반환하도록 처리되어 있기 때문에, 직접 핸들링해주지 않아도 됩니다.

#### "Mutable" 업데이트 로직

`addTodo`리듀서는 `state.push()`를 호출합니다. 일반적으로 이런 방식은 [`array.push()`함수가 기존 배열을 변형하기 때문에](https://doesitmutate.xyz/#push) 좋은 방법이 아니고, **[Redux에서는 reducers에서 절대 state를 직접 변경하지 않아야 합니다!](https://redux.js.org/basics/reducers#handling-actions)**.

그러나, `createSlice`와 `createReducer`는 [Immer library의 `produce`](https://github.com/immerjs/immer)로 래핑합니다. 이것은 이 함수를 사용하는 개발자는 리듀서 내부의 상태를 "변형하는"코드를 작성할수 있으며, Immer는 상태를 안전하게 불변하게 다룰수 있도록 처리해줍니다.

마찬가지로, `toggleTodo`는 배열을 순회하거나 일치하는 todo객체를 복사하지 않습니다. 대신, 일치하는 todo객체를 찾은 다음 `todo.completed = !todo.completed`코드로 변경합니다. Immer는 이 객체가 업데이트 된 것을 감지하고 todo객체와 이를 포함하는 배열을 모두 복사합니다.

일반적인 불변성 관리는 추가 복사가 모두 발생하여 실제로 수행하려는 작업을 모호하게 하는 경향도 있습니다. 의도가 조금더 명확히 드러나야 합니다: 배열 끝에 항목을 추가하고 todo항목의 필드를 수정하는 것.

#### Slice함수 내보내기

`createSlice`는 다음과 같은 객체를 반환합니다.:

```js
{
  name: "todos",
  reducer: (state, action) => newState,
  actions: {
    addTodo: (payload) => ({type: "todos/addTodo", payload}),
    toggleTodo: (payload) => ({type: "todos/toggleTodo", payload})
  },
  caseReducers: {
    addTodo: (state, action) => newState,
    toggleTodo: (state, action) => newState,
  }
}
```

**각 리듀서마다 적절한 action생성자와 action type을 자동으로 생성하므로 직접 작성하지 않아도 됩니다!**

액션 크리에이터와 reducer를 다른 파일에 사용하기 위해 slice object를 export해야 합니다. ["ducks" 패턴](https://github.com/erikras/ducks-modular-redux)이라고 불리는 Redex 커뮤니티 코드 규칙을 사용할 수 있습니다. 간단히 말해서, 모든 액션 크리에이터와 reducer를 한 파일에 넣고, 액션 크리에이터와 reducer를 export 해야 합니다.

`createSlice` 덕분에, 우리는 이미 액션 액션 크리에이터와 reducer를 한 파일에 가지고 있습니다. 우리가 해야 할 일은 그것들을 별도로 export하는 것이고, todos 슬라이스 파일은 이제 일반적인 "ducks" 패턴과 일치한다.

#### Action Payloads와 함께 사용하기

잠시 reducer 로직을 다시 살펴보겠습니다.

기본적으로 RTK "createAction" 함수는 "payload"라는 하나의 인수만 허용합니다.

`action.payload`는 그 자체로 특별한 것이 없습니다. Redux는 그 이름을 모르거나 신경 쓰지 않습니다. 그러나 "payload"라는 이름은 ["Flux Standard Actions"](https://github.com/redux-utilities/flux-standard-action)라는 또 다른 Redux 커뮤니티 컨벤션에서 유래되었습니다.

Action에는 일반적으로 "type" 필드와 함께 일부 추가 데이터가 포함되어야 합니다. `addTodo`의 원래 Redux 코드에는 `{type, id, text}`처럼 보이는 action 객체가 있습니다. **FSA 규약에 따르면 임의의 이름을 가진 데이터 필드를 action 객체에 직접 포함하기보다는 항상 'payload'**라는 필드 안에 데이터를 넣어야 합니다.

각 액션 유형에 대해 'payload'를 무엇으로 하던, 그리고 어떤 코드를 dispatch하던 그 기대에 부합하는 값을 전달해야 한다고 생각하는지를 결정하는 것은 reducer에 달려 있습니다. 하나의 값만 필요한 경우 이 값을 전체 "payload" 값으로 직접 사용할 수 있습니다. 일반적으로 여러 값을 전달해야 합니다. 이 경우 'payload'는 해당 값을 포함하는 객체여야 합니다.

우리의 todos 슬라이스에서 `addtodo`는 id와 text라는 두 개의 필드가 필요하기 때문에 우리는 그것들을 payload로 객체 안에 넣었습니다. `toggleTodo`의 경우, 우리가 필요한 유일한 값은 변경되는 할일의`id`입니다. 우리는 '페이로드'를 만들 수는 있지만 항상 '페이로드'를 객체로 사용하는 것을 선호하므로 대신 'action.payload.id'로 만들었습니다.

(잠시 살펴보면, action객체 payload가 생성되는 방식을 사용자 정의하는 방법이 있습니다. 이 튜토리얼의 뒷부분에서 살펴보거나 [createAction API 문서](../api/createAction.md)에서 설명을 볼 수 있습니다.

### Updating the Todos Tests

todo reducer에는 테스트 파일이 있습니다. todo Slice로 작동하도록 옮기고 둘 다 동일한 방식으로 작동하는지 확인할 수 있습니다.

첫 번째 단계는`reducers / todos.spec.js`를`features / todos / todosSlice.spec.js`에 복사하고 import 경로를 변경하여 slice 파일에서 reducer를 읽는 것입니다.

>-[todoSlice에 테스트 복사](https://github.com/reduxjs/rtk-convert-todos-example/commit/b603312ddf55899e8a75522d407c40474948ae0b)

완료되면 RTK 작동 방식과 일치하도록 테스트를 업데이트해야합니다.

첫 번째 문제는 테스트 파일이 `'ADD_TODO'`와 같은 action type을 하드 코딩한다는 것입니다. RTK의 액션 유형은 `'todos / addTodo'`처럼 보입니다. todoSlice에서 액션 생성자를 가져오고 테스트의 액션 상수를`addTodo.type`으로 대체하여 이를 참조 할 수 있습니다.

또 다른 문제는 테스트의 액션 객체가`{type, id, text}`처럼 보이는 반면 RTK는 항상 이러한 추가 값을`action.payload` 안에 넣는다는 것입니다. 따라서 이에 맞게 테스트 작업을 수정해야합니다.

(실제로 테스트의 모든 인라인 작업 개체를`addTodo ({id : 0, text : "Buy milk"})`와 같은 호출로 대체 할 수 있지만 지금은 긴단하게 변경합니다.)

>-[todoSlice로 테스트 이동](https://github.com/reduxjs/rtk-convert-todos-example/commit/39dbbf37bd4c559db956c8291bbd0bf1135546bb)

변경의 예는 다음과 같습니다.

```diff
-import todos from './todosSlice'
+import todos, { addTodo, toggleTodo } from './todosSlice'

// later, in a test:
  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
-       type: 'ADD_TODO',
-       text: 'Run the tests',
-       id: 0
+       type: addTodo.type,
+       payload: {
+         text: 'Run the tests',
+         id: 0
+       }
      })
    ).toEqual([
```

변경 후에`todosSlice.spec.js`의 모든 테스트를 통과해야 새로운 RTK Slice reducer가 원래 작성한 reducer와 정확히 동일하게 작동 함을 보장할 수 있습니다!

### Implementing Todo IDs

원래 코드에서 새로 추가 된 각 할일은 증가하는 숫자에서 ID 값을 가져옵니다.

```js
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
```

지금은 'addTodo'액션 생성자가 자동으로 생성되기 때문에 todoSlice는 그렇게하지 않습니다.

추가 작업을 전달하는 코드가`addTodo ({id : 1, text : "Buy milk"})`와 같은 새 ID를 전달해야하도록 요구하는 동작을 추가 할 수 있지만, 이는 귀찮은 작업이 됩니다. 호출자가 그 값을 추적해야하는 이유는 무엇입니까? 또한 해당 작업을 전달해야하는 앱의 여러 부분이있는 경우 어떻게해야합니까? 액션 생성자에 해당 로직을 캡슐화하는 것이 좋습니다.

RTK를 사용하면 작업 개체에서`payload` 필드가 생성되는 방식을 지정할 수 있습니다. `createAction`을 단독으로 사용하는 경우 두 번째 인수로 "prepare callback"을 전달할 수 있습니다. 다음과 같이 표시됩니다.

> - [addTodo ID 생성 구현](https://github.com/reduxjs/rtk-convert-todos-example/commit/0c9e3b721c209d368d23a70cf8faca8f308ff8df)

```js
let nextTodoId = 0

export const addTodo = createAction('ADD_TODO', text => {
  return {
    payload: { id: nextTodoId++, text }
  }
})
```

**'prepare callback'은 내부에 'payload'라는 필드가있는 객체를 반환해야합니다.** 그렇지 않으면 작업의 페이로드가 정의되지 않습니다. 또한 액션과 관련된 추가 메타 데이터를 포함하는 데 사용할 수있는 'meta'라는 필드도 포함 할 수 있습니다.

`createSlice`를 사용하는 경우 자동으로`createAction`을 호출합니다. 여기에서 페이로드를 사용자 정의해야하는 경우에는 감속기 함수 자체가 아닌`reducer` 및`prepare` 함수를 포함하는 객체를`reducers` 객체에 전달하면됩니다.

```js
let nextTodoId = 0

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare(text) {
        return { payload: { text, id: nextTodoId++ } }
      }
    }
  }
}
```

작동하는지 확인하는 테스트를 추가 할 수 있습니다.

```js
describe('addTodo', () => {
  it('should generate incrementing todo IDs', () => {
    const action1 = addTodo('a')
    const action2 = addTodo('b')

    expect(action1.payload).toEqual({ id: 0, text: 'a' })
    expect(action2.payload).toEqual({ id: 1, text: 'b' })
  })
})
```

## 새로운 Todos Slice사용

### Root Reducer 업데이트

We have a shiny new todos reducer function, but it isn't hooked up to anything yet.

The first step is to go update our root reducer to use the reducer from the todos slice instead of the original reducer. We just need to change the import statement in `reducers/index.js`:

> - [todos slice reducer 사용](https://github.com/reduxjs/rtk-convert-todos-example/commit/7b6e005377c856d7415e328387188260330ebae4)

```diff
import { combineReducers } from 'redux'
-import todos from './todos'
+import todosReducer from 'features/todos/todosSlice'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
- todos,
+ todos: todosReducer,
  visibilityFilter
})
```

While we could have kept the imported function named as `todos` so that we can use the object literal shorthand with `combineReducers`, it's a little more clear if we name the imported function `todosReducer` and define the field as `todos: todosReducer`.

### Updating the Add Todo Component

If we reload the app, we should still see that `state.todos` is an empty array. But, if we click on "Add Todo", nothing will happen. We're still dispatching actions whose type is `'ADD_TODO'`, while our todos slice is looking for an action type of `'todos/addTodo'`. We need to import the correct action creator and use it in the `AddTodo.js` file.

While we're at it, there are a couple of other problems with how the `AddTodo` component is written. First, it's currently using a React "callback ref" to read the current text value from the input when you click "Add Todo". This works, but the standard "React way" to handle form fields is with the "controlled inputs" pattern, where the current field value is stored in the component's state.

Second, the connected component is getting `dispatch` as a prop. Again, this works, but the normal way to use connect is to [pass action creator functions to `connect`](https://react-redux.js.org/using-react-redux/connect-mapdispatch), and then dispatch the actions by calling the functions that were passed in as props.

Since we've got this component open, we can fix those issues too. Here's what the final version looks like:

> - [Update AddTodo to dispatch the new action type](https://github.com/reduxjs/rtk-convert-todos-example/commit/d7082409ebaa113b74f6989bf70ee09600f37d0b)

```js
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'features/todos/todosSlice'

const mapDispatch = { addTodo }

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('')

  const onChange = e => setTodoText(e.target.value)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!todoText.trim()) {
            return
          }
          addTodo(todoText)
          setTodoText('')
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect(null, mapDispatch)(AddTodo)
```

todoSlice에서 `addTodo`액션 생성자를 가져옵니다.
The input is now being handled as a standard "controlled input", with the text value being stored in the component's state. We can use that state text value in the form's submit handler.

Finally, we use the ["object shorthand" form of `mapDispatch`](https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object) to simplify passing the action creators to `connect`. The "bound" version of `addTodo` is passed in to the component as a prop, and it will dispatch the action as soon as we call it.

입력은 이제 표준 "제어 입력"으로 처리되고 텍스트 값은 구성 요소의 상태에 저장됩니다. 양식의 제출 핸들러에서 해당 상태 텍스트 값을 사용할 수 있습니다.

마지막으로 ["object shorthand"의 `mapDispatch`](https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)의 형식을 사용합니다. 액션 생성자를 '연결'에 전달하는 것을 단순화합니다. `addTodo`의 "바운드"버전은 컴포넌트에 소품으로 전달되며, 호출하자마자 액션을 전달합니다.

### Todo List 업데이트

`TodoList` 및`VisibleTodoList` 구성 요소에는 유사한 문제가 있습니다. 이전`toggleTodo` 작업 생성기를 사용하고 있으며`connect` 설정은`mapDispatch`의 "개체 축약"형식을 사용하지 않습니다. 둘 다 고칠 수 있습니다.

> -[새로운 토글 액션 유형을 전달하도록 TodoList 업데이트](https://github.com/reduxjs/rtk-convert-todos-example/commit/b47b2124d6a28386b7461bccb9216682a81edb3e)

```diff
// VisibleTodoList.js
-import { toggleTodo } from '../actions'
+import { toggleTodo } from 'features/todos/todosSlice'

-const mapDispatchToProps = dispatch => ({
- toggleTodo: id => dispatch(toggleTodo(id))
-})
+const mapDispatchToProps = { toggleTodo }
```

And with that, we should now be able to add and toggle todos again, but using our new todos slice!

## Filters Slice 생성 및 사용

todoSlice를 생성하고 UI에 연결 했으므로 이제 필터 선택 로직에 대해서도 동일한 작업을 수행 할 수 있습니다.

### 필터 슬라이스 작성

필터 로직은 정말 간단합니다. 액션에있는 것을 반환하여 현재 필터 값을 설정하는 액션이 ​​하나 있습니다. 다음은 전체 조각입니다.

>-[필터 슬라이스 추가](https://github.com/reduxjs/rtk-convert-todos-example/commit/b77f4155e3b45bce24d0d0ef6e2f7b0c3bd11ee1)

```js
import { createSlice } from '@reduxjs/toolkit'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const filtersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload
    }
  }
})

export const { setVisibilityFilter } = filtersSlice.actions

export default filtersSlice.reducer
```

원래`actions / index.js`에 있던`VisibilityFilters` 열거 형 객체를 복사했습니다. 슬라이스 코드는 하나의 reducer를 생성하고 액션 생성기와 reducer를 내보내면 완료됩니다.

### 필터 슬라이스 사용

할일 reducer와 마찬가지로 가시성 reducer를 가져 와서 루트 reducer에 추가해야합니다.

>-[필터 슬라이스 reducer 사용](https://github.com/reduxjs/rtk-convert-todos-example/commit/623c47b1987914a1d90142824892686ec76c20a1)

```diff
import todosReducer from 'features/todos/todosSlice'
-import visibilityFilter from './visibilityFilter'
+import visibilityFilterReducer from 'features/filters/filtersSlice'

export default combineReducers({
  todos: todosReducer,
- visibilityFilter
+ visibilityFilter: visibilityFilterReducer
})
```

여기에서 사용자가 버튼을 클릭 할 때`setVisibilityFilter` 액션을 전달해야합니다. 먼저 일관성을 위해 액션 파일 대신 필터 슬라이스 파일에서 내 보낸`VisibilityFilter` 열거 형을 사용하도록`VisibleTodoList.js` 및`Footer.js`를 업데이트해야합니다.

거기에서 링크 구성 요소는 조금 더 많은 작업이 필요합니다. `FilterLink`는 현재`ownProps.filter`의 현재 값을 캡처하는 새 함수를 만들고 있으므로`Link`는`onClick`이라는 함수 만 가져옵니다. 이것이 유효한 방법이지만 일관성을 위해`mapDispatch`의 객체 축약 형을 계속 사용하고 액션을 전달할 때 필터 값을 전달하도록`Link`를 수정하고 싶습니다.

>-[UI에서 새 필터 액션 사용](https://github.com/reduxjs/rtk-convert-todos-example/commit/776b39088384513ff68af41039fe5fc5188fe8fb)

```diff
// FilterLink.js
-import { setVisibilityFilter } from '../actions'
+import { setVisibilityFilter } from 'features/filters/filtersSlice'

-const mapDispatchToProps = (dispatch, ownProps) => ({
- onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
-})
+const mapDispatchToProps = { setVisibilityFilter }


// Link.js
import React from 'react'
import PropTypes from 'prop-types'

-const Link = ({ active, children, onClick }) => (
+const Link = ({ active, children, setVisibilityFilter, filter }) => (
  <button
-    onClick={onClick}
+    onClick={() => setVisibilityFilter(filter)}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
- onClick: PropTypes.func.isRequired
+ setVisibilityFilter: PropTypes.func.isRequired,
+ filter: PropTypes.string.isRequired
}

export default Link
```

다시 말하지만, 이것의 대부분은 RTK와 특별히 관련이 없지만 이 예제 코드에서 권장되는 모범 사례 중 일부를 일관되게 사용하는 것이 좋습니다.

완료되면 몇 가지 할 일을 추가하고 일부 상태를 전환 한 다음 필터를 전환하여 표시 목록을 변경할 수 있습니다.

## 할일 필터링 최적화

`VisibleTodoList` 구성 요소는 현재`getVisibleTodos`라는 함수를 사용하여 표시 할 할 일 배열을 필터링하는 작업을 수행합니다. 이것은 [Computing Derived Data](https://redux.js.org/recipes/computing-derived-data)의 Redux 문서 페이지에 설명 된 "선택기 기능"입니다. Redux 저장소에서 값을 읽고 사용할 값의 일부 또는 전부를 추출하는 프로세스를 캡슐화합니다.

그러나 현재 작성된 코드에는 문제가 있습니다. 필터가`SHOW_COMPLETED` 또는`SHOW_ACTIVE`로 설정되면 _ 항상 _ 호출 될 때마다 _ 새로운 배열을 반환합니다. `mapState` 함수에서 사용되기 때문에 _any_ 액션이 전달 될 때 새로운 배열 참조를 반환합니다.

이 작은 할일 예제 앱에서는 문제가되지 않습니다. 우리가 가진 유일한 작업은 어쨌든 할 일 목록을 변경하거나 필터링하는 것입니다. 그러나 실제 앱에서는 다른 많은 작업이 전달됩니다. 이 할일 앱에 카운터가 있고 목록이 필터링되는 동안` "INCREMENT"`가 전달되었다고 상상해보십시오. 우리는 새로운 목록을 생성하고, 아무것도 변경되지 않았더라도`TodoList`를 다시 렌더링해야합니다.

이것이 실제 성능 문제는 아니지만 어떻게 행동을 개선 할 수 있는지 보여줄 가치가 있습니다.

Redux 앱은 일반적으로 'memoized'선택기 함수를 정의 할 수있는 'createSelector'함수가있는 [Reselect](https://github.com/reduxjs/reselect)라는 라이브러리를 사용합니다. 이러한 메모 된 선택기는 입력이 실제로 변경된 경우에만 값을 다시 계산합니다.

RTK는 Reselect에서`createSelector` 함수를 다시 내보내므로이를 가져와`VisibleTodoList`에서 사용할 수 있습니다.

>-[표시된 할 일을 memoized된 선택기로 변환](https://github.com/reduxjs/rtk-convert-todos-example/commit/4fc943b7111381974f20f74750a114b5e52ce1b2)

```diff
import { connect } from 'react-redux'
+import { createSelector } from '@reduxjs/toolkit'
import { toggleTodo } from 'features/todos/todosSlice'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from 'features/filters/filtersSlice'

-const getVisibleTodos = (todos, filter) => {
-  switch (filter) {
-    case VisibilityFilters.SHOW_ALL:
-      return todos
-    case VisibilityFilters.SHOW_COMPLETED:
-      return todos.filter(t => t.completed)
-    case VisibilityFilters.SHOW_ACTIVE:
-      return todos.filter(t => !t.completed)
-    default:
-      throw new Error('Unknown filter: ' + filter)
-  }
-}

+const selectTodos = state => state.todos
+const selectFilter = state => state.visibilityFilter

+const selectVisibleTodos = createSelector(
+  [selectTodos, selectFilter],
+  (todos, filter) => {
+    switch (filter) {
+      case VisibilityFilters.SHOW_ALL:
+        return todos
+      case VisibilityFilters.SHOW_COMPLETED:
+        return todos.filter(t => t.completed)
+      case VisibilityFilters.SHOW_ACTIVE:
+        return todos.filter(t => !t.completed)
+      default:
+        throw new Error('Unknown filter: ' + filter)
+    }
+  }
+)

const mapStateToProps = state => ({
- todos: getVisibleTodos(state.todos, state.visibilityFilter)
+ todos: selectVisibleTodos(state)
})

const mapDispatchToProps = { toggleTodo }
```

먼저 RTK에서`createSelector`를 가져오고`state` 인수에서`todos` 및`visibilityFilter` 필드를 가져 오는 두 개의 한 줄 선택기 함수를 정의합니다.

그런 다음`createSelector`를 호출하고 "입력 선택자"배열에있는 두 개의 작은 선택자 함수를 전달합니다. `createSelector`는이를 호출하고 반환 값을 가져 와서 우리가 정의한 "출력 선택자"에 전달하면 필터링을 수행하고 최종 결과를 반환 할 수 있습니다.

이것이 정의되고 사용되는 방법에 몇 가지 작은 변화가 있습니다. 선택기 함수에 원하는 이름을 지정할 수 있지만`selectX`는`getX`보다 일반적인 명명 규칙입니다. 또한 입력 선택기가 필요한 값을 읽는 것을 처리하므로 'state'를 유일한 인수로 사용하여 'selectVisibleTodos (state)'를 호출 할 수 있습니다.

앱을 다시 실행하면 필터링 로직이 _should_ UI에서 볼 수있는 것과 동일하게 작동합니다.

## 정리

이것이 실제 변환 작업의 끝입니다. 이제 더 이상 사용되지 않는 액션 및 리듀서 파일이 많이 있으므로 프로젝트를 정리하기 위해 삭제해야합니다.

`actions / index.js`,`reducers / todos.js`,`reducers / visibilityFilter.js` 및 관련 테스트 파일을 안전하게 제거 할 수 있습니다.

또한 모든 구성 요소 파일을 일치하는 기능 폴더로 이동하여 "유형별 폴더"구조에서 "기능 폴더"구조로 완전히 전환 할 수 있습니다.

>-[사용하지 않는 액션 및 reducer 파일 제거](https://github.com/reduxjs/rtk-convert-todos-example/commit/fbc0b965949e082748b8613b734612226ffe9e94)
>-[컴포넌트를 feature 폴더로 통합](https://github.com/reduxjs/rtk-convert-todos-example/commit/138cc162b1cc9c64ab67fae0a1171d07940414e6)

그렇게하면 최종 소스 코드 구조는 다음과 같습니다.

- `/src`
  - `/components`
    - `App.js`
  - `/features`
    - `/filters`
      - `FilterLink.js`
      - `filtersSlice.js`
      - `Footer.js`
      - `Link.js`
    - `/todos`
      - `AddTodo.js`
      - `Todo.js`
      - `TodoList.js`
      - `todosSlice.js`
      - `todosSlice.spec.js`
      - `VisibleTodoList.js`
  - `/reducers`
    - `index.js`
  - `index.js`

모든 사람이 "유지 관리가 가능한"폴더 구조를 만드는 것에 대한 선호도가 다르지만 전반적으로 그 결과는 매우 일관되고 따르기 쉽습니다.

이제 실제 코드의 최종 버전을 살펴 보겠습니다!

<iframe src="https://codesandbox.io/embed/rtk-convert-todos-example-uqqy3?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Ftodos%2FtodosSlice.js&theme=dark&view=editor"
     style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
     title="rtk-convert-todos-example"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## 요약

이 자습서에서는 다음을 확인했습니다.

-패키지 추가, "슬라이스"파일 작성, React 컴포넌트에서 액션 디스패치 등 일반적인 React 애플리케이션에서 RTK를 사용하는 방법
- "변경 가능한"감속기 사용, 작업 페이로드 준비 및 선택기 함수 작성 방법
-`mapDispatch`의 "object shorthand"형식을 사용하는 것과 같이 React-Redux 코드를 단순화하는 몇 가지 기술
-코드 구성을 위해 "기능 폴더"구조를 사용하는 예.

실제로 이러한 방법을 실제로 사용하는 방법을 설명하는 데 도움이 되었기를 바랍니다.

곧 제공 될 예정 : 고급 자습서, 비동기 데이터 가져 오기를 수행하고 TypeScript를 사용하는 앱에서 RTK를 사용하는 방법을 살펴볼 것입니다.
