import React from 'react'
import { useEffect,useState } from 'react';
import { redirect, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit_Product() {
const {id}=useParams();
const redirect = useNavigate();
const [formValue, setFormValue] = useState({
    title:"",description:"",url:"",price:""
});

useEffect(() => {
  fetchdata();
}, []);

const fetchdata=async()=>{
    console.log(id)
    const res=await axios.get(`http://localhost:3000/product/${id}`);
    setFormValue({...formValue,title:res.data.title,description:res.data.description,url:res.data.url,price:res.data.price})
}

const onchange=(e)=>{
    setFormValue({...formValue,[e.target.name]:[e.target.value]})
}

const validation = () => {
  let result = true;
  if (formValue.email === null || formValue.email === "") {
    result = false;
    toast.error("Email Required..");
  }
  if (formValue.password === null || formValue.password === "") {
    result = false;
    toast.error("Password Required");
  }
  if (formValue.name === null || formValue.name === "") {
    result = false;
    toast.error("Name Required..");
  }
  if (formValue.mobile === null || formValue.mobile === "") {
    result = false;
    toast.error("Mobile Required");
  }
  if (formValue.photo === null || formValue.photo === "") {
    result = false;
    toast.error("Image Url Required..");
  }
  
  return result;
};

const submit=async(e)=>{
  e.preventDefault();
  if(validation())
  {
    const res= await axios.patch(`http://localhost:3000/product/${id}`,formValue)
    setFormValue({...formValue,title:"",description:"",url:"",price:""});
    toast.success("Product Updated Successfully..")
    redirect("/home")

}
}
  return (
    <div className='container'>
      <div className="row p-3">
            <div className="col-md-6 offset-md-3">
            
        <form action="" className="border form border-5 p-3">
            <h1 className="text-center p-4">Update Product</h1>
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
            name="description"
            value={formValue.description}
            onChange={onchange}
            className="form-control"
           
          />
          
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Price
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
            name="url"
            value={formValue.url}
            onChange={onchange}
            accept="image/png image/jpg"
            className="form-control"            
          />
        </div>
        
        <button type="sumbit" onClick={submit} className="btn btn-warning">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Edit_Product
