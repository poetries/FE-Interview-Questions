---
sidebarDepth: 4
pageClass: custom-code-highlight
---


# 第八部分：复习篇上

## 一、CSS

### 1. 盒模型

> 页面渲染时，`dom` 元素所采用的 布局模型。可通过`box-sizing`进行设置。根据计算宽高的区域可分为

- `content-box` (`W3C` 标准盒模型)
- `border-box` (`IE` 盒模型)
- `padding-box`
- `margin-box` (浏览器未实现)

### 2. BFC

> 块级格式化上下文，是一个独立的渲染区域，让处于 `BFC` 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

> IE下为 `Layout`，可通过 `zoom:1` 触发

**触发条件:**

- 根元素
- `position: absolute/fixed`
- `display: inline-block / table`
- `float` 元素
- `ovevflow !== visible`


**规则:**

- 属于同一个 `BFC` 的两个相邻 `Box` 垂直排列
- 属于同一个 `BFC` 的两个相邻 `Box` 的 `margin` 会发生重叠
- `BFC` 中子元素的 `margin box` 的左边， 与包含块 (BFC) `border box`的左边相接触 (子元素 `absolute` 除外)
- `BFC` 的区域不会与 `float` 的元素区域重叠
- 计算 `BFC` 的高度时，浮动子元素也参与计算
- 文字层不会被浮动层覆盖，环绕于周围

**应用:**

- 阻止`margin`重叠
- 可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个`div`都位于同一个 `BFC` 区域之中)
- 自适应两栏布局
- 可以阻止元素被浮动元素覆盖

### 3.层叠上下文

> 元素提升为一个比较特殊的图层，在三维空间中 (z轴) 高出普通元素一等。

**触发条件**

- 根层叠上下文(`html`)
- `position`
- `css3`属性
  - `flex`
  - `transform`
  - `opacity`
  - `filter`
  - `will-change`
  - `webkit-overflow-scrolling`

**层叠等级：层叠上下文在z轴上的排序**

- 在同一层叠上下文中，层叠等级才有意义
- `z-index`的优先级最高

![](https://user-gold-cdn.xitu.io/2019/2/14/168e9d9f3a1d368b)

### 4. 居中布局

**水平居中**

- 行内元素: `text-align: center`
- 块级元素: `margin: 0 auto`
- `absolute + transform`
- `flex + justify-content: center`

**垂直居中**

- `line-height: height`
- `absolute + transform`
- `flex + align-items: center`
- `table`


**水平垂直居中**

- `absolute + transform`
- `flex + justify-content + align-items`

### 5. 选择器优先级

- `!important` > 行内样式 > `#id` > `.class` > `tag` > `*` > 继承 > 默认
- 选择器 从右往左 解析

### 6.去除浮动影响，防止父级高度塌陷

- 通过增加尾元素清除浮动
- `:after / <br> : clear: both`
- 创建父级 `BFC`
- 父级设置高度

### 7.link 与 @import 的区别

- `link`功能较多，可以定义 `RSS`，定义 `Rel` 等作用，而`@import`只能用于加载 `css`
- 当解析到`link`时，页面会同步加载所引的 `css`，而`@import`所引用的 `css` 会等到页面加载完才被加载
- `@import`需要 `IE5` 以上才能使用
- `link`可以使用 `js` 动态引入，`@import`不行

### 8. CSS预处理器(Sass/Less/Postcss)

> `CSS`预处理器的原理: 是将类 `CSS`语言通过 `Webpack` 编译 转成浏览器可读的真正 `CSS`。在这层编译之上，便可以赋予 `CSS` 更多更强大的功能，常用功能:

- 嵌套
- 变量
- 循环语句
- 条件语句
- 自动前缀
- 单位转换
- `mixin`复用

> 面试中一般不会重点考察该点，一般介绍下自己在实战项目中的经验即可~

### 9.CSS动画

**transition: 过渡动画**

- `transition-property`: 属性
- `transition-duration`: 间隔
- `transition-timing-function`: 曲线
- `transition-delay`: 延迟
- 常用钩子: `transitionend`

**animation / keyframes**

- `animation-name`: 动画名称，对应`@keyframes`
- `animation-duration`: 间隔
- `animation-timing-function`: 曲线
- `animation-delay`: 延迟
- `animation-iteration-count`: 次数
   - `infinite`: 循环动画
- `animation-direction`: 方向
   - `alternate`: 反向播放
- `animation-fill-mode`: 静止模式
   - `forwards`: 停止时，保留最后一帧
   - `backwards`: 停止时，回到第一帧
   - `both`: 同时运用 `forwards / backwards`
- 常用钩子: `animationend`

> 动画属性: 尽量使用动画属性进行动画，能拥有较好的性能表现

- `translate`
- `scale`
- `rotate`
- `skew`
- `opacity`
- `color`
