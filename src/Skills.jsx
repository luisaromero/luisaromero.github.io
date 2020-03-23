import React from 'react';
import './Skills.css';

function Skills(){
 return(
     <React.Fragment>
<div className="Skills">
<img src={require('./img/html5-brands.svg')}></img>
<img src={require('./img/react-brands.svg')}></img>
<img src={require('./img/js-brands.svg')}></img>
<img src={require('./img/node-js-brands.svg')}></img>
<img src={require('./img/bootstrap-brands.svg')}></img>
<img src={require('./img/git-alt-brands.svg')}></img>
{/* <img src={require('./img/node-red-icon-2.svg')}></img> */}
<img src={require('./img/css3-brands.svg')}></img>


</div>
   
</React.Fragment>
 )
}
 export default Skills; 
