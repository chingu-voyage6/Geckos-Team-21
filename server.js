var bodyParser  = require('body-parser');
var db          = require('./db-connect.js');
var auth        = require('./auth.js');
var routes      = require('./routes.js');
var express     = require('express');
var port        = process.env.PORT || "5000";

var app     = express();


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('app/build'));
  app.route('/').get(function(req,res) {
		res.sendFile(__dirname + "/app/build/index.html");
	})
} 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

auth(app, db);
routes(app, db);

app.listen(port, function() {
	console.log("server listening on port " + port);
		});





