import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Cardlist from './Cardlist';
// import Data from './Data.json'
import Cardliststyle from './Cardliststyle.css'



class App extends Component {
  constructor() {
    super();
    console.log("app")
    this.state = {
      data : [{

      }]
    

  }
  }

  
  componentDidMount(){
    
      
      fetch("http://api.countrylayer.com/v2/region/asia?access_key=057cdc5cb0b0bcd07df3ee5d21839199") 
      .then(response=> response.json())
      .then(user=> this.setState({data : user})) 
}







render() {
  
 
    
  return (
    
      <div>
          {
            this.state.data.map(({id,name,capital,region})=>(
              <Cardlist key={id} name={name} capital={capital} region={region}/>
            ))
          
          }

        
      </div>
    )

  }
}


export default App;

