import React from 'react'

function Header(props) {
  return (
    <div>
       {/* <!-- Page Header Start --> */}
       
        <div className="page-header mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{props.page}</h2>
                    </div>
                    <div className="col-12">
                        <a href="">{props.heading}</a>
                        <a href="">{props.subheading}</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
       
    </div>
  )
}

export default Header
