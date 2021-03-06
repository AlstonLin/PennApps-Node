var crypto = require('crypto');
var rand = require('csprng');
var User = require('../models/user');


exports.register = function(email, password, name, callback) {
  var temp = rand(160, 36);
  var newpass = temp + password;
  var token = crypto.createHash('sha512').update(email +rand).digest("hex");
  var hashed_password = crypto.createHash('sha512').update(newpass).digest("hex");

  var newUser = new User({
    name : name,
    token : token,
    email : email,
    hashed_password : hashed_password,
    chats_request : [],
    chats_post : [],
    salt : temp });

  User.find({email : email},function(err,users){
    var len = users.length;
    if (len == 0){
      newUser.save(function (err) {
        if (err){
          callback({'response' : "An Error Occurred", 'Error' : err});
        } else{
          callback({'response' : "Successfully Registered", 'success' : true});
        }
      });
    } else{
      callback({'response':"Email already Registered"});
  }});
}
