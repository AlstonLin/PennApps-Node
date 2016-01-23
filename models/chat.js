var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chatSchema = mongoose.Schema({
  request : {type : mongoose.Schema.Types.ObjectId, ref: 'Request'},
  users : [{type : mongoose.Schema.Types.ObjectId, ref: 'User'}],
  messages : [{type : mongoose.Schema.Types.ObjectId, ref: 'Message'}]
});
module.exports = mongoose.model('Chat', chatSchema);
