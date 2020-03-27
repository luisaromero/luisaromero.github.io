import React from 'react';
import Navbar from './Navbar'
import Contacto from './Contacto'
import Home from './Home'
import Footer from './Footer'
import Projects from './Projects'
import Skills from './Skills'
import AboutMe from './AboutMe'


import '././App.css';




class App extends React.Component{
  render(){
      return(
     
        <React.Fragment>
         
       
             <Navbar/> 
             {/* <Home/> */}
            <AboutMe id="AboutMe"/>
             <Projects/>
            <Skills/>
            <Contacto/>
            <Footer/>
          </React.Fragment>
      )}
}

export default App;
