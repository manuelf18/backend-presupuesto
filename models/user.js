var sql = require('../connection');

let User = function(user){
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.createdAt = user.createdAt;
}


User.login = function(username, password, callback){
    sql.query('(SELECT id, username, email, type FROM user WHERE username = ? AND password = ?)', [username, password], function(err, res){
        if(err)
            callback(err, null);
        callback(null, res);
    });
}

module.exports = User;