let express = require('express');
let router = express.Router();
let Request = require('../models/request');

// Begin declaration of routes
router.get('/requests', function(req, res){
    Request.getAllRequests(function(err, requests){
        if(err)
            console.log(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(requests));
        }
    })
});


module.exports = router;