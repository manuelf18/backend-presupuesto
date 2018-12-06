// model for requestLog
var sql = require('../connection');

let requestLog = function(request){
    // campos editables de un request log
    this.requestID = request.requestID;
    this.amount = request.amount;
    this.changeBy = request.changeBy;
}

requestLog.getAllRequests = function(callback){
    sql.query("Select * from request_logs", function(err, res){
        if(err) 
            callback(err, null);
        callback(null, res);
    });
}

requestLog.getRequestById = function(id, callback){
    sql.query("Select * from request_logs where id = ? ", [id], function(err, res){             
        if(err) 
            callback(err, null);
        callback(null, res);
    });   
}

requestLog.insertOne = function(new_request, callback){
    sql.query("INSERT INTO request_logs set ?", [new_request], function(err, request){
        console.log(new_request);
        if(err)
            callback(err, null);
        requestLog.getRequestById(request.insertId, function(err, res){
            if(err)
                callback(err, null); // there should never be a error at this part but just in case.
            callback(null, res);
        });
    });
}

requestLog.updateOne = function(new_request, id, callback){
    sql.query("UPDATE request_logs SET requestID = ?, amount = ?, changeBy = ? WHERE id = ?", [new_request.requestID, new_request.amount, new_request.changeBy, id], function(err, request){
        if(err){
            callback(err, null);}
        requestLog.getRequestById(id, function(err, res){
            if(err)
                callback(err, null); // there should never be a error at this part but just in case.
            callback(null, res);
        }); 
    });
}

module.exports = requestLog;