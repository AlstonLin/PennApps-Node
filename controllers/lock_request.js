var Request = require('../models/request');

exports.lockRequest = function(email, requestId, callback) {
  Request.findOne(requestId, function(err, req){
    if (!req.locked){
      req.locked = true;
      User.findOne({email : email}, function(err, user){
        req.locker = user;
        req.save();
      });
    } else{
      callback({'response' : 'Already Locked', 'res' : false});
    }
  })
};
