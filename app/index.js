/*
 * Primary file for the API
 *
 */

const http = require("http");
const url = require("url");

// Server should respond to all requests with a string:
const server = http.createServer(function (req, res) {
  // Get the url and parse it:
  var parsedUrl = url.parse(req.url, true);

  // Get the path from the url:
  var path = parsedUrl.pathname; // untrimmed path that the user requested
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Get the HTTP method:
  var method = req.method.toLowerCase();

  // Send the response:
  res.end("Hello World\n");

  // Log what path the person was asking for:
  console.log(
    "Request received on path: " + trimmedPath + " with this method:" + method
  );
});

// Start server, and have it listen on port 3000
server.listen(3000, function () {
  console.log("Server listening on port 3000");
});
