什么是mvvm？
---

> MVVM是Model-View-ViewModel的缩写。mvvm是一种设计思想。Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和 Model的对象

- 在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
- ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理

vue的优点是什么？
---

- 低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变
- 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑
- 可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写


请详细说下你对vue生命周期的理解
---

> 答：总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后


- 创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el还没有
- 载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。
- 更新前/后：当data变化时，会触发beforeUpdate和updated方法
- 销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在

组件之间的传值？
---

**父组件与子组件传值**

```
//父组件通过标签上面定义传值
<template>
    <Main :obj="data"></Main>
</template>
<script>
    //引入子组件
    import Main form "./main"
    
    exprot default{
        name:"parent",
        data(){
            return {
                data:"我要向子组件传递数据"
            }
        },
        //初始化组件
        components:{
            Main
        }
    }
</script>


//子组件通过props方法接受数据

<template>
    <div>{{data}}</div>
</template>
<script>
    exprot default{
        name:"son",
        //接受父组件传值
        props:["data"]
    }
</script>

```

**子组件向父组件传递数据**

```
//子组件通过$emit方法传递参数
<template>
   <div v-on:click="events"></div>
</template>
<script>
    //引入子组件
    import Main form "./main"
    
    exprot default{
        methods:{
            events:function(){
                
            }
        }
    }
</script>


//

<template>
    <div>{{data}}</div>
</template>
<script>
    exprot default{
        name:"son",
        //接受父组件传值
        props:["data"]
    }
</script>

```

路由之间跳转？
---

**声明式（标签跳转）**

```
<router-link :to="index">
```

**编程式（ js跳转）**

```
router.push('index')
```

vuex是什么？怎么使用？哪种功能场景使用它？
---

> vue框架中状态管理。在main.js引入store，注入。新建了一个目录`store`，….. `export` 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车


实现 Vue SSR
---

![](http://7xq6al.com1.z0.glb.clouddn.com/vue-ssr.jpg)

**其基本实现原理**

- app.js 作为客户端与服务端的公用入口，导出 Vue 根实例，供客户端 entry 与服务端 entry 使用。客户端 entry 主要作用挂载到 DOM 上，服务端 entry 除了创建和返回实例，还进行路由匹配与数据预获取。
- webpack 为客服端打包一个 Client Bundle ，为服务端打包一个 Server Bundle 。
- 服务器接收请求时，会根据 url，加载相应组件，获取和解析异步数据，创建一个读取 Server Bundle 的 BundleRenderer，然后生成 html 发送给客户端。
- 客户端混合，客户端收到从服务端传来的 DOM 与自己的生成的 DOM 进行对比，把不相同的 DOM 激活，使其可以能够响应后续变化，这个过程称为客户端激活 。为确保混合成功，客户端与服务器端需要共享同一套数据。在服务端，可以在渲染之前获取数据，填充到 stroe 里，这样，在客户端挂载到 DOM 之前，可以直接从 store 里取数据。首屏的动态数据通过 `window.__INITIAL_STATE__ `发送到客户端


> Vue SSR 的实现，主要就是把 Vue 的组件输出成一个完整 HTML, vue-server-renderer 就是干这事的


- `Vue SSR `需要做的事多点（输出完整 HTML），除了` complier -> vnode`，还需如数据获取填充至 HTML、客户端混合（hydration）、缓存等等。
相比于其他模板引擎（ejs, jade 等），最终要实现的目的是一样的，性能上可能要差点

Vue 组件 data 为什么必须是函数
---

- 每个组件都是 Vue 的实例。
- 组件共享 data 属性，当 data 的值是同一个引用类型的值时，改变其中一个会影响其他

Vue computed 实现
---

- 建立与其他属性（如：data、 Store）的联系；
- 属性改变后，通知计算属性重新计算

> 实现时，主要如下

- 初始化 data， 使用 `Object.defineProperty` 把这些属性全部转为 `getter/setter`。
- 初始化 `computed`, 遍历 `computed` 里的每个属性，每个 computed 属性都是一个 watch 实例。每个属性提供的函数作为属性的 getter，使用 Object.defineProperty 转化。
- `Object.defineProperty getter` 依赖收集。用于依赖发生变化时，触发属性重新计算。
- 若出现当前 computed 计算属性嵌套其他 computed 计算属性时，先进行其他的依赖收集


Vue complier 实现
---

- 模板解析这种事，本质是将数据转化为一段 html ，最开始出现在后端，经过各种处理吐给前端。随着各种 mv* 的兴起，模板解析交由前端处理。
- 总的来说，Vue complier 是将 template 转化成一个 render 字符串。

> 可以简单理解成以下步骤：

- parse 过程，将 template 利用正则转化成 AST 抽象语法树。
- optimize 过程，标记静态节点，后 diff 过程跳过静态节点，提升性能。
- generate 过程，生成 render 字符串

怎么快速定位哪个组件出现性能问题
---

> 用 timeline 工具。 大意是通过 timeline 来查看每个函数的调用时常，定位出哪个函数的问题，从而能判断哪个组件出了问题

