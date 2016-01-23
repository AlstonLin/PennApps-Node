var User = require('../models/user');
var Chat = require('../models/chat');

exports.getRequestChats = function(email, callback) {
  User.findOne({email: email}, function (err, user){
    Chat.find({responder : user}, function (err, chats){
      callback({'response' : "Success", 'res' : true, 'result' : chats});
    });
  })
};
