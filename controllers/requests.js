var Request = require('../models/request');

exports.getRequests = function(email, callback) {
  Request.find({email : { $ne : email}}, function(err, requests) {
   callback({'response' : 'Success', 'res' : true, 'result' : requests});
  });
};
