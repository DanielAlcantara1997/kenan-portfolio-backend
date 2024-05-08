const express = require('express');
require('dotenv').config()


const appRoute = require('./routes/route')

const PORT = process.env.PORT
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api', appRoute)

// Start the server
app.listen(PORT)
