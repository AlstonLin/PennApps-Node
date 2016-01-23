var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = mongoose.Schema({
});
module.exports = mongoose.model('Message', messageSchema);
