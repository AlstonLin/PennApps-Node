var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chatSchema = mongoose.Schema({
  request : {type : mongoose.Schema.Types.ObjectId, ref: 'Request'},
  poster : {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
  responder : {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
  messages : [{type : mongoose.Schema.Types.ObjectId, ref: 'Message'}],
  poster_name : String,
  responder_name : String
});
module.exports = mongoose.model('Chat', chatSchema);
