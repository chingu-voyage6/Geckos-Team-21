const passport      = require('passport');
const LocalStrategy = require('passport-local');
var multer          = require('multer');
var path			= require('path');

//const bcrypt   = require('bcrypt');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  console.log("User not Authenticated");
  res.redirect('/');
};

module.exports = function(app, db) {


	// Authorization strategy ---------------------------------------------------------------------------------

	passport.use(new LocalStrategy({usernameField: 'email',  passwordField: 'password'}, function(email,password,done) {		
    	db.query("SELECT * FROM users WHERE email = (?)", email, function(err,result,fields) {
    		if (err) {
    			console.log('Error to SELECT by email: ' + err);
    			return done(err);
    		}
    		console.log("User with id=" + result[0].id + " attempted to log in");
    		if (!result) {
    			console.log('Result fail');
    			return done(null, false);}
    		if (password.toString() !== result[0].password) {
    			console.log('Password fail. Result pass: ' + result[0].password + 'Input pass: ' + password);
    			return done(null, false);}
    		return done(null, result[0]);
    	});
    }));

	// Render Home Page -----------------------------------------------------------------------------------------

	app.route('/').get(function(req, res) {
		res.sendFile(__dirname + '/app/views/index.html');		
	});
	
	app.route('/api/user').get(ensureAuthenticated, function(req, res) {
		console.log("Call /api/user");
		console.log(req.user[0].fname);

		res.json({'username': req.user[0].fname});		
	});

	app.route('/api/getItems').get(function(req,res) {

		db.query('SELECT * FROM items', function(err, result, fields) {	
			for (var j=0; j < result.length; j++) {
					result[j].photos = result[j].photos.split(";");
				}					
					
			res.json(result);
		})
	});
	
	// LOGIN ------------------------------------------------------------------------------------------------

	
	app.route('/api/login').post(passport.authenticate('local', { failureRedirect: '/login' }), function(req,res) {
		res.redirect('/'); 
	});

	// LOGOUT ------------------------------------------------------------------------------------------------

	  app.route('/api/logout').get(function(req, res) {
	  	console.log('User logout');
    	req.logout();    	
    	res.redirect('/');
  });

	// REGISTER-----------------------------------------------------------------------------------------------

	
	app.route('/api/register').post(function(req,res) {	
			
			
			db.query("SELECT * FROM users WHERE email = (?)", req.body.email, function(err,result,fields) {
    		if (err) {
    			console.log('Error to SELECT by email: ' + err);
    			res.redirect('/register');
    		}
    		console.log(result);

    		if (result[0]) {
    			console.log("User with id=" + result[0].id + " attempted to register once again");    			
    			res.redirect('/register');
    		}
    		else {
			var query = "INSERT INTO users SET ?";			
			var values = req.body;
			values.tel = parseInt(values.tel);			
			db.query(query, values, function(err, result) {
				if (err) {				
				return console.log('Error to insert into users: ' + err);				
				}				
				res.redirect('/login');
				return console.log('Result: ' + result.affectedRows);
			});
		}
		});				
	});

	// Add item -----------------------------------------------------------------------------------------------------------

	app.route('/api/addItem').post(ensureAuthenticated, function(req, res) {		
		var storage = multer.diskStorage({
		  destination: 'app/dist/uploads/' + req.user[0].id,
		  filename: function (req, file, cb) {
		    cb(null, "file-" + Date.now() + path.extname(file.originalname))
		  }
		});
		var upload = multer({storage: storage}).fields([{ name: 'photos', maxCount: 5 }]);
		upload(req, res, function(err) {
			if (err) {console.log("Error to download: " + err);}
			else {
				var photos = '';
				for (var i=0; i < req.files.photos.length; i++) {
					photos += req.files.photos[i].destination + '/' + req.files.photos[i].filename + ';';
				}
				req.body.photos = photos;
				req.body.creationDate = new Date();
				req.body.userID = req.user[0].id;				
				var query = "INSERT INTO items SET ?";			
				var values = req.body;

				db.query(query, values, function(err, result) {
				if (err) {				
				return console.log('Error to insert into items: ' + err);				
				}
				req.session.save(function(err) {
					if (err) {return console.log("Session not saved: " + err);}
					return console.log("Session saved");
				});				
				res.redirect('/');
				return console.log('Item added');
			});
				
			}
		})
	});
	

}