import React, { Component } from 'react';
import './contact.css'


class Contact extends Component{
    render(){
        return(
<React.Fragment> 
    <div className="contact offset-3">
        <div className="title offset-2">
            <p>_______________</p>
            <h1>Contacto</h1>
        </div>
       <a target="_blank" href="https://github.com/luisaromero"><img src="https://www.freeiconspng.com/uploads/github-logo-icon-30.png"></img></a>
       <a  target="_blank" href="https://www.linkedin.com/in/luisa-romero-cotrena"> <img src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Free-Download-PNG.png"></img></a>
      <a  target="_blank" href=""> <img src="http://asociacionfilio.es/wp-content/uploads/2019/01/envelope_mail_icon-icons.com_66119.png"></img></a>
    </div>
</React.Fragment>
)
} 
}
export default Contact;