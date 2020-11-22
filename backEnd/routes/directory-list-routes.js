const express = require('express');

const router = express.Router('../models/http-error');

const directoryControllers = require('../controlers/directory-controler');

router.get('/:id', directoryControllers.getDirectoryById);

router.post('/', directoryControllers.createDirectory);

module.exports = router;