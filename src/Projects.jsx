import React from 'react';
import './Projects.css';

function Projects(){
 return(
     <React.Fragment>
<div className="ContainerProjects">
  <div className="hello">
  <div className="Projects">
  <img src={require('./img/Projects-Icons/adn.svg')}></img>
    <h5>Dushcenne</h5>
    <p></p>
    </div>
    <div className="Projects">
  <img src={require('./img/Projects-Icons/adn.svg')}></img>
    <h5>BURGUER QUEEN</h5>
    <p></p>
    </div>
    <div className="Projects">
  <img src={require('./img/Projects-Icons/adn.svg')}></img>
    <h5>md links</h5>
    <p></p>
    </div>
    <div className="Projects">
  <img src={require('./img/Projects-Icons/adn.svg')}></img>
    <h5>CITI</h5>
    <p></p>
    </div>
    <div className="Projects">
  <img src={require('./img/Projects-Icons/dna.svg')}></img>
    <h5>POKEMON</h5>
    <p></p>
    </div>
    <div className="Projects">
  <img src={require('./img/Projects-Icons/adn.svg')}></img>
    <h5>CDMX STORE</h5>
    <p></p>
    </div>
</div>
</div>
   
</React.Fragment>
 )
}
 export default Projects; 
