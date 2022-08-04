const React = require('react');

const bg = {
    backgroundColor: 'green',
}


class Index extends React.Component {
       render() {
const {pokemon} = this.props
    return(
      
         
              
                     

                <html style={bg}>
                <head>
                    <title></title>
                </head>
                <body>
                    <h1>See all the Pokemon!</h1>
                   <ul>
                    {pokemon.map((pokemon) => {
  
                        return(
                            <li>
                              
                              <a href={`/pokemon/${pokemon.id}`}><h3>{pokemon.name}</h3></a>
                            </li>
                        )
                    })}
                    </ul>

                    <a href="/pokemon">Back to the Index Page</a><br />
        <a href="/pokemon/new">Create a New Pokemon</a>
        
                </body>
                </html>
              )       
                     
              
       }
}


module.exports = Index;