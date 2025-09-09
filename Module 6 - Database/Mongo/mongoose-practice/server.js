// Server setup
const express = require('express')
const app = express()
const api = require('./routes/api.js')
const mongoose = require('mongoose')



// Mongoose setup
mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))

app.use('/', api)

const port = 8080
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
