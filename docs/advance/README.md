---
sidebarDepth: 4
---

# 高级

## 一、JavaScript高级

### 1.1 类型转换

**转Boolean**

> 在条件判断时，除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象

### 1.2 原型

> 每个函数都有 prototype 属性，除了 Function.prototype.bind()，该属性指向原型

## 二、浏览器

### 2.1 事件机制

- `window` 往事件触发处传播，遇到注册的捕获事件会触发
- 传播到事件触发处时触发注册的事件
- 从事件触发处往 `window` 传播，遇到注册的冒泡事件会触发


### 2.2 跨域

**JSONP**

> JSONP 的原理很简单，就是利用 `<script>` 标签没有跨域限制的漏洞。通过 `<script> `标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时

**CORS**

- CORS需要浏览器和后端同时支持。IE 8 和 9 需要通过` XDomainRequest `来实现。
- 浏览器会自动进行 CORS 通信，实现CORS通信的关键是后端。只要后端实现了 CORS，就实现了跨域。

## 三、性能安全

## 四、小程序

## 五、React

## 六、Vue

