import React from 'react'



export default function Nav({currentPage, handlePageChange}) {
  return (
    <React.Fragment>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark header">
<div class="container-fluid">
  <div class="navbar-brand" id="title">Steins Designs</div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="push">
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link aboot" href="#home"
          onClick={()=> handlePageChange('Home')}
          >About
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link werk" href="#works"
          onClick={()=> handlePageChange('Works')}
          >Work</a>
        </li>
        <li class="nav-item">
          <div class="nav-link conB" data-toggle="modal" data-target="#exampleModal">Contact Me</div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./nathan-stein-1429370.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
      </ul>

    </div>
  </div>
  </div>
</nav>
</React.Fragment>
  )
}
