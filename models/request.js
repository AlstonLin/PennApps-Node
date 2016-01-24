  var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var requestSchema = mongoose.Schema({
  completed : Boolean,
  fee : Number,
  name : String,
  location : String,
  locked : Boolean,
  claim_code : String,
  claimed : Boolean,
  owner : {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
  locker : {type : mongoose.Schema.Types.ObjectId, ref: 'User'}
});
module.exports = mongoose.model('Request', requestSchema);
