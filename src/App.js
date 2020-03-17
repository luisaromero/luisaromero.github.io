import React from 'react';
import Navbar from './Navbar'
import Contacto from './Contacto'
import Home from './Home'

import '././App.css';




class App extends React.Component{
  render(){
      return(
     
        <React.Fragment>
         
        <Home/>
            {/* <Navbar/> */}
            <Contacto/>
          </React.Fragment>
      )}
}

export default App;
