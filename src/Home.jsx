import React from 'react';
import Typed from 'react-typed';
import './Home.css'


function Home(){
return(
    <div id="ContainerHome">
       <div className="text-center"data-aos="fade-left">dfssdf</div>
    <Typed
    strings={[
      '¡ Hola ! Soy Luisa Romero. ', '¡ Hi ! I am Luisa Romero.']}
        typeSpeed={30}
        backSpeed={20}
        loop >
            
    </Typed>
   
</div>

)
}

export default Home;