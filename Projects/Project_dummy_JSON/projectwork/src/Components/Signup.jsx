import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const redirect = useNavigate();
    const [formValue, setformValue] = useState({
        name:"",
        email:"",
        password:"",
        mobile:"",
        photo:""
}
    );
    const onchange=(e)=>{
        setformValue({...formValue,status:"unblock",id:new Date().getTime().toString(),[e.target.name]:e.target.value})
        console.log(formValue)
    }

    const validation = () => {
      let result = true;
      if (formValue.email === null || formValue.email === "") {
        result = false;
        alert("Email Required..");
      }
      if (formValue.password === null || formValue.password === "") {
        result = false;
        alert("Password Required");
      }
      if (formValue.name === null || formValue.name === "") {
        result = false;
        alert("Name Required..");
      }
      if (formValue.mobile === null || formValue.mobile === "") {
        result = false;
        alert("Mobile Required");
      }
      if (formValue.photo === null || formValue.photo === "") {
        result = false;
        alert("Image Url Required..");
      }
      
      return result;
    };

    const submit =async(e)=>{
      e.preventDefault();
      if(validation())
      {
        const res= await axios.post(`http://localhost:3000/user`,formValue);
        alert("Signup Successfull");
        redirect("/")
        // console.log(formValue)
        setformValue({...formValue,name:"",mobile:"",password:"",email:""})

    }
    }
  return (
    <div>
      <div>
      <div className="p-5 container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
            
        <form action="" className="border border-2 p-5">
            <h1 className="text-center p-5">SignUp</h1>
        <div className="mb-3 ">
          <input
            type="text"
            placeholder='Name'
            className="form-control"
            name="name" value={formValue.name}
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <input type="number"
            name="mobile"
            placeholder='Mobile'
            value={formValue.mobile}
            onChange={onchange}
            className="form-control"
           
          />
          
        </div>
        <div className="mb-3 ">
          <input
            type="email"
            placeholder='Email'
            name="email"
            value={formValue.email}
            onChange={onchange}
            className="form-control"            
          />
        </div>
        <div className="mb-3 ">
          <input
            type="password"
            placeholder='Password'
            name="password"
            value={formValue.password}
            onChange={onchange}
            className="form-control"            
          />
        </div>
        <div className="mb-3 ">
          <input
            type="url"
            placeholder='Profile Url'
            name="photo"
            value={formValue.photo}
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
        </div>
    </div>
  )
}

export default Signup
