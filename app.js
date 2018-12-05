let express = require('express');
let app = express();

// Conexion a mysql 
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'db_user',
  password : 'db_password', // this is a secret shh
  database : 'presupuesto'
});

connection.connect(function(err) {
    if (err) throw err;
});

// routes
let routes = require('./routes/router');
app.use('/', routes);

const port = 3000;
app.listen(port, function(){ console.log(`Corriendo en el puerto ${port}...`) });