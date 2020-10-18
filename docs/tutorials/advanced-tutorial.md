---
id: advanced-tutorial
title: Advanced Tutorial
sidebar_label: Advanced Tutorial
hide_title: true
---

# 심화 튜토리얼 : Redux Toolkit in Practive

[중급 튜토리얼](./ intermediate-tutorial.md) 에서 일반적인 기본 React 앱에서 Redux Toolkit을 사용하는 방법과 기존의 일반 Redux 코드를 RTK를 대신 사용하도록 변환하는 방법을 확인했습니다. 또한 감속기 함수에서 "변형"불변 업데이트를 작성하는 방법과 작업 페이로드를 생성하기 위해 "콜백 준비"를 작성하는 방법도 살펴 보았습니다.

이 튜토리얼에서는 할일 목록 예제보다 더 큰 "실제"앱의 일부로 Redux Toolkit을 사용하는 방법을 볼 수 있습니다. 이 튜토리얼은 몇 가지 개념을 보여줍니다:

- Redux를 사용하기 위해 "plain React"앱을 변환하는 방법
- 데이터 fetch와 같은 비동기 로직이 RTK에 적합한 방식
- TypeScript로 RTK를 사용하는 방법

이 과정에서 코드를 개선하는 데 사용할 수있는 TypeScript 기술의 몇 가지 예를 살펴보고 [기존`connect` API](https://react-redux.js.org/api/connect) 대신 새로운 [React-Redux Hooks API](https://react-redux.js.org/api/hooks)를 사용하는 방법을 살펴 보겠습니다.

> ** 참고 ** : 이것은 TypeScript를 일반적으로 또는 특별히 Redux와 함께 사용하는 방법에 대한 완전한 문서가 아니며 여기에 표시된 예제는 100% 완전한 type 안전성을 달성하려고 시도하지 않습니다. 자세한 내용은 [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) 및 [React / Redux TypeScript 가이드](https://github.com/piotrwitek/react-redux-typescript-guide).
>

> 또한이 튜토리얼은 React 앱 로직을 Redux로 완전히 변환해야한다는 의미는 아닙니다. [React 컴포넌트에 어떤 상태가 있어야하고 Redux에 무엇이 있어야하는지는 사용자가 결정합니다.](https://redux.js.org/faq/organizing-state#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate). 이것은 당신이 원한다면 Redux를 사용하도록 로직을 변환하는 방법의 예일뿐입니다.

이 가이드에서 변환 된 애플리케이션의 전체 소스 코드는 [github.com/reduxjs/rtk-github-issues-example](https://github.com/reduxjs/rtk-github-issues-example)에서 확인할 수 있습니다. 이 리포지토리의 역사에 표시된대로 변환 프로세스를 살펴 보겠습니다. 의미있는 개별 커밋에 대한 링크는 다음과 같이 따옴표 블록으로 강조 표시됩니다.

>-여기에 메시지 커밋

## 시작 예제 애플리케이션 검토

이 튜토리얼의 예제 애플리케이션은 Github 이슈 뷰어 앱입니다. 사용자는 Github 조직 및 리포지토리의 이름을 입력하고, 현재 진행중인 문제 목록을 가져오고, 문제 목록을 페이지로 이동하고, 특정 문제의 내용과 댓글을 볼 수 있습니다.

이 애플리케이션의 시작 커밋은 데이터 가져 오기와 같은 상태 및 부작용에 대한 후크가있는 함수 구성 요소를 사용하는 일반 React 구현입니다. 코드는 이미 TypeScript로 작성되었으며 스타일 지정은 CSS 모듈을 통해 수행됩니다.

작동중인 원래의 일반 React 앱을 살펴 보겠습니다.
<iframe src="https://codesandbox.io/embed/rsk-github-issues-example-8jf6d?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
     title="rtk-github-issues-example-01-plain-react"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

### React Codebase 소스 개요

코드베이스는 이미 "기능 폴더"구조로 배치되어 있습니다. 주요 부분은 다음과 같습니다.

-`/api` : Github Issues API에 대한 함수 및 TS 유형 가져 오기
-`/app` : 기본`<App>`구성 요소
-`/components` : 여러 곳에서 재사용되는 컴포넌트
-`/features`
  -`/issueDetails :`이슈 세부 정보 페이지의 구성 요소
  -`/issuesList` : 이슈 목록 표시를위한 구성 요소
  -`/repoSearch` : Repo Search 폼의 구성 요소
-`/utils` : 다양한 문자열 유틸리티 기능

## Redux Store 설정

이 앱은 아직 Redux를 전혀 사용하지 않기 때문에 첫 번째 단계는 Redux Toolkit과 React-Redux를 설치하는 것입니다. 이것은 TypeScript 앱이므로`@ types / react-redux`도 추가해야합니다. Yarn 또는 NPM을 통해 해당 패키지를 프로젝트에 추가하십시오.

>-[Redux Toolkit 및 React-Redux 패키지 추가] (https://github.com/reduxjs/rtk-github-issues-example/compare/Add_Redux_Toolkit_and_React-Redux_packages~1..reduxjs:Add_Redux_Toolkit_and_React-Redux_packages)

다음으로 루트 리듀서 함수, Redux 스토어, 그리고 컴포넌트 트리에서 해당 스토어를 사용할 수 있도록`<Provider>`와 같은 일반적인 부분을 설정해야합니다.

이 과정에서 앱에 대한 "핫 모듈 교체"를 설정합니다. 이렇게하면 리듀서 로직이나 구성 요소 트리를 변경할 때마다 Create-React-App이 페이지를 완전히 새로 고칠 필요없이 앱을 다시 빌드하고 변경된 코드를 실행중인 앱으로 스왑합니다.

#### Root Reducer 만들기

>-[Reducer HMR로 저장소 및 루트 감속기 추가] (https://github.com/reduxjs/rtk-github-issues-example/compare/Add_store_and_root_reducer_with_reducer_HMR~1..reduxjs:Add_store_and_root_reducer_with_reducer_HMR)

먼저 루트 감속기 함수를 만듭니다. 아직 슬라이스가 없으므로 빈 객체를 반환합니다.

그러나 우리 코드가 Redux 저장소 상태에 액세스해야 할 때마다 'state'변수의 유형을 선언해야하기 때문에 해당 루트 상태 객체에 대한 TypeScript 유형이 무엇인지 알고 싶습니다 (예 : `mapState` 함수,`useSelector` 선택기 및 썽크의`getState`).

각 상태 슬라이스에 대해 올바른 유형으로 TS 유형을 수동으로 작성할 수 있지만 슬라이스의 상태 구조를 변경할 때마다 해당 유형을 계속 업데이트해야합니다. 다행히 TS는 우리가 이미 작성한 코드에서 유형을 추론하는 데 일반적으로 능숙합니다. 이 경우 "이 유형은`rootReducer`에서 반환되는 모든 유형입니다"라는 유형을 정의 할 수 있으며, TS는 코드가 변경됨에 따라 포함 된 내용을 자동으로 파악합니다. 해당 유형을 내 보내면 앱의 다른 부분에서 사용할 수 있으며 최신 상태임을 압니다. 우리가해야 할 일은 내장 TS`ReturnType` 유틸리티 유형을 사용하고 "`rootReducer` 함수 유형"을 일반 인수로 입력하는 것입니다.

**app/rootReducer.ts**

```ts
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
```

#### 스토어 설정 및 HMR

다음으로 루트 리듀서의 핫 리로딩을 포함하여 스토어 인스턴스를 생성합니다. [`module.hot` API for reloading] (https://webpack.js.org/concepts/hot-module-replacement/)을 사용하여 루트 감속기 함수의 새 버전을 언제든지 다시 가져올 수 있습니다. 다시 컴파일하고 대신 새 버전을 사용하도록 상점에 알립니다.

**app/store.ts**

```ts
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch

export default store
```

`require ( './ rootReducer'). default`는 약간 이상해 보입니다. 이는 CommonJS 동기 가져 오기 구문을 ES 모듈과 혼합하기 때문에 "기본 내보내기"는`default`라는 개체 필드에 있습니다. 우리는 아마도`import ()`를 사용하고 감속기 교체를 비동기 적으로 처리했을 수도 있습니다.

####`Provider` 렌더링

이제 저장소가 생성되었으므로 React 컴포넌트 트리에 추가 할 수 있습니다.

>-[Render Redux Provider with app HMR] (https://github.com/reduxjs/rtk-github-issues-example/compare/Render_Redux_Provider_with_app_HMR~1..reduxjs:Render_Redux_Provider_with_app_HMR)

루트 리듀서와 마찬가지로 컴포넌트 파일이 변경 될 때마다 React 컴포넌트 트리를 핫 리로드 할 수 있습니다. 가장 좋은 방법은`<App>`구성 요소를 가져 와서 렌더링하는 함수를 작성하고 시작시 한 번 호출하여 평소와 같이 React 구성 요소 트리를 표시 한 다음 구성 요소가 변경 될 때마다 해당 함수를 재사용하는 것입니다.

**index.tsx**

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './app/store'

import './index.css'

const render = () => {
  const App = require('./app/App').default

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}
```


## 메인 앱 디스플레이 변환

메인 스토어 설정이 완료되면 이제 실제 앱 로직을 Redux를 사용하도록 변환 할 수 있습니다.

### 기존 앱 상태 평가

현재 최상위 <`App>`구성 요소는 React`useState` 후크를 사용하여 여러 정보를 저장합니다.

-선택한 Github 조직 및 저장소
-현재 호 목록 페이지 번호
-문제 목록을 보는지 아니면 특정 문제에 대한 세부 정보를 보는지

한편`<RepoSearchForm>`구성 요소는 상태 후크를 사용하여 제어 된 양식 입력에 대해 진행중인 작업 값을 저장합니다.

Redux FAQ에는 [Redux에 데이터를 넣는 것이 합리적 일 때에 대한 몇 가지 경험 규칙] (https://redux.js.org/faq/organizing-state#do-i-have-to-put-all-my -state-into-redux- 나는 항상 사용-반응 -setstate). 이 경우`<App>`에서 상태 값을 추출하여 Redux 스토어에 넣는 것이 합리적입니다. 현재이를 사용하는 구성 요소는 하나 뿐이지 만 더 큰 앱에는 해당 값을 고려하는 여러 구성 요소가있을 수 있습니다. HMR을 설정 했으므로 나중에 구성 요소 트리를 편집 할 때 해당 값을 유지하는 것도 도움이 될 것입니다.

반면에 WIP 양식 값을 Redux 저장소에 _ 할 수는 있지만 _ 그렇게해도 실질적인 이점은 없습니다. `<RepoSearchForm>`구성 요소 만 해당 값에 관심이 있으며 다른 경험 규칙은 여기에 적용되지 않습니다. 일반적으로 [대부분의 양식 상태는 Redux에 보관해서는 안됩니다] (https://redux.js.org/faq/organizing-state#should-i-put-form-state-or-other-ui-state -in-my-store). 그래서 우리는 그것을 내버려 둘 것입니다.

### 초기 상태 슬라이스 생성

첫 번째 단계는 현재`<App>`에 보관되고있는 데이터를 살펴보고이를 "문제 표시"슬라이스의 유형과 초기 상태 값으로 바꾸는 것입니다. 거기에서 리듀서를 정의하여 적절하게 업데이트 할 수 있습니다.

전체 슬라이스의 소스를 살펴본 다음 어떤 작업을하는지 분석해 보겠습니다.

>-[UI 표시를위한 초기 상태 슬라이스 추가](https://github.com/reduxjs/rtk-github-issues-example/compare/Add_initial_state_slice_for_UI_display~1..reduxjs:Add_initial_state_slice_for_UI_display)

**features/issuesDisplay/issuesDisplaySlice.ts**

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CurrentDisplay {
  displayType: 'issues' | 'comments'
  issueId: number | null
}

interface CurrentDisplayPayload {
  displayType: 'issues' | 'comments'
  issueId?: number
}

interface CurrentRepo {
  org: string
  repo: string
}

type CurrentDisplayState = {
  page: number
} & CurrentDisplay &
  CurrentRepo

let initialState: CurrentDisplayState = {
  org: 'rails',
  repo: 'rails',
  page: 1,
  displayType: 'issues',
  issueId: null
}

const issuesDisplaySlice = createSlice({
  name: 'issuesDisplay',
  initialState,
  reducers: {
    displayRepo(state, action: PayloadAction<CurrentRepo>) {
      const { org, repo } = action.payload
      state.org = org
      state.repo = repo
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setCurrentDisplayType(state, action: PayloadAction<CurrentDisplayPayload>) {
      const { displayType, issueId = null } = action.payload
      state.displayType = displayType
      state.issueId = issueId
    }
  }
})

export const {
  displayRepo,
  setCurrentDisplayType,
  setCurrentPage
} = issuesDisplaySlice.actions

export default issuesDisplaySlice.reducer
```

#### 상태 내용 유형 선언

org 및 repo 값은 단순한 문자열이며 현재 문제 페이지는 숫자 일뿐입니다. 문자열 상수의 합집합을 사용하여 문제 목록 또는 단일 문제의 세부 정보를 표시하는지 여부를 나타내며 세부 정보 인 경우 문제 ID 번호를 알아야합니다.

나중에 액션 유형에서 재사용 할 수 있도록 이러한 부분에 대한 유형을 스스로 정의 할 수 있으며 추적하려는 전체 상태에 대해 더 큰 유형으로 결합 할 수도 있습니다.

상태에 대해 나열된 유형에 페이지 번호가 포함되어 있기 때문에 "현재 표시"부분에는 약간의 추가 작업이 필요하지만 UI는 문제 목록으로 전환하는 작업을 전달할 때 하나를 포함하지 않습니다. 따라서 해당 작업의 내용에 대해 별도의 유형을 정의합니다.

#### 슬라이스 상태 및 작업에 대한 유형 선언

`createSlice`는 두 가지 소스에서 유형을 추론하려고합니다.

-상태 유형은 'initialState'필드의 유형을 기반으로합니다.
-각 감속기는 처리 할 작업 유형을 선언해야합니다.

상태 유형은 각 케이스 리듀서에서 'state'매개 변수의 유형과 생성 된 리듀서 함수의 반환 유형으로 사용되며, 해당 생성 된 액션 생성자에 대해 액션 유형이 사용됩니다. (또는 감속기와 함께 "콜백 준비"를 정의하는 경우 준비 콜백의 인수가 작업 생성자에게도 사용되며 콜백의 반환 값은 감속기가 예상하는 작업에 대해 선언 된 유형과 일치해야합니다.)

감속기에서 작업 유형을 선언 할 때 사용할 기본 유형은 **`PayloadAction <PayloadType>`**입니다. `createAction`은이 유형을 반환 값으로 사용합니다.

특정 감속기를 예로 들어 보겠습니다.

```ts
setCurrentPage(state, action: PayloadAction<number>) {
    state.page = action.payload
},
```

`createSlice`는 이것이 우리의`initialState` (`CurrentDisplayState` 유형)와 동일한 유형이어야한다는 것을 이미 알고 있기 때문에`state`에 대한 유형을 선언 할 필요가 없습니다.

액션 객체는`PayloadAction`이며`action.payload`는`숫자`라고 선언합니다. 그런 다음`state.page = action.payload`를 할당하면 TS는 숫자에 숫자를 할당하고 있음을 알고 올바르게 작동합니다. `issuesDisplaySlice.actions.setCurrentPage ()`를 호출하려고한다면 그 숫자가 액션의 페이로드가되기 때문에 인수로 숫자를 전달해야합니다.

마찬가지로`displayRepo (state, action : PayloadAction <CurrentRepo>)`의 경우 TS는`action.payload`가`org` 및`repo` 문자열 필드가있는 객체임을 알고 있으며이를 상태에 할당 할 수 있습니다. (이 "mutative"할당은 'createSlice'가 내부 Immer를 사용하기 때문에 안전하고 가능합니다!)

#### Slice Reducer 사용

다른 예제와 마찬가지로, 이슈 디스플레이 슬라이스 리듀서를 루트 리듀서로 가져 와서 추가해야합니다.

**app/rootReducer.ts**

```diff
import { combineReducers } from '@reduxjs/toolkit'

+import issuesDisplayReducer from 'features/issuesDisplay/issuesDisplaySlice'

-const rootReducer = combineReducers({})
+const rootReducer = combineReducers({
+ issuesDisplay: issuesDisplayReducer
+})
```

### 이슈 디스플레이 변환

이슈 디스플레이 슬라이스가 스토어에 연결되었으므로 내부 구성 요소 상태 대신 사용하도록`<App>`을 업데이트 할 수 있습니다.

>-[주요 이슈 디스플레이 컨트롤을 Redux로 변환](https://github.com/reduxjs/rtk-github-issues-example/compare/Convert_main_issues_display_control_to_Redux~1..reduxjs:Convert_main_issues_display_control_to_Redux)

`App` 구성 요소에 세 가지 그룹을 변경해야합니다.

-`useState` 선언을 제거해야합니다.
-Redux 스토어에서 해당 상태 값을 읽어야합니다.
-사용자가 구성 요소와 상호 작용할 때 Redux 작업을 전달해야합니다.

전통적으로 마지막 두 가지 측면은 [React-Redux`connect` API](https://react-redux.js.org/api/connect)를 통해 처리됩니다. 데이터를 검색하는`mapState` 함수와 액션 생성자를 보관하는`mapDispatch` 함수를 작성하고,이를`connect`에 전달하고, 모든 것을 props로 가져온 다음`this.props.setCurrentPage ()`를 호출하여 해당 액션 유형을 전달합니다.

그러나 [React-Redux에는 이제 후크 API가 있습니다](https://react-redux.js.org/api/hooks), 스토어와보다 직접적으로 상호 작용할 수 있습니다. `useSelector`를 사용하면 스토어에서 데이터를 읽고 업데이트를 구독 할 수 있으며`useDispatch`는 스토어의`dispatch` 메소드에 대한 참조를 제공합니다. 이 튜토리얼의 나머지 부분에서이를 사용합니다.

먼저 필요한 함수와 앞서 선언 한`RootState` 유형을 가져 와서 하드 코딩 된 기본 조직 및 저장소 문자열을 제거합니다.
**app/App.tsx**

```diff
import React, { useState } from 'react'
+import { useSelector, useDispatch } from 'react-redux'

+import { RootState } from './rootReducer'

import { RepoSearchForm } from 'features/repoSearch/RepoSearchForm'
import { IssuesListPage } from 'features/issuesList/IssuesListPage'
import { IssueDetailsPage } from 'features/issueDetails/IssueDetailsPage'

-const ORG = 'rails'
-const REPO = 'rails'
+import {
+  displayRepo,
+  setCurrentDisplayType,
+  setCurrentPage
+} from 'features/issuesDisplay/issuesDisplaySlice'

import './App.css'
```

다음으로,`App` 상단에서 이전`useState` 후크를 제거하고`useDispatch` 및`useSelector` 호출로 대체합니다.

```diff
const App: React.FC = () => {
- const [org, setOrg] = useState(ORG)
- const [repo, setRepo] = useState(REPO)
- const [page, setPage] = useState(1)
- const [currentDisplay, setCurrentDisplay] = useState<CurrentDisplay>({
-   type: 'issues'
- })
+ const dispatch = useDispatch()

+ const { org, repo, displayType, page, issueId } = useSelector(
+   (state: RootState) => state.issuesDisplay
+ )
```

"selector"함수를`useSelector`에 전달합니다.이 함수는 Redux 스토어 상태를 매개 변수로 받아들이고 일부 결과를 반환하는 함수입니다. 우리는`state` 인자의 유형이 루트 감속기에서 정의한`RootState` 유형임을 선언하므로 TS는`state` 안에 어떤 필드가 있는지 알 수 있습니다. `state.issuesDisplay` 슬라이스를 하나의 조각으로 검색하고 결과 객체를 구성 요소 내부의 여러 변수로 분해 할 수 있습니다.

이제 이전과 같이 컴포넌트 내부에 거의 동일한 데이터 변수가 있습니다.`useState` 후크 대신 Redux 스토어에서 온 것입니다.

마지막 단계는`useState` setter를 호출하는 대신 사용자가 무언가를 할 때마다 Redux 액션을 전달하는 것입니다.

```diff
  const setOrgAndRepo = (org: string, repo: string) => {
-   setOrg(org)
-   setRepo(repo)
+   dispatch(displayRepo({ org, repo }))
  }

  const setJumpToPage = (page: number) => {
-   setPage(page)
+   dispatch(setCurrentPage(page))
  }

  const showIssuesList = () => {
-   setCurrentDisplay({ type: 'issues' })
+   dispatch(setCurrentDisplayType({ displayType: 'issues' }))
  }

  const showIssueComments = (issueId: number) => {
-   setCurrentDisplay({ type: 'comments', issueId })
+   dispatch(setCurrentDisplayType({ displayType: 'comments', issueId }))
  }
```

일반적인`connect` +`mapDispatch` 사용법과 달리 여기서는`dispatch ()`를 직접 호출하고 올바른`payload` 값으로 액션 생성자를 호출하고 결과 액션을`dispatch`에 전달합니다.

이것이 작동하는지 봅시다!

<iframe  src="https://codesandbox.io/embed/rtk-github-issues-example-02-issues-display-tdx2w?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fapp%2FApp.tsx&theme=dark&view=preview"
     style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
     title="rtk-github-issues-example-02-issues-display"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

"이건 이전 예제와 똑같이 보이고 동작한다"고 생각한다면... 훌륭합니다! 즉, 지금까지 논리의 첫 번째 비트를 Redux로 올바르게 변환했음을 의미합니다. Redux 로직이 실행 중인지 확인하려면 "새 창에서 열기"버튼을 클릭하고 Redux DevTools Extension에서 상점을 검사하십시오.

## 이슈 목록 페이지 변환

다음 작업은`<IssuesListPage>`구성 요소를 Redux를 통해 문제를 가져오고 저장하도록 변환하는 것입니다. 현재`<IssuesListPage>`는 가져온 이슈를 포함하여 모든 데이터를 `useState`hooks에 저장하고 있습니다. ʻuseEffect` 후크에서 AJAX 호출을 수행하여 문제를 가져옵니다.

처음에 언급했듯이 실제로 이것에는 잘못된 것이 없습니다! React 구성 요소가 자체 데이터를 가져와 저장하는 것은 완전히 괜찮습니다. 그러나이 튜토리얼의 목적을 위해 Redux 변환 프로세스가 어떻게 보이는지보고 싶습니다.

### 문제 목록 구성 요소 검토

다음은`<IssuesListPage>`의 초기 청크입니다.

```ts
export const IssuesListPage = ({
  org,
  repo,
  page = 1,
  setJumpToPage,
  showIssueComments
}: ILProps) => {
  const [issuesResult, setIssues] = useState<IssuesResult>({
    pageLinks: null,
    pageCount: 1,
    issues: []
  })
  const [numIssues, setNumIssues] = useState<number>(-1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [issuesError, setIssuesError] = useState<Error | null>(null)

  const { issues, pageCount } = issuesResult

  useEffect(() => {
    async function fetchEverything() {
      async function fetchIssues() {
        const issuesResult = await getIssues(org, repo, page)
        setIssues(issuesResult)
      }

      async function fetchIssueCount() {
        const repoDetails = await getRepoDetails(org, repo)
        setNumIssues(repoDetails.open_issues_count)
      }

      try {
        await Promise.all([fetchIssues(), fetchIssueCount()])
        setIssuesError(null)
      } catch (err) {
        console.error(err)
        setIssuesError(err)
      } finally {
        setIsLoading(false)
      }
    }

    setIsLoading(true)

    fetchEverything()
  }, [org, repo, page])

  // omit rendering
}
```

`useEffect` 콜백은 외부 'async function fetchEverything ()'을 정의하고 즉시 호출합니다. `useEffect` 콜백 자체를 비동기로 선언 할 수 없기 때문입니다. React는 `useEffect` 콜백의 반환 값이 정리 함수가 될 것으로 예상합니다. 모든 비동기 함수는 자동으로`Promise`를 반환하기 때문에 React는 대신`Promise`를 인식하고 React가 실제로 올바르게 정리하지 못하게합니다.

내부에서 이슈를 가져오고 미해결 이슈 수를 가져 오는 두 가지 비동기 함수를 더 정의하고 둘 다 호출합니다. 그런 다음 두 함수가 성공적으로 해결 될 때까지 기다립니다. (이 논리를 구성 할 수있는 몇 가지 다른 방법이 있지만 예제로는 충분했습니다.)

### Thunk에서 생각하기

#### "Thunk"란 무엇입니까?

Redux 코어 (즉,`createStore`)는 완전히 동 기적입니다. `store.dispatch()`를 호출하면 스토어가 루트 리듀서를 실행하고 반환 값을 저장하고 구독자 콜백을 실행하고 일시 중지없이 반환합니다. 기본적으로 모든 비동기 성은 저장소 외부에서 발생해야합니다.

그러나 현재 스토어 상태를 디스패치하거나 확인하여 비동기 로직이 스토어와 상호 작용하게하려면 어떻게해야할까요? 이것이 바로 [Redux 미들웨어] (https://redux.js.org/advanced/middleware)가 들어오는 곳입니다. 스토어를 확장하고 다음을 수행 할 수 있습니다.

-조치가 전달 될 때 추가 논리 실행 (예 : 조치 및 상태 로깅)
-디스패치 된 작업 일시 중지, 수정, 지연, 교체 또는 중지
-`dispatch` 및`getState`에 대한 액세스 권한이있는 추가 코드 작성
-함수 나 프라 미스와 같은 일반 액션 객체 외에 다른 값을 가로 채고 대신 실제 액션 객체를 디스패치하여 받아들이는 방법을 'dispatch'에 가르칩니다.

가장 일반적인 Redux 미들웨어는 [`redux-thunk`] (https://github.com/reduxjs/redux-thunk)입니다. "thunk"라는 단어는 "나중까지 계산을 지연시키는 기능"을 의미합니다. 우리의 경우 Redux 스토어에 썽크 미들웨어를 추가하면 함수를`store.dispatch ()`에 직접 전달할 수 있습니다. 썽크 미들웨어는 함수를보고 실제로 "실제"저장소에 도달하는 것을 방지하고 함수를 호출하고`dispatch` 및`getState`를 인수로 전달합니다. 따라서 "thunk function"은 다음과 같습니다.

```js
function exampleThunkFunction(dispatch, getState) {
  // do something useful with dispatching or the store state here
}

// normally an error, but okay if the thunk middleware is added
store.dispatch(exampleThunkFunction)
```

thunk 함수 내에서 원하는 코드를 작성할 수 있습니다. 가장 일반적인 사용법은 AJAX 호출을 통해 일부 데이터를 가져오고 해당 데이터를 Redux 저장소에로드하는 작업을 보내는 것입니다. ʻasync / await` 구문을 사용하면 AJAX 호출을 수행하는 썽크를 더 쉽게 작성할 수 있습니다.

일반적으로 우리는 코드에 액션 객체를 직접 작성하지 않습니다. 액션 생성 함수를 사용하여 만들고`dispatch (addTodo ())`처럼 사용합니다. 같은 방식으로, 우리는 일반적으로 다음과 같이 썽크 함수를 반환하는 "thunk action creator"함수를 작성합니다.

```js
function exampleThunk() {
  return function exampleThunkFunction(dispatch, getState) {
    // do something useful with dispatching or the store state here
  }
}

// normally an error, but okay if the thunk middleware is added
store.dispatch(exampleThunk())
```

#### 왜 Thunks를 쓸까요?

이 모든 것의 요점이 무엇인지 궁금 할 것입니다. 썽크를 사용하는 데는 몇 가지 이유가 있습니다.

- thunk를 사용하면 _a_ Redux 스토어와 상호 작용하는 재사용 가능한 로직을 작성할 수 있지만 특정 스토어 인스턴스를 참조 할 필요가 없습니다.
- Thunk를 사용하면 구성 요소 외부로 더 복잡한 논리를 이동할 수 있습니다.
- 컴포넌트의 관점에서 보면 평범한 액션을 전달하든 비동기 로직을 ​​시작하든 상관하지 않습니다. 단지`dispatch (doSomething())`을 호출하고 계속 진행합니다.
- Thunk는 promise와 같은 값을 반환하여 구성 요소 내부의 논리가 다른 작업이 완료 될 때까지 기다릴 수 있습니다.

자세한 설명은 [`redux-thunk`문서](https://github.com/reduxjs/redux-thunk#why-do-i-need-this)를 참조하세요.

비동기 기능을 추가하는 다른 종류의 Redux 미들웨어가 많이 있습니다. 가장 인기있는 것은 생성기 함수를 사용하는 [`redux-saga`](https://redux-saga.js.org/)와 [`redux-observable`](https://redux.js.org/faq/actions#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else).

그러나 sagas 및 Observable은 유용하지만 대부분의 앱에는 제공하는 성능과 기능이 필요하지 않습니다. 그래서 **thunks는 Redux**로 비동기 로직을 ​​작성하기위한 기본 권장 방식입니다.

#### Redux Toolkit에서 Thunk 작성하기

썽크 함수를 작성하려면 설정 프로세스의 일부로 'redux-thunk'미들웨어를 저장소에 추가해야합니다. Redux Toolkit의`configureStore` 기능은 자동으로 수행됩니다. [`thunk`는 기본 미들웨어 중 하나입니다] (../ api / getDefaultMiddleware.md).

그러나 Redux Toolkit은 현재 썽크 함수 작성을위한 특수 함수 나 구문을 제공하지 않습니다. 특히`createSlice ()`호출의 일부로 정의 할 수 없습니다. 감속기 로직과 별도로 작성해야합니다.

일반적인 Redux 앱에서 썽크 액션 생성자는 보통 일반 액션 생성자와 함께 "액션"파일에 정의됩니다. Thunks는 일반적으로`dispatch (dataLoaded (response.data))`와 같은 일반 작업을 전달합니다.

별도의 "작업"파일이 없기 때문에 이러한 썽크를 "슬라이스"파일에 직접 작성하는 것이 좋습니다. 이렇게하면 슬라이스에서 일반 액션 제작자에 액세스 할 수 있으며 썽크 함수가 어디에 있는지 쉽게 찾을 수 있습니다.

### Github Repo 세부 정보를 가져 오는 논리

#### 재사용 가능한 Thunk 함수 유형 추가

썽크 미들웨어가 이미 설정되어 있으므로 작업을 수행 할 필요가 없습니다. 그러나 썽크에 대한 TypeScript 유형은 다소 길고 혼란스럽고 일반적으로 우리가 작성하는 모든 썽크 함수에 대해 동일한 유형 선언을 반복해야합니다.

더 진행하기 전에 대신 재사용 할 수있는 유형 선언을 추가해 보겠습니다.

> - [Add AppThunk type](https://github.com/reduxjs/rtk-github-issues-example/compare/Add_AppThunk_type~1..reduxjs:Add_AppThunk_type)

**app/store.ts**

```diff
-import { configureStore } from '@reduxjs/toolkit'
+import { configureStore, Action } from '@reduxjs/toolkit'
+import { ThunkAction } from 'redux-thunk'

-import rootReducer from './rootReducer'
+import rootReducer, { RootState } from './rootReducer'

export type AppDispatch = typeof store.dispatch

+export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
```

`AppThunk` 유형은 우리가 사용하는 "액션"이 특히 썽크 함수임을 선언합니다. 썽 크는 몇 가지 추가 유형 매개 변수로 사용자 정의됩니다.

1. 반환 값 : 썽크가 아무것도 반환하지 않습니다.
2.`getState`의 상태 유형 :`RootState` 유형을 반환합니다.
3. "추가 인수": 추가 값을 전달하도록 썽크 미들웨어를 사용자 정의 할 수 있지만이 앱에서는 그렇게하지 않습니다.
4.`dispatch`에서 허용하는 작업 유형 :`type`이 문자열 인 모든 작업.

여기에 다른 유형 설정을 원하는 경우가 많이 있지만 이것이 아마도 가장 일반적인 설정일 것입니다. 이렇게하면 썽크를 작성할 때마다 동일한 유형 선언이 반복되는 것을 방지 할 수 있습니다.

#### Repo 세부 정보 조각 추가

이제 해당 유형이 있으므로 리포지토리에 대한 세부 정보를 가져 오는 상태 조각을 작성할 수 있습니다.

> - [Add a slice for storing repo details](https://github.com/reduxjs/rtk-github-issues-example/compare/Add_a_slice_for_storing_repo_details~1..reduxjs:Add_a_slice_for_storing_repo_details)

**features/repoSearch/repoDetailsSlice.ts**

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from 'app/store'

import { RepoDetails, getRepoDetails } from 'api/githubAPI'

interface RepoDetailsState {
  openIssuesCount: number
  error: string | null
}

const initialState: RepoDetailsState = {
  openIssuesCount: -1,
  error: null
}

const repoDetails = createSlice({
  name: 'repoDetails',
  initialState,
  reducers: {
    getRepoDetailsSuccess(state, action: PayloadAction<RepoDetails>) {
      state.openIssuesCount = action.payload.open_issues_count
      state.error = null
    },
    getRepoDetailsFailed(state, action: PayloadAction<string>) {
      state.openIssuesCount = -1
      state.error = action.payload
    }
  }
})

export const {
  getRepoDetailsSuccess,
  getRepoDetailsFailed
} = repoDetails.actions

export default repoDetails.reducer

export const fetchIssuesCount = (
  org: string,
  repo: string
): AppThunk => async dispatch => {
  try {
    const repoDetails = await getRepoDetails(org, repo)
    dispatch(getRepoDetailsSuccess(repoDetails))
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()))
  }
}
```

첫 번째 부분은 간단 해 보입니다. 슬라이스 상태 모양, 초기 상태 값을 선언하고 열린 문제 수 또는 오류 문자열을 저장하는 리듀서로 슬라이스를 작성한 다음 액션 생성자와 리듀서를 내 보냅니다.

하단에는 첫 번째 데이터 가져 오기 썽크가 있습니다. 여기서 주목해야 할 중요한 사항은 다음과 같습니다.

- **Thunk는 슬라이스와 별도로 정의됩니다**. RTK에는 현재 슬라이스의 일부로 썽크를 정의하는 특수 구문이 없기 때문입니다.
- **Thunk Action Creator를 화살표 함수로 선언하고 방금 만든 `AppThunk` 유형을 사용합니다.** 화살표 함수 또는`function`키워드를 사용하여 썽크 함수와 썽크 액션 생성자를 작성할 수 있습니다. 대신`function fetchIssueCount () : AppThunk`로 작성할 수도 있습니다.
- **thunk 함수 자체에 `async / await` 구문을 사용합니다.** 다시 말하지만, 이것은 필수는 아니지만 일반적으로 `async / await`는 중첩 된 Promise`.then ()`체인보다 코드가 더 간단합니다.
- **Thunk 내부에서 `createSlice` 호출로 생성 된 일반 액션 크리에이터를 export합니다**.

표시되지는 않았지만 루트 감속기에 슬라이스 감속기를 추가합니다.

#### Thunk에서 비동기 에러 핸들링

작성된대로`fetchIssuesCount ()`썽크에 잠재적 인 결함이 하나 있습니다. `try / catch` 블록은 현재 발생한 오류를 포착합니다.
(실제 실패한 AJAX 호출과 같은)`getRepoDetails ()`에 의해 이루어 지지만`getRepoDetailsSuccess ()`의 디스패치 내에서 발생하는 모든 오류도 포착합니다. 두 경우 모두`getRepoDetailsFailed ()`를 전달합니다. 이것은 실제 오류가 무엇인지에 대한 잘못된 이유를 보여줄 수 있으므로 오류를 처리하는 데 바람직한 방법이 아닐 수 있습니다.

이 문제를 방지하기 위해 코드를 재구성 할 수있는 몇 가지 방법이 있습니다. 첫째, `await`는 성공 및 실패 사례에 대해 별도의 콜백이 전달되는 표준 약속 체인으로 전환 될 수 있습니다.

```js
getRepoDetails(org, repo).then(
  // success callback
  repoDetails => dispatch(getRepoDetailsSuccess(repoDetails)),
  // error callback
  err => dispatch(getRepoDetailsFailed(err.toString()))
)
```

또는 오류가 발견되지 않은 경우에만 dispatch하도록 thunk를 다시 작성할 수 있습니다.

```ts
 let repoDetails
  try {
    repoDetails = await getRepoDetails(org, repo)
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()))
    return
  }
  dispatch(getRepoDetailsSuccess(repoDetails))
}
```

간단하게하기 위해 나머지 튜토리얼에서는 로직을 그대로 사용하겠습니다.

### 문제 목록에서 Repo 세부 정보 가져 오기

이제 저장소 세부 정보 조각이 있으므로`<IssuesListPage>`구성 요소에서 사용할 수 있습니다.

> - [Redux를 통해 리포지토리 세부 정보를 가져 오도록 IssuesListPage 업데이트](https://github.com/reduxjs/rtk-github-issues-example/compare/Update_IssuesListPage_to_fetch_repo_details_via_Redux~1..reduxjs:Update_IssuesListPage_to_fetch_repo_details_via_Redux)

**features/issuesList/IssuesListPage.tsx**

```diff
import React, { useState, useEffect } from 'react'
+import { useSelector, useDispatch } from 'react-redux'

-import { getIssues, getRepoDetails, IssuesResult } from 'api/githubAPI'
+import { getIssues, IssuesResult } from 'api/githubAPI'

+import { fetchIssuesCount } from 'features/repoSearch/repoDetailsSlice'
+import { RootState } from 'app/rootReducer'

// omit code

export const IssuesListPage = ({
  org,
  repo,
  page = 1,
  setJumpToPage,
  showIssueComments
}: ILProps) => {
+ const dispatch = useDispatch()

  const [issuesResult, setIssues] = useState<IssuesResult>({
    pageLinks: null,
    pageCount: 1,
    issues: []
  })
- const [numIssues, setNumIssues] = useState<number>(-1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [issuesError, setIssuesError] = useState<Error | null>(null)
+ const openIssueCount = useSelector(
+   (state: RootState) => state.repoDetails.openIssuesCount
+ )

  useEffect(() => {
    async function fetchEverything() {
      async function fetchIssues() {
        const issuesResult = await getIssues(org, repo, page)
        setIssues(issuesResult)
      }

-     async function fetchIssueCount() {
-       const repoDetails = await getRepoDetails(org, repo)
-       setNumIssues(repoDetails.open_issues_count)
-     }

      try {
-       await Promise.all([fetchIssues(), fetchIssueCount()])
+       await Promise.all([
+         fetchIssues(),
+         dispatch(fetchIssuesCount(org, repo))
+       ])
        setIssuesError(null)
      } catch (err) {
        console.error(err)
        setIssuesError(err)
      } finally {
        setIsLoading(false)
      }
    }

    setIsLoading(true)

    fetchEverything()
- }, [org, repo, page])
+ }, [org, repo, page, dispatch])
```

`<IssuesListPage>`에서 새로운`fetchIssuesCount` 썽크를 가져오고 구성 요소를 다시 작성하여 Redux 저장소에서 열린 문제 수 값을 읽습니다.

`useEffect` 내에서`fetchIssueCount`함수를 삭제하고 대신`fetchIssuesCount`를 전달합니다.

### 저장소에 대한 문제를 가져 오기위한 논리

다음으로 미해결 문제 목록을 가져 오는 로직을 교체해야합니다.

> - [문제 상태 추적을위한 슬라이스 추가](https://github.com/reduxjs/rtk-github-issues-example/compare/Add_a_slice_for_tracking_issues_state~1..reduxjs:Add_a_slice_for_tracking_issues_state)

**features/issuesList/issuesSlice.ts**

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Links } from 'parse-link-header'

import { Issue, IssuesResult, getIssue, getIssues } from 'api/githubAPI'
import { AppThunk } from 'app/store'

interface IssuesState {
  issuesByNumber: Record<number, Issue>
  currentPageIssues: number[]
  pageCount: number
  pageLinks: Links | null
  isLoading: boolean
  error: string | null
}

const issuesInitialState: IssuesState = {
  issuesByNumber: {},
  currentPageIssues: [],
  pageCount: 0,
  pageLinks: {},
  isLoading: false,
  error: null
}

function startLoading(state: IssuesState) {
  state.isLoading = true
}

function loadingFailed(state: IssuesState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const issues = createSlice({
  name: 'issues',
  initialState: issuesInitialState,
  reducers: {
    getIssueStart: startLoading,
    getIssuesStart: startLoading,
    getIssueSuccess(state, { payload }: PayloadAction<Issue>) {
      const { number } = payload
      state.issuesByNumber[number] = payload
      state.isLoading = false
      state.error = null
    },
    getIssuesSuccess(state, { payload }: PayloadAction<IssuesResult>) {
      const { pageCount, issues, pageLinks } = payload
      state.pageCount = pageCount
      state.pageLinks = pageLinks
      state.isLoading = false
      state.error = null

      issues.forEach(issue => {
        state.issuesByNumber[issue.number] = issue
      })

      state.currentPageIssues = issues.map(issue => issue.number)
    },
    getIssueFailure: loadingFailed,
    getIssuesFailure: loadingFailed
  }
})

export const {
  getIssuesStart,
  getIssuesSuccess,
  getIssueStart,
  getIssueSuccess,
  getIssueFailure,
  getIssuesFailure
} = issues.actions

export default issues.reducer

export const fetchIssues = (
  org: string,
  repo: string,
  page?: number
): AppThunk => async dispatch => {
  try {
    dispatch(getIssuesStart())
    const issues = await getIssues(org, repo, page)
    dispatch(getIssuesSuccess(issues))
  } catch (err) {
    dispatch(getIssuesFailure(err.toString()))
  }
}

export const fetchIssue = (
  org: string,
  repo: string,
  number: number
): AppThunk => async dispatch => {
  try {
    dispatch(getIssueStart())
    const issue = await getIssue(org, repo, number)
    dispatch(getIssueSuccess(issue))
  } catch (err) {
    dispatch(getIssueFailure(err.toString()))
  }
}
```

이 슬라이스는 약간 더 길지만 이전과 동일한 기본 접근 방식입니다. API 호출 결과를 처리하는 리듀서로 슬라이스를 작성한 다음 해당 결과를 가져와 작업을 전달하는 썽크를 작성합니다. 이 조각에서 새롭고 흥미로운 부분은 다음과 같습니다.

- '가져 오기 시작'및 '가져 오기 실패'리듀서 로직은 단일 문제 및 여러 문제 가져 오기 사례 모두에서 동일합니다. 따라서 우리는 슬라이스 외부에 이러한 함수를 한 번 작성한 다음`reducers` 객체 내부에서 다른 이름으로 여러 번 재사용합니다.
- Github API는 이슈 항목의 배열을 반환하지만, 우리는 [번호로 이슈를 쉽게 찾을 수 있도록 데이터를 "정규화 된"구조로 저장하고 싶습니다](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape). 이 경우`Record <number, Issue>`를 선언하여 일반 객체를 조회 테이블로 사용합니다.

### 이슈 목록에서 이슈 가져 오기

이제 로직을 가져 오는 이슈를 교체하여 `<IssuesListPage>`컴포넌트 변환을 완료 할 수 있습니다.

> - [Redux를 통해 이슈 데이터를 가져 오도록 IssuesListPage 업데이트](https://github.com/reduxjs/rtk-github-issues-example/compare/Update_IssuesListPage_to_fetch_issues_data_via_Redux~1..reduxjs:Update_IssuesListPage_to_fetch_issues_data_via_Redux)

변화를 살펴보자.

**features/issuesList/IssuesListPage.tsx**

```diff
-import React, { useState, useEffect } from 'react'
+import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

-import { getIssues, IssuesResult } from 'api/githubAPI'

import { fetchIssuesCount } from 'features/repoSearch/repoDetailsSlice'
import { RootState } from 'app/rootReducer'

import { IssuesPageHeader } from './IssuesPageHeader'
import { IssuesList } from './IssuesList'
import { IssuePagination, OnPageChangeCallback } from './IssuePagination'
+import { fetchIssues } from './issuesSlice'

// omit code

  const dispatch = useDispatch()

- const [issuesResult, setIssues] = useState<IssuesResult>({
-   pageLinks: null,
-   pageCount: 1,
-   issues: []
- })
- const [isLoading, setIsLoading] = useState<boolean>(false)
- const [issuesError, setIssuesError] = useState<Error | null>(null)
+ const {
+   currentPageIssues,
+   isLoading,
+   error: issuesError,
+   issuesByNumber,
+   pageCount
+ } = useSelector((state: RootState) => state.issues)


  const openIssueCount = useSelector(
    (state: RootState) => state.repoDetails.openIssuesCount
  )

- const { issues, pageCount } = issuesResult
+ const issues = currentPageIssues.map(
+   issueNumber => issuesByNumber[issueNumber]
+ )

  useEffect(() => {
-   async function fetchEverything() {
-     async function fetchIssues() {
-       const issuesResult = await getIssues(org, repo, page)
-       setIssues(issuesResult)
-     }
-
-     try {
-       await Promise.all([
-        fetchIssues(),
-        dispatch(fetchIssuesCount(org, repo))
-       ])
-       setIssuesError(null)
-     } catch (err) {
-       console.error(err)
-       setIssuesError(err)
-     } finally {
-       setIsLoading(false)
-     }
-   }
-
-    setIsLoading(true)
-
-    fetchEverything()
+    dispatch(fetchIssues(org, repo, page))
+    dispatch(fetchIssuesCount(org, repo))
  }, [org, repo, page, dispatch])
```

`<IssuesListPage>`에서 나머지 `useState` 후크를 제거하고 다른 ʻuseSelector`를 추가하여 Redux 저장소에서 실제 문제 데이터를 검색하고 "현재 페이지 문제 ID"배열에 매핑하여 렌더링 할 문제 목록을 구성합니다. ID로 각 이슈 객체를 조회합니다.

`useEffect`에서 컴포넌트에 직접있는 나머지 데이터 가져 오기 로직을 ​​삭제하고 두 데이터 가져 오기 썽크를 모두 전달합니다.

이것은 구성 요소의 논리를 단순화하지만 수행중인 작업을 제거하지 않고 다른 곳으로 옮겼습니다. 다시 말하지만, 두 접근 방식이 "올바른"것인지 "틀렸는 지"가 아니라 데이터와 논리가 어디에 있는지, 어떤 접근 방식이 앱과 상황에 대해 더 유지 관리 할 수 ​​있는지에 대한 질문 일뿐입니다.

## 이슈 세부 정보 페이지 변환

변환에 남은 마지막 주요 작업은`<IssueDetailsPage>`구성 요소입니다. 그것이 무엇을하는지 살펴 보자.

### 문제 세부 정보 구성 요소 검토

다음은 상태 및 데이터 가져 오기를 포함하는`<IssueDetailsPage>`의 현재 전반입니다.

```ts
export const IssueDetailsPage = ({
  org,
  repo,
  issueId,
  showIssuesList
}: IDProps) => {
  const [issue, setIssue] = useState<Issue | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [commentsError, setCommentsError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchIssue() {
      try {
        setCommentsError(null)
        const issue = await getIssue(org, repo, issueId)
        setIssue(issue)
      } catch (err) {
        setCommentsError(err)
      }
    }

    fetchIssue()
  }, [org, repo, issueId])

  useEffect(() => {
    async function fetchComments() {
      if (issue !== null) {
        const comments = await getComments(issue.comments_url)
        setComments(comments)
      }
    }

    fetchComments()
  }, [issue])

  // omit rendering
}
```

`<IssuesListPage>`와 매우 유사합니다. 현재 표시된 ʻIssue`, 가져온 코멘트 및 잠재적 오류를 저장합니다. 현재 이슈를 ID로 가져오고 이슈가 변경 될 때마다 주석을 가져 오는 ʻuseEffect` 후크가 있습니다.

### 현재 문제 가져 오기

우리는 이미 단일 이슈를 가져 오기위한 Redux 로직을 가지고 있습니다. 이미 ʻissuesSlice.ts`의 일부로 작성했습니다. 따라서 바로 여기`<IssueDetailsPage>`에서 바로 사용할 수 있습니다.
> - [Redux를 통해 이슈 데이터를 가져 오도록 IssueDetailsPage 업데이트](https://github.com/reduxjs/rtk-github-issues-example/compare/Update_IssueDetailsPage_to_fetch_issue_data_via_Redux~1..reduxjs:Update_IssueDetailsPage_to_fetch_issue_data_via_Redux)

**features/issueDetails/IssueDetailsPage.tsx**

```diff
import React, { useState, useEffect } from 'react'
+import { useSelector, useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import classnames from 'classnames'

import { insertMentionLinks } from 'utils/stringUtils'
-import { getIssue, getComments, Issue, Comment } from 'api/githubAPI'
+import { getComments, Comment } from 'api/githubAPI'
import { IssueLabels } from 'components/IssueLabels'
+import { RootState } from 'app/rootReducer'
+import { fetchIssue } from 'features/issuesList/issuesSlice'


export const IssueDetailsPage = ({
  org,
  repo,
  issueId,
  showIssuesList
}: IDProps) => {
- const [issue, setIssue] = useState<Issue | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
- const [commentsError, setCommentsError] = useState<Error | null>(null)
+ const [commentsError] = useState<Error | null>(null)

+ const dispatch = useDispatch()

+ const issue = useSelector(
+   (state: RootState) => state.issues.issuesByNumber[issueId]
+ )

  useEffect(() => {
-   async function fetchIssue() {
-     try {
-       setCommentsError(null)
-       const issue = await getIssue(org, repo, issueId)
-       setIssue(issue)
-     } catch (err) {
-       setCommentsError(err)
-     }
-    }
-    fetchIssue()
+   if (!issue) {
+      dispatch(fetchIssue(org, repo, issueId))
+   }
+   // Since we may have the issue already, ensure we're scrolled to the top
+   window.scrollTo({ top: 0 })
- }, [org, repo, issueId])
+ }, [org, repo, issueId, issue, dispatch])
```

우리는 일반적인 패턴을 계속합니다. 기존의 ʻuseState` 후크를 삭제하고 ʻuseSelector`를 통해 ʻuseDispatch` 및 필요한 상태를 가져온 다음`fetchIssue` 썽크를 전달하여 데이터를 가져옵니다.

흥미롭게도 여기에는 실제로 행동에 약간의 변화가 있습니다. 원래 React 코드는 가져온 이슈를`<IssuesListPage>`에 저장했고`<IssueDetailsPage>`는 항상 자체 이슈에 대해 별도의 가져 오기를 수행해야했습니다. 이제 Redux 스토어에 이슈를 저장하고 있기 때문에 대부분의 경우 나열된 이슈는 이미 캐시되어 있어야하며 가져올 필요도 없습니다. 이제 React만으로도 비슷한 일을 할 수 있습니다. 우리가해야 할 일은 부모 컴포넌트에서 이슈를 전달하는 것뿐입니다. 그래도 Redux에 해당 데이터가 있으면 캐싱을 더 쉽게 수행 할 수 있습니다.

(흥미로운 참고 사항 : 첫 번째 렌더링 중에 문제가 존재하지 않았기 때문에 콘텐츠가 없었기 때문에 원래 코드는 항상 페이지를 맨 위로 건너 뛰도록했습니다. 문제가 _does_ 존재하고 즉시 렌더링하면 , 페이지가 이슈 목록의 스크롤 위치를 유지할 수 있으므로 맨 위로 스크롤을 강제해야합니다.)

### Comment 가져 오기 로직

작성할 슬라이스가 하나 더 남아 있습니다. 현재 문제에 대한 주석을 가져 와서 저장해야합니다.

> - [comments data추가를 위한 slice추가](https://github.com/reduxjs/rtk-github-issues-example/compare/Add_a_slice_for_tracking_comments_data~1..reduxjs:Add_a_slice_for_tracking_comments_data)

**features/issueDetails/commentsSlice.ts**

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Comment, getComments, Issue } from 'api/githubAPI'
import { AppThunk } from 'app/store'

interface CommentsState {
  commentsByIssue: Record<number, Comment[] | undefined>
  loading: boolean
  error: string | null
}

interface CommentLoaded {
  issueId: number
  comments: Comment[]
}

const initialState: CommentsState = {
  commentsByIssue: {},
  loading: false,
  error: null
}

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsStart(state) {
      state.loading = true
      state.error = null
    },
    getCommentsSuccess(state, action: PayloadAction<CommentLoaded>) {
      const { comments, issueId } = action.payload
      state.commentsByIssue[issueId] = comments
      state.loading = false
      state.error = null
    },
    getCommentsFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  getCommentsStart,
  getCommentsSuccess,
  getCommentsFailure
} = comments.actions
export default comments.reducer

export const fetchComments = (issue: Issue): AppThunk => async dispatch => {
  try {
    dispatch(getCommentsStart())
    const comments = await getComments(issue.comments_url)
    dispatch(getCommentsSuccess({ issueId: issue.number, comments }))
  } catch (err) {
    dispatch(getCommentsFailure(err))
  }
}
```

이 시점에서 슬라이스는 꽤 익숙해 보일 것입니다. 우리의 주요 상태는 이슈 ID로 입력 된 주석의 조회 테이블입니다. 슬라이스 후, 주어진 이슈에 대한 주석을 가져 오는 썽크를 추가하고 결과 배열을 슬라이스에 저장하기위한 액션을 전달합니다.

### 이슈 댓글 가져 오기

마지막 단계는`<IssueDetailsPage>`에서 댓글 가져 오기 로직을 ​​바꾸는 것입니다.

> - [Redux를 통해 댓글을 가져 오도록 IssueDetailsPage 업데이트](https://github.com/reduxjs/rtk-github-issues-example/compare/Update_IssueDetailsPage_to_fetch_comments_via_Redux~1..reduxjs:Update_IssueDetailsPage_to_fetch_comments_via_Redux)

**features/issueDetails/IssueDetailsPage.tsx**

```diff
-import React, { useState, useEffect } from 'react'
+import React, { useEffect } from 'react'
-import { useSelector, useDispatch } from 'react-redux'
+import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import classnames from 'classnames'

import { insertMentionLinks } from 'utils/stringUtils'
-import { getComments, Comment } from 'api/githubAPI'
import { IssueLabels } from 'components/IssueLabels'
import { RootState } from 'app/rootReducer'
import { fetchIssue } from 'features/issuesList/issuesSlice'

import { IssueMeta } from './IssueMeta'
import { IssueComments } from './IssueComments'
+import { fetchComments } from './commentsSlice'

export const IssueDetailsPage = ({
  org,
  repo,
  issueId,
  showIssuesList
}: IDProps) => {
- const [comments, setComments] = useState<Comment[]>([])
- const [commentsError] = useState<Error | null>(null)
-
  const dispatch = useDispatch()

  const issue = useSelector(
    (state: RootState) => state.issues.issuesByNumber[issueId]
  )

+ const { commentsLoading, commentsError, comments } = useSelector(
+   (state: RootState) => {
+     return {
+       commentsLoading: state.comments.loading,
+       commentsError: state.comments.error,
+       comments: state.comments.commentsByIssue[issueId]
+     }
+   },
+   shallowEqual
+ )

// omit effect
  useEffect(() => {
-   async function fetchComments() {
-     if (issue) {
-       const comments = await getComments(issue.comments_url)
-       setComments(comments)
-     }
-   }
-   fetchComments()
+   if (issue) {
+     dispatch(fetchComments(issue))
+   }
- }, [issue])
+ }, [issue, dispatch])
```

현재 코멘트 데이터를 가져 오기 위해 또 다른 ʻuseSelector` 후크를 추가합니다. 이 경우 로딩 플래그, 잠재적 오류 및이 문제에 대한 실제 코멘트 배열의 세 가지 다른 부분이 필요합니다.

그러나 이로 인해 성능 문제가 발생합니다. 이 선택기가 실행될 때마다`{commentsLoading, commentsError, comments}`라는 새 객체를 반환합니다. **`connect`와 달리 ʻuseSelector`는 기본적으로 참조 동등성에 의존합니다.** 따라서 새 객체를 반환하면 코멘트이 동일하더라도 작업이 전달 될 때마다이 구성 요소가 다시 렌더링됩니다!

이 문제를 해결하는 몇 가지 방법이 있습니다.

- 별도의 'useSelector'호출로 작성할 수 있습니다.
- Reselect의`createSelector`와 같은 메모 된 선택기를 사용할 수 있습니다.
- React-Redux`shallowEqual` 함수를 사용하여 결과를 비교할 수 있으므로 객체의 _contents_가 변경된 경우에만 다시 렌더링이 발생합니다.

이 경우 `useSelector`의 비교 함수로`shallowEqual`을 추가합니다.

## 요약

그리고 그것으로 우리는 끝났습니다! 전체 Github Issues 앱은 이제 썽크를 통해 데이터를 가져오고, Redux에 데이터를 저장하고, React-Redux 후크를 통해 스토어와 상호 작용해야합니다. Github API 호출을위한 Typescript 유형이 있고 API 유형은 Redux 상태 슬라이스에 사용되고 저장소 상태 유형은 React 구성 요소에서 사용됩니다.

우리가 원하면 더 많은 타입 안전성을 추가하기 위해 할 수있는 일이 더 많지만 (예를 들어`dispatch`에 전달할 수있는 가능한 액션 유형을 제한하려는 시도), 이는 너무 많은 추가 노력없이 합리적인 "80 % 솔루션"을 제공합니다.

이제 Redux Toolkit이 실제 응용 프로그램에서 어떻게 보이는지 확실히 이해 하셨기를 바랍니다.

전체 소스 코드와 실행중인 앱을 한 번 더 살펴보면서 마무리하겠습니다.

<iframe src="https://codesandbox.io/embed/rtk-github-issues-example-03-final-ihttc?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2FissueDetails%2FcommentsSlice.ts&theme=dark&view=editor"
     style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
     title="rtk-github-issues-example03-final"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

**Now, go out there and build something cool!**
