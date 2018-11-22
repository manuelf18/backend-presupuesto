let express = require('express');
let router = express.Router();

// Begin declaration of routes
router.get('/', function(req, res){
    res.send(JSON.stringify('hola')); // in an API answers should be JSONs
});


module.exports = router;