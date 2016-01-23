var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = mongoose.Schema({
  content : String,
  chat : {type : mongoose.Schema.Types.ObjectId, ref: 'Chat'},
  from : {type : mongoose.Schema.Types.ObjectId, ref: 'User'}
});
module.exports = mongoose.model('Message', messageSchema);
