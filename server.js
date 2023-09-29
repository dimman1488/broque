require('dotenv').config();

const express       = require('express');
const session       = require('express-session');           // <---
const mongoose      = require('mongoose');
const passport      = require('passport');                  // <---
const localStrategy = require('passport-local').Strategy;   // <---
const bcrypt        = require('bcrypt');                    // <---
const ejs           = require('ejs');
const path          = require('path');

const app           = express();
const PORT          = process.env.PORT || 3000;

// Set up basic MongoDB connection
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Failed to connect to MongoDB", err));

// Serve static files (CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); // <--- same (but better) than "app.use(express.static(__dirname + '/public'));", which is same, but better than "app.use(express.static('public'));"

app.use(session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true
}));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));    // To handle URL-encoded data
app.use(express.json());                            // To handle JSON data

//passport.js
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    // Set up user model
});

// Require the XYZ route
const managerzoneRoute  = require('./routes/managerzone');
const managerauthRoute  = require('./routes/managerauth');
const pagesRoute        = require('./routes/pages');
const productsRoute     = require('./routes/products');  
const indexRoute        = require('./routes/index'); 
// Use the XYZ route for anything that starts with /XYZ
app.use('/', pagesRoute);
app.use('/', indexRoute);
app.use('/products', productsRoute);
app.use('/managerzone', managerzoneRoute);
app.use('/managerauth', managerauthRoute);

// Handle 404 - Keep this as the last route
app.use((req, res, next) => {
    res.status(404).send('Page not found!');
});

// Central error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});