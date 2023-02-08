(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1269:function(e,t,n){"use strict";n.r(t);var a=n(69),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"一、创建同步action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、创建同步action"}},[e._v("#")]),e._v(" 一、创建同步Action")]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("Action")]),e._v("是数据从应用传递到 "),n("code",[e._v("store")]),e._v("/"),n("code",[e._v("state")]),e._v(" 的载体，也是开启一次完成数据流的开始")])]),e._v(" "),n("p",[n("strong",[e._v("普通的action对象")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const action = {\n\ttype:'ADD_TODO',\n\tname:'poetries'\n}\n\ndispatch(action)\n")])])]),n("p",[n("strong",[e._v("封装action creator")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function actionCreator(data){\n    return {\n    \ttype:'ADD_TODO',\n    \tdata:data\n    }\n}\n\ndispatch(actionCreator('poetries'))\n")])])]),n("p",[n("strong",[e._v("bindActionCreators合并")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function a(name,id){\n\treurn {\n\t\ttype:'a',\n\t\tname,\n\t\tid\n\t}\n}\nfunction b(name,id){\n\treurn {\n\t\ttype:'b',\n\t\tname,\n\t\tid\n\t}\n}\n\nlet actions = Redux.bindActionCreators({a,b},store.dispatch)\n\n//调用\nactions.a('poetries','id001')\nactions.b('jing','id002')\n")])])]),n("p",[n("strong",[e._v("action创建的标准")])]),e._v(" "),n("blockquote",[n("p",[e._v("在Flux的架构中，一个Action要符合 FSA(Flux Standard Action) 规范，需要满足如下条件")])]),e._v(" "),n("ul",[n("li",[e._v("是一个纯文本对象")]),e._v(" "),n("li",[e._v("只具备 "),n("code",[e._v("type")]),e._v(" 、"),n("code",[e._v("payload")]),e._v("、"),n("code",[e._v("error")]),e._v(" 和 "),n("code",[e._v("meta")]),e._v("中的一个或者多个属性。"),n("code",[e._v("type")]),e._v(" 字段不可缺省，其它字段可缺省")]),e._v(" "),n("li",[e._v("若 "),n("code",[e._v("Action")]),e._v(" 报错，"),n("code",[e._v("error")]),e._v(" 字段不可缺省，切必须为 "),n("code",[e._v("true")])])]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("payload")]),e._v(" 是一个对象，用作Action携带数据的载体")])]),e._v(" "),n("p",[n("strong",[e._v("标准action示例")])]),e._v(" "),n("ul",[n("li",[e._v("A basic Flux Standard Action:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n  type: 'ADD_TODO',\n  payload: {\n    text: 'Do something.'  \n  }\n}\n")])])]),n("ul",[n("li",[e._v("An FSA that represents an error, analogous to a rejected Promise")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n  type: 'ADD_TODO',\n  payload: new Error(),\n  error: true\n}\n")])])]),n("blockquote",[n("p",[e._v("https://github.com/acdlite/flux-standard-action")])]),e._v(" "),n("ul",[n("li",[e._v("可以采用如下一个简单的方式检验一个"),n("code",[e._v("Action")]),e._v("是否符合FSA标准")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// every有一个匹配不到返回false\nlet isFSA = Object.keys(action).every((item)=>{\n   return  ['payload','type','error','meta'].indexOf(item) >  -1\n})\n")])])]),n("h2",{attrs:{id:"二、创建异步action的多种方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、创建异步action的多种方式"}},[e._v("#")]),e._v(" 二、创建异步action的多种方式")]),e._v(" "),n("blockquote",[n("p",[e._v("最简单的方式就是使用同步的方式来异步，将原来同步时一个"),n("code",[e._v("action")]),e._v("拆分成多个异步的"),n("code",[e._v("action")]),e._v("的，在异步开始前、异步请求中、异步正常返回（异常）操作分别使用同步的操作，从而模拟出一个异步操作了。这样的方式是比较麻烦的，现在已经有"),n("code",[e._v("redux-saga")]),e._v("等插件来解决这些问题了")])]),e._v(" "),n("p",[n("strong",[e._v("异步action的实现方式一：setTimeout")])]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("redux-thunk")]),e._v("中间处理解析")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function thunkAction(data) {\n    reutrn (dispatch)=>{\n        setTimeout(function(){\n            dispatch({\n                type:'ADD_TODO',\n                data\n            })\n        },3000)\n    }\n}\n")])])]),n("p",[n("strong",[e._v("异步action的实现方式二：promise实现异步action")])]),e._v(" "),n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("redux-promise`中间处理这种`action\n")])])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('function promiseAction(name){\n    return new Promise((resolve,reject) => {\n        setTimeout((param)=>{\n            resolve({\n                type:\'ADD_TODO\',\n                name\n            })\n        },3000)\n    }).then((param)=>{\n        dispatch(action("action2"))\n        return;\n    }).then((param)=>{\n        dispatch(action("action3"))\n    })\n}\n')])])]),n("h2",{attrs:{id:"三、redux异步流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、redux异步流程"}},[e._v("#")]),e._v(" 三、redux异步流程")]),e._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/492.png",loading:"lazy"}})]),e._v(" "),n("ul",[n("li",[e._v("首先发起一个action，然后通过中间件，这里为什么要用中间件呢，因为这样"),n("code",[e._v("dispatch")]),e._v("的返回值才能是一个函数。")]),e._v(" "),n("li",[e._v("通过"),n("code",[e._v("store.dispatch")]),e._v("，将状态的的改变传给"),n("code",[e._v("store")]),e._v("的小弟"),n("code",[e._v("reducer")]),e._v("，"),n("code",[e._v("reducer")]),e._v("根据"),n("code",[e._v("action")]),e._v("的改变，传递新的状态"),n("code",[e._v("state")]),e._v("。")]),e._v(" "),n("li",[e._v("最后将所有的改变告诉给它的大哥，"),n("code",[e._v("store")]),e._v("。"),n("code",[e._v("store")]),e._v("保存着所有的数据，并将数据注入到组件的顶部，这样组件就可以获得它需要的数据了")])]),e._v(" "),n("h2",{attrs:{id:"四、redux异步方案选型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、redux异步方案选型"}},[e._v("#")]),e._v(" 四、Redux异步方案选型")]),e._v(" "),n("p",[n("strong",[e._v("redux-thunk")])]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("Redux")]),e._v("本身只能处理同步的"),n("code",[e._v("Action")]),e._v("，但可以通过中间件来拦截处理其它类型的"),n("code",[e._v("action")]),e._v("，比如函数("),n("code",[e._v("Thunk")]),e._v(")，再用回调触发普通"),n("code",[e._v("Action")]),e._v("，从而实现异步处理")])]),e._v(" "),n("ul",[n("li",[e._v("发送异步的"),n("code",[e._v("action")]),e._v("其实是被中间件捕获的，函数类型的action就被"),n("code",[e._v("middleware")]),e._v("捕获。至于怎么定义异步的"),n("code",[e._v("action")]),e._v("要看你用哪个中间件，根据他们的实例来定义，这样才会正确解析"),n("code",[e._v("action")])])]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("Redux")]),e._v(" 本身不处理异步行为，需要依赖中间件。结合 "),n("code",[e._v("redux-actions")]),e._v(" 使用，"),n("code",[e._v("Redux")]),e._v(" 有两个推荐的异步中间件")])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("redux-thunk")])]),e._v(" "),n("li",[n("code",[e._v("redux-promise")])])]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("redux-thunk")]),e._v(" 的源码如下")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function createThunkMiddleware(extraArgument) {\n  return ({ dispatch, getState }) => next => action => {\n    if (typeof action === 'function') {\n      return action(dispatch, getState, extraArgument);\n    }\n\n    return next(action);\n  };\n}\n\nconst thunk = createThunkMiddleware();\nthunk.withExtraArgument = createThunkMiddleware;\n\nexport default thunk;\n")])])]),n("blockquote",[n("p",[e._v("源码可知，"),n("code",[e._v("action creator")]),e._v(" 需要返回一个函数给 "),n("code",[e._v("redux-thunk")]),e._v(" 进行调用，示例如下")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export let addTodoWithThunk = (val) => async (dispatch, getState)=>{\n    //请求之前的一些处理\n\n    let value = await Promise.resolve(val + ' thunk');\n    dispatch({\n        type:CONSTANT.ADD_TO_DO_THUNK,\n        payload:{\n            value\n        }\n    });\n};\n")])])]),n("ul",[n("li",[e._v("而它使用起来最大的问题，就是重复的模板代码太多")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//action types\nconst GET_DATA = 'GET_DATA',\n    GET_DATA_SUCCESS = 'GET_DATA_SUCCESS',\n    GET_DATA_FAILED = 'GET_DATA_FAILED';\n    \n//action creator\nconst getDataAction = (id) => (dispatch, getState) => {\n        dispatch({\n            type: GET_DATA, \n            payload: id\n        })\n        api.getData(id) //注：本文所有示例的api.getData都返回promise对象\n            .then(response => {\n                dispatch({\n                    type: GET_DATA_SUCCESS,\n                    payload: response\n                })\n            })\n            .catch(error => {\n                dispatch({\n                    type: GET_DATA_FAILED,\n                    payload: error\n                })\n            }) \n    }\n}\n\n//reducer\nconst reducer = (oldState, action) => {\n    switch(action.type) {\n    case GET_DATA : \n        return oldState;\n    case GET_DATA_SUCCESS : \n        return successState;\n    case GET_DATA_FAILED : \n        return errorState;\n    }\n}\n")])])]),n("blockquote",[n("p",[e._v("这已经是最简单的场景了，请注意：我们甚至还没写一行业务逻辑，如果每个异步处理都像这样，重复且无意义的工作会变成明显的阻碍")])]),e._v(" "),n("ul",[n("li",[e._v("另一方面，像"),n("code",[e._v("GET_DATA_SUCCESS")]),e._v("、"),n("code",[e._v("GET_DATA_FAILED")]),e._v("这样的字符串声明也非常无趣且易错\n上例中，"),n("code",[e._v("GET_DATA")]),e._v("这个"),n("code",[e._v("action")]),e._v("并不是多数场景需要的")])]),e._v(" "),n("p",[n("strong",[e._v("redux-promise")])]),e._v(" "),n("blockquote",[n("p",[e._v("由于"),n("code",[e._v("redux-thunk")]),e._v("写起来实在是太麻烦了，社区当然会有其它轮子出现。"),n("code",[e._v("redux-promise")]),e._v("则是其中比较知名的")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("它自定义了一个")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("middleware\n")])])]),n("p",[e._v("，当检测到有")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("action\n")])])]),n("p",[e._v("的")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("payload\n")])])]),n("p",[e._v("属性是")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Promise\n")])])]),n("p",[e._v("对象时，就会")]),e._v(" "),n("ul",[n("li",[e._v("若"),n("code",[e._v("resolve")]),e._v("，触发一个此"),n("code",[e._v("action")]),e._v("的拷贝，但"),n("code",[e._v("payload")]),e._v("为"),n("code",[e._v("promise")]),e._v("的"),n("code",[e._v("value")]),e._v("，并设"),n("code",[e._v("status")]),e._v("属性为"),n("code",[e._v('"success"')])]),e._v(" "),n("li",[e._v("若"),n("code",[e._v("reject")]),e._v("，触发一个此"),n("code",[e._v("action")]),e._v("的拷贝，但"),n("code",[e._v("payload")]),e._v("为"),n("code",[e._v("promise")]),e._v("的"),n("code",[e._v("reason")]),e._v("，并设"),n("code",[e._v("status")]),e._v("属性为"),n("code",[e._v('"error"')])])])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//action types\nconst GET_DATA = 'GET_DATA';\n\n//action creator\nconst getData = function(id) {\n    return {\n        type: GET_DATA,\n        payload: api.getData(id) //payload为promise对象\n    }\n}\n\n//reducer\nfunction reducer(oldState, action) {\n    switch(action.type) {\n        case GET_DATA: \n            if (action.status === 'success') {\n                return successState\n            } else {\n                   return errorState\n            }\n        }\n}\n")])])]),n("blockquote",[n("p",[n("code",[e._v("redux-promise")]),e._v("为了精简而做出的妥协非常明显：无法处理乐观更新")])]),e._v(" "),n("p",[n("strong",[e._v("场景解析之：乐观更新")])]),e._v(" "),n("blockquote",[n("p",[e._v("多数异步场景都是悲观更新的，即等到请求成功才渲染数据。而与之相对的乐观更新，则是不等待请求成功，在发送请求的同时立即渲染数据")])]),e._v(" "),n("ul",[n("li",[e._v("由于乐观更新发生在用户操作时，要处理它，意味着必须有action表示用户的初始动作")]),e._v(" "),n("li",[e._v("在上面"),n("code",[e._v("redux-thunk")]),e._v("的例子中，我们看到了"),n("code",[e._v("GET_DATA")]),e._v(", "),n("code",[e._v("GET_DATA_SUCCESS")]),e._v("、"),n("code",[e._v("GET_DATA_FAILED")]),e._v("三个"),n("code",[e._v("action")]),e._v("，分别表示初始动作、异步成功和异步失败，其中第一个"),n("code",[e._v("action")]),e._v("使得"),n("code",[e._v("redux-thunk")]),e._v("具备乐观更新的能力")]),e._v(" "),n("li",[e._v("而在"),n("code",[e._v("redux-promise")]),e._v("中，最初触发的action被中间件拦截然后过滤掉了。原因很简单，"),n("code",[e._v("redux")]),e._v("认可的"),n("code",[e._v("action")]),e._v("对象是 "),n("code",[e._v("plain JavaScript objects")]),e._v("，即简单对象，而在"),n("code",[e._v("redux-promise")]),e._v("中，初始"),n("code",[e._v("action")]),e._v("的"),n("code",[e._v("payload")]),e._v("是个"),n("code",[e._v("Promise")])])]),e._v(" "),n("p",[n("strong",[e._v("redux-promise-middleware")])]),e._v(" "),n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("redux-promise-middleware`相比`redux-promise`，采取了更为温和和渐进式的思路，保留了和`redux-thunk`类似的三个`action\n")])])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//action types\nconst GET_DATA = 'GET_DATA',\n    GET_DATA_PENDING = 'GET_DATA_PENDING',\n    GET_DATA_FULFILLED = 'GET_DATA_FULFILLED',\n    GET_DATA_REJECTED = 'GET_DATA_REJECTED';\n    \n//action creator\nconst getData = function(id) {\n    return {\n        type: GET_DATA,\n        payload: {\n            promise: api.getData(id),\n            data: id\n        }\n    }\n}\n\n//reducer\nconst reducer = function(oldState, action) {\n    switch(action.type) {\n    case GET_DATA_PENDING :\n        return oldState; // 可通过action.payload.data获取id\n    case GET_DATA_FULFILLED : \n        return successState;\n    case GET_DATA_REJECTED : \n        return errorState;\n    }\n}\n")])])]),n("h2",{attrs:{id:"五、redux异步操作代码演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、redux异步操作代码演示"}},[e._v("#")]),e._v(" 五、redux异步操作代码演示")]),e._v(" "),n("ul",[n("li",[e._v("根据官网的async例子分析 https://github.com/lewis617/react-redux-tutorial/tree/master/redux-examples/async")])]),e._v(" "),n("p",[n("strong",[e._v("action/index.js")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import fetch from 'isomorphic-fetch'\nexport const RECEIVE_POSTS = 'RECEIVE_POSTS'\n\n//获取新闻成功的action\nfunction receivePosts(reddit, json) {\n  return {\n    type: RECEIVE_POSTS,\n    reddit: reddit,\n    posts: json.data.children.map(child =>child.data)\n  }\n}\n\nfunction fetchPosts(subreddit) {\n\n  return function (dispatch) {\n    \n    return fetch(`http://www.subreddit.com/r/${subreddit}.json`)\n      .then(response => response.json())\n      .then(json =>\n        dispatch(receivePosts(subreddit, json))\n      )\n  }\n}\n\n//如果需要则开始获取文章\nexport function fetchPostsIfNeeded(subreddit) {\n\n  return (dispatch, getState) => {\n\n      return dispatch(fetchPosts(subreddit))\n\n    }\n}\n")])])]),n("blockquote",[n("p",[n("code",[e._v("fetchPostsIfNeeded")]),e._v("这里就是一个中间件。"),n("code",[e._v("redux-thunk")]),e._v("会拦截"),n("code",[e._v("fetchPostsIfNeeded")]),e._v("这个"),n("code",[e._v("action")]),e._v("，会先发起数据请求，如果成功，就将数据传给"),n("code",[e._v("action")]),e._v("从而到达"),n("code",[e._v("reducer")]),e._v("那里")])]),e._v(" "),n("p",[n("strong",[e._v("reducers/index.js")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import { combineReducers } from 'redux'\nimport {\n  RECEIVE_POSTS\n} from '../actions'\n\n\nfunction posts(state = {\n  items: []\n}, action) {\n  switch (action.type) {\n\n    case RECEIVE_POSTS:\n      // Object.assign是ES6的一个语法。合并对象，将对象合并为一个，前后相同的话，后者覆盖强者。详情可以看这里\n      //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign\n      return Object.assign({}, state, {\n        items: action.posts //数据都存在了这里\n      })\n    default:\n      return state\n  }\n}\n\n\n// 将所有的reducer结合为一个,传给store\nconst rootReducer = combineReducers({\n  postsByReddit\n})\n\nexport default rootReducer\n")])])]),n("blockquote",[n("p",[e._v("这个跟正常的"),n("code",[e._v("reducer")]),e._v("差不多。判断"),n("code",[e._v("action")]),e._v("的类型，从而根据"),n("code",[e._v("action")]),e._v("的不同类型，返回不同的数据。这里将数据存储在了"),n("code",[e._v("items")]),e._v("这里。这里的"),n("code",[e._v("reducer")]),e._v("只有一个。最后结合成"),n("code",[e._v("rootReducer")]),e._v(",传给"),n("code",[e._v("store")])])]),e._v(" "),n("p",[n("strong",[e._v("store/configureStore.js")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import { createStore, applyMiddleware } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport createLogger from 'redux-logger'\nimport rootReducer from '../reducers'\n\nconst createStoreWithMiddleware = applyMiddleware(\n  thunkMiddleware,  \n  createLogger()  \n)(createStore)\n\nexport default function configureStore(initialState) {\n  const store = createStoreWithMiddleware(rootReducer, initialState)\n\n  if (module.hot) {\n    // Enable Webpack hot module replacement for reducers\n    module.hot.accept('../reducers', () => {\n      const nextRootReducer = require('../reducers')\n      store.replaceReducer(nextRootReducer)\n    })\n  }\n\n  return store\n}\n")])])]),n("ul",[n("li",[e._v("我们是如何在 "),n("code",[e._v("dispatch")]),e._v(" 机制中引入 "),n("code",[e._v("Redux Thunk middleware")]),e._v(" 的呢？\n我们使用了"),n("code",[e._v("applyMiddleware()")])]),e._v(" "),n("li",[e._v("通过使用指定的 "),n("code",[e._v("middleware")]),e._v("，"),n("code",[e._v("action creator")]),e._v(" 除了返回 "),n("code",[e._v("action")]),e._v(" 对象外还可以返回函数")]),e._v(" "),n("li",[e._v("这时，这个 "),n("code",[e._v("action creator")]),e._v(" 就成为了 "),n("code",[e._v("thunk")])])]),e._v(" "),n("p",[n("strong",[e._v("界面上的调用：在containers/App.js")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//初始化渲染后触发\n  componentDidMount() {\n    const { dispatch} = this.props\n    // 这里可以传两个值，一个是 reactjs 一个是 frontend\n    dispatch(fetchPostsIfNeeded('frontend'))\n  }\n")])])]),n("blockquote",[n("p",[e._v("改变状态的时候也是需要通过"),n("code",[e._v("dispatch")]),e._v("来传递的")])]),e._v(" "),n("ul",[n("li",[e._v("数据的获取是通过"),n("code",[e._v("provider")]),e._v(",将"),n("code",[e._v("store")]),e._v("里面的数据注入给组件。让顶级组件提供给他们的子孙组件调用。代码如下：")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import 'babel-core/polyfill'\nimport React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport App from './containers/App'\nimport configureStore from './store/configureStore'\nconst store = configureStore()\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")])])]),n("blockquote",[n("p",[e._v("这样就完成了"),n("code",[e._v("redux")]),e._v("的异步操作。其实最主要的区别还是"),n("code",[e._v("action")]),e._v("里面还有中间件的调用，其他的地方基本跟同步的"),n("code",[e._v("redux")]),e._v("差不多的。搞懂了中间件，就基本搞懂了"),n("code",[e._v("redux")]),e._v("的异步操作")])]),e._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/493.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);