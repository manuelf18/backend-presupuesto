var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'pruebas2',
  password : 'password', // this is a secret shh
  database : 'presupuesto'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;