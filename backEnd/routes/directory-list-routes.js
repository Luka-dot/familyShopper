const express = require('express');

const router = express.Router('../models/http-error');

const directoryControllers = require('../controlers/directory-controler');

router.get('/:id', directoryControllers.getDirectoryById);

router.post('/', directoryControllers.createDirectory);

router.patch('/:id', directoryControllers.updateDirectoryById);

router.delete('/:id', directoryControllers.deleteDirectory);

module.exports = router;