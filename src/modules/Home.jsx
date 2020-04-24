import React from 'react';
import Particles from 'react-particles-js';
import './Home.css'



function Home(){
return(
  <div id="inicio">
  <div className="introduction"><h1>Luisa Romero</h1><h2>DESARROLLADORA WEB <i className="fa fa-laptop"></i></h2> </div> 
  <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 1
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
  </div>
 

)
}

export default Home;

   // <div id="ContainerHome">
    //   <div data-aos="fade-up-left"data-aos-offset="200"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    // data-aos-mirror="true"
    // data-aos-once="false"
    // data-aos-anchor-placement="top-center" 
    // className="text-center">
    // <Typed
    // strings={[
    //   '¡ Hola ! Soy Luisa Romero. ', '¡ Hi ! I am Luisa Romero.']}
    //     typeSpeed={40}
    //     backSpeed={25}
    //     loop >
            
    // </Typed>
//     </div>
// </div>