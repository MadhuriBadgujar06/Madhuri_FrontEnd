import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Add_Product() {
     const redirect= useNavigate();
    const [formValue, setFormValue] = useState({
        title:"",
        descr:"",
        price:"",
        img :""
    });
    useEffect(() => {
      if(!(localStorage.getItem("name")))
      {
        redirect("/")
      }
  
    }, []);
    const onchange=(e)=>{
        setFormValue({...formValue,id:new Date().getTime().toString(),[e.target.name]:e.target.value})
    }

    const submit=async()=>{
       const res =await axios.post(`https://dummyjson.com/products`,formValue);
       setFormValue({...formValue,title:"",descr:"",price:"",img:""}) 
       alert("Data Submitted")
       redirect('/home')
    }
    
  return (
    <div>
      <div className="container">
        <div className="row p-5">
            <div className="col-md-6 offset-md-3">
            
        <form action="" className="border border-2 p-5">
            <h1 className="text-center p-5">Insert Product</h1>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title" value={formValue.title}
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <input type="text"
            name="descr"
            value={formValue.descr}
            onChange={onchange}
            className="form-control"
           
          />
          
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            price
          </label>
          <input
            type="number"
            name="price"
            value={formValue.price}
            onChange={onchange}
            className="form-control"            
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Image Url
          </label>
          <input
            type="url"
            name="price"
            value={formValue.img}
            onChange={onchange}
            className="form-control"            
          />
        </div>
        
        <button type="sumbit" onClick={submit} className="btn btn-warning">Submit</button>
        </form>
      </div>
    </div>
    </div>
        </div>
  );
}

export default Add_Product;
