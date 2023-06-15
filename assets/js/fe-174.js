(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1195:function(v,_,t){"use strict";t.r(_);var e=t(52),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("当我们去面试的时候，常常会被问到一个问题：在浏览器里面输入 url，按下回车键，会发生什么？")]),v._v(" "),t("p",[v._v("这个问题涉及浏览器中的运行机制和页面加载流程，并且这些内容也都穿插在我们日常开发中，包括前后端联调、对网页进行性能优化等。")]),v._v(" "),t("p",[v._v("今天我会先跟你聊一聊浏览器中网络请求是怎么进行的，这样你对整个网页渲染会有个更好的认识。")]),v._v(" "),t("h2",{attrs:{id:"页面的请求过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面的请求过程"}},[v._v("#")]),v._v(" 页面的请求过程")]),v._v(" "),t("p",[v._v("当我们打开某个网站的页面，浏览器就会发起网络请求获取该页面的资源，我们也可以从控制台看到以下的请求信息：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s.poetries.work/images/20210719161759.png",alt:""}}),v._v(" "),t("img",{attrs:{src:"https://s.poetries.work/images/20210719161812.png",alt:""}})]),v._v(" "),t("p",[v._v("在 Network 面板里，我们能看到所有浏览器发起的网络请求，包括页面、图片、CSS 文件、XHR 请求等，还能看到请求的状态（200 成功、404 找不到、缓存、重定向等等）、耗时、请求头和内容、返回头和内容等")]),v._v(" "),t("p",[v._v("图中第一个就是网站页面的请求，返回"),t("code",[v._v("<html>")]),v._v("页面。")]),v._v(" "),t("p",[v._v("接下来，浏览器会加载页面，同时页面中涉及的外部资源也会根据需要，在特定的时机触发请求下载，包括我们看到的 PNG 图片、JavaScript 文件（这里没有 CSS 样式，是因为样式被直出在"),t("code",[v._v("<html>")]),v._v("页面内容里了）。")]),v._v(" "),t("blockquote",[t("p",[v._v("回到前面的问题，实际上当我们在浏览器输入网页地址，按下回车键后，浏览器的处理过程如下：")])]),v._v(" "),t("ul",[t("li",[v._v("DNS 域名解析（此处涉及 DNS 的寻址过程），找到网页的存放服务器；")]),v._v(" "),t("li",[v._v("浏览器与服务器建立 TCP 连接；")]),v._v(" "),t("li",[v._v("浏览器发起 HTTP 请求；")]),v._v(" "),t("li",[v._v("服务器响应 HTTP 请求，返回该页面的 HTML 内容；")]),v._v(" "),t("li",[v._v("浏览器解析 HTML 代码，并请求 HTML 代码中的资源（如 JavaScript、CSS、图片等，此处可能涉及 HTTP 缓存）；")]),v._v(" "),t("li",[v._v("浏览器对页面进行渲染呈现给用户（此处涉及浏览器的渲染原理）。")])]),v._v(" "),t("h2",{attrs:{id:"dns-解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析"}},[v._v("#")]),v._v(" DNS 解析")]),v._v(" "),t("p",[v._v("DNS 的全称是 Domain Name System，又称域名系统，它负责把www.qq.com这样的域名地址翻译成一个 IP（比如14.18.180.206），而客户端与服务器建立 TCP 连接需要通过 IP 通信")]),v._v(" "),t("p",[v._v("让客户端和服务器连接并不是靠域名进行，在网络中每个终端之间实现连接和通信是通过一个唯一的 IP 地址来完成。在建立 TCP 连接前，我们需要找到建立连接的服务器，DNS 的解析过程可以让用户通过域名找到存放文件的服务器。")]),v._v(" "),t("blockquote",[t("p",[v._v("DNS 解析过程会进行递归查询，分别依次尝试从以下途径，按顺序地获取该域名对应的 IP 地址。")])]),v._v(" "),t("ul",[t("li",[v._v("浏览器缓存")]),v._v(" "),t("li",[v._v("系统缓存（用户操作系统 Hosts 文件 DNS 缓存）")]),v._v(" "),t("li",[v._v("路由器缓存")]),v._v(" "),t("li",[v._v("互联网服务提供商 DNS 缓存（联通、移动、电信等互联网服务提供商的 DNS 缓存服务器）")]),v._v(" "),t("li",[v._v("根域名服务器")]),v._v(" "),t("li",[v._v("顶级域名服务器")]),v._v(" "),t("li",[v._v("主域名服务器")])]),v._v(" "),t("p",[v._v("DNS 解析过程会根据上述步骤进行递归查询，如果当前步骤没查到，则自动跳转到到下一步骤通过下一个 DNS 服务器进行查找。如果最终依然没找到，浏览器便会将页面响应为打开失败。")]),v._v(" "),t("p",[v._v("除此之外，我们在前后端联调过程中也常常需要配置 HOST，这个过程便是修改了浏览器缓存或是系统缓存。通过将特定域名指向我们自身的服务器 IP 地址，便可以实现通过域名访问本地环境、测试环境、预发布环境的服务器资源。")]),v._v(" "),t("p",[v._v("那为什么需要配置域名 HOST，而不直接使用 IP 地址进行访问呢？这是因为浏览器的同源策略会导致跨域问题")]),v._v(" "),t("p",[v._v("同源策略要求，只有当请求的协议、域名和端口都相同的情况下，我们才可以访问当前页面的 "),t("code",[v._v("Cookie/LocalStorage/IndexDB")]),v._v("、获取和操作 DOM 节点，以及发送 Ajax 请求。通过同源策略的限制，可以避免恶意的攻击者盗取用户信息，从而可以保证用户信息的安全。")]),v._v(" "),t("p",[t("strong",[v._v("对于非同源的请求，我们常常称为跨域请求，需要进行跨域处理。常见的跨域解决方案有这几种。")])]),v._v(" "),t("ul",[t("li",[v._v("使用"),t("code",[v._v("document.domain + iframe")]),v._v("：只有在主域相同的时候才能使用该方法。")]),v._v(" "),t("li",[v._v("动态创建 "),t("code",[v._v("script(JSONP)")]),v._v("：通过指定回调函数以及函数的传参数据，让页面执行相应的脚本内容。")]),v._v(" "),t("li",[v._v("使用"),t("code",[v._v("location.hash + iframe")]),v._v("：利用"),t("code",[v._v("location.hash")]),v._v("来进行传值。")]),v._v(" "),t("li",[v._v("使用"),t("code",[v._v("window.name + iframe")]),v._v("：原理是"),t("code",[v._v("window.name")]),v._v("值在不同的页面（甚至不同域名）加载后依旧存在。")]),v._v(" "),t("li",[v._v("使用"),t("code",[v._v("window.postMessage()")]),v._v("实现跨域通信。")]),v._v(" "),t("li",[v._v("使用跨域资源共享 CORS（Cross-origin resource sharing）。")]),v._v(" "),t("li",[v._v("使用 "),t("code",[v._v("Websockets")])])]),v._v(" "),t("p",[v._v("其中，CORS 作为现在的主流解决方案，它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 Ajax 只能同源使用的限制。实现 CORS 通信的关键是服务器，只要服务端实现了 CORS 接口，就可以进行跨源通信。")]),v._v(" "),t("blockquote",[t("p",[v._v("DNS 解析完成后，浏览器获得了服务端的 IP 地址，接下来便可以向服务端发起 HTTP 请求。目前大多数 HTTP 请求都建立在 TCP 连接上，因此客户端和服务端会先建立起 TCP 连接。")])]),v._v(" "),t("h2",{attrs:{id:"tcp-连接的建立"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-连接的建立"}},[v._v("#")]),v._v(" TCP 连接的建立")]),v._v(" "),t("p",[v._v("TCP 连接的建立过程比较偏通信底层，在前端日常开发过程中不容易接触到。但有时候我们需要优化应用的加载耗时、请求耗时或是定位一些偏底层的问题（请求异常、HTTP 连接无法建立等），都会或多或少依赖这些偏底层的知识。")]),v._v(" "),t("p",[v._v("另外，从面试的角度看，我们需要掌握 "),t("code",[v._v("TCP/UDP")]),v._v(" 的区别、"),t("code",[v._v("TCP")]),v._v(" 的三次握手和四次挥手内容。")]),v._v(" "),t("ul",[t("li",[v._v("TCP 协议提供可靠传输服务，UDP 协议则可以更快地进行通信；")]),v._v(" "),t("li",[v._v("三次握手：指 TCP 连接的建立过程，该过程中客户端和服务端总共需要发送三个包，从而确认连接存在。")]),v._v(" "),t("li",[v._v("四次挥手：指 TCP 连接的断开过程，该过程中需要客户端和服务端总共发送四个包以，从而确认连接关闭。")])]),v._v(" "),t("p",[v._v("当客户端和服务端建立起 TCP 连接之后，HTTP 服务器会监听客户端发起的请求，此时客户端会发起 HTTP 请求")]),v._v(" "),t("h2",{attrs:{id:"http-请求与-tcp-协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-请求与-tcp-协议"}},[v._v("#")]),v._v(" HTTP 请求与 TCP 协议")]),v._v(" "),t("p",[v._v("前面说过，目前大多数 HTTP 请求都是基于 TCP 协议。TCP 协议的目的是提供可靠的数据传输，它用来确保可靠传输的途径主要包括两个：")]),v._v(" "),t("ul",[t("li",[v._v("乱序重建：通过对数据包编号来对其排序，从而使得另一端接收数据时，可以重新根据编号还原顺序")]),v._v(" "),t("li",[v._v("丢包重试：可通过发送方是否得到响应，来检测出丢失的数据并重传这些数据。")])]),v._v(" "),t("p",[v._v("通过以上方式，TCP 在传输过程中不会丢失或破坏任何数据，这也是即使出现网络故障也不会损坏文件下载的原因。")]),v._v(" "),t("p",[v._v("因此，目前大多数 HTTP 连接基于 TCP 协议。不过，在 HTTP/3 中底层支撑是 QUIC 协议，该协议使用的是 UDP 协议。因为 UDP 协议丢弃了 TCP 协议中所有的错误检查内容，因此可以更快地进行通信，更常用于直播和在线游戏的应用。")]),v._v(" "),t("p",[v._v("也就是说，HTTP/3 基于 UDP 协议实现了数据的快速传输，同时通过 QUIC 协议保证了数据的可靠传输，最终实现了又快又可靠的通信。")])])}),[],!1,null,null,null);_.default=a.exports}}]);