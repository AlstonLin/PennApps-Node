var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var requestSchema = mongoose.Schema({
});
module.exports = mongoose.model('Request', requestSchema);
