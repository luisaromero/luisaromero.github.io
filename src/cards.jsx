import React, { Component } from 'react';
import './cards.css'


class Cards extends Component{
    render(){
        return(
<React.Fragment> 

   <div className="title text-center">
   <p>_______________</p>
       <h1 className=""> Proyectos</h1>
   </div>
{/* <div className="container row mt:100px"> */}
    <div className="card middle"> 
    <div className="front">
        <img className="img-fluid" src="http://img.fenixzone.net/i/bCpgkGu.png" alt="j"></img>
    </div>
    <div className="back">
        <div className="back-content middle">
           
            <div className="sm"><a className="btn btn-default" target="_blank"  href = "https://mariia1304.github.io/hackathon-terror/">Ver demo</a><a href="https://github.com/luisaromero/hackathon-terror"  target="_blank"className="btn btn-default">Ver código</a></div>
        </div>
    </div>
    <h1 >Catálogo digital de cine enfocado en el cine de terror , que permite filtrar las películas por género, director , actores, o puntuación en imbd.</h1>
    </div>
    <div className="card middle"> 
    <div className="front">
        <img className="img-fluid" src="http://img.fenixzone.net/i/6dngBRA.png" alt="j"></img>
    </div>
    <div className="back">
        <div className="back-content middle">
           
            <div className="sm"><a target="_blank" className="btn btn-default" href = "https://cloiw.github.io/SCL009-Burger-Queen">Ver demo</a><a href="https://github.com/luisaromero/SCL009-Burger-Queen" target="_blank" className="btn btn-default">Ver código</a></div>
        </div>
    </div>
    <h1>Aplicación que permite a un restaurant tomar la orden de los clientes de manera fácil y didáctica.</h1>
    </div>
    <div className="card middle"> 
    <div className="front">
        <img className="img-fluid" src="http://img.fenixzone.net/i/mFaIzBk.png" alt="j"></img>
    </div>
    <div className="back">
        <div className="back-content middle">
            
            <div className="sm"><a className="btn btn-default" target="_blank" href = "https://Mariia1304.github.io/duchenne-react">Ver demo</a><a href="https://github.com/luisaromero/duchenne-react" target="_blank" className="btn btn-default">Ver código</a></div>
        </div>

    </div>
    <h1>Plataforma web informativa de fundación duchenne Chile </h1>
    </div>
    {/* </div> */}
    

    
{/*   
  <div className="col-12 col-md-3 img-news">
      <img className="img-fluid" src="https://www.modularprojects.es/wp-content/uploads/2019/07/logo_modular_projects.jpg" alt=""/>
  </div> */}
  
</React.Fragment>
)
} 
}
export default Cards;