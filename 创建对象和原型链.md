## 1 前言

### 1.1 面向对象的三大特性

- 封装
- 继承
- 多态

### 1.2 原型链的知识

> 原型链是面向对象的基础，是非常重要的部分。有以下几种知识：

- 创建对象有几种方法
- 原型、构造函数、实例、原型链
- `instanceof`的原理
- `new` 运算符

## 2 创建对象有几种方法

### 2.1 方式一：字面量

```javascript
    var obj11 = {name: 'smyh'};
    var obj12 = new Object(name: `smyh`); //内置对象（内置的构造函数）
```

> 上面的两种写法，效果是一样的。因为，第一种写法，`obj11`会指向`Object`。

- 第一种写法是：字面量的方式。
- 第二种写法是：内置的构造函数


### 2.2 方式二：通过构造函数


```javascript
    var M = function (name) {
        this.name = name;
    }
    var obj3 = new M('smyhvae');
```

### 2.3 方法三：Object.create

```javascript
    var p = {name:'smyhvae'};
    var obj3 = Object.create(p);  //此方法创建的对象，是用原型链连接的
```

> 第三种方法，很少有人能说出来。这种方式里，`obj3`是实例，`p`是`obj3的``原型（`name`是p原型里的属性），构造函数是`Objecet` 。

![](http://img.smyhvae.com/20180306_1633.png)


## 3 原型、构造函数、实例，以及原型链

![](http://img.smyhvae.com/20180306_1540.png)

> PS：任何一个函数，如果在前面加了`new`，那就是构造函数。

### 3.1 原型、构造函数、实例三者之间的关系

![](http://img.smyhvae.com/20180306_2107.png)

1. 构造函数通过 `new` 生成实例
2. 构造函数也是函数，构造函数的`prototype`指向原型。（所有的函数有`prototype`属性，但实例没有 `prototype`属性）
3. 原型对象中有 `constructor`，指向该原型的构造函数。

> 上面的三行，代码演示：

```js
  var Foo = function (name) {
      this.name = name;
  }

  var fn = new Foo('smyhvae');
```

> 上面的代码中，`Foo.prototype.constructor === Foo`的结果是`true`：

![](http://img.smyhvae.com/20180306_2120.png)


4. 实例的`__proto__`指向原型。也就是说，`Foo.__proto__ === M.prototype`。

> 声明：所有的**引用类型**（数组、对象、函数）都有`__proto__`这个属性。

`Foo.__proto__ === Function.prototype`的结果为true，说明`Foo`这个普通的函数，是`Function`构造函数的一个实例。



### 3.2 原型链

**原型链的基本原理**：任何一个**实例**，通过原型链，找到它上面的**原型**，该原型对象中的方法和属性，可以被所有的原型实例共享。


> `Object`是原型链的顶端。

- 原型可以起到继承的作用。原型里的方法都可以被不同的实例共享：

```js
  //给Foo的原型添加 say 函数
  Foo.prototype.say = function () {
      console.log('');
  }
```

**原型链的关键**：在访问一个实例的时候，如果实例本身没找到此方法或属性，就往原型上找。如果还是找不到，继续往上一级的原型上找。


### 3.3 `instanceof`的原理

![](http://img.smyhvae.com/20180306_2209.png)


- `instanceof`的**作用**：用于判断**实例**属于哪个**构造函数**。
- `instanceof`的**原理**：判断实例对象的`__proto__`属性，和构造函数的`prototype`属性，是否为同一个引用（是否指向同一个地址）。

> - **注意1**：虽然说，实例是由构造函数 new 出来的，但是实例的`__proto__`属性引用的是构造函数的`prototype`。也就是说，实例的`__proto__`属性与构造函数本身无关。
> - **注意2**：在原型链上，原型的上面可能还会有原型，以此类推往上走，继续找`__proto__`属性。这条链上如果能找到， instanceof 的返回结果也是 true。

比如说：

- `foo instance of Foo`的结果为true，因为`foo.__proto__ === M.prototype`为`true`。
- **`foo instance of Objecet`的结果也为true**，为`Foo.prototype.__proto__ === Object.prototype`为`true`。

> 但我们不能轻易的说：`foo` 一定是 由`Object`创建的实例`。这句话是错误的。我们来看下一个问题就明白了。

### 3.4 分析一个问题

**问题：**已知A继承了B，B继承了C。怎么判断 a 是由A**直接生成**的实例，还是B直接生成的实例呢？还是C直接生成的实例呢？

> 分析：这就要用到原型的`constructor`属性了。

- `foo.__proto__.constructor === M`的结果为`true`，但是 `foo.__proto__.constructor === Object`的结果为`false`。
- 所以，用 `consturctor`判断就比用 `instanceof`判断，更为严谨。


## 4 new 运算符

> 当`new Foo()`时发生了什么：

- 创建一个**新的空对象实例**。
- 将此空对象的隐式原型指向其构造函数的显示原型。
- 执行构造函数（传入相应的参数，如果没有参数就不用传），同时 `this` 指向这个新实例。
- 如果返回值是一个新对象，那么直接返回该对象；如果无返回值或者返回一个非对象值，那么就将步骤（1）创建的对象返回。





```
