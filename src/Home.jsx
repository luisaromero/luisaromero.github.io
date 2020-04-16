import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import './Home.css'



function Home(){
return(
  <div id="ContainerHome">
  <div className="introduction"><h1>Luisa Romero.</h1><h2>DESARROLLADORA WEB <i className="fa fa-laptop"></i></h2> </div> 
  <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 190,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.00
	        },
	        "size": {
	            "value": 2
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 2,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": false,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
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