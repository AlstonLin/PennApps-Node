var Request = require('../models/request');

exports.getRequests = function(callback) {
  Request.find({}, function(err, requests) {
   callback({'response' : 'Success', 'res' : true, 'result' : requests});
  });
};
