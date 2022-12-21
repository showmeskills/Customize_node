/**
 * 高阶函数
 *  1. 一个函数 返回另一个函数;
 *  2.一个函数的参数 是一个函数 它也是高阶函数
 *  3. before is a high order function
 *  4. 高阶函数：可以包装一个函数 可以用一新函数进行扩展
 */

/** 不破坏原有的函数功能，使用高阶函数 */
function core(a, b, c) {
  console.log("core function", a, b, c);
}

// Function.prototype.before = function (){} 在所有函数上包一个before

/**
 * @param {*} callback this is from 匿名函数
 */
core.before = function (callback) {
  // 剪头函数 1. 没有 this, 2.没有agreements 3. 没有prototype
  return (...args) => {
    callback();
    //core();
    this(...args); // 这里的this 就是core函数
  };
};

const newCore = core.before(function () {
  console.log("before");
}); // 这里的匿名函数 是用户传入的逻辑是一个回调

newCore(1, 2, 3); // 对原来方法进行扩展
