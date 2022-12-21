// 函数参数的预置 将函数的参数 进行一个保留 (闭包)
// 闭包 函数定义的作用域和执行的作用域 不是同一个，此时就会产生闭包
// 函数的 柯里化 偏函数 都是基于高阶函数来实现的; 必须调用外层函数

/** 在执行a的时候 不会被销毁 */
function a() {
  return function () {};
}

const c = a();
c();

// 判断类型常见的4种方式
// 1. typeof 可以基本类型, typeof null === 'object'
// 2. instanceof 判断是原生或者自定义类型
// 3. Object.prototype.toString 判断所有类型 需要在对象原型中再找到方法
// 4. constructor 可以看到当前对象的构对象是谁 [].constructor.Array; {}.contructor
// function isType(type, value) {
//   console.log(Object.prototype.toString.call(value));
//   return Object.prototype.toString.call(value) === `[object ${type}]`;
// }
// console.log(isType("String", "abc"));
// console.log(isType("Object", {}));

/**
 * 将 参数 预置到函数内
 * 函数柯里化 将范围具体化，可以实现批量传递函数
 * 函数反柯里化 将函数的范围变大  Object.prototype.toString.call(value) -> toString
 */
function isType(type) {
  return function isCheck(value) {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
  };
}

const utils = {};

["Number", "Boolean", "String"].forEach((type) => {
  utils[`is${type}`] = isType(type);
});

console.log(utils.isCheck("123"));
