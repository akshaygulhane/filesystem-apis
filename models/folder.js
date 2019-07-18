const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FolderSchema = new Schema({
    id: {type: String, require: true},
    foldername: {type: String, required: true, max: 100},
    path: {type: String }
});

module.exports = mongoose.model('Folder', FolderSchema);