var Request = require('../models/request');
var Message = require('../models/message');

exports.getRequestMessages = function(email, request_id, callback) {
  Request.findOne(request_id, function(err, request) {
    Message.find({request : request}, function(err, messages){
      callback({'response' : 'Success', 'res' : true, 'result' : messages});
    });
  });
};
