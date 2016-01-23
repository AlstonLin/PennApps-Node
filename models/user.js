var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
  token : String,
  name : String,
  email : String,
  hashed_password : String,
  salt : String,
  temp_str : String,
  locked : Boolean,
  lock : {type : mongoose.Schema.Types.ObjectId, ref: 'Request'},
});
module.exports = mongoose.model('User', userSchema);
