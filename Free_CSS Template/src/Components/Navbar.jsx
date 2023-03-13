import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      {/* <!-- Nav Bar Start --> */}
        <div className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container-fluid">
                <NavLink to="/index" className="navbar-brand">Burger <span>King</span></NavLink>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <NavLink to="/index" className="nav-item nav-link active">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/feature" className="nav-item nav-link">Feature</NavLink>
                        <NavLink to="/team" className="nav-item nav-link">Chef</NavLink>
                        <NavLink to="/menu" className="nav-item nav-link">Menu</NavLink>
                        <NavLink to="/booking" className="nav-item nav-link">Booking</NavLink>
                        <div className="nav-item dropdown">
                            <NavLink to="/blog" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</NavLink>
                            <div className="dropdown-menu">
                                <NavLink to="/" className="dropdown-item">Blog Grid</NavLink>
                                <NavLink to="/single" className="dropdown-item">Blog Detail</NavLink>
                            </div>
                        </div>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Nav Bar End --> */}
    </div>
  )
}

export default Navbar
