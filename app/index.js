/*
 * Primary file for the API
 *
 */

const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

// Server should respond to all requests with a string:
const server = http.createServer(function (req, res) {
  // Get the url and parse it: (true is to call the query String module with url)
  const parsedUrl = url.parse(req.url, true);

  // Get the path from the url:
  const path = parsedUrl.pathname; // untrimmed path that the user requested
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Get the string as an object:
  var queryStringObject = parsedUrl.query;

  // Get the HTTP method:
  const method = req.method.toLowerCase();

  // Get the payload if there is any:
  const decoder = new StringDecoder("utf-8");
  let buffer = "";
  req.on("data", (chunk) => {
    buffer += decoder.write(chunk);
  });
  req.on("end", () => {
    buffer += decoder.end();
    console.log(buffer);

    // Get the headers as an object:
    const headers = req.headers;

    // console.log(JSON.stringify(headers));

    // Send the response:
    res.end("Hello World\n");
  });

  // Log what path the person was asking for:
  // console.log("Request received on path: " + trimmedPath);
  // console.log("Method:" + method);
  // console.log("Query string parameter:" + JSON.stringify(queryStringObject));
  // console.log("Query string parameter:", queryStringObject);
});

// Start server, and have it listen on port 3000
server.listen(3000, function () {
  console.log("Server listening on port 3000");
});
