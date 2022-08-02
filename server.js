const express = require('express')
require('dotenv').config() //telling express we want to use .env file to use
const app = express()
const port = process.env.PORT || 3003
const pokemon = require('./models/pokemon')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App')
})

app.get('/pokemon', (req,res) => {
    res.render("Index", {pokemon: pokemon})
})

app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id)
})
app.listen(port,() => {
    console.log('I am listening on', port)
})


