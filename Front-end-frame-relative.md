**什么是单页面应用(SPA)？**

* 单页面应用(SPA)是指用户在浏览器加载单一的HTML页面，后续请求都无需再离开此页
* 目标：旨在用为用户提供了更接近本地移动APP或桌面应用程序的体验。

* 流程：第一次请求时，将导航页传输到客户端，其余请求通过 REST API 获取 JSON 数据
* 实现：数据的传输通过 Web Socket API 或 RPC(远程过程调用)。

* 优点：用户体验流畅，服务器压力小，前后端职责分离
* 缺点：关键词布局难度加大，不利于 SEO

**什么是“前端路由”? 什么时候适用“前端路由”? 有哪些优点和缺点?**

* 前端路由通过 URL 和 History 来实现页面切换
* 应用：前端路由主要适用于“前后端分离”的单页面应用(SPA)项目
* 优点：用户体验好，交互流畅
* 缺点：浏览器“前进”、“后退”会重新请求，无法合理利用缓存

**模块化开发怎么做？**

* 封装对象作为命名空间 -- 内部状态可以被外部改写
* 立即执行函数(IIFE) -- 需要依赖多个JS文件，并且严格按顺序加载
* 使用模块加载器 -- require.js, sea.js, EC6 模块

**通行的 Javascript 模块的规范有哪些？**

* CommonJS -- 主要用在服务器端 node.js

```javascript
var math = require('./math');
math.add(2,3);
```

* AMD(异步模块定义) -- require.js

```javascript
require(['./math'], function (math) {
    math.add(2, 3);
});
```

* CMD(通用模块定义) -- sea.js 
```javascript
var math = require('./math');
math.add(2,3);
```

* E6 模块

 
```javascript
import {math} from './math';
math.add(2, 3);
```

**AMD 与 CMD 规范的区别？**


* 规范化产出：
  - AMD 由 RequireJS 推广产出
  - CMD 由 SeaJS 推广产出
  
* 模块的依赖:
  - AMD 提前执行，推崇依赖前置
  - CMD 延迟执行，推崇依赖就近
  
* API 功能:
  - AMD 的 API 默认多功能（分全局 require 和局部 require）
  - CMD 的 API 推崇职责单一纯粹（没有全局 require）
  
 * 模块定义规则：
   - AMD 默认一开始就载入全部依赖模块
   

```javascript
  define(['./a', './b'], function(a, b) {
      a.doSomething();
      b.doSomething();
  });
```

- CMD 依赖模块在用到时才就近载入

```javascript
  define(function(require, exports, module) {
      var a = require('./a');
      a.doSomething();
      var b = require('./b');
      b.doSomething();
  })
```

**requireJS的核心原理是什么？**

- 每个模块所依赖模块都会比本模块预先加载

**对 Node.js 的优点、缺点提出了自己的看法？ Node.js的特点和适用场景？**

* Node.js的特点：单线程，非阻塞I/O，事件驱动
* Node.js的优点：擅长处理高并发；适合I/O密集型应用

- Node.js的缺点：不适合CPU密集运算；不能充分利用多核CPU；可靠性低，某个环节出错会导致整个系统崩溃

 - Node.js的适用场景：
    - RESTful API
    - 实时应用：在线聊天、图文直播
    - 工具类应用：前端部署(npm, gulp)
    - 表单收集：问卷系统
    
**如何判断当前脚本运行在浏览器还是node环境中？**

- 判断 Global 对象是否为 window，如果不为 window，当前脚本没有运行在浏览器中

**什么是 npm ？**

- npm 是 Node.js 的模块管理和发布工具

**什么是 WebKit ？**

* WebKit 是一个开源的浏览器内核，由渲染引擎(WebCore)和JS解释引擎(JSCore)组成
* 通常所说的 WebKit 指的是 WebKit(WebCore)，主要工作是进行 HTML/CSS 渲染
* WebKit 一直是 Safari 和 Chrome(之前) 使用的浏览器内核，后来 Chrome 改用Blink 内核

**如何测试前端代码? 知道 Unit Test，BDD, TDD 么? 怎么测试你的前端工程(mocha, jasmin..)?**

* 通过为前端代码编写单元测试(Unit Test)来测试前端代码
* Unit Test：一段用于测试一个模块或接口是否能达到预期结果的代码
* BDD：行为驱动开发 -- 业务需求描述产出产品代码的开发方法
* TDD：测试驱动开发 -- 单元测试用例代码产出产品代码的开发方法
* 单元测试框架：

 
```javascript
// mocha 示例
describe('Test add', function() {
  it('1 + 2 = 3', function() {
      expect(add(1, 2)).to.be.equal(3);
  });
});

// jasmin 示例
describe('Test add', function () {
    it('1 + 2 = 3', function () {
        expect(add(1, 2)).toEqual(3);
    });
});
```

**介绍你知道的前端模板引擎？**

-  artTemplate, underscore, handlebars

**什么是 Modernizr？ Modernizr 工作原理？**

* Modernizr 是一个开源的 JavaScript 库，用于检测用户浏览器对 HTML5 与 CSS3 的支持情况

**移动端最小触控区域是多大？**

- 44 * 44 px

**移动端的点击事件的延迟时间是多长，为什么会有延迟？ 如何解决这个延时？**

* 移动端 click 有 300ms 延迟，浏览器为了区分“双击”（放大页面）还是“单击”而设计
* 解决方案：
  - 禁用缩放(对safari无效)
  - 使用指针事件(IE私有特性，且仅IE10+)
  - 使用 Zepto 的 tap 事件(有点透BUG)
  - 使用 FastClick 插件(体积大[压缩后8k])

**什么是函数式编程？**

* 函数式编程是一种"编程范式"，主要思想是把运算过程尽量写成一系列嵌套的函数调用
* 例如：var result = subtract(multiply(add(1,2), 3), 4);

* 函数式编程的特点：
    - 函数核心化：函数可以作为变量的赋值、另一函数的参数、另一函数的返回值
    - 只用“表达式”，不用“语句”：要求每一步都是单纯的运算，都必须有返回值
    - 没有"副作用"：所有功能只为返回一个新的值，不修改外部变量
    - 引用透明：运行不依赖于外部变量，只依赖于输入的参数
    
* 函数式编程的优点：
    - 代码简洁，接近自然语言，易于理解
    - 便于维护，利于测试、除错、组合
    - 易于“并发编程“，不用担心一个线程的数据，被另一个线程修改
    - 可“热升级”代码，在运行状态下直接升级代码，不需要重启，也不需要停机
    
**什么是函数柯里化Currying)？**

* 柯里化：
  - 通常也称部分求值，含义是给函数分步传递参数，每次递参部分应用参数，并返回一个更具体的函数，继续接受剩余参数
  - 期间会连续返回具体函数，直至返回最后结果。因此，函数柯里化是逐步传参，逐步缩小函数的适用范围，逐步求解的过程
  - 柯里化的作用：延迟计算；参数复用；动态创建函数
  
* 柯里化的缺点：
  - 函数柯里化会产生开销（函数嵌套，比普通函数占更多内存），但性能瓶颈首先来自其它原因（DOM 操作等）
 
**什么是依赖注入？**

- 当一个类的实例依赖另一个类的实例时，自己不创建该实例，由IOC容器创建并注入给自己，因此称为依赖注入。
- 依赖注入解决的就是如何有效组织代码依赖模块的问题

**设计模式：什么是 singleton, factory, strategy, decorator？**

* Singleton(单例)   一个类只有唯一实例，这个实例在整个程序中有一个全局的访问点
* Factory (工厂)    解决实列化对象产生重复的问题
* Strategy(策略)    将每一个算法封装起来，使它们还可以相互替换，让算法独立于使用
* Observer(观察者)  多个观察者同时监听一个主体，当主体对象发生改变时，所有观察者都将得到通知
* Prototype(原型)   一个完全初始化的实例，用于拷贝或者克隆
* Adapter(适配器)   将不同类的接口进行匹配调整，尽管内部接口不兼容，不同的类还是可以协同工作
* Proxy(代理模式)   一个充当过滤转发的对象用来代表一个真实的对象
* Iterator(迭代器)  在不需要直到集合内部工作原理的情况下，顺序访问一个集合里面的元素
* Chain of Responsibility(职责连)  处理请求组成的对象一条链，请求链中传递，直到有对象可以处理

**什么是前端工程化？**

* 前端工程化就是把一整套前端工作流程使用工具自动化完成


* 前端开发基本流程：
  - 项目初始化：yeoman, FIS
  - 引入依赖包：bower, npm
  - 模块化管理：npm, browserify, Webpack
  - 代码编译：babel, sass, less
  - 代码优化(压缩/合并)：Gulp, Grunt
  - 代码检查：JSHint, ESLint
  - 代码测试：Mocha
* 目前最知名的构建工具：Gulp, Grunt, npm + Webpack

**介绍 Yeoman 是什么？**

* Yeoman --前端开发脚手架工具，自动将最佳实践和工具整合起来构建项目骨架
* Yeoman 其实是三类工具的合体，三类工具各自独立：
  - yo --- 脚手架，自动生成工具（相当于一个粘合剂，把 Yeoman 工具粘合在一起）
  - Grunt、gulp --- 自动化构建工具 （最初只有grunt，之后加入了gulp）
  - Bower、npm --- 包管理工具 （原来是bower，之后加入了npm）
  
**介绍 WebPack 是什么？ 有什么优势？**

* WebPack 是一款[模块加载器]兼[打包工具]，用于把各种静态资源（js/css/image等）作为模块来使用
* WebPack 的优势：
  - WebPack 同时支持 commonJS 和 AMD/CMD，方便代码迁移
  - 不仅仅能被模块化 JS ，还包括 CSS、Image 等
  - 能替代部分 grunt/gulp 的工作，如打包、压缩混淆、图片base64
  - 扩展性强，插件机制完善，特别是支持 React 热插拔的功能
  
**介绍类库和框架的区别？**

* 类库是一些函数的集合，帮助开发者写WEB应用，起主导作用的是开发者的代码
* 框架是已实现的特殊WEB应用，开发者只需对它填充具体的业务逻辑，起主导作用是框架


**什么是 MVC/MVP/MVVM/Flux？**

* MVC(Model-View-Controller) 
  - V->C, C->M, M->V
  - 通信都是单向的；C只起路由作用，业务逻辑都部署在V
  - Backbone
    

* MVP(Model-View-Presenter)
  - V<->P, P<->M
  - 通信都是双向的；V和M不发生联系(通过P传)；V非常薄，逻辑都部署在P
  - Riot.js
  
* MVVM(Model-View-ViewModel)
  - V->VM, VM<->M
  - 采用双向数据绑定：View 和 ViewModel 的变动都会相互映射到对象上面
  - Angular
  
* Flux(Dispatcher-Store-View)
  - Action->Dispatcher->Store->View, View->Action
  - Facebook 为了解决在 MVC 应用中碰到的工程性问题提出一个架构思想
  - 基于一个简单的原则：数据在应用中单向流动（单向数据流）
  - React(Flux 中 View，只关注表现层)
  
**Backbone 是什么？**

- Backbone 是一个基于 jquery 和 underscore 的前端(MVC)框架

**AngularJS 是什么？**

- AngularJS 是一个完善的前端 MVVM 框架，包含模板、数据双向绑定、路由、模块化、服务、依赖注入等
- AngularJS 由 Google 维护，用来协助大型单一页面应用开发。


**React 是什么？**

* React 不是 MV* 框架，用于构建用户界面的 JavaScript 库，侧重于 View 层
* React 主要的原理：
  - 虚拟 DOM + diff 算法 -> 不直接操作 DOM 对象
  - Components 组件 -> Virtual DOM 的节点
  - State 触发视图的渲染 -> 单向数据绑定
  - React 解决方案：React + Redux + react-router + Fetch + webpack
  
**react-router 路由系统的实现原理？**

- 实现原理：location 与 components 之间的同步

* 路由的职责是保证 UI 和 URL 的同步
* 在 react-router 中，URL 对应 Location 对象，UI 由 react components 决定
* 因此，路由在 react-router 中就转变成 location 与 components 之间的同步

**Meteor 是什么**

- Meteor 是一个全栈开发框架，基础构架是 Node.JS + MongoDB，并把延伸到了浏览器端。
- Meteor 统一了服务器端和客户端的数据访问，使开发者可以轻松完成全栈式开发工作。
