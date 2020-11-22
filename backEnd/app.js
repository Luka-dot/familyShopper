const express = require('express');
const bodyParser = require('body-parser');

const directoryRoutes = require('./routes/directory-list-routes');

const app = express();

app.use(directoryRoutes);


app.listen(5000);