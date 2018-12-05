let express = require('express');
let router = express.Router();
let Request = require('../models/request');

// Begin declaration of routes
router.get('/requests', function(req, res, next){
    Request.getAllRequests(function(err, requests){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(requests));
        }
    });
});

router.get('/requests/:id', function(req, res, next){
    id = req.params.id;
    console.log(id);
    Request.getRequestById(id, function(err, request){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(request));
        }
    });
});


module.exports = router;