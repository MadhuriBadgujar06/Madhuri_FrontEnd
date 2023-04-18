import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const redirect = useNavigate();
  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    toast.success("Logout Successful ");
    return redirect("/");
  };
  return (
    <div>
      {/* <!-- Nav Bar Start --> */}
      <div className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <NavLink to="/index" className="navbar-brand">
            Burger <span>King</span>
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto">
              <NavLink to="/" className="nav-item nav-link active">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/feature" className="nav-item nav-link">
                Feature
              </NavLink>
              <NavLink to="/about/team" className="nav-item nav-link">
                Chef
              </NavLink>
              <NavLink to="/about/menu" className="nav-item nav-link">
                Menu
              </NavLink>
              <NavLink to="/about/booking" className="nav-item nav-link">
                Booking
              </NavLink>
              <div className="nav-item dropdown">
                <NavLink
                  to="/blog"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink to="/" className="dropdown-item">
                    Blog Grid
                  </NavLink>
                  <NavLink to="/single" className="dropdown-item">
                    Blog Detail
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>

              {(() => {
                // get / print storage session
                if (localStorage.getItem("name")) {
                  return (
                    <>
                      <li className="nav-item d_none">
                        <NavLink className="nav-link" to="/profile">
                          Hii..{localStorage.getItem("name")}
                        </NavLink>
                      </li>
                      <li className="nav-item d_none login_btn">
                        <a
                          className="nav-link"
                          href="javascript:void(0);"
                          onClick={logout}
                        >
                          Logout
                        </a>
                      </li>
                    </>
                  );
                } else {
                  return (
                    <>
                      <li className="nav-item d_none login_btn">
                        <NavLink className="nav-link" to="/login">
                          Login
                        </NavLink>
                      </li>
                      <li className="nav-item d_none">
                        <NavLink className="nav-link" to="/signup">
                          SignUp
                        </NavLink>
                      </li>
                      
                      
                    </>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Nav Bar End --> */}
    </div>
  );
}

export default Navbar;
