import React, { useState,useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function Edit_profile() {
  const [data, setData] = useState([]);
  const redirect=useNavigate();

  useEffect(() => {
    if(!(localStorage.getItem("name")))
    {
      redirect("/")
      
    }
    
  }, []);
  const {id}=useParams();
    const [formValue, setformValue] = useState({
        name:"",
        mobile:"",
        email:"",
        photo:"",
        password:""
    });
useEffect(() => {
  fetchData();
}, []);
    

const fetchData=async()=>{

  const res=await axios.get(`http://localhost:3000/user/${id}`)
  setformValue({...formValue,name:res.data.name,email:res.data.email,mobile:res.data.mobile,password:res.data.password,photo:res.data.photo})
  setData(res.data)
  
}
const onchange=(e)=>{
      setformValue({...formValue,[e.target.name]:e.target.value})
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

    const update=async(e)=>{
      e.preventDefault();
      const res=await axios.patch(`http://localhost:3000/user/${localStorage.getItem("id")}`,formValue)
      setformValue({...formValue,name:"",email:"",password:"",photo:"",mobile:""});
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("photo",res.data.photo)
      redirect("/home")
    }
  return (
    <div>
        <div>
      <div className="p-3 container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
            
        <form action="" className="border border-5 form p-5">
            <h1 className="text-center p-3">Update Profile</h1>
        <div className="mb-3 ">
          
          <input
            type="text"
            className="form-control"
            name="name" value={formValue.name}
            onChange={onchange}
            placeholder='name'
          />
        </div>
        <div className="mb-3">
          <input type="number"
            name="mobile"
            value={formValue.mobile}
            onChange={onchange}
            className="form-control"
           placeholder='mobile'
          />
          
        </div>
        <div className="mb-3 ">
          <input
            type="email"
            name="email"
            value={formValue.email}
            onChange={onchange}
            className="form-control"    
            placeholder='email'        
          />
        </div>
        <div className="mb-3 ">
          <input
            type="password"
            name="password"
            placeholder='password'
            value={formValue.password}
            onChange={onchange}
            className="form-control"            
          />
        </div>
        <div className="mb-3 ">
          <input
            type="url"
            name="photo"
            placeholder='Profile Url'
            value={formValue.photo}
            onChange={onchange}
            accept="image/png image/jpg"
            className="form-control"            
          />
        </div>
        
        <button type="sumbit" onClick={update} className="btn btn-warning">Update</button>
        </form>
      </div>
    </div>
    </div>
        </div>
    </div>
  )
}

export default Edit_profile
