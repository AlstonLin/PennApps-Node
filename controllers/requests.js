var Request = require('../models/request');

exports.getRequests = function(callback) {
  var result = [];
  Request.find({}, function(err, requests) {
   callback({'response' : 'Success', 'res' : true, 'result' : requests});
  });
};
