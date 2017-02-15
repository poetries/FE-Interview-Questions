**XML和JSON的区别？**

- 数据体积方面
  - JSON相对于XML来讲，数据的体积小，传递的速度更快些。
  
- 数据交互方面
  - JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互
  
- 数据描述方面
  - JSON对数据的描述性比XML较差
  
- 传输速度方面
  - JSON的速度要远远快于XML
  
**JSON 的了解？**

- JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式
- 它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小

- JSON字符串转换为JSON对象:

```
var obj =eval('('+ str +')');
var obj = str.parseJSON();
var obj = JSON.parse(str);
```

- JSON对象转换为JSON字符串：

```
var last=obj.toJSONString();
var last=JSON.stringify(obj);
```