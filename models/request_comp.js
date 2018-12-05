// model for requestComp
var sql = require('../connection');

let requestComp = function(request){
    // campos editables de un request
    this.area = request.area;
    this.entity = request.entity;
    this.program = request.program;
    this.subprogram = request.subprogram;
    this.activity = request.activity;
    this.source = request.source;
    this.expenses = request.expenses;
}

requestComp.getAllRequests = function(callback){
    sql.query("Select * from request_comp", function(err, res){
        if(err) 
            callback(err, null);
        callback(null, res);
    });
}

requestComp.getRequestById = function(id, callback){
    sql.query("Select * from request_comp where id = ? ", [id], function(err, res){             
        if(err) 
            callback(err, null);
        callback(null, res);
    });   
}

requestComp.insertOne = function(new_request, callback){
    sql.query("INSERT INTO request_comp set ?", [new_request], function(err, request){
        if(err)
            callback(err, null);
        requestComp.getRequestById(request.insertId, function(err, res){
            if(err)
                callback(err, null); // there should never be a error at this part but just in case.
            callback(null, res);
        });
    });
}

requestComp.updateOne = function(new_request, id, callback){
    sql.query("UPDATE request_comp SET area = ?, entity = ?, program = ?, subprogram = ?, activity = ?, source = ?, expenses = ? WHERE id = ?", [new_request.area, new_request.entity, new_request.program, new_request.subprogram, new_request.activity, new_request.source, new_request.expenses, id], function(err, request){
        if(err){
            callback(err, null);}
        requestComp.getRequestById(id, function(err, res){
            if(err)
                callback(err, null); // there should never be a error at this part but just in case.
            callback(null, res);
        }); 
    });
}

module.exports = requestComp;