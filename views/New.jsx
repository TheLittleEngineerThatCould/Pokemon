const React = require('react')
//const pokemon = require('./models/pokemon')

const bg = {
    backgroundColor:'green',
}

class New extends React.Component {
    render(){
        const {pokemon} = this.props
        return(
            <html style={bg}>
                <head>
                    <title></title>
                </head>
                <body>
                
                  
            

        <div>
               <h1>Form</h1>
               {/* NOTE: action will be the route, method will be the HTTP verb */}
               <form action="/pokemon" method="POST">
                 Pokemon Name: <input type="text" name="name" /><br/>
               Image: <input type="text" name="img" /><br/>
                 <input type="submit" name="" value="Create Fruit"/>
               </form>

               <a href="/pokemon">Back to the Index Page</a><br />
              <a href="/pokemon/new">Create a New Pokemon</a>

           </div>
       
                </body>
                </html>
              )       
                     
              
       }
}


module.exports = New