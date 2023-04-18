import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Header.css'
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" aria-current="page" to="/about">About</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link text-dark" aria-current="page" to="/skills">Skills</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link text-dark" aria-current="page" to="/project">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" aria-current="page" to="/contact">Contact</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
