const fs = require("fs");
const path = require("path");

// 同步 异步代码的执行结果
const obje = {};

// const callBack = (key, value) => {
//   obje[key] = value;
//   if (Reflect.ownKeys(obje).length === 2) {
//     console.log(obje);
//   }
// };

function after(times, callBack) {
  const obje = {};
  return function final(key, value) {
    obje[key] = value;
    if (--times === 0) {
      callBack(obje);
    }
  };
}

/** 这里的callBack 返回的是after 里面的final函数 */
const callBack = after(2, (data) => {
  // 缺点 无法监控过程， 可以使用发布和订阅来完成
  console.log(data);
});

fs.readFile(path.resolve(__dirname, "a.txt"), "utf-8", (err, data) => {
  callBack("message", data); // 这里调用的是after 中final函数
});

fs.readFile(path.resolve(__dirname, "b.txt"), "utf-8", (err, data) => {
  callBack("message2", data); // 这里调用的是after 中final函数
});
