// model for Request
var sql = require('../connection');

let Request = function(request){
    // campos editables de un request
    this.description = request.description;
    this.amount = request.amount;
    this.type = 'presupuesto';
    this.createdBy= request.createdBy;
}

Request.getAllRequests = function(callback){
    sql.query("Select * from request", function(err, res){
        if(err) 
            callback(err, null);
        callback(null, res);
    });
}

Request.getRequestById = function(id, callback){
    sql.query("Select * from request where id = ? ", [id], function(err, res){             
        if(err) 
            callback(err, null);
        callback(null, res);
    });   
}

Request.insertOne = function(new_request, callback){
    sql.query("INSERT INTO request set ?", [new_request], function(err, request){
        if(err)
            callback(err, null);
        Request.getRequestById(request.insertId, function(err, res){
            if(err)
                callback(err, null); // there should never be a error at this part but just in case.
            callback(null, res);
        });
    });
}

Request.updateOne = function(new_request, id, callback){
    sql.query("UPDATE request SET description = ?, amount = ?, type = ?, createdBy = ? WHERE id = ?", [new_request.description, new_request.amount, new_request.type, new_request.createdBy, id], function(err, request){
        if(err){
            callback(err, null);}
        Request.getRequestById(id, function(err, res){
            if(err)
                callback(err, null); // there should never be a error at this part but just in case.
            callback(null, res);
        }); 
    });
}

module.exports = Request;