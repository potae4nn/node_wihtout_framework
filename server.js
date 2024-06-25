import { createServer } from "node:http";
import { myDateTime } from "./components/myfirstmodule.js";
import url from 'url';

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("The date and time are currently: " + myDateTime() + "<br/>");
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  console.log("txt : " + txt);
  res.end(txt);
});
// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
