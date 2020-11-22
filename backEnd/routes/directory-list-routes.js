const express = require('express');

const router = express.Router('../models/http-error');

const directoryControllers = require('../controlers/directory-controler');

router.get('/:id', directoryControllers.getDirectoryById);

module.exports = router;