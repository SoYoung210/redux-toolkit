/*! For license information please see cf781918.b337a913.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(1),r=(n(119),n(118));const i={id:"createEntityAdapter",title:"createEntityAdapter",sidebar_label:"createEntityAdapter",hide_title:!0},o={id:"api/createEntityAdapter",title:"createEntityAdapter",description:"# `createEntityAdapter`",source:"@site/../docs/api/createEntityAdapter.md",permalink:"/redux-toolkit//api/createEntityAdapter",sidebar_label:"createEntityAdapter",sidebar:"docs",previous:{title:"createAsyncThunk",permalink:"/redux-toolkit//api/createAsyncThunk"},next:{title:"Other Exports",permalink:"/redux-toolkit//api/other-exports"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Parameters",id:"parameters",children:[{value:"<code>selectId</code>",id:"selectid",children:[]},{value:"<code>sortComparer</code>",id:"sortcomparer",children:[]}]},{value:"Return Value",id:"return-value",children:[{value:"CRUD Functions",id:"crud-functions",children:[]},{value:"<code>getInitialState</code>",id:"getinitialstate",children:[]},{value:"Selector Functions",id:"selector-functions",children:[]}]},{value:"Notes",id:"notes",children:[{value:"Applying Multiple Updates",id:"applying-multiple-updates",children:[]}]},{value:"Examples",id:"examples",children:[]}],s={rightToc:l};function c({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"createentityadapter"},Object(r.b)("inlineCode",{parentName:"h1"},"createEntityAdapter")),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"A function that generates a set of prebuilt reducers and selectors for performing CRUD operations on a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape"}),"normalized state structure")," containing instances of a particular type of data object. These reducer functions may be passed as case reducers to ",Object(r.b)("inlineCode",{parentName:"p"},"createReducer")," and ",Object(r.b)("inlineCode",{parentName:"p"},"createSlice"),'. They may also be used as "mutating" helper functions inside of ',Object(r.b)("inlineCode",{parentName:"p"},"createReducer")," and ",Object(r.b)("inlineCode",{parentName:"p"},"createSlice"),"."),Object(r.b)("p",null,"This API was ported from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://ngrx.io/guide/entity"}),"the ",Object(r.b)("inlineCode",{parentName:"a"},"@ngrx/entity")," library")," created by the NgRx maintainers, but has been significantly modified for use with Redux Toolkit. We'd like to thank the NgRx team for originally creating this API and allowing us to port and adapt it for our needs."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),': The term "Entity" is used to refer to a unique type of data object in an application. For example, in a blogging application, you might have ',Object(r.b)("inlineCode",{parentName:"p"},"User"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Post"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"Comment")," data objects, with many instances of each being stored in the client and persisted on the server. ",Object(r.b)("inlineCode",{parentName:"p"},"User"),' is an "entity" - a unique type of data object that the application uses. Each unique instance of an entity is assumed to have a unique ID value in a specific field.'),Object(r.b)("p",{parentName:"blockquote"},"As with all Redux logic, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/style-guide/style-guide#do-not-put-non-serializable-values-in-state-or-actions"}),Object(r.b)("em",{parentName:"a"},"only")," plain JS objects and arrays should be passed in to the store - ",Object(r.b)("strong",{parentName:"a"},"no class instances!"))),Object(r.b)("p",{parentName:"blockquote"},"For purposes of this reference, we will use ",Object(r.b)("inlineCode",{parentName:"p"},"Entity")," to refer to the specific data type that is being managed by a copy of the reducer logic in a specific portion of the Redux state tree, and ",Object(r.b)("inlineCode",{parentName:"p"},"entity")," to refer to a single instance of that type. Example: in ",Object(r.b)("inlineCode",{parentName:"p"},"state.users"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Entity")," would refer to the ",Object(r.b)("inlineCode",{parentName:"p"},"User")," type, and ",Object(r.b)("inlineCode",{parentName:"p"},"state.users.entities[123]")," would be a single ",Object(r.b)("inlineCode",{parentName:"p"},"entity"),".")),Object(r.b)("p",null,"The methods generated by ",Object(r.b)("inlineCode",{parentName:"p"},"createEntityAdapter"),' will all manipulate an "entity state" structure that looks like:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  // The unique IDs of each item. Must be strings or numbers\n  ids: []\n  // A lookup table mapping entity IDs to the corresponding entity objects\n  entities: {\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"createEntityAdapter")," may be called multiple times in an application. If you are using it with plain JavaScript, you may be able to reuse a single adapter definition with multiple entity types if they're similar enough (such as all having an ",Object(r.b)("inlineCode",{parentName:"p"},"entity.id")," field). For ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/redux-toolkit/redux-toolkit/usage/usage-with-typescript#createentityadapter"}),"TypeScript usage"),", you will need to call ",Object(r.b)("inlineCode",{parentName:"p"},"createEntityAdapter")," a separate time for each distinct ",Object(r.b)("inlineCode",{parentName:"p"},"Entity")," type, so that the type definitions are inferred correctly."),Object(r.b)("p",null,"Sample usage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import {\n  createEntityAdapter,\n  createSlice,\n  configureStore\n} from '@reduxjs/toolkit'\n\nconst booksAdapter = createEntityAdapter({\n  // Assume IDs are stored in a field other than `book.id`\n  selectId: book => book.bookId,\n  // Keep the \"all IDs\" array sorted based on book titles\n  sortComparer: (a, b) => a.title.localeCompare(b.title)\n})\n\nconst booksSlice = createSlice({\n  name: 'books',\n  initialState: booksAdapter.getInitialState(),\n  reducers: {\n    // Can pass adapter functions directly as case reducers.  Because we're passing this\n    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator\n    bookAdded: booksAdapter.addOne,\n    booksReceived(state, action) {\n      // Or, call them as \"mutating\" helpers in a case reducer\n      booksAdapter.setAll(state, action.payload.books)\n    }\n  }\n})\n\nconst store = configureStore({\n  reducer: {\n    books: booksSlice.reducer\n  }\n})\n\nconsole.log(store.getState().books)\n// {ids: [], entities: {} }\n\n// Can create a set of memoized selectors based on the location of this entity state\nconst booksSelectors = booksAdapter.getSelectors(state => state.books)\n\n// And then use the selectors to retrieve values\nconst allBooks = booksSelectors.selectAll(store.getState())\n")),Object(r.b)("h2",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"createEntityAdapter")," accepts a single options object parameter, with two optional fields inside."),Object(r.b)("h3",{id:"selectid"},Object(r.b)("inlineCode",{parentName:"h3"},"selectId")),Object(r.b)("p",null,"A function that accepts a single ",Object(r.b)("inlineCode",{parentName:"p"},"Entity")," instance, and returns the value of whatever unique ID field is inside. If not provided, the default implementation is ",Object(r.b)("inlineCode",{parentName:"p"},"entity => entity.id"),". If your ",Object(r.b)("inlineCode",{parentName:"p"},"Entity")," type keeps its unique ID values in a field other than ",Object(r.b)("inlineCode",{parentName:"p"},"entity.id"),", you ",Object(r.b)("strong",{parentName:"p"},"must")," provide a ",Object(r.b)("inlineCode",{parentName:"p"},"selectId")," function."),Object(r.b)("h3",{id:"sortcomparer"},Object(r.b)("inlineCode",{parentName:"h3"},"sortComparer")),Object(r.b)("p",null,"A callback function that accepts two ",Object(r.b)("inlineCode",{parentName:"p"},"Entity")," instances, and should return a standard ",Object(r.b)("inlineCode",{parentName:"p"},"Array.sort()")," numeric result (1, 0, -1) to indicate their relative order for sorting."),Object(r.b)("p",null,"If provided, the ",Object(r.b)("inlineCode",{parentName:"p"},"state.ids")," array will be kept in sorted order based on comparisons of the entity objects, so that mapping over the IDs array to retrieve entities by ID should result in a sorted array of entities."),Object(r.b)("p",null,"If not provided, the ",Object(r.b)("inlineCode",{parentName:"p"},"state.ids")," array will not be sorted, and no guarantees are made about the ordering. In other words, ",Object(r.b)("inlineCode",{parentName:"p"},"state.ids")," can be expected to behave like a standard Javascript array."),Object(r.b)("h2",{id:"return-value"},"Return Value"),Object(r.b)("p",null,'A "entity adapter" instance. An entity adapter is a plain JS object (not a class) containing the generated reducer functions, the original provided ',Object(r.b)("inlineCode",{parentName:"p"},"selectId")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sortComparer"),' callbacks, a method to generate an initial "entity state" value, and functions to generate a set of globalized and non-globalized memoized selector functions for this entity type.'),Object(r.b)("p",null,"The adapter instance will include the following methods (additional referenced TypeScript types included):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type EntityId = number | string\n\nexport type Comparer<T> = (a: T, b: T) => number\n\nexport type IdSelector<T> = (model: T) => EntityId\n\nexport interface DictionaryNum<T> {\n  [id: number]: T | undefined\n}\n\nexport interface Dictionary<T> extends DictionaryNum<T> {\n  [id: string]: T | undefined\n}\n\nexport type Update<T> = { id: EntityId; changes: Partial<T> }\n\nexport interface EntityState<T> {\n  ids: EntityId[]\n  entities: Dictionary<T>\n}\n\nexport interface EntityDefinition<T> {\n  selectId: IdSelector<T>\n  sortComparer: false | Comparer<T>\n}\n\nexport interface EntityStateAdapter<T> {\n  addOne<S extends EntityState<T>>(state: S, entity: T): S\n  addOne<S extends EntityState<T>>(state: S, action: PayloadAction<T>): S\n\n  addMany<S extends EntityState<T>>(state: S, entities: T[]): S\n  addMany<S extends EntityState<T>>(state: S, entities: PayloadAction<T[]>): S\n\n  setAll<S extends EntityState<T>>(state: S, entities: T[]): S\n  setAll<S extends EntityState<T>>(state: S, entities: PayloadAction<T[]>): S\n\n  removeOne<S extends EntityState<T>>(state: S, key: EntityId): S\n  removeOne<S extends EntityState<T>>(state: S, key: PayloadAction<EntityId>): S\n\n  removeMany<S extends EntityState<T>>(state: S, keys: EntityId[]): S\n  removeMany<S extends EntityState<T>>(\n    state: S,\n    keys: PayloadAction<EntityId[]>\n  ): S\n\n  removeAll<S extends EntityState<T>>(state: S): S\n\n  updateOne<S extends EntityState<T>>(state: S, update: Update<T>): S\n  updateOne<S extends EntityState<T>>(\n    state: S,\n    update: PayloadAction<Update<T>>\n  ): S\n\n  updateMany<S extends EntityState<T>>(state: S, updates: Update<T>[]): S\n  updateMany<S extends EntityState<T>>(\n    state: S,\n    updates: PayloadAction<Update<T>[]>\n  ): S\n\n  upsertOne<S extends EntityState<T>>(state: S, entity: T): S\n  upsertOne<S extends EntityState<T>>(state: S, entity: PayloadAction<T>): S\n\n  upsertMany<S extends EntityState<T>>(state: S, entities: T[]): S\n  upsertMany<S extends EntityState<T>>(\n    state: S,\n    entities: PayloadAction<T[]>\n  ): S\n}\n\nexport interface EntitySelectors<T, V> {\n  selectIds: (state: V) => EntityId[]\n  selectEntities: (state: V) => Dictionary<T>\n  selectAll: (state: V) => T[]\n  selectTotal: (state: V) => number\n  selectById: (state: V, id: EntityId) => T | undefined\n}\n\nexport interface EntityAdapter<T> extends EntityStateAdapter<T> {\n  selectId: IdSelector<T>\n  sortComparer: false | Comparer<T>\n  getInitialState(): EntityState<T>\n  getInitialState<S extends object>(state: S): EntityState<T> & S\n  getSelectors(): EntitySelectors<T, EntityState<T>>\n  getSelectors<V>(\n    selectState: (state: V) => EntityState<T>\n  ): EntitySelectors<T, V>\n}\n")),Object(r.b)("h3",{id:"crud-functions"},"CRUD Functions"),Object(r.b)("p",null,"The primary content of an entity adapter is a set of generated reducer functions for adding, updating, and removing entity instances from an entity state object:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addOne"),": accepts a single entity, and adds it."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addMany"),": accepts an array of entities or an object in the shape of ",Object(r.b)("inlineCode",{parentName:"li"},"Record<EntityId, T>"),", and adds them."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setAll"),": accepts an array of entities or an object in the shape of ",Object(r.b)("inlineCode",{parentName:"li"},"Record<EntityId, T>"),", and replaces the existing entity contents with the values in the array."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"removeOne"),": accepts a single entity ID value, and removes the entity with that ID if it exists."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"removeMany"),": accepts an array of entity ID values, and removes each entity with those IDs if they exist."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateOne"),': accepts an "update object" containing an entity ID and an object containing one or more new field values to update inside a ',Object(r.b)("inlineCode",{parentName:"li"},"changes")," field, and performs a shallow update on the corresponding entity."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateMany"),": accepts an array of update objects, and performs shallow updates on all corresponding entities."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"upsertOne"),": accepts a single entity. If an entity with that ID exists, it will perform a shallow update and the specified fields will be merged into the existing entity, with any matching fields overwriting the existing values. If the entity does not exist, it will be added."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"upsertMany"),": accepts an array of entities or an object in the shape of ",Object(r.b)("inlineCode",{parentName:"li"},"Record<EntityId, T>")," that will be shallowly upserted.")),Object(r.b)("p",null,"Each method has a signature that looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"(state: EntityState<T>, argument: TypeOrPayloadAction<Argument<T>>) => EntityState<T>\n")),Object(r.b)("p",null,"In other words, they accept a state that looks like ",Object(r.b)("inlineCode",{parentName:"p"},"{ids: [], entities: {}}"),", and calculate and return a new state."),Object(r.b)("p",null,"These CRUD methods may be used in multiple ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"They may be passed as case reducers directly to ",Object(r.b)("inlineCode",{parentName:"li"},"createReducer")," and ",Object(r.b)("inlineCode",{parentName:"li"},"createSlice"),"."),Object(r.b)("li",{parentName:"ul"},'They may be used as "mutating" helper methods when called manually, such as a separate hand-written call to ',Object(r.b)("inlineCode",{parentName:"li"},"addOne()")," inside of an existing case reducer, if the ",Object(r.b)("inlineCode",{parentName:"li"},"state")," argument is actually an Immer ",Object(r.b)("inlineCode",{parentName:"li"},"Draft")," value."),Object(r.b)("li",{parentName:"ul"},"They may be used as immutable update methods when called manually, if the ",Object(r.b)("inlineCode",{parentName:"li"},"state")," argument is actually a plain JS object or array.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": These methods do ",Object(r.b)("em",{parentName:"p"},"not")," have corresponding Redux actions created - they are just standalone reducers / update logic. ",Object(r.b)("strong",{parentName:"p"},"It is entirely up to you to decide where and how to use these methods!")," Most of the time, you will want to pass them to ",Object(r.b)("inlineCode",{parentName:"p"},"createSlice")," or use them inside another reducer.")),Object(r.b)("p",null,"Each method will check to see if the ",Object(r.b)("inlineCode",{parentName:"p"},"state")," argument is an Immer ",Object(r.b)("inlineCode",{parentName:"p"},"Draft")," or not. If it is a draft, the method will assume that it's safe to continue mutating that draft further. If it is not a draft, the method will pass the plain JS value to Immer's ",Object(r.b)("inlineCode",{parentName:"p"},"createNextState()"),", and return the immutably updated result value."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"argument")," may be either a plain value (such as a single ",Object(r.b)("inlineCode",{parentName:"p"},"Entity")," object for ",Object(r.b)("inlineCode",{parentName:"p"},"addOne()")," or an ",Object(r.b)("inlineCode",{parentName:"p"},"Entity[]")," array for ",Object(r.b)("inlineCode",{parentName:"p"},"addMany()"),", or a ",Object(r.b)("inlineCode",{parentName:"p"},"PayloadAction")," action object with that same value as ",Object(r.b)("inlineCode",{parentName:"p"},"action.payload"),". This enables using them as both helper functions and reducers."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note on shallow updates:")," ",Object(r.b)("inlineCode",{parentName:"p"},"updateOne"),", ",Object(r.b)("inlineCode",{parentName:"p"},"updateMany"),", ",Object(r.b)("inlineCode",{parentName:"p"},"upsertOne"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"upsertMany")," only perform shallow updates in a mutable manner. This means that if your update/upsert consists of an object that includes nested properties, the value of the incoming change will overwrite the ",Object(r.b)("strong",{parentName:"p"},"entire")," existing nested object. This may be unintended behavior for your application. As a general rule, these methods are best used with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/redux-toolkit/redux-toolkit/usage/usage-guide#managing-normalized-data"}),"normalized data")," that ",Object(r.b)("em",{parentName:"p"},"do not")," have nested properties.")),Object(r.b)("h3",{id:"getinitialstate"},Object(r.b)("inlineCode",{parentName:"h3"},"getInitialState")),Object(r.b)("p",null,"Returns a new entity state object like ",Object(r.b)("inlineCode",{parentName:"p"},"{ids: [], entities: {}}"),"."),Object(r.b)("p",null,"It accepts an optional object as an argument. The fields in that object will be merged into the returned initial state value. For example, perhaps you want your slice to also track some loading state:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const booksSlice = createSlice({\n  name: 'books',\n  initialState: booksAdapter.getInitialState({\n    loading: 'idle'\n  }),\n  reducers: {\n    booksLoadingStarted(state, action) {\n      // Can update the additional state field\n      state.loading = 'pending'\n    }\n  }\n})\n")),Object(r.b)("h3",{id:"selector-functions"},"Selector Functions"),Object(r.b)("p",null,"The entity adapter will contain a ",Object(r.b)("inlineCode",{parentName:"p"},"getSelectors()")," function that returns a set of selectors that know how to read the contents of an entity state object:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"selectIds"),": returns the ",Object(r.b)("inlineCode",{parentName:"li"},"state.ids")," array."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"selectEntities"),": returns the ",Object(r.b)("inlineCode",{parentName:"li"},"state.entities")," lookup table."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"selectAll"),": maps over the ",Object(r.b)("inlineCode",{parentName:"li"},"state.ids")," array, and returns an array of entities in the same order."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"selectTotal"),": returns the total number of entities being stored in this state."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"selectById"),": given the state and an entity ID, returns the entity with that ID or ",Object(r.b)("inlineCode",{parentName:"li"},"undefined"),".")),Object(r.b)("p",null,"Each selector function will be created using the ",Object(r.b)("inlineCode",{parentName:"p"},"createSelector")," function from Reselect, to enable memoizing calculation of the results."),Object(r.b)("p",null,"Because selector functions are dependent on knowing where in the state tree this specific entity state object is kept, ",Object(r.b)("inlineCode",{parentName:"p"},"getSelectors()")," can be called in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'If called without any arguments, it returns an "unglobalized" set of selector functions that assume their ',Object(r.b)("inlineCode",{parentName:"li"},"state")," argument is the actual entity state object to read from."),Object(r.b)("li",{parentName:"ul"},"It may also be called with a selector function that accepts the entire Redux state tree and returns the correct entity state object.")),Object(r.b)("p",null,"For example, the entity state for a ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," type might be kept in the Redux state tree as ",Object(r.b)("inlineCode",{parentName:"p"},"state.books"),". You can use ",Object(r.b)("inlineCode",{parentName:"p"},"getSelectors()")," to read from that state in two ways:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const store = configureStore({\n  reducer: {\n    books: booksReducer\n  }\n})\n\nconst simpleSelectors = booksAdapter.getSelectors()\nconst globalizedSelectors = booksAdapter.getSelectors(state => state.books)\n\n// Need to manually pass the correct entity state object in to this selector\nconst bookIds = simpleSelectors.selectIds(store.getState().books)\n\n// This selector already knows how to find the books entity state\nconst allBooks = globalizedSelectors.selectAll(store.getState())\n")),Object(r.b)("h2",{id:"notes"},"Notes"),Object(r.b)("h3",{id:"applying-multiple-updates"},"Applying Multiple Updates"),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"updateMany()")," is called with multiple updates targeted to the same ID, they will be merged into a single update, with later updates overwriting the earlier ones."),Object(r.b)("p",null,"For both ",Object(r.b)("inlineCode",{parentName:"p"},"updateOne()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"updateMany()"),", changing the ID of one existing entity to match the ID of a second existing entity will cause the first to replace the second completely."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("p",null,"Exercising several of the CRUD methods and selectors:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import {\n  createEntityAdapter,\n  createSlice,\n  configureStore\n} from '@reduxjs/toolkit'\n\n// Since we don't provide `selectId`, it defaults to assuming `entity.id` is the right field\nconst booksAdapter = createEntityAdapter({\n  // Keep the \"all IDs\" array sorted based on book titles\n  sortComparer: (a, b) => a.title.localeCompare(b.title)\n})\n\nconst booksSlice = createSlice({\n  name: 'books',\n  initialState: booksAdapter.getInitialState({\n    loading: 'idle'\n  }),\n  reducers: {\n    // Can pass adapter functions directly as case reducers.  Because we're passing this\n    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator\n    bookAdded: booksAdapter.addOne,\n    booksLoading(state, action) {\n      if (state.loading === 'idle') {\n        state.loading = 'pending'\n      }\n    },\n    booksReceived(state, action) {\n      if (state.loading === 'pending') {\n        // Or, call them as \"mutating\" helpers in a case reducer\n        booksAdapter.setAll(state, action.payload)\n        state.loading = 'idle'\n      }\n    },\n    bookUpdated: booksAdapter.updateOne\n  }\n})\n\nconst {\n  bookAdded,\n  booksLoading,\n  booksReceived,\n  bookUpdated\n} = booksSlice.actions\n\nconst store = configureStore({\n  reducer: {\n    books: booksSlice.reducer\n  }\n})\n\n// Check the initial state:\nconsole.log(store.getState().books)\n// {ids: [], entities: {}, loading: 'idle' }\n\nconst booksSelectors = booksAdapter.getSelectors(state => state.books)\n\nstore.dispatch(bookAdded({ id: 'a', title: 'First' }))\nconsole.log(store.getState().books)\n// {ids: [\"a\"], entities: {a: {id: \"a\", title: \"First\"}}, loading: 'idle' }\n\nstore.dispatch(bookUpdated({ id: 'a', changes: { title: 'First (altered)' } }))\nstore.dispatch(booksLoading())\nconsole.log(store.getState().books)\n// {ids: [\"a\"], entities: {a: {id: \"a\", title: \"First (altered)\"}}, loading: 'pending' }\n\nstore.dispatch(\n  booksReceived([\n    { id: 'b', title: 'Book 3' },\n    { id: 'c', title: 'Book 2' }\n  ])\n)\n\nconsole.log(booksSelectors.selectIds(store.getState()))\n// \"a\" was removed due to the `setAll()` call\n// Since they're sorted by title, \"Book 2\" comes before \"Book 3\"\n// [\"c\", \"b\"]\n\nconsole.log(booksSelectors.selectAll(store.getState()))\n// All book entries in sorted order\n// [{id: \"c\", title: \"Book 2\"}, {id: \"b\", title: \"Book 3\"}]\n")))}c.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(m,l({ref:t},c,{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";e.exports=n(120)},120:function(e,t,n){"use strict";var a=n(121),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,d=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.concurrent_mode"):60111,b=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function j(e,t,n,a,r,i,o,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,a,r,i,o,l],c=0;(e=Error(t.replace(/%s/g,(function(){return s[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function O(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=0;a<t;a++)n+="&args[]="+encodeURIComponent(arguments[a+1]);j(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function v(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}function N(){}function k(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=v.prototype;var C=k.prototype=new N;C.constructor=k,a(C,v.prototype),C.isPureReactComponent=!0;var w={current:null},T={current:null},E=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var a=void 0,r={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)E.call(t,a)&&!x.hasOwnProperty(a)&&(r[a]=t[a]);var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===r[a]&&(r[a]=s[a]);return{$$typeof:i,type:e,key:o,ref:l,props:r,_owner:T.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,R=[];function D(e,t,n,a){if(R.length){var r=R.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function M(e,t,n){return null==e?0:function e(t,n,a,r){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var s=!1;if(null===t)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case i:case o:s=!0}}if(s)return a(r,t,""===n?"."+U(t,0):n),1;if(s=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var d=n+U(l=t[c],c);s+=e(l,d,a,r)}else if(null===t||"object"!=typeof t?d=null:d="function"==typeof(d=h&&t[h]||t["@@iterator"])?d:null,"function"==typeof d)for(t=d.call(t),c=0;!(l=t.next()).done;)s+=e(l=l.value,d=n+U(l,c++),a,r);else"object"===l&&O("31","[object Object]"===(a=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":a,"");return s}(e,"",t,n)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,a,n,(function(e){return e})):null!=e&&(I(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),a.push(e))}function F(e,t,n,a,r){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),M(e,q,t=D(t,i,a,r)),_(t)}function B(){var e=w.current;return null===e&&O("321"),e}var V={Children:{map:function(e,t,n){if(null==e)return e;var a=[];return F(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;M(e,$,t=D(null,null,t,n)),_(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return I(e)||O("143"),e}},createRef:function(){return{current:null}},Component:v,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,n){return B().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,n){return B().useReducer(e,t,n)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},Fragment:l,StrictMode:s,Suspense:m,createElement:A,cloneElement:function(e,t,n){null==e&&O("267",e);var r=void 0,o=a({},e.props),l=e.key,s=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(s=t.ref,c=T.current),void 0!==t.key&&(l=""+t.key);var d=void 0;for(r in e.type&&e.type.defaultProps&&(d=e.type.defaultProps),t)E.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=void 0===t[r]&&void 0!==d?d[r]:t[r])}if(1===(r=arguments.length-2))o.children=n;else if(1<r){d=Array(r);for(var p=0;p<r;p++)d[p]=arguments[p+2];o.children=d}return{$$typeof:i,type:e.type,key:l,ref:s,props:o,_owner:c}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:I,version:"16.8.6",unstable_ConcurrentMode:u,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentOwner:T,assign:a}},z={default:V},L=z&&V||z;e.exports=L.default||L},121:function(e,t,n){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var n,l,s=o(e),c=1;c<arguments.length;c++){for(var d in n=Object(arguments[c]))r.call(n,d)&&(s[d]=n[d]);if(a){l=a(n);for(var p=0;p<l.length;p++)i.call(n,l[p])&&(s[l[p]]=n[l[p]])}}return s}}}]);