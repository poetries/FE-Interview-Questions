(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{1268:function(e,t,a){"use strict";a.r(t);var o=a(69),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"一、redux-thunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、redux-thunk"}},[e._v("#")]),e._v(" 一、redux-thunk")]),e._v(" "),a("h3",{attrs:{id:"_1-1-redux的副作用处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-redux的副作用处理"}},[e._v("#")]),e._v(" 1.1 redux的副作用处理")]),e._v(" "),a("blockquote",[a("p",[e._v("redux中的数据流大致是")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("UI—————>action（plain）—————>reducer——————>state——————>UI\n")])])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/484.png",loading:"lazy"}})]),e._v(" "),a("ul",[a("li",[a("code",[e._v("redux")]),e._v("是遵循函数式编程的规则，上述的数据流中，"),a("code",[e._v("action")]),e._v("是一个原始js对象（"),a("code",[e._v("plain object")]),e._v("）且"),a("code",[e._v("reducer")]),e._v("是一个纯函数，对于同步且没有副作用的操作，上述的数据流起到可以管理数据，从而控制视图层更新的目的")]),e._v(" "),a("li",[e._v("如果存在副作用函数，那么我们需要首先处理副作用函数，然后生成原始的js对象。如何处理副作用操作，在"),a("code",[e._v("redux")]),e._v("中选择在发出"),a("code",[e._v("action")]),e._v("，到"),a("code",[e._v("reducer")]),e._v("处理函数之间使用中间件处理副作用")])]),e._v(" "),a("blockquote",[a("p",[e._v("redux增加中间件处理副作用后的数据流大致如下：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("UI——>action(side function)—>middleware—>action(plain)—>reducer—>state—>UI\n")])])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/485.png",loading:"lazy"}})]),e._v(" "),a("blockquote",[a("p",[e._v("在有副作用的"),a("code",[e._v("action")]),e._v("和原始的"),a("code",[e._v("action")]),e._v("之间增加中间件处理，从图中我们也可以看出，中间件的作用就是：")])]),e._v(" "),a("ul",[a("li",[e._v("转换异步操作，"),a("strong",[e._v("生成原始的action")]),e._v("，这样，"),a("code",[e._v("reducer")]),e._v("函数就能处理相应的"),a("code",[e._v("action")]),e._v("，从而改变"),a("code",[e._v("state")]),e._v("，更新"),a("code",[e._v("UI")])])]),e._v(" "),a("h3",{attrs:{id:"_1-2-redux-thunk源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-redux-thunk源码"}},[e._v("#")]),e._v(" 1.2 redux-thunk源码")]),e._v(" "),a("blockquote",[a("p",[e._v("在redux中，thunk是redux作者给出的中间件，实现极为简单，10多行代码")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function createThunkMiddleware(extraArgument) {\n  return ({ dispatch, getState }) => next => action => {\n    if (typeof action === 'function') {\n      return action(dispatch, getState, extraArgument);\n    }\n\n    return next(action);\n  };\n}\n\nconst thunk = createThunkMiddleware();\nthunk.withExtraArgument = createThunkMiddleware;\n\nexport default thunk;\n")])])]),a("blockquote",[a("p",[e._v("这几行代码做的事情也很简单，判别action的类型，如果action是函数，就调用这个函数，调用的步骤为")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("action(dispatch, getState, extraArgument);\n")])])]),a("blockquote",[a("p",[e._v("发现实参为"),a("code",[e._v("dispatch")]),e._v("和"),a("code",[e._v("getState")]),e._v("，因此我们在定义"),a("code",[e._v("action")]),e._v("为"),a("code",[e._v("thunk")]),e._v("函数是，一般形参为"),a("code",[e._v("dispatch")]),e._v("和"),a("code",[e._v("getState")])])]),e._v(" "),a("h3",{attrs:{id:"_1-3-redux-thunk的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-redux-thunk的缺点"}},[e._v("#")]),e._v(" 1.3 redux-thunk的缺点")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("thunk`的缺点也是很明显的，`thunk`仅仅做了执行这个函数，并不在乎函数主体内是什么，也就是说`thunk`使得`redux`可以接受函数作为`action`，但是函数的内部可以多种多样。比如下面是一个获取商品列表的异步操作所对应的`action\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export default ()=>(dispatch)=>{\n    fetch('/api/goodList',{ //fecth返回的是一个promise\n      method: 'get',\n      dataType: 'json',\n    }).then(function(json){\n      var json=JSON.parse(json);\n      if(json.msg==200){\n        dispatch({type:'init',data:json.data});\n      }\n    },function(error){\n      console.log(error);\n    });\n};\n")])])]),a("blockquote",[a("p",[e._v("从这个具有副作用的"),a("code",[e._v("action")]),e._v("中，我们可以看出，函数内部极为复杂。如果需要为每一个异步操作都如此定义一个"),a("code",[e._v("action")]),e._v("，显然"),a("code",[e._v("action")]),e._v("不易维护")])]),e._v(" "),a("p",[a("strong",[e._v("action不易维护的原因")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("action")]),e._v("的形式不统一")]),e._v(" "),a("li",[e._v("就是异步操作太为分散，分散在了各个"),a("code",[e._v("action")]),e._v("中")])]),e._v(" "),a("h2",{attrs:{id:"二、redux-saga-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、redux-saga-简介"}},[e._v("#")]),e._v(" 二、redux-saga 简介")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("redux-saga")]),e._v("是一个 "),a("code",[e._v("redux")]),e._v("中间件，它具有如下特性")])]),e._v(" "),a("ul",[a("li",[e._v("集中处理 "),a("code",[e._v("redux")]),e._v(" 副作用问题。")]),e._v(" "),a("li",[e._v("被实现为 "),a("code",[e._v("generator")]),e._v(" 。")]),e._v(" "),a("li",[e._v("类 "),a("code",[e._v("redux-thunk")]),e._v(" 中间件。")]),e._v(" "),a("li",[a("code",[e._v("watch")]),e._v("/"),a("code",[e._v("worker")]),e._v("（监听->执行） 的工作形式")])]),e._v(" "),a("p",[a("strong",[e._v("redux-saga的优点")])]),e._v(" "),a("ul",[a("li",[e._v("集中处理了所有的异步操作，异步接口部分一目了然")]),e._v(" "),a("li",[a("code",[e._v("action")]),e._v("是普通对象，这跟"),a("code",[e._v("redux")]),e._v("同步的"),a("code",[e._v("action")]),e._v("一模一样")]),e._v(" "),a("li",[e._v("通过"),a("code",[e._v("Effect")]),e._v("，方便异步接口的测试")]),e._v(" "),a("li",[e._v("通过"),a("code",[e._v("worker")]),e._v(" 和"),a("code",[e._v("watcher")]),e._v("可以实现非阻塞异步调用，并且同时可以实现非阻塞调用下的事件监听")]),e._v(" "),a("li",[e._v("异步操作的流程是可以控制的，可以随时取消相应的异步操作")])]),e._v(" "),a("blockquote",[a("p",[e._v("基本用法")])]),e._v(" "),a("ul",[a("li",[e._v("使用"),a("code",[e._v("createSagaMiddleware")]),e._v("方法创建"),a("code",[e._v("saga")]),e._v(" 的"),a("code",[e._v("Middleware")]),e._v("，然后在创建的"),a("code",[e._v("redux")]),e._v("的"),a("code",[e._v("store")]),e._v("时，使用"),a("code",[e._v("applyMiddleware")]),e._v("函数将创建的"),a("code",[e._v("saga Middleware")]),e._v("实例绑定到"),a("code",[e._v("store")]),e._v("上，最后可以调用"),a("code",[e._v("saga Middleware")]),e._v("的"),a("code",[e._v("run")]),e._v("函数来执行某个或者某些"),a("code",[e._v("Middleware")]),e._v("。")]),e._v(" "),a("li",[e._v("在"),a("code",[e._v("saga")]),e._v("的"),a("code",[e._v("Middleware")]),e._v("中，可以使用"),a("code",[e._v("takeEvery")]),e._v("或者"),a("code",[e._v("takeLatest")]),e._v("等"),a("code",[e._v("API")]),e._v("来监听某个"),a("code",[e._v("action")]),e._v("，当某个"),a("code",[e._v("action")]),e._v("触发后，"),a("code",[e._v("saga")]),e._v("可以使用"),a("code",[e._v("call")]),e._v("发起异步操作，操作完成后使用"),a("code",[e._v("put")]),e._v("函数触发"),a("code",[e._v("action")]),e._v("，同步更新"),a("code",[e._v("state")]),e._v("，从而完成整个"),a("code",[e._v("State")]),e._v("的更新。")])]),e._v(" "),a("h2",{attrs:{id:"三、redux-saga使用案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、redux-saga使用案例"}},[e._v("#")]),e._v(" 三、redux-saga使用案例")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("redux-saga")]),e._v("是控制执行的"),a("code",[e._v("generator")]),e._v("，在"),a("code",[e._v("redux-saga")]),e._v("中"),a("code",[e._v("action")]),e._v("是原始的"),a("code",[e._v("js")]),e._v("对象，把所有的异步副作用操作放在了"),a("code",[e._v("saga")]),e._v("函数里面。这样既统一了"),a("code",[e._v("action")]),e._v("的形式，又使得异步操作集中可以被集中处理")]),e._v(" "),a("li",[a("code",[e._v("redux-saga")]),e._v("是通过"),a("code",[e._v("genetator")]),e._v("实现的，如果不支持"),a("code",[e._v("generator")]),e._v("需要通过插件"),a("code",[e._v("babel-polyfill")]),e._v("转义。我们接着来实现一个输出"),a("code",[e._v("hellosaga")]),e._v("的例子")])]),e._v(" "),a("p",[a("strong",[e._v("创建一个helloSaga.js文件")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export function * helloSaga() {\n  console.log('Hello Sagas!');\n}\n")])])]),a("p",[a("strong",[e._v("在redux中使用redux-saga中间件")])]),e._v(" "),a("blockquote",[a("p",[e._v("在"),a("code",[e._v("main.js")]),e._v("中")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import { createStore, applyMiddleware } from 'redux'\nimport createSagaMiddleware from 'redux-saga'\nimport { helloSaga } from './sagas'\nconst sagaMiddleware=createSagaMiddleware();\nconst store = createStore(\n reducer,\n applyMiddleware(sagaMiddleware)\n);\nsagaMiddleware.run(helloSaga);\n//会输出Hello, Sagas!\n")])])]),a("blockquote",[a("p",[e._v("和调用"),a("code",[e._v("redux")]),e._v("的其他中间件一样，如果想使用"),a("code",[e._v("redux-saga")]),e._v("中间件，那么只要在"),a("code",[e._v("applyMiddleware")]),e._v("中调用一个"),a("code",[e._v("createSagaMiddleware")]),e._v("的实例。唯一不同的是需要调用"),a("code",[e._v("run")]),e._v("方法使得"),a("code",[e._v("generator")]),e._v("可以开始执行")])]),e._v(" "),a("h2",{attrs:{id:"四、redux-saga使用细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、redux-saga使用细节"}},[e._v("#")]),e._v(" 四、redux-saga使用细节")]),e._v(" "),a("h3",{attrs:{id:"_4-1-声明式的effect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-声明式的effect"}},[e._v("#")]),e._v(" 4.1 声明式的Effect")]),e._v(" "),a("blockquote",[a("p",[e._v("在"),a("code",[e._v("redux-saga")]),e._v("中提供了一系列的"),a("code",[e._v("api")]),e._v("，比如"),a("code",[e._v("take")]),e._v("、"),a("code",[e._v("put")]),e._v("、"),a("code",[e._v("all")]),e._v("、"),a("code",[e._v("select")]),e._v("等"),a("code",[e._v("API")]),e._v("，在"),a("code",[e._v("redux-saga")]),e._v("中将这一系列的"),a("code",[e._v("api")]),e._v("都定义为Effect。这些"),a("code",[e._v("Effect")]),e._v("执行后，当函数"),a("code",[e._v("resolve")]),e._v("时返回一个描述对象，然后"),a("code",[e._v("redux-saga")]),e._v("中间件根据这个描述对象恢复执行"),a("code",[e._v("generator")]),e._v("中的函数")])]),e._v(" "),a("p",[a("strong",[e._v("redux-thunk的大体过程")])]),e._v(" "),a("blockquote",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("action1(side function)`—>`redux-thunk`监听—>执行相应的有副作用的方法—>`action2(plain object)\n")])])])]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/486.png",loading:"lazy"}})]),e._v(" "),a("blockquote",[a("p",[e._v("转化到"),a("code",[e._v("action2")]),e._v("是一个原始"),a("code",[e._v("js")]),e._v("对象形式的"),a("code",[e._v("action")]),e._v("，然后执行"),a("code",[e._v("reducer")]),e._v("函数就会更新"),a("code",[e._v("store")]),e._v("中的"),a("code",[e._v("state")])])]),e._v(" "),a("p",[a("strong",[e._v("redux-saga的大体过程")])]),e._v(" "),a("blockquote",[a("p",[e._v("action1(plain object)——>redux-saga监听—>执行相应的Effect方法——>返回描述对象—>恢复执行异步和副作用函数—>action2(plain object)")])]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/487.png",loading:"lazy"}})]),e._v(" "),a("blockquote",[a("p",[e._v("对比"),a("code",[e._v("redux-thunk")]),e._v("我们发现，"),a("code",[e._v("redux-saga")]),e._v("中监听到了原始"),a("code",[e._v("js")]),e._v("对象"),a("code",[e._v("action")]),e._v("，并不会马上执行副作用操作，会先通过"),a("code",[e._v("Effect")]),e._v("方法将其转化成一个描述对象，然后再将描述对象，作为标识，再恢复执行副作用函数")])]),e._v(" "),a("h3",{attrs:{id:"_4-2-effect提供的具体方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-effect提供的具体方法"}},[e._v("#")]),e._v(" 4.2 Effect提供的具体方法")]),e._v(" "),a("blockquote",[a("p",[e._v("下面来介绍几个"),a("code",[e._v("Effect")]),e._v("中常用的几个方法，从低阶的API，比如"),a("code",[e._v("take")]),e._v("，"),a("code",[e._v("call(apply)")]),e._v("，"),a("code",[e._v("fork")]),e._v("，"),a("code",[e._v("put")]),e._v("，"),a("code",[e._v("select")]),e._v("等，以及高阶"),a("code",[e._v("API")]),e._v("，比如"),a("code",[e._v("takeEvery")]),e._v("和"),a("code",[e._v("takeLatest")]),e._v("等")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import {take,call,put,select,fork,takeEvery,takeLatest} from 'redux-saga/effects'\n")])])]),a("h4",{attrs:{id:"_4-2-1-take"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-take"}},[e._v("#")]),e._v(" 4.2.1 take")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("take")]),e._v("这个方法，是用来监听"),a("code",[e._v("action")]),e._v("，返回的是监听到的"),a("code",[e._v("action")]),e._v("对象。比如")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const loginAction = {\n   type:'login'\n}\n")])])]),a("blockquote",[a("p",[e._v("在"),a("code",[e._v("UI Component")]),e._v("中"),a("code",[e._v("dispatch")]),e._v("一个"),a("code",[e._v("action")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dispatch(loginAction)\n")])])]),a("p",[e._v("在saga中使用：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const action = yield take('login');\n")])])]),a("blockquote",[a("p",[e._v("可以监听到UI传递到中间件的"),a("code",[e._v("Action")]),e._v(",上述"),a("code",[e._v("take")]),e._v("方法的返回，就是"),a("code",[e._v("dipath")]),e._v("的原始对象。一旦监听到"),a("code",[e._v("login")]),e._v("动作，返回的"),a("code",[e._v("action")]),e._v("为：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n  type:'login'\n}\n")])])]),a("h4",{attrs:{id:"_4-2-2-call-apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-call-apply"}},[e._v("#")]),e._v(" 4.2.2 call(apply)")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("call")]),e._v("和"),a("code",[e._v("apply")]),e._v("方法与"),a("code",[e._v("js")]),e._v("中的"),a("code",[e._v("call")]),e._v("和"),a("code",[e._v("apply")]),e._v("相似，我们以"),a("code",[e._v("call")]),e._v("方法为例")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("call(fn, ...args)\n")])])]),a("blockquote",[a("p",[a("code",[e._v("call")]),e._v("方法调用"),a("code",[e._v("fn")]),e._v("，参数为"),a("code",[e._v("args")]),e._v("，返回一个描述对象。不过这里"),a("code",[e._v("call")]),e._v("方法传入的函数"),a("code",[e._v("fn")]),e._v("可以是普通函数，也可以是"),a("code",[e._v("generator")]),e._v("。"),a("code",[e._v("call")]),e._v("方法应用很广泛，在"),a("code",[e._v("redux-saga")]),e._v("中使用异步请求等常用"),a("code",[e._v("call")]),e._v("方法来实现")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yield call(fetch,'/userInfo',username)\n")])])]),a("h4",{attrs:{id:"_4-2-3-put"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-put"}},[e._v("#")]),e._v(" 4.2.3 put")]),e._v(" "),a("blockquote",[a("p",[e._v("redux-saga做为中间件，工作流是这样的")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("UI——>action1————>redux-saga中间件————>action2————>reducer..\n")])])]),a("blockquote",[a("p",[e._v("从工作流中，我们发现"),a("code",[e._v("redux-saga")]),e._v("执行完副作用函数后，必须发出"),a("code",[e._v("action")]),e._v("，然后这个"),a("code",[e._v("action")]),e._v("被"),a("code",[e._v("reducer")]),e._v("监听，从而达到更新"),a("code",[e._v("state")]),e._v("的目的。相应的这里的"),a("code",[e._v("put")]),e._v("对应与"),a("code",[e._v("redux")]),e._v("中的"),a("code",[e._v("dispatch")]),e._v("，工作流程图如下")])]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/488.png",loading:"lazy"}})]),e._v(" "),a("blockquote",[a("p",[e._v("可以看出"),a("code",[e._v("redux-saga")]),e._v("执行副作用方法转化"),a("code",[e._v("action")]),e._v("时，"),a("code",[e._v("put")]),e._v("这个"),a("code",[e._v("Effect")]),e._v("方法跟"),a("code",[e._v("redux")]),e._v("原始的"),a("code",[e._v("dispatch")]),e._v("相似，都是可以发出"),a("code",[e._v("action")]),e._v("，且发出的"),a("code",[e._v("action")]),e._v("都会被"),a("code",[e._v("reducer")]),e._v("监听到。"),a("code",[e._v("put")]),e._v("的使用方法")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yield put({type:'login'})\n")])])]),a("h4",{attrs:{id:"_4-2-4-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-select"}},[e._v("#")]),e._v(" 4.2.4 select")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("put")]),e._v("方法与"),a("code",[e._v("redux")]),e._v("中的"),a("code",[e._v("dispatch")]),e._v("相对应，同样的如果我们想在中间件中获取"),a("code",[e._v("state")]),e._v("，那么需要使用"),a("code",[e._v("select")]),e._v("。"),a("code",[e._v("select")]),e._v("方法对应的是"),a("code",[e._v("redux")]),e._v("中的"),a("code",[e._v("getState")]),e._v("，用户获取"),a("code",[e._v("store")]),e._v("中的"),a("code",[e._v("state")]),e._v("，使用方法：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const id = yield select(state => state.id);\n")])])]),a("h4",{attrs:{id:"_4-2-5-fork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-5-fork"}},[e._v("#")]),e._v(" 4.2.5 fork")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("fork")]),e._v("方法相当于"),a("code",[e._v("web work")]),e._v("，"),a("code",[e._v("fork")]),e._v("方法不会阻塞主线程，在非阻塞调用中十分有用")])]),e._v(" "),a("h4",{attrs:{id:"_4-2-6-takeevery和takelatest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-6-takeevery和takelatest"}},[e._v("#")]),e._v(" 4.2.6 takeEvery和takeLatest")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("takeEvery")]),e._v("和"),a("code",[e._v("takeLatest")]),e._v("用于监听相应的动作并执行相应的方法，是构建在"),a("code",[e._v("take")]),e._v("和"),a("code",[e._v("fork")]),e._v("上面的高阶"),a("code",[e._v("api")]),e._v("，比如要监听"),a("code",[e._v("login")]),e._v("动作，好用"),a("code",[e._v("takeEvery")]),e._v("方法可以")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("takeEvery('login',loginFunc)\n")])])]),a("ul",[a("li",[a("code",[e._v("takeEvery")]),e._v("监听到"),a("code",[e._v("login")]),e._v("的动作，就会执行"),a("code",[e._v("loginFunc")]),e._v("方法，除此之外，"),a("code",[e._v("takeEvery")]),e._v("可以同时监听到多个相同的"),a("code",[e._v("action")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("takeLatest")]),e._v("方法跟"),a("code",[e._v("takeEvery")]),e._v("是相同方式调用")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("takeLatest('login',loginFunc)\n")])])]),a("blockquote",[a("p",[e._v("与"),a("code",[e._v("takeLatest")]),e._v("不同的是，"),a("code",[e._v("takeLatest")]),e._v("是会监听执行最近的那个被触发的"),a("code",[e._v("action")])])]),e._v(" "),a("h2",{attrs:{id:"五、案例分析一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、案例分析一"}},[e._v("#")]),e._v(" 五、案例分析一")]),e._v(" "),a("blockquote",[a("p",[e._v("接着我们来实现一个"),a("code",[e._v("redux-saga")]),e._v("样例，存在一个登陆页，登陆成功后，显示列表页，并且，在列表页，可以点击登出，返回到登陆页。例子的最终展示效果如下")])]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/489.png",loading:"lazy"}})]),e._v(" "),a("blockquote",[a("p",[e._v("样例的功能流程图为")])]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/490.png",loading:"lazy"}})]),e._v(" "),a("h3",{attrs:{id:"_5-1-loginpanel-登陆页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-loginpanel-登陆页"}},[e._v("#")]),e._v(" 5.1 LoginPanel(登陆页)")]),e._v(" "),a("p",[a("strong",[e._v("输入时时保存用户名和密码")])]),e._v(" "),a("ul",[a("li",[e._v("用户名输入框和密码框onchange时触发的函数为")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("changeUsername:(e)=>{\n    dispatch({type:'CHANGE_USERNAME',value:e.target.value});\n },\nchangePassword:(e)=>{\n  dispatch({type:'CHANGE_PASSWORD',value:e.target.value});\n}\n")])])]),a("blockquote",[a("p",[e._v("在函数中最后会"),a("code",[e._v("dispatch")]),e._v("两个"),a("code",[e._v("action：CHANGE_USERNAME和CHANGE_PASSWORD")])])]),e._v(" "),a("ul",[a("li",[e._v("在"),a("code",[e._v("saga.js")]),e._v("文件中监听这两个方法并执行副作用函数，最后"),a("code",[e._v("put")]),e._v("发出转化后的"),a("code",[e._v("action")]),e._v("，给"),a("code",[e._v("reducer")]),e._v("函数调用")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function * watchUsername(){\n  while(true){\n    const action= yield take('CHANGE_USERNAME');\n    yield put({type:'change_username',\n    value:action.value});\n  }\n}\nfunction * watchPassword(){\n  while(true){\n    const action=yield take('CHANGE_PASSWORD');\n    yield put({type:'change_password',\n    value:action.value});\n  }\n}\n")])])]),a("blockquote",[a("p",[e._v("最后在"),a("code",[e._v("reducer")]),e._v("中接收到"),a("code",[e._v("redux-saga")]),e._v("的"),a("code",[e._v("put")]),e._v("方法传递过来的"),a("code",[e._v("action：change_username")]),e._v("和"),a("code",[e._v("change_password")]),e._v("，然后更新"),a("code",[e._v("state")])])]),e._v(" "),a("p",[a("strong",[e._v("监听登陆事件判断登陆是否成功")])]),e._v(" "),a("blockquote",[a("p",[e._v("在UI中发出的登陆事件为")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("toLoginIn:(username,password)=>{\n  dispatch({type:'TO_LOGIN_IN',username,password});\n}\n")])])]),a("blockquote",[a("p",[e._v("登陆事件的"),a("code",[e._v("action")]),e._v("为："),a("code",[e._v("TO_LOGIN_IN")]),e._v(".对于登入事件的处理函数为：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("while(true){\n    //监听登入事件\n    const action1=yield take('TO_LOGIN_IN');\n    const res=yield call(fetchSmart,'/login',{\n      method:'POST',\n      body:JSON.stringify({\n        username:action1.username,\n        password:action1.password\n    })\n    if(res){\n      put({type:'to_login_in'});\n    }\n});\n")])])]),a("blockquote",[a("p",[e._v("在上述的处理函数中，首先监听原始动作提取出传递来的用户名和密码，然后请求是否登陆成功，如果登陆成功有返回值，则执行"),a("code",[e._v("put")]),e._v("的"),a("code",[e._v("action:to_login_in")])])]),e._v(" "),a("h3",{attrs:{id:"_5-2-loginsuccess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-loginsuccess"}},[e._v("#")]),e._v(" 5.2 LoginSuccess")]),e._v(" "),a("blockquote",[a("p",[e._v("(登陆成功列表展示页)")])]),e._v(" "),a("ul",[a("li",[e._v("登陆成功后的页面功能包括：\n"),a("ul",[a("li",[e._v("获取列表信息，展示列表信息")]),e._v(" "),a("li",[e._v("登出功能，点击可以返回登陆页面")])])])]),e._v(" "),a("p",[a("strong",[e._v("获取列表信息")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import {delay} from 'redux-saga';\n\nfunction * getList(){\n  try {\n   yield delay(3000);\n   const res = yield call(fetchSmart,'/list',{\n     method:'POST',\n     body:JSON.stringify({})\n   });\n   yield put({type:'update_list',list:res.data.activityList});\n } catch(error) {\n   yield put({type:'update_list_error', error});\n }\n}\n")])])]),a("blockquote",[a("p",[e._v("为了演示请求过程，我们在本地"),a("code",[e._v("mock")]),e._v("，通过"),a("code",[e._v("redux-saga")]),e._v("的工具函数"),a("code",[e._v("delay")]),e._v("，"),a("code",[e._v("delay")]),e._v("的功能相当于延迟xx秒，因为真实的请求存在延迟，因此可以用delay在本地模拟真实场景下的请求延迟")])]),e._v(" "),a("p",[a("strong",[e._v("登出功能")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const action2=yield take('TO_LOGIN_OUT');\nyield put({type:'to_login_out'});\n")])])]),a("blockquote",[a("p",[e._v("与登入相似，登出的功能从UI处接受"),a("code",[e._v("action:TO_LOGIN_OUT")]),e._v(",然后转发"),a("code",[e._v("action:to_login_out")])])]),e._v(" "),a("p",[a("strong",[e._v("完整的实现登入登出和列表展示的代码")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function * getList(){\n  try {\n   yield delay(3000);\n   const res = yield call(fetchSmart,'/list',{\n     method:'POST',\n     body:JSON.stringify({})\n   });\n   yield put({type:'update_list',list:res.data.activityList});\n } catch(error) {\n   yield put({type:'update_list_error', error});\n }\n}\n\nfunction * watchIsLogin(){\n  while(true){\n    //监听登入事件\n    const action1=yield take('TO_LOGIN_IN');\n    \n    const res=yield call(fetchSmart,'/login',{\n      method:'POST',\n      body:JSON.stringify({\n        username:action1.username,\n        password:action1.password\n      })\n    });\n    \n    //根据返回的状态码判断登陆是否成功\n    if(res.status===10000){\n      yield put({type:'to_login_in'});\n      //登陆成功后获取首页的活动列表\n      yield call(getList);\n    }\n    \n    //监听登出事件\n    const action2=yield take('TO_LOGIN_OUT');\n    yield put({type:'to_login_out'});\n  }\n}\n")])])]),a("blockquote",[a("p",[e._v("通过请求状态码判断登入是否成功，在登陆成功后，可以通过")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yield call(getList)\n")])])]),a("blockquote",[a("p",[e._v("注意call方法调用是会阻塞主线程的，具体来说")])]),e._v(" "),a("ul",[a("li",[e._v("在call方法调用结束之前，call方法之后的语句是无法执行的")]),e._v(" "),a("li",[e._v("如果"),a("code",[e._v("call(getList)")]),e._v("存在延迟，"),a("code",[e._v("call(getList)")]),e._v("之后的语句 "),a("code",[e._v("const action2=yieldtake('TO_LOGIN_OUT')")]),e._v("在"),a("code",[e._v("call")]),e._v("方法返回结果之前无法执行")]),e._v(" "),a("li",[e._v("在延迟期间的登出操作会被忽略")])]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://s.poetries.work/gitee/2019/10/491.png",loading:"lazy"}})]),e._v(" "),a("p",[a("strong",[e._v("无阻塞调用")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yield call(getList)\n")])])]),a("p",[e._v("修改为")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yield fork(getList)\n")])])]),a("blockquote",[a("p",[e._v("通过fork方法不会阻塞主线程，在白屏时点击登出，可以立刻响应登出功能，从而返回登陆页面")])]),e._v(" "),a("h2",{attrs:{id:"六、案例分析二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、案例分析二"}},[e._v("#")]),e._v(" 六、案例分析二")]),e._v(" "),a("h3",{attrs:{id:"_6-1-配置saga信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-配置saga信息"}},[e._v("#")]),e._v(" 6.1 配置saga信息")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("src/store/configureStore.js\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import { createStore, applyMiddleware, compose } from 'redux'\n// import {createLogger } from 'redux-logger'\nimport createHistory from 'history/createBrowserHistory'\nimport createSagaMiddleware from 'redux-saga';\nimport { routerMiddleware } from 'react-router-redux'\nimport rootSaga from '../sagas'\nimport rootReducer from '../reducers/'\n\nexport const history = createHistory()\n\nconst middleware = routerMiddleware(history)\n\n//创建saga middleware\nconst sagaMiddleware = createSagaMiddleware();\n\n\nconst configureStore = preloadedState => {\n\t// 安装 Redux-DevTools Chrome 插件后可用 composeEnhancers()\n\tconst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose\n\n\tconst store = createStore(\n\t\trootReducer,\n\t\tpreloadedState,\n\t\tcomposeEnhancers(\n\t\t\tapplyMiddleware(sagaMiddleware,middleware)\n\t\t)\n\t)\n\tsagaMiddleware.run(rootSaga);\n\tif (module.hot) {\n\t\t// Enable Webpack hot module replacement for reducers\n\t\tmodule.hot.accept('../reducers', () => {\n\t\t\tconst nextRootReducer = require('../reducers').default\n\t\t\tstore.replaceReducer(nextRootReducer)\n\t\t})\n\t}\n\n\treturn store\n}\n\n\nexport default configureStore\n")])])]),a("h3",{attrs:{id:"_6-2-配置reduce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-配置reduce"}},[e._v("#")]),e._v(" 6.2 配置reduce")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// src/reducers/index.js\nimport {combineReducers} from 'redux'\nimport {routerReducer as routing} from 'react-router-redux'\n\nconst rootReducer = combineReducers({\n      routing,\n      poetry \t\t\t\t: require('./poetry').default\n})\n\nexport default rootReducer\n// src/reducers/poetry.js\n\nimport * as ActionTypes from '../actions'\n\nexport default (state = {\n\tfetching:false,\n\terror:false,\n\terrMsg:'',\n\tdata:[]\n},action) => {\n\tif(action.type === ActionTypes.FETCH_POETRY_REQUEST){\n\t\treturn Object.assign({...state,fetching:true,errMsg:''})\n\t}else if(action.type === ActionTypes.FETCH_POETRY_SUCCESS){\n\t\tconst data = action.payload.data\n\t\treturn Object.assign({...state,fetching:false,data,errMsg:''})\n\t}else if(action.type === ActionTypes.FETCH_POETRY_FAILURE){\n\t\treturn Object.assign({...state,fetching:false,error:true,errMsg:action.payload.errMsg})\n\t}\n\treturn state\n}\n")])])]),a("h3",{attrs:{id:"_6-3-处理action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-处理action"}},[e._v("#")]),e._v(" 6.3 处理action")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// src/action/index.js\n\nimport { createAction } from 'redux-actions';\n\nexport const COMMON_FETCHING = 'COMMON_FETCHING'\nexport const COMMON_OVER = 'COMMON_OVER'\nexport const MSG_SHOW = 'MSG_SHOW'\nexport const MSG_INIT = 'MSG_INIT'\nexport const POP_LOGIN = 'POP_LOGIN'\nexport const initMsg = () => ({type : MSG_INIT})\n\n\n// 相比用thunk多了一步 多了个action 来触发saga woker\nexport const FETCH_POETRY_REQUEST = 'FETCH_POETRY_REQUEST'\nexport const FETCH_POETRY_SUCCESS = 'FETCH_POETRY_SUCCESS'\nexport const FETCH_POETRY_FAILURE = 'FETCH_POETRY_FAILURE'\nexport const fetchPoetryRequest = createAction(FETCH_POETRY_REQUEST)\nexport const fetchPoetrySuccess = createAction(FETCH_POETRY_SUCCESS)\nexport const fetchPoetryFauilure= createAction(FETCH_POETRY_FAILURE)\n")])])]),a("h3",{attrs:{id:"_6-4-处理sagas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-处理sagas"}},[e._v("#")]),e._v(" 6.4 处理sagas")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// src/sagas/index.js\n\nimport { all } from 'redux-saga/effects'\n\nexport default function* rootSaga() {\n    yield all([\n        ...require('./fetchPoetry').default\n    ])\n  }\n// src/fetchPoetry.js\n\nimport {put,take,call,fork,takeEvery,select} from 'redux-saga/effects'\nimport {delay} from 'redux-saga'\nimport  * as api  from '../api'\nimport * as actionTypes from '../actions/'\n\n// saga worker 监听FETCH_POETRY_REQUEST动作触发执行相应操作\nfunction* fetchPoetrySaga(){\n    // yield delay(100)\n    // ======== 写法一 ========= \n    // yield takeEvery(actionTypes.FETCH_POETRY_REQUEST,function*(action){\n    //     // 调用this.props.fetchPoetryRequest({user:'poetries',age:23}) 传参进来这里\n    //     // 也可以通过这样获取state中的参数 const state = yield select()\n    //     const {user,age} = action\n    //     try{\n    //         const data =  yield call(api.get({\n    //             url:'/mock/5b7fd63f719c7b7241f4e2fa/tangshi/tang-shi'\n    //         }))\n    //         yield put(actionTypes.fetchPoetrySuccess({data:data.data.data}))\n    //     }catch(error){\n    //         yield put(actionTypes.fetchPoetryFauilure({errMsg:error.message}))\n    //     }\n     \n    // })\n    // === 写法二====\n  while(true){\n      // 当dispatch({type:FETCH_POETRY_REQUEST})的时候被这里监听 执行对应的请求\n    const {user,age} =  yield take(actionTypes.FETCH_POETRY_REQUEST)\n    try{\n         const data =  yield call(api.get({\n             url:'/mock/5b7fd63f719c7b7241f4e2fa/tangshi/tang-shi'\n         }))\n          yield put(actionTypes.fetchPoetrySuccess({data:data.data.data}))\n     }catch(error){\n         yield put(actionTypes.fetchPoetryFauilure({errMsg:error.message}))\n     }\n  }\n\n} \n\n\n// 导出所有的saga\nexport default  [\n    fork(fetchPoetrySaga)\n]\n")])])]),a("blockquote",[a("p",[e._v("完整代码例子 https://github.com/poetries/redux-saga-template")])]),e._v(" "),a("h2",{attrs:{id:"七、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、总结"}},[e._v("#")]),e._v(" 七、总结")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("redux-saga")]),e._v("做为"),a("code",[e._v("redux")]),e._v("中间件的全部优点")])]),e._v(" "),a("ul",[a("li",[e._v("统一"),a("code",[e._v("action")]),e._v("的形式，在"),a("code",[e._v("redux-saga")]),e._v("中，从"),a("code",[e._v("UI")]),e._v("中"),a("code",[e._v("dispatch")]),e._v("的"),a("code",[e._v("action")]),e._v("为原始对象")]),e._v(" "),a("li",[e._v("集中处理异步等存在副作用的逻辑")]),e._v(" "),a("li",[e._v("通过转化"),a("code",[e._v("effects")]),e._v("函数，可以方便进行单元测试")]),e._v(" "),a("li",[e._v("完善和严谨的流程控制，可以较为清晰的控制复杂的逻辑")])])])}),[],!1,null,null,null);t.default=s.exports}}]);