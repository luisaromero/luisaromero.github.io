import React from 'react';
import './Skills.css';

function Skills(){
 return(
     <React.Fragment>
<div className="Skills">
<div className="Icons"><img src={require('./img/html5-brands.svg')}></img><p>Html 5</p></div>
<div className="Icons"><img src={require('./img/react-brands.svg')}></img><p>React</p></div>
<div className="Icons"><img src={require('./img/js-brands.svg')}></img><p>Javascript</p></div>
<div className="Icons"><img src={require('./img/node-js-brands.svg')}></img><p> Node JS</p></div>
<div className="Icons"><img src={require('./img/bootstrap-brands.svg')}></img><p>bootstrap</p></div>
<div className="Icons"><img src={require('./img/git-alt-brands.svg')}></img><p>Git</p></div>
{/* <img src={require('./img/nodered.png')}></img> */}
<div className="Icons"><img src={require('./img/css3-brands.svg')}></img><p>CSS</p></div>

</div>
   
</React.Fragment>
 )
}
 export default Skills; 
