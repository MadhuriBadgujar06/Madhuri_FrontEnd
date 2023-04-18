import React from 'react'
import Team from './Team'
import Book_table from './Book_table'
import AboutUs from './AboutUs'
import Food from './Food'
import Feature from './Feature'
import Food_menu from './Food_menu'
import Contact from './Contact'
import Food_Blog from './Food_Blog'
function Index() {
  return (
    <div>  
        
        
        {/* <!-- Booking Start --> */}
        <Book_table/>
        {/* <!-- Booking End --> */}
        

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
        
        
        {/* <!-- Feature Start --> */}
       <Feature/>
        {/* <!-- Feature End --> */}
        
        
        {/* <!-- Food Start --> */}
       <Food/>
        {/* <!-- Food End --> */}
        
        
        {/* <!-- Menu Start --> */}
     <Food_menu/>
        {/* <!-- Menu End --> */}

        {/* Team Component start*/}
      <Team/>  
        {/* Team Component End */}
        {/* <!-- Testimonial Start --> */}
        <div className="testimonial">
            <div className="container">
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-1.jpg" alt="Image"/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-2.jpg" alt="Image"/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-3.jpg" alt="Image"/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-4.jpg" alt="Image"/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testimonial End --> */}
        
        
        {/* <!-- Contact Start --> */}
        <Contact/>
        {/* <!-- Contact End --> */}


        {/* <!-- Blog Start --> */}
       
       <Food_Blog/>
               {/* <!-- Blog End --> */}


    </div>
  )
}

export default Index
