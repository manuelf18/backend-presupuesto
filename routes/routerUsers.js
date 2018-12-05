let express = require('express');
let router = express.Router();
let User = require('../models/user');

// Begin declaration of routes
router.post('/login', function(req, res, next){
    username = req.body.username;
    password = req.body.password;
    User.login(username, password, function(err, result){
        if(err){
            console.log(err);
            next(err);}
        else{
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(result));
        }
    });
});

module.exports = router;