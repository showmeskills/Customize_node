const Promise = require("./ base_promise");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok");
  }, 1000);
});

promise.then(
  (data) => {
    console.log(data, "success");
  },
  (reason) => {
    console.log("reason", reason);
  }
);
