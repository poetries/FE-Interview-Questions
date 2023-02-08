(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{1265:function(e,t,o){"use strict";o.r(t);var v=o(69),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"一、认识mobx"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一、认识mobx"}},[e._v("#")]),e._v(" 一、认识MobX")]),e._v(" "),o("blockquote",[o("p",[e._v("打印"),o("code",[e._v("mobx")]),e._v("，看看"),o("code",[e._v("mobx")]),e._v("中有什么")])]),e._v(" "),o("p",[o("img",{staticClass:"lazy",attrs:{alt:"mobx","data-src":"https://s.poetries.work/gitee/20191001/8.png",loading:"lazy"}})]),e._v(" "),o("blockquote",[o("p",[o("code",[e._v("MobX")]),e._v("的整个流程")])]),e._v(" "),o("p",[o("img",{staticClass:"lazy",attrs:{alt:"mobx","data-src":"https://s.poetries.work/gitee/20191001/9.png",loading:"lazy"}})]),e._v(" "),o("p",[o("strong",[e._v("MobX 和 Redux 的比较")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Redux")]),e._v(" 是单一数据源，而 "),o("code",[e._v("MobX")]),e._v(" 往往是多个 "),o("code",[e._v("store")]),e._v("。"),o("code",[e._v("MobX")]),e._v(" 可以根据应用的 "),o("code",[e._v("UI")]),e._v("、数据或业务逻辑来组织 "),o("code",[e._v("store")]),e._v("，具体如何进行需要你自己进行权衡")]),e._v(" "),o("li",[o("code",[e._v("Redux store")]),e._v(" 使用普通的 "),o("code",[e._v("JavaScript")]),e._v(" 对象结构，"),o("code",[e._v("MobX")]),e._v(" 将常规 "),o("code",[e._v("JavaScript")]),e._v(" 对象包裹，赋予 "),o("code",[e._v("observable")]),e._v(" 的能力，通过隐式订阅，自动跟踪 "),o("code",[e._v("observable")]),e._v(" 的变化。"),o("code",[e._v("MobX")]),e._v(" 是观察引用的，在跟踪函数中（例如："),o("code",[e._v("computed value")]),e._v("、"),o("code",[e._v("reactions")]),e._v("等等），任何被引用的 "),o("code",[e._v("observable")]),e._v(" 的属性都会被记录，一旦引用改变，"),o("code",[e._v("MobX")]),e._v(" 将作出反应。注意，不在跟踪函数中的属性将不会被跟踪，在异步中访问的属性也不会被跟踪")]),e._v(" "),o("li",[o("code",[e._v("Redux")]),e._v(" 的 "),o("code",[e._v("state")]),e._v(" 是只读的，只能通过将之前的 "),o("code",[e._v("state")]),e._v(" 与触发的 "),o("code",[e._v("action")]),e._v(" 结合，产生新的 "),o("code",[e._v("state")]),e._v("，因此是纯净的（"),o("code",[e._v("pure")]),e._v("）。而 "),o("code",[e._v("MobX")]),e._v(" 的 "),o("code",[e._v("state")]),e._v(" 即可读又可写，"),o("code",[e._v("action")]),e._v(" 是非必须的，可以直接赋值改变，因此是不纯净的（Impure）")]),e._v(" "),o("li",[o("code",[e._v("Redux")]),e._v(" 需要你去规范化你的 "),o("code",[e._v("state")]),e._v("，"),o("code",[e._v("Immutable")]),e._v(" 数据使 "),o("code",[e._v("Reducer")]),e._v(" 在更新时需要将状态树的祖先数据进行复制和更新，新的对象会导致与之 "),o("code",[e._v("connect")]),e._v("的所有 "),o("code",[e._v("UI")]),e._v(" 组件都重复渲染。因此"),o("code",[e._v("Redux state")]),e._v(" 不建议进行深层嵌套，或者需要我们在组件中用 "),o("code",[e._v("shouldComponentUpdate")]),e._v(" 优化。而 "),o("code",[e._v("MobX")]),e._v(" 只自动更新你所关心的，不必担心嵌套带来的重渲染问题")])]),e._v(" "),o("blockquote",[o("p",[o("code",[e._v("redux")]),e._v(" 管理的是 ("),o("code",[e._v("STORE")]),e._v(" -> "),o("code",[e._v("VIEW")]),e._v(" -> "),o("code",[e._v("ACTION")]),e._v(") 的整个闭环，而 "),o("code",[e._v("mobx")]),e._v(" 只关心 "),o("code",[e._v("STORE")]),e._v(" -> "),o("code",[e._v("VIEW")]),e._v(" 的部分")])]),e._v(" "),o("p",[o("strong",[e._v("优点")])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("基于运行时的数据订阅")]),e._v(" "),o("code",[e._v("mobx")]),e._v(" 的数据依赖始终保持了最小，而且还是基于运行时。而如果用 "),o("code",[e._v("redux")]),e._v("，可能一不小心就多订阅或者少订阅了数据。所以为了达到高性能，我们需要借助 "),o("code",[e._v("PureRenderMixin")]),e._v(" 以及 "),o("code",[e._v("reselect")]),e._v(" 对 "),o("code",[e._v("selector")]),e._v(" 做缓存")]),e._v(" "),o("li",[o("strong",[e._v("通过 OOP 的方式组织领域模型 (domain model)")]),e._v(" "),o("code",[e._v("OOP")]),e._v(" 的方式在某些场景下会比较方便，尤其是容易抽取 "),o("code",[e._v("domain model")]),e._v(" 的时候。进而由于 "),o("code",[e._v("mobx")]),e._v(" 支持引用的方式引用数据，所以可以非常容易得形成模型图 (model graph )，这样可以更好地理解我们的应用。")]),e._v(" "),o("li",[o("strong",[e._v("修改数据方便自然")]),e._v(" "),o("code",[e._v("mobx")]),e._v(" 是基于原生的 "),o("code",[e._v("JavaScript")]),e._v(" 对象、数组和 "),o("code",[e._v("Class")]),e._v("实现的。所以修改数据不需要额外语法成本，也不需要始终返回一个新的数据，而是直接操作数据")])]),e._v(" "),o("p",[o("strong",[e._v("缺点")])]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("缺最佳实践和社区")]),e._v(" mobx 比较新，遇到的问题可能社区都没有遇到过。并且，mobx 并没有很好的扩展/插件机制")])]),e._v(" "),o("li",[o("p",[e._v("随意修改 store")]),e._v(" "),o("p",[e._v("我们都知道 redux 里唯一可以改数据的地方是 reducer，这样可以保证应用的安全稳定；而 mobx 可以随意修改数据，触发更新，给人一种不安全的感觉")]),e._v(" "),o("ul",[o("li",[e._v("最新的"),o("code",[e._v("mobx 2.2")]),e._v(" 加入了 "),o("code",[e._v("action")]),e._v(" 的支持。并且在开启 "),o("code",[e._v("strict mode")]),e._v(" 之后，就只有 "),o("code",[e._v("action")]),e._v(" 可以对数据进行修改，限制数据的修改入口。可以解决这个问题")])])]),e._v(" "),o("li",[o("p",[e._v("逻辑层的限制")]),e._v(" "),o("ul",[o("li",[e._v("如果更新逻辑不能很好地封装在 "),o("code",[e._v("domain class")]),e._v(" 里，用 "),o("code",[e._v("redux")]),e._v(" 会更合适。另外，"),o("code",[e._v("mobx")]),e._v("缺类 "),o("code",[e._v("redux-saga")]),e._v(" 的库，业务逻辑的整合不知道放哪合适")])])])]),e._v(" "),o("h2",{attrs:{id:"二、核心api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#二、核心api"}},[e._v("#")]),e._v(" 二、核心API")]),e._v(" "),o("p",[o("img",{staticClass:"lazy",attrs:{alt:"mobx","data-src":"https://s.poetries.work/gitee/20191001/10.png",loading:"lazy"}})]),e._v(" "),o("h3",{attrs:{id:"_2-1-observable"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-observable"}},[e._v("#")]),e._v(" 2.1 @observable")]),e._v(" "),o("blockquote",[o("p",[o("code",[e._v("Observable")]),e._v(" 值可以是JS基本数据类型、引用类型、普通对象、类实例、数组和映射。其修饰的state会暴露出来供观察者使用")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("// Observable 值可以是JS基本数据类型、引用类型、普通对象、类实例、数组和映射\n@observable title = 'this is about page'\n@observable num = 0\n\n// 计算值(computed values)是可以根据现有的状态或其它计算值衍生出的值\n@computed get getUserInfo(){\n   return `我是computed经过计算的getter,currenct num:${this.num}`\n}\n// 注意：当你使用装饰器模式时，@action 中的 this 没有绑定在当前这个实例上，要用过 @action.bound 来绑定 使得 this 绑定在实例对象上\n@action.bound add(){\n    this.num ++\n}\n@action.bound reduce(){\n    this.num --\n}\n")])])]),o("h3",{attrs:{id:"_2-2-observer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-observer"}},[e._v("#")]),e._v(" 2.2 observer")]),e._v(" "),o("blockquote",[o("p",[e._v("可以用作包裹 "),o("code",[e._v("React")]),e._v(" 组件的高阶组件。 在组件的 "),o("code",[e._v("render")]),e._v(" 函数中的任何已使用的 "),o("code",[e._v("observable")]),e._v(" 发生变化时，组件都会自动重新渲染。 注意 "),o("code",[e._v("observer")]),e._v(" 是由 "),o("code",[e._v('"mobx-react"')]),e._v(" 包提供的，而不是 "),o("code",[e._v("mobx")]),e._v(" 本身")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("@Observer")]),e._v(" 是一个注解，本质上是用 "),o("code",[e._v("mobx.autorun")]),e._v(" 包装了组件的 "),o("code",[e._v("render")]),e._v(" 函数以确保任何组件渲染中使用的数据变化时都可以强制刷新组件")])]),e._v(" "),o("h3",{attrs:{id:"_2-3-computed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-computed"}},[e._v("#")]),e._v(" 2.3 @computed")]),e._v(" "),o("ul",[o("li",[e._v("计算值("),o("code",[e._v("computed values")]),e._v(")是可以根据现有的状态或其它计算值衍生出的值")]),e._v(" "),o("li",[e._v("用于获取由基础 "),o("code",[e._v("state")]),e._v("衍生出来的值。如果基础值没有变，获取衍生值时就会走缓存，这样就不会引起虚拟 DOM 的重新渲染")])]),e._v(" "),o("blockquote",[o("ul",[o("li",[o("code",[e._v("getter")]),e._v("：获得计算得到的新"),o("code",[e._v("state")]),e._v("并返回。")]),e._v(" "),o("li",[o("code",[e._v("setter")]),e._v("： 不能用来直接改变计算属性的值，但是它们可以用来作“逆向”衍生。")])])]),e._v(" "),o("blockquote",[o("p",[e._v("通过 "),o("code",[e._v("@computed + getter")]),e._v("函数来定义衍生值")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("class Foo {\n    @observable length = 2;\n    @computed get squared() {\n        return this.length * this.length;\n    }\n    set squared(value) { // 这是一个自动的动作，不需要注解\n        this.length = Math.sqrt(value);\n    }\n}\n")])])]),o("h3",{attrs:{id:"_2-4-actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-actions"}},[e._v("#")]),e._v(" 2.4 @actions")]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("只有在 "),o("code",[e._v("actions")]),e._v(" 中，才可以修改 "),o("code",[e._v("Mobx")]),e._v(" 中 "),o("code",[e._v("state")]),e._v(" 的值")]),e._v(" "),o("li",[e._v("注意：当你使用装饰器模式时，"),o("code",[e._v("@action")]),e._v(" 中的 "),o("code",[e._v("this")]),e._v(" 没有绑定在当前这个实例上，要用过 ["),o("code",[e._v("@action.bound](mailto:")]),e._v("@action.bound)"),o("code",[e._v("来绑定 使得")]),e._v("this` 绑定在实例对象上")])])]),e._v(" "),o("ul",[o("li",[e._v("通过引入 "),o("code",[e._v("mobx")]),e._v(" 定义的严格模式，强制使用 "),o("code",[e._v("action")]),e._v(" 来修改状态")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("import {configure} from 'mobx';\n\nconfigure({ enforceActions: 'always' }) // 开启严格模式\n@action.bound add(){\n    this.num ++\n}\n@action.bound reduce(){\n    this.num --\n}\n")])])]),o("h3",{attrs:{id:"_2-5-autorun"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-autorun"}},[e._v("#")]),e._v(" 2.5 autorun")]),e._v(" "),o("ul",[o("li",[e._v("当可观察对象中保存的值发生变化时，可以在"),o("code",[e._v("mobx.autorun")]),e._v("中被观察到。"),o("code",[e._v("observable")]),e._v(" 的值初始化或改变时，自动运行")]),e._v(" "),o("li",[e._v("如果你想响应式的产生一个可以被其它 "),o("code",[e._v("observer")]),e._v(" 使用的值，请使用 "),o("code",[e._v("@computed")]),e._v("，如果你不想产生一个新值，而想要达到一个效果，请使用 "),o("code",[e._v("autorun")]),e._v("。 举例来说，效果是像打印日志、发起网络请求等这样命令式的副作用")])]),e._v(" "),o("h3",{attrs:{id:"_2-6-reactions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-reactions"}},[e._v("#")]),e._v(" 2.6 reactions")]),e._v(" "),o("blockquote",[o("p",[o("code",[e._v("Reactions")]),e._v("和计算值很像，但它不是产生一个新的值，而是会产生一些副作用，比如打印到控制台、网络请求、递增地更新 "),o("code",[e._v("React")]),e._v("组件树以修补"),o("code",[e._v("DOM")]),e._v("、等等。 简而言之，"),o("code",[e._v("reactions")]),e._v(" 在 响应式编程和命令式编程之间建立沟通的桥梁")])]),e._v(" "),o("h3",{attrs:{id:"_2-7-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-flow"}},[e._v("#")]),e._v(" 2.7 Flow")]),e._v(" "),o("blockquote",[o("p",[e._v("用法: "),o("code",[e._v("flow(function* (args) { })")])])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("flow()")]),e._v(" 接收 "),o("code",[e._v("generator")]),e._v(" 函数作为它唯一的输入")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('import { configure } from \'mobx\';\n\n// 不允许在动作外部修改状态\nconfigure({ enforceActions: true });\n\nclass Store {\n    @observable githubProjects = [];\n    @observable state = "pending"; // "pending" / "done" / "error"\n\n\n    fetchProjects = flow(function* fetchProjects() { // <- 注意*号，这是生成器函数！\n        this.githubProjects = [];\n        this.state = "pending";\n        try {\n            const projects = yield fetchGithubProjectsSomehow(); // 用 yield 代替 await\n            const filteredProjects = somePreprocessing(projects);\n\n            // 异步代码自动会被 `action` 包装\n            this.state = "done";\n            this.githubProjects = filteredProjects;\n        } catch (error) {\n            this.state = "error";\n        }\n    })\n}\n')])])]),o("h2",{attrs:{id:"三、计数器例子"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#三、计数器例子"}},[e._v("#")]),e._v(" 三、计数器例子")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("import React, { Component } from 'react';\nimport { observer } from 'mobx-react';//结合react\nimport { observable, autorun,computed } from 'mobx';\n\n// 定义数据store\nclass Counter {\n  @observable number = 0;\n  @computed get msg() {\n    return 'number:' + this.number\n  }\n  // 用action改变数据，避免混乱\n  @action increment(){\n    this.number ++\n  }\n  @action decrement: () => {\n    this.number --\n  }\n}\n\nvar store = new Counter()\n\n// 把属性注入react组件\n@observer\nclass App extends Component {\n  render() {\n    return (<div>\n        { store.msg } <br />\n      <button onClick={this.handleInc}> + </button>\n      <button onClick={this.handleDec}> - </button>\n    </div>);\n  }\n  handleInc() {\n    store.increment();\n  }\n  handleDec() {\n    store.decrement();\n  }\n}\n\nReactDOM.render(<App />, document.getElementById('root'));\n")])])]),o("h2",{attrs:{id:"四、应用案例"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四、应用案例"}},[e._v("#")]),e._v(" 四、应用案例")]),e._v(" "),o("blockquote",[o("p",[e._v("https://github.com/poetries/react-mobx-template")])]),e._v(" "),o("h2",{attrs:{id:"五、参考"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#五、参考"}},[e._v("#")]),e._v(" 五、参考")]),e._v(" "),o("blockquote",[o("p",[e._v("文档学习 https://cn.mobx.js.org/")])])])}),[],!1,null,null,null);t.default=_.exports}}]);