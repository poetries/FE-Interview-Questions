(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1114:function(v,_,t){"use strict";t.r(_);var a=t(52),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"浏览器的内部结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的内部结构"}},[v._v("#")]),v._v(" 浏览器的内部结构")]),v._v(" "),t("blockquote",[t("p",[v._v("从结构上来说，浏览器主要包括了八个子系统：用户界面、浏览器引擎、渲染引擎、网络子系统、JavaScript 解释器、XML 解析器、显示后端、数据持久性子系统")])]),v._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210719174639.png",loading:"lazy"}})]),v._v(" "),t("p",[v._v("这些子系统组合构成了我们的浏览器。页面的加载和渲染过程，离不开网络子系统、渲染引擎、JavaScript 解释器和浏览器引擎。")]),v._v(" "),t("p",[v._v("以前端开发最常使用的 Chrome 浏览器为例， Chrome 浏览器是使用多进程架构的方式来管理这些子系统。")]),v._v(" "),t("h2",{attrs:{id:"chrome-多进程架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrome-多进程架构"}},[v._v("#")]),v._v(" Chrome 多进程架构")]),v._v(" "),t("p",[v._v("Chrome 浏览器采用的多进程架构，主要包括四个进程")]),v._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210719174739.png",loading:"lazy"}})]),v._v(" "),t("ul",[t("li",[v._v("浏览器进程：选项卡之外的所有内容都由浏览器进程处理，浏览器进程则主要用于控制和处理用户可见的 UI 部分（包括地址栏，书签，后退和前进按钮）和用户不可见的隐藏部分（例如网络请求和文件访问）")]),v._v(" "),t("li",[v._v("GPU 进程：该进程用于完成图像处理任务，同时还支持分解成多个进程进行处理")]),v._v(" "),t("li",[v._v("渲染器进程：Chrome 浏览器中支持多个选项卡，其中每个选项卡在单独的渲染器进程中运行，渲染器进程主要用于控制和处理选项卡中的网站内容显示")]),v._v(" "),t("li",[v._v("插件进程：管理 Chrome 浏览器中的各个插件")])]),v._v(" "),t("blockquote",[t("p",[v._v("对于“在浏览器的地址栏中输入 URL，按下回车键，到浏览器渲染页面”这个过程，浏览器内部会通过浏览器进程和渲染器进程，进行很多交互逻辑，最终才得以将页面内容显示在屏幕上")])]),v._v(" "),t("p",[v._v("其中，浏览器进程和渲染器进程同样支持多线程，包括以下这些线程。")]),v._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210719174959.png",loading:"lazy"}})]),v._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210719175009.png",loading:"lazy"}})]),v._v(" "),t("p",[v._v("这些线程其实并不陌生，在前面介绍的内容中有提到，比如：")]),v._v(" "),t("ul",[t("li",[v._v("在页面的加载过程中，涉及 GUI 渲染线程与 JavaScript 引擎线程间的互斥关系，因此页面中的"),t("code",[v._v("<script>")]),v._v("和"),t("code",[v._v("<style>")]),v._v("元素设计不合理会影响页面加载速度；")]),v._v(" "),t("li",[v._v("在 UI 线程、网络线程、存储线程、浏览器事件触发线程、浏览器定时器触发线程中，I/O 事件通过异步任务完成时触发的函数回调，解决了单线程的 Javascript 阻塞问题。")])]),v._v(" "),t("p",[v._v("下面我们再来看下 Chrome 浏览器中页面的渲染过程，包括浏览器进程和线程如何通信来显示页面。")]),v._v(" "),t("h2",{attrs:{id:"浏览器中页面的渲染过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中页面的渲染过程"}},[v._v("#")]),v._v(" 浏览器中页面的渲染过程")]),v._v(" "),t("p",[v._v("首先我们将浏览器中页面的渲染过程分为两部分。")]),v._v(" "),t("ul",[t("li",[v._v("页面导航：用户输入 URL，浏览器进程进行请求和准备处理。")]),v._v(" "),t("li",[v._v("页面渲染：获取到相关资源后，渲染器进程负责选项卡内部的渲染处理。")])]),v._v(" "),t("h3",{attrs:{id:"_1-页面导航过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-页面导航过程"}},[v._v("#")]),v._v(" 1. 页面导航过程")]),v._v(" "),t("p",[v._v("当用户在地址栏中输入内容时，浏览器内部会进行以下处理。")]),v._v(" "),t("ul",[t("li",[v._v("首先浏览器进程的 UI 线程会进行处理：如果是 URI，则会发起网络请求来获取网站内容；如果不是，则进入搜索引擎。")]),v._v(" "),t("li",[v._v("如果需要发起网络请求，请求过程由网络线程来完成。HTTP 请求响应如果是 HTML 文件，则将数据传递到渲染器进程；如果是其他文件则意味着这是下载请求，此时会将数据传递到下载管理器。")]),v._v(" "),t("li",[v._v("如果请求响应为 HTML 内容，此时浏览器应导航到请求站点，网络线程便通知 UI 线程数据准备就绪。")]),v._v(" "),t("li",[v._v("接下来，UI 线程会寻找一个渲染器进程来进行网页渲染。当数据和渲染器进程都准备好后，HTML 数据通过 IPC 从浏览器进程传递到渲染器进程中。")]),v._v(" "),t("li",[v._v("渲染器进程接收 HTML 数据后，将开始加载资源并渲染页面。")]),v._v(" "),t("li",[v._v("渲染器进程完成渲染后，通过 IPC 通知浏览器进程页面已加载。")])]),v._v(" "),t("p",[v._v("以上是用户在地址栏输入网站地址，到页面开始渲染的整体过程。为了方便理解，我帮你梳理了一个流程图：")]),v._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210719175336.png",loading:"lazy"}})]),v._v(" "),t("p",[v._v("如果当前页面跳转到其他网站，浏览器将调用一个单独的渲染进程来处理新导航，同时保留当前渲染进程来处理像unload这类事件。")]),v._v(" "),t("p",[v._v("在上面的过程中可以看到，页面导航主要依赖浏览器进程。其中，上述过程中的步骤 5 便是页面的渲染部分，该过程同样依赖渲染器进程，我们一起来看看")]),v._v(" "),t("h3",{attrs:{id:"_2-页面渲染过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-页面渲染过程"}},[v._v("#")]),v._v(" 2. 页面渲染过程")]),v._v(" "),t("p",[v._v("前面说过，渲染器进程负责选项卡内部发生的所有事情，它的核心工作是将 HTML、CSS 和 JavaScript 转换为可交互的页面。")]),v._v(" "),t("p",[v._v("整体上，渲染器进程渲染页面的流程基本如下。")]),v._v(" "),t("ul",[t("li",[v._v("解析(Parser)：解析 "),t("code",[v._v("HTML/CSS/JavaScript")]),v._v(" 代码。")]),v._v(" "),t("li",[v._v("布局(Layout)：定位坐标和大小、是否换行、各种"),t("code",[v._v("position/overflow/z-index")]),v._v("属性等计算。")]),v._v(" "),t("li",[v._v("绘制(Paint)：判断元素渲染层级顺序。")]),v._v(" "),t("li",[v._v("光栅化(Raster)：将计算后的信息转换为屏幕上的像素。")])]),v._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210719175506.png",loading:"lazy"}})]),v._v(" "),t("p",[t("strong",[v._v("1. 解析")])]),v._v(" "),t("blockquote",[t("p",[v._v("渲染器进程的主线程会解析以下内容：")])]),v._v(" "),t("ul",[t("li",[v._v("解析 HTML 内容，产生一个 DOM 节点树；")]),v._v(" "),t("li",[v._v("解析 CSS，产生 CSS 规则树；")]),v._v(" "),t("li",[v._v("解析 Javascript 脚本，由于 Javascript 脚本可以通过 DOM API 和 CSSOM API 来操作 DOM 节点树和 CSS 规则树，因此该过程中会等待 JavaScript 运行完成才继续解析 HTML")])]),v._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210719175830.png",loading:"lazy"}})]),v._v(" "),t("blockquote",[t("p",[v._v("解析完成后，我们得到了 DOM 节点树和 CSS 规则树，布局过程便是通过 DOM 节点树和 CSS 规则树来构造渲染树（Render Tree）")])]),v._v(" "),t("p",[t("strong",[v._v("2. 布局")])]),v._v(" "),t("p",[v._v("通过解析之后，渲染器进程知道每个节点的结构和样式，但如果需要渲染页面，浏览器还需要进行布局，布局过程便是我们常说的渲染树的创建过程。")]),v._v(" "),t("p",[v._v("在这个过程中，像"),t("code",[v._v("header")]),v._v("或"),t("code",[v._v("display:none")]),v._v("的元素，它们会存在 DOM 节点树中，但不会被添加到渲染树里。")]),v._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210719175910.png",loading:"lazy"}})]),v._v(" "),t("p",[v._v("布局完成后，将会进入绘制环节")]),v._v(" "),t("p",[t("strong",[v._v("3. 绘制")])]),v._v(" "),t("p",[v._v("在绘制步骤中，渲染器主线程会遍历渲染树来创建绘制记录。")]),v._v(" "),t("blockquote",[t("p",[v._v("需要注意的是，如果渲染树发生了改变，则渲染器会触发重绘（Repaint）和重排（Reflow）。")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("重绘")]),v._v("：屏幕的一部分要重画，比如某个 CSS 的背景色变了，但是元素的几何尺寸没有变。")]),v._v(" "),t("li",[t("strong",[v._v("重排")]),v._v("：元素的几何尺寸变了（渲染树的一部分或全部发生了变化），需要重新验证并计算渲染树。")])]),v._v(" "),t("blockquote",[t("p",[v._v("为了不对每个小的变化都进行完整的布局计算，渲染器会将更改的元素和它的子元素进行脏位标记，表示该元素需要重新布局。其中，全局样式更改会触发全局布局，部分样式或元素更改会触发增量布局，增量布局是异步完成的，全局布局则会同步触发。")])]),v._v(" "),t("p",[v._v("重排需要涉及变更的所有的结点几何尺寸和位置，成本比重绘的成本高得多的多。所以我们要注意以避免频繁地进行增加、删除、修改 DOM 结点、移动 DOM 的位置、Resize 窗口、滚动等操作，因为这些操作可能会导致性能降低。")]),v._v(" "),t("p",[t("strong",[v._v("4. 光栅化")])]),v._v(" "),t("blockquote",[t("p",[v._v("通过解析、布局和绘制过程，浏览器获得了文档的结构、每个元素的样式、绘制顺序等信息。将这些信息转换为屏幕上的像素，这个过程被称为光栅化")])]),v._v(" "),t("p",[v._v("光栅化可以被 GPU 加速，光栅化后的位图会被存储在 GPU 内存中。根据前面介绍的渲染流程，当页面布局变更了会触发重排和重绘，还需要重新进行光栅化。此时如果页面中有动画，则主线程中过多的计算任务很可能会影响动画的性能")]),v._v(" "),t("p",[v._v("因此，现代的浏览器通常使用合成的方式，将页面的各个部分分成若干层，分别对其进行栅格化（将它们分割成了不同的瓦片），并通过合成器线程进行页面的合成")]),v._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210719180212.png",loading:"lazy"}})]),v._v(" "),t("p",[t("strong",[v._v("合成过程如下：")])]),v._v(" "),t("ul",[t("li",[v._v("当主线程创建了合成层并确定了绘制顺序，便将这些信息提交给合成线程；")]),v._v(" "),t("li",[v._v("合成器线程将每个图层栅格化，然后将每个图块发送给光栅线程")]),v._v(" "),t("li",[v._v("光栅线程栅格化每个瓦片，并将它们存储在 GPU 内存中")]),v._v(" "),t("li",[v._v("合成器线程通过 IPC 提交给浏览器进程，这些合成器帧被发送到 GPU 进程处理，并显示在屏幕上。")])]),v._v(" "),t("blockquote",[t("p",[v._v("合成的真正目的是，在移动合成层的时候不用重新光栅化。因为有了合成器线程，页面才可以独立于主线程进行流畅的滚动")])]),v._v(" "),t("p",[v._v("我们在绘制页面的时候，也可能会遇到很多奇怪的渲染问题，比如使用了"),t("code",[v._v("transform:scale")]),v._v("可能会导致某些浏览器中渲染模糊，究其原因则是由于光栅化过程导致的")])])}),[],!1,null,null,null);_.default=s.exports}}]);