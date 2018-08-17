React 中 keys 的作用是什么？
---

> Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识

- 在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 Key 的重要性


传入 setState 函数的第二个参数的作用是什么？
---

> 该函数会在setState函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成：

```
this.setState(
  { username: 'tylermcginnis33' },
  () => console.log('setState has finished and the component has re-rendered.')
)
```

```
this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count
  }
})
```

React 中 refs 的作用是什么
---

- Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄
- 可以为元素添加ref属性然后在回调函数中接受该元素在 DOM 树中的句柄，该值会作为回调函数的第一个参数返回

在生命周期中的哪一步你应该发起 AJAX 请求
---

> 我们应当将AJAX 请求放到 `componentDidMount` 函数中执行，主要原因有下

- React 下一代调和算法 Fiber 会通过开始或停止渲染的方式优化应用性能，其会影响到 componentWillMount 的触发次数。对于 componentWillMount 这个生命周期函数的调用次数会变得不确定，React 可能会多次频繁调用 componentWillMount。如果我们将 AJAX 请求放到 componentWillMount 函数中，那么显而易见其会被触发多次，自然也就不是好的选择。
- 如果我们将 AJAX 请求放置在生命周期的其他函数中，我们并不能保证请求仅在组件挂载完毕后才会要求响应。如果我们的数据请求在组件挂载之前就完成，并且调用了setState函数将数据添加到组件状态中，对于未挂载的组件则会报错。而在 componentDidMount 函数中进行 AJAX 请求则能有效避免这个问题

shouldComponentUpdate 的作用
---

> shouldComponentUpdate 允许我们手动地判断是否要进行组件更新，根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新

如何告诉 React 它应该编译生产环境版
---

> 通常情况下我们会使用 Webpack 的 DefinePlugin 方法来将 NODE_ENV 变量值设置为 production。编译版本中 React 会忽略 propType 验证以及其他的告警信息，同时还会降低代码库的大小，React 使用了 Uglify 插件来移除生产环境下不必要的注释等信息

概述下 React 中的事件处理逻辑
---

> 为了解决跨浏览器兼容性问题，React 会将浏览器原生事件（Browser Native Event）封装为合成事件（SyntheticEvent）传入设置的事件处理器中。这里的合成事件提供了与原生事件相同的接口，不过它们屏蔽了底层浏览器的细节差异，保证了行为的一致性。另外有意思的是，React 并没有直接将事件附着到子元素上，而是以单一事件监听器的方式将所有的事件发送到顶层进行处理。这样 React 在更新 DOM 的时候就不需要考虑如何去处理附着在 DOM 上的事件监听器，最终达到优化性能的目的

createElement 与 cloneElement 的区别是什么
---

> createElement 函数是 JSX 编译之后使用的创建 React Element 的函数，而 cloneElement 则是用于复制某个元素并传入新的 Props

redux中间件
---

> 中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action -> middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能

- `redux-logger`：提供日志输出
- `redux-thunk`：处理异步操作
- `redux-promise`：处理异步操作，`actionCreator`的返回值是`promise`

redux有什么缺点
---

- 一个组件所需要的数据，必须由父组件传过来，而不能像flux中直接从store取。
- 当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新render，可能会有效率影响，或者需要写复杂的`shouldComponentUpdate`进行判断。

react组件的划分业务组件技术组件？
---

- 根据组件的职责通常把组件分为UI组件和容器组件。
- UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。
- 两者通过`React-Redux` 提供`connect`方法联系起来

react生命周期函数
---

苍青浪
关于React面试题汇总
1、redux中间件

中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action -> middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能。

常见的中间件：

redux-logger：提供日志输出

redux-thunk：处理异步操作

redux-promise：处理异步操作，actionCreator的返回值是promise

 

2、redux有什么缺点

1.一个组件所需要的数据，必须由父组件传过来，而不能像flux中直接从store取。

2.当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新render，可能会有效率影响，或者需要写复杂的shouldComponentUpdate进行判断。

 

3、react组件的划分业务组件技术组件？

根据组件的职责通常把组件分为UI组件和容器组件。

UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。

两者通过React-Redux 提供connect方法联系起来。

具体使用可以参照如下链接：http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html

 

react生命周期函数
---

**初始化阶段**

- `getDefaultProp`s:获取实例的默认属性
- `getInitialState`:获取每个实例的初始化状态
- `componentWillMount`：组件即将被装载、渲染到页面上
- `render`:组件在这里生成虚拟的DOM节点
- `omponentDidMount`:组件真正在被装载之后

**运行中状态**

- `componentWillReceiveProps`:组件将要接收到属性的时候调用
- `shouldComponentUpdate`:组件接受到新属性或者新状态的时候（可以返回false，接收数据后不更新，阻止`render`调用，后面的函数不会被继续执行了）
- `componentWillUpdate`:组件即将更新不能修改属性和状态
- `render`:组件重新描绘
- `componentDidUpdate`:组件已经更新

**销毁阶段**

- `componentWillUnmount`:组件即将销毁

react性能优化是哪个周期函数
---

> shouldComponentUpdate 这个方法用来判断是否需要调用render方法重新描绘dom。因为dom的描绘非常消耗性能，如果我们能在shouldComponentUpdate方法中能够写出更优化的dom diff算法，可以极大的提高性能

为什么虚拟dom会提高性能
---

> 虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能

**具体实现步骤如下**

- 用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
- 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
- 把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新

diff算法?
---

- 把树形结构按照层级分解，只比较同级元素。
- 给列表结构的每个单元添加唯一的key属性，方便比较。
- React 只会匹配相同 class 的 component（这里面的class指的是组件的名字）
- 合并操作，调用 component 的 setState 方法的时候, React 将其标记为 - dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.
- 选择性子树渲染。开发人员可以重写shouldComponentUpdate提高diff的性能

react性能优化方案
---

- 重写`shouldComponentUpdate`来避免不必要的dom操作
- 使用 production 版本的react.js
- 使用key来帮助React识别列表中所有子组件的最小变化
