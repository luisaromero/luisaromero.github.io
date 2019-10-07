import React from 'react';
import '././Slider.css';

 class Slider extends React.Component{
    render(){
        return(
          <React.Fragment>
            <div className="title text-center">
            <p id="pp">_______________</p>
              <h1>ACERCA DE MI</h1>
            </div>
              <div id="carouselExampleIndicators" className="carousel slide  offset-2" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div className="carousel-item active "> <div className="lg-6 row">
      <img  className="luisaPhoto"src= "https://avatars1.githubusercontent.com/u/48934446?s=460&v=4"></img>
      
      <h3 className="">Soy  desarrolladora web , me inspira estar en constante aprendizaje .</h3> <h3>Busco siempre nuevos retos que me permitan poner en practica mis conocimientos . </h3>
        <h3>Además de darle un enfoque multicultural , pensando en el constante cambio social actual .</h3>
     </div>
    </div>
    <div className="carousel-item">
      
    </div>
  </div>
 
</div>
              </React.Fragment>
              )
              }}
              export default Slider