import React from 'react';
import '././Slider.css';

 class Slider extends React.Component{
    render(){
        return(
          <React.Fragment>
            <div className="title text-center">
              <h1>About me</h1>
            </div>
              <div id="carouselExampleIndicators" className="carousel slide col-8 offset-3" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/796c5b79-668d-4f86-8ea4-059dea48936a/dbmzhv0-7af87eac-fa20-4280-9946-68656eb1f7fa.png/v1/fill/w_1024,h_555,strp/movie_scene_study_n_1___natalie_portman___closer_by_amaelysz_dbmzhv0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU1IiwicGF0aCI6IlwvZlwvNzk2YzViNzktNjY4ZC00Zjg2LThlYTQtMDU5ZGVhNDg5MzZhXC9kYm16aHYwLTdhZjg3ZWFjLWZhMjAtNDI4MC05OTQ2LTY4NjU2ZWIxZjdmYS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zmANmpngcPLvvARotEYMV94U8qsA96ItBN-FznajuPY" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
       <img src="https://www.residentadvisor.net/images/events/flyer/2019/9/es-0927-1310490-1464261-front.jpg" class="d-block w-100" alt="..."></img> 
    </div>
  </div>
 
</div>
              </React.Fragment>
              )
              }}
              export default Slider