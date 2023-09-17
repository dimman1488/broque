require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

console.log("Starting server.js...");



// Require the XYZ route
const productsRoute = require('./routes/products');  
const aboutRoute = require('./routes/about'); 
const contactRoute = require('./routes/contact'); 
const indexRoute = require('./routes/index'); 


app.use(express.urlencoded({ extended: true }));  // To handle URL-encoded data
app.use(express.json());  // To handle JSON data

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, JS, images) from the 'public' directory
app.use(express.static('public'));


// Set up basic MongoDB connection
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Failed to connect to MongoDB", err));

// Use the XYZ route for anything that starts with /XYZ
app.use('/products', productsRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/', indexRoute);


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





