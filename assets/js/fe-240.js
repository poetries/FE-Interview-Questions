(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1264:function(_,v,e){"use strict";e.r(v);var o=e(52),t=Object(o.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"一、浏览器如何渲染网页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、浏览器如何渲染网页"}},[_._v("#")]),_._v(" 一、浏览器如何渲染网页")]),_._v(" "),e("p",[e("strong",[_._v("概述：浏览器渲染一共有五步")])]),_._v(" "),e("ol",[e("li",[_._v("处理 "),e("code",[_._v("HTML")]),_._v(" 并构建 "),e("code",[_._v("DOM")]),_._v(" 树。")]),_._v(" "),e("li",[_._v("处理 "),e("code",[_._v("CSS")]),_._v("构建 "),e("code",[_._v("CSSOM")]),_._v(" 树。")]),_._v(" "),e("li",[_._v("将 "),e("code",[_._v("DOM")]),_._v(" 与 "),e("code",[_._v("CSSOM")]),_._v(" 合并成一个渲染树。")]),_._v(" "),e("li",[_._v("根据渲染树来布局，计算每个节点的位置。")]),_._v(" "),e("li",[_._v("调用 "),e("code",[_._v("GPU")]),_._v(" 绘制，合成图层，显示在屏幕上")])]),_._v(" "),e("blockquote",[e("p",[_._v("第四步和第五步是最耗时的部分，这两步合起来，就是我们通常所说的渲染")])]),_._v(" "),e("p",[_._v("具体如下图过程如下图所示")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/gitee/2019/10/19.png",alt:"img"}})]),_._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/gitee/2019/10/20.png",alt:"img"}})]),_._v(" "),e("p",[e("strong",[_._v("渲染")])]),_._v(" "),e("ul",[e("li",[_._v("网页生成的时候，至少会渲染一次")]),_._v(" "),e("li",[_._v("在用户访问的过程中，还会不断重新渲染")])]),_._v(" "),e("blockquote",[e("p",[_._v("重新渲染需要重复之前的第四步(重新生成布局)+第五步(重新绘制)或者只有第五个步(重新绘制)")])]),_._v(" "),e("ul",[e("li",[_._v("在构建 "),e("code",[_._v("CSSOM")]),_._v(" 树时，会阻塞渲染，直至 "),e("code",[_._v("CSSOM")]),_._v("树构建完成。并且构建 "),e("code",[_._v("CSSOM")]),_._v(" 树是一个十分消耗性能的过程，所以应该尽量保证层级扁平，减少过度层叠，越是具体的 "),e("code",[_._v("CSS")]),_._v(" 选择器，执行速度越慢")]),_._v(" "),e("li",[_._v("当 "),e("code",[_._v("HTML")]),_._v(" 解析到 "),e("code",[_._v("script")]),_._v(" 标签时，会暂停构建 "),e("code",[_._v("DOM")]),_._v("，完成后才会从暂停的地方重新开始。也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 "),e("code",[_._v("JS")]),_._v(" 文件。并且"),e("code",[_._v("CSS")]),_._v("也会影响 "),e("code",[_._v("JS")]),_._v(" 的执行，只有当解析完样式表才会执行 "),e("code",[_._v("JS")]),_._v("，所以也可以认为这种情况下，"),e("code",[_._v("CSS")]),_._v(" 也会暂停构建 "),e("code",[_._v("DOM")])])]),_._v(" "),e("h2",{attrs:{id:"二、浏览器渲染五个阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、浏览器渲染五个阶段"}},[_._v("#")]),_._v(" 二、浏览器渲染五个阶段")]),_._v(" "),e("h3",{attrs:{id:"_2-1-第一步-解析html标签-构建dom树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-第一步-解析html标签-构建dom树"}},[_._v("#")]),_._v(" 2.1 第一步：解析HTML标签，构建DOM树")]),_._v(" "),e("blockquote",[e("p",[_._v("在这个阶段，引擎开始解析"),e("code",[_._v("html")]),_._v("，解析出来的结果会成为一棵"),e("code",[_._v("dom")]),_._v("树\n"),e("code",[_._v("dom")]),_._v("的目的至少有"),e("code",[_._v("2")]),_._v("个")])]),_._v(" "),e("ul",[e("li",[_._v("作为下个阶段渲染树状图的输入")]),_._v(" "),e("li",[_._v("成为网页和脚本的交互界面。(最常用的就是"),e("code",[_._v("getElementById")]),_._v("等等)")])]),_._v(" "),e("p",[e("strong",[_._v("当解析器到达script标签的时候，发生下面四件事情")])]),_._v(" "),e("ol",[e("li",[e("code",[_._v("html")]),_._v("解析器停止解析,")]),_._v(" "),e("li",[_._v("如果是外部脚本，就从外部网络获取脚本代码")]),_._v(" "),e("li",[_._v("将控制权交给"),e("code",[_._v("js")]),_._v("引擎，执行"),e("code",[_._v("js")]),_._v("代码")]),_._v(" "),e("li",[_._v("恢复"),e("code",[_._v("html")]),_._v("解析器的控制权")])]),_._v(" "),e("blockquote",[e("p",[_._v("由此可以得到第一个结论1")])]),_._v(" "),e("ul",[e("li",[_._v("由于"),e("code",[_._v("<script>")]),_._v("标签是阻塞解析的，将脚本放在网页尾部会加速代码渲染。")]),_._v(" "),e("li",[e("code",[_._v("defer")]),_._v("和"),e("code",[_._v("async")]),_._v("属性也能有助于加载外部脚本。")]),_._v(" "),e("li",[e("code",[_._v("defer")]),_._v("使得脚本会在"),e("code",[_._v("dom")]),_._v("完整构建之后执行；")]),_._v(" "),e("li",[e("code",[_._v("async")]),_._v("标签使得脚本只有在完全"),e("code",[_._v("available")]),_._v("才执行，并且是以非阻塞的方式进行的")])]),_._v(" "),e("h3",{attrs:{id:"_2-2-第二步-解析css标签-构建cssom树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-第二步-解析css标签-构建cssom树"}},[_._v("#")]),_._v(" 2.2 第二步：解析CSS标签，构建CSSOM树")]),_._v(" "),e("ul",[e("li",[_._v("我们已经看到"),e("code",[_._v("html")]),_._v("解析器碰到脚本后会做的事情，接下来我们看下"),e("code",[_._v("html")]),_._v("解析器碰到样式表会发生的情况")]),_._v(" "),e("li",[e("code",[_._v("js")]),_._v("会阻塞解析，因为它会修改文档("),e("code",[_._v("document")]),_._v(")。"),e("code",[_._v("css")]),_._v("不会修改文档的结构，如果这样的话，似乎看起来"),e("code",[_._v("css")]),_._v("样式不会阻塞浏览器"),e("code",[_._v("html")]),_._v("解析。但是事实上 "),e("code",[_._v("css")]),_._v("样式表是阻塞的。阻塞是指当"),e("code",[_._v("cssom")]),_._v("树建立好之后才会进行下一步的解析渲染")])]),_._v(" "),e("p",[e("strong",[_._v("通过以下手段可以减轻cssom带来的影响")])]),_._v(" "),e("ul",[e("li",[_._v("将"),e("code",[_._v("script")]),_._v("脚本放在页面底部")]),_._v(" "),e("li",[_._v("尽可能快的加载"),e("code",[_._v("css")]),_._v("样式表")]),_._v(" "),e("li",[_._v("将样式表按照"),e("code",[_._v("media type")]),_._v("和"),e("code",[_._v("media query")]),_._v("区分，这样有助于我们将"),e("code",[_._v("css")]),_._v("资源标记成非阻塞渲染的资源。")]),_._v(" "),e("li",[_._v("非阻塞的资源还是会被浏览器下载，只是优先级较低")])]),_._v(" "),e("h3",{attrs:{id:"_2-3-第三步-把dom和cssom组合成渲染树-render-tree"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-第三步-把dom和cssom组合成渲染树-render-tree"}},[_._v("#")]),_._v(" 2.3 第三步：把DOM和CSSOM组合成渲染树（render tree）")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/gitee/2019/10/21.png",alt:"img"}})]),_._v(" "),e("h3",{attrs:{id:"_2-4-第四步-在渲染树的基础上进行布局-计算每个节点的几何结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-第四步-在渲染树的基础上进行布局-计算每个节点的几何结构"}},[_._v("#")]),_._v(" 2.4 第四步：在渲染树的基础上进行布局，计算每个节点的几何结构")]),_._v(" "),e("blockquote",[e("p",[_._v("布局("),e("code",[_._v("layout")]),_._v(")：定位坐标和大小，是否换行，各种"),e("code",[_._v("position")]),_._v(", "),e("code",[_._v("overflow")]),_._v(", "),e("code",[_._v("z-index")]),_._v("属性")])]),_._v(" "),e("h3",{attrs:{id:"_2-5-调用-gpu-绘制-合成图层-显示在屏幕上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-调用-gpu-绘制-合成图层-显示在屏幕上"}},[_._v("#")]),_._v(" 2.5 调用 GPU 绘制，合成图层，显示在屏幕上")]),_._v(" "),e("blockquote",[e("p",[_._v("将渲染树的各个节点绘制到屏幕上，这一步被称为绘制"),e("code",[_._v("painting")])])]),_._v(" "),e("h2",{attrs:{id:"三、渲染优化相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、渲染优化相关"}},[_._v("#")]),_._v(" 三、渲染优化相关")]),_._v(" "),e("h3",{attrs:{id:"_3-1-load-和-domcontentloaded-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-load-和-domcontentloaded-区别"}},[_._v("#")]),_._v(" 3.1 Load 和 DOMContentLoaded 区别")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("Load")]),_._v(" 事件触发代表页面中的 "),e("code",[_._v("DOM")]),_._v("，"),e("code",[_._v("CSS")]),_._v("，"),e("code",[_._v("JS")]),_._v("，图片已经全部加载完毕。")]),_._v(" "),e("li",[e("code",[_._v("DOMContentLoaded")]),_._v(" 事件触发代表初始的 "),e("code",[_._v("HTML")]),_._v(" 被完全加载和解析，不需要等待 "),e("code",[_._v("CSS")]),_._v("，"),e("code",[_._v("JS")]),_._v("，图片加载")])]),_._v(" "),e("h3",{attrs:{id:"_3-2-图层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-图层"}},[_._v("#")]),_._v(" 3.2 图层")]),_._v(" "),e("blockquote",[e("p",[_._v("一般来说，可以把普通文档流看成一个图层。特定的属性可以生成一个新的图层。不同的图层渲染互不影响，所以对于某些频繁需要渲染的建议单独生成一个新图层，提高性能。但也不能生成过多的图层，会引起反作用。")])]),_._v(" "),e("p",[e("strong",[_._v("通过以下几个常用属性可以生成新图层")])]),_._v(" "),e("ul",[e("li",[e("code",[_._v("3D")]),_._v(" 变换："),e("code",[_._v("translate3d")]),_._v("、"),e("code",[_._v("translateZ")])]),_._v(" "),e("li",[e("code",[_._v("will-change")])]),_._v(" "),e("li",[e("code",[_._v("video")]),_._v("、"),e("code",[_._v("iframe")]),_._v(" 标签")]),_._v(" "),e("li",[_._v("通过动画实现的 "),e("code",[_._v("opacity")]),_._v(" 动画转换")]),_._v(" "),e("li",[e("code",[_._v("position: fixed")])])]),_._v(" "),e("h3",{attrs:{id:"_3-3-重绘-repaint-和回流-reflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-重绘-repaint-和回流-reflow"}},[_._v("#")]),_._v(" 3.3 重绘（Repaint）和回流（Reflow）")]),_._v(" "),e("blockquote",[e("p",[_._v("重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大")])]),_._v(" "),e("ul",[e("li",[_._v("重绘是当节点需要更改外观而不会影响布局的，比如改变 "),e("code",[_._v("color")]),_._v(" 就叫称为重绘")]),_._v(" "),e("li",[_._v("回流是布局或者几何属性需要改变就称为回流。")])]),_._v(" "),e("blockquote",[e("p",[_._v("回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流")])]),_._v(" "),e("p",[e("strong",[_._v("以下几个动作可能会导致性能问题")])]),_._v(" "),e("ul",[e("li",[_._v("改变 "),e("code",[_._v("window")]),_._v(" 大小")]),_._v(" "),e("li",[_._v("改变字体")]),_._v(" "),e("li",[_._v("添加或删除样式")]),_._v(" "),e("li",[_._v("文字改变")]),_._v(" "),e("li",[_._v("定位或者浮动")]),_._v(" "),e("li",[_._v("盒模型")])]),_._v(" "),e("p",[e("strong",[_._v("很多人不知道的是，重绘和回流其实和 Event loop 有关")])]),_._v(" "),e("ul",[e("li",[_._v("当 "),e("code",[_._v("Event loop")]),_._v(" 执行完"),e("code",[_._v("Microtasks")]),_._v(" 后，会判断 "),e("code",[_._v("document")]),_._v(" 是否需要更新。因为浏览器是 "),e("code",[_._v("60Hz")]),_._v(" 的刷新率，每 "),e("code",[_._v("16ms")]),_._v(" 才会更新一次。")]),_._v(" "),e("li",[_._v("然后判断是否有 "),e("code",[_._v("resize")]),_._v(" 或者 "),e("code",[_._v("scroll")]),_._v(" ，有的话会去触发事件，所以 "),e("code",[_._v("resize")]),_._v(" 和 "),e("code",[_._v("scroll")]),_._v(" 事件也是至少 "),e("code",[_._v("16ms")]),_._v("才会触发一次，并且自带节流功能。")]),_._v(" "),e("li",[_._v("判断是否触发了 "),e("code",[_._v("media query")])]),_._v(" "),e("li",[_._v("更新动画并且发送事件")]),_._v(" "),e("li",[_._v("判断是否有全屏操作事件")]),_._v(" "),e("li",[_._v("执行 "),e("code",[_._v("requestAnimationFrame")]),_._v(" 回调")]),_._v(" "),e("li",[_._v("执行 "),e("code",[_._v("IntersectionObserver")]),_._v(" 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好")]),_._v(" "),e("li",[_._v("更新界面")]),_._v(" "),e("li",[_._v("以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 "),e("code",[_._v("requestIdleCallback")]),_._v(" 回调")])]),_._v(" "),e("p",[e("strong",[_._v("常见的引起重绘的属性")])]),_._v(" "),e("ul",[e("li",[e("code",[_._v("color")])]),_._v(" "),e("li",[e("code",[_._v("border-style")])]),_._v(" "),e("li",[e("code",[_._v("visibility")])]),_._v(" "),e("li",[e("code",[_._v("background")])]),_._v(" "),e("li",[e("code",[_._v("text-decoration")])]),_._v(" "),e("li",[e("code",[_._v("background-image")])]),_._v(" "),e("li",[e("code",[_._v("background-position")])]),_._v(" "),e("li",[e("code",[_._v("background-repeat")])]),_._v(" "),e("li",[e("code",[_._v("outline-color")])]),_._v(" "),e("li",[e("code",[_._v("outline")])]),_._v(" "),e("li",[e("code",[_._v("outline-style")])]),_._v(" "),e("li",[e("code",[_._v("border-radius")])]),_._v(" "),e("li",[e("code",[_._v("outline-width")])]),_._v(" "),e("li",[e("code",[_._v("box-shadow")])]),_._v(" "),e("li",[e("code",[_._v("background-size")])])]),_._v(" "),e("h3",{attrs:{id:"_3-4-常见引起回流属性和方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-常见引起回流属性和方法"}},[_._v("#")]),_._v(" 3.4 常见引起回流属性和方法")]),_._v(" "),e("blockquote",[e("p",[_._v("任何会改变元素几何信息(元素的位置和尺寸大小)的操作，都会触发重排，下面列一些栗子")])]),_._v(" "),e("ul",[e("li",[_._v("添加或者删除可见的"),e("code",[_._v("DOM")]),_._v("元素；")]),_._v(" "),e("li",[_._v("元素尺寸改变——边距、填充、边框、宽度和高度")]),_._v(" "),e("li",[_._v("内容变化，比如用户在"),e("code",[_._v("input")]),_._v("框中输入文字")]),_._v(" "),e("li",[_._v("浏览器窗口尺寸改变——"),e("code",[_._v("resize")]),_._v("事件发生时")]),_._v(" "),e("li",[_._v("计算 "),e("code",[_._v("offsetWidth")]),_._v(" 和 "),e("code",[_._v("offsetHeight")]),_._v(" 属性")]),_._v(" "),e("li",[_._v("设置 "),e("code",[_._v("style")]),_._v(" 属性的值")])]),_._v(" "),e("p",[e("strong",[_._v("回流影响的范围")])]),_._v(" "),e("blockquote",[e("p",[_._v("由于浏览器渲染界面是基于流失布局模型的，所以触发重排时会对周围DOM重新排列，影响的范围有两种")])]),_._v(" "),e("ul",[e("li",[_._v("全局范围：从根节点"),e("code",[_._v("html")]),_._v("开始对整个渲染树进行重新布局。")]),_._v(" "),e("li",[_._v("局部范围：对渲染树的某部分或某一个渲染对象进行重新布局")])]),_._v(" "),e("p",[e("strong",[_._v("全局范围回流")])]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('<body>\n  <div class="hello">\n    <h4>hello</h4>\n    <p><strong>Name:</strong>BDing</p>\n    <h5>male</h5>\n    <ol>\n      <li>coding</li>\n      <li>loving</li>\n    </ol>\n  </div>\n</body>\n')])])]),e("blockquote",[e("p",[_._v("当"),e("code",[_._v("p")]),_._v("节点上发生"),e("code",[_._v("reflow")]),_._v("时，"),e("code",[_._v("hello")]),_._v("和"),e("code",[_._v("body")]),_._v("也会重新渲染，甚至"),e("code",[_._v("h5")]),_._v("和"),e("code",[_._v("ol")]),_._v("都会收到影响")])]),_._v(" "),e("p",[e("strong",[_._v("局部范围回流")])]),_._v(" "),e("blockquote",[e("p",[_._v("用局部布局来解释这种现象：把一个"),e("code",[_._v("dom")]),_._v("的宽高之类的几何信息定死，然后在"),e("code",[_._v("dom")]),_._v("内部触发重排，就只会重新渲染该"),e("code",[_._v("dom")]),_._v("内部的元素，而不会影响到外界")])]),_._v(" "),e("h3",{attrs:{id:"_3-5-减少重绘和回流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-减少重绘和回流"}},[_._v("#")]),_._v(" 3.5 减少重绘和回流")]),_._v(" "),e("blockquote",[e("p",[_._v("使用 "),e("code",[_._v("translate")]),_._v(" 替代 "),e("code",[_._v("top")])])]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("<div class=\"test\"></div>\n<style>\n    .test {\n        position: absolute;\n        top: 10px;\n        width: 100px;\n        height: 100px;\n        background: red;\n    }\n</style>\n<script>\n    setTimeout(() => {\n        // 引起回流\n        document.querySelector('.test').style.top = '100px'\n    }, 1000)\n<\/script>\n")])])]),e("ul",[e("li",[_._v("使用 "),e("code",[_._v("visibility")]),_._v(" 替换 "),e("code",[_._v("display: none")]),_._v(" ，因为前者只会引起重绘，后者会引发回流（改变了布局）")]),_._v(" "),e("li",[_._v("把 "),e("code",[_._v("DOM")]),_._v(" 离线后修改，比如：先把 "),e("code",[_._v("DOM")]),_._v(" 给 "),e("code",[_._v("display:none")]),_._v(" (有一次 "),e("code",[_._v("Reflow)")]),_._v("，然后你修改"),e("code",[_._v("100")]),_._v("次，然后再把它显示出来")]),_._v(" "),e("li",[_._v("不要把 "),e("code",[_._v("DOM")]),_._v(" 结点的属性值放在一个循环里当成循环里的变量")])]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("for(let i = 0; i < 1000; i++) {\n    // 获取 offsetTop 会导致回流，因为需要去获取正确的值\n    console.log(document.querySelector('.test').style.offsetTop)\n}\n")])])]),e("ul",[e("li",[_._v("不要使用 "),e("code",[_._v("table")]),_._v(" 布局，可能很小的一个小改动会造成整个 "),e("code",[_._v("table")]),_._v(" 的重新布局")]),_._v(" "),e("li",[_._v("动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 "),e("code",[_._v("requestAnimationFrame")])]),_._v(" "),e("li",[e("code",[_._v("CSS")]),_._v("选择符从右往左匹配查找，避免 "),e("code",[_._v("DOM")]),_._v("深度过深")]),_._v(" "),e("li",[_._v("将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 "),e("code",[_._v("video")]),_._v("标签，浏览器会自动将该节点变为图层。")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/gitee/2019/10/22.png",alt:"img"}})]),_._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/gitee/2019/10/23.png",alt:"img"}})])])}),[],!1,null,null,null);v.default=t.exports}}]);