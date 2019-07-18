var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FileSchema = new Schema({
    name: {type: String, required: true, max: 100},
    type: {type: String, required: true},
    parent: {type: String}
});


// Export the model
module.exports = mongoose.model('File', FileSchema);