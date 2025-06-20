const express = require('express');
const cors = require('cors');
const { connectDB } = require('./DB/db');
const routes = require('./routes/routes');
require('dotenv').config()
const app = express();

// connecting db 
connectDB()
// middleware
app.use(cors());
app.use(express.json());

// use routes
app.use('/', routes)
module.exports = app;