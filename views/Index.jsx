const React = require('react')
//const pokemon = require('./models/pokemon')

const bg = {
    backgroundColor:'green',
}

class Index extends React.Component {
    render(){
        const {pokemon} = this.props 
        return(
            <html style={bg}> 
            <head>
                <title></title>
            </head>
            <body>
                <h1>See all the Pokemon!</h1>
                <ul>
                    {pokemon.map((mons, i) => {
                        return(
                            <li>
                                <h3>{mons.name}</h3>
                            </li>
                        )
                    })}
                </ul>
            </body>
            </html>
        )
    }
}

module.exports = Index