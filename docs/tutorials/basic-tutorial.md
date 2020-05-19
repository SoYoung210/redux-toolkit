---
id: basic-tutorial
title: 기본 튜토리얼
sidebar_label: 기본 튜토리얼
hide_title: true
---

# 기본 튜토리얼: Redux Toolkit 소개

Redux Toolkit에 오신 것을 환영합니다 ! 이 튜토리얼은 Redux Toolkit에서 제공하는 기본적인 함수들에 대해 소개합니다. (줄여서 "RTK"라고 알려진)

This tutorial assumes that you are already familiar with the concepts of the core Redux library, as well as how to use it with React. If you aren't, please take some time to read through the [Redux docs](https://redux.js.org) and [React-Redux docs](https://react-redux.js.org) first, as the explanations here focus on how RTK usage differs from "typical" Redux code.

이 튜토리얼은 React와 Redux에 이미 익숙하다는 것을 전제로 합니다. 만약 그렇지 않다면, [Redux docs](https://redux.js.org)와 [React-Redux docs](https://react-redux.js.org)를 먼저 읽어보세요. 이 튜토리얼에서는 RTK사용이 "일반적인" Redux 사용법과 어떻게 다른지 소개합니다.

## Introduction: Counter Application

간단한 Redux 예제(counter)를 먼저 살펴보겠습니다.

### Redux "Counter-Vanilla" 예제

The Redux docs have a ["counter-vanilla" example](https://redux.js.org/introduction/examples#counter-vanilla) that shows how to create a simple Redux store with a reducer that stores a single number and responds to `"INCREMENT"` and `"DECREMENT"` action types. You can see the [the complete code as a CodeSandbox here](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla), but here's the important section:

Redux 문서에 ["counter-vanilla" 예제](https://redux.js.org/introduction/examples#counter-vanilla)가 있습니다. 위 예제에서는숫자를 저장하는 reducer로 간단한 Redux store를 생성하는 방법을 소개합니다.

```js
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

var store = Redux.createStore(counter)

document.getElementById('increment').addEventListener('click', function() {
  store.dispatch({ type: 'INCREMENT' })
})
```

위 코드는 `counter`라는 reducer를 생성하고 기본 상태값을 0으로 설정합니다. `"INCREMENT"`와 `"DECREMENT"` 액션을 정의하고 버튼이 클릭되었을 때 `"INCREMENT"` 액션을 dispatch합니다.

### 조금 더 일반적인 카운터 예제

위 예제는 단순하지만 다소 비현실적입니다. 대부분의 redux앱은 정의되지 않은 함수 매개 변수에 대한 기본 인자를 포함하여 ES6구문을 활용하여 작성되었습니다. 코드에서 직접 액션 객체를 작성하는 대신 ["action creator" 함수](https://redux.js.org/basics/actions#action-creators)를 작성하고 액션 타입을 작성하는 것이 일반적입니다.

이러한 접근방식으로 위 예제를 다시 작성해보겠습니다:

```js
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function increment() {
  return { type: INCREMENT }
}

function decrement() {
  return { type: DECREMENT }
}

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const store = Redux.createStore(counter)

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

예제가 작기때문에 코드 형태에 큰 차이가 없습니다. 기본 인자를 설정해줌으로써 앞선 예제보다 코드 양을 줄였지만 action 생성자 함수를 적어주는 작업이 추가되었습니다. 그리고, `const INCREMENT = 'INCREMENT'`라고 적는 중복이 존재합니다.:)

또한, switch구문이 많은 사람들을 괴롭게 합니다. 일종의 lookup 테이블로 바꿀 수 있다면 좋을 것입니다.

### Introducing: `configureStore`

Redux Toolkit에는 Redux코드를 단순화하는데 도움이 되는 몇 가지 기능이 있습니다. 첫 번째 기능은 [`configureStore`](../api/configureStore.md)입니다.

일반적으로 `createStore()`를 호출하고 root reducer함수를 전달하여 redux store를 구성합니다. Redux Toolkit은 `createStore()`를 래핑한 `configureStore()` 함수를 제공하고 이 함수는 기본적으로 createStore와 동일한 기능을 제공합니다. 하지만 `configureStore`는 store를 생성하는 단계에서 몇 가지 유용한 개발 도구가 설정되도록 합니다.

기존 `createStore`사용을 `configureStore`로 쉽게 바꿀 수 있습니다. `configureStore`함수는 여러 개의 인자 대신 이름이 지정된 하나의 object를 인자로 받으므로, reducer함수를 `reducer`라는 이름으로 전달해야 합니다.

```js
// Before:
const store = createStore(counter)

// After:
const store = configureStore({
  reducer: counter
})
```

아마 크게 다른것 처럼 보이지는 않을 것입니다. 그러나 `configureStore`를 통해 생성 된 store는 [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)을 사용하여 dispatch된 action과 history 그리고 state변경사항들을 쉽게 볼 수 있습니다.

그리고 [Redux middleware가 기본적으로 포함](../api/getDefaultMiddleware.md)되어 있습니다. 이 내용은 다음 튜토리얼에서 자세하게 살펴봅니다.

### Introducing: `createAction`

다음으로, [`createAction`](../api/createAction.md)에 대해 알아보겠습니다.

`createAction`은 액션 타입 문자열을 인자로 받고, 해당 타입을 사용하는 액션 생성자함수를 반화합니다. (사실 이 함수의 이름이 정확하지 않습니다. - 우리는 "액션 객체"가 아닌 "액션 생성자 함수"를 생성하고 있지만 이 이름이 `createActionCreator`이름보다 짧고 기억하기 쉽습니다.) 아래 두 예제는 동일합니다.

```js
// 기존: 액션 type과 생성함수를 모두 작성
const INCREMENT = 'INCREMENT'

function incrementOriginal() {
  return { type: INCREMENT }
}

console.log(incrementOriginal())
// {type: "INCREMENT"}

// `createAction` 사용:
const incrementNew = createAction('INCREMENT')

console.log(incrementNew())
// {type: "INCREMENT"}
```

reducer에서 액션 type을 참조하려면 어떻게 해야할까요? `createAction`을 사용하면 두 가지 방법으로 이 작업을 수행할 수 있습니다. 첫 번째는, 액션 생성자의 `toString()`메소드가 재정의되어있기 때문에 이를 이용하면 액션 type 문자열을 반환합니다. 두 번재는, `.type`을 이용하는 것입니다.

```js
const increment = createAction('INCREMENT')

console.log(increment.toString())
// "INCREMENT"

console.log(increment.type)
// "INCREMENT"
```

`createAction`을 사용하여 이전 counter예제를 단순화 할 수 있습니다.

```js
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

function counter(state = 0, action) {
  switch (action.type) {
    case increment.type:
      return state + 1
    case decrement.type:
      return state - 1
    default:
      return state
  }
}

const store = Redux.createStore(counter)

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

코드양이 줄어들었고, `INCREMENT`라는 단어가 중복되지 않습니다.

### Introducing: `createReducer`

이제 reducer함수를 살펴 보겠습니다. `if`문과 반복문을 포함하여 reducer에서 원하는 조건 논리를 사용할 수 있지만, 가장 일반적인 방법은 `action.type`필드를 확인하고 각 유형에 대해 적절한 로직을 수행하는 것입니다. reducer는 초기 상태값을 제공하고, 현재 액션과 관계없는 상태는 그대로 반환합니다.

Redux Toolkit에는 " lookup 테이블"객체를 사용하여 reducer를 작성할 수 있는 [`createReducer` 함수](../api/createReducer.md)가 있습니다. 여기서 객체의 각 키는 redux의 액션 type문자열이며 값은 reducer함수입니다. 기존 `counter`기능 정의를 이 기능을 통해 다시 할 수 있습니다. 액션 type 문자열을 키로 사용해야 하므로 [ES6 object "computed 속성" 구문](http://javascript.info/object#computed-properties)을 사용하여 type문자열 변수로 키를 작성할 수 있습니다.

```js
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

const counter = createReducer(0, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1
})
```

또는, computed 속성 구문은 내부에 있는 모든 변수에 대해 `toString()`을 호출하므로 `.type`필드없이 직접 액션 생성자 함수를 사용할 수 있습니다.

```js
const counter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1
})
```

지금까지 과정에 대한 전체 코드를 보고 싶다면 [`createAction`과 `createReducer` 예시를 보여주는 이 CodeSandbox](https://codesandbox.io/s/counter-vanilla-redux-toolkit-sjouq)를 참고하세요.

### Introducing: `createSlice`

이 시점에서 counter예제가 어떻게 보여지는지 살펴 보겠습니다:

```js
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

const counter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1
})

const store = configureStore({
  reducer: counter
})

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

그렇게 나쁘지 않지만, 우리는 한 가지 큰 변화를 줄 수 있습니다. 액션 생성 함수를 별도로 생성하나 액션 타입문자열을 적어주어야 하는 이유는 무엇일까요? 가장 중요한 것은 reducer함수 부분입니다.

이 기능에 [`createSlice` 함수](../api/createSlice.md)가 등장합니다. 객체에 reducer함수들을 제공할 수 있고 이를 기반으로 액션 타입문자열과 액션 생성자 함수를 자동으로 생성합니다.

`createSlice`는 생성된 reducer함수를 `reducer`라는 필드를 포함하는 "slice"객체와 `actions`라는 객체 내부에서 생서된 액션 생성함수를 반환합니다.

다음은 `createSlice`를 사용하는 카운터 예제입니다:

```js
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(counterSlice.actions.increment())
})
```

대부분의 경우, ES6 디스트럭처링 구문을 이용하여 액션 생성자 함수와 reducer를 변수로 사용하기를 원할 것입니다:

```js
const { actions, reducer } = counterSlice
const { increment, decrement } = actions
```

## Summary

함수들의 기능을 요약해 보겠습니다:

- `configureStore`: redux에서 제공하던 `createStore`와 같은 store를 생성하지만 인자로 객체를 사용하고 Redux DevTools Extension을 자동으로 설정합니다.
- `createAction`: 액션 타입문자열을 받아 이 타입을 사용하는 액션 생성자 함수를 반환합니다.
- `createReducer`: 초기 상태값과 reducer함수에 대한 lookup테이블을 받아 이를 처리하는 reducer를 작성합니다.
- `createSlice`: reducer이름과 함수가 포함된 초기 상태와 lookup테이블을 받아 액션 생성자 함수, 액션 유형 문자열 및 리듀서 함수를 자동으로 생성합니다.

위 기능들은 모두 Redux의 작동 방식에 대해 아무것도 변경하지 않았습니다. 여전히 redux store를 생성하고 "어떤 일을 하는지"에 대한 액션 객체를 dispatch하고 reducer함수를 사용하여 업데이트 된 상태를 반환합니다. 또한 Redux Toolkit기능은 코드의 "redux store"부분만 처리하므로 UI를 빌드하는데 어떤 방법을 사용하든 관계 없이 사용할 수 있습니다. 위 예제에서는 "Vanilla JS"을 사용했지만, React, Angular, Vue 또는 다른 UI레이어와 동일한 store를 사용할 수 있습니다.

마지막으로, 예제를 살펴보면 비동기 로직을 작성한 곳에 "증가 비동기"버튼이 있는 것을 볼 수 있습니다:

```js
document.getElementById('incrementAsync').addEventListener('click', function() {
  setTimeout(function() {
    store.dispatch(increment())
  }, 1000)
})
```

비동기 처리를 reducer와 별도로 유지하고 있으며 store를 업데이트 해야할 때 액션을 dispatch합니다. Redux Toolkit은 이 점에 대해 아무것도 변경하지 않았습니다.

전체 예제는 다음과 같습니다.

<iframe src="https://codesandbox.io/embed/counter-vanilla-createslice-redux-toolkit-6gkxx?fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
     title="counter-vanilla createSlice - Redux Toolkit"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

이제 각 함수의 기본 사항을 알았으므로 다음 단계에서는 _약간_ 더 큰 예제에서 해당 함수를 사용하여 작동방식을 더 자세히 살펴보겠습니다. 이에 대해서는 [Intermediate Tutorial](./intermediate-tutorial.md)에서 다루겠습니다.
