import React from 'react';
import './App.css';
import Footer from './footer';
import Cards from './cards';


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
        <a className="nav-link" href="">About <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">Portafolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">Contact</a>
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
    {/* <Cards/> */}
    <div className=" text-center">
      <p> About</p>
      Text about me ... In progress... 
    </div>
    <div className=" text-center">
      <p> Projects</p>
      Projects ... In progress... 
    </div>
    <div className=" text-center">
      <p> Contact</p>
      Contact me ... In progress... 
    </div>
    <Footer/>
    </React.Fragment>
  )}
}

export default App;
