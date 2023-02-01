(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1249:function(e,v,_){"use strict";_.r(v);var a=_(69),t=Object(a.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("blockquote",[_("p",[_("code",[e._v("Performance")]),e._v("是一个做前端性能监控离不开的"),_("code",[e._v("API")]),e._v("，最好在页面完全加载完成之后再使用，因为很多值必须在页面完全加载之后才能得到。最简单的办法是在"),_("code",[e._v("window.onload")]),e._v("事件中读取各种数据。")])]),e._v(" "),_("h2",{attrs:{id:"一、回顾页面加载过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、回顾页面加载过程"}},[e._v("#")]),e._v(" 一、回顾页面加载过程")]),e._v(" "),_("blockquote",[_("p",[e._v("要学习这套"),_("code",[e._v("API")]),e._v("的使用，先简单介绍下前端的基础知识")])]),e._v(" "),_("h3",{attrs:{id:"_1-1-页面加载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-页面加载"}},[e._v("#")]),e._v(" 1.1 页面加载")]),e._v(" "),_("blockquote",[_("p",[e._v("一个页面的请求到响应再到显示出来，需要经过下面一些重要过程，当我们在浏览器输入一个"),_("code",[e._v("URL")]),e._v("或者说点击一个"),_("code",[e._v("URL")]),e._v("开始，会出现如下流程")])]),e._v(" "),_("ul",[_("li",[e._v("页面准备")]),e._v(" "),_("li",[e._v("重定向：在"),_("code",[e._v("header")]),e._v("定义了重定向才会有这个过程，如果没有重定向，不会产生这个过程。")]),e._v(" "),_("li",[_("code",[e._v("app cache")]),e._v("：会先检查这个域名是否有缓存，如果有缓存就不需要DNS解析域名。这里的"),_("code",[e._v("app")]),e._v("是值应用程序"),_("code",[e._v("application")]),e._v("，不指手机"),_("code",[e._v("app")]),e._v("。")]),e._v(" "),_("li",[_("code",[e._v("DNS")]),e._v("解析：把域名解析成"),_("code",[e._v("IP")]),e._v("，如果直接用"),_("code",[e._v("ip")]),e._v("地址访问，不产生这个过程。")]),e._v(" "),_("li",[_("code",[e._v("TCP")]),e._v("连接："),_("code",[e._v("http")]),e._v("协议是经过"),_("code",[e._v("TCP")]),e._v("来传输的，所以产生一个"),_("code",[e._v("http")]),e._v("请求就会有"),_("code",[e._v("TCP connect")]),e._v("，但是依赖于长连接，不会产生这个过程。")]),e._v(" "),_("li",[_("code",[e._v("request header")]),e._v("：请求头信息。")]),e._v(" "),_("li",[_("code",[e._v("request body")]),e._v("：请求体信息，比如"),_("code",[e._v("get")]),e._v("请求是没有请求体信息的，所以没有这个过程，这就是为什么把头跟体分开写的原因。")]),e._v(" "),_("li",[_("code",[e._v("response header")]),e._v("：响应头信息。")]),e._v(" "),_("li",[_("code",[e._v("response body")]),e._v("：响应体信息。")]),e._v(" "),_("li",[e._v("解析"),_("code",[e._v("HTML")]),e._v("结构")]),e._v(" "),_("li",[e._v("加载外部脚本和样式表文件：正常来说"),_("code",[e._v("JS")]),e._v("、"),_("code",[e._v("css")]),e._v("都是外部加载的，当然有不正常的人啊，比如我。")]),e._v(" "),_("li",[e._v("解析并执行脚本代码")]),e._v(" "),_("li",[e._v("构建与解析"),_("code",[e._v("HTML DOM")]),e._v("树：这个过程可以去了解下"),_("code",[e._v("DOM")]),e._v("树是怎样的就明白啦。")]),e._v(" "),_("li",[e._v("加载外部图片")]),e._v(" "),_("li",[e._v("页面加载完成，显示出来啦")])]),e._v(" "),_("h3",{attrs:{id:"_1-2-重定向分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-重定向分析"}},[e._v("#")]),e._v(" 1.2 重定向分析")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("app cach")])]),e._v(" "),_("li",[_("code",[e._v("DNS")]),e._v("解析")]),e._v(" "),_("li",[_("code",[e._v("TCP")]),e._v("连接")]),e._v(" "),_("li",[_("code",[e._v("request header")])]),e._v(" "),_("li",[e._v("重定向")]),e._v(" "),_("li",[_("code",[e._v("app cach")])]),e._v(" "),_("li",[_("code",[e._v("DNS")]),e._v("解析")]),e._v(" "),_("li",[_("code",[e._v("TCP")]),e._v("连接")]),e._v(" "),_("li",[_("code",[e._v("request header")])])]),e._v(" "),_("h2",{attrs:{id:"二、performance"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、performance"}},[e._v("#")]),e._v(" 二、performance")]),e._v(" "),_("h3",{attrs:{id:"_2-1-performance-timing"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-performance-timing"}},[e._v("#")]),e._v(" 2.1 performance.timing")]),e._v(" "),_("blockquote",[_("p",[e._v("这个API能帮我们得到整个页面请求的时间，如下图，在"),_("code",[e._v("Chrome")]),e._v("的"),_("code",[e._v("Console")]),e._v("是可以直接运行的")])]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210503170506.png",loading:"lazy"}})]),e._v(" "),_("p",[e._v("先解释下这些时间都是代表什么")]),e._v(" "),_("p",[_("strong",[e._v("timing 对象里边的数据比较多，梳理如下几个关键性的节点")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("fetchStart")]),e._v("：发起获取当前文档的时间点，我的理解是浏览器收到发起页面请求的时间点；")]),e._v(" "),_("li",[_("code",[e._v("domainLookupStart")]),e._v("：返回浏览器开始"),_("code",[e._v("DNS")]),e._v("查询的时间，如果此请求没有"),_("code",[e._v("DNS")]),e._v("查询过程，如长连接、资源"),_("code",[e._v("cache")]),e._v("、甚至是本地资源等，那么就返回"),_("code",[e._v("fetchStart")]),e._v("的值；")]),e._v(" "),_("li",[_("code",[e._v("domainLookupEnd")]),e._v("：返回浏览器结束"),_("code",[e._v("DNS")]),e._v("查询的时间，如果没有"),_("code",[e._v("DNS")]),e._v("查询过程，同上；")]),e._v(" "),_("li",[_("code",[e._v("connectStart")]),e._v("：浏览器向服务器请求文档，开始建立连接的时间，如果此连接是一个长连接，或者无需与服务器连接（命中缓存），则返回"),_("code",[e._v("domainLookupEnd")]),e._v("的值；")]),e._v(" "),_("li",[_("code",[e._v("connectEnd")]),e._v("：浏览器向服务器请求文档，建立连接成功的时间；")]),e._v(" "),_("li",[_("code",[e._v("requestStart")]),e._v("：开始请求文档的时间（注意没有"),_("code",[e._v("requestEnd")]),e._v("）;")]),e._v(" "),_("li",[_("code",[e._v("responseStart")]),e._v("：浏览器开始接收第一个字节数据的时间，数据可能来自于服务器、缓存、或本地资源；")]),e._v(" "),_("li",[_("code",[e._v("unloadEventStart")]),e._v("：卸载上一个文档开始的时间；")]),e._v(" "),_("li",[_("code",[e._v("unloadEventEnd")]),e._v("：卸载上一个文档结束的时间；")]),e._v(" "),_("li",[_("code",[e._v("domLoading")]),e._v("：浏览器把"),_("code",[e._v("document.readyState")]),e._v("设置为"),_("code",[e._v("“loading”")]),e._v("的时间点，开始构建"),_("code",[e._v("dom")]),e._v("树的时间点；")]),e._v(" "),_("li",[_("code",[e._v("responseEnd")]),e._v("：浏览器接收最后一个字节数据的时间，或连接被关闭的时间；")]),e._v(" "),_("li",[_("code",[e._v("domInteractive")]),e._v("：浏览器把"),_("code",[e._v("document.readyState设")]),e._v("置为"),_("code",[e._v("“interactive”")]),e._v("的时间点，"),_("code",[e._v("DOM")]),e._v("树创建结束；")]),e._v(" "),_("li",[_("code",[e._v("domContentLoadedEventStart")]),e._v("：文档发生"),_("code",[e._v("DOMContentLoaded")]),e._v("事件的时间；")]),e._v(" "),_("li",[_("code",[e._v("domContentLoadedEventEnd")]),e._v("：文档的"),_("code",[e._v("DOMContentLoaded")]),e._v("事件结束的时间；")]),e._v(" "),_("li",[_("code",[e._v("domComplete")]),e._v("：浏览器把"),_("code",[e._v("document.readyState")]),e._v("设置为"),_("code",[e._v("“complete”")]),e._v("的时间点；")]),e._v(" "),_("li",[_("code",[e._v("loadEventStart")]),e._v("：文档触发"),_("code",[e._v("load")]),e._v("事件的时间；")]),e._v(" "),_("li",[_("code",[e._v("loadEventEnd")]),e._v("：文档出发"),_("code",[e._v("load")]),e._v("事件结束后的时间")])]),e._v(" "),_("blockquote",[_("p",[e._v("再来一张图，表示各阶段的开始与结束对应的时间")])]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210503170539.png",loading:"lazy"}})]),e._v(" "),_("blockquote",[_("p",[e._v("从以上的分析，我们就可以得到一些时间的计算")])]),e._v(" "),_("ul",[_("li",[e._v("准备新页面耗时："),_("code",[e._v("fetchStart - navigationStart")])]),e._v(" "),_("li",[e._v("重定向时间："),_("code",[e._v("redirectEnd - redirectStart")])]),e._v(" "),_("li",[_("code",[e._v("App Cache")]),e._v("时间："),_("code",[e._v("domainLookupStart - fetchStart")])]),e._v(" "),_("li",[_("code",[e._v("DNS")]),e._v("解析时间："),_("code",[e._v("domainLookupEnd -domainLookupStart")])]),e._v(" "),_("li",[_("code",[e._v("TCP")]),e._v("连接时间："),_("code",[e._v("connectEnd - connectStart")])]),e._v(" "),_("li",[_("code",[e._v("request")]),e._v("时间："),_("code",[e._v("responseEnd - requestStart")]),e._v("这个计算是代表请求响应加起来的时间")]),e._v(" "),_("li",[e._v("请求完毕到"),_("code",[e._v("DOM")]),e._v("树加载："),_("code",[e._v("domInteractive -responseEnd")])]),e._v(" "),_("li",[e._v("构建与解析"),_("code",[e._v("DOM")]),e._v("树，加载资源时间："),_("code",[e._v("domCompleter -domInteractive")])]),e._v(" "),_("li",[_("code",[e._v("load")]),e._v("时间："),_("code",[e._v("loadEventEnd - loadEventStart")])]),e._v(" "),_("li",[e._v("整个页面加载时间："),_("code",[e._v("loadEventEnd -navigationStart")])]),e._v(" "),_("li",[e._v("白屏时间："),_("code",[e._v("responseStart-navigationStart")])])]),e._v(" "),_("h3",{attrs:{id:"_2-2-performance-getentries"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-performance-getentries"}},[e._v("#")]),e._v(" 2.2 performance.getEntries()")]),e._v(" "),_("blockquote",[_("p",[e._v("这个API能帮我们获得资源的请求时间，包括JS、CSS、图片等")])]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210503170603.png",loading:"lazy"}})]),e._v(" "),_("blockquote",[_("p",[e._v("如上图可以看到这个API请求返回的是一个数组，这个数组包括整个页面所有的资源加载，上图打开了一个其中一个资源，可以看到如下信息")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("entryType")]),e._v("：类型为"),_("code",[e._v("resource")])]),e._v(" "),_("li",[_("code",[e._v("name")]),e._v("：资源的"),_("code",[e._v("url")])]),e._v(" "),_("li",[_("code",[e._v("initiatorType")]),e._v("：资源是"),_("code",[e._v("link")])]),e._v(" "),_("li",[e._v("资源时间："),_("code",[e._v("duration")]),e._v("的值，是"),_("code",[e._v("responseEnd - startTime")]),e._v("得到的")])]),e._v(" "),_("h3",{attrs:{id:"_2-3-performance-memory"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-performance-memory"}},[e._v("#")]),e._v(" 2.3 performance.memory")]),e._v(" "),_("blockquote",[_("p",[e._v("这个API主要是得到浏览器内存情况")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("jsHeapSizeLimit")]),e._v("：内存大小限制")]),e._v(" "),_("li",[_("code",[e._v("totalJSHeapSize")]),e._v("：可使用的内容")]),e._v(" "),_("li",[_("code",[e._v("userdJSHeapSize")]),e._v("：已使用的内容")])]),e._v(" "),_("blockquote",[_("p",[_("code",[e._v("userdJSHeapSize")]),e._v("表示所有被使用的JS堆栈内存，"),_("code",[e._v("totalJSHeapSize")]),e._v("可使用的JS堆栈内存，如果"),_("code",[e._v("userdJSHeapSize")]),e._v("的值大于"),_("code",[e._v("totalJSHeapSize")]),e._v("，就可能出现内存泄漏")])]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210503170616.png",loading:"lazy"}})]),e._v(" "),_("h2",{attrs:{id:"三、动画帧率fps"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、动画帧率fps"}},[e._v("#")]),e._v(" 三、动画帧率FPS")]),e._v(" "),_("h3",{attrs:{id:"_3-1-流畅动画的标准"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-流畅动画的标准"}},[e._v("#")]),e._v(" 3.1 流畅动画的标准")]),e._v(" "),_("blockquote",[_("p",[_("code",[e._v("FPS")]),e._v(" 表示的是每秒钟画面更新次数。我们平时所看到的连续画面都是由一幅幅静止画面组成的，每幅画面称为一帧，"),_("code",[e._v("FPS")]),e._v(" 是描述“帧”变化速度的物理量")])]),e._v(" "),_("ul",[_("li",[e._v("理论上说，"),_("code",[e._v("FPS")]),e._v(" 越高，动画会越流畅，目前大多数设备的屏幕刷新率为 "),_("code",[e._v("60")]),e._v(" 次/秒，所以通常来讲 "),_("code",[e._v("FPS")]),e._v(" 为 "),_("code",[e._v("60 frame/s")]),e._v(" 时动画效果最好，也就是每帧的消耗时间为 "),_("code",[e._v("16.6")]),e._v("7ms")])]),e._v(" "),_("p",[_("strong",[e._v("不同帧率的体验")])]),e._v(" "),_("ul",[_("li",[e._v("帧率能够达到 "),_("code",[e._v("50 ～ 60 FPS")]),e._v(" 的动画将会相当流畅，让人倍感舒适；")]),e._v(" "),_("li",[e._v("帧率在 "),_("code",[e._v("30 ～ 50 FPS")]),e._v(" 之间的动画，因各人敏感程度不同，舒适度因人而异；")]),e._v(" "),_("li",[e._v("帧率在 "),_("code",[e._v("30 FPS")]),e._v(" 以下的动画，让人感觉到明显的卡顿和不适感；")]),e._v(" "),_("li",[e._v("帧率波动很大的动画，亦会使人感觉到卡顿")])]),e._v(" "),_("h3",{attrs:{id:"_3-2-获取我们页面动画当前的-fps-值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-获取我们页面动画当前的-fps-值"}},[e._v("#")]),e._v(" 3.2 获取我们页面动画当前的 FPS 值")]),e._v(" "),_("blockquote",[_("p",[e._v("那么我们该如何准确的获取我们页面动画当前的 FPS 值呢？")])]),e._v(" "),_("h4",{attrs:{id:"_3-2-1-方法一-借助-chrome-开发者工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-方法一-借助-chrome-开发者工具"}},[e._v("#")]),e._v(" 3.2.1 方法一 借助 Chrome 开发者工具")]),e._v(" "),_("blockquote",[_("p",[_("code",[e._v("Chrome")]),e._v(" 提供给开发者的功能十分强大，在开发者工具中，我们进行如下选择调出 "),_("code",[e._v("FPS meter")]),e._v(" 选项：")])]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210503170727.png",loading:"lazy"}})]),e._v(" "),_("blockquote",[_("p",[e._v("通过这个按钮，可以开启页面实时 "),_("code",[e._v("Frame Rate")]),e._v(" (帧率) 观测及页面 "),_("code",[e._v("GPU")]),e._v(" 使用率")])]),e._v(" "),_("p",[_("strong",[e._v("但是这个方法缺点太多了")])]),e._v(" "),_("ul",[_("li",[e._v("这个只能一次观测一到几个页面，而且需要人工实时观测")]),e._v(" "),_("li",[e._v("数据只能是主观感受，并没有一个十分精确的数据不断上报或者被收集")]),e._v(" "),_("li",[e._v("因此，我们需要更加智能的方法。")])]),e._v(" "),_("h4",{attrs:{id:"_3-2-2-方法二-借助-frame-timing-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-方法二-借助-frame-timing-api"}},[e._v("#")]),e._v(" 3.2.2 方法二 借助 Frame Timing API")]),e._v(" "),_("blockquote",[_("p",[e._v("Blink 内核早期架构")])]),e._v(" "),_("ul",[_("li",[e._v("以 "),_("code",[e._v("Chrome")]),e._v(" 浏览器内核 "),_("code",[e._v("Blink")]),e._v(" 渲染页面为例。对早期的 "),_("code",[e._v("Chrome")]),e._v(" 浏览器而言，每个页面 "),_("code",[e._v("Tab")]),e._v(" 对应一个独立的 "),_("code",[e._v("renderer")]),e._v(" 进程，"),_("code",[e._v("Renderer")]),e._v("进程中包含了主线程和合成线程。早期 "),_("code",[e._v("Chrome")]),e._v(" 内核架构")])]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210503170748.png",loading:"lazy"}})]),e._v(" "),_("p",[_("strong",[e._v("其中，主线程主要负责")]),e._v("：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("Javascript")]),e._v(" 的计算与执行")]),e._v(" "),_("li",[_("code",[e._v("CSS")]),e._v(" 样式计算")]),e._v(" "),_("li",[_("code",[e._v("Layout")]),e._v(" 计算")]),e._v(" "),_("li",[e._v("将页面元素绘制成位图（"),_("code",[e._v("paint")]),e._v("），也就是光栅化（"),_("code",[e._v("Raster")]),e._v("）")]),e._v(" "),_("li",[e._v("将位图给合成线程")])]),e._v(" "),_("p",[_("strong",[e._v("合成线程则主要负责")]),e._v("：")]),e._v(" "),_("ul",[_("li",[e._v("将位图("),_("code",[e._v("GraphicsLayer")]),e._v(" 层)以纹理("),_("code",[e._v("texture")]),e._v(")的形式上传给 "),_("code",[e._v("GPU")])]),e._v(" "),_("li",[e._v("计算页面的可见部分和即将可见部分（滚动）")]),e._v(" "),_("li",[_("code",[e._v("CSS")]),e._v(" 动画处理")]),e._v(" "),_("li",[e._v("通知 GPU 绘制位图到屏幕上")])]),e._v(" "),_("blockquote",[_("p",[e._v("其实知道了这两个线程之后，下一个概念是厘清 "),_("code",[e._v("CSS")]),e._v(" 动画与 "),_("code",[e._v("JS")]),e._v(" 动画的细微区别（当然它们都是 Web 动画）")])]),e._v(" "),_("p",[_("strong",[e._v("JS 动画与 CSS 动画的细微区别")])]),e._v(" "),_("ul",[_("li",[e._v("对于 "),_("code",[e._v("JS")]),e._v("动画而言，它们运行时的帧率即是主线程和合成线程加起来消耗的时间。对于流畅动画而言，我们希望它们每一帧的耗时保持在 "),_("code",[e._v("16.67ms")]),e._v(" 之内;")]),e._v(" "),_("li",[e._v("而对于 "),_("code",[e._v("CSS")]),e._v(" 动画而言，由于其流程不受主线程的影响，所以希望能得到合成线程的消耗的时间，而合成线程的绘制频率也反映了滚动和 CSS 动画的流程性。")])]),e._v(" "),_("blockquote",[_("p",[e._v("上面主要想得出的一个结论是。如果我们能够知道主线程和合成线程每一帧消耗的时间，那么我们就能大致得出对应的 Web 动画的帧率。那么上面说到的 "),_("code",[e._v("Frame Timing API")]),e._v(" 是否可以帮助我们拿到这个时间点呢")])]),e._v(" "),_("p",[_("strong",[e._v("什么是 Frame Timing API ？")])]),e._v(" "),_("blockquote",[_("p",[_("code",[e._v("Frame Timing API")]),e._v(" 是 "),_("code",[e._v("Web Performance Timing API")]),e._v(" 标准中的其中一位成员。"),_("code",[e._v("Web Performance Timing API")]),e._v(" 是 W3C 推出的一套性能 API 标准，用于帮助开发者对网站各方面的性能进行精确的分析与控制，提升 Web 网站性能")])]),e._v(" "),_("p",[e._v("它包含许多子类 API，完成不同的功能，大致如下")]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210503170806.png",loading:"lazy"}})]),e._v(" "),_("p",[e._v("怎么使用呢？以 "),_("code",[e._v("Navigation Timing")]),e._v(", "),_("code",[e._v("Performance Timeline")]),e._v(", "),_("code",[e._v("Resource Timing")]),e._v(" 为例子，对于兼容它的浏览器，它以只读属性的形式对外暴露挂载在 "),_("code",[e._v("window.performance")]),e._v(" 上。")]),e._v(" "),_("p",[e._v("我们再来回顾这张图")]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210503170828.png",loading:"lazy"}})]),e._v(" "),_("blockquote",[_("p",[e._v("通过这张图以及上面的 "),_("code",[e._v("window.performance.timing")]),e._v("，我们就可以轻松的统计出页面每个重要节点的耗时，这就是 "),_("code",[e._v("Web Performance Timing API")]),e._v(" 的强大之处，感兴趣的可以详细去研究研究，使用在页面统计上")])]),e._v(" "),_("p",[_("strong",[e._v("Frame Timing API 示意")])]),e._v(" "),_("blockquote",[_("p",[e._v("终于可以回归正题，借助 "),_("code",[e._v("Web Performance Timing API")]),e._v(" 中的"),_("code",[e._v("Frame Timing API")]),e._v("，可以轻松的拿到每一帧中，主线程以及合成线程的时间。或者更加容易，直接拿到每一帧的耗时")])]),e._v(" "),_("p",[e._v("获取 "),_("code",[e._v("Render")]),e._v(" 主线程和合成线程的记录，每条记录包含的信息基本如下")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('var rendererEvents = window.performance.getEntriesByType("renderer");\nvar compositeThreadEvents = window.performance.getEntriesByType("composite");\n')])])]),_("p",[e._v("或者是：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("ar observer = new PerformanceObserver(function(list) {\n    var perfEntries = list.getEntries();\n    for (var i = 0; i < perfEntries.length; i++) {\n        console.log(\"frame: \", perfEntries[i]);\n    }\n});\n \n// subscribe to Frame Timing\nobserver.observe({entryTypes: ['frame']});\n")])])]),_("p",[e._v("每条记录包含的信息基本如下：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("{\n  sourceFrameNumber: 120,\n  startTime: 1342.549374253\n  cpuTime: 6.454313323\n}\n")])])]),_("blockquote",[_("p",[e._v("每个记录都包括唯一的 "),_("code",[e._v("Frame Number")]),e._v("、"),_("code",[e._v("Frame")]),e._v(" 开始时间以及 "),_("code",[e._v("cpuTime")]),e._v(" 时间。通过计算每一条记录的 "),_("code",[e._v("startTime")]),e._v(" ，我们就可以算出每两帧间的间隔，从而得到动画的帧率是否能够达到 "),_("code",[e._v("60 FPS")])])]),e._v(" "),_("p",[_("strong",[e._v("看看 Web Performance Timing API 整体的兼容性")])]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210503170845.png",loading:"lazy"}})]),e._v(" "),_("blockquote",[_("p",[_("code",[e._v("Frame Timing API")]),e._v(" 虽好，但是，现在 "),_("code",[e._v("Frame Timing API")]),e._v(" 的兼容性不算很友好，额，不友好到什么程度呢。还没有任何浏览器支持，处于实验性阶段，属于面向未来编程")])]),e._v(" "),_("h4",{attrs:{id:"_3-2-3-方法三-借助-requestanimationframe-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-方法三-借助-requestanimationframe-api"}},[e._v("#")]),e._v(" 3.2.3 方法三 借助 requestAnimationFrame API")]),e._v(" "),_("blockquote",[_("p",[e._v("从上面的介绍，我们得知，如果我们可以到得到每一帧中的固定一个时间点，那么两者相减，也能够近似得到一帧所消耗的时间")])]),e._v(" "),_("p",[e._v("这次，我们借助兼容性不错的 "),_("code",[e._v("requestAnimationFrame API")])]),e._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 语法")]),e._v("\nwindow"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("requestAnimationFrame")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("callback"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),_("ul",[_("li",[_("code",[e._v("requestAnimationFrame")]),e._v(" 大家应该都不陌生，方法告诉浏览器您希望执行动画并请求浏览器调用指定的函数在下一次重绘之前更新动画。")]),e._v(" "),_("li",[e._v("当你准备好更新屏幕画面时你就应用此方法。这会要求你的动画函数在浏览器下次重绘前执行。回调的次数常是每秒 "),_("code",[e._v("60")]),e._v(" 次，大多数浏览器通常匹配 "),_("code",[e._v("W3C")]),e._v(" 所建议的刷新率")])]),e._v(" "),_("p",[_("strong",[e._v("使用 requestAnimationFrame 计算 FPS 原理")])]),e._v(" "),_("blockquote",[_("p",[e._v("原理是，正常而言 "),_("code",[e._v("requestAnimationFrame")]),e._v(" 这个方法在一秒内会执行 "),_("code",[e._v("60")]),e._v(" 次，也就是不掉帧的情况下。假设动画在时间 "),_("code",[e._v("A")]),e._v(" 开始执行，在时间 "),_("code",[e._v("B")]),e._v(" 结束，耗时 "),_("code",[e._v("x ms")]),e._v("。而中间 "),_("code",[e._v("requestAnimationFrame")]),e._v(" 一共执行了 "),_("code",[e._v("n")]),e._v(" 次，则此段动画的帧率大致为："),_("code",[e._v("n / (B - A)")])])]),e._v(" "),_("p",[e._v("核心代码如下，能近似计算每秒页面帧率，以及我们额外记录一个 "),_("code",[e._v("allFrameCount")]),e._v("，用于记录 "),_("code",[e._v("rAF")]),e._v(" 的执行次数，用于计算每次动画的帧率 ：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("var rAF = function () {\n    return (\n        window.requestAnimationFrame ||\n        window.webkitRequestAnimationFrame ||\n        function (callback) {\n            window.setTimeout(callback, 1000 / 60);\n        }\n    );\n}();\n  \nvar frame = 0;\nvar allFrameCount = 0;\nvar lastTime = Date.now();\nvar lastFameTime = Date.now();\n  \nvar loop = function () {\n    var now = Date.now();\n    var fs = (now - lastFameTime);\n    var fps = Math.round(1000 / fs);\n  \n    lastFameTime = now;\n    // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS\n    allFrameCount++;\n    frame++;\n  \n    if (now > 1000 + lastTime) {\n        var fps = Math.round((frame * 1000) / (now - lastTime));\n        console.log(`${new Date()} 1S内 FPS：`, fps);\n        frame = 0;\n        lastTime = now;\n    };\n  \n    rAF(loop);\n}\n \nloop();\n")])])]),_("p",[e._v("寻找一个有动画不断运行的页面进行测试，可以看到代码运行如下：")]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/20210503170900.png",loading:"lazy"}})]),e._v(" "),_("ul",[_("li",[e._v("使用了我之前制作的一个页面进行了测试，使用"),_("code",[e._v("Chrome")]),e._v(" 同时调出页面的 "),_("code",[e._v("FPS meter")]),e._v("，对比两边的实时 "),_("code",[e._v("FPS")]),e._v(" 值，基本吻合。")]),e._v(" "),_("li",[e._v("测试页面，"),_("code",[e._v("Solar System")]),e._v("。你可以将上面的代码贴到这个页面的 "),_("code",[e._v("console")]),e._v(" 中，测试一下数据")])]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://user-images.githubusercontent.com/8554143/33877626-ed17f3c6-df63-11e7-8bae-40b9512c2645.gif",loading:"lazy"}})]),e._v(" "),_("ul",[_("li",[e._v("对比右上角的 "),_("code",[e._v("Frame Rate")]),e._v("，帧率基本一致。在大部分情况下，这种方法可以很好的得出 Web 动画的帧率。")]),e._v(" "),_("li",[e._v("如果我们需要统计某个特定动画过程的帧率，只需要在动画开始和结尾两处分别记录 "),_("code",[e._v("allFrameCount")]),e._v(" 这个数值大小，再除以中间消耗的时间，也可以得出特定动画过程的 "),_("code",[e._v("FPS")]),e._v(" 值。")]),e._v(" "),_("li",[e._v("值得注意的是，这个方法计算的结果和真实的帧率肯定是存在误差的，因为它是将每两次主线程执行 "),_("code",[e._v("javascript")]),e._v(" 的时间间隔当成一帧，而非上面说的主线程加合成线程所消耗的时间为一帧。但是对于现阶段而言，算是一种可取的方法")])])])}),[],!1,null,null,null);v.default=t.exports}}]);