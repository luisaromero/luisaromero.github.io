import React from 'react';
import Navbar from './modules/Navbar';
import Contacto from './modules/Contact';
import Home from './modules/Home';
import Footer from './modules//Footer';
import Projects from './modules/Projects';
import Skills from './modules/Skills';
import AboutMe from './modules/AboutMe';
import './App.css';


function App(){
      return(
        <React.Fragment>
              <Navbar/>
              <Home />
            <AboutMe />
             <Projects /> 
            <Skills />
            <Contacto/>
            <Footer/>
          </React.Fragment>
      )}

export default App;
