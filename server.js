var express = require('express');
var app = express();


app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req,res) {
	res.sendFile(__dirname + "/views/home-page.html");
})

var port = "8080"
app.listen(port, function() {
	console.log("server listening on port " + port);
});