import React from 'react';
import '././Slider.css';

 class Slider extends React.Component{
    render(){
        return(
          <React.Fragment>
            <div className="title text-center">
            <p id="pp">_______________</p>
              <h1>About me</h1>
            </div>
              <div id="carouselExampleIndicators" className="carousel slide  offset-3" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div className="carousel-item active">
      <h3>WE ARE THE DIEHL GROUP ARCHITECTS, A FULL-SERVICE DESIGN AND CONSULTING FIRM SPECIALIZING IN FORENSIC ARCHITECTURE, QUALITY ASSURANCE, AND EXPERT WITNESS TESTIMONY.
WE ENSURE SOUND DESIGN AND LEGAL COMPLIANCE THROUGHOUT A BUILDING'S LIFESPAN, FROM CRADLE TO GRAVE.
WE KNOW BUILDINGS</h3>
      {/* <img src="https://drive.google.com/drive/folders/1h_-7xanpyV5JVX2kxJpBBBqqBSj4aBJB" className="d-block w-100" alt="..."></img> */}
    </div>
    <div className="carousel-item">
       {/* <img src="https://www.residentadvisor.net/images/events/flyer/2019/9/es-0927-1310490-1464261-front.jpg" class="d-block w-100" alt="..."></img>  */}
    </div>
  </div>
 
</div>
              </React.Fragment>
              )
              }}
              export default Slider