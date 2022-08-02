const express = require('express')
require('dotenv').config() //telling express we want to use .env file to use
const app = express()
const port = process.env.PORT || 3003

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App')
})

app.listen(port,() => {
    console.log('I am listening on', port)
})