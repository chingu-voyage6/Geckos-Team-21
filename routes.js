const passport = require('passport');
const LocalStrategy = require('passport-local');
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

	
	app.route('/api/user').get(ensureAuthenticated, function(req, res) {
		console.log("Call /api/user");
		console.log(req.user[0].fname);

		res.json({'username': req.user[0].fname});		
	})
	
	// LOGIN ------------------------------------------------------------------------------------------------

	
	app.route('/api/login').post(passport.authenticate('local', { failureRedirect: '/' }), function(req,res) {
		res.redirect('/'); 
	})

	// REGISTER-----------------------------------------------------------------------------------------------

	
	app.route('/api/register').post(function(req,res) {
		db.connect(function(err) {
			
			if (err) {				
				return console.log('Error to connect: ' + err);				
			}

			db.query("SELECT * FROM users WHERE email = (?)", req.body.email, function(err,result,fields) {
    		if (err) {
    			console.log('Error to SELECT by email: ' + err);
    			return done(err);
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
				db.end();
				return console.log('Error to insert into users: ' + err);				
				}				
				res.redirect('/login');
				return console.log('Result: ' + result.affectedRows);
			});
		}

		});
		});
				
	});

	// Add item -----------------------------------------------------------------------------------------------------------

	app.route('/api/addItem').post(ensureAuthenticated, function(req, res) {
		res.send("Item added");
	})


}