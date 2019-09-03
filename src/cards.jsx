import React, { Component } from 'react';
import './cards.css'


class Cards extends Component{
    render(){
        return(
<React.Fragment> 

   <div className="title text-center">
   <p>_______________</p>
       <h1 className=""> Projects</h1>
   </div>
{/* <div className="container row mt:100px"> */}
    <div className="card middle"> 
    <div className="front">
        <img className="img-fluid" src="https://github.com/luisaromero/SCL009-Burger-Queen/blob/master/src/img/menu.png?raw=true" alt="j"></img>
    </div>
    <div className="back">
        <div className="back-content middle">
            <p>hola </p>
            <div className="sm"><a href="h"> </a></div>
        </div>
    </div>
    </div>
    <div className="card middle"> 
    <div className="front">
        <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQW5SR8-wpslLy-RHHeNNgfjT6_SsWXzCpuiI9KNJePu9CWAC" alt="j"></img>
    </div>
    <div className="back">
        <div className="back-content middle">
            <p>hola </p>
            <div className="sm"><a href="h"> </a></div>
        </div>
    </div>
    </div>
    <div className="card middle"> 
    <div className="front">
        <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQW5SR8-wpslLy-RHHeNNgfjT6_SsWXzCpuiI9KNJePu9CWAC" alt="j"></img>
    </div>
    <div className="back">
        <div className="back-content middle">
            <p>hola </p>
            <div className="sm"><a href="h"> </a></div>
        </div>
    </div>
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