require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // ORM used to communicate with MongoDB

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

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
})