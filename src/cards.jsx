import React, { Component } from 'react';
import './cards.css'


class Cards extends Component{
    render(){
        return(
<React.Fragment> 
 <div className="container"> 
 <div className="row">
  <div className="col-12 col-md-3 img-news">
      <img className="img-fluid" src="https://cdn.about.me/s3/h/z/social.c1bd328b.png" alt="proyecto"/>
  </div>
  <div className="col-12 col-md-3 img-news">
      <img className="img-fluid" src="https://1kabswnt2ua3ivl0cuqv2f17-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/Skills.jpg" alt=""/>

  </div>
  <div className="col-12 col-md-3 img-news">
      <img className="img-fluid" src="https://www.modularprojects.es/wp-content/uploads/2019/07/logo_modular_projects.jpg" alt=""/>
  </div>
  </div>                       
  </div>


</React.Fragment>
)
} 
}
export default Cards;