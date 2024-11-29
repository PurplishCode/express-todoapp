const express = require('express');
const body_parser = require('body-parser');
const userRoute = require('./routes/user_router');
const cors = require('cors');
const app = express();

// Intializing Body parsing, cors origin, and express json packages.
app.use(body_parser.json());
app.use(cors());
app.use(express.json());


app.use('/api', userRoute);

module.exports = app;