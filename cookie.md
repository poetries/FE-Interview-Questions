**请你谈谈Cookie的弊端**

- cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的
- 第一：每个特定的域名下最多生成20个cookie

- 1.IE6或更低版本最多20个cookie

- 2.IE7和之后的版本最后可以有50个cookie。

- 3.Firefox最多50个cookie

- 4.chrome和Safari没有做硬性限制

**请你谈谈Cookie的弊端？**

* 每个特定的域名下最多生成的 cookie 个数有限制
* IE 和 Opera 会清理近期最少使用的 cookie，Firefox 会随机清理 cookie
* cookie 的最大大约为 4096 字节，为了兼容性，一般设置不超过 4095 字节
* 如果 cookie 被人拦截了，就可以取得所有的 session 信息