require('dotenv').config()
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bp = require('body-parser');
const cors = require('cors')

const userRouter = require('./routes/users');

server.use(bp.json());
server.use(cors());

server.use(userRouter)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    server.listen(3001, () => {
        console.log('serevt started at port 3001')
    })
})