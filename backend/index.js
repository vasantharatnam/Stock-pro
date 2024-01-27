const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const  connectToMongo = require('./db');
const userRouter = require('./routes/userRoute')
const app = express();
const cors = require('cors');
const PORT =  3001;
// { useNewUrlParser: true, useUnifiedTopology: true }
app.use(cors());
app.use(bodyParser.json());

// Define routes
app.use('/',userRouter);

// Add more routes and middleware as needed
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
    connectToMongo()
})