require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // ORM used to communicate with MongoDB

// any requests that go to the '/api/items' endpoint will refer to this folder
const items = require('./routes/api/items'); 

const server = express();

server.use(express.json());

// configures the database with the URI
const db = require('./config/keys').mongoURI;

// connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log('The MongoDB is connected!');
    })
    .catch(err => {
        console.log(err)
    });

// tells the server to use the routes from the 'items' variable, 
// which is defined above, for any requests to the '/api/items' endpoint
server.use('/api/items', items); 

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
})