import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

function Snack() {
   
    const [item, setItem] = useState([]);

    useEffect(() => {
      fetchdata();
    }, []);

    const fetchdata=async()=>{
        const res= await axios.get(`http://localhost:3000/menu`);
        console.log(res.data)
        setItem(res.data)
        console.log(item)
    }
  return (
    <div>
         <div className="menu">
            <div className="container">
                <div className="section-header text-center">
                    <p>Food Menu</p>
                    <h2>Delicious Food Menu</h2>
                </div>
                <div className="menu-tab">
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="pill" href="/#burgers">Burgers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="/#snacks">Snacks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="/#beverages">Beverages</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="burgers" className="container tab-pane active">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    {
                                    item.map((elem)=>{
                                        return(
                                    <div className="menu-item" key="id">
                                        <div className="menu-img">
                                            <img src="img/menu-burger.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>{elem.title}</span> <strong>${elem.price}</strong></h3>
                                            <p>{elem.desc}</p>
                                        </div>
                                    </div> 
                                    )
                                    })}
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <img src="img/menu-burger-img.jpg" alt="Image"/>
                                </div>
                            </div>
                        </div>
                        <div id="snacks" className="container tab-pane fade">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-snack.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Corn Tikki - Spicy fried Aloo</span> <strong>$15.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-snack.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Bread besan Toast</span> <strong>$35.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-snack.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Healthy soya nugget snacks</span> <strong>$20.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-snack.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Tandoori Soya Chunks</span> <strong>$30.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <img src="img/menu-snack-img.jpg" alt="Image"/>
                                </div>
                            </div>
                        </div>
                        <div id="beverages" className="container tab-pane fade">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-beverage.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Single Cup Brew</span> <strong>$7.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-beverage.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Caffe Americano</span> <strong>$9.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-beverage.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Caramel Macchiato</span> <strong>$15.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-beverage.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Standard black coffee</span> <strong>$8.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-beverage.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Standard black coffee</span> <strong>$12.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <img src="img/menu-beverage-img.jpg" alt="Image"/>
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

export default Snack
