(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1009:function(t,s,a){"use strict";a.r(s);var n=a(86),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"node-js-事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-事件循环"}},[t._v("#")]),t._v(" Node.js 事件循环")]),t._v(" "),a("p",[t._v("事件循环通俗来说就是一个无限的 while 循环。现在假设你对这个 while 循环什么都不了解，你一定会有以下疑问。")]),t._v(" "),a("ol",[a("li",[t._v("谁来启动这个循环过程，循环条件是什么？")]),t._v(" "),a("li",[t._v("循环的是什么任务呢？")]),t._v(" "),a("li",[t._v("循环的任务是否存在优先级概念？")]),t._v(" "),a("li",[t._v("什么进程或者线程来执行这个循环？")]),t._v(" "),a("li",[t._v("无限循环有没有终点？")])]),t._v(" "),a("p",[t._v("带着这些问题，我们先来看看 Node.js 官网提供的事件循环原理图。")]),t._v(" "),a("h2",{attrs:{id:"node-js-循环原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-循环原理"}},[t._v("#")]),t._v(" Node.js 循环原理")]),t._v(" "),a("p",[t._v("图 为 Node.js 官网的事件循环原理的核心流程图。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-repo.poetries.top/images/20210424180608.png",alt:""}})]),t._v(" "),a("p",[t._v("可以看到，这一流程包含 6 个阶段，每个阶段代表的含义如下所示。")]),t._v(" "),a("p",[t._v("（1）"),a("code",[t._v("timers")]),t._v("：本阶段执行已经被 "),a("code",[t._v("setTimeout() 和 setInterval()")]),t._v(" 调度的回调函数，简单理解就是由这两个函数启动的回调函数。")]),t._v(" "),a("p",[t._v("（2）"),a("code",[t._v("pending callbacks")]),t._v("：本阶段执行某些系统操作（如 TCP 错误类型）的回调函数。")]),t._v(" "),a("p",[t._v("（3）"),a("code",[t._v("idle、prepare")]),t._v("：仅系统内部使用，你只需要知道有这 2 个阶段就可以。")]),t._v(" "),a("p",[t._v("（4）"),a("code",[t._v("poll")]),t._v("：检索新的 I/O 事件，执行与 I/O 相关的回调，其他情况 Node.js 将在适当的时候在此阻塞。这也是最复杂的一个阶段，所有的事件循环以及回调处理都在这个阶段执行，接下来会详细分析这个过程。")]),t._v(" "),a("p",[t._v("（5）"),a("code",[t._v("check")]),t._v("：setImmediate() 回调函数在这里执行，setImmediate 并不是立马执行，而是当事件循环 poll 中没有新的事件处理时就执行该部分，如下代码所示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的事件循环的起点")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setImmediate 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 将会在 poll 阶段执行")]),t._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./test.conf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("encoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'read file success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 该部分将会在首次事件循环中执行")]),t._v("\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'poll callback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首次事件循环执行")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("在这一代码中有一个非常奇特的地方，就是 "),a("code",[t._v("setImmediate 会在 setTimeout 之后输出")]),t._v("。有以下几点原因：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("setTimeout")]),t._v(" 如果不设置时间或者设置时间为 0，则会默认为 `1ms；``")]),t._v(" "),a("li",[t._v("主流程执行完成后，超过 "),a("code",[t._v("1ms")]),t._v(" 时，会将 "),a("code",[t._v("setTimeout")]),t._v(" 回调函数逻辑插入到待执行回调函数 "),a("code",[t._v("poll")]),t._v(" 队列中；")]),t._v(" "),a("li",[t._v("由于当前 poll 队列中存在可执行回调函数，因此需要先执行完，待完全执行完成后，才会执行check：setImmediate。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("先执行回调函数，再执行 setImmediate")])])]),t._v(" "),a("p",[t._v("（6）"),a("code",[t._v("close callbacks")]),t._v("：执行一些关闭的回调函数，如 "),a("code",[t._v("socket.on('close', ...)")])]),t._v(" "),a("p",[t._v("以上就是循环原理的 6 个过程，针对上面的点，我们再来解答上面提出的 5 个疑问。")]),t._v(" "),a("h2",{attrs:{id:"运行起点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行起点"}},[t._v("#")]),t._v(" 运行起点")]),t._v(" "),a("p",[t._v("从图 1 中我们可以看出事件循环的起点是 "),a("code",[t._v("timers")]),t._v("，如下代码所示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在代码 "),a("code",[t._v("setTimeout")]),t._v(" 中的回调函数就是新一轮事件循环的起点，看到这里有很多同学会提出非常合理的疑问：“为什么会先输出 2 然后输出 1，不是说 timer 的回调函数是运行起点吗？”")]),t._v(" "),a("blockquote",[a("p",[t._v("当 Node.js 启动后，会初始化事件循环，处理已提供的输入脚本，它可能会先调用一些异步的 API、调度定时器，或者 "),a("code",[t._v("process.nextTick()")]),t._v("，然后再开始处理事件循环。因此可以这样理解，Node.js 进程启动后，就发起了一个新的事件循环，也就是事件循环的起点。")])]),t._v(" "),a("p",[t._v("总结来说，Node.js 事件循环的发起点有 4 个：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Node.js")]),t._v(" 启动后；")]),t._v(" "),a("li",[a("code",[t._v("setTimeout")]),t._v(" 回调函数；")]),t._v(" "),a("li",[a("code",[t._v("setInterval")]),t._v(" 回调函数；")]),t._v(" "),a("li",[t._v("也可能是一次 "),a("code",[t._v("I/O")]),t._v(" 后的回调函数。")])]),t._v(" "),a("h2",{attrs:{id:"node-js-事件循环-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-事件循环-2"}},[t._v("#")]),t._v(" Node.js 事件循环")]),t._v(" "),a("blockquote",[a("p",[t._v("在了解谁发起的事件循环后，我们再来回答第 2 个问题，即循环的是什么任务。在上面的核心流程中真正需要关注循环执行的就是 poll 这个过程。在 poll 过程中，主要处理的是异步 I/O 的回调函数，以及其他几乎所有的回调函数，异步 I/O 又分为网络 I/O 和文件 I/O。这是我们常见的代码逻辑部分的异步回调逻辑。")])]),t._v(" "),a("p",[a("code",[t._v("事件循环的主要包含微任务和宏任务。具体是怎么进行循环的呢")]),t._v("？如图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-repo.poetries.top/images/20210424181240.png",alt:""}})]),t._v(" "),a("p",[t._v("在解释上图之前，我们先来解释下两个概念，微任务和宏任务。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("微任务")]),t._v("：在 Node.js 中微任务包含 2 种——"),a("code",[t._v("process.nextTick")]),t._v(" 和 "),a("code",[t._v("Promise")]),t._v("。"),a("code",[t._v("微任务在事件循环中优先级是最高的")]),t._v("，因此在同一个事件循环中有其他任务存在时，优先执行微任务队列。并且"),a("code",[t._v("process.nextTick 和 Promise")]),t._v("也存在优先级，"),a("code",[t._v("process.nextTick")]),t._v(" 高于 "),a("code",[t._v("Promise")])]),t._v(" "),a("li",[a("strong",[t._v("宏任务")]),t._v("：在 Node.js 中宏任务包含 4 种——"),a("code",[t._v("setTimeout")]),t._v("、"),a("code",[t._v("setInterval")]),t._v("、"),a("code",[t._v("setImmediate")]),t._v(" 和 "),a("code",[t._v("I/O")]),t._v("。宏任务在微任务执行之后执行，因此在同一个事件循环周期内，如果既存在微任务队列又存在宏任务队列，那么优先将微任务队列清空，再执行宏任务队列")])]),t._v(" "),a("p",[t._v("我们可以看到有一个核心的主线程，它的执行阶段主要处理三个核心逻辑。")]),t._v(" "),a("ul",[a("li",[t._v("同步代码。")]),t._v(" "),a("li",[t._v("将异步任务插入到微任务队列或者宏任务队列中。")]),t._v(" "),a("li",[t._v("执行微任务或者宏任务的回调函数。在主线程处理回调函数的同时，也需要判断是否插入微任务和宏任务。根据优先级，先判断微任务队列是否存在任务，存在则先执行微任务，不存在则判断在宏任务队列是否有任务，有则执行。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首次事件循环执行")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 将会在新的事件循环中的阶段执行")]),t._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./test.conf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("encoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'read file success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的事件循环的起点")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 该部分将会在首次事件循环中执行")]),t._v("\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Promise callback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 执行 process.nextTick")]),t._v("\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick callback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首次事件循环执行")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("分析下上面代码的执行过程")]),t._v(" "),a("ul",[a("li",[t._v("第一个事件循环主线程发起，因此先执行同步代码，所以先输出 start，然后输出 end")]),t._v(" "),a("li",[t._v("第一个事件循环主线程发起，因此先执行同步代码，所以先输出 start，然后输出 end；")]),t._v(" "),a("li",[t._v("再从上往下分析，遇到微任务，插入微任务队列，遇到宏任务，插入宏任务队列，分析完成后，微任务队列包含："),a("code",[t._v("Promise.resolve 和 process.nextTick")]),t._v("，宏任务队列包含："),a("code",[t._v("fs.readFile 和 setTimeout")]),t._v("；")]),t._v(" "),a("li",[t._v("先执行微任务队列，但是根据优先级，先执行 "),a("code",[t._v("process.nextTick 再执行 Promise.resolve")]),t._v("，所以先输出 "),a("code",[t._v("nextTick callback")]),t._v(" 再输出 "),a("code",[t._v("Promise callback")]),t._v("；")]),t._v(" "),a("li",[t._v("再执行宏任务队列，根据"),a("code",[t._v("宏任务插入先后顺序执行 setTimeout 再执行 fs.readFile")]),t._v("，这里需要注意，先执行 "),a("code",[t._v("setTimeout")]),t._v(" 由于其回调时间较短，因此回调也先执行，并非是 "),a("code",[t._v("setTimeout")]),t._v(" 先执行所以才先执行回调函数，但是它执行需要时间肯定大于 "),a("code",[t._v("1ms")]),t._v("，所以虽然 "),a("code",[t._v("fs.readFile")]),t._v(" 先于"),a("code",[t._v("setTimeout")]),t._v(" 执行，但是 "),a("code",[t._v("setTimeout")]),t._v(" 执行更快，所以先输出 "),a("code",[t._v("setTimeout")]),t._v(" ，最后输出 "),a("code",[t._v("read file success")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出结果")]),t._v("\nstart\nend\nnextTick callback\nPromise callback\nsetTimeout\nread file success\n")])])]),a("blockquote",[a("p",[t._v("当微任务和宏任务又产生新的微任务和宏任务时，又应该如何处理呢？如下代码所示：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的事件循环的起点")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./config/test.conf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("encoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'read file sync success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 回调将会在新的事件循环之前")]),t._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./config/test.conf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("encoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'read file success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 该部分将会在首次事件循环中执行")]),t._v("\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'poll callback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首次事件循环执行")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在上面代码中，有 2 个宏任务和 1 个微任务，宏任务是 "),a("code",[t._v("setTimeout 和 fs.readFile")]),t._v("，微任务是 "),a("code",[t._v("Promise.resolve")]),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("整个过程优先执行主线程的第一个事件循环过程，所以先执行同步逻辑，先输出 2。")]),t._v(" "),a("li",[t._v("接下来执行微任务，输出 "),a("code",[t._v("poll callback")]),t._v("。")]),t._v(" "),a("li",[t._v("再执行宏任务中的 "),a("code",[t._v("fs.readFile 和 setTimeout")]),t._v("，由于 "),a("code",[t._v("fs.readFile")]),t._v(" 优先级高，先执行 "),a("code",[t._v("fs.readFile")]),t._v("。但是处理时间长于 "),a("code",[t._v("1ms")]),t._v("，因此会先执行 "),a("code",[t._v("setTimeout")]),t._v(" 的回调函数，输出 "),a("code",[t._v("1")]),t._v("。这个阶段在执行过程中又会产生新的宏任务 "),a("code",[t._v("fs.readFile")]),t._v("，因此又将该 "),a("code",[t._v("fs.readFile 插入宏任务队列")])]),t._v(" "),a("li",[t._v("最后由于只剩下宏任务了 "),a("code",[t._v("fs.readFile")]),t._v("，因此执行该宏任务，并等待处理完成后的回调，输出 "),a("code",[t._v("read file sync success")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\npoll callback\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nread file success\nread file sync success\n")])])]),a("blockquote",[a("p",[t._v("最后我们再来回答第 5 个问题，当所有的微任务和宏任务都清空的时候，虽然当前没有任务可执行了，但是也并不能代表循环结束了。因为可能存在当前还未回调的异步 I/O，所以这个循环是没有终点的，只要进程在，并且有新的任务存在，就会去执行。")])]),t._v(" "),a("h2",{attrs:{id:"单线程-多线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程-多线程"}},[t._v("#")]),t._v(" 单线程/多线程")]),t._v(" "),a("blockquote",[a("p",[t._v("相信在面试过程中，面试官经常会问这个问题“Node.js 是单线程的还是多线程的”。")])]),t._v(" "),a("p",[t._v("学完上面的内容后，你就可以回答了。")]),t._v(" "),a("blockquote",[a("p",[t._v("主线程是单线程执行的，但是 Node.js 存在多线程执行，多线程包括 setTimeout 和异步 I/O 事件。其实 Node.js 还存在其他的线程，包括垃圾回收、内存优化等。")])]),t._v(" "),a("p",[t._v("这里也可以解释我们前面提到的第 4 个问题，主要还是主线程来循环遍历当前事件。")]),t._v(" "),a("blockquote",[a("p",[t._v("你可以自行思考下这个问题：浏览器的事件循环原理和 Node.js 事件循环原理的区别以及联系有哪些点")])])])}),[],!1,null,null,null);s.default=e.exports}}]);