require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // ORM used to communicate with MongoDB

const server = express();

server.use(express.json());

// need a MongoDB uri to connect with database
