var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
  token : String,
  name : String,
  email : String,
  hashed_password : String,
  salt : String,
  temp_str : String
});
module.exports = mongoose.model('User', userSchema);
