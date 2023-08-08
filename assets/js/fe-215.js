(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1246:function(t,e,s){"use strict";s.r(e);var a=s(52),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("了解vuex核心概念请移步 https://vuex.vuejs.org/zh/")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://vuex.vuejs.org/vuex.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"一、初始vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、初始vuex"}},[t._v("#")]),t._v(" 一、初始vuex")]),t._v(" "),s("h3",{attrs:{id:"_1-1-vuex是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-vuex是什么"}},[t._v("#")]),t._v(" 1.1 vuex是什么")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vuex\n")])])]),s("p",[t._v("就是把需要共享的变量全部存储在一个对象里面，然后将这个对象放在顶层组件中供其他组件使用")]),t._v(" "),s("ul",[s("li",[t._v("父子组件通信时，我们通常会采用 "),s("code",[t._v("props + emit")]),t._v(" 这种方式。但当通信双方不是父子组件甚至压根不存在相关联系，或者一个状态需要共享给多个组件时，就会非常麻烦，数据也会相当难维护")])])])])]),t._v(" "),s("h3",{attrs:{id:"_1-2-vuex中有什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-vuex中有什么"}},[t._v("#")]),t._v(" 1.2 vuex中有什么")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const store = new Vuex.Store({\n    state: {\n        name: 'weish',\n        age: 22\n    },\n    getters: {\n        personInfo(state) {\n            return `My name is ${state.name}, I am ${state.age}`;\n        }\n    }\n    mutations: {\n        SET_AGE(state, age) {\n            commit(age, age);\n        }\n    },\n    actions: {\n        nameAsyn({commit}) {\n            setTimeout(() => {\n                commit('SET_AGE', 18);\n            }, 1000);\n        }\n    },\n    modules: {\n        a: modulesA\n    }\n}\n")])])]),s("blockquote",[s("p",[t._v("个就是最基本也是完整的"),s("code",[t._v("vuex")]),t._v("代码；"),s("code",[t._v("vuex")]),t._v(" 包含有五个基本的对象")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("state")]),t._v("：存储状态。也就是变量；")]),t._v(" "),s("li",[s("code",[t._v("getters")]),t._v("：派生状态。也就是"),s("code",[t._v("set")]),t._v("、"),s("code",[t._v("get")]),t._v("中的"),s("code",[t._v("get")]),t._v("，有两个可选参数："),s("code",[t._v("state")]),t._v("、"),s("code",[t._v("getters")]),t._v("分别可以获取"),s("code",[t._v("state")]),t._v("中的变量和其他的"),s("code",[t._v("getters")]),t._v("。外部调用方式："),s("code",[t._v("store.getters.personInfo()")]),t._v("。就和"),s("code",[t._v("vue")]),t._v("的"),s("code",[t._v("computed")]),t._v("差不多；")]),t._v(" "),s("li",[s("code",[t._v("mutations")]),t._v("：提交状态修改。也就是"),s("code",[t._v("set")]),t._v("、"),s("code",[t._v("get")]),t._v("中的"),s("code",[t._v("set")]),t._v("，这是"),s("code",[t._v("vuex")]),t._v("中唯一修改"),s("code",[t._v("state")]),t._v("的方式，但不支持异步操作。第一个参数默认是"),s("code",[t._v("state")]),t._v("。外部调用方式："),s("code",[t._v("store.commit('SET_AGE', 18)")]),t._v("。和"),s("code",[t._v("vue")]),t._v("中的"),s("code",[t._v("methods")]),t._v("类似。")]),t._v(" "),s("li",[s("code",[t._v("actions")]),t._v("：和"),s("code",[t._v("mutations")]),t._v("类似。不过"),s("code",[t._v("actions")]),t._v("支持异步操作。第一个参数默认是和"),s("code",[t._v("store")]),t._v("具有相同参数属性的对象。外部调用方式："),s("code",[t._v("store.dispatch('nameAsyn')")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("modules")]),t._v("："),s("code",[t._v("store")]),t._v("的子模块，内容就相当于是"),s("code",[t._v("store")]),t._v("的一个实例。调用方式和前面介绍的相似，只是要加上当前子模块名，如："),s("code",[t._v("store.a.getters.xxx()")])])]),t._v(" "),s("h3",{attrs:{id:"_1-3-vue-cli中使用vuex的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-vue-cli中使用vuex的方式"}},[t._v("#")]),t._v(" 1.3 vue-cli中使用vuex的方式")]),t._v(" "),s("p",[s("strong",[t._v("目录结构")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("├── index.html\n├── main.js\n├── components\n└── store\n    ├── index.js          # 我们组装模块并导出 store 的地方\n    ├── state.js          # 跟级别的 state\n    ├── getters.js        # 跟级别的 getter\n    ├── mutation-types.js # 根级别的mutations名称（官方推荐mutions方法名使用大写）\n    ├── mutations.js      # 根级别的 mutation\n    ├── actions.js        # 根级别的 action\n    └── modules\n        ├── m1.js         # 模块1\n        └── m2.js         # 模块2\n")])])]),s("p",[s("strong",[t._v("state示例")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const state = {\n    name: 'weish',\n    age: 22\n};\n\nexport default state;\n")])])]),s("p",[s("strong",[t._v("getter示例")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("getters.js")]),t._v("示例（我们一般使用"),s("code",[t._v("getters")]),t._v("来获取"),s("code",[t._v("state")]),t._v("的状态，而不是直接使用"),s("code",[t._v("state")]),t._v("）")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export const name = (state) => {\n    return state.name;\n}\n\nexport const age = (state) => {\n    return state.age\n}\n\nexport const other = (state) => {\n    return `My name is ${state.name}, I am ${state.age}.`;\n}\n")])])]),s("p",[s("strong",[t._v("mutation-type示例")])]),t._v(" "),s("blockquote",[s("p",[t._v("将所有"),s("code",[t._v("mutations")]),t._v("的函数名放在这个文件里")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export const SET_NAME = 'SET_NAME';\nexport const SET_AGE = 'SET_AGE';\n")])])]),s("p",[s("strong",[t._v("mutations示例")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import * as types from './mutation-type.js';\n\nexport default {\n    [types.SET_NAME](state, name) {\n        state.name = name;\n    },\n    [types.SET_AGE](state, age) {\n        state.age = age;\n    }\n};\n")])])]),s("p",[s("strong",[t._v("actions示例")])]),t._v(" "),s("blockquote",[s("p",[t._v("异步操作、多个"),s("code",[t._v("commit")]),t._v("时")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import * as types from './mutation-type.js';\n\nexport default {\n    nameAsyn({commit}, {age, name}) {\n        commit(types.SET_NAME, name);\n        commit(types.SET_AGE, age);\n    }\n}\n")])])]),s("p",[s("strong",[t._v("modules–m1.js示例")])]),t._v(" "),s("blockquote",[s("p",[t._v("如果不是很复杂的应用，一般来讲是不会分模块的")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export default {\n    state: {},\n    getters: {},\n    mutations: {},\n    actions: {}\n}\n")])])]),s("p",[s("strong",[t._v("index.js示例（组装vuex)")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import vue from 'vue';\nimport vuex from 'vuex';\nimport state from './state.js';\nimport * as getters from './getters.js';\nimport mutations from './mutations.js';\nimport actions from './actions.js';\nimport m1 from './modules/m1.js';\nimport m2 from './modules/m2.js';\nimport createLogger from 'vuex/dist/logger'; // 修改日志\n\nvue.use(vuex);\n\nconst debug = process.env.NODE_ENV !== 'production'; // 开发环境中为true，否则为false\n\nexport default new vuex.Store({\n    state,\n    getters,\n    mutations,\n    actions,\n    modules: {\n        m1,\n        m2\n    },\n    plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改\n});\n")])])]),s("blockquote",[s("p",[t._v("最后将"),s("code",[t._v("store")]),t._v("实例挂载到"),s("code",[t._v("main.js")]),t._v("里面的"),s("code",[t._v("vue")]),t._v("上去就行了")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import store from './store/index.js';\n\nnew Vue({\n  el: '#app',\n  store,\n  render: h => h(App)\n});\n")])])]),s("blockquote",[s("p",[t._v("在"),s("code",[t._v("vue")]),t._v("组件中使用时，我们通常会使用"),s("code",[t._v("mapGetters")]),t._v("、"),s("code",[t._v("mapActions")]),t._v("、"),s("code",[t._v("mapMutations")]),t._v("，然后就可以按照"),s("code",[t._v("vue")]),t._v("调用"),s("code",[t._v("methods")]),t._v("和"),s("code",[t._v("computed")]),t._v("的方式去调用这些变量或函数，示例如")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import {mapGetters, mapMutations, mapActions} from 'vuex';\n\n/* 只写组件中的script部分 */\nexport default {\n    computed: {\n        ...mapGetters([\n            name,\n            age\n        ])\n    },\n    methods: {\n        ...mapMutations({\n            setName: 'SET_NAME',\n            setAge: 'SET_AGE'\n        }),\n        ...mapActions([\n            nameAsyn\n        ])\n    }\n};\n")])])]),s("h2",{attrs:{id:"二、modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、modules"}},[t._v("#")]),t._v(" 二、modules")]),t._v(" "),s("blockquote",[s("p",[t._v("在 src 目录下 , 新建一个 store 文件夹 , 然后在里面新建一个 index.js")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import Vue from 'vue'\nimport vuex from 'vuex'\nVue.use(vuex);\n\nexport default new vuex.Store({\n    state:{\n        show:false\n    }\n})\n")])])]),s("blockquote",[s("p",[t._v("在 "),s("code",[t._v("main.js")]),t._v(" 里的代码应该改成,在实例化 "),s("code",[t._v("Vue")]),t._v("对象时加入 "),s("code",[t._v("store")]),t._v(" 对象")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//vuex\nimport store from './store'\n\nnew Vue({\n  el: '#app',\n  router,\n  store,//使用store\n  template: '<App/>',\n  components: { App }\n})\n")])])]),s("blockquote",[s("p",[t._v("这样就把 "),s("code",[t._v("store")]),t._v(" 分离出去了 , 那么还有一个问题是 : 这里 "),s("code",[t._v("$store.state.show")]),t._v(" 无论哪个组件都可以使用 , 那组件多了之后 , 状态也多了 , 这么多状态都堆在 store 文件夹下的 "),s("code",[t._v("index.js")]),t._v(" 不好维护怎么办 ?")])]),t._v(" "),s("ul",[s("li",[t._v("我们可以使用 "),s("code",[t._v("vuex")]),t._v(" 的 "),s("code",[t._v("modules")]),t._v(" , 把 "),s("code",[t._v("store")]),t._v(" 文件夹下的 "),s("code",[t._v("index.js")]),t._v(" 改成")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import Vue from 'vue'\nimport vuex from 'vuex'\nVue.use(vuex);\n\nimport dialog_store from '../components/dialog_store.js';//引入某个store对象\n\nexport default new vuex.Store({\n    modules: {\n        dialog: dialog_store\n    }\n})\n")])])]),s("blockquote",[s("p",[t._v("这里我们引用了一个 "),s("code",[t._v("dialog_store.js")]),t._v(" , 在这个 "),s("code",[t._v("js")]),t._v("文件里我们就可以单独写 "),s("code",[t._v("dialog")]),t._v(" 组件的状态了")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export default {\n    state:{\n        show:false\n    }\n}\n")])])]),s("blockquote",[s("p",[t._v("做出这样的修改之后 , 我们将之前我们使用的 "),s("code",[t._v("$store.state.show")]),t._v(" 统统改为 "),s("code",[t._v("$store.state.dialog.show")]),t._v(" 即可")])]),t._v(" "),s("ul",[s("li",[t._v("如果还有其他的组件需要使用 "),s("code",[t._v("vuex")]),t._v(" , 就新建一个对应的状态文件 , 然后将他们加入 "),s("code",[t._v("store")]),t._v("文件夹下的 "),s("code",[t._v("index.js")]),t._v("文件中的 "),s("code",[t._v("modules")]),t._v(" 中")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("modules: {\n    dialog: dialog_store,\n    other: other,//其他组件\n}\n")])])]),s("h2",{attrs:{id:"三、mutations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、mutations"}},[t._v("#")]),t._v(" 三、mutations")]),t._v(" "),s("blockquote",[s("p",[t._v("对"),s("code",[t._v("vuex")]),t._v(" 的依赖仅仅只有一个 "),s("code",[t._v("$store.state.dialog.show")]),t._v(" 一个状态 , 但是如果我们要进行一个操作 , 需要依赖很多很多个状态 , 那管理起来又麻烦了")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("mutations")]),t._v("里的操作必须是同步的")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export default {\n    state:{//state\n        show:false\n    },\n    mutations:{\n        switch_dialog(state){//这里的state对应着上面这个state\n            state.show = state.show?false:true;\n            //你还可以在这里执行其他的操作改变state\n        }\n    }\n}\n")])])]),s("blockquote",[s("p",[t._v("使用 "),s("code",[t._v("mutations")]),t._v(" 后 , 原先我们的父组件可以改为")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<template>\n  <div id="app">\n    <a href="javascript:;" @click="$store.commit(\'switch_dialog\')">点击</a>\n    <t-dialog></t-dialog>\n  </div>\n</template>\n\n<script>\nimport dialog from \'./components/dialog.vue\'\nexport default {\n  components:{\n    "t-dialog":dialog\n  }\n}\n<\/script>\n')])])]),s("blockquote",[s("p",[t._v("使用 "),s("code",[t._v("$store.commit('switch_dialog')")]),t._v(" 来触发 "),s("code",[t._v("mutations")]),t._v(" 中的 "),s("code",[t._v("switch_dialog")]),t._v(" 方法")])]),t._v(" "),s("h2",{attrs:{id:"四、actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、actions"}},[t._v("#")]),t._v(" 四、actions")]),t._v(" "),s("blockquote",[s("p",[t._v("多个 "),s("code",[t._v("state")]),t._v(" 的操作 , 使用 "),s("code",[t._v("mutations")]),t._v("会来触发会比较好维护 , 那么需要执行多个 "),s("code",[t._v("mutations")]),t._v(" 就需要用 "),s("code",[t._v("action")]),t._v(" 了")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export default {\n    state:{//state\n        show:false\n    },\n    mutations:{\n        switch_dialog(state){//这里的state对应着上面这个state\n            state.show = state.show?false:true;\n            //你还可以在这里执行其他的操作改变state\n        }\n    },\n    actions:{\n        switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法\n            context.commit('switch_dialog');\n            //你还可以在这里触发其他的mutations方法\n        },\n    }\n}\n")])])]),s("blockquote",[s("p",[t._v("那么 , 在之前的父组件中 , 我们需要做修改 , 来触发 "),s("code",[t._v("action")]),t._v(" 里的 "),s("code",[t._v("switch_dialog")]),t._v(" 方法")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<template>\n  <div id="app">\n    <a href="javascript:;" @click="$store.dispatch(\'switch_dialog\')">点击</a>\n    <t-dialog></t-dialog>\n  </div>\n</template>\n\n<script>\nimport dialog from \'./components/dialog.vue\'\nexport default {\n  components:{\n    "t-dialog":dialog\n  }\n}\n<\/script>\n')])])]),s("ul",[s("li",[t._v("使用 "),s("code",[t._v("$store.dispatch('switch_dialog')")]),t._v(" 来触发 "),s("code",[t._v("action")]),t._v(" 中的 "),s("code",[t._v("switch_dialog")]),t._v(" 方法。")]),t._v(" "),s("li",[t._v("官方推荐 , 将异步操作放在 "),s("code",[t._v("action")]),t._v("中")])]),t._v(" "),s("h2",{attrs:{id:"五、getters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、getters"}},[t._v("#")]),t._v(" 五、getters")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("getters")]),t._v("和 "),s("code",[t._v("vue")]),t._v(" 中的"),s("code",[t._v("computed")]),t._v(" 类似 , 都是用来计算 "),s("code",[t._v("state")]),t._v(" 然后生成新的数据 ( 状态 ) 的")])]),t._v(" "),s("ul",[s("li",[t._v("假如我们需要一个与状态 "),s("code",[t._v("show")]),t._v(" 刚好相反的状态 , 使用 "),s("code",[t._v("vue")]),t._v(" 中的 "),s("code",[t._v("computed")]),t._v(" 可以这样算出来")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("computed(){\n    not_show(){\n        return !this.$store.state.dialog.show;\n    }\n}\n")])])]),s("blockquote",[s("p",[t._v("那么 , 如果很多很多个组件中都需要用到这个与 "),s("code",[t._v("show")]),t._v("刚好相反的状态 , 那么我们需要写很多很多个 "),s("code",[t._v("not_show")]),t._v(", 使用 "),s("code",[t._v("getters")]),t._v("就可以解决这种问题")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export default {\n    state:{//state\n        show:false\n    },\n    getters:{\n        not_show(state){//这里的state对应着上面这个state\n            return !state.show;\n        }\n    },\n    mutations:{\n        switch_dialog(state){//这里的state对应着上面这个state\n            state.show = state.show?false:true;\n            //你还可以在这里执行其他的操作改变state\n        }\n    },\n    actions:{\n        switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法\n            context.commit('switch_dialog');\n            //你还可以在这里触发其他的mutations方法\n        },\n    }\n}\n")])])]),s("blockquote",[s("p",[t._v("我们在组件中使用 "),s("code",[t._v("$store.state.dialog.show")]),t._v(" 来获得状态 "),s("code",[t._v("show")]),t._v(" , 类似的 , 我们可以使用 "),s("code",[t._v("$store.getters.not_show")]),t._v(" 来获得状态 "),s("code",[t._v("not_show")])])]),t._v(" "),s("ul",[s("li",[t._v("注意 : "),s("code",[t._v("$store.getters.not_show")]),t._v(" 的值是不能直接修改的 , 需要对应的 "),s("code",[t._v("state")]),t._v(" 发生变化才能修改")])]),t._v(" "),s("h2",{attrs:{id:"六、mapstate、mapgetters、mapactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、mapstate、mapgetters、mapactions"}},[t._v("#")]),t._v(" 六、mapState、mapGetters、mapActions")]),t._v(" "),s("blockquote",[s("p",[t._v("很多时候 , "),s("code",[t._v("$store.state.dialog.show")]),t._v(" 、"),s("code",[t._v("$store.dispatch('switch_dialog')")]),t._v(" 这种写法很不方便")])]),t._v(" "),s("ul",[s("li",[t._v("使用 "),s("code",[t._v("mapState")]),t._v("、"),s("code",[t._v("mapGetters")]),t._v("、"),s("code",[t._v("mapActions")]),t._v(" 就不会这么复杂了")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<template>\n  <el-dialog :visible.sync=\"show\"></el-dialog>\n</template>\n\n<script>\nimport {mapState} from 'vuex';\nexport default {\n  computed:{\n\n    //这里的三点叫做 : 扩展运算符\n    ...mapState({\n      show:state=>state.dialog.show\n    }),\n  }\n}\n<\/script>\n")])])]),s("p",[t._v("相当于")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<template>\n  <el-dialog :visible.sync=\"show\"></el-dialog>\n</template>\n\n<script>\nimport {mapState} from 'vuex';\nexport default {\n  computed:{\n    show(){\n        return this.$store.state.dialog.show;\n    }\n  }\n}\n<\/script>\n")])])]),s("blockquote",[s("p",[s("code",[t._v("mapGetters")]),t._v("、"),s("code",[t._v("mapActions")]),t._v(" 和 "),s("code",[t._v("mapState")]),t._v(" 类似 , "),s("code",[t._v("mapGetters")]),t._v(" 一般也写在 "),s("code",[t._v("computed")]),t._v(" 中 , "),s("code",[t._v("mapActions")]),t._v(" 一般写在 "),s("code",[t._v("methods")]),t._v(" 中")])])])}),[],!1,null,null,null);e.default=o.exports}}]);