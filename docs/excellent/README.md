---
sidebarDepth: 4
pageClass: custom-code-highlight
---


# 第五部分：精华版

> [如果您觉得有帮助，可以打赏我](https://upload-images.jianshu.io/upload_images/1480597-1f247397539045cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) ![](![](https://upload-images.jianshu.io/upload_images/1480597-1f247397539045cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240))


> [关注微信公众号获取更多面试题：@静观流叶](https://upload-images.jianshu.io/upload_images/1480597-933c7247ddac5ed4.png) ![](![](https://upload-images.jianshu.io/upload_images/1480597-933c7247ddac5ed4.png))

## 1 实现一个简洁版的promise

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
