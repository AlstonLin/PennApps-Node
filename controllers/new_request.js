var Request = require('../models/request');

exports.newRequest = function(owner, name, fee, location, callback) {
  var newRequest = new Request({
    completed : false,
    fee : fee,
    name : name,
    location : location,
    claim_code : "iA98Lp8",
    claimed : false,
    owner : owner,
    locker : null,
    chats : [],
    completions : []
  });
  newRequest.save(function(err){
    if (err){
      callback({'response' : "An Error Occurred", 'Error' : err});
    } else{
      callback({'response' : "Sucessfully Created"});
    }
  })
};
