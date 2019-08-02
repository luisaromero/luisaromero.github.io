import React from 'react';
import './App.css';


class App extends React.Component{
  render(){
      return(
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
  )}
}

export default App;
