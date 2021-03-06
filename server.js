const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// load env vars
dotenv.config({ path: '.env' });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

//Enable cors
app.use(cors());

//Routes
app.use('/api/v1/stores', require('./routes/store'));

const PORT = process.env.PORT || 5005;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
