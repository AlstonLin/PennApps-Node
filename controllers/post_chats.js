var User = require('../models/user');
var Chat = require('../models/chat');

exports.getPostChats = function(email, callback) {
  User.findOne({email: email}, function (err, user){
    Chat.find({poster : user}, function (err, chats){
      callback({'response' : "Success", 'res' : true, 'result' : chats});
    });
  })
};
