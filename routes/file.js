var express = require('express');
var router = express.Router();

var fileController = require('../controllers/file');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', fileController.test);


router.post('/create', fileController.createFile);

router.get('/:id', fileController.getFile);

router.delete('/:id/delete', fileController.deleteFile);

module.exports = router;