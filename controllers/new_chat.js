var Chat = require('../models/chat');
var User = require('../models/user');
var Request = require('../models/request');
exports.newChat = function(email, requestId, callback) {
  Request.findById(requestId, function(err, request){
    poster = request.owner;
    User.findById({ email : email }, function(err, responder){
      var newChat = new Chat({
        request : request,
        poster : poster,
        responder : responder,
        poster_name : poster.name,
        responder_name : responder.name
      });
      newChat.save(function (err) {
        if (err){
          callback({'response' : "An Error Occurred", 'Error' : err, "res" : false});
        } else{
          poster.chats_post.push(newChat);
          responder.chats_request.push(newChat);
          poster.save();
          responder.save();
          callback({'response' : "Sucessfully Created", "res" : true});
        }
      });
    });
  });
}
