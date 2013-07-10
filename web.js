var express = require('express');
var htmlFile = require('fs');

var htmlCode = htmlFile.readFileSync("./index.html");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send( htmlCode );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
