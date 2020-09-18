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

If you're thinking "hey, this looks and behaves exactly like the previous example"... then that's great! That means we've correctly converted the first bit of logic to Redux so far. If you want to confirm that there's Redux logic running, try clicking the "Open in New Window" button and inspect the store in the Redux DevTools Extension.

## Converting the Issues List Page

Our next task is to convert the `<IssuesListPage>` component to fetch and store issues via Redux. Currently, `<IssuesListPage>` is storing all data in `useState` hooks, including the fetched issues. It fetches the issues by making an AJAX call in a `useEffect` hook.

As mentioned at the start, there's nothing actually wrong with this! Having React components fetch and store their own data is totally fine. But, for the purposes of this tutorial, we want to see how the Redux conversion process looks.

### Reviewing the Issues List Component

Here's the initial chunk of `<IssuesListPage>`:

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

The `useEffect` callback defines an outer `async function fetchEverything()` and calls it immediately. This is because we can't declare the `useEffect` callback itself as async. React expects that the return value from a `useEffect` callback will be a cleanup function. Since all async functions return a `Promise` automatically, React would see that `Promise` instead, and that would prevent React from actually cleaning up correctly.

Inside, we define two more async functions to fetch issues and the open issues count, and call them both. We then wait for both functions to resolve successfully. (There's a few other ways we could have organized this logic, but this was sufficient for the example.)

### Thinking in Thunks

#### What is a "Thunk"?

The Redux core (ie, `createStore`) is completely synchronous. When you call `store.dispatch()`, the store runs the root reducer, saves the return value, runs the subscriber callbacks, and returns, with no pause. By default, any asynchronicity has to happen outside of the store.

But, what if you want to have async logic interact with the store by dispatching or checking the current store state? That's where [Redux middleware](https://redux.js.org/advanced/middleware) come in. They extend the store, and allow you to:

- Execute extra logic when any action is dispatched (such as logging the action and state)
- Pause, modify, delay, replace, or halt dispatched actions
- Write extra code that has access to `dispatch` and `getState`
- Teach `dispatch` how to accept other values besides plain action objects, such as functions and promises, by intercepting them and dispatching real action objects instead

The most common Redux middleware is [`redux-thunk`](https://github.com/reduxjs/redux-thunk). The word "thunk" means "a function that delays a calculation until later". In our case, adding the thunk middleware to our Redux store lets us pass functions directly to `store.dispatch()`. The thunk middleware will see the function, prevent it from actually reaching the "real" store, and call our function and pass in `dispatch` and `getState` as arguments. So, a "thunk function" looks like this:

```js
function exampleThunkFunction(dispatch, getState) {
  // do something useful with dispatching or the store state here
}

// normally an error, but okay if the thunk middleware is added
store.dispatch(exampleThunkFunction)
```

Inside of a thunk function, you can write any code you want. The most common usage would be fetching some data via an AJAX call, and dispatching an action to load that data into the Redux store. The `async/await` syntax makes it easier to write thunks that do AJAX calls.

Normally, we don't write action objects directly in our code - we use action creator functions to make them, and use them like `dispatch(addTodo())`. In the same way, we typically write "thunk action creator" functions that return the thunk functions, like:

```js
function exampleThunk() {
  return function exampleThunkFunction(dispatch, getState) {
    // do something useful with dispatching or the store state here
  }
}

// normally an error, but okay if the thunk middleware is added
store.dispatch(exampleThunk())
```

#### Why Use Thunks?

You might be wondering what the point of all this is. There's a few reasons to use thunks:

- Thunks allow us to write reusable logic that interacts with _a_ Redux store, but without needing to reference a specific store instance.
- Thunks enable us to move more complex logic outside of our components
- From a component's point of view, it doesn't care whether it's dispatching a plain action or kicking off some async logic - it just calls `dispatch(doSomething())` and moves on.
- Thunks can return values like promises, allowing logic inside the component to wait for something else to finish.

For further explanations, see [these articles explaining thunks in the `redux-thunk` documentation](https://github.com/reduxjs/redux-thunk#why-do-i-need-this).

There are many other kinds of Redux middleware that add async capabilities. The most popular are [`redux-saga`](https://redux-saga.js.org/), which uses generator functions, and [`redux-observable`](https://redux-observable.js.org/), which uses RxJS observables. For some comparisons, see the [Redux FAQ entry on "how do I choose an async middleware?"](https://redux.js.org/faq/actions#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else).

However, while sagas and observables are useful, most apps do not need the power and capabilities they provide. So, **thunks are
the default recommended approach for writing async logic with Redux**.

#### Writing Thunks in Redux Toolkit

Writing thunk functions requires that the `redux-thunk` middleware be added to the store as part of the setup process. Redux Toolkit's `configureStore` function does automatically - [`thunk` is one of the default middleware](../api/getDefaultMiddleware.md).

However, Redux Toolkit does not currently provide any special functions or syntax for writing thunk functions. In particular, they cannot be defined as part of a `createSlice()` call. You have to write them separate from the reducer logic.

In a typical Redux app, thunk action creators are usually defined in an "actions" file, alongside the plain action creators. Thunks typically dispatch plain actions, such as `dispatch(dataLoaded(response.data))`.

Because we don't have separate "actions" files, it makes sense to write these thunks directly in our "slice" files. That way, they have access to the plain action creators from the slice, and it's easy to find where the thunk function lives.

### Logic for Fetching Github Repo Details

#### Adding a Reusable Thunk Function Type

Since the thunk middleware is already set up, we don't have to do any work there. However, the TypeScript types for thunks are kind of long and confusing, and we'd normally have to repeat the same type declaration for every thunk function we write.

Before we go any further, let's add a type declaration we can reuse instead.

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

The `AppThunk` type declares that the "action" that we're using is specifically a thunk function. The thunk is customized with some additional type parameters:

1. Return value: the thunk doesn't return anything
2. State type for `getState`: returns our `RootState` type
3. "Extra argument": the thunk middleware can be customized to pass in an extra value, but we aren't doing that in this app
4. Action types accepted by `dispatch`: any action whose `type` is a string.

There are many cases where you would want different type settings here, but these are probably the most common settings. This way, we can avoid repeating that same type declaration every time we write a thunk.

#### Adding the Repo Details Slice

Now that we have that type, we can write a slice of state for fetching details on a repo.

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

The first part of this should look straightforward. We declare our slice state shape, the initial state value, and write a slice with reducers that store the open issues count or an error string, then export the action creators and reducer.

Down at the bottom, we have our first data fetching thunk. The important things to notice here are:

- **The thunk is defined separately from the slice**, since RTK currently has no special syntax for defining thunks as part of a slice.
- **We declare the thunk action creator as an arrow function, and use the `AppThunk` type we just created.** You can use either arrow functions or the `function` keyword to write thunk functions and thunk action creators, so we could also have written this as `function fetchIssueCount() : AppThunk` instead.
- **We use the `async/await` syntax for the thunk function itself.** Again, this isn't required, but `async/await` usually results in simpler code than nested Promise `.then()` chains.
- **Inside the thunk, we dispatch the plain action creators that were generated by the `createSlice` call**.

While not shown, we also add the slice reducer to our root reducer.

#### Async Error Handling Logic in Thunks

There is one potential flaw with the `fetchIssuesCount()` thunk as written. The `try/catch` block will currently catch any errors thrown
by `getRepoDetails()` (such as an actual failed AJAX call), but it will also catch any errors that occur inside the dispatch of `getRepoDetailsSuccess()`. In both cases, it will end up dispatch `getRepoDetailsFailed()`. This may not be the desired way to handle errors, as it might show a misleading reason for what the actual error was.

There are some possible ways to restructure the code to avoid this problem. First, the `await` could be switched to a standard promise chain, with separate callbacks passed in for the success and failure cases:

```js
getRepoDetails(org, repo).then(
  // success callback
  repoDetails => dispatch(getRepoDetailsSuccess(repoDetails)),
  // error callback
  err => dispatch(getRepoDetailsFailed(err.toString()))
)
```

Or, the thunk could be rewritten to only dispatch if no errors were caught:

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

For sake of simplicity, we'll stick with the logic as-is for the rest of the tutorial.

### Fetching Repo Details in the Issues List

Now that the repo details slice exists, we can use it in the `<IssuesListPage>` component.

> - [Update IssuesListPage to fetch repo details via Redux](https://github.com/reduxjs/rtk-github-issues-example/compare/Update_IssuesListPage_to_fetch_repo_details_via_Redux~1..reduxjs:Update_IssuesListPage_to_fetch_repo_details_via_Redux)

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

In `<IssuesListPage>`, we import the new `fetchIssuesCount` thunk, and rewrite the component to read the open issues count value from the Redux store.

Inside our `useEffect`, we drop the `fetchIssueCount` function, and dispatch `fetchIssuesCount` instead.

### Logic for Fetching Issues for a Repo

Next up, we need to replace the logic for fetching a list of open issues.

> - [Add a slice for tracking issues state](https://github.com/reduxjs/rtk-github-issues-example/compare/Add_a_slice_for_tracking_issues_state~1..reduxjs:Add_a_slice_for_tracking_issues_state)

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

This slice is a bit longer, but it's the same basic approach as before: write the slice with reducers that handle API call results, then write thunks that do the fetching and dispatch actions with those results. The only new and interesting bits in this slice are:

- Our "start fetching" and "fetch failed" reducer logic is the same for both the single issue and multiple issue fetch cases. So, we write those functions outside the slice once, then reuse them multiple times with different names inside the `reducers` object.
- The Github API returns an array of issue entries, but we [want to store the data in a "normalized" structure to make it easy to look up an issue by its number](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape). In this case, we use a plain object as a lookup table, by declaring that it is a `Record<number, Issue>`.

### Fetching Issues in the Issues List

Now we can finish converting the `<IssuesListPage>` component by swapping out the issues fetching logic.

> - [Update IssuesListPage to fetch issues data via Redux](https://github.com/reduxjs/rtk-github-issues-example/compare/Update_IssuesListPage_to_fetch_issues_data_via_Redux~1..reduxjs:Update_IssuesListPage_to_fetch_issues_data_via_Redux)

Let's look at the changes.

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

We remove the remaining `useState` hooks from `<IssuesListPage>`, add another `useSelector` to retrieve the actual issues data from the Redux store, and construct the list of issues to render by mapping over the "current page issue IDs" array to look up each issue object by its ID.

In our `useEffect`, we delete the rest of the data fetching logic that's directly in the component, and just dispatch both data fetching thunks.

This simplifies the logic in the component, but it didn't remove the work being done - it just moved it elsewhere. Again, it's not that either approach is "right" or "wrong" - it's just a question of where you want the data and the logic to live, and which approach is more maintainable for your app and situation.

## Converting the Issue Details Page

The last major chunk of work left in the conversion is the `<IssueDetailsPage>` component. Let's take a look at what it does.

### Reviewing the Issue Details Component

Here's the current first half of `<IssueDetailsPage>`, containing the state and data fetching:

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

It's very similar to `<IssuesListPage>`. We store the current displayed `Issue`, the fetched comments, and a potential error. We have `useEffect` hooks that fetch the current issue by its ID, and fetch the comments whenever the issue changes.

### Fetching the Current Issue

We conveniently already have the Redux logic for fetching a single issue - we wrote that already as part of `issuesSlice.ts`. So, we can immediately jump straight to using that here in `<IssueDetailsPage>`.

> - [Update IssueDetailsPage to fetch issue data via Redux](https://github.com/reduxjs/rtk-github-issues-example/compare/Update_IssueDetailsPage_to_fetch_issue_data_via_Redux~1..reduxjs:Update_IssueDetailsPage_to_fetch_issue_data_via_Redux)

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

We continue the usual pattern. We drop the existing `useState` hooks, pull in `useDispatch` and the necessary state via `useSelector`, and dispatch the `fetchIssue` thunk to fetch data.

Interestingly, there's actually a bit of a change in behavior here. The original React code was storing the fetched issues in `<IssuesListPage>`, and `<IssueDetailsPage>` was always having to do a separate fetch for its own issue. Because we're now storing issues in the Redux store, most of the time the listed issue _should_ be already cached, and we don't even need to fetch it. Now, it's totally possible to do something similar with just React - all we'd have to do is pass the issue down from the parent component. Still, having that data in Redux makes it easier to do the caching.

(As an interesting side note: the original code always caused the page to jump back to the top, because the issue didn't exist during the first render, so there was no content. If the issue _does_ exist and we render it right away, the page may retain the scroll position from the issues list, so we have to enforce scrolling back to the top.)

### Logic for Fetching Comments

We have one more slice left to write - we need to fetch and store comments for the current issue.

> - [Add a slice for tracking comments data](https://github.com/reduxjs/rtk-github-issues-example/compare/Add_a_slice_for_tracking_comments_data~1..reduxjs:Add_a_slice_for_tracking_comments_data)

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

The slice should look pretty familiar at this point. Our main bit of state is a lookup table of comments keyed by an issue ID. After the slice, we add a thunk to fetch the comments for a given issue, and dispatch the action to save the resulting array in the slice.

### Fetching the Issue Comments

The final step is to swap the comments fetching logic in `<IssueDetailsPage>`.

> - [Update IssueDetailsPage to fetch comments via Redux](https://github.com/reduxjs/rtk-github-issues-example/compare/Update_IssueDetailsPage_to_fetch_comments_via_Redux~1..reduxjs:Update_IssueDetailsPage_to_fetch_comments_via_Redux)

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

We add another `useSelector` hook to pull out the current comments data. In this case, we need three different pieces: the loading flag, a potential error, and the actual comments array for this issue.

However, this leads to a performance problem. Every time this selector runs, it returns a new object: `{commentsLoading, commentsError, comments}`. **Unlike `connect`, `useSelector` relies on reference equality by default.** So, returning a new object will cause this component to rerender every time an action is dispatched, even if the comments are the same!

There's a few ways to fix this:

- We could write those as separate `useSelector` calls
- We could use a memoized selector, such as `createSelector` from Reselect
- We can use the React-Redux `shallowEqual` function to compare the results, so that the re-render only happens if the object's _contents_ have changed.

In this case, we'll add `shallowEqual` as the comparison function for `useSelector`.

## Summary

And with that, we're done! The entire Github Issues app should now be fetching its data via thunks, storing the data in Redux, and interacting with the store via React-Redux hooks. We have Typescript types for our Github API calls, the API types are being used for the Redux state slices, and the store state types are being used in our React components.

There's more that could be done to add more type safety if we wanted (like trying to constrain which possible action types can be passed to `dispatch`), but this gives us a reasonable "80% solution" without too much extra effort.

Hopefully you now have a solid understanding of how Redux Toolkit looks in a real world application.

Let's wrap this up with one more look at the complete source code and the running app:

<iframe src="https://codesandbox.io/embed/rtk-github-issues-example-03-final-ihttc?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2FissueDetails%2FcommentsSlice.ts&theme=dark&view=editor"
     style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
     title="rtk-github-issues-example03-final"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

**Now, go out there and build something cool!**
