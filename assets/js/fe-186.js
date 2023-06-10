(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1203:function(e,t,n){"use strict";n.r(t);var a=n(51),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"一、index-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、index-js"}},[e._v("#")]),e._v(" 一、index.js")]),e._v(" "),n("blockquote",[n("p",[e._v("https://github.com/reactjs/redux/blob/master/src/index.js")])]),e._v(" "),n("ul",[n("li",[e._v("暴露了几个核心"),n("code",[e._v("API")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import createStore from './createStore';\nimport combineReducers from './utils/combineReducers';\nimport bindActionCreators from './utils/bindActionCreators';\nimport applyMiddleware from './utils/applyMiddleware';\nimport compose from './utils/compose';\n\nexport {\n  createStore,\n  combineReducers,\n  bindActionCreators,\n  applyMiddleware,\n  compose\n};\n")])])]),n("h2",{attrs:{id:"二、createstore-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、createstore-js"}},[e._v("#")]),e._v(" 二、createStore.js")]),e._v(" "),n("blockquote",[n("p",[e._v("https://github.com/reactjs/redux/blob/master/src/createStore.js")])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("redux.createStore(reducer, initialState)")]),e._v(" 传入了"),n("code",[e._v("reducer")]),e._v("、"),n("code",[e._v("initialState")]),e._v("，并返回一个"),n("code",[e._v("store")]),e._v("对象")]),e._v(" "),n("li",[n("code",[e._v("store")]),e._v("对象对外暴露了"),n("code",[e._v("dispatch")]),e._v("、"),n("code",[e._v("getStat")]),e._v("e、"),n("code",[e._v("subscribe")]),e._v("方法")]),e._v(" "),n("li",[n("code",[e._v("store")]),e._v("对象通过"),n("code",[e._v("getState()")]),e._v(" 获取内部状态")]),e._v(" "),n("li",[n("code",[e._v("initialState")]),e._v("为 "),n("code",[e._v("store")]),e._v(" 的初始状态，如果不传则为undefined")]),e._v(" "),n("li",[n("code",[e._v("store")]),e._v("对象通过"),n("code",[e._v("reducer")]),e._v("来修改内部状态")]),e._v(" "),n("li",[n("code",[e._v("store")]),e._v("对象创建的时候，内部会主动调用"),n("code",[e._v("dispatch({ type: ActionTypes.INIT })")]),e._v(";来对内部状态进行初始化。通过断点或者日志打印就可以看到，"),n("code",[e._v("store")]),e._v("对象创建的同时，"),n("code",[e._v("reducer")]),e._v("就会被调用进行初始化")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import isPlainObject from './utils/isPlainObject';\n\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\n// 初始化的时候(redux.createStore(reducer, initialState)时),传的action.type 就是这货啦\nexport var ActionTypes = {\n  INIT: '@@redux/INIT'\n};\n\n/**\n * Creates a Redux store that holds the state tree.\n * The only way to change the data in the store is to call `dispatch()` on it.\n *\n * There should only be a single store in your app. To specify how different\n * parts of the state tree respond to actions, you may combine several reducers\n * into a single reducer function by using `combineReducers`.\n *\n * @param {Function} reducer A function that returns the next state tree, given\n * the current state tree and the action to handle.\n *\n * @param {any} [initialState] The initial state. You may optionally specify it\n * to hydrate the state from the server in universal apps, or to restore a\n * previously serialized user session.\n * If you use `combineReducers` to produce the root reducer function, this must be\n * an object with the same shape as `combineReducers` keys.\n *\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\n * and subscribe to changes.\n */\nexport default function createStore(reducer, initialState) {\n  if (typeof reducer !== 'function') {\n    throw new Error('Expected the reducer to be a function.');\n  }\n\n  var currentReducer = reducer;\n  var currentState = initialState;\n  var listeners = [];\n  var isDispatching = false;\n\n  /**\n   * Reads the state tree managed by the store.\n   *\n   * @returns {any} The current state tree of your application.\n   */\n  // 这个方法没什么好讲的,返回当前的state\n  function getState() {\n    return currentState;\n  }\n\n  /**\n   * Adds a change listener. It will be called any time an action is dispatched,\n   * and some part of the state tree may potentially have changed. You may then\n   * call `getState()` to read the current state tree inside the callback.\n   *\n   * @param {Function} listener A callback to be invoked on every dispatch.\n   * @returns {Function} A function to remove this change listener.\n   */\n  // 很常见的监听函数添加方式,当store.dispatch 的时候被调用\n  // store.subscribe(listener) 返回一个方法(unscribe),可以用来取消监听\n  function subscribe(listener) {\n    listeners.push(listener);\n    var isSubscribed = true;\n\n    return function unsubscribe() {\n      if (!isSubscribed) {\n        return;\n      }\n\n      isSubscribed = false;\n      var index = listeners.indexOf(listener);\n      listeners.splice(index, 1);\n    };\n  }\n\n  /**\n   * Dispatches an action. It is the only way to trigger a state change.\n   *\n   * The `reducer` function, used to create the store, will be called with the\n   * current state tree and the given `action`. Its return value will\n   * be considered the **next** state of the tree, and the change listeners\n   * will be notified.\n   *\n   * The base implementation only supports plain object actions. If you want to\n   * dispatch a Promise, an Observable, a thunk, or something else, you need to\n   * wrap your store creating function into the corresponding middleware. For\n   * example, see the documentation for the `redux-thunk` package. Even the\n   * middleware will eventually dispatch plain object actions using this method.\n   *\n   * @param {Object} action A plain object representing “what changed”. It is\n   * a good idea to keep actions serializable so you can record and replay user\n   * sessions, or use the time travelling `redux-devtools`. An action must have\n   * a `type` property which may not be `undefined`. It is a good idea to use\n   * string constants for action types.\n   *\n   * @returns {Object} For convenience, the same action object you dispatched.\n   *\n   * Note that, if you use a custom middleware, it may wrap `dispatch()` to\n   * return something else (for example, a Promise you can await).\n   */\n  // 以下情况会报错\n  // 1. 传入的action不是一个对象\n  // 2. 传入的action是个对象,但是action.type 是undefined\n  function dispatch(action) {\n    if (!isPlainObject(action)) {\n      throw new Error(\n        'Actions must be plain objects. ' +\n        'Use custom middleware for async actions.'\n      );\n    }\n\n    if (typeof action.type === 'undefined') {\n      throw new Error(\n        'Actions may not have an undefined \"type\" property. ' +\n        'Have you misspelled a constant?'\n      );\n    }\n\n    if (isDispatching) {\n      throw new Error('Reducers may not dispatch actions.');\n    }\n\n    try {\n      isDispatching = true;\n      // 就是这一句啦, 将 currentState 设置为 reducer(currentState, action) 返回的值\n      currentState = currentReducer(currentState, action);\n    } finally {\n      isDispatching = false;\n    }\n\n    // 如果有监听函数,就顺序调用\n    listeners.slice().forEach(listener => listener());\n\n    // 最后,返回传入的action\n    return action;\n  }\n\n  /**\n   * Replaces the reducer currently used by the store to calculate the state.\n   *\n   * You might need this if your app implements code splitting and you want to\n   * load some of the reducers dynamically. You might also need this if you\n   * implement a hot reloading mechanism for Redux.\n   *\n   * @param {Function} nextReducer The reducer for the store to use instead.\n   * @returns {void}\n   */\n  function replaceReducer(nextReducer) {\n    currentReducer = nextReducer;\n    dispatch({ type: ActionTypes.INIT });\n  }\n\n  // When a store is created, an \"INIT\" action is dispatched so that every\n  // reducer returns their initial state. This effectively populates\n  // the initial state tree.\n  //\n  // redux.createStore(reducer, initialState) 的时候, 内部会 自己调用 dispatch({ type: ActionTypes.INIT });\n  // 来完成state的初始化\n  dispatch({ type: ActionTypes.INIT });\n\n  // 返回的就是这个东东了,只有四个方法\n  return {\n    dispatch,\n    subscribe,\n    getState,\n    replaceReducer\n  };\n}\n")])])]),n("h2",{attrs:{id:"三、combinereducers-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、combinereducers-js"}},[e._v("#")]),e._v(" 三、combineReducers.js")]),e._v(" "),n("blockquote",[n("p",[e._v("https://github.com/reactjs/redux/blob/master/src/combineReducers.js")])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("redux.combineReducers(reducerMap)")]),e._v(" 的作用在于合并多个"),n("code",[e._v("reducer")]),e._v("函数，并返回一个新的"),n("code",[e._v("reducer")]),e._v("函数。因此可以看到，"),n("code",[e._v("combineReducers")]),e._v(" 返回了一个函数，并且该函数的参数同样是"),n("code",[e._v("state")]),e._v("、"),n("code",[e._v("reducer")])]),e._v(" "),n("li",[e._v("最终 "),n("code",[e._v("store.getState()")]),e._v("返回的"),n("code",[e._v("state")]),e._v("，大概会是这么个样子"),n("code",[e._v("{todos: xx, filter: xx}")]),e._v("。简单的说，"),n("code",[e._v("state")]),e._v("被拆分成了两份，"),n("code",[e._v("TodoReducer")]),e._v("的返回值赋值给了"),n("code",[e._v("state.todos")]),e._v("，"),n("code",[e._v("FilterReducer")]),e._v("的返回值赋值给了"),n("code",[e._v("state.filter")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function TodoReducer(state, action) {}\nfunction FilterReducer(state, action) {}\n\nvar finalReducers = redux.combineReducers({\n    todos: TodoReducer,\n    filter: FilterReducer\n});\n")])])]),n("ul",[n("li",[n("code",[e._v("combineReducers(reducerMap)")]),e._v(" 传入一个对象，并返回一个全新的"),n("code",[e._v("reducer")]),e._v("。调用方式跟跟普通的"),n("code",[e._v("reducer")]),e._v("一样，也是传入"),n("code",[e._v("state")]),e._v("、"),n("code",[e._v("action")])]),e._v(" "),n("li",[e._v("通过"),n("code",[e._v("combineReducers")]),e._v("，对 "),n("code",[e._v("store")]),e._v(" 的状态"),n("code",[e._v("state")]),e._v("进行拆分")]),e._v(" "),n("li",[n("code",[e._v("reducerMap的key")]),e._v("，就是 "),n("code",[e._v("state")]),e._v(" 的"),n("code",[e._v("key")]),e._v("，而 调用对应的"),n("code",[e._v("reducer")]),e._v("返回的值，则是这个"),n("code",[e._v("key")]),e._v("对应的值。如上面的例子，"),n("code",[e._v("state.todos == TodoReducer(state, action)")])]),e._v(" "),n("li",[n("code",[e._v("redux.createStore(finalReducers, initialState)")]),e._v(" 调用时，同样会对 "),n("code",[e._v("state")]),e._v("进行初始化。这个初始化跟通过普通的"),n("code",[e._v("reducer")]),e._v("进行初始化没多大区别。举例来说，如果 "),n("code",[e._v("initialState.todos = undefined")]),e._v("，那么 "),n("code",[e._v("TodoReducer(state, action)")]),e._v("初始传入的"),n("code",[e._v("state")]),e._v("就是"),n("code",[e._v("undefined")]),e._v("；如果"),n("code",[e._v("initialState.todos = []")]),e._v("，那么 "),n("code",[e._v("TodoReducer(state, action)")]),e._v("初始传入的"),n("code",[e._v("state")]),e._v("就是"),n("code",[e._v("[]")])]),e._v(" "),n("li",[n("code",[e._v("store.dispatch(action)")]),e._v("，"),n("code",[e._v("finalReducers")]),e._v(" 里面，会遍历整个"),n("code",[e._v("reducerMap")]),e._v("，依次调用每个"),n("code",[e._v("reducer")]),e._v("，并将每个"),n("code",[e._v("reducer")]),e._v("返回的子"),n("code",[e._v("state")]),e._v("赋给"),n("code",[e._v("state")]),e._v("对应的"),n("code",[e._v("key")]),e._v("。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import { ActionTypes } from '../createStore';\nimport isPlainObject from '../utils/isPlainObject';\nimport mapValues from '../utils/mapValues';\nimport pick from '../utils/pick';\n\n/* eslint-disable no-console */\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionName = actionType && `\"${actionType.toString()}\"` || 'an action';\n\n  return (\n    `Reducer \"${key}\" returned undefined handling ${actionName}. ` +\n    `To ignore an action, you must explicitly return the previous state.`\n  );\n}\n\nfunction getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {\n  var reducerKeys = Object.keys(outputState);\n  var argumentName = action && action.type === ActionTypes.INIT ?\n    'initialState argument passed to createStore' :\n    'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return (\n      'Store does not have a valid reducer. Make sure the argument passed ' +\n      'to combineReducers is an object whose values are reducers.'\n    );\n  }\n\n  if (!isPlainObject(inputState)) {\n    return (\n      `The ${argumentName} has unexpected type of \"` +\n      ({}).toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] +\n      `\". Expected argument to be an object with the following ` +\n      `keys: \"${reducerKeys.join('\", \"')}\"`\n    );\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(\n    key => reducerKeys.indexOf(key) < 0\n  );\n\n  if (unexpectedKeys.length > 0) {\n    return (\n      `Unexpected ${unexpectedKeys.length > 1 ? 'keys' : 'key'} ` +\n      `\"${unexpectedKeys.join('\", \"')}\" found in ${argumentName}. ` +\n      `Expected to find one of the known reducer keys instead: ` +\n      `\"${reducerKeys.join('\", \"')}\". Unexpected keys will be ignored.`\n    );\n  }\n}\n\n// 对reducer做合法性检测\n// store = Redux.createStore(reducer, initialState) --\x3e\n// currentState = initialState\n// currentState = currentReducer(currentState, action);\n//\n// 从调用关系,调用时机来看, store.getState() 的初始值(currentState)\n// 为 currentReducer(initialState, { type: ActionTypes.INIT })\n//\n// 1. 在初始化阶段,reducer 传入的 state 值是 undefined,此时,需要返回初始state,且初始state不能为undefined\n// 2. 当传入不认识的 actionType 时, reducer(state, {type}) 返回的不能是undefined\n// 3. redux/ 这个 namespace 下的action 不应该做处理,直接返回 currentState 就行 (谁运气这么差会去用这种actionType...)\nfunction assertReducerSanity(reducers) {\n  Object.keys(reducers).forEach(key => {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, { type: ActionTypes.INIT });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error(\n        `Reducer \"${key}\" returned undefined during initialization. ` +\n        `If the state passed to the reducer is undefined, you must ` +\n        `explicitly return the initial state. The initial state may ` +\n        `not be undefined.`\n      );\n    }\n\n    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');\n    if (typeof reducer(undefined, { type }) === 'undefined') {\n      throw new Error(\n        `Reducer \"${key}\" returned undefined when probed with a random type. ` +\n        `Don't try to handle ${ActionTypes.INIT} or other actions in \"redux/*\" ` +\n        `namespace. They are considered private. Instead, you must return the ` +\n        `current state for any unknown actions, unless it is undefined, ` +\n        `in which case you must return the initial state, regardless of the ` +\n        `action type. The initial state may not be undefined.`\n      );\n    }\n  });\n}\n\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\n\nexport default function combineReducers(reducers) {\n  // 返回一个对象, key => value 且value是function(其实就是过滤掉非function)\n  var finalReducers = pick(reducers, (val) => typeof val === 'function');\n  var sanityError;\n\n  try {\n    // 对所有的子reducer 做一些合法性断言,如果没有出错再继续下面的处理\n    // 合法性断言的内容,见API注释\n    assertReducerSanity(finalReducers);\n  } catch (e) {\n    sanityError = e;\n  }\n\n  // 所有的 key: value,将value置成了undefined,费解...\n  // 总而言之, 初始state 就是 类似 {hello: undefined, world: undefined} 的东东\n  // TODO 确认这里的逻辑\n  var defaultState = mapValues(finalReducers, () => undefined);\n\n  return function combination(state = defaultState, action) {\n    if (sanityError) {\n      throw sanityError;\n    }\n\n    var hasChanged = false;\n    // 这段代码,简单的说,就是循环一遍 finalState[key] = fn(reducer, key)\n    var finalState = mapValues(finalReducers, (reducer, key) => {\n      var previousStateForKey = state[key];\n      var nextStateForKey = reducer(previousStateForKey, action);\n      if (typeof nextStateForKey === 'undefined') {\n        // 其他一个reducer返回的是undefined,于是挂啦...抛出错误\n        var errorMessage = getUndefinedStateErrorMessage(key, action);\n        throw new Error(errorMessage);\n      }\n      // 这段代码有些费解,从redux的设计理念上来讲,除了不认识的action type,其他情况都应该返回全新的state\n      // 也就是说\n      // 1. action type 认识,返回新的state,于是这里 hasChanged 为 true\n      // 2. action type 不认识,返回原来的state,于是这里 hasChanged 为 false\n      // 3. 不管action type 是否认识, 在原来的state上修改,但是返回的是修改后的state(没有返回拷贝),那么,hasChanged还是为false\n      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n      return nextStateForKey;\n    });\n\n    // 开发环境中(于是记得在生产环境去掉)\n    // 后面再研究这段代码,毕竟不是主线路...\n    if (process.env.NODE_ENV !== 'production') {\n      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);\n      if (warningMessage) {\n        console.error(warningMessage);\n      }\n    }\n\n    return hasChanged ? finalState : state;\n  };\n}\n")])])]),n("h2",{attrs:{id:"四、bindactioncreator-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、bindactioncreator-js"}},[e._v("#")]),e._v(" 四、bindActionCreator.js")]),e._v(" "),n("blockquote",[n("p",[e._v("https://github.com/reactjs/redux/blob/master/src/bindActionCreators.js")])]),e._v(" "),n("ul",[n("li",[e._v("先看个简单例子可能方便理解一些")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var addTodo = function(text){\n    return {\n        type: 'add_todo',\n        text: text\n    };\n};\n\nvar addTodos = function(){\n    return {\n        type: 'add_todos',\n        items: Array.prototype.slice.call(arguments, 0)\n    };\n};\n\nvar reducer = function(state, action){\n    switch (action.type) {\n        case 'add_todo':\n            return state.concat(action.text);\n        case 'add_todos':\n            return state.concat(action.items);\n        default:\n            return state;\n    }\n};\n\n\nvar store = redux.createStore(reducer, []);\n// 注意,关键代码在这里\nvar actions = redux.bindActionCreators({\n    addTodo: addTodo,\n    addTodos: addTodos\n}, store.dispatch);\n\nconsole.log('state is: ' + store.getState());\n\nstore.dispatch({type: 'add_todo', text: '读书'});\nstore.dispatch({type: 'add_todos', items: ['阅读', '睡觉']});\nconsole.log('state is: ' + store.getState());  // state is: 读书,阅读,睡觉\n\nactions.addTodo('看电影');\nconsole.log('state is: ' + store.getState());  // state is: 读书,阅读,睡觉,看电影\n\nactions.addTodos(['刷牙', '洗澡']);\nconsole.log('state is: ' + store.getState());  // state is: 读书,阅读,睡觉,看电影,刷牙,洗澡\n")])])]),n("ul",[n("li",[e._v("直接看代码")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import mapValues from '../utils/mapValues';\n\nfunction bindActionCreator(actionCreator, dispatch) {\n  return (...args) => dispatch(actionCreator(...args));\n}\n\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass a single function as the first argument,\n * and get a function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\n// 假设 actionCreators === {addTodo: addTodo, removeTodo: removeTodo}\n// 简单的来说 bindActionCreators(actionCreators, dispatch)\n// 最后返回的是:\n// {\n//   addTodo: function(text){\n//      dispatch( actionCreators.addTodo(text) );\n//   },\n//   removeTodo: function(text){\n//      dispatch( actionCreators.removeTodo(text) );\n//   }\n// }\n//\n//  或者说 actionCreators === addTodo (addTodo 为 actionCreator)\n//  最后返回的是\n//  function() {\n//     dispatch(actionCreators());\n//  }\nexport default function bindActionCreators(actionCreators, dispatch) {\n  if (typeof actionCreators === 'function') {\n    return bindActionCreator(actionCreators, dispatch);\n  }\n\n  if (typeof actionCreators !== 'object' || actionCreators === null || actionCreators === undefined) {  // eslint-disable-line no-eq-null\n    throw new Error(\n      `bindActionCreators expected an object or a function, instead received ${actionCreators === null ? 'null' : typeof actionCreators}. ` +\n      `Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?`\n    );\n  }\n\n  return mapValues(actionCreators, actionCreator =>\n    bindActionCreator(actionCreator, dispatch)\n  );\n}\n")])])]),n("h2",{attrs:{id:"五、applymiddleware-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、applymiddleware-js"}},[e._v("#")]),e._v(" 五、applyMiddleware.js")]),e._v(" "),n("blockquote",[n("p",[e._v("https://github.com/reactjs/redux/blob/master/src/applyMiddleware.js")])]),e._v(" "),n("ul",[n("li",[e._v("中间件应该是"),n("code",[e._v("redux")]),e._v("源码里面最绕的一部分")])]),e._v(" "),n("p",[n("strong",[e._v("例子：redux-thunk")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export default function thunkMiddleware({ dispatch, getState }) {\n  return next => action =>\n    typeof action === 'function' ?\n      action(dispatch, getState) :\n      next(action);\n}\n//es5\nfunction thunkMiddleware(store) {\n  var dispatch = store.dispatch;\n  var getState = store.getState;\n\n  return function (next) {\n    return function (action) {\n      return typeof action === 'function' ? action(dispatch, getState) : next(action);\n    };\n  };\n}\n")])])]),n("p",[n("strong",[e._v("自定义中间件：logger")])]),e._v(" "),n("ul",[n("li",[e._v("先看"),n("code",[e._v("logger")]),e._v("的实现")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function middleware(store){\n    return function(next){\n        return function(action){\n            return next(action);\n        }\n    }\n}\n")])])]),n("blockquote",[n("p",[e._v("基本看出中间件声明的模版来了，就是下面这个样子。下面结合"),n("code",[e._v("applyMiddleware")]),e._v("的调用，来说明"),n("code",[e._v("store")]),e._v("、"),n("code",[e._v("next")]),e._v("、"),n("code",[e._v("action")]),e._v(" 几个参数。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function logger(store){\n    return function(next){\n        return function(action){\n            console.log('logger: dispatching ' + action.type);\n            var result = next(action);\n            console.log('logger: next state ' + result);\n            return result;\n        }\n    }\n}\n")])])]),n("p",[n("strong",[e._v("applyMiddleware调用例子")])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("applyMiddleware")]),e._v(" 的调用方式为 "),n("code",[e._v("applyMiddleware(...middlewares)(react.createStore)")]),e._v("。其实这里直接先创建 "),n("code",[e._v("store")]),e._v("，然后"),n("code",[e._v("applyMiddleware(...middlewares)(store)")]),e._v(" 也很容易实现相同的效果，不过作者是故意这样设计的，为了避免在同一个store上多次应用同一个"),n("code",[e._v("middlerware")])]),e._v(" "),n("li",[e._v("中间件顶层的"),n("code",[e._v("store")]),e._v("参数，并不是常规的"),n("code",[e._v("store")]),e._v("，虽然它也有 "),n("code",[e._v("getState")]),e._v("、"),n("code",[e._v("dispatch")]),e._v(" 两个方法")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 上面的store参数，其实就是这个对象\n// 其中，store 为内部的store，我们在外面 storeWithMiddleWare.dipatch的时候，内部实现是转成 store.dispatch\n// 此外，可以看到 middlewareAPI.dispatch 方法，是最终封装后的dispatch（千万注意，如果在中间件内部 调用 store.dispatch，可能导致死循环 ）\nvar middlewareAPI = {\n  getState: store.getState,\n  // 最后面, dispatch 被覆盖, 变成包装后的 dispatch 方法\n  dispatch: (action) => dispatch(action)\n};\n")])])]),n("ul",[n("li",[e._v("第二层的next函数，其实是一个“dispatch”方法")]),e._v(" "),n("li",[e._v("storeWithMiddleWare.dispatch(action) 的时候，会顺序进入各个中间件（按照定义时的顺序）。从当前的例子来看，大约如下，其实就是柯里化啦")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("storeWithMiddleWare.dispatch(action) --\x3e logger(store)(next)(action) --\x3e timer(store)(next)(action) --\x3e store.dispatch(action)\n")])])]),n("p",[n("strong",[e._v("完整的示例代码")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function reducer(state, action){\n    if(typeof state==='undefined') state = [];\n\n    switch(action.type){\n        case 'add_todo':\n            return state.concat(action.text);\n        default: \n            return state;\n    }\n}\n\nfunction addTodo(text){\n    return {\n        type: 'add_todo',\n        text: text\n    };\n}\n\n// 这里的 store，并不是 redux.createStore(reducer, initialState) 出来的 store\n// 而是 {getState: store.getState, dispatch: function() { store.dispatch(action); }}\n// \nfunction logger(store){    \n    //     \n    return function(next){\n        return function(action){\n            console.log('logger: dispatching ' + action.type);\n            var result = next(action);\n            console.log('logger: next state ' + result);\n            return result;\n        }\n    }\n}\n\nfunction timer(store){\n    return function(next){\n        return function(action){\n            console.log('timer: dispatching ' + action.type);\n            var result = next(action);\n            console.log('timer: next state ' + result);\n            return result;\n        }\n    }\n}\n\nvar createStoreWidthMiddleware = redux.applyMiddleware(\n    logger, \n    timer\n    )(redux.createStore);\n\nvar storeWithMiddleWare = createStoreWidthMiddleware(reducer);\nstoreWithMiddleWare.subscribe(function(){\n    console.log('subscribe: state is : ' + storeWithMiddleWare.getState());\n});\nconsole.log( storeWithMiddleWare.dispatch(addTodo('reading')) );\n")])])]),n("p",[n("strong",[e._v("源码解析")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import compose from './compose';\n\n/**\n * Creates a store enhancer that applies middleware to the dispatch method\n * of the Redux store. This is handy for a variety of tasks, such as expressing\n * asynchronous actions in a concise manner, or logging every action payload.\n *\n * See `redux-thunk` package as an example of the Redux middleware.\n *\n * Because middleware is potentially asynchronous, this should be the first\n * store enhancer in the composition chain.\n *\n * Note that each middleware will be given the `dispatch` and `getState` functions\n * as named arguments.\n *\n * @param {...Function} middlewares The middleware chain to be applied.\n * @returns {Function} A store enhancer applying the middleware.\n */\n/*\n  从调用方法 applyMiddleware(...middlewares)(Redux.createStore) 可以看出\n  next 参数实际上是 Redux.createStore. 而 Redux.createStore 的调用方式为 Redux.createStore(reducer, initialState)\n  所以 applyMiddleware(...middlewares)\n  1. 参数: Redux.createStore\n  2. 返回值:一个function, 跟 Redux.createStore 接受的参数一样\n\n */\nexport default function applyMiddleware(...middlewares) {\n  return (next) => (reducer, initialState) => {\n    // 内部先创建一个store (相当于直接调用 Redux.createStore(reducer, initialState))\n    var store = next(reducer, initialState);\n    // 保存最初始的store.dispatch\n    var dispatch = store.dispatch;\n    var chain = [];\n\n    var middlewareAPI = {\n      getState: store.getState,\n      // 最后面, dispatch 被覆盖, 变成包装后的 dispatch 方法\n      dispatch: (action) => dispatch(action)\n    };\n    // 返回一个数组\n    // 贴个例子在这里做参考,redux-thunk\n    // function thunkMiddleware(store) {\n    //  var dispatch = store.dispatch;\n    //  var getState = store.getState;\n    //\n    //  这里的next其实就是dispatch\n    //  return function (next) {\n    //    return function (action) {\n    //      return typeof action === 'function' ? action(dispatch, getState) : next(action);\n    //    };\n    //  };\n    //}\n    /*\n      chain 是个数组, 参考上面的 middlleware (redux-thunk),可以看到,chain的每个元素为如下形式的function\n      并且, 传入的 store.getState 为原始的 store.getState,而 dispatch则是包装后的 dispatch(不是原始的store.dispatch)\n      似乎是为了确保, 在每个middleware里调用 dispatch(action), 最终都是 用原始的 store.dispatch(action)\n      避免 store.dispatch 被覆盖, 导致middleware 顺序调用的过程中, store.dispatch的值变化 --\x3e store.dispatch 返回的值可能会有不同\n      违背 redux 的设计理念\n\n      这里的 next 则为 原始的 store.dispatch (见下面 compose(...chain)(store.dispatch) )\n      function (next) {\n        return function (action) {\n\n        }\n      }\n     */\n    chain = middlewares.map(middleware => middleware(middlewareAPI));\n\n    // compose(...chain)(store.dispatch) 返回了一个function\n    // 伪代码如下,\n    // function (action) {\n    //   middleware(store)(store.dispatch);\n    // }\n    dispatch = compose(...chain)(store.dispatch);  // 从右到左, middleware1( middleware2( middleware3(dispatch) ) )\n\n    // 于是,最终调用 applyMiddleware(...middlewares)(Redux.createStore)\n    // 返回的 store, getState,subscribe 方法都是原始的那个 store.getState, store.subscribe\n    // 至于dispatch是封装过的\n    return {\n      ...store,\n      dispatch\n    };\n  };\n}\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);