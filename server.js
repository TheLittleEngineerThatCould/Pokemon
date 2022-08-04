const express = require('express')
require('dotenv').config() 
const app = express()
const port = 3000
const pokemon = require('./models/pokemon')
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.once('open', () => {
    console.log("connected to mongo")
})



app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App')
})

app.get('/pokemon', (req, res) => {
    Pokemon.find({},(err, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon  
        })
    } )
});

// app.get('/pokemon', (req,res) => {
//     res.render("Index", {pokemon: pokemon})
// })

app.get('/pokemon/new', (req, res) =>{
    res.render("New")
})

app.post('/pokemon/', (req, res) => {
    let name=req.body.name.split('')
    name[0]=name[0].toUpperCase()
     req.body.name=name.join('')

    Pokemon.create(req.body, (err, createdPokemon) => {
             res.redirect('/pokemon')
                // res.send(createdPokemon)

    })

  
    
  
});


app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id,(err,foundPokemon) => {
            res.render('Show', {
                mons: foundPokemon
            })
    } )
});  





//... and then farther down the file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(port,() => {
    console.log('I am listening on', port)
})