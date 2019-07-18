const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    id: {type: String, required: true},
    filename: {type: String, required: true, max: 100},
    path: {type: String}
});

module.exports = mongoose.model('File', FileSchema);