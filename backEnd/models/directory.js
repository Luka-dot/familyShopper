const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const directorySchema = new Schema({
    id: Number,
    name: String,
    created: String,
    listDetail: Array
});

module.exports = mongoose.model('Directory', directorySchema);