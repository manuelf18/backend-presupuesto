let express = require('express');
let app = express();

// Conexion a mysql 


// routes
let routes = require('./routes/router');
app.use('/', routes);

const port = 3000;
app.listen(port, function(){ console.log(`Corriendo en el puerto ${port}...`) });