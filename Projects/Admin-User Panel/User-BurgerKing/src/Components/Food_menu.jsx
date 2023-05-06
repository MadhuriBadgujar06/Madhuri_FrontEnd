import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

function Food_menu() {
   
    const [item, setItem] = useState([]);
    const [item1, setItem1] = useState([]);
    const [item2, setItem2] = useState([]);
   const [data, setData] = useState("burger");
    useEffect(() => {
      fetchdata();
      fetchdata1();
      fetchdata2();
    }, []);

    const fetchdata=async()=>{
        const res= await axios.get(`http://localhost:3000/burger`);
        setItem(res.data)
        console.log(item)
    }
    const fetchdata1=async()=>{
    const res= await axios.get(`http://localhost:3000/snack`);
    setItem1(res.data)
    console.log(res.data)
}
const fetchdata2=async()=>{
    const res= await axios.get(`http://localhost:3000/beverages`);
    setItem2(res.data)
    console.log(res.data)
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
                            <a className="nav-link active" data-toggle="pill"id="burger" onClick={()=>{setData("burger")}} href="/#burgers">Burgers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill"id="snack" href="/#snacks"onClick={()=>{setData("snack")}}>Snacks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="/#beverages" onClick={()=>{setData("beverages")}}>Beverages</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="burgers" className="container tab-pane active">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    {(()=>{
                                       if(data==="burger"){
                                        return(<>
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
                                    })
                                        }
                                        </>)
                                       }
                                       if(data==="snack")
                                       {
                                        return(<>
                                        {
                                            item1.map((elem)=>{
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
                                    })

                                        }
                                        </>)
                                       }

                                      if(data==="beverages")
                                       {
                                        return(<>
                                        {
                                            item2.map((elem)=>{
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
                                    })

                                        }
                                        </>)
                                       }

                                    

                                    })()
                                        
                                    
                                    }
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <img src="img/menu-burger-img.jpg" alt="Image"/>
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

export default Food_menu
