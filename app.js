let express = require('express');
let app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded());


// routes
let routes_request = require('./routes/routerRequests');
let routes_user = require('./routes/routerUsers');
let routes_reqlog = require('./routes/routerRequestLog');
let routes_reqcomp = require('./routes/routerRequestComp');

app.use('/', routes_request);
app.use('/', routes_user);
app.use('/', routes_reqlog);
app.use('/', routes_reqcomp);


const port = 3000;
app.listen(port, function(){ console.log(`Corriendo en el puerto ${port}...`) });