import React from 'react'

function Book_table() {
  return (
    <div>
      <div className="booking">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="booking-content">
                            <div className="section-header">
                                <p>Book A Table</p>
                                <h2>Book Your Table For Private Dinners & Happy Hours</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="booking-form">
                            <form>
                                <div className="control-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Name" required="required" />
                                        <div className="input-group-append">
                                            <div className="input-group-text"><i className="far fa-user"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Email" required="required" />
                                        <div className="input-group-append">
                                            <div className="input-group-text"><i className="far fa-envelope"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Mobile" required="required" />
                                        <div className="input-group-append">
                                            <div className="input-group-text"><i className="fa fa-mobile-alt"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="input-group date" id="date" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input" placeHolder="Date" data-target="#date" data-toggle="datetimepicker"/>
                                        <div className="input-group-append" data-target="#date" data-toggle="datetimepicker">
                                            <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="input-group time" id="time" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input" placeHolder="Time" data-target="#time" data-toggle="datetimepicker"/>
                                        <div className="input-group-append" data-target="#time" data-toggle="datetimepicker">
                                            <div className="input-group-text"><i className="far fa-clock"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="input-group">
                                        <select className="custom-select form-control">
                                            <option selected>Guest</option>
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guest</option>
                                            <option value="3">3 Guest</option>
                                            <option value="4">4 Guest</option>
                                            <option value="5">5 Guest</option>
                                            <option value="6">6 Guest</option>
                                            <option value="7">7 Guest</option>
                                            <option value="8">8 Guest</option>
                                            <option value="9">9 Guest</option>
                                            <option value="10">10 Guest</option>
                                        </select>
                                        <div className="input-group-append">
                                            <div className="input-group-text"><i className="fa fa-chevron-down"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn custom-btn" type="submit">Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book_table
