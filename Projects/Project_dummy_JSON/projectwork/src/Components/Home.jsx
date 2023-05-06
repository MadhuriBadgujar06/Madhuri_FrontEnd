import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Data from "./Data";

function Home() {
  const [data, setData] = useState([]);
  const redirect = useNavigate()

  useEffect(() => {
    if(!(localStorage.getItem("name")))
    {
      redirect("/")
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`https://dummyjson.com/products`);
    console.log(res.data.products);
    setData(res.data.products);
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row p-3">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/e9bbb07081c79d7e.jpg?q=50"className="p-4 img-fluid rounded"  alt="" />
          {
          data.map((item) => {
            return (
              <div className="col-md-3" key={item.id}>
              <Data id={item.id} title={item.title} descr={item.description} price={item.price}  images={item.images[0]}/>
              </div>
            );
          })}
      </div>
      </div>
    
  );
}

export default Home;
