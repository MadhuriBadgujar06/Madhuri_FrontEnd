import React from 'react'
import { NavLink } from 'react-router-dom'

function Food() {
  return (
    <div>
       <div className="food">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="food-item">
                            <i className="flaticon-burger"></i>
                            <h2>Burgers</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem. 
                            </p>
                            <NavLink to="/menu">View Menu</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="food-item">
                            <i className="flaticon-snack"></i>
                            <h2>Snacks</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem. 
                            </p>
                            <NavLink to="/menu">View Menu</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="food-item">
                            <i className="flaticon-cocktail"></i>
                            <h2>Beverages</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem. 
                            </p>
                            <NavLink to="/menu">View Menu</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )

  }
export default Food
