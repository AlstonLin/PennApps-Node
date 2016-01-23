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
  requests : [{type : mongoose.Schema.Types.ObjectId, ref : 'Request'}],
  chats : [{type : mongoose.Schema.Types.ObjectId, ref : 'Chat'}],
  completions : [{type : mongoose.Schema.Types.ObjectId, ref : 'Completion'}]
});  

var chatSchema = mongoose.Schema({
});

var messageSchema = mongoose.Schema({
});

var completionSchema = mongoose.Schema({
});

var requestSchema = mongoose.Schema({
});

mongoose.connect('mongodb://localhost:27017/node-android'); 
module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Message', messageSchema);
module.exports = mongoose.model('Completion', completionSchema);
module.exports = mongoose.model('Request', requestSchema);
