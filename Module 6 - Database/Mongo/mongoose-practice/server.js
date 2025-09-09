// Server setup
const express = require('express')
const app = express()
const api = require('./routes/api.js')
const mongoose = require('mongoose')
require('dotenv').config();



// Mongoose setup
mongoose.connect(process.env.DB_CONNECTION).catch((err) => console.log(err))

console.log('🤘 DB connected successfully');

app.use('/', api)

const port = 8080
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
