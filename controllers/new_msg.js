var Message = require('../models/message');
var Chat = require('../models/chat');
var User = require('../models/user');

exports.newMsg = function(email, chatId, content, callback) {
  User.findOne({email : email}, function(err, user){
    Chat.findOne(chatId, function(err, chat){
      var newMessage = new Message({
        from : user,
        chat : chat,
        content : content
      })
      newMessage.save(function(err){
        if (err){
          callback({'response' : "An Error Occurred", 'Error' : err, "res" : false});
        } else{
          chat.messages.push(newMessage);
          chat.save();
          callback({'response' : "Sucessfully Created", "res" : true});
        }
      });
    });
  });
};
