// model for Request
var sql = require('../connection');

let Request = function(request){
    this.id = request.id;
    this.description = request.description;
    this.amount = request.amount;
    this.type = type;
    this.createdBy= request.createdBy;
    this.createdAt = request.createdAt;
}

Request.getAllRequests = function(callback){
    sql.query("Select * from request", function(err, res){
        if(err) 
            callback(err, null);
        callback(null, res);
    });
}

Request.getRequestById = function(id, callback){
    sql.query("Select * from request where id = ? ", id, function (err, res) {             
        if(err) 
            callback(err, null);
        callback(null, res);
    });   
}

module.exports = Request;