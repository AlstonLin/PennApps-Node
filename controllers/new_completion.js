var Request = require('../models/request');
var User = require('../models/user');

exports.newCompletion = function(email, requestId, image, callback) {
  User.findOne(requestId, function(err, user){
    Request.findOne(requestId, function(err2, req){
      var newCompletion = new Completion({
        image : image,
        user : user,
        request : request,
        rejected : false,
        viewed : false
      });

      newCompletion.save(function(err){
        if (err){
          callback({'response' : "An Error Occurred", 'Error' : err, "res" : false});
        } else{
          callback({'response' : "Sucessfully Created", "res" : true});
        }
      });
    });
  })
};
