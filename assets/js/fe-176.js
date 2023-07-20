(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1204:function(t,a,s){"use strict";s.r(a);var n=s(52),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("在 V8 引擎中 JavaScript 代码的运行过程主要分成三个阶段")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("语法分析阶段")]),t._v("。 该阶段会对代码进行语法分析，检查是否有语法错误（SyntaxError），如果发现语法错误，会在控制台抛出异常并终止执行")]),t._v(" "),s("li",[s("strong",[t._v("编译阶段")]),t._v("。 该阶段会进行执行上下文（Execution Context）的创建，包括创建变量对象、建立作用域链、确定 this 的指向等。每进入一个不同的运行环境时，V8 引擎都会创建一个新的执行上下文。")]),t._v(" "),s("li",[s("strong",[t._v("执行阶段")]),t._v("。 将编译阶段中创建的执行上下文压入调用栈，并成为正在运行的执行上下文，代码执行结束后，将其弹出调用栈")])]),t._v(" "),s("blockquote",[s("p",[t._v("其中，语法分析阶段属于编译器通用内容，就不再赘述。前面提到的执行环境、词法环境、作用域、执行上下文等内容都是在编译和执行阶段中产生的概念。")])]),t._v(" "),s("p",[t._v("JavaScript 在运行过程中会产生一个调用栈，调用栈遵循 LIFO（先进后出，后进先出）")]),t._v(" "),s("h2",{attrs:{id:"执行上下文的创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文的创建"}},[t._v("#")]),t._v(" 执行上下文的创建")]),t._v(" "),s("blockquote",[s("p",[t._v("执行上下文的创建离不开 JavaScript 的运行环境，JavaScript 运行环境包括全局环境、函数环境和eval，其中全局环境和函数环境的创建过程如下")])]),t._v(" "),s("ul",[s("li",[t._v("第一次载入 JavaScript 代码时，首先会创建一个全局环境。全局环境位于最外层，直到应用程序退出后（例如关闭浏览器和网页）才会被销毁")]),t._v(" "),s("li",[t._v("每个函数都有自己的运行环境，当函数被调用时，则会进入该函数的运行环境。当该环境中的代码被全部执行完毕后，该环境会被销毁。不同的函数运行环境不一样，即使是同一个函数，在被多次调用时也会创建多个不同的函数环境")])]),t._v(" "),s("blockquote",[s("p",[t._v("在不同的运行环境中，变量和函数可访问的其他数据范围不同，环境的行为（比如创建和销毁）也有所区别。而每进入一个不同的运行环境时，JavaScript 都会创建一个新的执行上下文，该过程包括：")])]),t._v(" "),s("ul",[s("li",[t._v("建立作用域链（Scope Chain）；")]),t._v(" "),s("li",[t._v("创建变量对象（Variable Object，简称 VO）；")]),t._v(" "),s("li",[t._v("确定 this 的指向。")])]),t._v(" "),s("blockquote",[s("p",[t._v("由于建立作用域链过程中会涉及变量对象的概念，因此我们先来看看变量对象的创建，再看建立作用域链和确定 this 的指向")])]),t._v(" "),s("h2",{attrs:{id:"创建变量对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建变量对象"}},[t._v("#")]),t._v(" 创建变量对象")]),t._v(" "),s("blockquote",[s("p",[t._v("什么是变量对象呢？每个执行上下文都会有一个关联的变量对象，该对象上会保存这个上下文中定义的所有变量和函数")])]),t._v(" "),s("p",[t._v("而在浏览器中，全局环境的变量对象是window对象，因此所有的全局变量和函数都是作为window对象的属性和方法创建的。相应的，在 Node 中全局环境的变量对象则是global对象")]),t._v(" "),s("p",[t._v("创建变量对象将会创建arguments对象（仅函数环境下），同时会检查当前上下文的函数声明和变量声明。")]),t._v(" "),s("ul",[s("li",[t._v("对于变量声明：此时会给变量分配内存，并将其初始化为undefined（该过程只进行定义声明，执行阶段才执行赋值语句）")]),t._v(" "),s("li",[t._v("对于函数声明：此时会在内存里创建函数对象，并且直接初始化为该函数对象。")])]),t._v(" "),s("blockquote",[s("p",[t._v("上述变量声明和函数声明的处理过程，便是我们常说的变量提升和函数提升，其中函数声明提升会优先于变量声明提升。因为变量提升容易带来变量在预期外被覆盖掉的问题，同时还可能导致本应该被销毁的变量没有被销毁等情况。因此 ES6 中引入了let和const关键字，从而使 JavaScript 也拥有了块级作用域。")])]),t._v(" "),s("p",[t._v("JavaScript 采用的是词法作用域（Lexical Scoping），也就是静态作用域。"),s("code",[t._v("词法作用域中的变量，在编译过程中会产生一个确定的作用域")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("词法作用域中的变量，在编译过程中会产生一个确定的作用域，这个作用域即当前的执行上下文，在 ES5 后我们使用词法环境（Lexical Environment）替代作用域来描述该执行上下文。因此，词法环境可理解为我们常说的作用域，同样也指当前的执行上下文（注意，是当前的执行上下文）")])]),t._v(" "),s("p",[t._v("在 JavaScript 中，词法环境又分为词法环境（Lexical Environment）和变量环境（Variable Environment）两种，其中：")]),t._v(" "),s("ul",[s("li",[t._v("变量环境用来记录"),s("code",[t._v("var/function")]),t._v("等变量声明")]),t._v(" "),s("li",[t._v("词法环境是用来记录"),s("code",[t._v("let/const/class")]),t._v("等变量声明")])]),t._v(" "),s("blockquote",[s("p",[t._v("也就是说，创建变量过程中会进行函数提升和变量提升，JavaScript 会通过词法环境来记录函数和变量声明。通过使用两个词法环境（而不是一个）分别记录不同的变量声明内容，JavaScript 实现了支持块级作用域的同时，不影响原有的变量声明和函数声明")])]),t._v(" "),s("p",[t._v("这就是创建变量的过程，它属于执行上下文创建中的一环。创建变量的过程会产生作用域，作用域也被称为词法环境，那词法环境是由什么组成的呢")]),t._v(" "),s("h2",{attrs:{id:"建立作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立作用域链"}},[t._v("#")]),t._v(" 建立作用域链")]),t._v(" "),s("p",[t._v("作用域链，顾名思义，就是将各个作用域通过某种方式连接在一起。")]),t._v(" "),s("blockquote",[s("p",[t._v("前面说过，作用域就是词法环境，而词法环境由两个成员组成。")])]),t._v(" "),s("ul",[s("li",[t._v("环境记录（Environment Record）：用于记录自身词法环境中的变量对象。")]),t._v(" "),s("li",[t._v("外部词法环境引用（Outer Lexical Environment）：记录外层词法环境的引用。")])]),t._v(" "),s("blockquote",[s("p",[t._v("通过外部词法环境的引用，作用域可以层层拓展，建立起从里到外延伸的一条作用域链。当某个变量无法在自身词法环境记录中找到时，可以根据外部词法环境引用向外层进行寻找，直到最外层的词法环境中外部词法环境引用为null，这便是作用域链的变量查询。")])]),t._v(" "),s("p",[t._v("那么，这个外部词法环境引用又是怎样指向外层呢？我们来看看 JavaScript 中是如何通过外部词法环境引用来创建作用域的。")]),t._v(" "),s("p",[t._v("为了方便描述，我们将 JavaScript 代码运行过程分为定义期和执行期，前面提到的编译阶段则属于定义期。")]),t._v(" "),s("p",[t._v("来看一个例子，我们定义了全局函数foo，并在该函数中定义了函数bar：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("前面我们说到，JavaScript 使用的是静态作用域，因此函数的作用域在定义期已经决定了。在上面的例子中，全局函数foo创建了一个foo的[[scope]]属性，包含了全局[[scope]]：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("foo[[scope]] = [globalContext];\n")])])]),s("p",[t._v("而当我们执行foo()时，也会分别进入foo函数的定义期和执行期")]),t._v(" "),s("p",[t._v("在foo函数的定义期时，函数bar的[[scope]]将会包含全局[[scope]]和foo的[[scope]]：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("bar[[scope]] = [fooContext, globalContext];\n")])])]),s("p",[t._v("运行上述代码，我们可以在控制台看到符合预期的输出：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s.poetries.work/images/20210719135804.png",alt:""}})]),t._v(" "),s("p",[t._v("可以看到：")]),t._v(" "),s("ul",[s("li",[t._v("foo的"),s("code",[t._v("[[scope]]")]),t._v("属性包含了全局"),s("code",[t._v("[[scope]]")])]),t._v(" "),s("li",[t._v("bar的"),s("code",[t._v("[[scope]]")]),t._v("将会包含全局"),s("code",[t._v("[[scope]]")]),t._v("和foo的"),s("code",[t._v("[[scope]]")])])]),t._v(" "),s("blockquote",[s("p",[t._v("也就是说，JavaScript 会通过外部词法环境引用来创建变量对象的一个作用域链，从而保证对执行环境有权访问的变量和函数的有序访问。除了创建作用域链之外，在这个过程中还会对创建的变量对象做一些处理")])]),t._v(" "),s("blockquote",[s("p",[t._v("编译阶段会进行变量对象（VO）的创建，该过程会进行函数声明和变量声明，这时候变量的值被初始化为 undefined。在代码进入执行阶段之后，JavaScript 会对变量进行赋值，此时变量对象会转为活动对象（Active Object，简称 AO），转换后的活动对象才可被访问，这就是 VO -> AO 的过程")])]),t._v(" "),s("p",[t._v("为了更好地理解这个过程，我们来看个例子，我们在foo函数中定义了变量b、函数c和函数表达式变量d：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n​\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在执行"),s("code",[t._v("foo(1)")]),t._v("时，首先进入定义期，此时：")]),t._v(" "),s("ul",[s("li",[t._v("参数变量"),s("code",[t._v("a")]),t._v("的值为"),s("code",[t._v("1")])]),t._v(" "),s("li",[t._v("变量"),s("code",[t._v("b")]),t._v("和"),s("code",[t._v("d")]),t._v("初始化为"),s("code",[t._v("undefined")])]),t._v(" "),s("li",[t._v("函数"),s("code",[t._v("c")]),t._v("创建函数并初始化")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("arguments")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" reference to "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("d")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("进入执行期之后，会执行赋值语句进行赋值，此时变量b和d会被赋值为 2 和函数表达式：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("arguments")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" reference to "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("d")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" reference to FunctionExpression "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这就是 VO -> AO 过程。")]),t._v(" "),s("ul",[s("li",[t._v("在定义期（编译阶段）：该对象值仍为"),s("code",[t._v("undefined")]),t._v("，且处于不可访问的状态。")]),t._v(" "),s("li",[t._v("进入执行期（执行阶段）："),s("code",[t._v("VO")]),t._v(" 被激活，其中变量属性会进行赋值。")])]),t._v(" "),s("blockquote",[s("p",[t._v("实际上在执行的时候，除了 "),s("code",[t._v("VO")]),t._v(" 被激活，活动对象还会添加函数执行时传入的参数和"),s("code",[t._v("arguments")]),t._v("这个特殊对象，因此 "),s("code",[t._v("AO")]),t._v(" 和 "),s("code",[t._v("VO")]),t._v(" 的关系可以用以下关系来表达：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("AO = VO + function parameters + arguments\n")])])]),s("p",[t._v("现在，我们知道作用域链是在进入代码的执行阶段时，通过外部词法环境引用来创建的。总结如下：")]),t._v(" "),s("ul",[s("li",[t._v("在编译阶段，JavaScript 在创建执行上下文的时候会先创建变量对象（"),s("code",[t._v("VO")]),t._v("）；")]),t._v(" "),s("li",[t._v("在执行阶段，变量对象（VO）被激活为活动对象（ AO），函数内部的变量对象通过外部词法环境的引用创建作用域链。")])]),t._v(" "),s("p",[t._v("虽然 JavaScript 代码的运行过程可以分为语法分析阶段、编译阶段和执行阶段，但由于在 JavaScript 引擎中是通过调用栈的方式来执行 JavaScript 代码的，因此并不存在“整个 JavaScript 运行过程只会在某个阶段中”这一说法，比如上面例子中bar函数的编译阶段，其实是在foo函数的执行阶段中")]),t._v(" "),s("blockquote",[s("p",[t._v("一般来说，当函数执行结束之后，执行期上下文将被销毁（作用域链和活动对象均被销毁）。但有时候我们想要保留其中一些变量对象，不想被销毁，此时就会使用到闭包")])]),t._v(" "),s("p",[t._v("我们已经知道，通过作用域链，我们可以在函数内部可以直接读取外部以及全局变量，但外部环境是无法访问内部函数里的变量。比如下面的例子中，foo函数中定义了变量a")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),s("p",[t._v("我们在全局环境下无法访问函数foo中的变量a，这是因为全局函数的作用域链里，不含有函数foo内的作用域。")]),t._v(" "),s("p",[t._v("如果我们想要访问内部函数的变量，可以通过函数foo中的函数bar返回变量a，并将函数bar返回，这样我们在全局环境中也可以通过调用函数foo返回的函数bar，来访问变量a：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),s("p",[t._v("前面我们说到，当函数执行结束之后，执行期上下文将被销毁，其中包括作用域链和激活对象。那么，在这个例子中，当b()执行时，foo函数上下文包括作用域都已经被销毁了，为什么foo作用域下的a依然可以被访问到呢？")]),t._v(" "),s("p",[t._v("这是因为bar函数引用了foo函数变量对象中的值，此时即使创建bar函数的foo函数执行上下文被销毁了，但它的变量对象依然会保留在 JavaScript 内存中，bar函数依然可以通过bar函数的作用域链找到它，并进行访问。这便是我们常说的闭包，即使创建它的上下文已经销毁，它仍然被保留在内存中。")]),t._v(" "),s("blockquote",[s("p",[t._v("闭包使得我们可以从外部读取局部变量，在大多数项目中都会被使用到，常见的用途包括：")])]),t._v(" "),s("ul",[s("li",[t._v("用于从外部读取其他函数内部变量的函数；")]),t._v(" "),s("li",[t._v("可以使用闭包来模拟私有方法；")]),t._v(" "),s("li",[t._v("让这些变量的值始终保持在内存中。")])]),t._v(" "),s("p",[t._v("需要注意的是，我们在使用闭包的时候，需要及时清理不再使用到的变量，否则可能导致内存泄漏问题。")]),t._v(" "),s("blockquote",[s("p",[t._v("执行上下文的创建过程中还会做的一件事：确定this的指向")])]),t._v(" "),s("h2",{attrs:{id:"确定-this-的指向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#确定-this-的指向"}},[t._v("#")]),t._v(" 确定 this 的指向")]),t._v(" "),s("blockquote",[s("p",[t._v("在 JavaScript 中，this指向执行当前代码对象的所有者，可简单理解为this指向最后调用当前代码的那个对象")])]),t._v(" "),s("p",[s("strong",[t._v("根据 JavaScript 中函数的调用方式不同，this的指向分为以下情况。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s.poetries.work/images/20210719142723.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("可以看到，this在不同的情况下会有不同的指向，在 ES6 箭头函数还没出现之前，为了能正确获取某个运行环境下this对象，我们常常会使用var that = this;、var self = this;这样的代码将变量分配给this，便于使用。这种方式降低了代码可读性，因此如今这种做法不再被提倡，通过正确使用箭头函数，我们可以更好地管理作用域")])])])}),[],!1,null,null,null);a.default=e.exports}}]);