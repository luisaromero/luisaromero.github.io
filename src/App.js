import React from 'react';
import '././App.css';



class App extends React.Component{
  render(){
      return(
     
        <React.Fragment>
          <nav className="navbar navbar-expand-sm navbar-dark bg-primary sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
             <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Features</a>
      <a className="nav-item nav-link" href="#">Pricing</a>
      </div>
      </div>
          </nav>
      
          </React.Fragment>
      )}
}

export default App;
