var File = require('../models/file');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.createFile = function (req, res) {
    var file = new File(
        {
            name: req.body.name,
            type: req.body.type
        }
    );

    File.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('File Created successfully')
    })
};

exports.getFile = function (req, res) {
    File.findById(req.params.id, function (err, file) {
        if (err) return next(err);
        res.send(file);
    })
};

exports.deleteFile = function (req, res) {
    File.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('File Deleted successfully!');
    })
};

exports.renameFile = function (req, res) {
    File.findByIdAndUpdate(req.params.id, function (err) {
        if (err) return next(err);
        res.send('file renamed successfully!');
    })
};