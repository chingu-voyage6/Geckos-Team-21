var express = require('express');
var mysql = require('mysql');

var app = express();

app.use('/public', express.static(__dirname + '/public'));

var connection = mysql.createConnection({
	host: ' xyz',  //still to identify how to spot host name on heroku
	user: 'xyz', //still to identify how to spot user name on heroku
	database: 'clean_app' //name of the database
});


app.get('/', function(req,res) {
	res.sendFile(__dirname + "/views/home-page.html");
})

var port = "8080"
app.listen(port, function() {
	console.log("server listening on port " + port);
});
