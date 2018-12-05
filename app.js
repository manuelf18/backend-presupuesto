let express = require('express');
let app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded());


// routes
let routes_request = require('./routes/routerRequests');
let routes_user = require('./routes/routerUsers');

app.use('/', routes_request);
app.use('/', routes_user);

const port = 3000;
app.listen(port, function(){ console.log(`Corriendo en el puerto ${port}...`) });