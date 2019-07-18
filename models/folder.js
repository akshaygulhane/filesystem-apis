var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FolderSchema = new Schema({
    name: {type: String, required: true, max: 100},
    type: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Folder', FolderSchema);