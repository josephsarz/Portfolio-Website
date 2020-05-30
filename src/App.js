import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    <div>

      {/* <div class="typewriter-text">I am a boss man.</div> */}
     
      <h1 className="name-placeholder"> Aghedo Joseph Femi </h1>

        <p className="description-placeholder">
          <a href="https://github.com/josephsarz" target="_blank" ><i className="fa fa-github" aria-hidden="true"></i> Github </a> | 
          <a href="https://www.linkedin.com/in/aghedo-joseph/" target="_blank" ><i class="fa fa-linkedin" aria-hidden="true"></i> LinkedIn </a> | 
          <a href="mailto:aghedojoe007@gmail.com?subject=Website Contact"> <i class="fa fa-envelope-o" aria-hidden="true"></i> aghedojoe007@gmail.com </a>
          <br></br>
          Software Engineer
        </p> 
    </div>
    </body>
  );
}

export default App;
