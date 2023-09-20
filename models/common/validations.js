const validator = require('validator');

exports.urlValidator = {
    validator: function(value) {
        const urlOptions = {protocols: ['http', 'https'], require_protocol: true};
        return validator.isURL(value, urlOptions);
    },
    message: 'Invalid URL format'
};

exports.imagePathValidator = {
    validator: function(value) {
        // Validate that the path starts with "/images/" followed by valid characters
        return /^\/images\/[a-zA-Z0-9-_\/.]+$/i.test(value);
    },
    message: 'Invalid path format'
};