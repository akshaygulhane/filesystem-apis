var express = require('express');
var router = express.Router();

var folderController = require('../controllers/folder');

//create folders and sub-folders
router.post('/create', folderController.createFolder);

//view the list of contents of the folder
router.get('/:id', folderController.listFolder);

//delete folders and files
router.delete('/:id/delete', folderController.deleteFolder);

//rename files
router.post('/:id/rename', folderController.renameFolder);

module.exports = router;