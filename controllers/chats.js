var Request = require('../models/request');
var Chat = require('../models/chat');
var User = require('../models/user');

exports.getChats = function(email, requestId, callback) {
  User.findOne({email : email}, function(err, user){
    Request.findOne(requestId, function(err, req){
      Chat.find({request : req}, function(err, chats){
        var results = [];
        for (var i = 0; i < chats.length; i++){
          if (chats[i].poster == user || chats[i].responder == user){
            results.push(chats[i]);
          }
        }
        callback({'response' : 'Success', 'res' : true, 'result' : results});
      });
    });
  });
};
