const mongoose = require('mongoose');
const {urlValidator, imagePathValidator} = require('./validations');

const ImageSchema = new mongoose.Schema({
    relativePath: {
        type: String,
        validate: imagePathValidator
    },
    absoluteUrl: {
        type: String,
        trim: true,
        validate: urlValidator
    }
});

module.exports = ImageSchema;