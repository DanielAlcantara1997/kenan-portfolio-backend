const express = require('express');
const cors = require('cors');
require('dotenv').config()


const appRoute = require('./routes/route')

const PORT = process.env.PORT
const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api', appRoute)

// Start the server
app.listen(PORT)
