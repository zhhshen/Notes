####  事件循环机制(Event loop)
---

准备的几个概念：

* 执行上下文 （Execution Context）

* 函数调用栈 （call stack）

* 队列数据结构 （queue）

* Promise


1 线程 和 事件循环机制

javascript 是单线程，所以拥有唯一的一个事件循环机制

---

* JavaScript代码的执行过程中，除了依靠函数调用栈来搞定函数的执行顺序外，还依靠任务队列(task queue)来搞定另外一些代码的执行。

* 一个线程中，事件循环是唯一的，但是任务队列可以拥有多个。

* 任务队列又分为macro-task（宏任务）与micro-task（微任务），在最新标准中，它们被分别称为task与jobs。

* macro-task大概包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。

* micro-task大概包括: process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)

* setTimeout/Promise等我们称之为任务源。而进入任务队列的是他们指定的具体执行任务。
```javascript
// setTimeout中的回调函数才是进入任务队列的任务
setTimeout(function() {
  console.log('xxxx');
})
```

* 来自不同任务源的任务会进入到不同的任务队列。其中setTimeout与setInterval是同源的。

* 事件循环的顺序，决定了JavaScript代码的执行顺序。它从script(整体代码)开始第一次循环。之后全局上下文进入函数调用栈。直到调用栈清空(只剩全局)，然后执行所有的micro-task。当所有可执行的micro-task执行完毕之后。循环再次从macro-task开始，找到其中一个任务队列执行完毕，然后再执行所有的micro-task，这样一直循环下去。

* 其中每一个任务的执行，无论是macro-task还是micro-task，都是借助函数调用栈来完成。

```javascript
// demo01  出自于上面我引用文章的一个例子，我们来根据上面的结论，一步一步分析具体的执行过程。
// 为了方便理解，我以打印出来的字符作为当前的任务名称
setTimeout(function() {
    console.log('timeout1');
})
new Promise(function(resolve) {
    console.log('promise1');
    for(var i = 0; i < 1000; i++) {
      i == 99 && resolve();
    }
    console.log('promise2');
}).then(function() {
    console.log('then1');
})

console.log('global1');
```


#### 参考资料

* [前端基础进阶(事件循环机制)](http://www.jianshu.com/p/12b9f73c5a4f)  
