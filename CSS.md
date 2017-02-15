### CSS
---

**display: none; 与 visibility: hidden; 的区别**

- 联系：它们都能让元素不可见
- 区别：
  - `display:none`;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；`visibility: hidden`;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见
  - `display: none`;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；`visibility:hidden`;是继承属性，子孙节点消失由于继承了`hidden`，通过设置`visibility: visible`;可以让子孙节点显式
  - 修改常规流中元素的`display`通常会造成文档重排。修改`visibility`属性只会造成本元素的重绘
  - 读屏器不会读取`display: none;`元素内容；会读取`visibility: hidden`元素内容

**css hack原理及常用hack**

- 原理：利用不同浏览器对CSS的支持和解析结果不一样编写针对特定浏览器样式。
- 常见的hack有
  - 属性hack
  - 选择器hack
  - IE条件注释

**link 与 @import 的区别**

 - `link` 是`HTML`方式， `@import` 是`CSS`方式
 - `link `最大限度支持并行下载，` @import` 过多嵌套导致串行下载，出现FOUC
 - `link` 可以通过 `rel="alternate stylesheet"` 指定候选样式
 - 浏览器对 `link` 支持早于` @import` ，可以使用 `@import` 对老浏览器隐藏样式
 - `@import` 必须在样式规则之前，可以在`css`文件中引用其他文件
 - 总体来说：`link`优于`@import`

**CSS有哪些继承属性**

- 关于文字排版的属性如：
  - `font`
	- `word-break`
	- `letter-spacing`
	- `text-align`
	- `text-rendering`
	- `word-spacing`
	- `white-space`
	- `text-indent`
	- `text-transform`
	- `text-shadow`
  - `line-height`
  - `color`
  - `visibility`
  - `cursor`

**display,float,position的关系**

- 如果 `display` 为`none`，那么`position`和`float`都不起作用，这种情况下元素不产生框
- 否则，如果`position`值为`absolute`或者`fixed`，框就是绝对定位的，`float`的计算值为`none`，`display`根据下面的表格进行调整
- 否则，如果`float`不是`none`，框是浮动的，`display`根据下表进行调整
- 否则，如果元素是根元素，`display`根据下表进行调整
- 其他情况下`display`的值为指定值 总结起来：绝对定位、浮动、根元素都需要调整 `display`

**外边距折叠(collapsing margins)**

- 毗邻的两个或多个 `margin` 会合并成一个`margin`，叫做外边距折叠。规则如下：
  - 两个或多个毗邻的普通流中的块元素垂直方向上的`margin`会折叠
  - 浮动元素或`inline-block`元素或绝对定位元素的`margin`不会和垂直方向上的其他元素的margin折叠
  - 创建了块级格式化上下文的元素，不会和它的子元素发生margin折叠
  - 元素自身的`margin-bottom`和`margin-top`相邻时也会折


**介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？**

- 有两种， IE 盒子模型、W3C 盒子模型；
- 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
- 区  别： IE的content部分把 border 和 padding计算了进去;

**CSS选择符有哪些？哪些属性可以继承？**

- id选择器（ # myid）
- 类选择器（.myclassname）
- 标签选择器（div, h1, p）
- 相邻选择器（h1 + p）
- 子选择器（ul > li）
- 后代选择器（li a）
- 通配符选择器（ * ）
- 属性选择器（a[rel = "external"]）
- 伪类选择器（a:hover, li:nth-child）

- 可继承的样式： `font-size font-family color, UL LI DL DD DT`
- 不可继承的样式：`border padding margin width height `

**CSS优先级算法如何计算？**

- 优先级就近原则，同权重情况下样式定义最近者为准
- 载入样式以最后载入的定位为准
- 优先级为: `!important >  id > class > tag` important 比 内联优先级高

**CSS3新增伪类有那些？**

```
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
p:only-child        选择属于其父元素的唯一子元素的每个 <p> 元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。

:after          在元素之前添加内容,也可以用来做清除浮动。
:before         在元素之后添加内容
:enabled        
:disabled       控制表单控件的禁用状态。
:checked        单选框或复选框被选中
```

**如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？**

- 给`div`设置一个宽度，然后添加`margin:0 auto`属性

```
div{
    width:200px;
    margin:0 auto;
 }
 ```
- 居中一个浮动元素

```
//确定容器的宽高 宽500 高 300 的层
//设置层的外边距

 .div {
      width:500px ; height:300px;//高度可以不设
      margin: -150px 0 0 -250px;
      position:relative;         //相对定位
      background-color:pink;     //方便看效果
      left:50%;
      top:50%;
 }
 ```
 
 - 让绝对定位的div居中
 
```
  position: absolute;
  width: 1200px;
  background: none;
  margin: 0 auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  ```
  
**display有哪些值？说明他们的作用**
  
- block         象块类型元素一样显示。
- none          缺省值。象行内元素类型一样显示。
- inline-block  象行内元素一样显示，但其内容象块类型元素一样显示。
- list-item     象块类型元素一样显示，并添加样式列表标记。
- table         此元素会作为块级表格来显示
- inherit       规定应该从父元素继承 display 属性的值

**position的值relative和absolute定位原点是？**

- absolute
    - 生成绝对定位的元素，相对于值不为 static的第一个父元素进行定位。
- fixed （老IE不支持）
    - 生成绝对定位的元素，相对于浏览器窗口进行定位。
- relative
    - 生成相对定位的元素，相对于其正常位置进行定位。
- static
    - 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right - z-index 声明）。
- inherit
    - 规定从父元素继承 position 属性的值
    
**CSS3有哪些新特性？**

 - 新增各种CSS选择器  （: not(.input)：所有 class 不是“input”的节点）
 - 圆角           （border-radius:8px）
 - 多列布局        （multi-column layout）
 - 阴影和反射        （Shadow\Reflect）
 - 文字特效      （text-shadow、）
 - 文字渲染      （Text-decoration）
 - 线性渐变      （gradient）
 - 旋转          （transform）
 - 增加了旋转,缩放,定位,倾斜,动画，多背景
 - `transform:\scale(0.85,0.90)\ translate(0px,-30px)\ skew(-9deg,0deg)\Animation:`
 
**用纯CSS创建一个三角形的原理是什么？**

```
// 把上、左、右三条边隐藏掉（颜色设为 transparent）
#demo {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```

**一个满屏 品 字布局 如何设计?**

- 简单的方式：
    - 上面的div宽100%，
    - 下面的两个div分别宽50%，
    - 然后用float或者inline使其不换行即可
    
**经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？**

- png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.
- 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一
- IE下,可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性;
- Firefox下,只能使用getAttribute()获取自定义属性。
   - 解决方法:统一通过getAttribute()获取自定义属性
   
-  IE下,even对象有x,y属性,但是没有pageX,pageY属性
-  Firefox下,event对象有pageX,pageY属性,但是没有x,y属性

**li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？**

- 行框的排列会受到中间空白（回车\空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了

**为什么要初始化CSS样式**

- 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异

**对BFC规范(块级格式化上下文：block formatting context)的理解？**

- 一个页面是由很多个 Box 组成的,元素的类型和 display 属性,决定了这个 Box 的类型
- 不同类型的 Box,会参与不同的 Formatting Context（决定如何渲染文档的容器）,因此Box内的元素会以不同的方式渲染,也就是说BFC内部的元素和外部的元素不会互相影响

**css定义的权重**

```
// 以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下/// 例子是演示各种定义的权重值：

/*权重为1*/
div{
}
/*权重为10*/
.class1{
}
/*权重为100*/
#id1{
}
/*权重为100+1=101*/
#id1 div{
}
/*权重为10+1=11*/
.class1 div{
}
/*权重为10+10+1=21*/
.class1 .class2 div{
}

// 如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现
```

**display:inline-block 什么时候会显示间隙？(携程)**

- 移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing

**谈谈浮动和清除浮动**

- 浮动的框可以向左或向右移动，直到他的外边缘碰到包含框或另一个浮动框的边框为止。由于浮动框不在文档的普通流中，所以文档的普通流的块框表现得就像浮动框不存在一样。浮动的块框会漂浮在文档普通流的块框上


**介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？**

* 盒子模型构成：内容(content)、内填充(padding)、 边框(border)、外边距(margin)
* IE8及其以下版本浏览器，未声明 DOCTYPE，内容宽高会包含内填充和边框，称为怪异盒模型(IE盒模型)
* 标准(W3C)盒模型：元素宽度 = width + padding + border + margin
* 怪异(IE)盒模型：元素宽度 = width + margin
* 标准浏览器通过设置 css3 的 box-sizing: border-box 属性，触发“怪异模式”解析计算宽高

**box-sizing 常用的属性有哪些？分别有什么作用？**

* box-sizing: content-box;  // 默认的标准(W3C)盒模型元素效果
* box-sizing: border-box;   // 触发怪异(IE)盒模型元素的效果
* box-sizing: inherit;      //  继承父元素 box-sizing 属性的值

**CSS选择器有哪些？**

* id选择器        #id
* 类选择器        .class
* 标签选择器      div, h1, p
* 相邻选择器      h1 + p
* 子选择器        ul > li
* 后代选择器      li a
* 通配符选择器    *
* 属性选择器      a[rel='external']
* 伪类选择器      a:hover, li:nth-child

**CSS哪些属性可以继承？哪些属性不可以继承？**

* 可以继承的样式：font-size、font-family、color、list-style、cursor
* 不可继承的样式：width、height、border、padding、margin、background

**CSS如何计算选择器优先？**

* 相同权重，定义最近者为准：行内样式 > 内部样式 > 外部样式
* 含外部载入样式时，后载入样式覆盖其前面的载入的样式和内部样式
* 选择器优先级: 行内样式[1000] > id[100] > class[10] > Tag[1]
* 在同一组属性设置中，!important 优先级最高，高于行内样式

**CSS3新增伪类有哪些？**

- :root           选择文档的根元素，等同于 html 元素

- :empty          选择没有子元素的元素
- :target         选取当前活动的目标元素
- :not(selector)  选择除 selector 元素意外的元素

- :enabled        选择可用的表单元素
- :disabled       选择禁用的表单元素
- :checked        选择被选中的表单元素

- :after          在元素内部最前添加内容
- :before         在元素内部最后添加内容

- :nth-child(n)      匹配父元素下指定子元素，在所有子元素中排序第n
- :nth-last-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n，从后向前数
- :nth-child(odd)
- :nth-child(even)
- :nth-child(3n+1)
- :first-child
- :last-child
- :only-child

- :nth-of-type(n)      匹配父元素下指定子元素，在同类子元素中排序第n
- :nth-last-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第n，从后向前数
- :nth-of-type(odd)
- :nth-of-type(even)
- :nth-of-type(3n+1)
- :first-of-type
- :last-of-type
- :only-of-type

- ::selection     选择被用户选取的元素部分
- :first-line     选择元素中的第一行
- :first-letter   选择元素中的第一个字符

**请列举几种隐藏元素的方法**

* visibility: hidden;   这个属性只是简单的隐藏某个元素，但是元素占用的空间任然存在
* opacity: 0;           CSS3属性，设置0可以使一个元素完全透明
* position: absolute;   设置一个很大的 left 负值定位，使元素定位在可见区域之外
* display: none;        元素会变得不可见，并且不会再占用文档的空间。
* transform: scale(0);  将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留
* `<div hidden="hidden">` HTML5属性,效果和display:none;相同，但这个属性用于记录一个元素的状态
* height: 0;            将元素高度设为 0 ，并消除边框
* filter: blur(0);      CSS3属性，将一个元素的模糊度设置为0，从而使这个元素“消失”在页面中

**rgba() 和 opacity 的透明效果有什么不同？**
* opacity 作用于元素以及元素内的所有内容（包括文字）的透明度
* rgba() 只作用于元素自身的颜色或其背景色，子元素不会继承透明效果

**css 属性 content 有什么作用？**

- content 属性专门应用在 before/after 伪元素上，用于插入额外内容或样式

**CSS3有哪些新特性？**

- 新增选择器     p:nth-child(n){color: rgba(255, 0, 0, 0.75)}
- 弹性盒模型     display: flex;
- 多列布局       column-count: 5;
- 媒体查询       @media (max-width: 480px) {.box: {column-count: 1;}}
- 个性化字体     @font-face{font-family: BorderWeb; src:url(BORDERW0.eot);}
- 颜色透明度     color: rgba(255, 0, 0, 0.75);
- 圆角           border-radius: 5px;
- 渐变           background:linear-gradient(red, green, blue);
- 阴影           box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);
- 倒影           box-reflect: below 2px;
- 文字装饰       text-stroke-color: red;
- 文字溢出       text-overflow:ellipsis;
- 背景效果       background-size: 100px 100px;
- 边框效果       border-image:url(bt_blue.png) 0 10;
- 转换
  - 旋转          transform: rotate(20deg);
  - 倾斜          transform: skew(150deg, -10deg);
  - 位移          transform: translate(20px, 20px);
  - 缩放          transform: scale(.5);
- 平滑过渡       transition: all .3s ease-in .1s;
- 动画           @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;

**请解释一下 CSS3 的 Flexbox（弹性盒布局模型）以及适用场景？**

- Flexbox 用于不同尺寸屏幕中创建可自动扩展和收缩布局

**经常遇到的浏览器的JS兼容性有哪些？解决方法是什么？**

* 当前样式：getComputedStyle(el, null) VS el.currentStyle
* 事件对象：e VS window.event
* 鼠标坐标：e.pageX, e.pageY VS window.event.x, window.event.y
* 按键码：e.which VS event.keyCode
* 文本节点：el.textContent VS el.innerText

**li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？**

* li排列受到中间空白(回车/空格)等的影响，因为空白也属于字符，会被应用样式占据空间，产生间隔
* 解决办法：在ul设置设置font-size=0,在li上设置需要的文字大小

**什么是外边距重叠？ 重叠的结果是什么？**

* 外边距重叠就是 margin-collapse
* 相邻的两个盒子（可能是兄弟关系也可能是祖先关系）的外边距可以结合成一个单独的外边距。
这种合并外边距的方式被称为折叠，结合而成的外边距称为折叠外边距

* 折叠结果遵循下列计算规则：
    - 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值
    - 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值
    - 两个外边距一正一负时，折叠结果是两者的相加的和
    
**请写出多种等高布局**

* 在列的父元素上使用这个背景图进行Y轴的铺放，从而实现一种等高列的假像
* 模仿表格布局等高列效果：兼容性不好，在ie6-7无法正常运行
* css3 flexbox 布局： .container{display: flex; align-items: stretch;}

**css垂直居中的方法有哪些？**

* 如果是单行文本, line-height 设置成和 height 值

```
.vertical {
      height: 100px;
      line-height: 100px;
    }
```
* 已知高度的块级子元素，采用绝对定位和负边距

```
.container {
  position: relative;
}
.vertical {
  height: 300px;  /*子元素高度*/
  position: absolute;
  top:50%;  /*父元素高度50%*/
  margin-top: -150px; /*自身高度一半*/
}
```

 * 未知高度的块级父子元素居中，模拟表格布局
 * 缺点：IE67不兼容，父级 overflow：hidden 失效
 
```
.container {
      display: table;
    }
    .content {
      display: table-cell;
      vertical-align: middle;
    }

```
    
* 新增 inline-block 兄弟元素，设置 vertical-align
   - 缺点：需要增加额外标签，IE67不兼容
   
```

.container {
  height: 100%;/*定义父级高度，作为参考*/
}
.extra .vertical{
  display: inline-block;  /*行内块显示*/
  vertical-align: middle; /*垂直居中*/
}
.extra {
  height: 100%; /*设置新增元素高度为100%*/
}
```
* 绝对定位配合 CSS3 位移

```
.vertical {
  position: absolute;
  top:50%;  /*父元素高度50%*/
  transform:translateY(-50%, -50%);
}
```

* CSS3弹性盒模型

```
.container {
  display:flex;
  justify-content: center; /*子元素水平居中*/
  align-items: center; /*子元素垂直居中*/
}
```

**圣杯布局的实现原理？**

* 要求：三列布局；中间主体内容前置，且宽度自适应；两边内容定宽
  * 好处：重要的内容放在文档流前面可以优先渲染
  * 原理：利用相对定位、浮动、负边距布局，而不添加额外标签
  
 
```css
  .container {
      padding-left: 150px;
      padding-right: 190px;
  }
  .main {
      float: left;
      width: 100%;
  }
  .left {
      float: left;
      width: 190px;
      margin-left: -100%;
      position: relative;
      left: -150px;
  }
  .right {
      float: left;
      width: 190px;
      margin-left: -190px;
      position: relative;
      right: -190px;
  }
```

**什么是双飞翼布局？实现原理？**

- 双飞翼布局：对圣杯布局（使用相对定位，对以后布局有局限性）的改进，消除相对定位布局
- 原理：主体元素上设置左右边距，预留两翼位置。左右两栏使用浮动和负边距归位，消除相对定位。

 
```css
.container {
    /*padding-left:150px;*/
    /*padding-right:190px;*/
}
.main-wrap {
    width: 100%;
    float: left;
}
.main {
    margin-left: 150px;
    margin-right: 190px;
}
.left {
    float: left;
    width: 150px;
    margin-left: -100%;
    /*position: relative;*/
    /*left:-150px;*/
}
.right {
    float: left;
    width: 190px;
    margin-left: -190px;
    /*position:relative;*/
    /*right:-190px;*/
}
```

**在CSS样式中常使用 px、em 在表现上有什么区别？**

* px 相对于显示器屏幕分辨率，无法用浏览器字体放大功能
* em 值并不是固定的，会继承父级的字体大小： em = 像素值 / 父级font-size

**为什么要初始化CSS样式？**

* 不同浏览器对有些标签样式的默认值解析不同
* 不初始化CSS会造成各现浏览器之间的页面显示差异
* 可以使用 reset.css 或 Normalize.css 做 CSS 初始化

**解释下什么是浮动和它的工作原理？**


* 非IE浏览器下，容器不设高度且子元素浮动时，容器高度不能被内容撑开。
此时，内容会溢出到容器外面而影响布局。这种现象被称为浮动（溢出）。
* 工作原理：
  - 浮动元素脱离文档流，不占据空间（引起“高度塌陷”现象）
  - 浮动元素碰到包含它的边框或者其他浮动元素的边框停留
  
**浮动元素引起的问题？**

* 父元素的高度无法被撑开，影响与父元素同级的元素
* 与浮动元素同级的非浮动元素会跟随其后

**列举几种清除浮动的方式？**

* 添加额外标签，例如 `<div style="clear:both"></div>`
* 使用 br 标签和其自身的 clear 属性，例如 `<br clear="all" />`
* 父元素设置 overflow：hidden; 在IE6中还需要触发 hasLayout，例如zoom：1;
* 父元素也设置浮动
* 使用 :after 伪元素。由于IE6-7不支持 :after，使用 zoom:1 触发 hasLayout

**清除浮动最佳实践（after伪元素闭合浮动）：**

```
.clearfix:after{
    content: "\200B";
    display: table; 
    height: 0;
    clear: both;
  }
  .clearfix{
    *zoom: 1;
  }
  ```
  
  **什么是 FOUC(Flash of Unstyled Content)？ 如何来避免 FOUC？**
  
* 当使用 @import 导入 CSS 时，会导致某些页面在 IE 出现奇怪的现象：
没有样式的页面内容显示瞬间闪烁，这种现象称为“文档样式短暂失效”，简称为FOUC
 * 产生原因：当样式表晚于结构性html加载时，加载到此样式表时，页面将停止之前的渲染。
 * 等待此样式表被下载和解析后，再重新渲染页面，期间导致短暂的花屏现象。
 * 解决方法：使用 link 标签将样式表放在文档 head
 
**介绍使用过的 CSS 预处理器？**

* CSS 预处理器基本思想：为 CSS 增加了一些编程的特性（变量、逻辑判断、函数等）
* 开发者使用这种语言进行进行 Web 页面样式设计，再编译成正常的 CSS 文件使用
* 使用 CSS 预处理器，可以使 CSS 更加简洁、适应性更强、可读性更佳，无需考虑兼容性
* 最常用的 CSS 预处理器语言包括：Sass（SCSS）和 LESS

**CSS优化、提高性能的方法有哪些？**

* 多个css合并，尽量减少HTTP请求
* 将css文件放在页面最上面
* 移除空的css规则
* 避免使用CSS表达式
* 选择器优化嵌套，尽量避免层级过深
* 充分利用css继承属性，减少代码量
* 抽象提取公共样式，减少代码量
* 属性值为0时，不加单位
* 属性值为小于1的小数时，省略小数点前面的0
* css雪碧图

**浏览器是怎样解析CSS选择器的？**

- 浏览器解析 CSS 选择器的方式是从右到左

**在网页中的应该使用奇数还是偶数的字体？**

- 在网页中的应该使用“偶数”字体：
  * 偶数字号相对更容易和 web 设计的其他部分构成比例关系
  * 使用奇数号字体时文本段落无法对齐
  * 宋体的中文网页排布中使用最多的就是 12 和 14

**margin和padding分别适合什么场景使用？**

* 需要在border外侧添加空白，且空白处不需要背景（色）时，使用 margin
* 需要在border内测添加空白，且空白处需要背景（色）时，使用 padding

**抽离样式模块怎么写，说出思路？**

- CSS可以拆分成2部分：公共CSS 和 业务CSS：
  - 网站的配色，字体，交互提取出为公共CSS。这部分CSS命名不应涉及具体的业务
  - 对于业务CSS，需要有统一的命名，使用公用的前缀。可以参考面向对象的CSS
  
**元素竖向的百分比设定是相对于容器的高度吗？**

- 元素竖向的百分比设定是相对于容器的宽度，而不是高度

**全屏滚动的原理是什么？ 用到了CSS的那些属性？**

* 原理类似图片轮播原理，超出隐藏部分，滚动时显示
* 可能用到的CSS属性：overflow:hidden; transform:translate(100%, 100%); display:none;

**什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？**

* 响应式设计就是网站能够兼容多个终端，而不是为每个终端做一个特定的版本
* 基本原理是利用CSS3媒体查询，为不同尺寸的设备适配不同样式
* 对于低版本的IE，可采用JS获取屏幕宽度，然后通过resize方法来实现兼容：


```javascript
$(window).resize(function () {
  screenRespond();
});
screenRespond();
function screenRespond(){
var screenWidth = $(window).width();
if(screenWidth <= 1800){
  $("body").attr("class", "w1800");
}
if(screenWidth <= 1400){
  $("body").attr("class", "w1400");
}
if(screenWidth > 1800){
  $("body").attr("class", "");
}
}
```

**什么是视差滚动效果，如何给每页做不同的动画？**

 * 视差滚动是指多层背景以不同的速度移动，形成立体的运动效果，具有非常出色的视觉体验
 * 一般把网页解剖为：背景层、内容层和悬浮层。当滚动鼠标滚轮时，各图层以不同速度移动，形成视差的
 
* 实现原理
  - 以 “页面滚动条” 作为 “视差动画进度条”
  - 以 “滚轮刻度” 当作 “动画帧度” 去播放动画的
  - 监听 mousewheel 事件，事件被触发即播放动画，实现“翻页”效果
  
**a标签上四个伪类的执行顺序是怎么样的？**

```link > visited > hover > active```

- L-V-H-A love hate 用喜欢和讨厌两个词来方便记忆

**伪元素和伪类的区别和作用？**

- 伪元素 -- 在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。
- 它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

```
p::before {content:"第一章：";}
p::after {content:"Hot!";}
p::first-line {background:red;}
p::first-letter {font-size:30px;}

```

- 伪类 -- 将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

```
a:hover {color: #FF00FF}
p:first-child {color: red}
```

**::before 和 :after 中双冒号和单冒号有什么区别？**

* 在 CSS 中伪类一直用 : 表示，如 :hover, :active 等
* 伪元素在CSS1中已存在，当时语法是用 : 表示，如 :before 和 :after
* 后来在CSS3中修订，伪元素用 :: 表示，如 ::before 和 ::after，以此区分伪元素和伪类
* 由于低版本IE对双冒号不兼容，开发者为了兼容性各浏览器，继续使使用 :after 这种老语法表示伪元素
* 综上所述：::before 是 CSS3 中写伪元素的新语法； :after 是 CSS1 中存在的、兼容IE的老语法


**如何修改Chrome记住密码后自动填充表单的黄色背景？**

- 产生原因：由于Chrome默认会给自动填充的input表单加上 input:-webkit-autofill 私有属性造成的
- 解决方案1：在form标签上直接关闭了表单的自动填充：autocomplete="off"
- 解决方案2：input:-webkit-autofill { background-color: transparent; }

**input [type=search] 搜索框右侧小图标如何美化？**

```css
input[type="search"]::-webkit-search-cancel-button{
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 8px;
  background:url("images/searchicon.png") no-repeat 0 0;
  background-size: 15px 15px;
}
```

**网站图片文件，如何点击下载？而非点击预览？**

`<a href="logo.jpg" download>下载</a>`
`<a href="logo.jpg" download="网站LOGO" >下载</a>`

**iOS safari 如何阻止“橡皮筋效果”？**

```javascript
  $(document).ready(function(){
      var stopScrolling = function(event) {
          event.preventDefault();
      }
      document.addEventListener('touchstart', stopScrolling, false);
      document.addEventListener('touchmove', stopScrolling, false);
  });
```

**你对 line-height 是如何理解的？**

* line-height 指一行字的高度，包含了字间距，实际上是下一行基线到上一行基线距离
* 如果一个标签没有定义 height 属性，那么其最终表现的高度是由 line-height 决定的
* 一个容器没有设置高度，那么撑开容器高度的是 line-height 而不是容器内的文字内容
* 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中
* line-height 和 height 都能撑开一个高度，height 会触发 haslayout，而 line-height 不会

**line-height 三种赋值方式有何区别？（带单位、纯数字、百分比）**

* 带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
* 纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 * 18 = 27px
* 百分比：将计算后的值传递给后代

**设置元素浮动后，该元素的 display 值会如何变化？**

- 设置元素浮动后，该元素的 display 值自动变成 block

**怎么让Chrome支持小于12px 的文字？**

```css
  .shrink{
    -webkit-transform:scale(0.8);
    -o-transform:scale(1);
    display:inline-block;
  }
```

**让页面里的字体变清晰，变细用CSS怎么做？（IOS手机浏览器字体齿轮设置）**

```css
  -webkit-font-smoothing: antialiased;
```

**font-style 属性 oblique 是什么意思？**

- font-style: oblique; 使没有 italic 属性的文字实现倾斜

**如果需要手动写动画，你认为最小时间间隔是多久？**

- 16.7ms 多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔: 1s / 60 * 1000 ＝ 16.7ms

**display:inline-block 什么时候会显示间隙？**

* 相邻的 inline-block 元素之间有换行或空格分隔的情况下会产生间距
* 非 inline-block 水平元素设置为 inline-block 也会有水平间距
* 可以借助 vertical-align:top; 消除垂直间隙
* 可以在父级加 font-size：0; 在子元素里设置需要的字体大小，消除垂直间隙
* 把 li 标签写到同一行可以消除垂直间隙，但代码可读性差

**overflow: scroll 时不能平滑滚动的问题怎么处理？**

- 监听滚轮事件，然后滚动到一定距离时用 jquery 的 animate 实现平滑效果。

**一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度**

 - 方案1：
    `.sub { height: calc(100%-100px); }`
 - 方案2：
    `.container { position:relative; }`
    `.sub { position: absolute; top: 100px; bottom: 0; }`
 - 方案3：
    `.container { display:flex; flex-direction:column; }`
    `.sub { flex:1; }`