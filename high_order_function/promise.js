/**
 * 1.promise 是一个构造函数，默认需要传入一个executor执行器
 * 2.executor 会立刻执行，并且传入resolve and reject which are two parameters
 * 3.promise 有三个状态 fullfilled(成功) reject(失败) pending(等待,默认状态)
 * 4.每个promise 都有个then方法，可以访问成功的值和失败的原因
 * 5.可以通过resolve和reject 来改变状态，一个promise 状态变化后 不能再重新发生变化
 * 6.reject或者executor 发生异常的时候也会触发 promise 失败的状态
 */

const promise = new Promise((resolve, reject) => {
  resolve("ok");
});

promise.then(
  (data) => {
    console.log(data, "success");
  },
  (reason) => {
    console.log(reason);
  }
);
