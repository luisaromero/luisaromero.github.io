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
      <nav className="navbar navbar-expand-lg">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#about-me">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
    <div className="hola text-center">
    <p>Luisa Romero</p>
    
    <h1>Front-end Developer</h1>
    </div>
    <div className="overlay"></div>
    </div>  
    <div id="about-me"><Slider/></div>
    
    <div id="projects "></div><Cards/>
    <Contact/>
   <Footer/>   
    </React.Fragment>
  )}
}

export default App;
