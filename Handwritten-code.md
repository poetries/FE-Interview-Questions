**手写事件侦听器，并要求兼容浏览器**
```JavaScript
var eventUtil = {
  getEvent: function(event) {
      return event || window.event;
  },

  getTarget: function(event) {
      return event.target || event.srcElement;
  },

  addListener: function(element, type, hander) {
      if (element.addEventListener) {
          element.addEventListener(type, hander, false);
      } else if (element.attachEvent) {
          element.attachEvent('on' + type, hander);
      } else {
          element['on' + type] = hander;
      }
  },

  removeListener: function(element, type, hander) {
      if (element.removeEventListener) {
          element.removeEventListener(type, hander, false);
      } else if (element.deattachEvent) {
          element.detachEvent(type, hander);
      } else {
          element['on' + type] = null;
      }
  },

  preventDefault: function(event) {
      if (event.preventDefault) {
          event.preventDefault();
      } else {
          event.returnValue = false;
      }
  },

  stopPropagation: function(event) {
      if (event.stopPropagation) {
          event.stopPropagation();
      } else {
          event.cancelBubble = true;
      }
  }
};

// 调用
(function() {
  var btn = document.getElementById("btn");
  var link = document.getElementsByTagName("a")[0];

  eventUtil.addListener(btn, "click", function(event) {
      var event = eventUtil.getEvent(event);
      var target = eventUtil.getTarget(event);
      alert(event.type);
      alert(target);
      eventUtil.stopPropagation(event);
  });

  eventUtil.addListener(link, "click", function(event) {
      alert("prevent default event");
      var event = eventUtil.getEvent(event);
      eventUtil.preventDefault(event);
  });

  eventUtil.addListener(document.body, "click", function() {
      alert("click body");
  });
})();
```

**手写事件模型**

```JavaScript
var Event = (function () {
    var list = {}, bind, trigger, remove;
    bind = function (key, fn) {
        if (!list[key]) {
            list[key] = [];
        }
        list[key].push(fn);
    };
    trigger = function () {
        var key = Array.prototype.shift.call(arguments);
        var fns = list[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    };
    remove = function (key, fn) {
        var fns = list[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            fns & (fns.length = 0);
        } else {
            for (var i = fns.length - 1; i >= 0; i--) {
                var _fn = fns[i];
                if (_fn === fn) {
                    fns.splice(i, 1);
                }
            }
        }
    };
    return {
        bind: bind,
        trigger: trigger,
        remove: remove
    }
})();

// 调用
Event.bind('Hit', function(){ console.log('bind event'); }); // 绑定事件
Event.trigger("Hit", function(){ console.log('trigger event'); }); // 触发事件
```

**手写事件代理，并要求兼容浏览器**

```JavaScript
function delegateEvent(parentEl, selector, type, fn) {
    var handler = function(e){
          var e = e || window.event;
          var target = e.target || e.srcElement;
          if (matchSelector(target, selector)) {
              if(fn) {
                  fn.call(target, e);
              }
          }
    };
    if(parentEl.addEventListener){
        parentEl.addEventListener(type, handler);
    }else{
        parentEl.attachEvent("on" + type, handler);
    }
}
/**
 * support #id, tagName, .className
 */
function matchSelector(ele, selector) {
    // if use id
    if (selector.charAt(0) === "#") {
        return ele.id === selector.slice(1);
    }
    // if use class
    if (selector.charAt(0) === ".") {
        return (" " + ele.className + " ").indexOf(" " + selector.slice(1) + " ") != -1;
    }
    // if use tagName
    return ele.tagName.toLowerCase() === selector.toLowerCase();
}

// 调用
var box = document.getElementById("box");
delegateEvent(box, "a", "click", function(){
    console.log(this.href);
})
```

**手写事件触发器，并要求兼容浏览器**

```JavaScript
var fireEvent = function(element, event){
    if (document.createEventObject){
        var mockEvent = document.createEventObject();
        return element.fireEvent('on' + event, mockEvent)
    }else{
        var mockEvent = document.createEvent('HTMLEvents');
        mockEvent.initEvent(event, true, true);
        return element.dispatchEvent(mockEvent);
    }
}
```

**手写 Function.bind 函数**

```JavaScript
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      throw new TypeError("'this' is not function");
    }

    // bind's default arguments, array without first element
    // first part arguments for the function
    var aBindArgs = Array.prototype.slice.call(arguments, 1);
    var fToBind = this; // the function will be binding
    var fNOP = function () {};
    var fBound = function () {
          // target this will be binding
          var oThis = this instanceof fNOP ? this : oThis || this;
          // last part arguments for the function
          var aCallArgs = Array.prototype.slice.call(arguments);
          // complete arguments for the function
          var aFuncArgs = aBindArgs.concat(aCallArgs);
          return fToBind.apply(oThis, aFuncArgs);
        };

    // fBound extends fToBind
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

// 调用
var add = function(a, b, c){ return a + b + c;};
var newAdd = add.bind(null, 1, 2);
var result = newAdd(3);
```

**手写数组快速排序**

```JavaScript
var quickSort = function(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0, len = arr.length; i < len; i++){
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

// 调用
quickSort([9, 4, 2, 8, 1, 5, 3, 7]);
```

**手写数组冒泡排序**

```JavaScript
var bubble = function(arr){
    var maxIndex = arr.length - 1, temp, flag;
    for (var i = maxIndex; i > 0; i--) {
        flag = true
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = false;
            }
        }
        if(! flag){
            break;
        }
    }
    return arr;
}
// 调用
var arr = bubble([13, 69, 28, 93, 55, 75, 34]);
```

**手写数组去重**


```JavaScript
Array.prototype.unique = function() { return [...new Set(this)];};
// 调用
[1, 2, 3, 3, 2, 1].unique();

function unique1(arr){
    var hash = {}, result = [];
    for(var i=0, len=arr.length; i<len; i++){
        if(! hash[arr[i]]){
          result.push(arr[i]);
          hash[arr[i]] = true;
        }
    }
    return result;
}
// 调用
unique1([1, 2, 3, 3, 2, 1]);

Array.prototype.unique2 = function(){
    this.sort();
    var result = [this[0]];
    var len = this.length;
    for(var i = 0; i < len; i++){
        if(this[i] !== result[result.length - 1]){
          result.push(this[i]);
        }
    }
    return result;
}
// 调用
[1, 2, 3, 3, 2, 1].unique2();

function unique3(arr){
    var result = [];
    for(var i=0; i<arr.length; i++){
        if(result.indexOf(arr[i]) == -1){
          result.push(arr[i]);
        }
    }
    return result;
}

// 调用
unique3([1, 2, 3, 3, 2, 1]);
```

**将url的查询参数解析成字典对象**


```JavaScript
function parseQuery(url) {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf("?") + 1);
  var hash = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (match, $1, $2) {
      var name = decodeURIComponent($1);
      var val = decodeURIComponent($2);
      hash[name] = String(val);
      return match;
  });
  return hash;
}
```

**封装函数节流函数**

```JavaScript
var throttle = function(fn, delay, mustRunDelay){
  var timer = null;
  var t_start;
  return function(){
    var context = this, args = arguments, t_curr = +new Date();
    clearTimeout(timer);
    if(!t_start){
      t_start = t_curr;
    }
    if(t_curr - t_start >= mustRunDelay){
      fn.apply(context, args);
      t_start = t_curr;
    } else {
      timer = setTimeout(function(){
        fn.apply(context, args);
      }, delay);
    }
  };
};

// 调用（两次间隔50ms内连续触发不执行，但每累计100ms至少执行一次
window.onresize = throttle(myFunc, 50, 100);
````

**用JS实现千位分隔符**

```JavaScript
function test1(num){
  var str = (+ num) + '';
  var len = str.length;
  if(len <= 3) return str;
  num = '';
  while(len > 3){
      len -= 3;
      num = ',' + str.substr(len, 3) + num;
  }
  return str.substr(0, len) + num;
}

function test2(num){
  // ?= 正向匹配:匹配位置
  // ?! 正向不匹配:排除位置
  var str = (+num).toString();
  var reg = /(?=(?!\b)(\d{3})+$)/g;
  return str.replace(reg, ',');
}
```
