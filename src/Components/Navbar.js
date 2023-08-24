import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    
    <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{props.title}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{props.aboutxt}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
        <div class={`form-check form-switch  mr-6 text-${props.mode ==='light'?'dark':'light'}`}>
          <input class="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>

      </div>
    </div>
  </nav>
  );
  
}


    // Define your prop types here
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        aboutxt: PropTypes.number.isRequired
        // Define more prop types as needed
    }

// Navbar.propTypes = {
//     title: propTypes.string,
//     aboutxt: propTypes.string
// }
