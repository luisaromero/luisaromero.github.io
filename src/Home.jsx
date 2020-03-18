import React from 'react';
import Typed from 'react-typed';
import './Home.css'



function Home(){
return(
    <div id="ContainerHome">
      <div data-aos="fade-up-left"data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" 
    className="text-center">
    <Typed
    strings={[
      '¡ Hola ! Soy Luisa Romero. ', '¡ Hi ! I am Luisa Romero.']}
        typeSpeed={40}
        backSpeed={25}
        loop >
            
    </Typed>
    </div>
</div>

)
}

export default Home;