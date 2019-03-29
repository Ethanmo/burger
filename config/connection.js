require('dotenv').config();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.password,
  database : 'burgers_db',
  port     : 3306
});
  
connection.connect(function(err) {
    if (err) {
        console.err("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;