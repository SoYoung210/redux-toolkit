---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
hide_title: true
---

# Quick Start

## 목적

Redux Toolkit 패키지는 Redux 논리를 작성하는 표준 방법입니다.  Redux에 대한 세 가지 일반적인 관심사를 해결하기 위해 만들어 졌습니다.

- "Redux 저장소 구성이 너무 복잡합니다"
- "Redux가 유용한 기능을 수행 할 수 있도록 많은 패키지를 추가해야 합니다."
- "Redux에는 boilerplate 코드가 너무 많이 필요합니다"

모든 Use Case를 해결할 수는 없지만 create-react-app 및 apollo-boost의 정신으로 설정 프로세스를 추상화하고 가장 일반적인 Use Case를 처리하고 사용자의 애플리케이션 코드를 단순화 시킬 수 있는  유용한 util을  제공하려고 합니다.

이 패키지는 Redux에 대한 *모든 문제를 해결하기 위한 것이 아니며* 의도적으로 대응 범위가 제한되어 있습니다. "재사용 가능한 캡슐화 된 Redux 모듈", 데이터 fetch, 폴더 또는 파일 구조, redux store의 엔티티 관계 관리 등과 같은 개념은 다루지 않습니다.

즉, 이 도구는 **모든 Redux 사용자에게 유용해야 합니다.** Redux Toolkit을 사용하면 처음 프로젝트에 Redux를 사용하는 사용자이든, 기존 프로그램을 단순화 하려는 숙련 된 사용자이든 Redux 코드를 개선 할 수 있습니다.

## 포함되는 것

Redux Toolkit에는 다음 내용이 포함됩니다.

- [`configureStore()` 함수](https://redux-toolkit.js.org/api/configurestore/)는 단순화 된 구성 옵션을 제공합니다 . 슬라이스 리듀서를 자동으로 결합하고 제공하는 Redux 미들웨어를 추가하고, 기본적으로 redux-thunk를 포함하며 Redux DevTools Extension을 사용할 수 있습니다.
- [`createReducer()`유틸리티](https://redux-toolkit.js.org/api/createreducer/)는 switch 문을 작성하지 않고 reducer함수를 작성할 수 있도록 합니다. 또한  [`immer 라이브러리`](https://github.com/immerjs/immer)를 사용하여 `state.todos [3] .completed = true`와 같은 일반적인 코드로 더 간단하게 불변성을 유지하면서 상태를 업데이트할 수 있습니다.
- [`createAction()` 유틸리티](https://redux-toolkit.js.org/api/createaction/)는 주어진 action type에 따라 action create함수를 반환합니다. 함수 자체에`toString()`이 정의되어 있으므로 별도의 상수를 선언할 필요 없이 함수 이름을 사용할 수 있습니다.
- [`createSlice()` 함수](https://redux-toolkit.js.org/api/createslice/) 리듀서 함수 세트로서, 슬라이스 이름 및 초기 상태 값을 받아서 자동으로 slice reducer와 action creator, action types를 생성합니다.
- [`createSelector()`유틸리티](https://redux-toolkit.js.org/api/createselector/)는 [Reselect](https://github.com/reduxjs/reselect) 라이브러리를 사용하기 쉽도록 re-export한 것입니다.

## 설치

### Create React App과 함께 사용

React 및 Redux Toolkit으로 새 앱을 시작하는 권장 방법은 React 구성 요소와 React Redux의 통합을 활용하는 React 앱 작성을위한 공식 Redux + JS 템플릿을 사용하는 것입니다.

```sh
npx create-react-app my-app --template redux
```

### 기존 프로젝트에 사용

Redux Toolkit은 모듈 번들러 또는 노드 애플리케이션과 함께 사용하기 위해 NPM 패키지로 제공됩니다.

```bash
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

### 도움 받기, 제안

[Reactiflux Discord 커뮤니티](https://www.reactiflux.com/)의 **[#redux 채널](https://discordapp.com/invite/0ZcbPKXt5bZ6au5t)**은 Redux 학습 및 사용과 관련된 모든 질문에 대한 공식 사이트 입니다. Reactiflux는 어울리고, 질문하고, 배우기에 좋은 곳입니다.

[Stack Overflow](https://stackoverflow.com/)에서 **#redux 태그**를 사용하여 질문할 수도 있습니다.
