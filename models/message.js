var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = mongoose.Schema({
  content : String,
  responded : Boolean,
  chat : {type : mongoose.Schema.Types.ObjectId, ref: 'Chat'},
  request : {type : mongoose.Schema.Types.ObjectId, ref: 'Request'},
  from : String
});
module.exports = mongoose.model('Message', messageSchema);
