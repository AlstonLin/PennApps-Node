var crypto = require('crypto');
var User = require('../models/user');

exports.login = function(email,password,callback) {
  User.find({email: email}, function(err,users){
    if (users.length != 0){
      var temp = users[0].salt;
      var hash_db = users[0].hashed_password;
      var token = users[0].token;
      var newpass = temp + password;
      var hashed_password = crypto.createHash('sha512').update(newpass).digest("hex");
      if(hash_db == hashed_password){
        callback({'response' : "Login Success", 'res' : true, 'token' : token});
      } else{
        callback({'response' : "Invalid Password",'res' : false});
      }
    } else {
      callback({'response' : "User not exist",'res' : false});
    }
  });
}
