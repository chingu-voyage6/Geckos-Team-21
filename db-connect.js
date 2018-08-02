
var mysql      = require('mysql');

console.log('Start working');


var connection = mysql.createConnection({
  host         : 'localhost',
  port         : 3306,
  user         : 'root',
  password     : 'password',
  insecureAuth : true,
  database     : 'giveaway', 
});

/*
var connection = mysql.createPool({
    connectionLimit : 10,
    host         : 'eu-cdbr-west-02.cleardb.net',
    port         : 3306,
    user         : 'bf44d12d1ec731',
    connectTimeout: 604800,
    password     : 'f5c24fe8',
    insecureAuth : true,
    database     : 'heroku_07776219d2261a0', 
});
*/

module.exports = connection;

