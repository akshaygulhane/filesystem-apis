var express = require('express');
var router = express.Router();

var fileController = require('../controllers/file');

//create new files in the folders
router.post('/', fileController.createFile);

//delete files
router.delete('/:id/delete', fileController.deleteFile);

//rename files
router.post('/:id/rename', fileController.renameFile);

module.exports = router;