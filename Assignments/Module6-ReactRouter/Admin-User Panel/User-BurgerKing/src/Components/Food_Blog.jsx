import React from 'react'

function Food_Blog() {
  return (
    <div>
       <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Food Blog</p>
                    <h2>Latest From Food Blog</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-1.jpg" alt="Blog"/>
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
                                    <a className="btn custom-btn" href="/">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-2.jpg" alt="Blog"/>
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
                                    <a className="btn custom-btn" href="/">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Food_Blog
