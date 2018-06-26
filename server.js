var express = require('express');
var app = express();


app.use('/src', express.static(__dirname + '/src'));

app.get('/', function(req,res) {
	res.sendFile(__dirname + "/app/views/index.html");
})

var port = "8080"
app.listen(port, function() {
	console.log("server listening on port " + port);
});