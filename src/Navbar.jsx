import './Navbar.css';
import React from 'react';

function Navbar(){
        return(
            <nav className="navbar navbar-expand-sm navbar-light fixed-top ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
             <div className="collapse navbar-collapse collapse" id="navbarTogglerDemo01">
             <div className="navbar-nav">
            <a className="nav-item  nav-link active"  href="#">Portafolio</a>
             <a className="nav-item nav-link"  href="#sobremi">Sobre mi</a>
              <a className="nav-item nav-link"  href="#proyectos">Mis proyectos</a>
            <a className="nav-item nav-link"  href="#habilidades">Habilidades</a>
              <a className="nav-item nav-link" href="#contacto">Contacto</a>
      </div>
      </div>
          </nav>

            )}
  export default Navbar;