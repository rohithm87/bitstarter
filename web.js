var express = require('express');
var htmlFile = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var htmlCode = htmlFile.readFileSync("./index.html");
  response.send( htmlCode.toString() );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
