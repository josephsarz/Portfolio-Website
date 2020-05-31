import React from 'react';
import './App.css';
import Typist from 'react-typist';

function App() {
  return (
    <body>

  
    <div id="container">

    <div className="typewriter">
      <Typist>
        Hi, My name is <span className="highlight">Femi</span>.
        <Typist.Backspace count={20} delay={1000} />
        <Typist.Delay ms={750} />
        I love to <Typist.Delay ms={500} /><span className="highlight">eat</span>.
        <Typist.Backspace count={4} delay={1000} />
        <Typist.Delay ms={750} /><span className="highlight">watch anime</span>.
        <Typist.Backspace count={12} delay={1000} />
        <Typist.Delay ms={750} /><span className="highlight">code</span>.
      </Typist>
    </div>
     <div className="details">
      <h1 className="name-placeholder"> Aghedo Joseph Femi </h1>

        <p className="description-placeholder">
          <a href="https://github.com/josephsarz" target="_blank" ><i className="fa fa-github" aria-hidden="true"></i> Github </a> | 
          <a href="https://www.linkedin.com/in/aghedo-joseph/" target="_blank" ><i class="fa fa-linkedin" aria-hidden="true"></i> LinkedIn </a> | 
          <a href="mailto:aghedojoe007@gmail.com?subject=Website Contact"> <i class="fa fa-envelope-o" aria-hidden="true"></i> aghedojoe007@gmail.com </a>
          <br></br>
          Software Engineer
        </p> 

        </div>
    </div>
    </body>
  );
}


export default App;
