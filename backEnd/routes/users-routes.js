const express = require('express');

const router = express.Router('../models/http-error');

const usersControllers = require('../controlers/users-controler');

router.get('/', usersControllers.getUsers);

router.post('/signup', usersControllers.signup);

router.post('/login', usersControllers.login);

module.exports = router;