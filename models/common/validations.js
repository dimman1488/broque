const validator = require('validator');

exports.urlValidator = {
    validator: function(value) {
        const urlOptions = {protocols: ['http', 'https'], require_protocol: true};
        return validator.isURL(value, urlOptions);
    },
    message: 'Invalid URL format'
};

exports.emailValidator = {
    validator: function(value) {
        return validator.isEmail(value, {
            allow_display_name:false,
            require_display_name: false,
            allow_utf8_local_part: false,
            require_tld: true,
            allow_ip_domain: true,
            allow_underscores: true,
            domain_specific_validation: true,
            blacklisted_chars: '[]',
            host_blacklist: ['example.com']
        });
    },
    message: 'Invalid email format'
}

exports.phoneValidator = {
    validator: function(value) {
        return validator.isMobilePhone(value, 'any');
    },
    message: 'Invalid phone number format!'
}
exports.postalNumberValidator = {
    validator: function(value) {
        return /^\d{5}$|^\d{2} \d{3}$|^\d{3} \d{2}$/.test(value)
    },
    message: 'Invalid postal number format'
}

exports.onlyContainLettersValidator = {
    validator: function(value) {
        // Validate that the string only contains letters
        return /^\p{L}+$/gu.test(value);
    }
}

exports.onlyEnglishLettersValidator = {
    validator: function(value) {
        // Validate that the string only contains letters
        return /^[a-zA-Z]+$/.test(value);
    }
}

exports.anyLettersAndNumbersValidator = {
    validator: function(value) {
         // This regex allows letters, numbers, spaces, hyphens, and slashes
         return /^[\p{L}0-9\s\-\/]+$/gu.test(value);
    },
    message: 'Invalid address format'
}

exports.imagePathValidator = {
    validator: function(value) {
        // Validate that the path starts with "/images/" followed by valid characters
        return /^\/images\/[a-zA-Z0-9-_\/.]+$/i.test(value);
    },
    message: 'Invalid path format'
};