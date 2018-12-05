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
    Request.getRequestById(id, function(err, request){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(request));
        }
    });
});

router.post('/requests', function(req, res, next){
    new_request = new Request(req.body);
    Request.insertOne(new_request, function(err, request){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(request));
        }
    });
});

router.put('/requests/:id', function(req, res, next){
    id = req.params.id;
    new_request = new Request(req.body);
    Request.updateOne(new_request, id, function(err, request){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(request));
        }
    });
});


module.exports = router;