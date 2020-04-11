/*! For license information please see d4448973.4a3200b5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=(n(119),n(118));const i={id:"createAsyncThunk",title:"createAsyncThunk",sidebar_label:"createAsyncThunk",hide_title:!0},o={id:"api/createAsyncThunk",title:"createAsyncThunk",description:"# `createAsyncThunk`",source:"@site/../docs/api/createAsyncThunk.md",permalink:"/redux-toolkit/api/createAsyncThunk",sidebar_label:"createAsyncThunk",sidebar:"docs",previous:{title:"createSelector",permalink:"/redux-toolkit/api/createSelector"},next:{title:"createEntityAdapter",permalink:"/redux-toolkit/api/createEntityAdapter"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Parameters",id:"parameters",children:[{value:"<code>type</code>",id:"type",children:[]},{value:"<code>payloadCreator</code>",id:"payloadcreator",children:[]}]},{value:"Return Value",id:"return-value",children:[]},{value:"Promise Lifecycle Actions",id:"promise-lifecycle-actions",children:[]},{value:"Handling Thunk Results",id:"handling-thunk-results",children:[]},{value:"Cancellation",id:"cancellation",children:[{value:"Checking Cancellation Status",id:"checking-cancellation-status",children:[]},{value:"Reading the Signal Value",id:"reading-the-signal-value",children:[]}]},{value:"Examples",id:"examples",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"createasyncthunk"},Object(a.b)("inlineCode",{parentName:"h1"},"createAsyncThunk")),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"A function that accepts a Redux action type string and a callback function that should return a promise. It generates promise lifecycle action types based on the provided action type, and returns a thunk action creator that will run the promise callback and dispatch the lifecycle actions based on the returned promise."),Object(a.b)("p",null,"This abstracts the standard recommended approach for handling async request lifecycles."),Object(a.b)("p",null,"Sample usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{5-11,22-25,30}","{5-11,22-25,30}":!0}),"import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'\nimport { userAPI } from './userAPI'\n\n// First, create the thunk\nconst fetchUserById = createAsyncThunk(\n  'users/fetchByIdStatus',\n  async (userId, thunkAPI) => {\n    const response = await userAPI.fetchById(userId)\n    return response.data\n  }\n)\n\n// Then, handle actions in your reducers:\nconst usersSlice = createSlice({\n  name: 'users',\n  initialState: { entities: [], loading: 'idle' },\n  reducers: {\n    // standard reducer logic, with auto-generated action types per reducer\n  },\n  extraReducers: {\n    // Add reducers for additional action types here, and handle loading state as needed\n    [fetchUserById.fulfilled]: (state, action) => {\n      // Add user to the state array\n      state.entities.push(action.payload)\n    }\n  }\n})\n\n// Later, dispatch the thunk as needed in the app\ndispatch(fetchUserById(123))\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createAsyncThunk")," accepts two parameters: a string action ",Object(a.b)("inlineCode",{parentName:"p"},"type")," value, and a ",Object(a.b)("inlineCode",{parentName:"p"},"payloadCreator")," callback."),Object(a.b)("h3",{id:"type"},Object(a.b)("inlineCode",{parentName:"h3"},"type")),Object(a.b)("p",null,"A string that will be used to generate additional Redux action type constants, representing the lifecycle of an async request:"),Object(a.b)("p",null,"For example, a ",Object(a.b)("inlineCode",{parentName:"p"},"type")," argument of ",Object(a.b)("inlineCode",{parentName:"p"},"'users/requestStatus'")," will generate these action types:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pending"),": ",Object(a.b)("inlineCode",{parentName:"li"},"'users/requestStatus/pending'")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fulfilled"),": ",Object(a.b)("inlineCode",{parentName:"li"},"'users/requestStatus/fulfilled'")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"rejected"),": ",Object(a.b)("inlineCode",{parentName:"li"},"'users/requestStatus/rejected'"))),Object(a.b)("h3",{id:"payloadcreator"},Object(a.b)("inlineCode",{parentName:"h3"},"payloadCreator")),Object(a.b)("p",null,"A callback function that should return a promise containing the result of some asynchronous logic. It may also return a value synchronously. If there is an error, it should either return a rejected promise containing an ",Object(a.b)("inlineCode",{parentName:"p"},"Error")," instance or a plain value such as a descriptive error message or otherwise a resolved promise with a ",Object(a.b)("inlineCode",{parentName:"p"},"RejectWithValue")," argument as returned by the ",Object(a.b)("inlineCode",{parentName:"p"},"thunkApi.rejectWithValue")," function."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"payloadCreator")," function can contain whatever logic you need to calculate an appropriate result. This could include a standard AJAX data fetch request, multiple AJAX calls with the results combined into a final value, interactions with React Native ",Object(a.b)("inlineCode",{parentName:"p"},"AsyncStorage"),", and so on."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"payloadCreator")," function will be called with two arguments:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"arg"),": a single value, containing the first parameter that was passed to the thunk action creator when it was dispatched. This is useful for passing in values like item IDs that may be needed as part of the request. If you need to pass in multiple values, pass them together in an object when you dispatch the thunk, like ",Object(a.b)("inlineCode",{parentName:"li"},"dispatch(fetchUsers({status: 'active', sortBy: 'name'}))"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"thunkAPI"),": an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"dispatch"),": the Redux store ",Object(a.b)("inlineCode",{parentName:"li"},"dispatch")," method"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"getState"),": the Redux store ",Object(a.b)("inlineCode",{parentName:"li"},"getState")," method"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"extra"),': the "extra argument" given to the thunk middleware on setup, if available'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"requestId"),": a unique string ID value that was automatically generated to identify this request sequence"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"signal"),": an ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal"}),Object(a.b)("inlineCode",{parentName:"a"},"AbortController.signal")," object")," that may be used to see if another part of the app logic has marked this request as needing cancelation."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"rejectWithValue"),": rejectWithValue is a utility function that you can ",Object(a.b)("inlineCode",{parentName:"li"},"return")," in your action creator to return a rejected response with a defined payload. It will pass whatever value you give it and return it in the payload of the rejected action.")))),Object(a.b)("p",null,"The logic in the ",Object(a.b)("inlineCode",{parentName:"p"},"payloadCreator")," function may use any of these values as needed to calculate the result."),Object(a.b)("h2",{id:"return-value"},"Return Value"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createAsyncThunk")," returns a standard Redux thunk action creator. The thunk action creator function will have plain action creators for the ",Object(a.b)("inlineCode",{parentName:"p"},"pending"),", ",Object(a.b)("inlineCode",{parentName:"p"},"fulfilled"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"rejected")," cases attached as nested fields."),Object(a.b)("p",null,"When dispatched, the thunk will:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"dispatch the ",Object(a.b)("inlineCode",{parentName:"li"},"pending")," action"),Object(a.b)("li",{parentName:"ul"},"call the ",Object(a.b)("inlineCode",{parentName:"li"},"payloadCreator")," callback and wait for the returned promise to settle"),Object(a.b)("li",{parentName:"ul"},"when the promise settles:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"if the promise resolved successfully, dispatch the ",Object(a.b)("inlineCode",{parentName:"li"},"fulfilled")," action with the promise value as ",Object(a.b)("inlineCode",{parentName:"li"},"action.payload")),Object(a.b)("li",{parentName:"ul"},"if the promise resolved with a ",Object(a.b)("inlineCode",{parentName:"li"},"rejectWithValue(value)")," return value, dispatch the ",Object(a.b)("inlineCode",{parentName:"li"},"rejected")," action with the value passed into ",Object(a.b)("inlineCode",{parentName:"li"},"action.payload")," and 'Rejected' as ",Object(a.b)("inlineCode",{parentName:"li"},"action.error.message")),Object(a.b)("li",{parentName:"ul"},"if the promise failed and was not handled with ",Object(a.b)("inlineCode",{parentName:"li"},"rejectWithValue"),", dispatch the ",Object(a.b)("inlineCode",{parentName:"li"},"rejected")," action with a serialized version of the error value as ",Object(a.b)("inlineCode",{parentName:"li"},"action.error")))),Object(a.b)("li",{parentName:"ul"},"Return a fulfilled promise containing the final dispatched action (either the ",Object(a.b)("inlineCode",{parentName:"li"},"fulfilled")," or ",Object(a.b)("inlineCode",{parentName:"li"},"rejected")," action object)")),Object(a.b)("h2",{id:"promise-lifecycle-actions"},"Promise Lifecycle Actions"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createAsyncThunk")," will generate three Redux action creators using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/createAction"}),Object(a.b)("inlineCode",{parentName:"a"},"createAction")),": ",Object(a.b)("inlineCode",{parentName:"p"},"pending"),", ",Object(a.b)("inlineCode",{parentName:"p"},"fulfilled"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"rejected"),". Each lifecycle action creator will be attached to the returned thunk action creator so that your reducer logic can reference the action types and respond to the actions when dispatched. Each action object will contain the current unique ",Object(a.b)("inlineCode",{parentName:"p"},"requestId")," and ",Object(a.b)("inlineCode",{parentName:"p"},"args")," values under ",Object(a.b)("inlineCode",{parentName:"p"},"action.meta"),"."),Object(a.b)("p",null,"The action creators will have these signatures:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface SerializedError {\n  name?: string\n  message?: string\n  code?: string\n  stack?: string\n}\n\ninterface PendingAction<ThunkArg> {\n  type: string\n  payload: undefined\n  meta: {\n    requestId: string\n    arg: ThunkArg\n  }\n}\n\ninterface FulfilledAction<ThunkArg, PromiseResult> {\n  type: string\n  payload: PromiseResult\n  meta: {\n    requestId: string\n    arg: ThunkArg\n  }\n}\n\ninterface RejectedAction<ThunkArg> {\n  type: string\n  payload: undefined\n  error: SerializedError | any\n  meta: {\n    requestId: string\n    arg: ThunkArg\n    aborted: boolean\n  }\n}\n\ninterface RejectedWithValueAction<ThunkArg, RejectedValue> {\n  type: string\n  payload: RejectedValue\n  error: { message: 'Rejected' }\n  meta: {\n    requestId: string\n    arg: ThunkArg\n    aborted: boolean\n  }\n}\n\ntype Pending = <ThunkArg>(\n  requestId: string,\n  arg: ThunkArg\n) => PendingAction<ThunkArg>\n\ntype Fulfilled = <ThunkArg, PromiseResult>(\n  payload: PromiseResult,\n  requestId: string,\n  arg: ThunkArg\n) => FulfilledAction<ThunkArg, PromiseResult>\n\ntype Rejected = <ThunkArg>(\n  requestId: string,\n  arg: ThunkArg\n) => RejectedAction<ThunkArg>\n\ntype RejectedWithValue = <ThunkArg, RejectedValue>(\n  requestId: string,\n  arg: ThunkArg\n) => RejectedWithValueAction<ThunkArg, RejectedValue>\n")),Object(a.b)("p",null,"To handle these actions in your reducers, reference the action creators in ",Object(a.b)("inlineCode",{parentName:"p"},"createReducer")," or ",Object(a.b)("inlineCode",{parentName:"p"},"createSlice"),' using either the object key notation or the "builder callback" notation:'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{2,6,14,23}","{2,6,14,23}":!0}),"const reducer1 = createReducer(initialState, {\n  [fetchUserById.fulfilled]: (state, action) => {}\n})\n\nconst reducer2 = createReducer(initialState, build => {\n  builder.addCase(fetchUserById.fulfilled, (state, action) => {})\n})\n\nconst reducer3 = createSlice({\n  name: 'users',\n  initialState,\n  reducers: {},\n  extraReducers: {\n    [fetchUserById.fulfilled]: (state, action) => {}\n  }\n})\n\nconst reducer4 = createSlice({\n  name: 'users',\n  initialState,\n  reducers: {},\n  extraReducers: builder => {\n    builder.addCase(fetchUserById.fulfilled, (state, action) => {})\n  }\n})\n")),Object(a.b)("h2",{id:"handling-thunk-results"},"Handling Thunk Results"),Object(a.b)("p",null,"Thunks may return a value when dispatched. A common use case is to return a promise from the thunk, dispatch the thunk from a component, and then wait for the promise to resolve before doing additional work:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const onClick = () => {\n  dispatch(fetchUserById(userId)).then(() => {\n    // do additional work\n  })\n}\n")),Object(a.b)("p",null,"The thunks generated by ",Object(a.b)("inlineCode",{parentName:"p"},"createAsyncThunk")," will always return a resolved promise with either the ",Object(a.b)("inlineCode",{parentName:"p"},"fulfilled")," action object or ",Object(a.b)("inlineCode",{parentName:"p"},"rejected")," action object inside, as appropriate."),Object(a.b)("p",null,"The calling logic may wish to treat these actions as if they were the original promise contents. Redux Toolkit exports an ",Object(a.b)("inlineCode",{parentName:"p"},"unwrapResult")," function that can be used to extract the ",Object(a.b)("inlineCode",{parentName:"p"},"payload")," or ",Object(a.b)("inlineCode",{parentName:"p"},"error")," from the action and return or throw the result:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { unwrapResult } from '@reduxjs/toolkit'\n\n// in the component\nconst onClick = () => {\n  dispatch(fetchUserById(userId))\n    .then(unwrapResult)\n    .then(originalPromiseResult => {})\n    .catch(serializedError => {})\n}\n")),Object(a.b)("h2",{id:"cancellation"},"Cancellation"),Object(a.b)("p",null,"If you want to cancel your running thunk before it has finished, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"abort")," method of the promise returned by ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch(fetchUserById(userId))"),"."),Object(a.b)("p",null,"A real-life example of that would look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"function MyComponent(props: { userId: string }) {\n  React.useEffect(() => {\n    // Dispatching the thunk returns a promise\n    const promise = dispatch(fetchUserById(props.userId))\n    return () => {\n      // `createAsyncThunk` attaches an `abort()` method to the promise\n      promise.abort()\n    }\n  }, [props.userId])\n}\n")),Object(a.b)("p",null,"After a thunk has been cancelled this way, it will dispatch (and return) a ",Object(a.b)("inlineCode",{parentName:"p"},'"thunkName/rejected"')," action with an ",Object(a.b)("inlineCode",{parentName:"p"},"AbortError")," on the ",Object(a.b)("inlineCode",{parentName:"p"},"error")," property. The thunk will not dispatch any further actions."),Object(a.b)("p",null,"Additionally, your ",Object(a.b)("inlineCode",{parentName:"p"},"payloadCreator")," can use the ",Object(a.b)("inlineCode",{parentName:"p"},"AbortSignal")," it is passed via ",Object(a.b)("inlineCode",{parentName:"p"},"thunkApi.signal")," to actually cancel a costly asynchronous action."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"fetch")," api of modern browsers already comes with support for an ",Object(a.b)("inlineCode",{parentName:"p"},"AbortSignal"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const fetchUserById = createAsyncThunk(\n  'users/fetchById',\n  async (userId, thunkAPI) => {\n    const response = await fetch(`https://reqres.in/api/users/${userId}`, {\n      signal: thunkAPI.signal\n    })\n    return await response.json()\n  }\n)\n")),Object(a.b)("h3",{id:"checking-cancellation-status"},"Checking Cancellation Status"),Object(a.b)("h3",{id:"reading-the-signal-value"},"Reading the Signal Value"),Object(a.b)("p",null,"You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"signal.aborted")," property to regularly check if the thunk has been aborted and in that case stop costly long-running work:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const readStream = createAsyncThunk(\'readStream\', async (stream: ReadableStream, {signal}) => {\n  const reader = stream.getReader();\n\n  let done = false;\n  let result = "";\n\n  while (!done) {\n    if (signal.aborted) {\n      throw new Error("stop the work, this has been aborted!");\n    }\n    const read = await reader.read();\n    result += read.value;\n    done = read.done;\n  }\n  return result;\n}\n')),Object(a.b)("h4",{id:"listening-for-abort-events"},"Listening for Abort Events"),Object(a.b)("p",null,"You can also call ",Object(a.b)("inlineCode",{parentName:"p"},"signal.addEventListener('abort', callback)")," to have logic inside the thunk be notified when ",Object(a.b)("inlineCode",{parentName:"p"},"promise.abort()")," was called.\nThis can for example be used in conjunction with an axios ",Object(a.b)("inlineCode",{parentName:"p"},"CancelToken"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createAsyncThunk } from '@reduxjs/toolkit'\nimport axios from 'axios'\n\nconst fetchUserById = createAsyncThunk(\n  'users/fetchById',\n  async (userId, { signal }) => {\n    const source = axios.CancelToken.source()\n    signal.addEventListener('abort', () => {\n      source.cancel()\n    })\n    const response = await axios.get(`https://reqres.in/api/users/${userId}`, {\n      cancelToken: source.token\n    })\n    return response.data\n  }\n)\n")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Requesting a user by ID, with loading state, and only one request at a time:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit'\nimport { userAPI } from './userAPI'\n\nconst fetchUserById = createAsyncThunk(\n  'users/fetchByIdStatus',\n  async (userId, { getState, requestId }) => {\n    const { currentRequestId, loading } = getState().users\n    if (loading !== 'pending' || requestId !== currentRequestId) {\n      return\n    }\n    const response = await userAPI.fetchById(userId)\n    return response.data\n  }\n)\n\nconst usersSlice = createSlice({\n  name: 'users',\n  initialState: {\n    entities: [],\n    loading: 'idle',\n    currentRequestId: undefined,\n    error: null\n  },\n  reducers: {},\n  extraReducers: {\n    [fetchUserById.pending]: (state, action) => {\n      if (state.loading === 'idle') {\n        state.loading = 'pending'\n        state.currentRequestId = action.meta.requestId\n      }\n    },\n    [fetchUserById.fulfilled]: (state, action) => {\n      const { requestId } = action.meta\n      if (state.loading === 'pending' && state.currentRequestId === requestId) {\n        state.loading = 'idle'\n        state.entities.push(action.payload)\n        state.currentRequestId = undefined\n      }\n    },\n    [fetchUserById.rejected]: (state, action) => {\n      const { requestId } = action.meta\n      if (state.loading === 'pending' && state.currentRequestId === requestId) {\n        state.loading = 'idle'\n        state.error = action.error\n        state.currentRequestId = undefined\n      }\n    }\n  }\n})\n\nconst UsersComponent = () => {\n  const { users, loading, error } = useSelector(state => state.users)\n  const dispatch = useDispatch()\n\n  const fetchOneUser = async userId => {\n    try {\n      const resultAction = await dispatch(fetchUserById(userId))\n      const user = unwrapResult(resultAction)\n      showToast('success', `Fetched ${user.name}`)\n    } catch (err) {\n      showToast('error', `Fetch failed: ${err.message}`)\n    }\n  }\n\n  // render UI here\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using rejectWithValue to access a custom rejected payload in a component")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit'\nimport { userAPI } from './userAPI'\n\nconst updateUser = createAsyncThunk(\n  'users/update',\n  async (userData, { rejectWithValue }) => {\n    const { id, ...fields } = userData\n    try {\n      const response = await userAPI.updateById(id, fields)\n      return response.data.user\n    } catch (err) {\n      // Note: this is an example assuming the usage of axios. Other fetching libraries would likely have different implementations\n      if (!err.response) {\n        throw err\n      }\n\n      return rejectWithValue(err.response.data)\n    }\n  }\n)\n\nconst usersSlice = createSlice({\n  name: 'users',\n  initialState: {\n    entities: {},\n    error: null\n  },\n  reducers: {},\n  extraReducers: {\n    [updateUser.fullfilled]: (state, action) => {\n      const user = action.payload\n      state.entities[user.id] = user\n    },\n    [updateUser.rejected]: (state, action) => {\n      if (action.payload) {\n        // If a rejected action has a payload, it means that it was returned with rejectWithValue\n        state.error = action.payload.errorMessage\n      } else {\n        state.error = action.error\n      }\n    }\n  }\n})\n\nconst UsersComponent = () => {\n  const { users, loading, error } = useSelector(state => state.users)\n  const dispatch = useDispatch()\n\n  // This is an example of an onSubmit handler using Formik meant to demonstrate accessing the payload of the rejected action\n  const handleUpdateUser = async (values, formikHelpers) => {\n    const resultAction = await dispatch(updateUser(values))\n    if (updateUser.fulfilled.match(resultAction)) {\n      const user = unwrapResult(resultAction)\n      showToast('success', `Updated ${user.name}`)\n    } else {\n      if (resultAction.payload) {\n        // This is assuming the api returned a 400 error with a body of { errorMessage: 'Validation errors', field_errors: { field_name: 'Should be a string' } }\n        formikHelpers.setErrors(resultAction.payload.field_errors)\n      } else {\n        showToast('error', `Update failed: ${resultAction.error}`)\n      }\n    }\n  }\n\n  // render UI here\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TypeScript: Using rejectWithValue to access a custom rejected payload in a component\n",Object(a.b)("em",{parentName:"li"},"Note: this is a contrived example assuming our userAPI only ever throws validation-specific errors"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit'\nimport { userAPI } from './userAPI'\nimport { AppDispatch, RootState } from '../store'\nimport { FormikHelpers } from 'formik'\n\n// Sample types that will be used\ninterface User {\n  first_name: string\n  last_name: string\n  email: string\n}\n\ninterface ValidationErrors {\n  errorMessage: string\n  field_errors: Record<string, string>\n}\n\ninterface UpdateUserResponse {\n  user: User\n  success: boolean\n}\n\nconst updateUser = createAsyncThunk<\n  User,\n  Partial<User>,\n  {\n    rejectValue: ValidationErrors\n  }\n>('users/update', async (userData, { rejectWithValue }) => {\n  try {\n    const { id, ...fields } = userData\n    const response = await userAPI.updateById<UpdateUserResponse>(id, fields)\n    return response.data.user\n  } catch (err) {\n    let error: AxiosError<ValidationErrors> = err // cast the error for access\n    if (!error.response) {\n      throw err\n    }\n    // We got validation errors, let's return those so we can reference in our component and set form errors\n    return rejectWithValue(error.response.data)\n  }\n})\n\ninterface UsersState {\n  error: string | null\n  entities: Record<string, User>\n}\n\nconst initialState: UsersState = {\n  entities: {},\n  error: null\n}\n\nconst usersSlice = createSlice({\n  name: 'users',\n  initialState,\n  reducers: {},\n  extraReducers: builder => {\n    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators\n    builder.addCase(updateUser.fulfilled, (state, { payload }) => {\n      state.entities[payload.id] = payload\n    })\n    builder.addCase(updateUser.rejected, (state, action) => {\n      if (action.payload) {\n        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.\n        state.error = action.payload.errorMessage\n      } else {\n        state.error = action.error\n      }\n    })\n  }\n})\n\nconst UsersComponent = () => {\n  const { users, loading, error } = useSelector(\n    (state: RootState) => state.users\n  )\n  const dispatch: AppDispatch = useDispatch()\n\n  // This is an example of an onSubmit handler using Formik meant to demonstrate accessing the payload of the rejected action\n  const handleUpdateUser = async (\n    values: FormValues,\n    formikHelpers: FormikHelpers<FormValues>\n  ) => {\n    const resultAction = await dispatch(updateUser(values))\n    if (updateUser.fulfilled.match(resultAction)) {\n      // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk\n      const user = unwrapResult(resultAction)\n      showToast('success', `Updated ${user.name}`)\n    } else {\n      if (resultAction.payload) {\n        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, those types will be available here.\n        formikHelpers.setErrors(resultAction.payload.field_errors)\n      } else {\n        showToast('error', `Update failed: ${resultAction.error}`)\n      }\n    }\n  }\n\n  // render UI here\n}\n")))}l.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(h,s({ref:t},l,{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";e.exports=n(120)},120:function(e,t,n){"use strict";var r=n(121),a="function"==typeof Symbol&&Symbol.for,i=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,s=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.concurrent_mode"):60111,b=a?Symbol.for("react.forward_ref"):60112,h=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function j(e,t,n,r,a,i,o,s){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,i,o,s],l=0;(e=Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);j(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function v(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||O}function w(){}function N(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||O}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var C=N.prototype=new w;C.constructor=N,r(C,v.prototype),C.isPureReactComponent=!0;var A={current:null},I={current:null},S=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var r=void 0,a={},o=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&!T.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:i,type:e,key:o,ref:s,props:a,_owner:I.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,U=[];function E(e,t,n,r){if(U.length){var a=U.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function q(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>U.length&&U.push(e)}function _(e,t,n){return null==e?0:function e(t,n,r,a){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var c=!1;if(null===t)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case o:c=!0}}if(c)return r(a,t,""===n?"."+V(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=n+V(s=t[l],l);c+=e(s,u,r,a)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=y&&t[y]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(s=t.next()).done;)c+=e(s=s.value,u=n+V(s,l++),r,a);else"object"===s&&g("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function V(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function B(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,a){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),_(e,$,t=E(t,i,r,a)),q(t)}function W(){var e=A.current;return null===e&&g("321"),e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;_(e,B,t=E(null,null,t,n)),q(t)},count:function(e){return _(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){return x(e)||g("143"),e}},createRef:function(){return{current:null}},Component:v,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return W().useCallback(e,t)},useContext:function(e,t){return W().useContext(e,t)},useEffect:function(e,t){return W().useEffect(e,t)},useImperativeHandle:function(e,t,n){return W().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return W().useLayoutEffect(e,t)},useMemo:function(e,t){return W().useMemo(e,t)},useReducer:function(e,t,n){return W().useReducer(e,t,n)},useRef:function(e){return W().useRef(e)},useState:function(e){return W().useState(e)},Fragment:s,StrictMode:c,Suspense:h,createElement:R,cloneElement:function(e,t,n){null==e&&g("267",e);var a=void 0,o=r({},e.props),s=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=I.current),void 0!==t.key&&(s=""+t.key);var u=void 0;for(a in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)S.call(t,a)&&!T.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==u?u[a]:t[a])}if(1===(a=arguments.length-2))o.children=n;else if(1<a){u=Array(a);for(var d=0;d<a;d++)u[d]=arguments[d+2];o.children=u}return{$$typeof:i,type:e.type,key:s,ref:c,props:o,_owner:l}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:A,ReactCurrentOwner:I,assign:r}},M={default:F},L=M&&F||M;e.exports=L.default||L},121:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,s,c=o(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))a.call(n,u)&&(c[u]=n[u]);if(r){s=r(n);for(var d=0;d<s.length;d++)i.call(n,s[d])&&(c[s[d]]=n[s[d]])}}return c}}}]);