(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1171:function(v,_,t){"use strict";t.r(_);var e=t(52),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"报文结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#报文结构"}},[v._v("#")]),v._v(" 报文结构")]),v._v(" "),t("ul",[t("li",[v._v("你也许对 TCP/UDP 的报文格式有所了解，拿 TCP 报文来举例，它在实际要传输的数据之前附加了一个 20 字节的头部数据，存储 TCP 协议必须的额外信息，例如发送方的端口号、接收方的端口号、包序号、标志位等等")]),v._v(" "),t("li",[v._v("有了这个附加的 TCP 头，数据包才能够正确传输，到了目的地后把头部去掉，就可以拿到真正的数据。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s.poetries.work/gitee/2019/12/5.png",alt:""}})]),v._v(" "),t("blockquote",[t("p",[v._v("HTTP 协议也是与 TCP/UDP 类似，同样也需要在实际传输的数据前附加一些头数据，不过与 TCP/UDP 不同的是，它是一个“纯文本”的协议，所以头数据都是 ASCII 码的文本，可以很容易地用肉眼阅读，不用借助程序解析也能够看懂")])]),v._v(" "),t("p",[t("strong",[v._v("HTTP 协议的请求报文和响应报文的结构基本相同，由三大部分组成")])]),v._v(" "),t("ul",[t("li",[v._v("起始行（start line）：描述请求或响应的基本信息；")]),v._v(" "),t("li",[v._v("头部字段集合（header）：使用 "),t("code",[v._v("key-value")]),v._v(" 形式更详细地说明报文；")]),v._v(" "),t("li",[v._v("消息正文（entity）：实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据")])]),v._v(" "),t("p",[v._v("这其中前两部分起始行和头部字段经常又合称为“请求头”或“响应头”，消息正文又称为“实体”，但与“header”对应，很多时候就直接称为“body”。")]),v._v(" "),t("p",[v._v("HTTP 协议规定报文必须有 header，但可以没有 body，而且在 header 之后必须要有一个“空行”，也就是“CRLF”，十六进制的“0D0A”。")]),v._v(" "),t("p",[v._v("所以，一个完整的 HTTP 报文就像是下图的这个样子，注意在 header 和 body 之间有一个“空行”")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s.poetries.work/gitee/2019/12/6.png",alt:""}})]),v._v(" "),t("p",[v._v("说到这里，我不由得想起了一部老动画片《大头儿子和小头爸爸》，你看，HTTP 的报文结构像不像里面的“大头儿子”？")]),v._v(" "),t("p",[v._v("报文里的 header 就是“大头儿子”的“大头”，空行就是他的“脖子”，而后面的 body 部分就是他的身体了。")]),v._v(" "),t("p",[v._v("看一下我们之前用 Wireshark 抓的包吧。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s.poetries.work/gitee/2019/12/7.png",alt:""}})]),v._v(" "),t("p",[v._v("在这个浏览器发出的请求报文里，第一行“GET / HTTP/1.1”就是请求行，而后面的“Host”“Connection”等等都属于 header，报文的最后是一个空白行结束，没有 body。")]),v._v(" "),t("p",[v._v("在很多时候，特别是浏览器发送 GET 请求的时候都是这样，HTTP 报文经常是只有 header 而没 body，相当于只发了一个超级“大头”过来，你可以想象的出来：每时每刻网络上都会有数不清的“大头儿子”在跑来跑去。")]),v._v(" "),t("p",[v._v("不过这个“大头”也不能太大，虽然 HTTP 协议对 header 的大小没有做限制，但各个 Web 服务器都不允许过大的请求头，因为头部太大可能会占用大量的服务器资源，影响运行效率。")]),v._v(" "),t("h2",{attrs:{id:"请求行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[v._v("#")]),v._v(" 请求行")]),v._v(" "),t("p",[v._v("了解了 HTTP 报文的基本结构后，我们来看看请求报文里的起始行也就是请求行（request line），它简要地描述了客户端想要如何操作服务器端的资源。")]),v._v(" "),t("p",[t("strong",[v._v("请求行由三部分构成")])]),v._v(" "),t("ul",[t("li",[v._v("请求方法：是一个动词，如 "),t("code",[v._v("GET/POST")]),v._v("，表示对资源的操作；")]),v._v(" "),t("li",[v._v("请求目标：通常是一个 "),t("code",[v._v("URI")]),v._v("，标记了请求方法要操作的资源；")]),v._v(" "),t("li",[v._v("版本号：表示报文使用的 "),t("code",[v._v("HTTP")]),v._v(" 协议版本")])]),v._v(" "),t("blockquote",[t("p",[v._v("这三个部分通常使用空格（space）来分隔，最后要用 CRLF 换行表示结束。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s.poetries.work/gitee/2019/12/8.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"状态行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态行"}},[v._v("#")]),v._v(" 状态行")]),v._v(" "),t("p",[v._v("比起请求行来说，状态行要简单一些，同样也是由三部分构成：")]),v._v(" "),t("ul",[t("li",[v._v("版本号：表示报文使用的 HTTP 协议版本；")]),v._v(" "),t("li",[v._v("状态码：一个三位数，用代码的形式表示处理的结果，比如 200 是成功，500 是服务器错误；")]),v._v(" "),t("li",[v._v("原因：作为数字状态码补充，是更详细的解释文字，帮助人理解原因")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s.poetries.work/gitee/2019/12/9.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"头部字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#头部字段"}},[v._v("#")]),v._v(" 头部字段")]),v._v(" "),t("p",[v._v("请求行或状态行再加上头部字段集合就构成了 HTTP 报文里完整的请求头或响应头，我画了两个示意图，你可以看一下。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s.poetries.work/gitee/2019/12/10.png",alt:""}}),v._v(" "),t("img",{attrs:{src:"https://s.poetries.work/gitee/2019/12/11.png",alt:""}})]),v._v(" "),t("p",[v._v("请求头和响应头的结构是基本一样的，唯一的区别是起始行，所以我把请求头和响应头里的字段放在一起介绍。")]),v._v(" "),t("p",[v._v("头部字段是 key-value 的形式，key 和 value 之间用“:”分隔，最后用 CRLF 换行表示字段结束。比如在“Host: 127.0.0.1”这一行里 key 就是“Host”，value 就是“127.0.0.1”。")]),v._v(" "),t("p",[v._v("HTTP 头字段非常灵活，不仅可以使用标准里的 Host、Connection 等已有头，也可以任意添加自定义头，这就给 HTTP 协议带来了无限的扩展可能。")]),v._v(" "),t("p",[t("strong",[v._v("不过使用头字段需要注意下面几点：")])]),v._v(" "),t("ul",[t("li",[v._v("字段名不区分大小写，例如“Host”也可以写成“host”，但首字母大写的可读性更好；")]),v._v(" "),t("li",[v._v("字段名里不允许出现空格，可以使用连字符“-”，但不能使用下划线“_”。例如，“testname”是合法的字段名，而“test name”“test_name”是不正确的字段名；")]),v._v(" "),t("li",[v._v("字段名后面必须紧接着“:”，不能有空格，而“:”后的字段值前可以有多个空格；")]),v._v(" "),t("li",[v._v("字段的顺序是没有意义的，可以任意排列不影响语义；")]),v._v(" "),t("li",[v._v("字段原则上不能重复，除非这个字段本身的语义允许，例如 "),t("code",[v._v("Set-Cookie")])])]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("HTTP")]),v._v(" 报文结构就像是“大头儿子”，由“起始行 + 头部 + 空行 + 实体”组成，简单地说就是“"),t("code",[v._v("header+body")]),v._v("”；")]),v._v(" "),t("li",[t("code",[v._v("HTTP")]),v._v(" 报文可以没有 "),t("code",[v._v("body")]),v._v("，但必须要有 "),t("code",[v._v("header")]),v._v("，而且 "),t("code",[v._v("header")]),v._v(" 后也必须要有空行，形象地说就是“大头”必须要带着“脖子”；")]),v._v(" "),t("li",[v._v("请求头由“请求行 + 头部字段”构成，响应头由“状态行 + 头部字段”构成；")]),v._v(" "),t("li",[v._v("请求行有三部分：请求方法，请求目标和版本号；")]),v._v(" "),t("li",[v._v("状态行也有三部分：版本号，状态码和原因字符串；")]),v._v(" "),t("li",[v._v("头部字段是 "),t("code",[v._v("key-value")]),v._v(" 的形式，用“"),t("code",[v._v(":")]),v._v("”分隔，不区分大小写，顺序任意，除了规定的标准头，也可以任意添加自定义字段，实现功能扩展；")]),v._v(" "),t("li",[t("code",[v._v("HTTP/1.1")]),v._v(" 里唯一要求必须提供的头字段是 "),t("code",[v._v("Host")]),v._v("，它必须出现在请求头里，标记虚拟主机名")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s.poetries.work/gitee/2019/12/95.png",alt:""}})])])}),[],!1,null,null,null);_.default=s.exports}}]);