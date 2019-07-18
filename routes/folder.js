var express = require('express');
var router = express.Router();

var folderController = require('../controllers/folder');

router.get('/test', folderController.test);

router.post('/create', folderController.createfolder);

router.get('/:id', folderController.getfolder);

router.delete('/:id/delete', folderController.deletefolder);

module.exports = router;