(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1185:function(v,_,e){"use strict";e.r(_);var o=e(51),c=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"线程和进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程和进程"}},[v._v("#")]),v._v(" 线程和进程")]),v._v(" "),e("p",[v._v("进程和线程的概念可以这样理解：")]),v._v(" "),e("blockquote",[e("p",[v._v("进程是一个工厂，工厂有它的独立资源--工厂之间相互独立--线程是工厂中的工人，多个工人协作完成任务--工厂内有一个或多个工人--工人之间共享空间")])]),v._v(" "),e("p",[v._v("工厂有多个工人，就相当于一个进程可以有多个线程，而且线程共享进程的空间。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210504213309.png",alt:""}})]),v._v(" "),e("p",[v._v("进程是"),e("code",[v._v("cpu")]),v._v("资源分配的最小单位（是能拥有资源和独立运行的最小单位，系统会给它分配内存）\n线程是"),e("code",[v._v("cpu")]),v._v("调试的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程。核心还是属于一个进程。）")]),v._v(" "),e("h2",{attrs:{id:"浏览器是多进程的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是多进程的"}},[v._v("#")]),v._v(" 浏览器是多进程的")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210504213323.png",alt:""}})]),v._v(" "),e("p",[v._v("浏览器是多进程的，每打开一个"),e("code",[v._v("tab")]),v._v("页，就相当于创建了一个独立的浏览器进程。")]),v._v(" "),e("h3",{attrs:{id:"浏览器包含的进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器包含的进程"}},[v._v("#")]),v._v(" 浏览器包含的进程：")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("Browser")]),v._v("进程：浏览器的主进程（负责协调，主控），只有一个，作用有：\n"),e("ul",[e("li",[v._v("负责浏览器的界面显示，与用户交互，如前进，后退等")]),v._v(" "),e("li",[v._v("负责各个页面的管理，创建和销毁其它进程")]),v._v(" "),e("li",[v._v("将"),e("code",[v._v("Rendered")]),v._v("进程得到的内存中的"),e("code",[v._v("Bitmap")]),v._v(",绘制到用户界面上")]),v._v(" "),e("li",[v._v("网络资源的管理，下载")])])]),v._v(" "),e("li",[v._v("第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建。")]),v._v(" "),e("li",[e("code",[v._v("GPU")]),v._v("进程：最多一个，用于"),e("code",[v._v("3D")]),v._v("绘制等。")]),v._v(" "),e("li",[v._v("浏览器渲染进程（浏览器内核）（"),e("code",[v._v("Render")]),v._v("进程，内部是多线程的）：默认每个"),e("code",[v._v("Tab")]),v._v("页面一个进程，互不影响。主要作用为：\n"),e("ul",[e("li",[v._v("页面渲染，脚本执行，事件处理等")])])])]),v._v(" "),e("p",[v._v("在浏览器中打开一个网页相当于新起了一个进程（进程内有自己的多线程）")]),v._v(" "),e("h3",{attrs:{id:"浏览器多进程的优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器多进程的优势"}},[v._v("#")]),v._v(" 浏览器多进程的优势")]),v._v(" "),e("ul",[e("li",[v._v("避免单个"),e("code",[v._v("page crash")]),v._v("影响整个浏览器")]),v._v(" "),e("li",[v._v("避免第三方插件"),e("code",[v._v("crash")]),v._v("影响整个浏览器")]),v._v(" "),e("li",[v._v("多进程充分利用多核优势")]),v._v(" "),e("li",[v._v("方便使用沙盒模型隔离插件等进程，提高浏览器稳定性")])]),v._v(" "),e("p",[v._v("简单理解就是：如果浏览器是单进程的，某个"),e("code",[v._v("Tab")]),v._v("页崩溃了，就影响了整个浏览器，体验就会很差。同理如果是单进程的，插件崩溃了也会影响整个浏览器;\n当然，内存等资源消耗也会更大，像空间换时间一样。")]),v._v(" "),e("h2",{attrs:{id:"重点是浏览器内核-渲染进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重点是浏览器内核-渲染进程"}},[v._v("#")]),v._v(" 重点是浏览器内核（渲染进程）")]),v._v(" "),e("p",[v._v("对于普通的前端操作来说，最重要的"),e("strong",[v._v("渲染进程")]),v._v("：页面的渲染，"),e("code",[v._v("js")]),v._v("的执行，事件的循环等都在这个进程内执行;")]),v._v(" "),e("p",[e("strong",[v._v("浏览器是多进程的，浏览器的渲染进程是多线程的；")])]),v._v(" "),e("h3",{attrs:{id:"gui渲染线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gui渲染线程"}},[v._v("#")]),v._v(" "),e("code",[v._v("GUI")]),v._v("渲染线程")]),v._v(" "),e("ul",[e("li",[v._v("负责渲染浏览器界面，解析"),e("code",[v._v("HTML")]),v._v(","),e("code",[v._v("CSS")]),v._v(",构建"),e("code",[v._v("DOM")]),v._v("树和"),e("code",[v._v("RenderObject")]),v._v("树，布局和绘制等。")]),v._v(" "),e("li",[v._v("当界面需要重绘或由于某种操作引发回流时，该线程就会执行。")]),v._v(" "),e("li",[v._v("注意，"),e("strong",[e("code",[v._v("GUI")]),v._v("渲染线程与"),e("code",[v._v("JS")]),v._v("引擎线程是互斥的")]),v._v("，当"),e("code",[v._v("JS")]),v._v("引擎执行时"),e("code",[v._v("GUI")]),v._v("线程会被挂起（相当于冻结了）,"),e("code",[v._v("GUI")]),v._v("更新会被保存在一个队列中等到"),e("code",[v._v("JS")]),v._v("引擎空闲时立即被执行。")])]),v._v(" "),e("h3",{attrs:{id:"js引擎线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js引擎线程"}},[v._v("#")]),v._v(" "),e("code",[v._v("JS")]),v._v("引擎线程")]),v._v(" "),e("ul",[e("li",[v._v("也称为"),e("code",[v._v("JS")]),v._v("内核，负责处理"),e("code",[v._v("JavaScript")]),v._v("脚本程序。（例如"),e("code",[v._v("V8")]),v._v("引擎）。")]),v._v(" "),e("li",[e("code",[v._v("JS")]),v._v("引擎线程负责解析"),e("code",[v._v("JavaScript")]),v._v("脚本，运行代码。")]),v._v(" "),e("li",[e("code",[v._v("JS")]),v._v("引擎一直等待着任务队列中任务的到来，然后加以处理，一个"),e("code",[v._v("Tab")]),v._v("页（"),e("code",[v._v("render")]),v._v("进程）中无论什么时候都只有一个"),e("code",[v._v("JS")]),v._v("线程在运行"),e("code",[v._v("JS")]),v._v("程序。")]),v._v(" "),e("li",[v._v("同样注意，"),e("code",[v._v("GUI")]),v._v("渲染线程与"),e("code",[v._v("JS")]),v._v("引擎线程是互斥的，所以如果"),e("code",[v._v("JS")]),v._v("执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。")])]),v._v(" "),e("h3",{attrs:{id:"事件触发线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件触发线程"}},[v._v("#")]),v._v(" 事件触发线程")]),v._v(" "),e("ul",[e("li",[v._v("归属于浏览器而不是"),e("code",[v._v("JS")]),v._v("引擎，用来控制事件循环（可以理解成"),e("code",[v._v("JS")]),v._v("引擎自己都忙不过来，需要浏览器另开线程协助）。")]),v._v(" "),e("li",[v._v("当"),e("code",[v._v("JS")]),v._v("引擎执行代码块如"),e("code",[v._v("setTimeout")]),v._v("时（也可来自浏览器内核的其它线程，如鼠标点击，"),e("code",[v._v("AJAX")]),v._v("异步请求等），会将对应任务添加到事件线程中。")]),v._v(" "),e("li",[v._v("当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待"),e("code",[v._v("JS")]),v._v("引擎的处理。")]),v._v(" "),e("li",[v._v("注意，由于"),e("code",[v._v("JS")]),v._v("的单线程关系，所以这些待处理队列中的事件都得排队等待"),e("code",[v._v("JS")]),v._v("引擎处理（当"),e("code",[v._v("JS")]),v._v("引擎空闲时才会去执行）。")])]),v._v(" "),e("h3",{attrs:{id:"定时触发器线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定时触发器线程"}},[v._v("#")]),v._v(" 定时触发器线程")]),v._v(" "),e("ul",[e("li",[v._v("传说中的"),e("code",[v._v("setTimeout")]),v._v("和"),e("code",[v._v("setInterval")]),v._v("所在的线程")]),v._v(" "),e("li",[v._v("浏览器定时计数器并不是由"),e("code",[v._v("JavaScript")]),v._v("引擎计数的，（因为"),e("code",[v._v("JavaScript")]),v._v("引擎是单线程的，如果处于阻塞线程状态就会影响计时的准确）")]),v._v(" "),e("li",[v._v("因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待"),e("code",[v._v("JS")]),v._v("引擎空闲后执行）")]),v._v(" "),e("li",[v._v("注意，"),e("code",[v._v("W3C")]),v._v("在"),e("code",[v._v("HTML")]),v._v("标准中规定，规定要求"),e("code",[v._v("setTimeout")]),v._v("中低于"),e("code",[v._v("4ms")]),v._v("的时间间隔算为"),e("code",[v._v("4ms")]),v._v("。")])]),v._v(" "),e("h3",{attrs:{id:"异步http请求线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步http请求线程"}},[v._v("#")]),v._v(" 异步"),e("code",[v._v("http")]),v._v("请求线程")]),v._v(" "),e("ul",[e("li",[v._v("在"),e("code",[v._v("XMLHttpRequest")]),v._v("在连接后是通过浏览器新型一个线程请求")]),v._v(" "),e("li",[v._v("将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中，再由"),e("code",[v._v("JavaScript")]),v._v("引擎执行")])]),v._v(" "),e("p",[v._v("总结下来，渲染进程如下：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210504213334.png",alt:""}})]),v._v(" "),e("h3",{attrs:{id:"browser主进程和浏览器内核-渲染进程-的通信过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#browser主进程和浏览器内核-渲染进程-的通信过程"}},[v._v("#")]),v._v(" Browser主进程和浏览器内核（渲染进程）的通信过程")]),v._v(" "),e("p",[v._v("打开一个浏览器，可以看到：任务管理器出现了2个进程（一个主进程，一个是打开"),e("code",[v._v("Tab")]),v._v("页的渲染进程）；")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Browser")]),v._v("主进程收到用户请求，首先需要获取页面内容（如通过网络下载资源）,随后将该任务通过"),e("code",[v._v("RendererHost")]),v._v("接口传递给"),e("code",[v._v("Render")]),v._v("渲染进程")]),v._v(" "),e("li",[e("code",[v._v("Render")]),v._v("渲染进程的"),e("code",[v._v("Renderer")]),v._v("接口收到消息，简单解释后，交给渲染线程"),e("code",[v._v("GUI")]),v._v("，然后开始渲染")]),v._v(" "),e("li",[e("code",[v._v("GUI")]),v._v("渲染线程接收请求，加载网页并渲染网页，这其中可能需要"),e("code",[v._v("Browser")]),v._v("主进程获取资源和需要"),e("code",[v._v("GPU")]),v._v("进程来帮助渲染")]),v._v(" "),e("li",[v._v("当然可能会有"),e("code",[v._v("JS")]),v._v("线程操作"),e("code",[v._v("DOM")]),v._v("（这可能会造成回流并重绘）")]),v._v(" "),e("li",[v._v("最后"),e("code",[v._v("Render")]),v._v("渲染进程将结果传递给"),e("code",[v._v("Browser")]),v._v("主进程")]),v._v(" "),e("li",[e("code",[v._v("Browser")]),v._v("主进程接收到结果并将结果绘制出来")])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210504213343.png",alt:""}})]),v._v(" "),e("h3",{attrs:{id:"浏览器内核-渲染进程-中线程之间的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核-渲染进程-中线程之间的关系"}},[v._v("#")]),v._v(" 浏览器内核（渲染进程）中线程之间的关系")]),v._v(" "),e("p",[e("strong",[v._v("GUI渲染线程与JS引擎线程互斥")])]),v._v(" "),e("p",[v._v("由于"),e("code",[v._v("JavaScript")]),v._v("是可操作"),e("code",[v._v("DOM")]),v._v("的，如果在修改这些元素属性同时渲染界面（即"),e("code",[v._v("JS")]),v._v("线程和"),e("code",[v._v("GUI")]),v._v("线程同时运行），那么渲染线程前后获得的元素数据就可能不一致了。")]),v._v(" "),e("p",[v._v("因此，为了防止渲染出现不可预期的结果，浏览器就设置了互斥的关系，当"),e("code",[v._v("JS")]),v._v("引擎执行时"),e("code",[v._v("GUI")]),v._v("线程会被挂起。"),e("code",[v._v("GUI")]),v._v("更新则会被保存在一个队列中等到"),e("code",[v._v("JS")]),v._v("引擎线程空闲时立即被执行。")]),v._v(" "),e("p",[e("strong",[v._v("JS阻塞页面加载")])]),v._v(" "),e("p",[v._v("从上述的互斥关系，可以推导出，"),e("code",[v._v("JS")]),v._v("如果执行时间过长就会阻塞页面。")]),v._v(" "),e("p",[v._v("譬如，假设"),e("code",[v._v("JS")]),v._v("引擎正在进行巨量的计算，此时就算"),e("code",[v._v("GUI")]),v._v("有更新，也会被保存在队列中，要等到"),e("code",[v._v("JS")]),v._v("引擎空闲后执行。然后由于巨量计算，所以"),e("code",[v._v("JS")]),v._v("引擎可能很久很久才能空闲，肯定就会感觉很卡。")]),v._v(" "),e("p",[v._v("所以，要尽量避免"),e("code",[v._v("JS")]),v._v("执行时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。")]),v._v(" "),e("p",[e("strong",[e("code",[v._v("css")]),v._v("加载是否会阻塞"),e("code",[v._v("dom")]),v._v("树渲染")])]),v._v(" "),e("p",[v._v("这里说的是头部引入"),e("code",[v._v("css")]),v._v("的情况\n首先，我们都知道："),e("code",[v._v("css")]),v._v("是由单独的下载线程异步下载的。\n然后还有几个现象：")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("css")]),v._v("加载不会阻塞"),e("code",[v._v("DOM")]),v._v("树解析（异步加载时"),e("code",[v._v("dom")]),v._v("照常构建）")]),v._v(" "),e("li",[v._v("但会阻塞"),e("code",[v._v("render")]),v._v("树渲染（渲染时需要等"),e("code",[v._v("css")]),v._v("加载完毕，因为"),e("code",[v._v("render")]),v._v("树需要"),e("code",[v._v("css")]),v._v("信息）")])]),v._v(" "),e("p",[v._v("这可能也是浏览器的一种优化机制\n因为你加载"),e("code",[v._v("css")]),v._v("的时候，可能会修改下面"),e("code",[v._v("DOM")]),v._v("节点的样式，如果"),e("code",[v._v("css")]),v._v("加载不阻塞"),e("code",[v._v("render")]),v._v("树渲染的话，那么当"),e("code",[v._v("css")]),v._v("加载完之后，"),e("code",[v._v("render")]),v._v("树可能又得重新重绘或者回流了，这就造成了一些没有必要的损耗\n所以干脆把"),e("code",[v._v("DOM")]),v._v("树的结构先解析完，把可以做的工作做完，然后等"),e("code",[v._v("css")]),v._v("加载完之后，在根据最终的样式来渲染"),e("code",[v._v("render")]),v._v("树，这种做法确实对性能好一点。")]),v._v(" "),e("p",[e("strong",[e("code",[v._v("WebWorker")]),v._v(","),e("code",[v._v("JS")]),v._v("的多线程？")])]),v._v(" "),e("p",[v._v("前文中有提到"),e("code",[v._v("JS")]),v._v("引擎是单线程的，而且"),e("code",[v._v("JS")]),v._v("执行时间过长会阻塞页面，那么"),e("code",[v._v("JS")]),v._v("就真的对"),e("code",[v._v("cpu")]),v._v("密集型计算无能为力么？")]),v._v(" "),e("p",[v._v("所以，后来"),e("code",[v._v("HTML5")]),v._v("中支持了"),e("code",[v._v("WebWorker")]),v._v("。")]),v._v(" "),e("p",[v._v("这样理解下：")]),v._v(" "),e("p",[v._v("创建"),e("code",[v._v("Worker")]),v._v("时，"),e("code",[v._v("JS")]),v._v("引擎向浏览器申请开一个子线程（子线程是浏览器开的，完全受主线程控制，而且不能操作"),e("code",[v._v("DOM")]),v._v("）\n"),e("code",[v._v("JS")]),v._v("引擎线程与"),e("code",[v._v("worker")]),v._v("线程间通过特定的方式通信（"),e("code",[v._v("postMessage API")]),v._v("，需要通过序列化对象来与线程交互特定的数据）")]),v._v(" "),e("p",[v._v("所以，如果有非常耗时的工作，请单独开一个"),e("code",[v._v("Worker")]),v._v("线程，这样里面不管如何翻天覆地都不会影响"),e("code",[v._v("JS")]),v._v("引擎主线程，只待计算出结果后，将结果通信给主线程即可，"),e("code",[v._v("perfect!")])]),v._v(" "),e("p",[v._v("而且注意下，"),e("code",[v._v("JS")]),v._v("引擎是单线程的，这一点的本质仍然未改变，"),e("code",[v._v("Worker")]),v._v("可以理解是浏览器给"),e("code",[v._v("JS")]),v._v("引擎开的外挂，专门用来解决那些大量计算问题。")]),v._v(" "),e("p",[e("strong",[e("code",[v._v("WebWorker")]),v._v("与"),e("code",[v._v("SharedWorker")])])]),v._v(" "),e("p",[v._v("既然都到了这里，就再提一下"),e("code",[v._v("SharedWorker")]),v._v("（避免后续将这两个概念搞混）")]),v._v(" "),e("p",[e("code",[v._v("WebWorker")]),v._v("只属于某个页面，不会和其他页面的"),e("code",[v._v("Render")]),v._v("进程（浏览器内核进程）共享\n所以"),e("code",[v._v("Chrome")]),v._v("在"),e("code",[v._v("Render")]),v._v("进程中（每一个"),e("code",[v._v("Tab")]),v._v("页就是一个"),e("code",[v._v("render")]),v._v("进程）创建一个新的线程来运行"),e("code",[v._v("Worker")]),v._v("中的"),e("code",[v._v("JavaScript")]),v._v("程序。")]),v._v(" "),e("p",[e("code",[v._v("SharedWorker")]),v._v("是浏览器所有页面共享的，不能采用与"),e("code",[v._v("Worker")]),v._v("同样的方式实现，因为它不隶属于某个"),e("code",[v._v("Render")]),v._v("进程，可以为多个"),e("code",[v._v("Render")]),v._v("进程共享使用\n所以"),e("code",[v._v("Chrome")]),v._v("浏览器为"),e("code",[v._v("SharedWorker")]),v._v("单独创建一个进程来运行"),e("code",[v._v("JavaScript")]),v._v("程序，在浏览器中每个相同的"),e("code",[v._v("JavaScript")]),v._v("只存在一个"),e("code",[v._v("SharedWorker")]),v._v("进程，不管它被创建多少次。")]),v._v(" "),e("p",[v._v("看到这里，应该就很容易明白了，本质上就是进程和线程的区别。"),e("code",[v._v("SharedWorker")]),v._v("由独立的进程管理，"),e("code",[v._v("WebWorker")]),v._v("只是属于"),e("code",[v._v("render")]),v._v("进程下的一个线程")]),v._v(" "),e("h3",{attrs:{id:"总结浏览器渲染流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结浏览器渲染流程"}},[v._v("#")]),v._v(" 总结浏览器渲染流程")]),v._v(" "),e("blockquote",[e("p",[v._v("浏览器输入"),e("code",[v._v("url")]),v._v("，浏览器主进程接管，开一个下载线程，然后进行"),e("code",[v._v("http")]),v._v("请求（略去"),e("code",[v._v("DNS")]),v._v("查询，"),e("code",[v._v("IP")]),v._v("寻址等等操作），然后等待响应，获取内容，随后将内容通过"),e("code",[v._v("RendererHost")]),v._v("接口转交给"),e("code",[v._v("Render")]),v._v("进程--浏览器渲染流程开始")])]),v._v(" "),e("p",[v._v("浏览器内核拿到内容后，渲染大概可以划分为：")]),v._v(" "),e("ol",[e("li",[v._v("解析"),e("code",[v._v("html")]),v._v("建立"),e("code",[v._v("dom")]),v._v("要")]),v._v(" "),e("li",[v._v("解析"),e("code",[v._v("css")]),v._v("构建"),e("code",[v._v("render")]),v._v("树（将"),e("code",[v._v("css")]),v._v("代码解析成树形的数据结构，然后结合"),e("code",[v._v("dom")]),v._v("合并成"),e("code",[v._v("render")]),v._v("树）")]),v._v(" "),e("li",[v._v("布局"),e("code",[v._v("render")]),v._v("树（"),e("code",[v._v("Layout/reflow")]),v._v("）,负责各元素尺寸，位置的计算")]),v._v(" "),e("li",[v._v("绘制"),e("code",[v._v("render")]),v._v("树（"),e("code",[v._v("paint")]),v._v("），绘制页面像素信息")]),v._v(" "),e("li",[v._v("浏览器会将各层的信息发送给"),e("code",[v._v("GPU")]),v._v("，"),e("code",[v._v("GPU")]),v._v("会将各层合成（"),e("code",[v._v("composite")]),v._v("）,显示在屏幕上")])]),v._v(" "),e("p",[v._v("渲染完毕后就是"),e("code",[v._v("load")]),v._v("事件了，之后就是自己的"),e("code",[v._v("JS")]),v._v("逻辑处理了，略去了详细步骤。")]),v._v(" "),e("p",[e("strong",[e("code",[v._v("load")]),v._v("事件与"),e("code",[v._v("DOMContentLoaded")]),v._v("事件的先后")])]),v._v(" "),e("p",[v._v("上面提到，渲染完毕后会触发"),e("code",[v._v("load")]),v._v("事件，那么你能分清楚"),e("code",[v._v("load")]),v._v("事件与"),e("code",[v._v("DOMContentLoaded")]),v._v("事件的先后么？")]),v._v(" "),e("p",[v._v("很简单，知道它们的定义就可以了：")]),v._v(" "),e("p",[v._v("当 "),e("code",[v._v("DOMContentLoaded")]),v._v(" 事件触发时，仅当"),e("code",[v._v("DOM")]),v._v("加载完成，不包括样式表，图片。\n(譬如如果有"),e("code",[v._v("async")]),v._v("加载的脚本就不一定完成)")]),v._v(" "),e("p",[v._v("当 "),e("code",[v._v("onload")]),v._v(" 事件触发时，页面上所有的"),e("code",[v._v("DOM")]),v._v("，样式表，脚本，图片都已经加载完成了。（渲染完毕了）")]),v._v(" "),e("p",[v._v("所以，顺序是："),e("code",[v._v("DOMContentLoaded")]),v._v(" -> "),e("code",[v._v("load")])]),v._v(" "),e("h2",{attrs:{id:"普通图层和复合图层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通图层和复合图层"}},[v._v("#")]),v._v(" 普通图层和复合图层")]),v._v(" "),e("p",[v._v("渲染步骤就提到了"),e("code",[v._v("composite")]),v._v("概念;浏览器渲染的图层一般包含两大类：普通图层以及复合图层。")]),v._v(" "),e("ol",[e("li",[v._v("普通文档流内可以理解为一个复合图层（这里默认复合层，里面不管添加多少元素，其实都是在同个复合图层中）")]),v._v(" "),e("li",[e("code",[v._v("absolute")]),v._v("布局（"),e("code",[v._v("fixed")]),v._v("也一样），虽然可以脱离文档流，但它仍然属于默认复合层")]),v._v(" "),e("li",[v._v("可以通过硬件加速的方式，声明一个新的复合图层，它会单独分配资源（当然也会脱离普通文档流，这样一来，不管这个复合图层中怎么变化，也不会影响默认复合层里的回流重绘）")])]),v._v(" "),e("p",[v._v("可以简单理解下："),e("code",[v._v("GPU")]),v._v("中，各个复合图层是单独绘制的，所以互不影响，这也是为什么某些场景硬件加速效果一级棒")]),v._v(" "),e("p",[e("strong",[v._v("如何变成复合图层（硬件加速）")])]),v._v(" "),e("p",[v._v("将元素变成一个复合图层，就是传说中的硬件加速技术")]),v._v(" "),e("ul",[e("li",[v._v("最常用的方式："),e("code",[v._v("translate3d")]),v._v(","),e("code",[v._v("translatez")])]),v._v(" "),e("li",[e("code",[v._v("opacity")]),v._v("属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）")]),v._v(" "),e("li",[e("code",[v._v("will-chang")]),v._v("属性（这个比较偏僻），一般配合"),e("code",[v._v("opacity")]),v._v("与"),e("code",[v._v("translate")]),v._v("使用（而且经测试，除了上述可以引发硬件加速的属性外，其它属性并不会变成复合层），作用是提前告诉浏览器要变化，这样浏览器会开始做一些优化工作（这个最好用完后就释放）")]),v._v(" "),e("li",[e("code",[v._v("<video><iframe><canvas><webgl>")]),v._v("等元素")]),v._v(" "),e("li",[v._v("其它，譬如以前的"),e("code",[v._v("flash")]),v._v("插件")])]),v._v(" "),e("p",[e("strong",[e("code",[v._v("absolute")]),v._v("和硬件加速的区别")])]),v._v(" "),e("p",[v._v("可以看到，"),e("code",[v._v("absolute")]),v._v("虽然可以脱离普通文档流，但是无法脱离默认复合层。")]),v._v(" "),e("p",[v._v("所以，就算"),e("code",[v._v("absolute")]),v._v("中信息改变时不会改变普通文档流中"),e("code",[v._v("render")]),v._v("树，但是，浏览器最终绘制时，是整个复合层绘制的，所以"),e("code",[v._v("absolute")]),v._v("中信息的改变，仍然会影响整个复合层的绘制。（浏览器会重绘它，如果复合层中内容多，"),e("code",[v._v("absolute")]),v._v("带来的绘制信息变化过大，资源消耗是非常严重的）")]),v._v(" "),e("p",[v._v("而硬件加速直接就是在另一个复合层了（另起炉灶），所以它的信息改变不会影响默认复合层（当然了，内部肯定会影响属于自己的复合层），仅仅是引发最后的合成（输出视图）")]),v._v(" "),e("p",[e("strong",[v._v("复合图层的作用")])]),v._v(" "),e("p",[v._v("一般一个元素开启硬件加速后会变成复合图层，可以独立于普通文档流中，改动后可以避免整个页面重绘，提升性能。\n但是尽量不要大量使用复合图层，否则由于资源消耗过度，页面反而会变的更卡。")]),v._v(" "),e("p",[e("strong",[v._v("硬件加速时请使用"),e("code",[v._v("index")])])]),v._v(" "),e("p",[v._v("使用硬件加速时，尽可能的使用index,防止浏览器默认给后续的元素创建复合层渲染\n具体的原理是：\n"),e("code",[v._v("webkit CSS3")]),v._v("中，如果这个元素添加了硬件加速，并且"),e("code",[v._v("index")]),v._v("层级比较低，那么在这个元素的后面其它元素（层级比这个元素高的，或者相同的，并且"),e("code",[v._v("relective")]),v._v("或"),e("code",[v._v("absolute")]),v._v("属性相同的），会默认变为复合层渲染，如果处理不当会极大的影响性能")]),v._v(" "),e("p",[v._v("简单点理解，可以认为是一个隐式合成的概念：如果a是一个复合层，而且b在a上面，那么b也会被隐式转为一个复合图层，这点需要特别注意")]),v._v(" "),e("h2",{attrs:{id:"从event-loop谈js的运行机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从event-loop谈js的运行机制"}},[v._v("#")]),v._v(" 从"),e("code",[v._v("Event Loop")]),v._v("谈"),e("code",[v._v("JS")]),v._v("的运行机制")]),v._v(" "),e("p",[v._v("到此时，已经是属于浏览器页面初次渲染完毕后的事情，"),e("code",[v._v("JS")]),v._v("引擎的一些运行机制分析。主要是结合"),e("code",[v._v("Event Loop")]),v._v("来谈"),e("code",[v._v("JS")]),v._v("代码是如何执行的。\n我们已经知道了"),e("code",[v._v("JS")]),v._v("引擎是单线程的，知道了"),e("code",[v._v("JS")]),v._v("引擎线程，事件触发线程，定时触发器线程。\n然后还需要知道：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("JS")]),v._v("分为同步任务和异步任务")]),v._v(" "),e("li",[v._v("同步任务都在主线程上执行，形成一个执行栈")]),v._v(" "),e("li",[v._v("主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件")]),v._v(" "),e("li",[v._v("一旦执行栈中的所有同步任务执行完毕（此时"),e("code",[v._v("JS")]),v._v("引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈，开始执行。")])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210504213400.png",alt:""}})]),v._v(" "),e("p",[v._v("看到这里，应该就可以理解了：为什么有时候"),e("code",[v._v("setTimeOut")]),v._v("推入的事件不能准时执行？因为可能在它推入到事件列表时，主线程还不空闲，正在执行其它代码，所以就必须等待，自然有误差。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210504213408.png",alt:""}})]),v._v(" "),e("p",[v._v("主线程在运行时会产生执行栈，栈中的代码调用某些"),e("code",[v._v("api")]),v._v("时，它们会在事件队列中添加各种事件（当满足触发条件后，如"),e("code",[v._v("ajax")]),v._v("请求完毕）。而当栈中的代码执行完毕，就会去读取事件队列中的事件，去执行那些回调，如此循环。")]),v._v(" "),e("h3",{attrs:{id:"定时器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定时器"}},[v._v("#")]),v._v(" 定时器")]),v._v(" "),e("p",[v._v("上面事件循环机制的核心是："),e("code",[v._v("JS")]),v._v("引擎线程和事件触发线程")]),v._v(" "),e("p",[v._v("调用"),e("code",[v._v("setTimeout")]),v._v("后，是由定时器线程控制等到特定时间后添加到事件队列的，因为"),e("code",[v._v("JS")]),v._v("引擎是单线程的，如果处于阻塞线程状态就会影响计时准确，因此很有必要另开一个线程用来计时。")]),v._v(" "),e("p",[v._v("当使用"),e("code",[v._v("setTimout")]),v._v("或"),e("code",[v._v("setInterval")]),v._v("时，需要定时器线程计时，计时完成后就会将特定的事件推入事件队列中。")]),v._v(" "),e("p",[v._v("如：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("setTimeout(()=>console.log('hello!),1000)\n//等1000毫秒计时完毕后（由定时器线程计时），将回调函数推入事件队列中，等待主线程执行\n\nsetTimeout(()=>{\n    console.log('hello')\n},0)\nconsole.log('begin')\n")])])]),e("p",[v._v("这段代码的效果是最快的时间内将回调函数推入事件队列中，等待主线程执行。")]),v._v(" "),e("p",[v._v("注意：")]),v._v(" "),e("ol",[e("li",[v._v("执行结果是：先"),e("code",[v._v("begin")]),v._v("，后"),e("code",[v._v("hello")])]),v._v(" "),e("li",[v._v("虽然代码的本意是"),e("code",[v._v("0")]),v._v("毫秒就推入事件队列，但是"),e("code",[v._v("W3C")]),v._v("在"),e("code",[v._v("HTML")]),v._v("标准中规定，规定要求"),e("code",[v._v("setTimeout")]),v._v("中低于"),e("code",[v._v("4ms")]),v._v("的时间间隔算为"),e("code",[v._v("4ms")])]),v._v(" "),e("li",[v._v("就算不等待"),e("code",[v._v("4ms")]),v._v("，就算假设"),e("code",[v._v("0")]),v._v("毫秒就推入事件队列，也会先执行"),e("code",[v._v("begin")]),v._v("（因为只能可执行栈内空了后才会主动读取事件队列）")])]),v._v(" "),e("p",[e("strong",[e("code",[v._v("setInterval")])])]),v._v(" "),e("p",[v._v("用"),e("code",[v._v("setTimeout")]),v._v("模拟定期计时和直接用"),e("code",[v._v("setInterval")]),v._v("是有区别的：")]),v._v(" "),e("ul",[e("li",[v._v("每次"),e("code",[v._v("setTimeout")]),v._v("计时到后就会去执行，然后执行一段时间后才会继续"),e("code",[v._v("setTimeout")]),v._v(",中间就多了误差")]),v._v(" "),e("li",[v._v("而"),e("code",[v._v("setInterval")]),v._v("则是每次都精确的隔一段时间推入一个事件（但是，事件的实际执行时间不一定就准确，还有可能是这个事件还没执行完毕，下一个事件就来了）")])]),v._v(" "),e("p",[v._v("而且"),e("code",[v._v("setInterval")]),v._v("有一些比较致命的问题：")]),v._v(" "),e("ul",[e("li",[v._v("累积效应，如果"),e("code",[v._v("setInterval")]),v._v("代码在"),e("code",[v._v("setInterval")]),v._v("再次添加到队列之前还没有完成执行，就会导致定时器代码连续运行好几次，而之间没有间隔，就算正常间隔执行，多个"),e("code",[v._v("setInterval")]),v._v("的代码执行时间可能会比预期小（因为代码执行需要一定时间）")]),v._v(" "),e("li",[v._v("比如你"),e("code",[v._v("ios")]),v._v("的"),e("code",[v._v("webview")]),v._v("，或者"),e("code",[v._v("safari")]),v._v("等浏览器中都有一人特点，在滚动的时候是不执行"),e("code",[v._v("JS")]),v._v("的，如果使用了"),e("code",[v._v("setInterval")]),v._v("，会发现在滚动结束后会执行多次由于滚动不执行"),e("code",[v._v("JS")]),v._v("积攒回调，如果回调执行时间过长，就会非常容易造成卡顿问题和一些不可知的错误（"),e("code",[v._v("setInterval")]),v._v("自带的优化，如果当前事件队列中有"),e("code",[v._v("setInterval")]),v._v("的回调，不会重复添加回调）")]),v._v(" "),e("li",[v._v("而且把浏览器最小化显示等操作时，"),e("code",[v._v("setInterval")]),v._v("并不是不执行程序，它会把"),e("code",[v._v("setInterval")]),v._v("的回调函数放在队列中，等浏览器窗口再次打开时，一瞬间全部执行")])]),v._v(" "),e("p",[v._v("所以，至于这么问题，一般认为的最佳方案是：用"),e("code",[v._v("setTimeout")]),v._v("模拟"),e("code",[v._v("setInterval")]),v._v("或者特殊场合直接用"),e("code",[v._v("requestAnimationFrame")])]),v._v(" "),e("h3",{attrs:{id:"promise时代的microtask与macrotask"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise时代的microtask与macrotask"}},[v._v("#")]),v._v(" "),e("code",[v._v("Promise")]),v._v("时代的"),e("code",[v._v("microtask")]),v._v("与"),e("code",[v._v("macrotask")])]),v._v(" "),e("p",[v._v("在"),e("code",[v._v("es6")]),v._v("盛行的现在，可以看下这题：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("console.log('script start');\n\nsetTimeout(()=>{\n    console.log('setTimeout')\n},0);\n\nPromise.resolve()\n.then(()=>console.log('promise1'))\n.then(()=>console.log('promise2'))\n\nconsole.log('script end')\n\n//执行结果：\nscript start\nscript end\npromise1\npromise2\nsetTimeout\n")])])]),e("p",[v._v("因为"),e("code",[v._v("promise")]),v._v("有一个新的概念"),e("code",[v._v("microtask")]),v._v(".或者可以说"),e("code",[v._v("JS")]),v._v("中分为两种任务："),e("code",[v._v("macrotask")]),v._v("和"),e("code",[v._v("microtask")]),v._v(";\n理解如下：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("macrotask")]),v._v("(又叫宏任务),主代码块，"),e("code",[v._v("setTimeout")]),v._v(","),e("code",[v._v("setInterval")]),v._v("等（可以看到，事件队列中的每一个事件都是一个"),e("code",[v._v("macrotask")]),v._v("）")]),v._v(" "),e("li",[v._v("可以理解是每次执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）")]),v._v(" "),e("li",[v._v("第一个"),e("code",[v._v("macrotask")]),v._v("会从头到尾将这个任务执行完毕，不会执行其它")]),v._v(" "),e("li",[v._v("浏览器为了能够使得"),e("code",[v._v("JS")]),v._v("内部"),e("code",[v._v("macrotask")]),v._v("与"),e("code",[v._v("DOM")]),v._v("任务能够有序的执行，会在一个"),e("code",[v._v("macrotask")]),v._v("执行结束后，在下一个"),e("code",[v._v("macrotask")]),v._v("执行开始前，对页面进行重新渲染（"),e("code",[v._v("task")]),v._v("->渲染->"),e("code",[v._v("task")]),v._v("->...）")]),v._v(" "),e("li",[e("code",[v._v("microtask")]),v._v("（又叫微任务），"),e("code",[v._v("Promise")]),v._v(","),e("code",[v._v("process.nextTick")]),v._v("等。")]),v._v(" "),e("li",[v._v("可以理解是在当前"),e("code",[v._v("macrotask")]),v._v("执行结束后立即执行的任务")]),v._v(" "),e("li",[v._v("也就是说在当前"),e("code",[v._v("macrotask")]),v._v("任务后，下一个"),e("code",[v._v("macrotask")]),v._v("之前，在渲染之前")]),v._v(" "),e("li",[v._v("所以它的响应速度相比"),e("code",[v._v("setTimeout")]),v._v("("),e("code",[v._v("setTimeout")]),v._v("是"),e("code",[v._v("macrotask")]),v._v(")会更快因为无需等待渲染")]),v._v(" "),e("li",[v._v("也就是说，在某一个"),e("code",[v._v("macrotask")]),v._v("执行完成后，就会将在它执行期间产生的所有"),e("code",[v._v("microtask")]),v._v("都执行完毕（在渲染前）")])]),v._v(" "),e("p",[v._v("注意：在"),e("code",[v._v("Node")]),v._v("环境下，"),e("code",[v._v("process.nextTick")]),v._v("的优先级高于"),e("code",[v._v("promise")]),v._v(".也就是：在宏任务结束后会先执行微任务队列中的"),e("code",[v._v("nextTick")]),v._v("部分，然后才会执行微任务中的"),e("code",[v._v("promise")]),v._v("部分。")]),v._v(" "),e("p",[v._v("另外，"),e("code",[v._v("setImmediate")]),v._v("则是规定：在下一次"),e("code",[v._v("Event Loop")]),v._v("（宏任务）时触发（所以它是属于优先级较高的宏任务），（"),e("code",[v._v("Node.js")]),v._v("文档中称，"),e("code",[v._v("setImmediate")]),v._v("指定的回调函数，总是排在"),e("code",[v._v("setTimeout")]),v._v("前面），所以"),e("code",[v._v("setImmediate")]),v._v("如果嵌套的话，是需要经过多个"),e("code",[v._v("Loop")]),v._v("才能完成的，而不会像"),e("code",[v._v("process.nextTick")]),v._v("一样没完没了。")]),v._v(" "),e("p",[v._v("可以理解：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("macrotask")]),v._v("中的事件都是放在一个事件队列中的，而这个队列由事件触发线程维护.")]),v._v(" "),e("li",[e("code",[v._v("microtask")]),v._v("中的所有微任务都是添加到微任务队列中，等待当前"),e("code",[v._v("macrotask")]),v._v("执行完后执行，而这个队列由"),e("code",[v._v("JS")]),v._v("引擎线程维护。")])]),v._v(" "),e("p",[v._v("所以：")]),v._v(" "),e("ul",[e("li",[v._v("执行一个宏任务（栈中没有就从事件队列中获取）")]),v._v(" "),e("li",[v._v("执行过程中如果遇到微任务，就将它添加到微任务的任务队列中")]),v._v(" "),e("li",[v._v("宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）")]),v._v(" "),e("li",[v._v("当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染")]),v._v(" "),e("li",[v._v("渲染完毕后，"),e("code",[v._v("JS")]),v._v("线程继续接管，开始下一个宏任务（从事件队列中获取）")])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210504213420.png",alt:""}})]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s.poetries.work/images/20210504213427.png",alt:""}})]),v._v(" "),e("p",[e("strong",[e("code",[v._v("new Promise")]),v._v("里的函数是直接执行的算做主程序里，而且"),e("code",[v._v(".then")]),v._v("后面的才会放到微任务中。")])]),v._v(" "),e("p",[e("strong",[v._v("另外，请注意下"),e("code",[v._v("Promise")]),v._v("的"),e("code",[v._v("polyfill")]),v._v("与官方版本的区别：")])]),v._v(" "),e("p",[v._v("官方版本中，是标准的"),e("code",[v._v("microtask")]),v._v("形式\n"),e("code",[v._v("polyfill")]),v._v("，一般都是通过"),e("code",[v._v("setTimeout")]),v._v("模拟的，所以是"),e("code",[v._v("macrotask")]),v._v("形式\n请特别注意这两点区别")]),v._v(" "),e("p",[v._v("注意，有一些浏览器执行结果不一样（因为它们可能把"),e("code",[v._v("microtask")]),v._v("当成"),e("code",[v._v("macrotask")]),v._v("来执行了），但是为了简单，这里不描述一些不标准的浏览器下的场景（但记住，有些浏览器可能并不标准）")]),v._v(" "),e("p",[e("code",[v._v("Mutation Observer")]),v._v("可以用来实现"),e("code",[v._v("microtask")]),v._v("（它属于"),e("code",[v._v("microtask")]),v._v("，优先级小于"),e("code",[v._v("Promise")]),v._v("，一般是"),e("code",[v._v("Promise")]),v._v("不支持时才会这样做）")]),v._v(" "),e("p",[v._v("它是"),e("code",[v._v("HTML5")]),v._v("中的新特性，作用是：监听一个"),e("code",[v._v("DOM")]),v._v("变动，当"),e("code",[v._v("DOM")]),v._v("对象树发生任何变动时，"),e("code",[v._v("Mutation Observer")]),v._v("会得到通知")]),v._v(" "),e("p",[v._v("像以前的"),e("code",[v._v("Vue")]),v._v("源码中就是利用它来模拟"),e("code",[v._v("nextTick")]),v._v("的，具体原理是，创建一个"),e("code",[v._v("TextNode")]),v._v("并监听内容变化，然后要"),e("code",[v._v("nextTick")]),v._v("的时候去改一下这个节点的文本内容，如下：（"),e("code",[v._v("Vue")]),v._v("的源码，未修改）")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("var counter=1\nvar observer=newMutationObserver(nextTickHandler)\nvar textNode=document.createTextNode(String(counter))\nobserver.observe(textNode,{characterData:true})\ntimerFunc=()=>{\n    counter=(counter+1)%2\n    textNode.data=String(counter)\n}\n")])])]),e("p",[v._v("不过，现在的"),e("code",[v._v("Vue（2.5+）")]),v._v("的"),e("code",[v._v("nextTick")]),v._v("实现移除了"),e("code",[v._v("Mutation Observer")]),v._v("的方式（据说是兼容性原因），取而代之的是使用"),e("code",[v._v("MessageChannel")]),v._v("（当然，默认情况仍然是"),e("code",[v._v("Promise")]),v._v("，不支持才兼容的）。")]),v._v(" "),e("p",[e("code",[v._v("MessageChannel")]),v._v("属于宏任务，优先级是："),e("code",[v._v("setImmediate->MessageChannel->setTimeout")]),v._v("，所以"),e("code",[v._v("Vue（2.5+）")]),v._v("内部的"),e("code",[v._v("nextTick")]),v._v("与"),e("code",[v._v("2.4")]),v._v("及之前的实现是不一样的，需要注意下。")])])}),[],!1,null,null,null);_.default=c.exports}}]);