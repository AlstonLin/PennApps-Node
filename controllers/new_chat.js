var Chat = require('../models/chat');
var User = require('../models/user');
var Request = require('../models/request');
exports.newChat = function(posterId, responderId, requestId, callback) {
  Request.findById(requestId, function(err, request){
    User.findById(responderId, function(err, responder){
      User.findById(posterId, function(err, poster){
        var newChat = new Chat({
          request : request,
          poster : poster,
          responder : responder
        });
        newChat.save(function (err) {
          if (err){
            callback({'response' : "An Error Occurred", 'Error' : err});
          } else{
            poster.chats_post.push(newChat);
            responder.chats_request.push(newChat);
            poster.save();
            responder.save();
            callback({'response' : "Sucessfully Created"});
          }
        });
      });
    });
  });
};
