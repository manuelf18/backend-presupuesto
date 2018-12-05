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
        if(err) {
            console.log("error: ", err);
            callback(null, err);
        }
        else{
            callback(null, res);
        }
    });
}

module.exports = Request;