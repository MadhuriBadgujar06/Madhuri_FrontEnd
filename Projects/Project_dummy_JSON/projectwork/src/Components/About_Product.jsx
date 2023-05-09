import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';   


function About_Product() {
  const {id}=useParams();
   const [product, setProduct] = useState({})
   const redirect = useNavigate();
   
  useEffect(()=>{
    localStorage.setItem("product_id",id)
    console.log(id)
     fetchdata();
  },
  [])
  const fetchdata=async(id)=>{
     const res=await axios.get(`http://localhost:3000/product/${localStorage.getItem("product_id")}`);
     console.log(res)
     console.log(res)
     setProduct(res.data);
  }
  return (
    <div className='container'>
      <div className="row p-3">
        <div className="col-md-6 offset-md-3">
        <div className="card p-2 rounded shadow border form border-3" >
            <h2 className='text-center p-2'>{(product.title)}</h2>
                <img src={product.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{(product.title)}</h5>
                  <p className="card-title">{(product.description)}</p>
                  <p className="card-title">Category : {(product.category)}</p>
                  <p className="card-title">Discount : {(product.discountPercentage)}</p>
                  <p className="card-title">Stock : {(product.stock)}</p>
                  <p className="card-title">Rating : {(product.rating)}</p>
                  <p className="card-text">Brand : {(product.brand)}</p>
                  <a href="#" className="btn" >

                  Now Buy Only at &#x24;{product.price}</a>
                  <a href="#" className="btn my-3" onClick={()=>{redirect(`/edit_product/${product.id}`)}} >

                  Edit Product
                  
                  </a>
               
        </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default About_Product
