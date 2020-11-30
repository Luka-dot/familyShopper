const express = require('express');

const router = express.Router('../models/http-error');

const directoryControllers = require('../controlers/directory-controler');
const { route } = require('./users-routes');

router.get('/', directoryControllers.getDirectoryById);

router.post('/', directoryControllers.createDirectory);

router.patch('/:id', directoryControllers.updateDirectoryById);

router.delete('/:id', directoryControllers.deleteDirectory);

router.delete('./:id/', directoryControllers.deleteItemById),

module.exports = router;