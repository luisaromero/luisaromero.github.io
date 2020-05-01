import React from 'react';
import './Projects.css';
import Zoom from 'react-reveal/Slide';

function Projects(){
 return(
     <React.Fragment>
<div className="ContainerProjects" id="proyectos">
<Zoom cascade>
<h1>PROYECTOS</h1>

  <div className="Projects">
 <div className="card">
   <div className="face face1">
<div className="content">
<h5>BURGUER QUEEN</h5>
</div>
   </div>
   <div className="face face2">
   <div className="content">
   <p>Página que permite al mesero de un restaurante tomar pedidos de los clientes en tiempo real y guardarlos en una base de datos (Firebase).Recursos:React</p>
   <div className="links">
   <a href="https://cloiw.github.io/SCL009-Burger-Queen/" target="_blanck"><button>Ver página</button></a>
   <a href="https://github.com/luisaromero/SCL009-Burger-Queen" target="_blanck"><button>Ver código</button></a>
   </div>
</div>
</div>
   </div>
   <div className="card">
   <div className="face face1">
<div className="content">
<h5>INFO POKEMON</h5>
</div>
   </div>
   <div className="face face2">
   <div className="content">
<p>Página web que nos permite filtrar por tipo o nombre de POKEMON. Recursos utilzados :  Vanilla Javascript - API </p>
<div className="links">
<a href="https://jocecasteletti.github.io/SCL009-data-lovers/src/index.html" target="_blanck"><button>Ver página</button></a>
<a href="https://github.com/luisaromero/SCL009-data-lovers" target="_blanck"><button>Ver código</button></a>
</div>
</div>
</div>
   </div>
   <div className="card">
   <div className="face face1">
<div className="content">
<h5>MD-LINKS</h5>
</div>
   </div>
   <div className="face face2">
   <div className="content">
   <p>Librería de NPM .Permite encontrar archivos markdown de carpetas y archivos .Recursos : NODEJS .JAVASCRIPT</p>
   <div className="links">
<a href="https://www.npmjs.com/package/md-links-luisaromero" target="_blanck"><button>Ver página</button></a>
<a href="https://github.com/luisaromero/SCL009-md-links" target="_blanck"><button>Ver código</button></a>
</div>
</div>
</div>
   </div>
 </div>
 </Zoom>
</div>
</React.Fragment>
 )
}
 export default Projects; 
