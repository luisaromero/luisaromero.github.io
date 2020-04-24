import React from 'react';
import './AboutMe.css';
import Zoom from 'react-reveal/Zoom';

function AboutMe(){
    return(
        <Zoom>
        <div className="Container" id="sobremi">
            <div className="AboutMe" >
                <h1 className="TittleAboutMe"> Sobre mi</h1>     
            <p className="Resume">Desarrolladora web . Me inspira estar en constante aprendizaje .
Busco siempre nuevos retos que me permitan poner en practica mis conocimientos .
Además de darle un enfoque social e inclusivo, pensando en el constante cambio actual.
Disfruto en mis tiempos libres de la playa , el cine arte <i className="fa fa-film"></i> y los juegos de mesa .Puedes descargar mi cv en el botón para saber más de mi.</p> 
{/* <img src={require('./img/me.jpg')}></img> */}
   <a  href="https://drive.google.com/file/d/1fflGyUgb7zLSEktYL4q2c1uzFo00DgHa/view?usp=sharing" target="_blank" > <button className="BtnCV" >Descarga mi cv</button></a>
     </div> 
     </div>
     </Zoom>
    )
}
export default AboutMe