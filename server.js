var bodyParser  = require('body-parser');
var db          = require('./db-connect.js');
var auth        = require('./auth.js');
var routes      = require('./routes.js');
var express     = require('express');
var port        = process.env.NODE_PORT;

var app         = express();

app.use('/api/image', express.static(__dirname))
app.use('/dist', express.static(__dirname + '/app/dist')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


auth(app, db);
routes(app, db);

app.listen(port, function() {
	console.log("server listening on port " + port);
		});





