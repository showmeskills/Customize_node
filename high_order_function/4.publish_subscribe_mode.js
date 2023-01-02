// 通过 发布和订阅 实现解 偶合

const fs = require("fs");
const path = require("path");

const events = {
  _obj: {},
  _arr: [], // 订阅中心
  on(callBack) {
    this._arr.push(callBack);
  },
  emit(key, value) {
    this._obj[key] = value;

    this._arr.forEach((callBack) => callBack(this._obj));
  },
};

events.on((data) => {
  console.log("读取完毕后 就会触发");
});

events.on((data) => {
  if (Reflect.ownKeys(data).length === 2) {
    console.log("数据读取完毕", data);
  }
});

fs.readFile(path.resolve(__dirname, "a.txt"), "utf-8", (err, data) => {
  events.emit("msg", data);
});

fs.readFile(path.resolve(__dirname, "b.txt"), "utf-8", (err, data) => {
  events.emit("msg2", data);
});
