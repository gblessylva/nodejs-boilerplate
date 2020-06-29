const express = require('express');
const cors = require('cors');
const colors = require('colors');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const app = express();
// This is the link to the db file in config
// const connectDB = require('../config/db');

//This is will call the DB which will connect to the MongoDB
// connectDB();

require('dotenv').config();
// dotenv.config({
//     path: '../config/config.env'
// });
app.use(express.json());
app.use(cors());
app.use(routes);

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection
// db.on('error', error => console.log(error));
// db.once('open', () => console.log("connected to database").yellow.bold);


const PORT = 5000;
app.listen(PORT,
    console.log(`Server is running on port ${PORT}`.green.bold));