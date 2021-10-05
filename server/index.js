/*const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");*/
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from './routes/posts.js';
import dotenv from 'dotenv'


const app = express();
dotenv.config();


// for image
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use('/posts', postRouter);

app.get('/', (req, res) => {
    res.send('Hello from API')
})

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>
    app.listen(PORT, () => {
        console.log('Server is running on port ' + `${PORT}`)
    })
).catch((err) => console.log(err.message));

//mongoose.set('useFindAndModify', false);
