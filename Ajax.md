
- 什么是 Ajax? 如何创建一个Ajax？

* AJAX(Asynchronous Javascript And XML) = 异步 JavaScript + XML 在后台与服务器进行异步数据交换，不用重载整个网页，实现局部刷新。

* 创建 ajax 步骤：
  - 1.创建 XMLHttpRequest 对象
  - 2.创建一个新的 HTTP 请求，并指定该 HTTP 请求的类型、验证信息
  - 3.设置响应 HTTP 请求状态变化的回调函数
  - 4.发送 HTTP 请求
  - 5.获取异步调用返回的数据
  - 6.使用 JavaScript 和 DOM 实现局部刷新

```
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
        fn.call(this, xhr.responseText);
    }
};
xhr.send(data);
```