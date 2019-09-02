import React, { Component } from 'react';
import '././footer.css';


class Footer extends Component {
    render(){
    return (
     <footer className="footer text-center">
         
         <li class='highlight'>
                <a class="fa-stack fa-1x" data-toggle="tooltip" title="Linkedin" data-placement="top" href="https://www.linkedin.com/in/brucewilliamyoung" target="_blank"><i class="fa fa-linkedin-square fa-stack-2x"></i></a>
            </li>
            
             <div className="copyright"><p>©  Copyright All rigths</p>
            </div>
     </footer>
    )
    }
}
export default Footer