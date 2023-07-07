(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1093:function(t,s,a){"use strict";a.r(s);var e=a(52),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-代码注入xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码注入xss"}},[t._v("#")]),t._v(" 1 代码注入XSS")]),t._v(" "),a("blockquote",[a("p",[t._v("跨网站指令码（英语："),a("code",[t._v("Cross-site scripting")]),t._v("，通常简称为："),a("code",[t._v("XSS")]),t._v("）是一种网站应用程式的安全漏洞攻击，是代码注入的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 "),a("code",[t._v("HTML")]),t._v(" 以及使用者端脚本语言")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("XSS")]),t._v(" 分为三种：反射型，存储型和 "),a("code",[t._v("DOM-based")])])]),t._v(" "),a("h3",{attrs:{id:"_1-1-如何攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-如何攻击"}},[t._v("#")]),t._v(" 1.1 如何攻击")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("XSS")]),t._v(" 通过修改 "),a("code",[t._v("HTML")]),t._v("节点或者执行 "),a("code",[t._v("JS")]),t._v("代码来攻击网站。")]),t._v(" "),a("li",[t._v("例如通过 "),a("code",[t._v("URL")]),t._v(" 获取某些参数")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- http://www.domain.com?name=<script>alert(1)<\/script> --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{name}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("    \n")])])]),a("blockquote",[a("p",[t._v("上述 "),a("code",[t._v("URL")]),t._v(" 输入可能会将 "),a("code",[t._v("HTML")]),t._v(" 改为 "),a("code",[t._v("<div><script>alert(1)<\/script></div>")]),t._v(" ，这样页面中就凭空多了一段可执行脚本。这种攻击类型是反射型攻击，也可以说是 "),a("code",[t._v("DOM-based")]),t._v(" 攻击")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-如何防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-如何防御"}},[t._v("#")]),t._v(" 1.2 如何防御")]),t._v(" "),a("blockquote",[a("p",[t._v("最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&amp;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&lt;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&gt;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&quto;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&##39;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&##96;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\/")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&##x2F;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("通过转义可以将攻击代码 "),a("code",[t._v("<script>alert(1)<\/script>")]),t._v(" 变成")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> &lt;script&gt;alert(1)&lt;&##x2F;script&gt;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<script>alert(1)<\/script>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("对于显示富文本来说，不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。这种情况通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xss "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<h1 id="title">XSS Demo</h1><script>alert("xss");<\/script>\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;')]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("以上示例使用了 "),a("code",[t._v("js-xss")]),t._v("来实现。可以看到在输出中保留了 "),a("code",[t._v("h1")]),t._v(" 标签且过滤了 "),a("code",[t._v("script")]),t._v(" 标签")])]),t._v(" "),a("h3",{attrs:{id:"_1-3-cookie-如何防范-xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-cookie-如何防范-xss-攻击"}},[t._v("#")]),t._v(" 1.3 cookie 如何防范 XSS 攻击")]),t._v(" "),a("blockquote",[a("p",[t._v("XSS(跨站脚本攻击)是指攻击者在返回的 HTML 中嵌入 javascript 脚本，为了减轻这些 攻击，需要在 HTTP 头部配上，set-cookie")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("httpOnly")]),t._v(" 这个属性可以防止 XSS,它会禁止 javascript 脚本来访问 "),a("code",[t._v("cookie")])]),t._v(" "),a("li",[a("code",[t._v("secure")]),t._v("- 这个属性告诉浏览器仅在请求为 "),a("code",[t._v("https")]),t._v(" 的时候发送 "),a("code",[t._v("cookie")])])]),t._v(" "),a("h2",{attrs:{id:"_2-跨站请求伪造csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-跨站请求伪造csrf"}},[t._v("#")]),t._v(" 2 跨站请求伪造CSRF")]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("code",[t._v("CSRF")]),t._v(" 就是利用用户的登录态发起恶意请求")]),t._v(" "),a("li",[a("code",[t._v("CSRF（Cross-site request forgery）")]),t._v(" 跨站请求伪造，是一种常见的攻击方式。是指 "),a("code",[t._v("A")]),t._v(" 网站正常登陆后，"),a("code",[t._v("cookie")]),t._v(" 正常保存登录信息，其他网站 B 通过某种方式调用 A 网站接口进行操作，"),a("code",[t._v("A")]),t._v(" 的接口会在请求时会自动带上 "),a("code",[t._v("cookie")]),t._v("。")])])]),t._v(" "),a("ul",[a("li",[t._v("同源策略可以通过 "),a("code",[t._v("html")]),t._v(" 标签加载资源，而且同源策略不阻止接口请求而是拦截请求结果，"),a("code",[t._v("CSRF")]),t._v(" 恰恰占了这两个便宜。")]),t._v(" "),a("li",[t._v("对于 "),a("code",[t._v("GET")]),t._v(" 请求，直接放到 "),a("code",[t._v("<img>")]),t._v(" 就能神不知鬼不觉地请求跨域接口。")]),t._v(" "),a("li",[t._v("对于 "),a("code",[t._v("POST")]),t._v(" 请求，很多例子都使用 "),a("code",[t._v("form")]),t._v(" 提交：")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<nowiki>http://bank.com/transfer.do</nowiki>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("acct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("MARIA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("View my pictures"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("浏览器同源策略不能作为防范 CSRF 的方法")]),t._v(" 浏览器允许这么做，归根到底就是因为"),a("strong",[t._v("你无法用 js 直接操作获得的结果。")])])]),t._v(" "),a("p",[a("strong",[t._v("如何攻击")])]),t._v(" "),a("blockquote",[a("p",[t._v("假设网站中有一个通过 Get 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<img src=\"http://www.domain.com/xxx?comment='attack'\"/>\n")])])]),a("p",[a("img",{attrs:{src:"https://s.poetries.work/images/20210506174602.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Set-Cookie'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("username=poetry2;sameSite = strict;path=/;httpOnly;expires=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCookirExpires")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("在B网站，危险网站向A网站发起请求")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 利用img自动发送请求 --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://localhost:8000/api/user/login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("会带上A网站的cookie")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s.poetries.work/images/20210506174856.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在A网站下发cookie的时候，加上sameSite=strict，这样B网站在发送A网站请求，不会自动带上A网站的cookie，保证了安全")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NAME=VALUE    赋予Cookie的名称及对应值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expires=DATE  Cookie 的有效期")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// path=PATH     赋予Cookie的名称及对应值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// domain=域名   作为 Cookie 适用对象的域名 （若不指定则默认为创建 Cookie 的服务器的域名） (一般不指定)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Secure        仅在 HTTPS 安全通信时才会发送 Cookie")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HttpOnly      加以限制，使 Cookie 不能被 JavaScript 脚本访问")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SameSite      Lax|Strict|None  它允许您声明该Cookie是否仅限于第一方或者同一站点上下文")]),t._v("\n\nres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Set-Cookie'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("username=poetry;sameSite=strict;path=/;httpOnly;expires=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCookirExpires")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://s.poetries.work/images/20210506175834.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("如何防御")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Get")]),t._v(" 请求不对数据进行修改")]),t._v(" "),a("li",[t._v("不让第三方网站访问到用户 "),a("code",[t._v("Cookie")])]),t._v(" "),a("li",[t._v("阻止第三方网站请求接口")]),t._v(" "),a("li",[t._v("请求时附带验证信息，比如验证码或者 "),a("code",[t._v("token")])]),t._v(" "),a("li",[a("code",[t._v("SameSite Cookies")]),t._v(": 只能当前域名的网站发出的http请求，携带这个"),a("code",[t._v("Cookie")]),t._v("。当然，由于这是新的cookie属性，在兼容性上肯定会有问题")])]),t._v(" "),a("blockquote",[a("p",[t._v("CSRF攻击，仅仅是利用了http携带cookie的特性进行攻击的，但是攻击站点还是无法得到被攻击站点的cookie。这个和XSS不同，XSS是直接通过拿到Cookie等信息进行攻击的")])]),t._v(" "),a("p",[a("strong",[t._v("在CSRF攻击中，就Cookie相关的特性：")])]),t._v(" "),a("ul",[a("li",[t._v("http请求，会自动携带Cookie。")]),t._v(" "),a("li",[t._v("携带的cookie，还是http请求所在域名的cookie。")])]),t._v(" "),a("h3",{attrs:{id:"csrf怎么获取用户的登录态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf怎么获取用户的登录态"}},[t._v("#")]),t._v(" CSRF怎么获取用户的登录态")]),t._v(" "),a("blockquote",[a("p",[t._v("攻击全称不需要获取cookie，只是在危险的网站欺骗用户去点击已登录的网站链接，利用已登录的网站的自动发送cookie达到目的。因为http请求都会带着请求目标域下的"),a("code",[t._v("cookie")]),t._v("的，向同一个服务器发请求时会带上浏览器保存的对于那个服务器的cookie，而不管你从哪个网站向目标网站发请求")])]),t._v(" "),a("h3",{attrs:{id:"cookie通常是不能跨域访问的-那问什么会有csrf攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie通常是不能跨域访问的-那问什么会有csrf攻击"}},[t._v("#")]),t._v(" cookie通常是不能跨域访问的，那问什么会有csrf攻击")]),t._v(" "),a("p",[a("strong",[t._v("疑问：")])]),t._v(" "),a("blockquote",[a("p",[t._v("csrf说用户访问了A网站，然后又访问恶意网站B, B中也发送请求到A，携带A站的cookie，这样就构成了csrf。\n可是cookie好像是不支持跨域的吧？")])]),t._v(" "),a("p",[a("strong",[t._v("回答")])]),t._v(" "),a("ul",[a("li",[t._v("浏览器会依据加载的域名附带上对应域名"),a("code",[t._v("cookie")]),t._v("，又不是发送b站的"),a("code",[t._v("cookie")]),t._v("。")]),t._v(" "),a("li",[t._v("就是如果用户在"),a("code",[t._v("a")]),t._v("站登录了生成了授权的"),a("code",[t._v("cookie")]),t._v(" 之类的，然后访问"),a("code",[t._v("b")]),t._v("站，b站故意构造请求a站的请求，如删除操作之类的，用"),a("code",[t._v("script")]),t._v("，"),a("code",[t._v("img")]),t._v("或者"),a("code",[t._v("iframe")]),t._v("之类的加载"),a("code",[t._v("a")]),t._v("站着个地址，浏览器会附带上"),a("code",[t._v("a")]),t._v("站此登录用户的授权"),a("code",[t._v("cookie")]),t._v("信息，这样就构成"),a("code",[t._v("crsf")]),t._v("，会删除掉当前用户的数据")])]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("XSS")]),t._v("攻击: 注入恶意代码\n"),a("ul",[a("li",[a("code",[t._v("cookie")]),t._v(" 设置 "),a("code",[t._v("httpOnly")])]),t._v(" "),a("li",[t._v("转义页面上的输入内容和输出内容")])])]),t._v(" "),a("li",[a("code",[t._v("CSRF")]),t._v(": 跨站请求伪造，防护:\n"),a("ul",[a("li",[a("code",[t._v("get")]),t._v("不修改数据")]),t._v(" "),a("li",[t._v("不被第三方网站访问到用户的 "),a("code",[t._v("cookie")])]),t._v(" "),a("li",[t._v("设置白名单，不被第三方网站请求")]),t._v(" "),a("li",[t._v("请求校验")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-浏览器同源策略-sop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-浏览器同源策略-sop"}},[t._v("#")]),t._v(" 3 浏览器同源策略 SOP")]),t._v(" "),a("h3",{attrs:{id:"_3-1-同源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-同源"}},[t._v("#")]),t._v(" 3.1 同源")]),t._v(" "),a("blockquote",[a("p",[t._v("先解释何为同源：协议、域名、端口都一样，就是同源。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("url")]),t._v(" "),a("th",[t._v("同源")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://niconico.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://niconico.com"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("基准")])]),t._v(" "),a("tr",[a("td",[t._v("https://niconico.com/spirit")]),t._v(" "),a("td",[t._v("o")])]),t._v(" "),a("tr",[a("td",[t._v("https://sub.niconico.com/spirit")]),t._v(" "),a("td",[t._v("x")])]),t._v(" "),a("tr",[a("td",[t._v("http://niconico.com/spirit")]),t._v(" "),a("td",[t._v("x")])]),t._v(" "),a("tr",[a("td",[t._v("https://niconico.com:8080/spirit")]),t._v(" "),a("td",[t._v("x")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-限制"}},[t._v("#")]),t._v(" 3.2 限制")]),t._v(" "),a("ul",[a("li",[t._v("你之所以会遇到 "),a("strong",[t._v("跨域问题")]),t._v("，正是因为 SOP 的各种限制。但是具体来说限制了什么呢？")]),t._v(" "),a("li",[t._v("如果你说 SOP 就是“限制非同源资源的获取”，这不对，最简单的例子是引用图片、css、js 文件等资源的时候就允许跨域。")]),t._v(" "),a("li",[t._v("如果你说 SOP 就是“禁止跨域请求”，这也不对，本质上 SOP 并不是禁止跨域请求，而是在请求后拦截了请求的回应。")])]),t._v(" "),a("p",[a("strong",[t._v("其实表面上 SOP 分两种情况：")])]),t._v(" "),a("ul",[a("li",[t._v("可以正常引用 iframe、图片等各种资源，"),a("strong",[t._v("但是")]),t._v("限制对其内容进行操作")]),t._v(" "),a("li",[t._v("直接限制 ajax 请求，准确来说是"),a("strong",[t._v("限制操作 ajax 响应结果")]),t._v("，"),a("strong",[t._v("这会引起后面说到的 CSRF")])])]),t._v(" "),a("blockquote",[a("p",[t._v("但是，本质上这两条是一样的：总之，对于非同源的资源，浏览器可以“直接使用”，但是程序员和用户不可以对这些数据进行操作，杜绝某些居心不良的行为。这就是现代安全浏览器对用户的保护之一。")])]),t._v(" "),a("p",[a("strong",[t._v("下面是 3 个在实际应用中会遇到的例子：")])]),t._v(" "),a("ul",[a("li",[t._v("使用 ajax 请求其他跨域 API，最常见的情况，前端新手噩梦")]),t._v(" "),a("li",[t._v("iframe 与父页面交流（如 DOM 或变量的获取），出现率比较低，而且解决方法也好懂")]),t._v(" "),a("li",[t._v("对跨域图片（例如来源于 "),a("code",[t._v("<img>")]),t._v(" ）进行操作，在 canvas 操作图片的时候会遇到这个问题")])]),t._v(" "),a("p",[a("strong",[t._v("如果没有了 SOP：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("iframe")]),t._v(" 里的机密信息被肆意读取")]),t._v(" "),a("li",[t._v("更加肆意地进行 "),a("code",[t._v("CSRF")])]),t._v(" "),a("li",[t._v("接口被第三方滥用")])]),t._v(" "),a("h3",{attrs:{id:"_3-3-绕过跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-绕过跨域"}},[t._v("#")]),t._v(" 3.3 绕过跨域")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("SOP")]),t._v(" 虽然让用户更安全，同时也会对程序员带来一定程度的麻烦，因为有时候业务上就是有跨域的需求。绕过跨域的方案由于篇幅所限，并且网上也很多相关文章，所以不在这里展开解决跨域的方案，只给出几个关键词：")])]),t._v(" "),a("p",[a("strong",[t._v("对于 ajax")])]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("JSONP")])]),t._v(" "),a("li",[t._v("后端进行 "),a("code",[t._v("CORS")]),t._v(" 配置")]),t._v(" "),a("li",[t._v("后端反向代理")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("WebSocket")])])]),t._v(" "),a("p",[a("strong",[t._v("对于 iframe")])]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("location.hash")]),t._v(" 或 "),a("code",[t._v("window.name")]),t._v(" 进行信息交流")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("postMessage")])])]),t._v(" "),a("h3",{attrs:{id:"_3-4-浏览器同源策略与ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-浏览器同源策略与ajax"}},[t._v("#")]),t._v(" 3.4 浏览器同源策略与ajax")]),t._v(" "),a("blockquote",[a("p",[t._v("对于 ajax 请求，在获得数据之后你能肆意进行 js 操作。这时候虽然同源策略会阻止响应，但依然会发出请求。因为"),a("strong",[t._v("执行响应拦截的是浏览器")]),t._v("而不是后端程序。事实上你的"),a("strong",[t._v("请求已经发到服务器")]),t._v("并返回了结果，但是迫于安全策略，浏览器不允许你"),a("strong",[t._v("继续进行 js 操作")]),t._v("，所以报出你熟悉的 "),a("code",[t._v("blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.")]),t._v("。")])]),t._v(" "),a("p",[a("strong",[t._v("所以再强调一次，同源策略不能作为防范 CSRF 的方法")]),t._v("。")]),t._v(" "),a("p",[t._v("不过"),a("strong",[t._v("可以防范 CSRF 的例外")]),t._v("还是有的，浏览器并不是让所有请求都发送成功，上述情况仅限于"),a("strong",[t._v("简单请求")]),t._v("，相关知识会在下面 CORS 一节详细解释。")]),t._v(" "),a("h2",{attrs:{id:"_4-跨域资源共享-cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-跨域资源共享-cors"}},[t._v("#")]),t._v(" 4 跨域资源共享 CORS")]),t._v(" "),a("p",[t._v("跨域是浏览器限制，跨域资源共享（Cross-origin resource sharing）也是服务器与浏览器协调的结果。")]),t._v(" "),a("blockquote",[a("p",[t._v("如果服务器设置了 CORS 相关配置，在返回浏览器的请求头会加上 "),a("code",[t._v("Access-Control-Allow-Origin")]),t._v("，浏览器看到这个字段的值与当前的源匹配，就会解锁跨域限制。")])]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HTTP/1.1 200 OK\nDate: Sun, 24 Apr 2016 12:43:39 GMT\nServer: Apache\nAccess-Control-Allow-Origin: http://www.acceptmeplease.com\nKeep-Alive: timeout=2, max=100\nConnection: Keep-Alive\nContent-Type: application/xml\nContent-Length: 423\n")])])]),a("p",[t._v("对于 CORS，请求分两种。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-简单请求"}},[t._v("#")]),t._v(" 4.1 简单请求")]),t._v(" "),a("ul",[a("li",[t._v("请求方法使用 "),a("code",[t._v("GET")]),t._v("、"),a("code",[t._v("POST")]),t._v(" 或 "),a("code",[t._v("HEAD")])]),t._v(" "),a("li",[a("code",[t._v("Content-Type")]),t._v(" 设为 "),a("code",[t._v("application/x-www-form-urlencoded")]),t._v("、"),a("code",[t._v("multipart/form-data")]),t._v(" 或 "),a("code",[t._v("text/plain")])])]),t._v(" "),a("p",[t._v("符合上面两个条件的都为 "),a("code",[t._v("CORS")]),t._v(" 简单请求。简单请求都会直接发到服务器，会造成 "),a("code",[t._v("CSRF")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_4-2-预检请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-预检请求"}},[t._v("#")]),t._v(" 4.2 预检请求")]),t._v(" "),a("blockquote",[a("p",[t._v("不符合简单请求要求的请求都需要先发送预检请求（Preflight Request）。浏览器会在真正请求前发送 OPTION 方法的请求向服务器询问当前源是否符合 CORS 目标，验证通过后才会发送正式请求。")])]),t._v(" "),a("p",[t._v("例如"),a("strong",[t._v("使用 application/json 传参的 POST 请求")]),t._v("就是非简单请求，会在预检中被拦截。")]),t._v(" "),a("p",[t._v("再例如使用 "),a("code",[t._v("PUT")]),t._v(" 方法请求，也会发送预检请求。")]),t._v(" "),a("p",[t._v("上面提到的"),a("strong",[t._v("可以防范 CSRF 的例外")]),t._v("，就是指预检请求。即使跨域成功请求预检，但真正请求并不能发出去，这就保证了 "),a("code",[t._v("CSRF")]),t._v(" 无法成功。")]),t._v(" "),a("h3",{attrs:{id:"_4-3-cors-与-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-cors-与-cookie"}},[t._v("#")]),t._v(" 4.3 CORS 与 cookie")]),t._v(" "),a("ul",[a("li",[t._v("与同域不同，用于跨域的 "),a("code",[t._v("CORS")]),t._v(" 请求默认不发送 "),a("code",[t._v("Cookie")]),t._v(" 和 "),a("code",[t._v("HTTP")]),t._v(" 认证信息，前后端都要在配置中设定请求时带上 "),a("code",[t._v("cookie")]),t._v("。")]),t._v(" "),a("li",[t._v("这就是为什么在进行 "),a("code",[t._v("CORS")]),t._v(" 请求时 "),a("code",[t._v("axios")]),t._v(" 需要设置 "),a("code",[t._v("withCredentials: true")]),t._v("。")])]),t._v(" "),a("p",[t._v("下面是 "),a("code",[t._v("node.js")]),t._v(" 的后台 "),a("code",[t._v("koa")]),t._v(" 框架的 CORS 设置：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n * CORS middleware\n *\n * @param {Object} [options]\n *  - {String|Function(ctx)} origin `Access-Control-Allow-Origin`, default is request Origin header\n *  - {String|Array} allowMethods `Access-Control-Allow-Methods`, default is 'GET,HEAD,PUT,POST,DELETE,PATCH'\n *  - {String|Array} exposeHeaders `Access-Control-Expose-Headers`\n *  - {String|Array} allowHeaders `Access-Control-Allow-Headers`\n *  - {String|Number} maxAge `Access-Control-Max-Age` in seconds\n *  - {Boolean} credentials `Access-Control-Allow-Credentials`\n *  - {Boolean} keepHeadersOnError Add set headers to `err.header` if an error is thrown\n * @return {Function} cors middleware\n * @api public\n */\n")])])]),a("blockquote",[a("p",[t._v("顺带一提，"),a("code",[t._v("Access-Control-Allow-Credentials")]),t._v(" 设为 "),a("code",[t._v("true")]),t._v(" 时，"),a("code",[t._v("Access-Control-Allow-Origin")]),t._v(" 强制不能设为 "),a("code",[t._v("*")]),t._v("，为了安全，也是挺麻烦")])]),t._v(" "),a("h2",{attrs:{id:"_5-密码安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-密码安全"}},[t._v("#")]),t._v(" 5 密码安全")]),t._v(" "),a("p",[a("strong",[t._v("加盐")])]),t._v(" "),a("blockquote",[a("p",[t._v("对于密码存储来说，必然是不能明文存储在数据库中的，否则一旦数据库泄露，会对用户造成很大的损失。并且不建议只对密码单纯通过加密算法加密，因为存在彩虹表的关系")])]),t._v(" "),a("ul",[a("li",[t._v("通常需要对密码加盐，然后进行几次不同加密算法的加密")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加盐也就是给原密码添加字符串，增加原密码长度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" salt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("但是加盐并不能阻止别人盗取账号，只能确保即使数据库泄露，也不会暴露用户的真实密码。一旦攻击者得到了用户的账号，可以通过暴力破解的方式破解密码。对于这种情况，通常使用验证码增加延时或者限制尝试次数的方式。并且一旦用户输入了错误的密码，也不能直接提示用户输错密码，而应该提示账号或密码错误")])]),t._v(" "),a("p",[a("strong",[t._v("前端加密")])]),t._v(" "),a("blockquote",[a("p",[t._v("虽然前端加密对于安全防护来说意义不大，但是在遇到中间人攻击的情况下，可以避免明文密码被第三方获取")])])])}),[],!1,null,null,null);s.default=n.exports}}]);