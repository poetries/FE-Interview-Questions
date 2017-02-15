**ES6的了解**

> 新增模板字符串（为JavaScript提供了简单的字符串插值功能）、箭头函数（操作符左边为输入的参数，而右边则是进行的操作以及返回的值Inputs=>outputs。）、for-of（用来遍历数据—例如数组中的值。）arguments对象可被不定参数和默认参数完美代替。ES6将promise对象纳入规范，提供了原生的Promise对象。增加了let和const命令，用来声明变量。增加了块级作用域。let命令实际上就增加了块级作用域。ES6规定，var命令和function命令声明的全局变量，属于全局对象的属性；let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。。还有就是引入module模块的概念

**说说你对Promise的理解**

- 依照 Promise/A+ 的定义，Promise 有四种状态：
  - pending: 初始状态, 非 fulfilled 或 rejected.

  - fulfilled: 成功的操作.

  - rejected: 失败的操作.

  - settled: Promise已被fulfilled或rejected，且不是pending

- 另外， fulfilled 与 rejected 一起合称 settled
- Promise 对象用来进行延迟(deferred) 和异步(asynchronous ) 计算

**Promise 的构造函数**

- 构造一个 Promise，最基本的用法如下：

```
var promise = new Promise(function(resolve, reject) {

        if (...) {  // succeed

            resolve(result);

        } else {   // fails

            reject(Error(errMessage));

        }
    });
```

- Promise 实例拥有 then 方法（具有 then 方法的对象，通常被称为thenable）。它的使用方法如下：
```
promise.then(onFulfilled, onRejected)
```

- 接收两个函数作为参数，一个在 fulfilled 的时候被调用，一个在rejected的时候被调用，接收参数就是 future，onFulfilled 对应 resolve, onRejected 对应 reject

**什么是 Promise ？**

* Promise 就是一个对象，用来表示并传递异步操作的最终结果
* Promise 最主要的交互方式：将回调函数传入 then 方法来获得最终结果或出错原因
* Promise 代码书写上的表现：以“链式调用”代替回调函数层层嵌套（回调地狱）

**谈一谈你了解ECMAScript6的新特性？**

* 块级作用区域              `let a = 1;`
* 可定义常量                `const PI = 3.141592654;`
* 变量解构赋值              `var [a, b, c] = [1, 2, 3];`
* 字符串的扩展(模板字符串)  ` var sum = `${a + b}`;`
* 数组的扩展(转换数组类型)   `Array.from($('li'));`
* 函数的扩展(扩展运算符)     `[1, 2].push(...[3, 4, 5]);`
* 对象的扩展(同值相等算法)   ` Object.is(NaN, NaN);`
* 新增数据类型(Symbol)      `let uid = Symbol('uid');`
* 新增数据结构(Map)        ` let set = new Set([1, 2, 2, 3]);`
* for...of循环            `for(let val of arr){};`
* Promise对象            ` var promise = new Promise(func);`
* Generator函数          ` function* foo(x){yield x; return x*x;}`
* 引入Class(类)          ` class Foo {}`
* 引入模块体系            ` export default func;`
* 引入async函数[ES7]    
```
async function asyncPrint(value, ms) {
      await timeout(ms);
      console.log(value)
     }
     
```
**Object.is() 与原来的比较操作符 ===、== 的区别？**

-  == 相等运算符，比较时会自动进行数据类型转换
-  === 严格相等运算符，比较时不进行隐式类型转换
-  Object.is 同值相等算法，在 === 基础上对 0 和 NaN 特别处理

```
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

**什么是 Babel ？**

* Babel 是一个 JS 编译器，自带一组 ES6 语法转化器，用于转化 JS 代码。
这些转化器让开发者提前使用最新的 JS语法(ES6/ES7)，而不用等浏览器全部兼容。
* Babel 默认只转换新的 JS 句法(syntax)，而不转换新的API。