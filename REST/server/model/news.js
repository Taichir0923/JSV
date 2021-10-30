const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', newsSchema)