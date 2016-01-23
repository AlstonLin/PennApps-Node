var Request = require('../models/request');
var User = require('../models/user');

exports.getPosts = function(email, callback) {
  User.findOne({email : email}, function(err, user){
    Request.find({owner : user}, function(err, requests) {
     callback({'response' : 'Success', 'res' : true, 'result' : requests});
    });
  });
};
