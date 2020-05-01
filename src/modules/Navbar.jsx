import './Navbar.css';
import React from 'react';
import { Link} from 'react-scroll'


function Navbar(){
        return(
            <nav className="navbar navbar-expand-sm navbar-light fixed-top ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
             <div className="collapse navbar-collapse collapse" id="navbarTogglerDemo01">
             <div className="navbar-nav">
             <li className="nav-item  nav-link active"> <Link   to="inicio" spy={true} smooth={true} duration={900} activeClass="active">Inicio</Link></li>
             <li className="nav-item nav-link active" ><Link   to="sobre-mi" spy={true} smooth={true} duration={900} activeClass="active">Sobre mi</Link></li>
            <li className="nav-item nav-link active" ><Link   to="proyectos" spy={true} smooth={true} duration={900} activeClass="active">Mis proyectos</Link></li>
             <li className="nav-item nav-link active" > <Link   to="habilidades" spy={true} smooth={true} duration={900} activeClass="active">Habilidades</Link></li>
              <li className="nav-item nav-link active" > <Link   to="contacto" spy={true} smooth={true} duration={900} activeClass="active">Contacto</Link></li>
      </div>
      </div>
          </nav>
            )}
  export default Navbar;