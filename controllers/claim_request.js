var Request = require('../models/request');
exports.claimRequest = function(email, requestId, claimCode, callback) {
  Request.findOne(requestId, function(err, req){
    if (req.claimCode == claimCode){
      req.claimed = true;
      req.save();
      callback({'response' : 'Success', 'res' : true});
    } else{
      callback({'response' : 'Incorrect Claim Code', 'res' : false});
    }
  })
};
