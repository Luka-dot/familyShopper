const express = require('express');

const router = express.Router();

router.get('/', (reg, res, next) => {
    console.log('GET request from Directory file.');
    res.json({ message: 'This works.'})
});

module.exports = router;