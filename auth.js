const passport      = require('passport');
const session       = require('express-session');
const LocalStrategy = require('passport-local');
//const bcrypt        = require('bcrypt');



module.exports = function(app, db) {
	
	app.use(session({
		secret: 'SacredCow',
		resave: true,
		saveUninitialized: true,
		}
		));

	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser((user, done) => {
   		done(null, user.id);
	 });

	passport.deserializeUser((id, done) => {
        
        db.query('SELECT * FROM users WHERE id = (?)', id, function(err, doc, fields) {
        	if (err) {return console.log('Error to deserializeUser: ' + err);}            
            done(null, doc);            
            });    
    });




}