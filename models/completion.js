var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var completionSchema = mongoose.Schema({
  image : String,
  user : {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
  request : {type : mongoose.Schema.Types.ObjectId, ref: 'Request'},
  rejected : Boolean,
  viewed : Boolean
});
module.exports = mongoose.model('Completion', completionSchema);
