import React from 'react';
import Navbar from './Navbar'
import Contacto from './Contacto'
import Home from './Home'
import Footer from './Footer'
import Projects from './Projects'


import '././App.css';




class App extends React.Component{
  render(){
      return(
     
        <React.Fragment>
         
        <Home/>
            {/* <Navbar/> */}
            <Projects/>
            <Contacto/>
            <Footer/>
          </React.Fragment>
      )}
}

export default App;
