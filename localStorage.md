**浏览器本地存储**

- 在较高版本的浏览器中，js提供了sessionStorage和globalStorage。在HTML5中提供了localStorage来取代globalStorage
- html5中的Web Storage包括了两种存储方式：sessionStorage和localStorage
- sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储
- 而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的

**web storage和cookie的区别**

- Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用
- 除此之外，WebStorage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie
- 但是cookie也是不可以或缺的：cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生
- 浏览器的支持除了IE７及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的userData其实就是javascript本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持web storage
- localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等

**cookie 和session 的区别：**

- 1、cookie数据存放在客户的浏览器上，session数据放在服务器上。

- 2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗

    - 考虑到安全应当使用session。

- 3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能

    - 考虑到减轻服务器性能方面，应当使用COOKIE。

- 4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

- 5、所以个人建议：

    - 将登陆信息等重要信息存放为SESSION

    - 其他信息如果需要保留，可以放在COOKIE中
    
**描述 cookies、sessionStorage 和 localStorage 的区别？**

* 与服务器交互：
  - cookie 是网站为了标示用户身份而储存在用户本地终端上的数据（通常经过加密）
  - cookie 始终会在同源 http 请求头中携带（即使不需要），在浏览器和服务器间来回传递
  - sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存
  
 * 存储大小：
 
  - cookie 数据根据不同浏览器限制，大小一般不能超过 4k
  - sessionStorage 和 localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大
  
* 有期时间：
    - localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
    - sessionStorage  数据在当前浏览器窗口关闭后自动删除
    - cookie           设置的cookie过期时间之前一直有效，与浏览器是否关闭无关