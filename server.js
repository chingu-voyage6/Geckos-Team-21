var db = require('./db-connect.js')
var express = require('express');
var app = express();
 




app.get('/', function(req,res) {
	res.send({ "username": "Sergey" });
})

var port = process.env.PORT || "5000";
app.listen(port, function() {
	console.log("server listening on port " + port);
});