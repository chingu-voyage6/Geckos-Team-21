var bodyParser  = require('body-parser');
var db          = require('./db-connect.js');
var auth        = require('./auth.js');
var routes      = require('./routes.js');
var express     = require('express');
var port        = process.env.PORT || "5000";

var app         = express();

app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/dist', express.static(__dirname + '/app/dist')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/').get(function(req,res) {
		res.sendFile(__dirname + "/app/views/index.html");
	});

auth(app, db);
routes(app, db);

app.listen(port, function() {
	console.log("server listening on port " + port);
		});





