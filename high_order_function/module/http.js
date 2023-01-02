const http = require("http");

const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.write("Hello world");
  res.end();
});

app.listen(8001, 0, 0, 0, 0);
