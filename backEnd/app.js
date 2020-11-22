const express = require('express');
const bodyParser = require('body-parser');

const directoryRoutes = require('./routes/directory-list-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json())

app.use('/api/directory/', directoryRoutes);

// this middleware only runs after no route was found-matched
app.use((req, res, next) => {
    const error = new HttpError('Route not found.', 404);
    throw error;
});

// this function will execute when any function before it trow error
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'Unknown error occurred!'});
});

app.listen(5000);