const React = require('react')
//const pokemon = require('./models/pokemon')

const bg = {
    backgroundColor:'grey',
}

const h1 = {
    color:'red'
}
class Show extends React.Component {
    render() {
const {pokemon} = this.props
 return(
             <html style={bg}>
             <head>
                 <title></title>
             </head>
             <body>
                 <h1 style={h1}>Gotta Catch 'Em All!</h1>
                 <h2>{pokemon.name}</h2>
               <img src={pokemon.img + '.jpg'}></img><br />
     <a href="/pokemon">Back to the Index Page</a><br />
     <a href="/pokemon/new">Create a New Pokemon</a>
             </body>
             </html>
           )             
           
    }
}


module.exports = Show