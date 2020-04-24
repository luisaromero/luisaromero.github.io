import React from 'react';
import './Contacto.css';
import Slide from 'react-reveal/Slide';

function Contacto(){
        return(
        
            <div className="ContainerContact" id="contacto">
              <Slide top>
              <h1>Contacto.</h1>
              </Slide>
              <div className="GetInTouch">
               <h5>Estemos en contacto :) luisa.marcela.romero@gmail.com</h5>
              </div>
              <div className="IconsContact">
               <div className="LinksContact"><a href="https://app.talento.laboratoria.la/profile/AKWcZKqAdUgpFPVDGfwPA0GsFos2" target='_blank'  rel="noopener noreferrer" className="BtnContact">
                 <h5>Recomendaciones <i className="fa fa-code"></i></h5></a></div>
               <div className="LinksContact">
               <a href="https://www.linkedin.com/in/luisa-romero-cotrena/"target='_blank'  rel="noopener noreferrer"  className="BtnContact"><h5>Linkedin <i className="fa fa-linkedin"></i></h5></a>
               </div>
              <div className="LinksContact">
              <a href="https://github.com/luisaromero" target='_blank'  rel="noopener noreferrer" className="BtnContact"><h5>Github <i className="fa fa-github-alt"></i></h5> </a>
              </div>
              <div className="LinksContact">
              <a href="https://drive.google.com/file/d/1fflGyUgb7zLSEktYL4q2c1uzFo00DgHa/view" target='_blank'  rel="noopener noreferrer" className="BtnContact"><h5>MI CV <i className="fa fa-file"></i></h5> </a>
              </div>
                </div>  
                </div>
            )
        }

  export default Contacto;