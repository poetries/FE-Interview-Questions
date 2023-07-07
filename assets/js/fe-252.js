(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{1277:function(v,t,e){"use strict";e.r(t);var _=e(52),a=Object(_.a)({},(function(){var v=this,t=v.$createElement,e=v._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"小程序的双线程设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小程序的双线程设计"}},[v._v("#")]),v._v(" 小程序的双线程设计")]),v._v(" "),e("p",[v._v("小程序中使用了沙箱环境来运行 JavaScript 代码，在这个环境中无法进行一些 DOM 操作。那么，开发者如何更新页面内容、控制页面的展示呢？答案是使用setData()。")]),v._v(" "),e("p",[v._v("为什么使用setData()可以更新页面内容呢？这是因为在小程序中，界面渲染相关任务则是由单独的 WebView 线程来完成。也就是说，在小程序中，JavaScript 脚本的执行和界面渲染不在一个线程中。")]),v._v(" "),e("p",[v._v("当我们在 JavaScript 中使用setData()更新数据的时候，实际上这些数据会通过客户端进行跨线程通信，然后传递到 WebView 页面中，WebView 页面则根据约定的规则来更新到页面中，过程如下图所示。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210720170734.png",alt:""}})]),v._v(" "),e("blockquote",[e("p",[v._v("由于 WebView 页面中获取到的只是类似 JSON 格式的数据，不存在执行 JavaScript 脚本的情况。因此有效地防范了 XSS 攻击，也防止了开发者恶意爬取用户敏感信息。")])]),v._v(" "),e("p",[v._v("现在，我们能看到，小程序中分为渲染层（由 WebView 线程管理）和逻辑层（由客户端 JavaScript 解释引擎线程管理）：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210720170753.png",alt:""}})]),v._v(" "),e("p",[e("strong",[v._v("这就是小程序的双线程设计。显然，它带来了一些好处：")])]),v._v(" "),e("ul",[e("li",[v._v("可以防止恶意攻击者的 XSS 攻击；")]),v._v(" "),e("li",[v._v("可以防止开发者恶意盗取用户敏感信息；")]),v._v(" "),e("li",[v._v("提升页面加载性能")])]),v._v(" "),e("blockquote",[e("p",[v._v("在浏览器中 GUI 渲染线程负责渲染浏览器界面 HTML 元素，JavaScript 引擎线程主要负责处理 JavaScript 脚本程序。它们之间是互斥的关系，当 JavaScript 引擎执行时，GUI 线程会被挂起。而在小程序中，由于 JavaScript 的执行和页面渲染不在一个页面中，因此也不存在阻塞的问题，页面加载得以更加流畅")])]),v._v(" "),e("h2",{attrs:{id:"小程序如何提升用户体验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小程序如何提升用户体验"}},[v._v("#")]),v._v(" 小程序如何提升用户体验")]),v._v(" "),e("blockquote",[e("p",[v._v("目前，主流的 App 主要有 3 种，它们对应了 3 种渲染模式：")])]),v._v(" "),e("ul",[e("li",[v._v("Native App，使用了 Native（纯客户端原生技术）渲染；")]),v._v(" "),e("li",[v._v("Web App，使用了 WebView（纯 Web 技术）渲染；")]),v._v(" "),e("li",[v._v("Hybrid App，使用了 WebView+原生组件（Hybrid 技术）渲染。")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("小程序使用的是 WebView + 原生组件，即 Hybrid 方式")]),v._v("。显然，这种方式结合了 Native 和 Webview 的一些优势，让开发者既可以享受 Webview 页面的低门槛和在线更新，又可以使用部分流畅的 Native 原生组件，同时通过代码包上传、审核、发布的方式来对内容进行管控。")])]),v._v(" "),e("h3",{attrs:{id:"引入原生组件提升用户交互体验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入原生组件提升用户交互体验"}},[v._v("#")]),v._v(" 引入原生组件提升用户交互体验")]),v._v(" "),e("p",[v._v("我们知道，小程序中每一次逻辑层和渲染层的通信，都需要经过 Native，这意味着一次的用户的交互过程会带来四次的通信：")]),v._v(" "),e("ul",[e("li",[v._v("渲染层 → Native（点击事件）；")]),v._v(" "),e("li",[v._v("Native → 逻辑层（点击事件）；")]),v._v(" "),e("li",[v._v("逻辑层 → Native（setData）；")]),v._v(" "),e("li",[v._v("Native → 渲染层（setData）")])]),v._v(" "),e("p",[v._v("对于这种强交互的场景，小程序引入了原生组件，过程如下图所示。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210720170942.png",alt:""}})]),v._v(" "),e("p",[v._v("我们可以看到，引入原生组件之后，原生组件可以直接和逻辑层通信，有效地减少逻辑层和渲染层的频繁通信问题。像"),e("code",[v._v("<input>")]),v._v("、"),e("code",[v._v("<textarea>")]),v._v("这些频繁交互的输入框组件，以及画布"),e("code",[v._v("<canvas>")]),v._v("组件、地图"),e("code",[v._v("<map>")]),v._v("这样交互复杂的组件，直接使用 Native 原生组件的方式既减少了客户端通信，也减轻了渲染层的工作。")]),v._v(" "),e("p",[v._v("引入原生组件的方式提升用户在小程序中频繁操作场景下的交互体验，依赖了 Native 技术的能力。除了这些，小程序在运行机制（包括启动和加载）上也结合客户端做了不少的体验优化工作，我们一起来看一下。")]),v._v(" "),e("h3",{attrs:{id:"通过页面预渲染减少启动和加载耗时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过页面预渲染减少启动和加载耗时"}},[v._v("#")]),v._v(" 通过页面预渲染减少启动和加载耗时")]),v._v(" "),e("p",[v._v("前面我们介绍了小程序的双线程设计，你应该知道在小程序里 JavaScript 代码运行在逻辑层中，页面渲染的逻辑则运行在 WebView 渲染层中。")]),v._v(" "),e("p",[v._v("我们重新来看这张图：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210720171016.png",alt:""}})]),v._v(" "),e("blockquote",[e("p",[v._v("我们能看到渲染层里有多个 WebView，这是因为在小程序中为了方便用户可快速地前进和回退，存在着多个界面，而每个界面都是一个单独的 WebView 线程，因此会有多个 WebView。")])]),v._v(" "),e("p",[v._v("这和小程序的启动和加载有什么关系呢？")]),v._v(" "),e("p",[v._v("首先，在小程序启动之前，客户端会提前准备好一个 WebView，用于快速展示小程序首页。同时，在每次这个准备好的 WebView 被小程序使用和渲染时，客户端也都会提前准备好一个新的 WebView。因此，开发者在调用"),e("code",[v._v("wx.navigateTo")]),v._v("时，用户可以很快看到新的页面。")]),v._v(" "),e("p",[v._v("除了 WebView 的准备，小程序在启动和加载过程中，客户端还做了这些工作。")]),v._v(" "),e("ul",[e("li",[v._v("基于 JavaScript 编写的基础库，会被提前内置在客户端中。基础库提供了小程序运行的基础能力，包括渲染机制相关基础代码、封装后的内置组件、逻辑层基础 API 等，因此小程序在启动时，都会先注入基础库代码。")]),v._v(" "),e("li",[v._v("当用户打开小程序后，客户端开始下载业务代码，同时会在本地创建内置的基础 UI 组件，初始化小程序的首页。此时，小程序展示的是客户端提供的固定的启动界面。")]),v._v(" "),e("li",[v._v("步骤 2 准备完成后，客户端就会开始注入业务代码并运行。")])]),v._v(" "),e("p",[v._v("最后，我们再来梳理下小程序的启动过程。")]),v._v(" "),e("ul",[e("li",[v._v("启动前：提前准备好一个 WebView 页面，并进行初始化，在初始化过程中会注入小程序基础库，以提供小程序运行的基础环境。")]),v._v(" "),e("li",[v._v("用户打开小程序：下载业务代码，同时初始化小程序的首页，当业务代码下载完成后，开始运行业务代码。")])]),v._v(" "),e("p",[v._v("这个过程可以用一张图来表示。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210720171113.png",alt:""}})]),v._v(" "),e("p",[v._v("我们可以看到，微信小程序通过基础库的内置、页面的预渲染、小程序加载时提供友好的交互界面等方式，使小程序可以尽快地加载，给到用户更好的体验。除此之外，小程序还通过使用缓存、热启动机制、提供分包加载和数据预拉取等方式，同样减少了用户的等待时间。")])])}),[],!1,null,null,null);t.default=a.exports}}]);