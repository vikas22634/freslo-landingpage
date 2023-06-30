import React from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div className="NavbarHome">
      <nav className="navbar navbar-expand-lg navbar-dark bg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">How It's Work</a></li>
            <li><a className="dropdown-item" href="/">add another link</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

Navbar.propTypes ={
    title : PropTypes.string.isRequired,
}