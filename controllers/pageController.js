
// Load the about page
exports.getAboutPage = (req, res) => {
    res.render('layout', {content: 'about'});
};

// Load the contact page
exports.getContactPage = (req, res) => {
    res.render('layout', {content: 'contact'});
};

// Load the index (home) page
exports.getIndexPage = (req, res, next) => {
    res.render('layout', {content: 'index'});
};

// Load the Terms and Conditions page
exports.getTermsPage= (req, res) => {
    res.render('layout', {content: 'terms'});
};