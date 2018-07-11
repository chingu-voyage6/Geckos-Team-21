var connection = require('./db-connect.js');

connection.connect(function(err) {
	if (err) {
		console.log('Error to connect: ' + err);}
	else {
		connection.query('CREATE DATABASE IF NOT EXISTS giveaway', function(err, result) {
			if (err) {
				console.log('Error to create DB: ' + err);
			} else {
			console.log('DB created');
			}
		});

		connection.query('CREATE TABLE IF NOT EXISTS users' +
		 '(id INT primary key auto_increment,'+ 
		 ' fname varchar(30),' + 
		 ' lname varchar(30),' + 
		 ' country varchar(30),' + 
		 ' city varchar(30),' + 
		 ' password varchar(30),' + 
		 ' tel INT,' + 
		 ' email varchar(30))', 
		 function(err, result) {
			if (err) {
				console.log('Error to create Table users: ' + err);
			} else {
			console.log('Table users created');
			connection.end();
		}
		});
	}
});