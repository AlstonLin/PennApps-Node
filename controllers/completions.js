var Completion = require('../models/completion');
var Request = require('../models/request');
exports.getCompletion = function(requestId, accepted, callback) {
  Request.findOne(requestId, function(err, req){
    Completion.find({ rejected : false, viewed : false, request : req}, function(err, completion){
      
    });
  });
};
