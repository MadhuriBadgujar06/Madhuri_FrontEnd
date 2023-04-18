import React from 'react'
import AboutUs from './AboutUs'
import Food from './Food'
import { Outlet } from 'react-router-dom'

function About() {

  return (
    <div>
     <Outlet/>      
        
      {/* <!-- Food Start --> */}
        <Food/>
        {/* <!-- Food End --> */}
        

        {/* <!-- About Start --> */}
       <AboutUs/>
        {/* <!-- About End --> */}
        
        
        {/* <!-- Video Modal Start--> */}
        <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>        
                        {/* <!-- 16:9 aspect ratio --> */}
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        {/* <!-- Video Modal End --> */}

    </div>
  )
}

export default About
