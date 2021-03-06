var Folder = require('../models/folder');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.createFolder = function (req, res) {
    var folder = new folder(
        {
            name: req.body.name,
            type: req.body.type
        }
    );

    Folder.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('folder Created successfully')
    })
};

exports.listFolder = function (req, res) {
    Folder.findById(req.params.id, function (err, folder) {
        if (err) return next(err);
        res.send(folder);
    })
};

exports.deleteFolder = function (req, res) {
    Folder.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('folder Deleted successfully!');
    })
};

exports.renameFolder = function (req, res) {
    Folder.findByIdAndUpdate(req.params.id, function (err) {
        if (err) return next(err);
        res.send('folder renamed successfully!');
    })
};