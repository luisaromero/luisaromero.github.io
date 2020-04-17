import React from 'react';
import './Contacto.css';

function Contacto(){
        return(
        
            <div id="ContainerContact">
              <h1>Contacto.</h1>
              <div className="GetInTouch">
               <h5>Estemos en contacto ! :) luisa.marcela.romero@gmail.com</h5>
              </div>
              <div className="IconsContact">
               <div className="LinksContact"><a href="https://app.talento.laboratoria.la/profile/AKWcZKqAdUgpFPVDGfwPA0GsFos2" target='_blank' className="BtnContact">
                 <h5>Recomendaciones <i className="fa fa-code"></i></h5></a></div>
               <div className="LinksContact">
               <a href="https://www.linkedin.com/in/luisa-romero-cotrena/"target='_blank' className="BtnContact"><h5>Linkedin <i className="fa fa-linkedin"></i></h5></a>
               </div>
              <div className="LinksContact">
              <a href="https://github.com/luisaromero" target='_blank' className="BtnContact"><h5>Github <i className="fa fa-github-alt"></i></h5> </a>
              </div>
                </div>  
                </div>
            )
        }

  export default Contacto;