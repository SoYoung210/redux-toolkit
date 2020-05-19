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

We'll need to use the action creators and the reducer in other files, so at a minimum we would need to export the slice object. However, we can use a Redux community code convention called [the "ducks" pattern](https://github.com/erikras/ducks-modular-redux). Simply put, **it suggests that you should put all your action creators and reducers in one file, do named exports of the action creators, and a default export of the reducer function**.

Thanks to `createSlice`, we already have our action creators and the reducer right here in one file. All we have to do is export them separately, and our todos slice file now matches the common "ducks" pattern.

#### Working with Action Payloads

Speaking of the action creators, let's go back and re-examine the reducer logic for a minute.

By default, the action creators from the RTK `createAction` function only accept one argument. That argument, whatever it is, is put into the action object as a field called `payload`.

There's nothing special about the field `action.payload` by itself. Redux doesn't know or care about that name. But, like "ducks", the name `payload` comes from another Redux community convention called ["Flux Standard Actions"](https://github.com/redux-utilities/flux-standard-action).

Actions usually need to include some extra data along with the `type` field. The original Redux code for `addTodo` has an action object that looks like `{type, id, text}`. **The FSA convention suggests that rather than having data fields with random names directly in the action object, you should always put your data inside a field named `payload`**.

It's up to the reducer to establish what it thinks `payload` should be for each action type, and whatever code dispatches the action needs to pass in values that match that expectation. If only one value is needed, you could potentially use that as the whole `payload` value directly. More commonly, you'd need to pass in multiple values, in which case `payload` should be an object containing those values.

In our todos slice, `addTodo` needs two fields, `id` and `text`, so we put those into an object as `payload`. For `toggleTodo`, the only value we need is the `id` of the todo being changed. We could have made that the `payload`, but I prefer always having `payload` be an object, so I made it `action.payload.id` instead.

(As a sneak peek: there _is_ a way to customize how action object payloads are created. We'll look at that later in this tutorial, or you can look through [the `createAction` API docs](../api/createAction.md) for an explanation.)

### Updating the Todos Tests

The original todos reducer has a tests file with it. We can port those over to work with our todos slice, and verify that they both work the same way.

The first step is to copy `reducers/todos.spec.js` over to `features/todos/todosSlice.spec.js`, and change the import path to read the reducer from the slice file.

> - [Copy tests to todos slice](https://github.com/reduxjs/rtk-convert-todos-example/commit/b603312ddf55899e8a75522d407c40474948ae0b)

Once that is done, we need to update the tests to match how RTK works.

The first issue is that the test file hardcodes action types like `'ADD_TODO'`. RTK's action types look like `'todos/addTodo'`. We can reference that by also importing the action creators from the todos slice, and replacing the original type constants in the test with `addTodo.type`.

The other problem is that the action objects in the tests look like `{type, id, text}`, whereas RTK always puts those extra values inside `action.payload`. So, we need to modify the test actions to match that.

(We really _could_ just replace all the inline action objects in the test with calls like `addTodo({id : 0, text: "Buy milk"})`, but this is a simpler set of changes to show for now.)

> - [Port the todos tests to work with the todos slice](https://github.com/reduxjs/rtk-convert-todos-example/commit/39dbbf37bd4c559db956c8291bbd0bf1135546bb)

An example of the changes would be:

```diff
// Change the imports to get the action creators
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

After those changes, all the tests in `todosSlice.spec.js` should pass, proving that our new RTK slice reducer works exactly the same as the original hand-written reducer!

### Implementing Todo IDs

In the original code, each newly added todo gets an ID value from an incrementing number:

```js
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
```

Right now, our todos slice doesn't do that, because the `addTodo` action creator is automatically generated for us.

We _could_ add that behavior for requiring that whatever code dispatches the add todo should have to pass in a new ID, like `addTodo({id: 1, text: "Buy milk"})`, but that would be annoying. Why should the caller have to track that value? Also, what if there are multiple parts of the app that would need to dispatch that action? It would be better to encapsulate that logic in the action creator.

RTK allows you to customize how the `payload` field is created in your action objects. If you are using `createAction` by itself, you can pass a "prepare callback" as the second argument. Here's what this would look like:

> - [Implement addTodo ID generation](https://github.com/reduxjs/rtk-convert-todos-example/commit/0c9e3b721c209d368d23a70cf8faca8f308ff8df)

```js
let nextTodoId = 0

export const addTodo = createAction('ADD_TODO', text => {
  return {
    payload: { id: nextTodoId++, text }
  }
})
```

**Note that the "prepare callback" _must_ return an object with a field called `payload` inside!** Otherwise, the action's payload will be undefined. It _may_ also include a field called `meta`, which can be used to include extra additional metadata related to the action.

If you're using `createSlice`, it automatically calls `createAction` for you. If you need to customize the payload there, you can do so by passing an object containing `reducer` and `prepare` functions to the `reducers` object, instead of just the reducer function by itself:

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

We can add an additional test that confirms this works:

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

## Using the New Todos Slice

### Updating the Root Reducer

We have a shiny new todos reducer function, but it isn't hooked up to anything yet.

The first step is to go update our root reducer to use the reducer from the todos slice instead of the original reducer. We just need to change the import statement in `reducers/index.js`:

> - [Use the todos slice reducer](https://github.com/reduxjs/rtk-convert-todos-example/commit/7b6e005377c856d7415e328387188260330ebae4)

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

We start by importing the correct `addTodo` action creator from our todos slice.

The input is now being handled as a standard "controlled input", with the text value being stored in the component's state. We can use that state text value in the form's submit handler.

Finally, we use the ["object shorthand" form of `mapDispatch`](https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object) to simplify passing the action creators to `connect`. The "bound" version of `addTodo` is passed in to the component as a prop, and it will dispatch the action as soon as we call it.

### Updating the Todo List

The `TodoList` and `VisibleTodoList` components have similar issues: they're using the older `toggleTodo` action creator, and the `connect` setup isn't using the "object shorthand" form of `mapDispatch`. We can fix both of those.

> - [Update TodoList to dispatch the new toggle action type](https://github.com/reduxjs/rtk-convert-todos-example/commit/b47b2124d6a28386b7461bccb9216682a81edb3e)

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

## Creating and Using the Filters Slice

Now that we've created the todos slice and hooked it up to the UI, we can do the same for the filter selection logic as well.

### Writing the Filters Slice

The filter logic is really simple. We have one action, which sets the current filter value by returning what's in the action. Here's the whole slice:

> - [Add the filters slice](https://github.com/reduxjs/rtk-convert-todos-example/commit/b77f4155e3b45bce24d0d0ef6e2f7b0c3bd11ee1)

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

We've copied over the `VisibilityFilters` enum object that was originally in `actions/index.js`. The slice code just creates the one reducer, we export the action creator and reducer, and we're done.

### Using the Filters Slice

As with the todos reducer, we need to import and add the visibility reducer to our root reducer:

> - [Use the filters slice reducer](https://github.com/reduxjs/rtk-convert-todos-example/commit/623c47b1987914a1d90142824892686ec76c20a1)

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

From there, we need to dispatch the `setVisibilityFilter` action when the user clicks on the buttons. First, for consistency, we should update `VisibleTodoList.js` and `Footer.js` to use the `VisibilityFilter` enum that's exported from the filter slice file, instead of the one from the actions file.

From there, the link components will take just a bit more work. `FilterLink` is currently creating new functions that capture the current value of `ownProps.filter`, so that `Link` is just getting a function called `onClick`. While that's a valid way to do it, for consistency we'd like to continue using the object shorthand form of `mapDispatch`, and modify `Link` to pass the filter value in when it dispatches the action.

> - [Use the new filters action in the UI](https://github.com/reduxjs/rtk-convert-todos-example/commit/776b39088384513ff68af41039fe5fc5188fe8fb)

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

Again, note that most of this doesn't have to do with RTK specifically, but it's good to try to consistently use some of the recommended best practices in this example code.

With that done, we should be able to add a couple todos, toggle the state of some of them, and then switch the filters to change the display list.

## Optimizing Todo Filtering

The `VisibleTodoList` component currently uses a function called `getVisibleTodos` to do the work of filtering the todos array for display. This is a "selector function", as described in the Redux docs page on [Computing Derived Data](https://redux.js.org/recipes/computing-derived-data). It encapsulates the process of reading values from the Redux store and extracting part or all of those values for use.

However, the code as currently written has a problem. If the filter is set to `SHOW_COMPLETED` or `SHOW_ACTIVE`, it will _always_ return a new array _every_ time it is called. Since it's being used in a `mapState` function, that means it will return a new array reference when _any_ action is dispatched.

In this tiny todo example app, that isn't a problem. The only actions we have involve altering the todos list or filtering it, anyway. But, in a real app, many other actions will be dispatched. Imagine if this todo app had a counter in it, and `"INCREMENT"` was dispatched while the list is filtered. We would create a new list, and the `TodoList` would have to re-render even though nothing changed.

While this isn't a real performance issue now, it's worth showing how we can improve the behavior.

Redux apps commonly use a library called [Reselect](https://github.com/reduxjs/reselect), which has a `createSelector` function that lets you define "memoized" selector functions. These memoized selectors only recalculate values if the inputs have actually changed.

RTK re-exports the `createSelector` function from Reselect, so we can import that and use it in `VisibleTodoList`.

> - [Convert visible todos to a memoized selector](https://github.com/reduxjs/rtk-convert-todos-example/commit/4fc943b7111381974f20f74750a114b5e52ce1b2)

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

First, we import `createSelector` from RTK, and define a couple one-line selector functions that grab the `todos` and `visibilityFilter` fields from their `state` argument.

We then call `createSelector`, and pass those two small selector functions in the "input selectors" array. `createSelector` will call those, take the return values, and pass those to the "output selector" we've defined, which can then do the filtering and return the final result.

There's a couple small changes in how this is defined and used. While you can give selector functions any name you want, `selectX` is a more common naming convention than `getX`. Also, because the input selectors take care of reading the necessary values, we can just call `selectVisibleTodos(state)`, with `state` as the only argument.

If we re-run the app, the filtering logic _should_ work exactly the same as before from what you can see in the UI.

## Cleanup

That's the end of the actual conversion work. We now have a bunch of action and reducer files that are no longer being used, so we should delete those to clean up the project.

We can safely remove `actions/index.js`, `reducers/todos.js`, `reducers/visibilityFilter.js`, and the associated test files.

We can also try completely switching from the "folder-by-type" structure to a "feature folder" structure, by moving all of the component files into the matching feature folders.

> - [Remove unused action and reducer files](https://github.com/reduxjs/rtk-convert-todos-example/commit/fbc0b965949e082748b8613b734612226ffe9e94)
> - [Consolidate components into feature folders](https://github.com/reduxjs/rtk-convert-todos-example/commit/138cc162b1cc9c64ab67fae0a1171d07940414e6)

If we do that, the final source code structure looks like this:

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

Everyone has different preferences on what makes a "maintainable" folder structure, but overall that result looks pretty consistent and easy to follow.

Now, let's see the final version of the code in action!

<iframe src="https://codesandbox.io/embed/rtk-convert-todos-example-uqqy3?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Ftodos%2FtodosSlice.js&theme=dark&view=editor"
     style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
     title="rtk-convert-todos-example"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## Summary

In this tutorial, you saw:

- How to use RTK in a typical React application, including adding the package, writing "slice" files, and dispatching actions from React components
- How to use "mutable" reducers, prepare action payloads, and write selector functions
- Some techniques for simplifying React-Redux code, like using the "object shorthand" form of `mapDispatch`
- Examples of using a "feature folder" structure for organizing your code.

Hopefully that has helped illustrate how to actually use these methods in practice.

Coming soon: an Advanced Tutorial, where we'll look at how to use RTK in an app that does async data fetching and uses TypeScript.
