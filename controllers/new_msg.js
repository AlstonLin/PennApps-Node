var Message = require('../models/message');
var Request = require('../models/request');
var User = require('../models/user');

exports.newMsg = function(email, requestId, content, callback) {
  User.findOne({email : email}, function(err, user){
    Request.findOne(requestId, function(err, req){
      var newMessage = new Message({
        from : user.name,
        request : req,
        content : content
      });
      newMessage.save(function(err){
        if (err){
          callback({'response' : "An Error Occurred", 'Error' : err, "res" : false});
        } else{
          callback({'response' : "Sucessfully Created", "res" : true});
        }
      });
    });
  });
};
