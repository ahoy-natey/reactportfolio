import React from 'react'
import Selfie from '../images/selfie.jpeg'


export default function home() {
  return (
    <React.Fragment>
        
  
    
    <div class="wrapper">
      <div id="about">
        <div class="boxer">
          <div class="aside" style={{backgroundImage: `url(${Selfie})`}}></div>
        </div>
        <div class="boxerP"><p>
          Hello and welcome! My name is Nate and I am a programmer.
          I enjoy the full spectrum of code, frontend and back, and am
          interested in consumer facing applications that involve machine learning.
          I am studying JavaScript and Python.

        </p></div>

      </div>
    </div>
  




  
    </React.Fragment>
  )
}
