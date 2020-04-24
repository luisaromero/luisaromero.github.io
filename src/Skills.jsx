import React from 'react';
import './Skills.css';
import Slide from 'react-reveal/Slide';

function Skills(){
 return(
     <React.Fragment>
     
  <div className="ContainerSkills" id="habilidades"> 
  <Slide top>
  <h1>Habilidades.</h1>
  </Slide>
<div className="Skills">
<div className="Icons"><img alt="logo html" src={require('./img/html5-brands.svg')}></img><p>Html 5</p></div>
<div className="Icons"><img alt="logo react" src={require('./img/react-brands.svg')}></img><p>React</p></div>
<div className="Icons"><img alt="logo javascript" src={require('./img/js-brands.svg')}></img><p>Javascript</p></div>
<div className="Icons"><img alt="logo node js" src={require('./img/node-js-brands.svg')}></img><p> Node JS</p></div>
<div className="Icons"><img alt="logo bootstrap" src={require('./img/bootstrap-brands.svg')}></img><p>Bootstrap</p></div>
<div className="Icons"><img alt="logo git"  src={require('./img/git-alt-brands.svg')}></img><p>Git</p></div>
{/* <img src={require('./img/nodered.png')}></img> */}
<div className="Icons"><img alt="logo CSS" src={require('./img/css3-brands.svg')}></img><p>CSS</p></div>
</div> 
</div>

</React.Fragment>
 )
}
 export default Skills; 
