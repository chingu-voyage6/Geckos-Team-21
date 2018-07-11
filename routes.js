const passport = require('passport');
const LocalStrategy = require('passport-local');
//const bcrypt   = require('bcrypt');



module.exports = function(app, db) {

	passport.use(new LocalStrategy({usernameField: 'email',  passwordField: 'password'}, function(email,password,done) {		
    	db.query("SELECT * FROM users WHERE email = (?)", email, function(err,result,fields) {
    		if (err) {
    			console.log('Error to SELECT by email: ' + err);
    			return done(err);
    		}
    		console.log(result);
    		if (!result) {
    			console.log('Result fail');
    			return done(null, false);}
    		if (password.toString() !== result[0].password) {
    			console.log('Password fail. Result pass: ' + result[0].password + 'Input pass: ' + password);
    			return done(null, false);}
    		return done(null, result[0]);
    	});
    }));

	app.get('/api/user', function(req,res) {
		if (req.user) {
			res.json({ "username": req.user.fname});
		}		
	
	});

	

	app.route('/api/login').get(function(req,res) {
		res.sendFile(__dirname + '/app/views/login.html');
	});

	app.route('/api/login').post(passport.authenticate('local', { failureRedirect: '/' }), function(req,res) {
		console.log(req.user);
		res.send('Welcome ' + req.user.fname); 
	})

	app.route('/api/register').get(function(req,res) {
		res.sendFile(__dirname + '/app/views/register.html');
	});

	app.route('/api/register').post(function(req,res) {
		db.connect(function(err) {
			if (err) {				
				return console.log('Error to connect: ' + err);				
			}

			var query = "INSERT INTO users SET ?";			
			var values = req.body;
			values.tel = parseInt(values.tel);
			console.log(values);
			db.query(query, values, function(err, result) {
				if (err) {
				db.end();
				return console.log('Error to insert into users: ' + err);				
				}				
				res.redirect('/');
				return console.log('Result: ' + result.affectedRows);
			} );
		})
				
	});

}