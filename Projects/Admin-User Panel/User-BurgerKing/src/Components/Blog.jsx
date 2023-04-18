import React from 'react'
import Food_Blog from './Food_Blog'

function Blog() {
  return (
    <div>
      {/* <!-- Blog Start --> */}
        <div className="blog">
            <div className="container">
                <Food_Blog/>
                <div className='row'>
                    <div className="col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-3.jpg" alt="Blog"/>
                            </div>
                            <div className="blog-content">
                                <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                                <div className="blog-meta">
                                    <p><i className="far fa-user"></i>Admin</p>
                                    <p><i className="far fa-list-alt"></i>Food</p>
                                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                    <p><i className="far fa-comments"></i>10</p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte
                                    </p>
                                    <a classname="btn custom-btn" href="/">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-4.jpg" alt="Blog"/>
                            </div>
                            <div className="blog-content">
                                <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                                <div className="blog-meta">
                                    <p><i className="far fa-user"></i>Admin</p>
                                    <p><i className="far fa-list-alt"></i>Food</p>
                                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                    <p><i className="far fa-comments"></i>10</p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte
                                    </p>
                                    <a classname="btn custom-btn" href="/">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <ul className="pagination justify-content-center">
                            <li classname="page-item disabled"><a classname="page-link" href="/#">Previous</a></li>
                            <li classname="page-item"><a classname="page-link" href="/#">1</a></li>
                            <li classname="page-item active"><a classname="page-link" href="/#">2</a></li>
                            <li classname="page-item"><a classname="page-link" href="/#">3</a></li>
                            <li classname="page-item"><a classname="page-link" href="/#">Next</a></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
</div>        
  )
}

export default Blog
