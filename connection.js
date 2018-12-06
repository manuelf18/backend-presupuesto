var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'prueba2',
  password : 'password',
  database : 'presupuesto'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;