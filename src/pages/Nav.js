import React from 'react'
import {Link} from 'react-router-dom'
import PDF from '../images/Nathan Stein Resume.pdf'
import Contact from './Contact'



export default function Nav({currentPage, handlePageChange, toggleModal}) {
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
          <Link class="nav-link aboot" to='/about'
          
          
          >About
            <span class="visually-hidden">(current)</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link werk" to='/works'
          

          >Work</Link>
        </li>
        <li class="nav-item">
          {/* <Link to={'/contact'} class="nav-link conB" data-toggle="modal" data-target="#exampleModal"
          onClick={toggleModal}>Contact Me</Link> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href={PDF} target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
      </ul>

    </div>
  </div>
  </div>
</nav>
</React.Fragment>
  )
}
