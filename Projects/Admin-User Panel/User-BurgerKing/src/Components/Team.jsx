import React from 'react'
import { NavLink } from 'react-router-dom'

function Team() {
  return (
    <div>
        {/* <!-- Team Start --> */}
        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Team</p>
                    <h2>Our Master Chef</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-1.jpg" alt="Image"/>
                                <div className="team-social">
                                    <NavLink to="https://www.twitter.com"><i className="fab fa-twitter"></i></NavLink>
                                    <NavLink to="/www.facebook.com"><i className="fab fa-facebook-f"></i></NavLink>
                                    <NavLink to="/www.linkedin.com"><i className="fab fa-linkedin-in"></i></NavLink>
                                    <NavLink to="/www.instagram.com"><i className="fab fa-instagram"></i></NavLink>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Adam Phillips</h2>
                                <p>CEO, Co Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-2.jpg" alt="Image"/>
                                <div className="team-social">
                                    <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.instagram.com/accounts/login/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Dylan Adams</h2>
                                <p>Master Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-3.jpg" alt="Image"/>
                                <div className="team-social">
                                    <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Jhon Doe</h2>
                                <p>Master Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-4.jpg" alt="Image"/>
                                <div className="team-social">
                                    <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Josh Dunn</h2>
                                <p>Master Chef</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}
      
    </div>
  )
}

export default Team
