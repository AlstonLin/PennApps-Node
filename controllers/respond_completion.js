var Completion = require('../models/completion');

exports.respondCompletion = function(completionId, accepted, callback) {
  Completion.findOne(completionId, function(err, completion){
    completion.rejected = !accepted,
    completion.viewed = true,
    completion.save();
  });
};
