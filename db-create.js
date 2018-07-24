var connection = require('./db-connect.js');

connection.connect(function(err) {
	if (err) {
		console.log('Error to connect: ' + err);}
	else {
		connection.query('CREATE TABLE IF NOT EXISTS users' +
		 '(id INT primary key auto_increment,'+ 
		 ' fname varchar(30),' + 
		 ' lname varchar(30),' + 
		 ' country varchar(30),' + 
		 ' city varchar(30),' + 
		 ' password varchar(30),' + 
		 ' tel BIGINT,' + 
		 ' email unique varchar(90))', 
		 function(err, result) {
			if (err) {
				console.log('Error to create Table users: ' + err);
			} else {
			console.log('Table users created');
			connection.end();
		}
		});

		connection.query('CREATE TABLE IF NOT EXISTS items' +
		 '(id INT primary key auto_increment,' + 
		 '(userId INT,' + 
		 ' title varchar(30),' + 
		 ' category varchar(30),' + 
		 ' country varchar(30),' + 
		 ' city varchar(30),' + 
		 ' description text,' + 
		 ' creationDate DATETIME,' +
		 ' expirationDate DATE DEFAULT NULL,' + 
		 ' tel BIGINT,' + 
		 ' photoDir varchar(90),' +
		 'FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE)', 
		 function(err, result) {
			if (err) {
				console.log('Error to create Table items: ' + err);
			} else {
			console.log('Table itemss created');
			connection.end();
		}
		});
	}
});