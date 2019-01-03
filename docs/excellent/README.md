---
sidebarDepth: 4
pageClass: custom-code-highlight
---


# 第五部分：高频考点

> [如果您觉得有帮助，可以打赏我](https://upload-images.jianshu.io/upload_images/1480597-1f247397539045cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) ![](![](https://upload-images.jianshu.io/upload_images/1480597-1f247397539045cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240))


> [关注微信公众号获取更多面试题：@静观流叶](https://upload-images.jianshu.io/upload_images/1480597-933c7247ddac5ed4.png) ![](![](https://upload-images.jianshu.io/upload_images/1480597-933c7247ddac5ed4.png))

> 来自掘金小册笔记

## 1 typeof类型判断

> `typeof` 是否能正确判断类型？`instanceof` 能正确判断对象的原理是什么

- `typeof` 对于原始类型来说，除了 `null` 都可以显示正确的类型

```js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
```

> `typeof` 对于对象来说，除了函数都会显示 `object`，所以说 `typeof` 并不能准确判断变量到底是什么类型

```js
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'
```

> 如果我们想判断一个对象的正确类型，这时候可以考虑使用 `instanceof`，因为内部机制是通过原型链来判断的

```js
const Person = function() {}
const p1 = new Person()
p1 instanceof Person // true

var str = 'hello world'
str instanceof String // false

var str1 = new String('hello world')
str1 instanceof String // true
```

> 对于原始类型来说，你想直接通过 `instanceof `来判断类型是不行的


## 2 类型转换

> 首先我们要知道，在 `JS` 中类型转换只有三种情况，分别是：

- 转换为布尔值
- 转换为数字
- 转换为字符串

![image.png](https://upload-images.jianshu.io/upload_images/1480597-c1ede6d7eb711a22.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**转Boolean**

> 在条件判断时，除了 `undefined`，` null`， `false`， `NaN`， `''`， `0`， `-0`，其他所有值都转为 `true`，包括所有对象

**对象转原始类型**

> 对象在转换类型的时候，会调用内置的 `[[ToPrimitive]]` 函数，对于该函数来说，算法逻辑一般来说如下

- 如果已经是原始类型了，那就不需要转换了
- 调用 `x.valueOf()`，如果转换为基础类型，就返回转换的值
- 调用 `x.toString()`，如果转换为基础类型，就返回转换的值
- 如果都没有返回原始类型，就会报错


> 当然你也可以重写 `Symbol.toPrimitive `，该方法在转原始类型时调用优先级最高。

```js
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  }
}
1 + a // => 3
```

**四则运算符**

> 它有以下几个特点：

- 运算中其中一方为字符串，那么就会把另一方也转换为字符串
- 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串

```js
1 + '1' // '11'
true + true // 2
4 + [1,2,3] // "41,2,3"
```

- 对于第一行代码来说，触发特点一，所以将数字 `1` 转换为字符串，得到结果 `'11'`
- 对于第二行代码来说，触发特点二，所以将 `true` 转为数字 `1`
- 对于第三行代码来说，触发特点二，所以将数组通过 `toString `转为字符串 `1,2,3`，得到结果 `41,2,3`

> 另外对于加法还需要注意这个表达式 `'a' + + 'b'`

```
'a' + + 'b' // -> "aNaN"
```

- 因为 `+ 'b'` 等于 `NaN`，所以结果为 `"aNaN"`，你可能也会在一些代码中看到过 `+ '1' `的形式来快速获取 `number` 类型。
- 那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字

```js
4 * '3' // 12
4 * [] // 0
4 * [1, 2] // NaN
```

**比较运算符**

- 如果是对象，就通过 `toPrimitive` 转换对象
- 如果是字符串，就通过 `unicode` 字符索引来比较

```js
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  }
}
a > -1 // true
```

> 在以上代码中，因为 `a` 是对象，所以会通过 `valueOf` 转换为原始类型再比较值。

## 3 This

> 我们先来看几个函数调用的场景

```js
function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo()
```

- 对于直接调用 `foo` 来说，不管 `foo` 函数被放在了什么地方，`this` 一定是` window`
- 对于 `obj.foo()` 来说，我们只需要记住，谁调用了函数，谁就是 `this`，所以在这个场景下 `foo` 函数中的 `this` 就是 `obj` 对象
- 对于 `new` 的方式来说，`this` 被永远绑定在了 `c` 上面，不会被任何方式改变 `this`

> 说完了以上几种情况，其实很多代码中的 `this` 应该就没什么问题了，下面让我们看看箭头函数中的 `this`

```js
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())
```

- 首先箭头函数其实是没有 `this` 的，箭头函数中的 `this` 只取决包裹箭头函数的第一个普通函数的 `this`。在这个例子中，因为包裹箭头函数的第一个普通函数是 `a`，所以此时的 `this` 是 `window`。另外对箭头函数使用 `bind `这类函数是无效的。
- 最后种情况也就是 `bind` 这些改变上下文的 `API` 了，对于这些函数来说，`this` 取决于第一个参数，如果第一个参数为空，那么就是 `window`。
- 那么说到 `bind`，不知道大家是否考虑过，如果对一个函数进行多次 `bind`，那么上下文会是什么呢？

```js
let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // => ?
```

> 如果你认为输出结果是 `a`，那么你就错了，其实我们可以把上述代码转换成另一种形式

```js
// fn.bind().bind(a) 等于
let fn2 = function fn1() {
  return function() {
    return fn.apply()
  }.apply(a)
}
fn2()
```

> 可以从上述代码中发现，不管我们给函数 `bind` 几次，`fn` 中的 `this` 永远由第一次 `bind` 决定，所以结果永远是 `window`

```js
let a = { name: 'poetries' }
function foo() {
  console.log(this.name)
}
foo.bind(a)() // => 'poetries'
```

> 以上就是 `this` 的规则了，但是可能会发生多个规则同时出现的情况，这时候不同的规则之间会根据优先级最高的来决定 `this` 最终指向哪里。

> 首先，`new` 的方式优先级最高，接下来是 `bind` 这些函数，然后是 `obj.foo()` 这种调用方式，最后是 `foo` 这种调用方式，同时，箭头函数的 `this` 一旦被绑定，就不会再被任何方式所改变。

![image.png](https://upload-images.jianshu.io/upload_images/1480597-ce6e82dfdc1b3415.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 4 == 和 === 有什么区别

> 对于 `==` 来说，如果对比双方的类型不一样的话，就会进行类型转换

**假如我们需要对比 x 和 y 是否相同，就会进行如下判断流程**


1. 首先会判断两者类型是否相同。相同的话就是比大小了
2. 类型不相同的话，那么就会进行类型转换
3. 会先判断是否在对比 `null` 和 `undefined`，是的话就会返回 `true`
4. 判断两者类型是否为 `string` 和 `number`，是的话就会将字符串转换为 `number`

```
1 == '1'
      ↓
1 ==  1
```

5. 判断其中一方是否为 `boolean`，是的话就会把 `boolean` 转为 `number` 再进行判断

```
'1' == true
        ↓
'1' ==  1
        ↓
 1  ==  1
```

6. 判断其中一方是否为 `object` 且另一方为 `string`、`number` 或者 `symbol`，是的话就会把 `object` 转为原始类型再进行判断

```
'1' == { name: 'yck' }
        ↓
'1' == '[object Object]'
```

![image.png](https://upload-images.jianshu.io/upload_images/1480597-88daf8ffd440c0dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 对于 `===` 来说就简单多了，就是判断两者类型和值是否相同

## 5 闭包

> 闭包的定义其实很简单：函数 `A` 内部有一个函数 `B`，函数 `B` 可以访问到函数 `A` 中的变量，那么函数 `B` 就是闭包

```js
function A() {
  let a = 1
  window.B = function () {
      console.log(a)
  }
}
A()
B() // 1
```

**闭包存在的意义就是让我们可以间接访问函数内部的变量**


> 经典面试题，循环中使用闭包解决 `var` 定义函数的问题

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}

```

> 首先因为 `setTimeout` 是个异步函数，所以会先把循环全部执行完毕，这时候 `i `就是 `6` 了，所以会输出一堆 `6`

**解决办法有三种**

1. 第一种是使用闭包的方式


```js
for (var i = 1; i <= 5; i++) {
  ;(function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}
```

> 在上述代码中，我们首先使用了立即执行函数将 `i` 传入函数内部，这个时候值就被固定在了参数 `j` 上面不会改变，当下次执行 `timer` 这个闭包的时候，就可以使用外部函数的变量 `j`，从而达到目的

2. 第二种就是使用 `setTimeout` 的第三个参数，这个参数会被当成 `timer` 函数的参数传入

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j)
    },
    i * 1000,
    i
  )
}
```

3. 第三种就是使用 `let` 定义 `i` 了来解决问题了，这个也是最为推荐的方式

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
```

## 6 深浅拷贝

**浅拷贝**

> 首先可以通过 `Object.assign` 来解决这个问题，很多人认为这个函数是用来深拷贝的。其实并不是，`Object.assign` 只会拷贝所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址，所以并不是深拷贝

```js
let a = {
  age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1
```

> 另外我们还可以通过展开运算符 `...` 来实现浅拷贝

```js
let a = {
  age: 1
}
let b = { ...a }
a.age = 2
console.log(b.age) // 1
```

> 通常浅拷贝就能解决大部分问题了，但是当我们遇到如下情况就可能需要使用到深拷贝了


```js
let a = {
  age: 1,
  jobs: {
    first: 'FE'
  }
}
let b = { ...a }
a.jobs.first = 'native'
console.log(b.jobs.first) // native
```

> 浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，那么就又回到最开始的话题了，两者享有相同的地址。要解决这个问题，我们就得使用深拷贝了。


**深拷贝**

> 这个问题通常可以通过 `JSON.parse(JSON.stringify(object))` 来解决。

```js
let a = {
  age: 1,
  jobs: {
    first: 'FE'
  }
}
let b = JSON.parse(JSON.stringify(a))
a.jobs.first = 'native'
console.log(b.jobs.first) // FE
```

**但是该方法也是有局限性的**：

- 会忽略 `undefined`
- 会忽略 `symbol`
- 不能序列化函数
- 不能解决循环引用的对象

```js
let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)

```

> 更多详情 https://www.jianshu.com/p/2d8a26b3958f


## 7 原型

> 原型链就是多个对象通过 `__proto__` 的方式连接了起来。为什么 `obj` 可以访问到 `valueOf` 函数，就是因为 `obj` 通过原型链找到了 `valueOf` 函数

![](https://user-gold-cdn.xitu.io/2018/11/16/1671d387e4189ec8)

- `Object` 是所有对象的爸爸，所有对象都可以通过 `__proto__ `找到它
- `Function` 是所有函数的爸爸，所有函数都可以通过 `__proto__` 找到它
- 函数的 `prototype` 是一个对象
- 对象的` __proto__` 属性指向原型， `__proto__` 将对象和原型连接起来组成了原型链

## 8 var、let 及 const 区别

> 涉及面试题：什么是提升？什么是暂时性死区？var、let 及 const 区别？

- 函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部
- `var` 存在提升，我们能在声明之前使用。`let`、`const` 因为暂时性死区的原因，不能在声明前使用
- `var` 在全局作用域下声明变量会导致变量挂载在 `window `上，其他两者不会
- `let` 和 `const` 作用基本一致，但是后者声明的变量不能再次赋值

## 9 原型继承和 Class 继承

> 涉及面试题：原型如何实现继承？`Class` 如何实现继承？`Class` 本质是什么？

首先先来讲下 `class`，其实在 `JS `中并不存在类，`class` 只是语法糖，本质还是函数

```js
class Person {}
Person instanceof Function // true
```

**组合继承**

> 组合继承是最常用的继承方式


```js
function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}
function Child(value) {
  Parent.call(this, value)
}
Child.prototype = new Parent()

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true
```


- 以上继承的方式核心是在子类的构造函数中通过 `Parent.call(this)` 继承父类的属性，然后改变子类的原型为 `new Parent()` 来继承父类的函数。
- 这种继承方式优点在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数，但是也存在一个缺点就是在继承父类函数的时候调用了父类构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费


![](https://user-gold-cdn.xitu.io/2018/11/19/1672aeb24a2e2cae)

**寄生组合继承**

> 这种继承方式对组合继承进行了优化，组合继承缺点在于继承父类函数时调用了构造函数，我们只需要优化掉这点就行了

```js
function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}

function Child(value) {
  Parent.call(this, value)
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true
```

> 以上继承实现的核心就是将父类的原型赋值给了子类，并且将构造函数设置为子类，这样既解决了无用的父类属性问题，还能正确的找到子类的构造函数。

![](https://user-gold-cdn.xitu.io/2018/11/19/1672afb8dfa21361)

**Class 继承**

> 以上两种继承方式都是通过原型去解决的，在 ES6 中，我们可以使用 class 去实现继承，并且实现起来很简单


```js
class Parent {
  constructor(value) {
    this.val = value
  }
  getValue() {
    console.log(this.val)
  }
}
class Child extends Parent {
  constructor(value) {
    super(value)
    this.val = value
  }
}
let child = new Child(1)
child.getValue() // 1
child instanceof Parent // true
```

> `class` 实现继承的核心在于使用 `extends` 表明继承自哪个父类，并且在子类构造函数中必须调用 `super`，因为这段代码可以看成 `Parent.call(this, value)`。

## 10 模块化

> 涉及面试题：为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？

使用一个技术肯定是有原因的，那么使用模块化可以给我们带来以下好处

- 解决命名冲突
- 提供复用性
- 提高代码可维护性


**立即执行函数**

> 在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题

```
(function(globalVariable){
   globalVariable.test = function() {}
   // ... 声明各种变量、函数都不会污染全局作用域
})(globalVariable)
```

**AMD 和 CMD**

> 鉴于目前这两种实现方式已经很少见到，所以不再对具体特性细聊，只需要了解这两者是如何使用的。

```js
// AMD
define(['./a', './b'], function(a, b) {
  // 加载模块完毕可以使用
  a.do()
  b.do()
})
// CMD
define(function(require, exports, module) {
  // 加载模块
  // 可以把 require 写在函数体的任意地方实现延迟加载
  var a = require('./a')
  a.doSomething()
})
```

**CommonJS**

> `CommonJS` 最早是 `Node` 在使用，目前也仍然广泛使用，比如在 `Webpack` 中你就能见到它，当然目前在 `Node` 中的模块管理已经和 `CommonJS `有一些区别了

```js
// a.js
module.exports = {
    a: 1
}
// or
exports.a = 1

// b.js
var module = require('./a.js')
module.a // -> log 1
```

```js
ar module = require('./a.js')
module.a
// 这里其实就是包装了一层立即执行函数，这样就不会污染全局变量了，
// 重要的是 module 这里，module 是 Node 独有的一个变量
module.exports = {
    a: 1
}
// module 基本实现
var module = {
  id: 'xxxx', // 我总得知道怎么去找到他吧
  exports: {} // exports 就是个空对象
}
// 这个是为什么 exports 和 module.exports 用法相似的原因
var exports = module.exports
var load = function (module) {
    // 导出的东西
    var a = 1
    module.exports = a
    return module.exports
};
// 然后当我 require 的时候去找到独特的
// id，然后将要使用的东西用立即执行函数包装下，over
```

> 另外虽然 `exports` 和 `module.exports` 用法相似，但是不能对 `exports` 直接赋值。因为 `var exports = module.exports` 这句代码表明了 `exports` 和 `module.exports `享有相同地址，通过改变对象的属性值会对两者都起效，但是如果直接对 `exports` 赋值就会导致两者不再指向同一个内存地址，修改并不会对 `module.exports` 起效

**ES Module**

> `ES Module` 是原生实现的模块化方案，与 `CommonJS` 有以下几个区别

1. `CommonJS` 支持动态导入，也就是 `require(${path}/xx.js)`，后者目前不支持，但是已有提案
2. `CommonJS` 是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
3. `CommonJS` 在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是 `ES Module` 采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
4. `ES Module` 会编译成 `require/exports `来执行的

```js
// 引入模块 API
import XXX from './a.js'
import { XXX } from './a.js'
// 导出模块 API
export function a() {}
export default function() {}
```


## 11 实现一个简洁版的promise

```js
// 三个常量用于表示状态
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    const that = this
    this.state = PENDING

    // value 变量用于保存 resolve 或者 reject 中传入的值
    this.value = null

    // 用于保存 then 中的回调，因为当执行完 Promise 时状态可能还是等待中，这时候应该把 then 中的回调保存起来用于状态改变时使用
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []


    function resolve(value) {
         // 首先两个函数都得判断当前状态是否为等待中
        if(that.state === PENDING) {
            that.state = RESOLVED
            that.value = value

            // 遍历回调数组并执行
            that.resolvedCallbacks.map(cb=>cb(that.value))
        }
    }
    function reject(value) {
        if(that.state === PENDING) {
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb=>cb(that.value))
        }
    }

    // 完成以上两个函数以后，我们就该实现如何执行 Promise 中传入的函数了
    try {
        fn(resolve,reject)
    }cach(e){
        reject(e)
    }
}

// 最后我们来实现较为复杂的 then 函数
MyPromise.prototype.then = function(onFulfilled,onRejected){
  const that = this

  // 判断两个参数是否为函数类型，因为这两个参数是可选参数
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v
  onRejected = typeof onRejected === 'function' ? onRejected : e=>throw e

  // 当状态不是等待态时，就去执行相对应的函数。如果状态是等待态的话，就往回调函数中 push 函数
  if(this.state === PENDING) {
      this.resolvedCallbacks.push(onFulfilled)
      this.rejectedCallbacks.push(onRejected)
  }
  if(this.state === RESOLVED) {
      onFulfilled(that.value)
  }
  if(this.state === REJECTED) {
      onRejected(that.value)
  }
}

```


## 12 Event Loop

### 12.1 进程与线程

> 涉及面试题：进程与线程区别？`JS` 单线程带来的好处？

- `JS` 是单线程执行的，但是你是否疑惑过什么是线程？
- 讲到线程，那么肯定也得说一下进程。本质上来说，两个名词都是 `CPU` 工作时间片的一个描述。
- 进程描述了 `CPU` 在运行指令及加载和保存上下文所需的时间，放在应用上来说就代表了一个程序。线程是进程中的更小单位，描述了执行一段指令所需的时间

> 把这些概念拿到浏览器中来说，当你打开一个 `Tab` 页时，其实就是创建了一个进程，一个进程中可以有多个线程，比如渲染线程、`JS` 引擎线程、`HTTP` 请求线程等等。当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁

- 上文说到了 `JS` 引擎线程和渲染线程，大家应该都知道，在 `JS` 运行的时候可能会阻止 `UI` 渲染，这说明了两个线程是互斥的。这其中的原因是因为 JS 可以修改 `DOM`，如果在 `JS` 执行的时候 `UI` 线程还在工作，就可能导致不能安全的渲染 `UI`。这其实也是一个单线程的好处，得益于 `JS` 是单线程运行的，可以达到节省内存，节约上下文切换时间，没有锁的问题的好处

### 12.2 执行栈

> 涉及面试题：什么是执行栈？

可以把执行栈认为是一个存储函数调用的栈结构，遵循先进后出的原则

![](https://user-gold-cdn.xitu.io/2018/11/13/1670d2d20ead32ec)

> 当开始执行 `JS` 代码时，首先会执行一个 `main` 函数，然后执行我们的代码。根据先进后出的原则，后执行的函数会先弹出栈，在图中我们也可以发现，`foo` 函数后执行，当执行完毕后就从栈中弹出了

在开发中，大家也可以在报错中找到执行栈的痕迹

```js
function foo() {
  throw new Error('error')
}
function bar() {
  foo()
}
bar()
```

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c0e21540090c)

> 大家可以在上图清晰的看到报错在 `foo` 函数，`foo` 函数又是在 `bar` 函数中调用的

当我们使用递归的时候，因为栈可存放的函数是有限制的，一旦存放了过多的函数且没有得到释放的话，就会出现爆栈的问题


```js
function bar() {
  bar()
}
bar()
```


![](https://user-gold-cdn.xitu.io/2018/11/13/1670c128acce975f)

### 12.3 浏览器中的 Event Loop

> 涉及面试题：异步代码执行顺序？解释一下什么是 `Event Loop` ？

> 众所周知 `JS` 是门非阻塞单线程语言，因为在最初 `JS` 就是为了和浏览器交互而诞生的。如果 `JS` 是门多线程的语言话，我们在多个线程中处理 `DOM` 就可能会发生问题（一个线程中新加节点，另一个线程中删除节点）


- `JS` 在执行的过程中会产生执行环境，这些执行环境会被顺序的加入到执行栈中。如果遇到异步的代码，会被挂起并加入到 `Task`（有多种 `task`） 队列中。一旦执行栈为空，`Event` `Loop` 就会从 `Task` 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 `JS` 中的异步还是同步行为

![](https://user-gold-cdn.xitu.io/2018/11/23/16740fa4cd9c6937)

```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

console.log('script end');
```

> 不同的任务源会被分配到不同的 `Task` 队列中，任务源可以分为 微任务（`microtask`） 和 宏任务（`macrotask`）。在 `ES6` 规范中，`microtask` 称为 `jobs`，`macrotask` 称为 `task`


```javascript
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

new Promise((resolve) => {
    console.log('Promise')
    resolve()
}).then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
// script start => Promise => script end => promise1 => promise2 => setTimeout
```

> 以上代码虽然 `setTimeout` 写在 `Promise` 之前，但是因为 `Promise` 属于微任务而 `setTimeout` 属于宏任务

**微任务**

- `process.nextTick`
- `promise`
- `Object.observe`
- `MutationObserver`

**宏任务**

- `script `
- `setTimeout`
- `setInterval `
- `setImmediate `
- `I/O `
- `UI rendering`

> 宏任务中包括了 `script` ，浏览器会先执行一个宏任务，接下来有异步代码的话就先执行微任务

**所以正确的一次 Event loop 顺序是这样的**

- 执行同步代码，这属于宏任务
- 执行栈为空，查询是否有微任务需要执行
- 执行所有微任务
- 必要的话渲染 UI
- 然后开始下一轮 `Event loop`，执行宏任务中的异步代码

> 通过上述的 `Event loop` 顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作 `DOM` 的话，为了更快的响应界面响应，我们可以把操作 `DOM` 放入微任务中

### 12.4 Node 中的 Event loop

- `Node` 中的 `Event loop` 和浏览器中的不相同。
- `Node` 的 `Event loop` 分为`6`个阶段，它们会按照顺序反复运行


```
┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<──connections───     │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```

**timer**

- `timers` 阶段会执行 `setTimeout` 和 `setInterval`
- 一个 timer 指定的时间并不是准确时间，而是在达到这个时间后尽快执行回调，可能会因为系统正在执行别的事务而延迟

**I/O**

- `I/O` 阶段会执行除了 `close` 事件，定时器和 `setImmediate` 的回调


**poll**

- `poll` 阶段很重要，这一阶段中，系统会做两件事情
  - 执行到点的定时器
  - 执行 `poll` 队列中的事件

- 并且当 `poll` 中没有定时器的情况下，会发现以下两件事情
  - 如果 `poll` 队列不为空，会遍历回调队列并同步执行，直到队列为空或者系统限制
  - 如果 `poll` 队列为空，会有两件事发生
  - 如果有 `setImmediate` 需要执行，`poll` 阶段会停止并且进入到 `check` 阶段执行 `setImmediate`
  - 如果没有 `setImmediate` 需要执行，会等待回调被加入到队列中并立即执行回调
  - 如果有别的定时器需要被执行，会回到 `timer` 阶段执行回调。

**check**

- `check` 阶段执行 `setImmediate`

**close callbacks**

- `close callbacks` 阶段执行 `close` 事件
- 并且在 `Node` 中，有些情况下的定时器执行顺序是随机的

```js
setTimeout(() => {
    console.log('setTimeout');
}, 0);
setImmediate(() => {
    console.log('setImmediate');
})
// 这里可能会输出 setTimeout，setImmediate
// 可能也会相反的输出，这取决于性能
// 因为可能进入 event loop 用了不到 1 毫秒，这时候会执行 setImmediate
// 否则会执行 setTimeout
```

> 上面介绍的都是 `macrotask` 的执行情况，`microtask` 会在以上每个阶段完成后立即执行

```js
setTimeout(()=>{
    console.log('timer1')

    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)

setTimeout(()=>{
    console.log('timer2')

    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)

// 以上代码在浏览器和 node 中打印情况是不同的
// 浏览器中一定打印 timer1, promise1, timer2, promise2
// node 中可能打印 timer1, timer2, promise1, promise2
// 也可能打印 timer1, promise1, timer2, promise2
```

> `Node` 中的 `process.nextTick` 会先于其他 `microtask` 执行


```js
setTimeout(() => {
 console.log("timer1");

 Promise.resolve().then(function() {
   console.log("promise1");
 });
}, 0);

process.nextTick(() => {
 console.log("nextTick");
});
// nextTick, timer1, promise1
```

> 对于 `microtask` 来说，它会在以上每个阶段完成前清空 `microtask` 队列，下图中的 `Tick` 就代表了 `microtask`

![](https://user-gold-cdn.xitu.io/2018/11/14/16710fb80dd42d27)

## 13 手写 call、apply 及 bind 函数


> 首先从以下几点来考虑如何实现这几个函数

- 不传入第一个参数，那么上下文默认为 `window`
- 改变了 `this` 指向，让新的对象可以执行该函数，并能接受参数

**实现 call**

- 首先 `context `为可选参数，如果不传的话默认上下文为 `window`
- 接下来给 `context` 创建一个 `fn` 属性，并将值设置为需要调用的函数
- 因为 `call` 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
- 然后调用函数并将对象上的函数删除


```js
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}
```

**apply实现**

> `apply` 的实现也类似，区别在于对参数的处理

```js
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  let result
  // 处理参数和 call 有区别
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
```

**bind 的实现**

> `bind` 的实现对比其他两个函数略微地复杂了一点，因为 `bind` 需要返回一个函数，需要判断一些边界问题，以下是 `bind` 的实现

- `bind` 返回了一个函数，对于函数来说有两种方式调用，一种是直接调用，一种是通过 `new` 的方式，我们先来说直接调用的方式
- 对于直接调用来说，这里选择了 `apply` 的方式实现，但是对于参数需要注意以下情况：因为 `bind` 可以实现类似这样的代码 `f.bind(obj, 1)(2)`，所以我们需要将两边的参数拼接起来，于是就有了这样的实现 `args.concat(...arguments)`
- 最后来说通过 `new` 的方式，在之前的章节中我们学习过如何判断 `this`，对于 `new` 的情况来说，不会被任何方式改变 `this`，所以对于这种情况我们需要忽略传入的 `this`

```js
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```

## 14 new


> 涉及面试题：`new` 的原理是什么？通过 `new `的方式创建对象和通过字面量创建有什么区别？


**在调用 new 的过程中会发生四件事情**

- 新生成了一个对象
- 链接到原型
- 绑定 `this`
- 返回新对象

> 根据以上几个过程，我们也可以试着来自己实现一个 new

- 创建一个空对象
- 获取构造函数
- 设置空对象的原型
- 绑定 `this` 并执行构造函数
- 确保返回值为对象

```js
function create() {
  let obj = {}
  let Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
```

- 对于对象来说，其实都是通过 `new` 产生的，无论是 `function Foo()` 还是 `let a = { b : 1 } `。
- 对于创建一个对象来说，更推荐使用字面量的方式创建对象（无论性能上还是可读性）。因为你使用 `new Object()` 的方式创建对象需要通过作用域链一层层找到 `Object`，但是你使用字面量的方式就没这个问题

```js
function Foo() {}
// function 就是个语法糖
// 内部等同于 new Function()
let a = { b: 1 }
// 这个字面量内部也是使用了 new Object()
```


## 15 instanceof 的原理

> 涉及面试题：`instanceof` 的原理是什么？

`instanceof` 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 `prototype`

**实现一下 instanceof**

- 首先获取类型的原型
- 然后获得对象的原型
- 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 `null`，因为原型链最终为 `null`


```js
function myInstanceof(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left === null || left === undefined)
      return false
    if (prototype === left)
      return true
    left = left.__proto__
  }
}
```

## 16 为什么 0.1 + 0.2 != 0.3

> 涉及面试题：为什么 `0.1 + 0.2 != 0.3`？如何解决这个问题？

**原因**，因为 `JS` 采用 `IEEE 754 `双精度版本（`64`位），并且只要采用 `IEEE 754 `的语言都有该问题

> 我们都知道计算机是通过二进制来存储东西的，那么 `0.1` 在二进制中会表示为

```js
// (0011) 表示循环
0.1 = 2^-4 * 1.10011(0011)
```

> 我们可以发现，`0.1` 在二进制中是无限循环的一些数字，其实不只是 `0.1`，其实很多十进制小数用二进制表示都是无限循环的。这样其实没什么问题，但是 `JS`采用的浮点数标准却会裁剪掉我们的数字。

**IEEE 754 双精度版本（64位）将 64 位分为了三段**

- 第一位用来表示符号
- 接下去的 `11` 位用来表示指数
- 其他的位数用来表示有效位，也就是用二进制表示 `0.1` 中的 `10011(0011)`

> 那么这些循环的数字被裁剪了，就会出现精度丢失的问题，也就造成了 `0.1` 不再是 `0.1` 了，而是变成了 `0.100000000000000002`

```
0.100000000000000002 === 0.1 // true
```

> 那么同样的，`0.2` 在二进制也是无限循环的，被裁剪后也失去了精度变成了 `0.200000000000000002`

```
0.200000000000000002 === 0.2 // true
```

> 所以这两者相加不等于 `0.3` 而是 `0.300000000000000004`

```
0.1 + 0.2 === 0.30000000000000004 // true
```

> 那么可能你又会有一个疑问，既然 `0.1` 不是 `0.1`，那为什么 `console.log(0.1)` 却是正确的呢？

> 因为在输入内容的时候，二进制被转换为了十进制，十进制又被转换为了字符串，在这个转换的过程中发生了取近似值的过程，所以打印出来的其实是一个近似值，你也可以通过以下代码来验证

```
console.log(0.100000000000000002) // 0.1
```

**解决**

```js
parseFloat((0.1 + 0.2).toFixed(10)) === 0.3 // true
```

## 17 事件机制

> 涉及面试题：事件的触发过程是怎么样的？知道什么是事件代理嘛？

### 17.1 事件触发三阶段

**事件触发有三个阶段**：

- `window`往事件触发处传播，遇到注册的捕获事件会触发
- 传播到事件触发处时触发注册的事件
- 从事件触发处往 `window` 传播，遇到注册的冒泡事件会触发

> 事件触发一般来说会按照上面的顺序进行，但是也有特例，如果给一个 `body` 中的子节点同时注册冒泡和捕获事件，事件触发会按照注册的顺序执行

```js
// 以下会先打印冒泡然后是捕获
node.addEventListener(
  'click',
  event => {
    console.log('冒泡')
  },
  false
)
node.addEventListener(
  'click',
  event => {
    console.log('捕获 ')
  },
  true
)
```


### 17.2 注册事件

> 通常我们使用 `addEventListener` 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 `useCapture` 参数来说，该参数默认值为 `false` ，`useCapture` 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性

- `capture`：布尔值，和 `useCapture` 作用一样
- `once`：布尔值，值为 `true` 表示该回调只会调用一次，调用后会移除监听
- `passive`：布尔值，表示永远不会调用 `preventDefault`

> 一般来说，如果我们只希望事件只触发在目标上，这时候可以使用 `stopPropagation `来阻止事件的进一步传播。通常我们认为 `stopPropagation` 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件`。stopImmediatePropagation `同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。


```js
node.addEventListener(
  'click',
  event => {
    event.stopImmediatePropagation()
    console.log('冒泡')
  },
  false
)
// 点击 node 只会执行上面的函数，该函数不会执行
node.addEventListener(
  'click',
  event => {
    console.log('捕获 ')
  },
  true
)
```


### 17.3 事件代理

> 如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上

```html
<ul id="ul">
	<li>1</li>
    <li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
</ul>
<script>
	let ul = document.querySelector('#ul')
	ul.addEventListener('click', (event) => {
		console.log(event.target);
	})
</script>
```

**事件代理的方式相较于直接给目标注册事件来说，有以下优点**：

- 节省内存
- 不需要给子节点注销事件

## 18 跨域

> 涉及面试题：什么是跨域？为什么浏览器要使用同源策略？你有几种方式可以解决跨域问题？了解预检请求嘛？

- 因为浏览器出于安全考虑，有同源策略。也就是说，如果协议、域名或者端口有一个不同就是跨域，`Ajax` 请求会失败。
- 那么是出于什么安全考虑才会引入这种机制呢？ 其实主要是用来防止 `CSRF` 攻击的。简单点说，`CSRF` 攻击是利用用户的登录态发起恶意请求。
- 也就是说，没有同源策略的情况下，`A` 网站可以被任意其他来源的 `Ajax` 访问到内容。如果你当前 `A` 网站还存在登录态，那么对方就可以通过 `Ajax` 获得你的任何信息。当然跨域并不能完全阻止 `CSRF`。

> 然后我们来考虑一个问题，请求跨域了，那么请求到底发出去没有？ 请求必然是发出去了，但是浏览器拦截了响应。你可能会疑问明明通过表单的方式可以发起跨域请求，为什么 `Ajax`就不会。因为归根结底，跨域是为了阻止用户读取到另一个域名下的内容，`Ajax` 可以获取响应，浏览器认为这不安全，所以拦截了响应。但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止 `CSRF`，因为请求毕竟是发出去了。

接下来我们将来学习几种常见的方式来解决跨域的问题

### 18.1 JSONP

> `JSONP` 的原理很简单，就是利用 `<script>` 标签没有跨域限制的漏洞。通过 `<script> `标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时

```html
<script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
<script>
    function jsonp(data) {
    	console.log(data)
	}
</script>    

```

> `JSONP` 使用简单且兼容性不错，但是只限于 `get` 请求。

> 在开发中可能会遇到多个 `JSONP` 请求的回调函数名是相同的，这时候就需要自己封装一个 `JSONP`，以下是简单实现

```js
function jsonp(url, jsonpCallback, success) {
  let script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[jsonpCallback] = function(data) {
    success && success(data)
  }
  document.body.appendChild(script)
}
jsonp('http://xxx', 'callback', function(value) {
  console.log(value)
})
```

### 18.2 CORS

- `CORS` 需要浏览器和后端同时支持。`IE 8` 和 `9` 需要通过 `XDomainRequest` 来实现。
- 浏览器会自动进行 `CORS` 通信，实现 `CORS` 通信的关键是后端。只要后端实现了 `CORS`，就实现了跨域。
- 服务端设置 `Access-Control-Allow-Origin` 就可以开启 `CORS`。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。
虽然设置 `CORS`和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为简单请求和复杂请求。

**简单请求**

> 以 `Ajax` 为例，当满足以下条件时，会触发简单请求

1. 使用下列方法之一：

- `GET`
- `HEAD`
- `POST`

2. `Content-Type` 的值仅限于下列三者之一：

- text/plain
- `multipart/form-data`
- `application/x-www-form-urlencoded`

> 请求中的任意 `XMLHttpRequestUpload` 对象均没有注册任何事件监听器； `XMLHttpRequestUpload` 对象可以使用 `XMLHttpRequest.upload` 属性访问

**复杂请求**

> 对于复杂请求来说，首先会发起一个预检请求，该请求是 `option` 方法的，通过该请求来知道服务端是否允许跨域请求。

对于预检请求来说，如果你使用过 `Node` 来设置 `CORS` 的话，可能会遇到过这么一个坑。

以下以 `express`框架举例

```js
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  )
  next()
})
```

- 该请求会验证你的 `Authorization` 字段，没有的话就会报错。
- 当前端发起了复杂请求后，你会发现就算你代码是正确的，返回结果也永远是报错的。因为预检请求也会进入回调中，也会触发 `next` 方法，因为预检请求并不包含 `Authorization` 字段，所以服务端会报错。

> 想解决这个问题很简单，只需要在回调中过滤 `option` 方法即可

```js
res.statusCode = 204
res.setHeader('Content-Length', '0')
res.end()
```

### 18.3 document.domain


- 该方式只能用于主域名相同的情况下，比如 `a.test.com` 和 `b.test.com` 适用于该方式。
- 只需要给页面添加 `document.domain = 'test.com'` 表示主域名都相同就可以实现跨域

### 18.4 postMessage

> 这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息

```js
// 发送消息端
window.parent.postMessage('message', 'http://test.com')
// 接收消息端
var mc = new MessageChannel()
mc.addEventListener('message', event => {
  var origin = event.origin || event.originalEvent.origin
  if (origin === 'http://test.com') {
    console.log('验证通过')
  }
})
```

## 19 存储


> 涉及面试题：有几种方式可以实现存储功能，分别有什么优缺点？什么是 `Service Worker`？


**cookie，localStorage，sessionStorage，indexDB**

|特性|	cookie|	localStorage|	sessionStorage|	indexDB|
|---|---|---|---|---|
|数据生命周期|	一般由服务器生成，可以设置过期时间|	除非被清理，否则一直存在	|页面关闭就清理|	除非被清理，否则一直存在|
|数据存储大小|	`4K`	|`5M`|	`5M`	|无限|
|与服务端通信|	每次都会携带在 `header` 中，对于请求性能影响	|不参与	|不参与	|不参与|

> 从上表可以看到，`cookie` 已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 `localStorage` 和 `sessionStorage` 。对于不怎么改变的数据尽量使用 `localStorage` 存储，否则可以用 `sessionStorage `存储

**对于 cookie 来说，我们还需要注意安全性。**

|属性|	作用|
|---|---|
|`value`|	如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识|
|`http-only`|	不能通过 `JS` 访问 `Cookie`，减少 `XSS` 攻击|
|`secure`|	只能在协议为 `HTTPS` 的请求中携带|
|`same-site`|	规定浏览器不能在跨域请求中携带 `Cookie`，减少 `CSRF` 攻击|

**Service Worker**

- `Service Worker` 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 `Service Worker`的话，传输协议必须为 `HTTPS`。因为 `Service Worker` 中涉及到请求拦截，所以必须使用 `HTTPS` 协议来保障安全
- `Service Worker` 实现缓存功能一般分为三个步骤：首先需要先注册 `Service Worker`，然后监听到 `install` 事件以后就可以缓存需要的文件，那么在下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存，存在缓存的话就可以直接读取缓存文件，否则就去请求数据。以下是这个步骤的实现：

```js
// index.js
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function(registration) {
      console.log('service worker 注册成功')
    })
    .catch(function(err) {
      console.log('servcie worker 注册失败')
    })
}
// sw.js
// 监听 `install` 事件，回调中缓存所需文件
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll(['./index.html', './index.js'])
    })
  )
})

// 拦截所有请求事件
// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        return response
      }
      console.log('fetch source')
    })
  )
})
```

> 打开页面，可以在开发者工具中的 `Application` 看到 `Service Worker` 已经启动了

![](https://user-gold-cdn.xitu.io/2018/3/28/1626b1e8eba68e1c)

> 在 `Cache` 中也可以发现我们所需的文件已被缓存

![](https://user-gold-cdn.xitu.io/2018/3/28/1626b20dfc4fcd26)

> 当我们重新刷新页面可以发现我们缓存的数据是从 `Service Worker` 中读取的

![](https://user-gold-cdn.xitu.io/2018/3/28/1626b20e4f8f3257)

## 20 浏览器缓存机制

> 注意：该知识点属于性能优化领域，并且整一章节都是一个面试题

- 缓存可以说是性能优化中简单高效的一种优化方式了，它可以显著减少网络传输所带来的损耗。
- 对于一个数据请求来说，可以分为发起网络请求、后端处理、浏览器响应三个步骤。浏览器缓存可以帮助我们在第一和第三步骤中优化性能。比如说直接使用缓存而不发起请求，或者发起了请求但后端存储的数据和前端一致，那么就没有必要再将数据回传回来，这样就减少了响应数据。

> 接下来的内容中我们将通过以下几个部分来探讨浏览器缓存机制：

- 缓存位置
- 缓存策略
- 实际场景应用缓存策略

### 20.1 缓存位置

> 从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络

1. `Service Worker`
2. `Memory Cache`
3. `Disk Cache`
4. `Push Cache`
5. 网络请求

**1. Service Worker**

- `service Worker` 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。
- 当 `Service Worker` 没有命中缓存的时候，我们需要去调用 `fetch` 函数获取数据。也就是说，如果我们没有在 `Service Worker` 命中缓存的话，会根据缓存查找优先级去查找数据。但是不管我们是从 `Memory Cache` 中还是从网络请求中获取的数据，浏览器都会显示我们是从 `Service Worker` 中获取的内容。

**2. Memory Cache**

- `Memory Cache` 也就是内存中的缓存，读取内存中的数据肯定比磁盘快。但是内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。 一旦我们关闭 `Tab` 页面，内存中的缓存也就被释放了。
- 当我们访问过页面以后，再次刷新页面，可以发现很多数据都来自于内存缓存

![](https://user-gold-cdn.xitu.io/2018/12/5/1677db8003dc8311)

> 那么既然内存缓存这么高效，我们是不是能让数据都存放在内存中呢？

- 先说结论，这是不可能的。首先计算机中的内存一定比硬盘容量小得多，操作系统需要精打细算内存的使用，所以能让我们使用的内存必然不多。内存中其实可以存储大部分的文件，比如说 `JS`、`HTML`、`CSS`、图片等等
- 当然，我通过一些实践和猜测也得出了一些结论：
- 对于大文件来说，大概率是不存储在内存中的，反之优先当前系统内存使用率高的话，文件优先存储进硬盘

**3. Disk Cache**

- `Disk Cache` 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 `Memory Cache` 胜在容量和存储时效性上。
- 在所有浏览器缓存中，`Disk Cache` 覆盖面基本是最大的。它会根据 ·HTTP Herder· 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据

**4. Push Cache**

- `Push Cache` 是 `HTTP/2` 中的内容，当以上三种缓存都没有命中时，它才会被使用。并且缓存时间也很短暂，只在会话（`Session`）中存在，一旦会话结束就被释放。
- `Push Cache` 在国内能够查到的资料很少，也是因为 `HTTP/2` 在国内不够普及，但是 `HTTP/2` 将会是日后的一个趋势

> 结论


- 所有的资源都能被推送，但是 `Edge` 和 `Safari` 浏览器兼容性不怎么好
- 可以推送 `no-cache` 和 `no-store` 的资源
- 一旦连接被关闭，`Push Cache` 就被释放
- 多个页面可以使用相同的 `HTTP/2` 连接，也就是说能使用同样的缓存
- `Push Cache` 中的缓存只能被使用一次
- 浏览器可以拒绝接受已经存在的资源推送
- 你可以给其他域名推送资源

**5. 网络请求**

- 如果所有缓存都没有命中的话，那么只能发起请求来获取资源了。
- 那么为了性能上的考虑，大部分的接口都应该选择好缓存策略，接下来我们就来学习缓存策略这部分的内容

### 20.2 缓存策略

> 通常浏览器缓存策略分为两种：强缓存和协商缓存，并且缓存策略都是通过设置 `HTTP Header` 来实现的

#### 20.2.1 强缓存

> 强缓存可以通过设置两种 `HTTP Header` 实现：`Expires` 和 `Cache-Control` 。强缓存表示在缓存期间不需要请求，`state code `为 `200`

**Expires**

```
Expires: Wed, 22 Oct 2018 08:41:00 GMT
```

> `Expires` 是 `HTTP/1` 的产物，表示资源会在 `Wed, 22 Oct 2018 08:41:00 GMT` 后过期，需要再次请求。并且 `Expires` 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。


**Cache-control**

```
Cache-control: max-age=30
```

- `Cache-Control` 出现于 `HTTP/1.1`，优先级高于 `Expires` 。该属性值表示资源会在 `30` 秒后过期，需要再次请求。
- `Cache-Control` 可以在请求头或者响应头中设置，并且可以组合使用多种指令

![](https://user-gold-cdn.xitu.io/2018/12/6/1678234a1ed20487)

> 从图中我们可以看到，我们可以将多个指令配合起来一起使用，达到多个目的。比如说我们希望资源能被缓存下来，并且是客户端和代理服务器都能缓存，还能设置缓存失效时间等

**一些常见指令的作用**

![](https://user-gold-cdn.xitu.io/2018/12/5/1677ef2cd7bf1bba)

#### 20.2.2 协商缓存

- 如果缓存过期了，就需要发起请求验证资源是否有更新。协商缓存可以通过设置两种 `HTTP Header` 实现：`Last-Modified` 和 `ETag`
- 当浏览器发起请求验证资源时，如果资源没有做改变，那么服务端就会返回 `304` 状态码，并且更新浏览器缓存有效期。

![](https://user-gold-cdn.xitu.io/2018/12/6/16782357baddf1c6)

**Last-Modified 和 If-Modified-Since**

> `Last-Modified` 表示本地文件最后修改日期，`If-Modified-Since` 会将 `Last-Modified` 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来，否则返回 `304` 状态码。

但是 `Last-Modified `存在一些弊端：

- 如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 `Last-Modified` 被修改，服务端不能命中缓存导致发送相同的资源
- 因为 `Last-Modified` 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源
因为以上这些弊端，所以在 `HTTP / 1.1` 出现了 `ETag `

**ETag 和 If-None-Match**

- `ETag` 类似于文件指纹，`If-None-Match` 会将当前 `ETag` 发送给服务器，询问该资源 `ETag` 是否变动，有变动的话就将新的资源发送回来。并且 `ETag `优先级比 `Last-Modified` 高。

> 以上就是缓存策略的所有内容了，看到这里，不知道你是否存在这样一个疑问。如果什么缓存策略都没设置，那么浏览器会怎么处理？

对于这种情况，浏览器会采用一个启发式的算法，通常会取响应头中的 `Date` 减去 `Last-Modified` 值的 `10%` 作为缓存时间。

### 20.3 实际场景应用缓存策略

**频繁变动的资源**

> 对于频繁变动的资源，首先需要使用 `Cache-Control: no-cache` 使浏览器每次都请求服务器，然后配合 `ETag` 或者 `Last-Modified` 来验证资源是否有效。这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小。

**代码文件**

> 这里特指除了 `HTML` 外的代码文件，因为 `HTML` 文件一般不缓存或者缓存时间很短。

一般来说，现在都会使用工具来打包代码，那么我们就可以对文件名进行哈希处理，只有当代码修改后才会生成新的文件名。基于此，我们就可以给代码文件设置缓存有效期一年 `Cache-Control: max-age=31536000`，这样只有当 `HTML` 文件中引入的文件名发生了改变才会去下载最新的代码文件，否则就一直使用缓存

> 更多缓存知识详解 http://blog.poetries.top/2019/01/02/browser-cache

## 21 浏览器渲染原理

> 注意：该章节都是一个面试题。

### 21.1 渲染过程

**1. 浏览器接收到 HTML 文件并转换为 DOM 树**

> 当我们打开一个网页时，浏览器都会去请求对应的 `HTML` 文件。虽然平时我们写代码时都会分为 `JS`、`CSS`、`HTML` 文件，也就是字符串，但是计算机硬件是不理解这些字符串的，所以在网络中传输的内容其实都是 `0` 和 `1` 这些字节数据。当浏览器接收到这些字节数据以后，它会将这些字节数据转换为字符串，也就是我们写的代码。

![](https://user-gold-cdn.xitu.io/2018/11/27/16754281e59587f3)

> 当数据转换为字符串以后，浏览器会先将这些字符串通过词法分析转换为标记（`token`），这一过程在词法分析中叫做标记化（`tokenization`）

![](https://user-gold-cdn.xitu.io/2018/11/27/16754288f37a5347)

> 那么什么是标记呢？这其实属于编译原理这一块的内容了。简单来说，标记还是字符串，是构成代码的最小单位。这一过程会将代码分拆成一块块，并给这些内容打上标记，便于理解这些最小单位的代码是什么意思

![](https://user-gold-cdn.xitu.io/2018/11/27/167540a7b5cef612)

> 当结束标记化后，这些标记会紧接着转换为 `Node`，最后这些 `Node` 会根据不同 `Node` 之前的联系构建为一颗 `DOM` 树

![](https://user-gold-cdn.xitu.io/2018/11/27/1675416cbea98c3c)

> 以上就是浏览器从网络中接收到 `HTML` 文件然后一系列的转换过程

![](https://user-gold-cdn.xitu.io/2018/11/27/167542b09875a74a)

> 当然，在解析 `HTML` 文件的时候，浏览器还会遇到 `CSS` 和 `JS` 文件，这时候浏览器也会去下载并解析这些文件，接下来就让我们先来学习浏览器如何解析 `CSS` 文件

**2. 将 CSS 文件转换为 CSSOM 树**

> 其实转换 `CSS` 到 `CSSOM` 树的过程和上一小节的过程是极其类似的

![](https://user-gold-cdn.xitu.io/2018/11/27/167542a9af5f193f)

- 在这一过程中，浏览器会确定下每一个节点的样式到底是什么，并且这一过程其实是很消耗资源的。因为样式你可以自行设置给某个节点，也可以通过继承获得。在这一过程中，浏览器得递归 `CSSOM` 树，然后确定具体的元素到底是什么样式。

如果你有点不理解为什么会消耗资源的话，我这里举个例子

```html
<div>
  <a> <span></span> </a>
</div>
<style>
  span {
    color: red;
  }
  div > a > span {
    color: red;
  }
</style>
```

> 对于第一种设置样式的方式来说，浏览器只需要找到页面中所有的 `span` 标签然后设置颜色，但是对于第二种设置样式的方式来说，浏览器首先需要找到所有的 `span` 标签，然后找到 `span` 标签上的 `a` 标签，最后再去找到 `div` 标签，然后给符合这种条件的 `span` 标签设置颜色，这样的递归过程就很复杂。所以我们应该尽可能的避免写过于具体的 `CSS` 选择器，然后对于 `HTML` 来说也尽量少的添加无意义标签，保证层级扁平

**3. 生成渲染树**

> 当我们生成 `DOM` 树和 `CSSOM` 树以后，就需要将这两棵树组合为渲染树

![](https://user-gold-cdn.xitu.io/2018/11/27/16754488529c48bd)

- 在这一过程中，不是简单的将两者合并就行了。渲染树只会包括需要显示的节点和这些节点的样式信息，如果某个节点是 `display: none` 的，那么就不会在渲染树中显示。
- 当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流），然后调用 `GPU `绘制，合成图层，显示在屏幕上。对于这一部分的内容因为过于底层，还涉及到了硬件相关的知识，这里就不再继续展开内容了。

### 21.2 为什么操作 DOM 慢

> 想必大家都听过操作 DOM 性能很差，但是这其中的原因是什么呢？

- 因为 `DOM `是属于渲染引擎中的东西，而 `JS` 又是 `JS` 引擎中的东西。当我们通过 `JS` 操作 `DOM` 的时候，其实这个操作涉及到了两个线程之间的通信，那么势必会带来一些性能上的损耗。操作 `DOM` 次数一多，也就等同于一直在进行线程之间的通信，并且操作 `DOM` 可能还会带来重绘回流的情况，所以也就导致了性能上的问题。

> 经典面试题：插入几万个 DOM，如何实现页面不卡顿？


- 对于这道题目来说，首先我们肯定不能一次性把几万个 `DOM` 全部插入，这样肯定会造成卡顿，所以解决问题的重点应该是如何分批次部分渲染 `DOM`。大部分人应该可以想到通过 `requestAnimationFrame` 的方式去循环的插入 `DOM`，其实还有种方式去解决这个问题：虚拟滚动（`virtualized scroller`）。
- 这种技术的原理就是只渲染可视区域内的内容，非可见区域的那就完全不渲染了，当用户在滚动的时候就实时去替换渲染的内容

![](https://user-gold-cdn.xitu.io/2018/12/15/167b1c6887ecbba7)

> 从上图中我们可以发现，即使列表很长，但是渲染的 `DOM` 元素永远只有那么几个，当我们滚动页面的时候就会实时去更新 `DOM`，这个技术就能顺利解决这道经典面试题

### 21.3 什么情况阻塞渲染

- 首先渲染的前提是生成渲染树，所以 `HTML` 和 `CSS` 肯定会阻塞渲染。如果你想渲染的越快，你越应该降低一开始需要渲染的文件大小，并且扁平层级，优化选择器。
- 然后当浏览器在解析到 `script` 标签时，会暂停构建 `DOM`，完成后才会从暂停的地方重新开始。也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 `JS `文件，这也是都建议将 `script` 标签放在 `body` 标签底部的原因。
- 当然在当下，并不是说 `script` 标签必须放在底部，因为你可以给 `script` 标签添加 `defer` 或者 `async` 属性。
- 当 `script` 标签加上 `defer` 属性以后，表示该 `JS` 文件会并行下载，但是会放到 `HTML` 解析完成后顺序执行，所以对于这种情况你可以把 `script `标签放在任意位置。
- 对于没有任何依赖的 `JS` 文件可以加上 `async` 属性，表示 `JS` 文件下载和解析不会阻塞渲染。

### 21.4 重绘（Repaint）和回流（Reflow）

> 重绘和回流会在我们设置节点样式时频繁出现，同时也会很大程度上影响性能。

- 重绘是当节点需要更改外观而不会影响布局的，比如改变 `color` 就叫称为重绘
- 回流是布局或者几何属性需要改变就称为回流。
- 回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点的一系列回流。

**以下几个动作可能会导致性能问题**：

- 改变 `window` 大小
- 改变字体
- 添加或删除样式
- 文字改变
- 定位或者浮动
- 盒模型

> 并且很多人不知道的是，重绘和回流其实也和 `Eventloop` 有关。

- 当 `Eventloop` 执行完 `Microtasks` 后，会判断 `document` 是否需要更新，因为浏览器是 `60Hz` 的刷新率，每 `16.6ms` 才会更新一次。
- 然后判断是否有 `resize` 或者 `scroll` 事件，有的话会去触发事件，所以 `resize` 和 `scroll` 事件也是至少 `16ms` 才会触发一次，并且自带节流功能。
- 判断是否触发了 `media query`
- 更新动画并且发送事件
- 判断是否有全屏操作事件
- 执行 `requestAnimationFrame `回调
- 执行 `IntersectionObserver` 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
更新界面
- 以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 `requestIdleCallback `回调

### 21.5 减少重绘和回流

1. 使用 `transform` 替代 `top`

```html
<div class="test"></div>
<style>
  .test {
    position: absolute;
    top: 10px;
    width: 100px;
    height: 100px;
    background: red;
  }
</style>
<script>
  setTimeout(() => {
    // 引起回流
    document.querySelector('.test').style.top = '100px'
  }, 1000)
</script>

```

2. 使用 `visibility` 替换` display: none` ，因为前者只会引起重绘，后者会引发回流（改变了布局）
3. 不要把节点的属性值放在一个循环里当成循环里的变量

```js
for(let i = 0; i < 1000; i++) {
    // 获取 offsetTop 会导致回流，因为需要去获取正确的值
    console.log(document.querySelector('.test').style.offsetTop)
}
```

4. 不要使用 `table` 布局，可能很小的一个小改动会造成整个 `table` 的重新布局
5. 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 `requestAnimationFrame`
6. `CSS` 选择符从右往左匹配查找，避免节点层级过多
7. 将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点。比如对于 `video` 标签来说，浏览器会自动将该节点变为图层。

![](https://user-gold-cdn.xitu.io/2018/3/29/1626fb6f33a6f9d7)

> 设置节点为图层的方式有很多，我们可以通过以下几个常用属性可以生成新图层

- `will-change`
- `video`、`iframe` 标签

## 22 安全防范

### 22.1 XSS

> 涉及面试题：什么是 `XSS` 攻击？如何防范 `XSS` 攻击？什么是 `CSP`？

- `XSS` 简单点来说，就是攻击者想尽一切办法将可以执行的代码注入到网页中。
- `XSS` 可以分为多种类型，但是总体上我认为分为两类：持久型和非持久型。
- 持久型也就是攻击的代码被服务端写入进数据库中，这种攻击危害性很大，因为如果网站访问量很大的话，就会导致大量正常访问页面的用户都受到攻击。

> 举个例子，对于评论功能来说，就得防范持久型 `XSS` 攻击，因为我可以在评论中输入以下内容

![image.png](https://upload-images.jianshu.io/upload_images/1480597-4d0534470dcfe615.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- 这种情况如果前后端没有做好防御的话，这段评论就会被存储到数据库中，这样每个打开该页面的用户都会被攻击到。
- 非持久型相比于前者危害就小的多了，一般通过修改 `URL` 参数的方式加入攻击代码，诱导用户访问链接从而进行攻击。

> 举个例子，如果页面需要从 `URL` 中获取某些参数作为内容的话，不经过过滤就会导致攻击代码被执行

```html
<!-- http://www.domain.com?name=<script>alert(1)</script> -->
<div>{{name}}</div>                                                  
```

> 但是对于这种攻击方式来说，如果用户使用 `Chrome` 这类浏览器的话，浏览器就能自动帮助用户防御攻击。但是我们不能因此就不防御此类攻击了，因为我不能确保用户都使用了该类浏览器。

![](https://user-gold-cdn.xitu.io/2018/12/2/1676d5e1a09c8367)

> 对于 `XSS` 攻击来说，通常有两种方式可以用来防御。

1. **转义字符**

> 首先，对于用户的输入应该是永远不信任的。最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义

```js
function escape(str) {
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quto;')
  str = str.replace(/'/g, '&#39;')
  str = str.replace(/`/g, '&#96;')
  str = str.replace(/\//g, '&#x2F;')
  return str
}
```

> 通过转义可以将攻击代码 `<script>alert(1)</script>` 变成

```js
// -> &lt;script&gt;alert(1)&lt;&#x2F;script&gt;
escape('<script>alert(1)</script>')
```

> 但是对于显示富文本来说，显然不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。对于这种情况，通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式

```js
const xss = require('xss')
let html = xss('<h1 id="title">XSS Demo</h1><script>alert("xss");</script>')
// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;
console.log(html)
```

> 以上示例使用了 `js-xss` 来实现，可以看到在输出中保留了 `h1` 标签且过滤了 `script `标签

2. **CSP**

> `CSP` 本质上就是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截是由浏览器自己实现的。我们可以通过这种方式来尽量减少 `XSS` 攻击。

**通常可以通过两种方式来开启 CSP**：

- 设置 `HTTP Header` 中的 `Content-Security-Policy`
- 设置 `meta` 标签的方式 `<meta http-equiv="Content-Security-Policy">`

这里以设置 `HTTP Header` 来举例

**只允许加载本站资源**

```
Content-Security-Policy: default-src ‘self’
```

**只允许加载 HTTPS 协议图片**

```
Content-Security-Policy: img-src https://*
```

**允许加载任何来源框架**

```
Content-Security-Policy: child-src 'none'
```

> 当然可以设置的属性远不止这些，你可以通过查阅 [文档](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) 的方式来学习，这里就不过多赘述其他的属性了。

> 对于这种方式来说，只要开发者配置了正确的规则，那么即使网站存在漏洞，攻击者也不能执行它的攻击代码，并且 `CSP` 的兼容性也不错。

![](https://user-gold-cdn.xitu.io/2018/12/2/1676d8215a3d1f5b)

### 22.2 CSRF

> 涉及面试题：什么是 `CSRF` 攻击？如何防范 `CSRF` 攻击？

> `CSRF` 中文名为跨站请求伪造。原理就是攻击者构造出一个后端请求地址，诱导用户点击或者通过某些途径自动发起请求。如果用户是在登录状态下的话，后端就以为是用户在操作，从而进行相应的逻辑。

举个例子，假设网站中有一个通过 `GET` 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口

```html
<img src="http://www.domain.com/xxx?comment='attack'"/>
```

> 那么你是否会想到使用 `POST` 方式提交请求是不是就没有这个问题了呢？其实并不是，使用这种方式也不是百分百安全的，攻击者同样可以诱导用户进入某个页面，在页面中通过表单提交 `POST` 请求。

**如何防御**

- `Get` 请求不对数据进行修改
- 不让第三方网站访问到用户 `Cookie`
- 阻止第三方网站请求接口
- 请求时附带验证信息，比如验证码或者 `Token`

**SameSite**

> 可以对 `Cookie` 设置 `SameSite` 属性。该属性表示 `Cookie` 不随着跨域请求发送，可以很大程度减少 `CSRF` 的攻击，但是该属性目前并不是所有浏览器都兼容。

**验证 Referer**

> 对于需要防范 `CSRF` 的请求，我们可以通过验证 `Referer` 来判断该请求是否为第三方网站发起的。

**Token**

> 服务器下发一个随机 `Token`，每次发起请求时将 `Token` 携带上，服务器验证 `Token` 是否有效

### 22.3 点击劫持

> 涉及面试题：什么是点击劫持？如何防范点击劫持？

> 点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 `iframe` 嵌套的方式嵌入自己的网页中，并将 `iframe` 设置为透明，在页面中透出一个按钮诱导用户点击

![image.png](https://upload-images.jianshu.io/upload_images/1480597-e2fd2624a105fce7.png)

> 对于这种攻击方式，推荐防御的方法有两种

**1. X-FRAME-OPTIONS**

> `X-FRAME-OPTIONS` 是一个 `HTTP` 响应头，在现代浏览器有一个很好的支持。这个 HTTP 响应头 就是为了防御用` iframe` 嵌套的点击劫持攻击。

> 该响应头有三个值可选，分别是

- `DENY`，表示页面不允许通过 `iframe` 的方式展示
- `SAMEORIGIN`，表示页面可以在相同域名下通过 `iframe` 的方式展示
- `ALLOW-FROM`，表示页面可以在指定来源的 `iframe` 中展示

**2. JS 防御**

> 对于某些远古浏览器来说，并不能支持上面的这种方式，那我们只有通过 JS 的方式来防御点击劫持了。

```html
<head>
  <style id="click-jack">
    html {
      display: none !important;
    }
  </style>
</head>
<body>
  <script>
    if (self == top) {
      var style = document.getElementById('click-jack')
      document.body.removeChild(style)
    } else {
      top.location = self.location
    }
  </script>
</body>
```

> 以上代码的作用就是当通过 `iframe` 的方式加载页面时，攻击者的网页直接不显示所有内容了

## 23 从 V8 中看 JS 性能优化








<script>
export default {
  mounted () {
    var script = document.createElement("script");
    script.type = "text/javascript"
    script.charset="UTF-8"
    script.src = "http://tajs.qq.com/stats?sId=59154049"
    document.body.appendChild(script);

  }
}
</script>
