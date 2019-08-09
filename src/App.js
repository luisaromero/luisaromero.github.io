import React from 'react';
import '././App.css';
import Footer from '././footer';
import Cards from '././cards';


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
    <div className="hola">
    <p>Luisa Romero</p>
    <h1>Front-end Developer</h1>
    </div>
    <div className="overlay"></div>
    </div>
    <div className=" text-center">
    <Cards/>
      <p> About</p>
      <a name="about-me">Text about me ... In progress... </a>
    </div>
    <div className=" text-center">
      <a name="#projects"> Projects</a>
     <p> Projects ... In progress... </p>
    </div>
    <div className=" text-center">
      <a name="skills"> Skills</a>
      <p>Skills ... In progress... </p>
    </div>
    <div className=" text-center">
      <a name="contact"> Contact</a>
      <p>Contact me ... In progress... </p>
    </div>
    
    <Footer/>   
    </React.Fragment>
  )}
}

export default App;
