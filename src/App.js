import React from 'react';
import '././App.css';
import Footer from '././footer';
import Cards from '././cards';
import Slider from '././Slider';
import Contact from '././contact';


class App extends React.Component{
  render(){
      return(
        <React.Fragment>
          <div className="container">
    <div className="App">
      <nav className="navbar navbar-expand-lg ">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#about-me">Sobre mi </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Proyectos</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#skills">Skills</a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contacto</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
    <div className="hola text-center">
      <p id="pp">___</p>
    <h1>
     Luisa Romero
    </h1>
    
    <h2>Front-end Developer</h2>
    </div>
    <div className="overlay"></div>
    </div>  
    <div id="about-me"><Slider/></div>
    
    <div id="projects"><Cards/></div>
    <div id="contact"><Contact/></div>
    
   <Footer/>   
    </React.Fragment>
  )}
}

export default App;
