(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1091:function(t,a,s){"use strict";s.r(a);var r=s(69),p=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"渲染流程-下-html、css和javascript是如何变成页面的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染流程-下-html、css和javascript是如何变成页面的"}},[t._v("#")]),t._v(" 渲染流程（下）：HTML、CSS和JavaScript是如何变成页面的")]),t._v(" "),s("p",[t._v("在上篇文章中，我们介绍了渲染流水线中的DOM生成、样式计算和布局三个阶段，那今天我们接着讲解渲染流水线后面的阶段。")]),t._v(" "),s("p",[t._v("这里还是先简单回顾下上节前三个阶段的主要内容：在HTML页面内容被提交给渲染引擎之后，渲染引擎首先将HTML解析为浏览器可以理解的DOM；然后根据CSS样式表，计算出DOM树所有节点的样式；接着又计算每个元素的几何坐标位置，并将这些信息保存在布局树中")]),t._v(" "),s("h2",{attrs:{id:"分层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分层"}},[t._v("#")]),t._v(" 分层")]),t._v(" "),s("p",[t._v("现在我们有了布局树，而且每个元素的具体位置信息都计算出来了，那么接下来是不是就要开始着手绘制页面了？")]),t._v(" "),s("p",[t._v("答案依然是否定的。")]),t._v(" "),s("p",[t._v("因为页面中有很多复杂的效果，如一些复杂的3D变换、页面滚动，或者使用z-indexing做z轴排序等，为了更加方便地实现这些效果，渲染引擎还需要为特定的节点生成专用的图层，并生成一棵对应的图层树（LayerTree）。如果你熟悉PS，相信你会很容易理解图层的概念，正是这些图层叠加在一起构成了最终的页面图像。")]),t._v(" "),s("p",[t._v("要想直观地理解什么是图层，你可以打开Chrome的“开发者工具”，选择“Layers”标签，就可以可视化页面的分层情况，如下图所示")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011654847.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("从上图可以看出，渲染引擎给页面分了很多图层，这些图层按照一定顺序叠加在一起，就形成了最终的页面，你可以参考下图")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011654889.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("现在你知道了浏览器的页面实际上被分成了很多图层，这些图层叠加后合成了最终的页面。下面我们再来看看这些图层和布局树节点之间的关系，如文中图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011654926.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("通常情况下，并不是布局树的每个节点都包含一个图层，如果一个节点没有对应的层，那么这个节点就从属于父节点的图层。如上图中的span标签没有专属图层，那么它们就从属于它们的父节点图层。但不管怎样，最终每一个节点都会直接或者间接地从属于一个层。")]),t._v(" "),s("p",[t._v("那么需要满足什么条件，渲染引擎才会为特定的节点创建新的层呢？通常满足下面两点中任意一点的元素就可以被提升为单独的一个图层。")]),t._v(" "),s("p",[s("strong",[t._v("第一点，拥有层叠上下文属性的元素会被提升为单独的一层。")])]),t._v(" "),s("p",[t._v("页面是个二维平面，但是层叠上下文能够让HTML元素具有三维概念，这些HTML元素按照自身属性的优先级分布在垂直于这个二维平面的z轴上。你可以结合下图来直观感受下：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011654173.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("从图中可以看出，明确定位属性的元素、定义透明属性的元素、使用CSS滤镜的元素等，都拥有层叠上下文属性。")]),t._v(" "),s("p",[s("strong",[t._v("第二点，需要剪裁（clip）的地方也会被创建为图层。")])]),t._v(" "),s("p",[t._v("不过首先你需要了解什么是剪裁，结合下面的HTML代码：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n      "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("所以元素有了层叠上下文的属性或者需要被剪裁，那么就会被提升成为单独一层，你可以参看下图："),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("从上图我们可以看到，document层上有A和B层，而B层之上又有两个图层。这些图层组织在一起也是一颗树状结构。"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("图层树是基于布局树来创建的，为了找出哪些元素需要在哪些层中，渲染引擎会遍历布局树来创建层树（Update LayerTree）。"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在这里我们把div的大小限定为200 * 200像素，而div里面的文字内容比较多，文字所显示的区域肯定会超出200 * 200的面积，这时候就产生了剪裁，渲染引擎会把裁剪文字内容的一部分用于显示在div区域，下图是运行时的执行结果")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011655457.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("出现这种裁剪情况的时候，渲染引擎会为文字部分单独创建一个层，如果出现滚动条，滚动条也会被提升为单独的层。你可以参考下图：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011655106.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("所以说，元素有了层叠上下文的属性或者需要被剪裁，满足这任意一点，就会被提升成为单独一层。")]),t._v(" "),s("h2",{attrs:{id:"图层绘制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图层绘制"}},[t._v("#")]),t._v(" 图层绘制")]),t._v(" "),s("p",[t._v("在完成图层树的构建之后，渲染引擎会对图层树中的每个图层进行绘制，那么接下来我们看看渲染引擎是怎么实现图层绘制的？")]),t._v(" "),s("p",[t._v("试想一下，如果给你一张纸，让你先把纸的背景涂成蓝色，然后在中间位置画一个红色的圆，最后再在圆上画个绿色三角形。你会怎么操作呢？")]),t._v(" "),s("p",[s("strong",[t._v("通常，你会把你的绘制操作分解为三步")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("制蓝色背景；")]),t._v(" "),s("li",[t._v("在中间绘制一个红色的圆；")]),t._v(" "),s("li",[t._v("再在圆上绘制绿色三角形")])]),t._v(" "),s("p",[t._v("渲染引擎实现图层的绘制与之类似，会把一个图层的绘制拆分成很多小的绘制指令，然后再把这些指令按照顺序组成一个待绘制列表，如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011655441.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("从图中可以看出，绘制列表中的指令其实非常简单，就是让其执行一个简单的绘制操作，比如绘制粉色矩形或者黑色的线等。而绘制一个元素通常需要好几条绘制指令，因为每个元素的背景、前景、边框都需要单独的指令去绘制。所以在图层绘制阶段，输出的内容就是这些待绘制列表。")]),t._v(" "),s("p",[t._v("你也可以打开“开发者工具”的“Layers”标签，选择“document”层，来实际体验下绘制列表，如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011655212.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("在该图中，区域1就是document的绘制列表，拖动区域2中的进度条可以重现列表的绘制过程。")]),t._v(" "),s("h2",{attrs:{id:"栅格化-raster-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栅格化-raster-操作"}},[t._v("#")]),t._v(" 栅格化（raster）操作")]),t._v(" "),s("p",[t._v("绘制列表只是用来记录绘制顺序和绘制指令的列表，而实际上绘制操作是由渲染引擎中的合成线程来完成的。你可以结合下图来看下渲染主线程和合成线程之间的关系：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011655782.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("如上图所示，当图层的绘制列表准备好之后，主线程会把该绘制列表提交（commit）给合成线程，那么接下来合成线程是怎么工作的呢？")]),t._v(" "),s("p",[t._v("那我们得先来看看什么是视口，你可以参看下图：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011655036.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("通常一个页面可能很大，但是用户只能看到其中的一部分，我们把用户可以看到的这个部分叫做视口（viewport）。")]),t._v(" "),s("p",[t._v("在有些情况下，有的图层可以很大，比如有的页面你使用滚动条要滚动好久才能滚动到底部，但是通过视口，用户只能看到页面的很小一部分，所以在这种情况下，要绘制出所有图层内容的话，就会产生太大的开销，而且也没有必要。")]),t._v(" "),s("p",[t._v("基于这个原因，合成线程会将图层划分为图块（tile），这些图块的大小通常是256x256或者512x512，如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011655923.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("然后合成线程会按照视口附近的图块来优先生成位图，实际生成位图的操作是由栅格化来执行的。所谓栅格化，是指将图块转换为位图。而图块是栅格化执行的最小单位。渲染进程维护了一个栅格化的线程池，所有的图块栅格化都是在线程池内执行的，运行方式如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011656891.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("通常，栅格化过程都会使用GPU来加速生成，使用GPU生成位图的过程叫快速栅格化，或者GPU栅格化，生成的位图被保存在GPU内存中。")]),t._v(" "),s("p",[t._v("相信你还记得，GPU操作是运行在GPU进程中，如果栅格化操作使用了GPU，那么最终生成位图的操作是在GPU中完成的，这就涉及到了跨进程操作。具体形式你可以参考下图：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011656903.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("从图中可以看出，渲染进程把生成图块的指令发送给GPU，然后在GPU中执行生成图块的位图，并保存在GPU的内存中。")]),t._v(" "),s("h2",{attrs:{id:"合成和显示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合成和显示"}},[t._v("#")]),t._v(" 合成和显示")]),t._v(" "),s("p",[t._v("一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令——“DrawQuad”，然后将该命令提交给浏览器进程。")]),t._v(" "),s("p",[t._v("浏览器进程里面有一个叫viz的组件，用来接收合成线程发过来的DrawQuad命令，然后根据DrawQuad命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。")]),t._v(" "),s("p",[t._v("到这里，经过这一系列的阶段，编写好的HTML、CSS、JavaScript等文件，经过浏览器就会显示出漂亮的页面了。")]),t._v(" "),s("h2",{attrs:{id:"渲染流水线大总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染流水线大总结"}},[t._v("#")]),t._v(" 渲染流水线大总结")]),t._v(" "),s("p",[t._v("好了，我们现在已经分析完了整个渲染流程，从HTML到DOM、样式计算、布局、图层、绘制、光栅化、合成和显示。下面我用一张图来总结下这整个渲染流程：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011656385.png",loading:"lazy"}})]),t._v(" "),s("p",[s("strong",[t._v("结合上图，一个完整的渲染流程大致可总结为如下")])]),t._v(" "),s("ul",[s("li",[t._v("渲染进程将HTML内容转换为能够读懂的DOM树结构。")]),t._v(" "),s("li",[t._v("渲染引擎将CSS样式表转化为浏览器可以理解的styleSheets，计算出DOM节点的样式。")]),t._v(" "),s("li",[t._v("创建布局树，并计算元素的布局信息。")]),t._v(" "),s("li",[t._v("对布局树进行分层，并生成分层树。")]),t._v(" "),s("li",[t._v("为每个图层生成绘制列表，并将其提交到合成线程。")]),t._v(" "),s("li",[t._v("合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。")]),t._v(" "),s("li",[t._v("合成线程发送绘制图块命令DrawQuad给浏览器进程。")]),t._v(" "),s("li",[t._v("浏览器进程根据DrawQuad消息生成页面，并显示到显示器上")])]),t._v(" "),s("h2",{attrs:{id:"相关概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关概念"}},[t._v("#")]),t._v(" 相关概念")]),t._v(" "),s("p",[t._v("有了上面介绍渲染流水线的基础，我们再来看看三个和渲染流水线相关的概念——“重排”“重绘”和“合成”。理解了这三个概念对于你后续Web的性能优化会有很大帮助。")]),t._v(" "),s("h3",{attrs:{id:"_1-更新了元素的几何属性-重排"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-更新了元素的几何属性-重排"}},[t._v("#")]),t._v(" 1. 更新了元素的几何属性（重排）")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011656077.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("从上图可以看出，如果你通过JavaScript或者CSS修改元素的几何位置属性，例如改变元素的宽度、高度等，那么浏览器会触发重新布局，解析之后的一系列子阶段，这个过程就叫重排。无疑，重排需要更新完整的渲染流水线，所以开销也是最大的")]),t._v(" "),s("h3",{attrs:{id:"_2-更新元素的绘制属性-重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-更新元素的绘制属性-重绘"}},[t._v("#")]),t._v(" 2. 更新元素的绘制属性（重绘）")]),t._v(" "),s("p",[t._v("接下来，我们再来看看重绘，比如通过JavaScript更改某些元素的背景颜色，渲染流水线会怎样调整呢？你可以参考下图：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011656382.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("从图中可以看出，如果修改了元素的背景颜色，那么布局阶段将不会被执行，因为并没有引起几何位置的变换，所以就直接进入了绘制阶段，然后执行之后的一系列子阶段，这个过程就叫重绘。"),s("strong",[t._v("相较于重排操作，重绘省去了布局和分层阶段，所以执行效率会比重排操作要高一些")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_3-直接合成阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-直接合成阶段"}},[t._v("#")]),t._v(" 3. 直接合成阶段")]),t._v(" "),s("p",[t._v("那如果你更改一个既不要布局也不要绘制的属性，会发生什么变化呢？渲染引擎将跳过布局和绘制，只执行后续的合成操作，我们把这个过程叫做合成。具体流程参考下图")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/images/202203011656299.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("在上图中，我们使用了CSS的transform来实现动画效果，这可以避开重排和重绘阶段，直接在非主线程上执行合成动画操作。这样的效率是最高的，因为是在非主线程上合成，并没有占用主线程的资源，另外也避开了布局和绘制两个子阶段，所以相对于重绘和重排，合成能大大提升绘制效率。")]),t._v(" "),s("p",[t._v("至于如何用这些概念去优化页面，我们会在后面相关章节做详细讲解的，这里你只需要先结合“渲染流水线”弄明白这三个概念及原理就行")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("通过本文的分析，你应该可以看到，Chrome的渲染流水线还是相当复杂晦涩，且难以理解，不过Chrome团队在不断添加新功能的同时，也在不断地重构一些子阶段，目的就是让整体渲染架构变得更加简单和高效，正所谓大道至简。")]),t._v(" "),s("h2",{attrs:{id:"思考时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考时间"}},[t._v("#")]),t._v(" 思考时间")]),t._v(" "),s("p",[t._v("在优化Web性能的方法中，减少重绘、重排是一种很好的优化方式，那么结合文中的分析，你能总结出来为什么减少重绘、重排能优化Web性能吗？那又有那些具体的实践方法能减少重绘、重排呢？")]),t._v(" "),s("ul",[s("li",[t._v("触发repaint reflow的操作尽量放在一起，比如改变dom高度和设置margin分开写，可能会出发两次重排")]),t._v(" "),s("li",[t._v("通过虚拟dom层计算出操作总得差异，一起提交给浏览器。之前还用过createdocumentfragment来汇总append的dom,来减少触发重排重绘次数。")])])])}),[],!1,null,null,null);a.default=p.exports}}]);