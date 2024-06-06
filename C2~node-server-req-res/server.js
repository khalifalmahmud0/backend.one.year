let http = require("http");
let url = require("url");
let app = http.createServer((req, res) => {
  let parseURL = url.parse(req.url);
  let pathname = parseURL.pathname;
  let query = parseURL.query;
  let method = req.method.toLowerCase();
  res.end(JSON.stringify({ path: pathname, query: query, method: method }));
  console.log({ path: pathname, query: query, method: method });
});

app.listen("8090", "localhost", 20, () => {
  console.log("HTTP Server Running");
});
