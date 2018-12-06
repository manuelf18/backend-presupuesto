let express = require('express');
let router = express.Router();
let requestComp = require('../models/request_comp');

// Begin declaration of routes
router.get('/reqcomp', function(req, res, next){
    requestComp.getAllRequests(function(err, requests){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(requests));
        }
    });
});

router.get('/reqcomp/:id', function(req, res, next){
    id = req.params.id;
    requestComp.getRequestById(id, function(err, request){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(request));
        }
    });
});

router.post('/reqcomp', function(req, res, next){
    new_request = new requestComp(req.body);
    requestComp.insertOne(new_request, function(err, request){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(request));
        }
    });
});

router.put('/reqcomp/:id', function(req, res, next){
    id = req.params.id;
    new_request = new requestComp(req.body);
    requestComp.updateOne(new_request, id, function(err, request){
        if(err)
            next(err);
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(request));
        }
    });
});


module.exports = router;