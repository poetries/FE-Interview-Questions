(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1194:function(e,t,a){"use strict";a.r(t);var c=a(69),r=Object(c.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[e._v("#")]),e._v(" 一、前言")]),e._v(" "),a("ul",[a("li",[e._v("在"),a("code",[e._v("redux")]),e._v("里，"),a("code",[e._v("middleware")]),e._v("是发送"),a("code",[e._v("action")]),e._v("和"),a("code",[e._v("action")]),e._v("到达"),a("code",[e._v("reducer")]),e._v("之间的第三方扩展，也就是中间层。也可以这样说，"),a("code",[e._v("middleware")]),e._v("是架在"),a("code",[e._v("action")]),e._v("和"),a("code",[e._v("store")]),e._v("之间的一座桥梁")]),e._v(" "),a("li",[e._v("在"),a("code",[e._v("redux")]),e._v("里，"),a("code",[e._v("action")]),e._v("仅仅是携带了数据的普通"),a("code",[e._v("js")]),e._v("对象")])]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("Reducer")]),e._v(" 拆分可以使组件获取其最小属性("),a("code",[e._v("state")]),e._v(")，而不需要整个"),a("code",[e._v("Store")]),e._v("。中间件则可以在"),a("code",[e._v("Action Creator")]),e._v(" 返回最终可供 "),a("code",[e._v("dispatch")]),e._v(" 调用的 "),a("code",[e._v("action")]),e._v(" 之前处理各种事情，如异步"),a("code",[e._v("API")]),e._v("调用、日志记录等，是扩展 "),a("code",[e._v("Redux")]),e._v(" 功能的一种推荐方式")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Redux")]),e._v(" 提供了 "),a("code",[e._v("applyMiddleware(...middlewares)")]),e._v(" 来将中间件应用到 "),a("code",[e._v("createStore")]),e._v("。"),a("code",[e._v("applyMiddleware")]),e._v(" 会返回一个函数，该函数接收原来的 "),a("code",[e._v("creatStore")]),e._v(" 作为参数，返回一个应用了 "),a("code",[e._v("middlewares")]),e._v(" 的增强后的 "),a("code",[e._v("creatStore")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export default function applyMiddleware(...middlewares) {\n  return (createStore) => (reducer, preloadedState, enhancer) => {\n    //接收createStore参数\n    var store = createStore(reducer, preloadedState, enhancer)\n    var dispatch = store.dispatch\n    var chain = []\n\n    //传递给中间件的参数\n    var middlewareAPI = {\n      getState: store.getState,\n      dispatch: (action) => dispatch(action)\n    }\n\n    //注册中间件调用链\n    chain = middlewares.map(middleware => middleware(middlewareAPI))\n    dispatch = compose(...chain)(store.dispatch)\n\n    //返回经middlewares增强后的createStore\n    return {\n      ...store,\n      dispatch\n    }\n  }\n}\n")])])]),a("blockquote",[a("p",[e._v("未应用中间价之前，创建 "),a("code",[e._v("store")]),e._v(" 的方式如下")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import {createStore} from 'redux';\nimport reducers from './reducers/index';\n\nexport let store = createStore(reducers);\n")])])]),a("blockquote",[a("p",[e._v("应用中间价之后，创建 "),a("code",[e._v("store")]),e._v("的方式如下")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import {createStore，applyMiddleware} from 'redux';\nimport reducers from './reducers/index';\n\nlet createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);\nexport let store = createStoreWithMiddleware(reducers);\n")])])]),a("h2",{attrs:{id:"二、为什么要引入middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么要引入middleware"}},[e._v("#")]),e._v(" 二、为什么要引入middleware")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("action creator")]),e._v("返回的值是这个"),a("code",[e._v("action")]),e._v("类型的对象。然后通过"),a("code",[e._v("store.dispatch()")]),e._v("进行分发")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("action ---\x3e dispatcher ---\x3e reducers\n")])])]),a("blockquote",[a("p",[e._v("如果遇到异步情况，比如点击一个按钮，希望2秒之后更新视图，显示消息“Hi”。我们可能这么写"),a("code",[e._v("ActionCreator")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var asyncSayActionCreator = function (message) {\n    setTimeout(function () {\n        return {\n            type: 'SAY',\n            message\n        }\n    }, 2000)\n}\n")])])]),a("blockquote",[a("p",[e._v("这会报错，因为这个"),a("code",[e._v("asyncSayActionCreator")]),e._v("返回的不是一个"),a("code",[e._v("action")]),e._v("，而是一个"),a("code",[e._v("function")]),e._v("。这个返回值无法被"),a("code",[e._v("reducer")]),e._v("识别")])]),e._v(" "),a("ul",[a("li",[e._v("也就是说，正常来说，"),a("code",[e._v("action")]),e._v("返回的是一个对象，而不是一个函数。如果返回函数，会出现错误")]),e._v(" "),a("li",[e._v("而异步操作呢，需要"),a("code",[e._v("action")]),e._v("的返回值是一个函数。那么咋办呢，所以需要引入中间件"),a("code",[e._v("middleware")]),e._v(",它在中间起到了桥梁的作用，让"),a("code",[e._v("action")]),e._v("的返回值可以是一个函数，从而传到"),a("code",[e._v("reducer")]),e._v("那里。也就是说，中间件是用在"),a("code",[e._v("action")]),e._v("发起之后，"),a("code",[e._v("reducer")]),e._v("接收到之前的这个时间段")]),e._v(" "),a("li",[e._v("也可以这么说，"),a("code",[e._v("Middleware")]),e._v(" 主要是负责改变"),a("code",[e._v("Store")]),e._v("中的"),a("code",[e._v("dispatch")]),e._v("方法，从而能处理不同类型的 "),a("code",[e._v("action")]),e._v(" 输入，得到最终的 "),a("code",[e._v("Javascript Plain Object")]),e._v(" 形式的 "),a("code",[e._v("action")]),e._v(" 对象")])]),e._v(" "),a("blockquote",[a("p",[e._v("因此，上面那个"),a("code",[e._v("ActionCreator")]),e._v("就可以改写为这样：因为"),a("code",[e._v("action")]),e._v("的返回值是一个函数")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var asyncSayActionCreator = function (message) {\n    return function (dispatch) {\n        setTimeout(function () {\n            dispatch({\n                type: 'SAY',\n                message\n            })\n        }, 2000)\n    }\n}\n")])])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/466.png",loading:"lazy"}})]),e._v(" "),a("ul",[a("li",[e._v("上图表达的是 "),a("code",[e._v("redux")]),e._v(" 中一个简单的同步数据流动的场景，点击"),a("code",[e._v("button")]),e._v(" 后，在回调中 "),a("code",[e._v("dispatch")]),e._v(" 一个 "),a("code",[e._v("action")]),e._v("，"),a("code",[e._v("reducer")]),e._v(" 收到"),a("code",[e._v("action")]),e._v(" 后，更新 "),a("code",[e._v("state")]),e._v(" 并通知 "),a("code",[e._v("view")]),e._v(" 重新渲染")])]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/467.png",loading:"lazy"}})]),e._v(" "),a("ul",[a("li",[a("p",[e._v("上面这张图展示了应用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("middleware\n")])])]),a("p",[e._v("后")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("redux\n")])])]),a("p",[e._v("处理事件的逻辑，每一个")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("middleware\n")])])]),a("p",[e._v("处理一个相对独立的业务需求，通过串联不同的")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("middleware\n")])])]),a("p",[e._v("，实现变化多样的的功能。那么问题来了：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("middleware")]),e._v(" 怎么写？")]),e._v(" "),a("li",[a("code",[e._v("redux")]),e._v("是如何让 "),a("code",[e._v("middlewares")]),e._v(" 串联并跑起来的？")])])])]),e._v(" "),a("h2",{attrs:{id:"三、中间件是如何工作的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、中间件是如何工作的"}},[e._v("#")]),e._v(" 三、中间件是如何工作的")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Middleware`的中间件有很多，不过我的这个案例只引用了其中的一个，那就是`redux-thunk\n")])])])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("redux-thunk")]),e._v("源码如下")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export default function thunkMiddleware({ dispatch, getState }) {\n  return next => action =>\n    typeof action === 'function' ?\n      action(dispatch, getState) :\n      next(action);\n}\n")])])]),a("blockquote",[a("p",[e._v("意思是如果"),a("code",[e._v("action")]),e._v("是一个函数，执行这个"),a("code",[e._v("action")]),e._v("函数，如果不是函数，执行"),a("code",[e._v("next")]),e._v("函数")])]),e._v(" "),a("h2",{attrs:{id:"四、自定义中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、自定义中间件"}},[e._v("#")]),e._v(" 四、自定义中间件")]),e._v(" "),a("blockquote",[a("p",[e._v("中间件的签名如下")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("({ getState, dispatch }) => next => action\n")])])]),a("blockquote",[a("p",[e._v("根据"),a("code",[e._v("applyMiddleware")]),e._v(" 源码，每个中间件接收 "),a("code",[e._v("getState & dispatch")]),e._v("作为参数，并返回一个函数，该函数会被传入下一个中间件的 dispatch 方法，并返回一个接收 "),a("code",[e._v("action")]),e._v(" 的新函数")])]),e._v(" "),a("ul",[a("li",[e._v("应用多个中间件时，中间件调用链中任何一个缺少 "),a("code",[e._v("next(action)")]),e._v(" 的调用，都会导致"),a("code",[e._v("action")]),e._v(" 执行失败")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function callTraceMiddleware ({dispatch,getState}){\n    return next=> action =>{\n        console.trace();\n        return next(action);\n    }\n}\n")])])]),a("ul",[a("li",[e._v("然后在调用中间件部分添加中间件")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const createStoreWithMiddleware = applyMiddleware(\n  thunkMiddleware,\n  loggerMiddleware,\n  callTraceMiddleware\n)(createStore);\n")])])]),a("blockquote",[a("p",[a("code",[e._v("redux")]),e._v("的"),a("code",[e._v("middleware")]),e._v("是对"),a("code",[e._v("action")]),e._v("进行扩展处理，这样丰富了应用需求")])])])}),[],!1,null,null,null);t.default=r.exports}}]);