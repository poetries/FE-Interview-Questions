
### HTML
---

**语义化**

- HTML标签的语义化是指：通过使用包含语义的标签（如h1-h6）恰当地表示文档结构
- css命名的语义化是指：为html标签添加有意义的class

- 为什么需要语义化：
  - 去掉样式后页面呈现清晰的结构
  - 盲人使用读屏器更好地阅读
  - 搜索引擎更好地理解页面，有利于收录
  - 便团队项目的可持续运作及维护

**简述一下你对HTML语义化的理解？**
- 用正确的标签做正确的事情。
- html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
- 即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;
- 搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
- 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解

**Doctype作用？标准模式与兼容模式各有什么区别?**

- `<!DOCTYPE>`声明位于位`于HTML`文档中的第一行，处于 `<html>` 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。`DOCTYPE`不存在或格式不正确会导致文档以兼容模式呈现
- 标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作

**HTML5 为什么只需要写 <!DOCTYPE HTML>？**

- HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）
-  而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型

**行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？**

- 行内元素有：`a b span img input select strong`（强调的语气）
- 块级元素有：`div ul ol li dl dt dd h1 h2 h3 h4…p`
- 常见的空元素:` <br> <hr> <img> <input> <link> <meta>`

**页面导入样式时，使用link和@import有什么区别？**

- `link`属于`XHTML`标签，除了加载`CSS`外，还能用于定义`RSS`,定义`rel`连接属性等作用；而`@import`是`CSS`提供的，只能用于加载`CSS`
- 页面被加载的时，`link`会同时被加载，而`@import`引用的`CSS`会等到页面被加载完再加载
- `import`是`CSS2.1` 提出的，只在`IE5`以上才能被识别，而`link`是`XHTML`标签，无兼容问题

**介绍一下你对浏览器内核的理解？**

- 主要分成两部分：渲染引擎(`layout engineer`或`Rendering Engine`)和`JS`引擎

- 渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核
- JS引擎则：解析和执行javascript来实现网页的动态效果
- 最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎

**常见的浏览器内核有哪些？**

- `Trident`内核：`IE,MaxThon,TT,The World,360`,搜狗浏览器等。[又称MSHTML]
- `Gecko`内核：`Netscape6`及以上版本，`FF,MozillaSuite/SeaMonkey`等
- `Presto`内核：`Opera7`及以上。      [`Opera`内核原为：Presto，现为：`Blink`;]
- `Webkit`内核：`Safari,Chrome`等。   [ `Chrome`的`Blink`（`WebKit`的分支）]

**html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？**

- HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加
  - 绘画 canvas
  - 用于媒介回放的 video 和 audio 元素
  - 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失
  - sessionStorage 的数据在浏览器关闭后自动删除
  - 语意化更好的内容元素，比如 article、footer、header、nav、section
  - 表单控件，calendar、date、time、email、url、search
  - 新的技术webworker, websocket, Geolocation
  
-  移除的元素：
  - 纯表现的元素：basefont，big，center，font, s，strike，tt，u
  - 对可用性产生负面影响的元素：frame，frameset，noframes
  
- 支持HTML5新标签：
  - IE8/IE7/IE6支持通过document.createElement方法产生的标签
  - 可以利用这一特性让这些浏览器支持HTML5新标签
  - 浏览器支持新标签后，还需要添加标签默认的样式
  
- 当然也可以直接使用成熟的框架、比如html5shim

```
<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com
/svn/trunk/html5.js"</script><![endif]-->
```

- 如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素

**HTML5的离线储存怎么使用，工作原理能不能解释一下？**

- 在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件

- 原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示

- 如何使用：
  - 页面头部像下面一样加入一个manifest的属性；
  - 在cache.manifest文件的编写离线存储的资源
  - 在离线状态时，操作window.applicationCache进行需求实现
```
CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css
    NETWORK:
    resourse/logo.png
    FALLBACK:
    / /offline.html
```

**浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？**

- 在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。

- 离线的情况下，浏览器就直接使用离线存储的资源。

**请描述一下 cookies，sessionStorage 和 localStorage 的区别？**

- cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）
- cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递
- `sessionStorage`和`localStorage`不会自动把数据发给服务器，仅在本地保存
- 存储大小：
  - `cookie`数据大小不能超过4k
  - `sessionStorage`和`localStorage`虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大
  
- 有期时间：
  - `localStorage` 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
  - `sessionStorage`  数据在当前浏览器窗口关闭后自动删除
  - `cookie`  设置的`cookie`过期时间之前一直有效，即使窗口或浏览器关闭
  
**iframe有那些缺点？**

- iframe会阻塞主页面的Onload事件
- 搜索引擎的检索程序无法解读这种页面，不利于SEO
- iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
- 使用`iframe`之前需要考虑这两个缺点。如果需要使用`iframe`，最好是通过`javascript`动态给`iframe`添加`src`属性值，这样可以绕开以上两个问题

**Label的作用是什么？是怎么用的？**

- label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件

**HTML5的form如何关闭自动完成功能？**

- 给不想要提示的 form 或某个 input 设置为 autocomplete=off。

**如何实现浏览器内多个标签页之间的通信? (阿里)**

- WebSocket、SharedWorker
- 也可以调用localstorge、cookies等本地存储方式

**webSocket如何兼容低浏览器？(阿里)**

- Adobe Flash Socket 、
- ActiveX HTMLFile (IE) 、
- 基于 multipart 编码发送 XHR 、
- 基于长轮询的 XHR

**页面可见性（Page Visibility API） 可以有哪些用途？**

- 通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
- 在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放

**如何在页面上实现一个圆形的可点击区域？**

- map+area或者svg
- border-radius
- 纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等

**实现不使用 border 画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果**

```
<div style="height:1px;overflow:hidden;background:red"></div>
```

**网页验证码是干嘛的，是为了解决什么安全问题**

- 区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水
- 有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试

**title与h1的区别、b与strong的区别、i与em的区别？**

- `title`属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响
- `strong`是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容
- i内容展示为斜体，em表示强调的文本

**页面导入样式时，使用 link 和 @import 有什么区别？**

* link 属于HTML标签，除了加载CSS外，还能用于定 RSS等；@import 只能用于加载CSS
* 页面加载的时，link 会同时被加载，而 @import 引用的 CSS 会等到页面被加载完再加载
* @import 只在 IE5 以上才能被识别，而 link 是HTML标签，无兼容问题

**介绍一下你对浏览器内核的理解？**

* 浏览器内核主要分为两部分：渲染引擎(layout engineer 或 Rendering Engine) 和 JS引擎
* 渲染引擎负责取得网页的内容进行布局计和样式渲染，然后会输出至显示器或打印机
* JS引擎则负责解析和执行JS脚本来实现网页的动态效果和用户交互
* 最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎

**常见的浏览器内核有哪些？**

* Blink内核：新版 Chrome、新版 Opera
* Webkit内核：Safari、原Chrome
* Gecko内核：FireFox、Netscape6及以上版本
* Trident内核（又称MSHTML内核）：IE、国产浏览器
* Presto内核：原Opera7及以上

**HTML5有哪些新特性？**

* 新增选择器 document.querySelector、document.querySelectorAll
* 拖拽释放(Drag and drop) API
* 媒体播放的 video 和 audio
* 本地存储 localStorage 和 sessionStorage
* 离线应用 manifest
* 桌面通知 Notifications
* 语意化标签 article、footer、header、nav、section
* 增强表单控件 calendar、date、time、email、url、search
* 地理位置 Geolocation
* 多任务 webworker
* 全双工通信协议 websocket
* 历史管理 history
* 跨域资源共享(CORS) Access-Control-Allow-Origin
* 页面可见性改变事件 visibilitychange
* 跨窗口通信 PostMessage
* Form Data 对象
* 绘画 canvas

**HTML5移除了那些元素？**

* 纯表现的元素：basefont、big、center、font、s、strike、tt、u
* 对可用性产生负面影响的元素：frame、frameset、noframes

**如何处理HTML5新标签的浏览器兼容问题？**

* 通过 document.createElement 创建新标签
* 使用垫片 html5shiv.js

**如何区分 HTML 和 HTML5？**

- DOCTYPE声明、新增的结构元素、功能元素

**HTML5的离线储存工作原理能不能解释一下，怎么使用？**

* HTML5的离线储存原理：
  - 用户在线时，保存更新用户机器上的缓存文件；当用户离线时，可以正常访离线储存问站点或应用内容
  
* HTML5的离线储存使用：

    - 在文档的 html 标签设置 manifest 属性，如 manifest="/offline.appcache"
    - 在项目中新建 manifest 文件，manifest 文件的命名建议：xxx.appcache
    - 在 web 服务器配置正确的 MIME-type，即 text/cache-manifest
    
**浏览器是怎么对HTML5的离线储存资源进行管理和加载的？**


* 在线的情况下，浏览器发现 html 标签有 manifest 属性，它会请求 manifest 文件
* 如果是第一次访问app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储
* 如果已经访问过app且资源已经离线存储了，浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作。如果文件改变了，那么就会重新下载文件中的资源并进行离线存储
* 离线的情况下，浏览器就直接使用离线存储的资源。

**iframe 有那些优点和缺点？**

* 优点：
     - 用来加载速度较慢的内容（如广告）
     - 可以使脚本可以并行下载
     - 可以实现跨子域通信
     
* 缺点：
     - iframe 会阻塞主页面的 onload 事件
     - 无法被一些搜索引擎索识别
     - 会产生很多页面，不容易管理
     
**label 的作用是什么？怎么使用的？**

* label标签来定义表单控件的关系：
  - 当用户选择label标签时，浏览器会自动将焦点转到和label标签相关的表单控件上
  
* 使用方法1：
  - `<label for="mobile">Number:</label>`
  - `<input type="text" id="mobile"/>`
  
* 使用方法2：
  - `<label>Date:<input type="text"/></label>`
  
**如何实现浏览器内多个标签页之间的通信？**

* iframe + contentWindow
* postMessage
* SharedWorker(Web Worker API)
* storage 事件(localStorge API)
* WebSocket

**webSocket 如何兼容低浏览器？**

* Adobe Flash Socket
* ActiveX HTMLFile (IE)
* 基于 multipart 编码发送 XHR
* 基于长轮询的 XHR

**页面可见性（Page Visibility API） 可以有哪些用途？**

* 在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放
* 当用户浏览其他页面，暂停网站首页幻灯自动播放
* 完成登陆后，无刷新自动同步其他页面的登录状态

**title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？**

* title 表示是整个页面标题，h1 则表示层次明确的标题，对页面信息的抓取有很大的影响
* strong 标明重点内容，有语气加强的含义，使用阅读设备阅读网络时，strong 会重读，而 b 

**是展示强调内容**

  * i 内容展示为斜体，em 表示强调的文本
  * 自然样式标签：b, i, u, s, pre
  * 语义样式标签：strong, em, ins, del, code
  * 应该准确使用语义样式标签, 但不能滥用。如果不能确定时，首选使用自然样式标签