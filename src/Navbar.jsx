import React from 'react';
import './Navbar.css'

function Navbar(){
        return(
            <nav className="navbar navbar-expand-sm navbar-light fixed-top ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
             <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
             <div className="navbar-nav">
             <a className="nav-item  nav-link active" href="Home">Portfolio</a>
          <a className="nav-item nav-link active" href="AboutMe">Sobre mi</a>
      <a className="nav-item nav-link active" href="#">Mis proyectos</a>
      <a className="nav-item nav-link active" href="Skills">Habilidades</a>
      <a className="nav-item nav-link active" href="">Contacto</a>
      </div>
      </div>
          </nav>
            )}
  export default Navbar;