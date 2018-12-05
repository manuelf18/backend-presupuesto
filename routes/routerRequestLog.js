let express = require('express');
let router = express.Router();
let requestLog = require('../models/request_log');

// Begin declaration of routes
router.get('/reqlog', function(req, res, next){
    requestLog.getAllRequests(function(err, requests){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(requests));
        }
    });
});

router.get('/reqlog/:id', function(req, res, next){
    id = req.params.id;
    requestLog.getRequestById(id, function(err, request){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(request));
        }
    });
});

router.post('/reqlog', function(req, res, next){
    new_request = new Request(req.body);
    requestLog.insertOne(new_request, function(err, request){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(request));
        }
    });
});

router.put('/reqlog/:id', function(req, res, next){
    id = req.params.id;
    new_request = new Request(req.body);
    requestLog.updateOne(new_request, id, function(err, request){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(request));
        }
    });
});


module.exports = router;