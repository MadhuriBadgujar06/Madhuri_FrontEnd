import React from 'react'

function DashBoard() {
  return (
    <div>
       <div id="page-wrapper">
  <div id="page-inner">
    <div className="row">
      <div className="col-md-12">
        <h1 className="page-head-line">DASHBOARD</h1>
        <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
      </div>
    </div>
    {/* /. ROW  */}
    <div className="row">
      <div className="col-md-4">
        <div className="main-box mb-red">
          <a href="#">
            <i className="fa fa-bolt fa-5x" />
            <h5>Zero Issues</h5>
          </a>
        </div>
      </div>
      <div className="col-md-4">
        <div className="main-box mb-dull">
          <a href="#">
            <i className="fa fa-plug fa-5x" />
            <h5>40 Task In Check</h5>
          </a>
        </div>
      </div>
      <div className="col-md-4">
        <div className="main-box mb-pink">
          <a href="#">
            <i className="fa fa-dollar fa-5x" />
            <h5>200K Pending</h5>
          </a>
        </div>
      </div>
    </div>
{/* /. ROW  */}
<div className="row">
  <div className="col-md-8">
    <div className="row">
      <div className="col-md-12">
        <div id="reviews" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <div className="col-md-10 col-md-offset-1">
                <h4><i className="fa fa-quote-left" />Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i className="fa fa-quote-right" /></h4>
                <div className="user-img pull-right">
                  <img src="assets/img/user.gif" alt className="img-u image-responsive" />
                </div>
                <h5 className="pull-right"><strong className="c-black">Lorem Dolor</strong></h5>
              </div>
            </div>
            <div className="item">
              <div className="col-md-10 col-md-offset-1">
                <h4><i className="fa fa-quote-left" />Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i className="fa fa-quote-right" /></h4>
                <div className="user-img pull-right">
                  <img src="assets/img/user.png" alt className="img-u image-responsive" />
                </div>
                <h5 className="pull-right"><strong className="c-black">Lorem Dolor</strong></h5>
              </div>
            </div>
            <div className="item">
              <div className="col-md-10 col-md-offset-1">
                <h4><i className="fa fa-quote-left" />Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i className="fa fa-quote-right" /></h4>
                <div className="user-img pull-right">
                  <img src="assets/img/user.gif" alt className="img-u image-responsive" />
                </div>
                <h5 className="pull-right"><strong className="c-black">Lorem Dolor</strong></h5>
              </div>
            </div>
          </div>
          {/*INDICATORS*/}
          <ol className="carousel-indicators">
            <li data-target="#reviews" data-slide-to={0} className="active" />
            <li data-target="#reviews" data-slide-to={1} />
            <li data-target="#reviews" data-slide-to={2} />
          </ol>
          {/*PREVIUS-NEXT BUTTONS*/}
        </div>
      </div>
    </div>
    {/* /. ROW  */}
    <div className="panel panel-default">
  <div id="carousel-example" className="carousel slide" data-ride="carousel" style={{border: '5px solid #000'}}>
    <div className="carousel-inner">
      <div className="item active">
        <img src="assets/img/slideshow/1.jpg" alt />
      </div>
      <div className="item">
        <img src="assets/img/slideshow/2.jpg" alt />
      </div>
      <div className="item">
        <img src="assets/img/slideshow/3.jpg" alt />
      </div>
    </div>
    {/*INDICATORS*/}
    <ol className="carousel-indicators">
      <li data-target="#carousel-example" data-slide-to={0} className="active" />
      <li data-target="#carousel-example" data-slide-to={1} />
      <li data-target="#carousel-example" data-slide-to={2} />
    </ol>
    {/*PREVIUS-NEXT BUTTONS*/}
    <a className="left carousel-control" href="#carousel-example" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" />
    </a>
    <a className="right carousel-control" href="#carousel-example" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" />
    </a>
  </div>
</div>

  </div>

 {/* /.REVIEWS &  SLIDESHOW  */}
<div className="col-md-4">
  <div className="panel panel-default">
    <div className="panel-heading">
      Recent Chat History
    </div>
    <div className="panel-body" style={{padding: 0}}>
      <div className="chat-widget-main">
        <div className="chat-widget-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="chat-widget-name-left">
          <h4>Amanna Seiar</h4>
        </div>
        <div className="chat-widget-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="chat-widget-name-right">
          <h4>Donim Cruseia </h4>
        </div>
        <div className="chat-widget-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="chat-widget-name-left">
          <h4>Amanna Seiar</h4>
        </div>
        <div className="chat-widget-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="chat-widget-name-right">
          <h4>Donim Cruseia </h4>
        </div>
      </div>
    </div>
    <div className="panel-footer">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Enter Message" />
        <span className="input-group-btn">
          <button className="btn btn-success" type="button">SEND</button>
        </span>
      </div>
    </div>
  </div>
</div>
</div>
{/*/.Chat Panel End*/}
{/* /. ROW  */}
<div className="row">
  <div className="col-md-8">
    <div className="list-group">
      <a href="#" className="list-group-item active">
        <h4 className="list-group-item-heading">LIST GROUP HEADING</h4>
        <p className="list-group-item-text" style={{lineHeight: 3}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </a>
    </div>
    <br />
    {/* 16:9 aspect ratio */}
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src="//www.youtube.com/embed/zpOULjyy-n8?rel=0" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="panel panel-info">
      <div className="panel-heading">
        <i className="fa fa-bell fa-fw" />Notifications Panel
      </div>
      <div className="panel-body">
        <div className="list-group">
          <a href="#" className="list-group-item">
            <i className="fa fa-twitter fa-fw" />3 New Followers
            <span className="pull-right text-muted small"><em>12 minutes ago</em>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <i className="fa fa-envelope fa-fw" />Message Sent
            <span className="pull-right text-muted small"><em>27 minutes ago</em>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <i className="fa fa-tasks fa-fw" />New Task
            <span className="pull-right text-muted small"><em>43 minutes ago</em>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <i className="fa fa-upload fa-fw" />Server Rebooted
            <span className="pull-right text-muted small"><em>11:32 AM</em>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <i className="fa fa-bolt fa-fw" />Server Crashed!
            <span className="pull-right text-muted small"><em>11:13 AM</em>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <i className="fa fa-warning fa-fw" />Server Not Responding
            <span className="pull-right text-muted small"><em>10:57 AM</em>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <i className="fa fa-bolt fa-fw" />Server Crashed!
            <span className="pull-right text-muted small"><em>11:13 AM</em>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <i className="fa fa-warning fa-fw" />Server Not Responding
            <span className="pull-right text-muted small"><em>10:57 AM</em>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <i className="fa fa-shopping-cart fa-fw" />New Order Placed
            <span className="pull-right text-muted small"><em>9:49 AM</em>
            </span>
          </a>
        </div>
        {/* /.list-group */}
        <a href="#" className="btn btn-info btn-block">View All Alerts</a>
      </div>
    </div>
  </div>
</div>
{/*/.Row*/}

</div></div>
    </div>
  )
}

export default DashBoard
