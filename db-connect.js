
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user', 
  database : 'clean_app'    
});


module.exports = {
  connection: connection;
};


