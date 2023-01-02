const PENDING = "PENDDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    //解决pormise 异步
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach((callback) => callback());
      }
    };
    const reject = (reason) => {
      if (this.status === REJECTED) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback());
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject("catch====>", e);
    }
  }

  then(onFulfilled, onRejected) {
    // 调用then的时候 已经确定成功或者失败
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }

    if (this.status === PENDING) {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

module.exports = Promise;
