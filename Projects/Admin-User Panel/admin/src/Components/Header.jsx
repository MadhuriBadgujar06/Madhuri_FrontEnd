import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function Header() {
    const redirect =useNavigate();

    useEffect(() => {
      if(!(localStorage.getItem('aname')))
      {
        return redirect('/')
      }
    }, []);

    const logout=()=>{
        localStorage.removeItem('aname');
        localStorage.removeItem('aemail');
        toast.success("Logout Success");
        return redirect("/")
    }
  return (
    <div>
       <nav class="navbar navbar-default navbar-cls-top " role="navigation" style={{marginBottom: "0"}}>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">COMPANY NAME</a>
            </div>

            <div className="header-right">

                <a href="message-task.html" className="btn btn-info" title="New Message"><b>30 </b><i class="fa fa-envelope-o fa-2x"></i></a>
                <a href="message-task.html" className="btn btn-primary" title="New Task"><b>40 </b><i class="fa fa-bars fa-2x"></i></a>
                <a href="login.html" className="btn btn-danger" title="Logout"><i class="fa fa-exclamation-circle fa-2x"></i></a>
                <a href="javascript:void(0)" className="btn btn-danger" onClick={logout} title="Logout"><i class="fa fa-exclamation-circle fa-2x"></i></a>
                <NavLink to="/"  onClick={logout}><i className="fa fa-desktop "></i>LogOut </NavLink>
            </div>
        </nav>
        {/* <!-- /. NAV TOP  --> */}
        <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
                <ul class="nav" id="main-menu">
                    <li>
                        <div className="user-img-div">
                            <img src="assets/img/user.png" className="img-thumbnail" />

                            <div className="inner-text">
                                {(localStorage.getItem('aname')).toUpperCase()}
                            <br />
                                <small>Last Login : 2 Weeks Ago </small>
                            </div>
                        </div>

                    </li>


                    <li>
                        <NavLink className="active-menu" to="/dashboard"><i class="fa fa-dashboard "></i>Dashboard</NavLink>
                    </li>
                   
                   
                    <li>
                        <NavLink to="/table"><i className="fa fa-flash "></i>Data Tables </NavLink>
                        
                    </li>
                     <li>
                        <a href="#"><i className="fa fa-bicycle "></i>User <span class="fa arrow"></span></a>
                         <ul className="nav nav-second-level">
                           
                            <li>
                                <NavLink to="/mnguser"><i className="fa fa-desktop "></i>Manage User </NavLink>
                            </li>
                            </ul>
                            <a href="#"><i className="fa fa-bicycle "></i>Employee <span class="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                            <li>
                                <NavLink to="/addemployee"><i className="fa fa-desktop "></i>AddEmployee </NavLink>
                            </li>
                            <li>
                                <NavLink to="/mngemployee"><i className="fa fa-desktop "></i>Manage Employee </NavLink>
                            </li>
                           
                        </ul>
                    </li>
                   
                    <li>
                        <NavLink to="/login"><i className="fa fa-sign-in "></i>Login Page</NavLink>
                    </li>
                                      
                    
                </ul>

            </div>

        </nav>

    </div>
  )
}

export default Header
