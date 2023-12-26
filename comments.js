// create web server

// 1. load module
var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

// 2. create web server object
var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url);
  var resource = parsedUrl.pathname;
  console.log("resource = " + resource);

  // 3. process request
  if (resource == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }

  // 4. read html file
  var htmlPath = __dirname + "/html" + resource;
  console.log("htmlPath = " + htmlPath);
  var htmlContent = fs.readFileSync(htmlPath, "utf-8");

  // 5. response
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(htmlContent);
});

// 6. start web server
server.listen(80, function () {
  console.log("Server is running...");
});
