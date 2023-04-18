import React from 'react'
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const redirect = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('id'))
    {
        return redirect("/")
    }
  })

    const [formValue, setFormValue] = useState({
        name:"",
        mobile:"",
        email:"",
        password:""
    }
    );

    const Onchanged=(e)=>{
        setFormValue({...formValue,status:"Unblock",id:new Date().getTime().toString(),[e.target.name]:e.target.value})
        console.log(formValue)
    }

    const validation = ()=>{
        const res= true;

        if(formValue.name===""||formValue.name===null)
        {
            res = false;
            toast.error("Name Required")
            
        }
        if(formValue.email===""||formValue.email===null)
        {
            res = false;
            toast.error("email Required")
        }
        if(formValue.password===""||formValue.password===null)
        {
            res = false;
            toast.error("password Required")
        }
        if(formValue.mobile===""||formValue.mobile===null)
        {
            res = false;
            toast.error("mobile Required")
        }
        return res;
    }
    const OnSubmit=async (e)=>{
        e.preventDefault();
        if(validation())
        {
            const res = await axios.post(`http://localhost:3000/user`,formValue);
            setFormValue({...formValue,name:"",email:"",password:"",mobile:""});

            toast.success("Registration Done");
            return redirect('/')
        }
    }
  return (
    <div>
         <div>
  <div className='container p-5'>
    <div >
      <div classname="row">
        <div classname="col-md-6 offset-md-3">
          <h1 classname="page-head-line my-5"> SignUp here</h1>
         </div>
      </div>
      {/* ROW */}
      <div classname="row">
        <div classname="col-md-6 offset-md-3 col-sm-12 col-xs-12">
          <div classname="panel panel-info">
            
            <div classname="panel-body">
              <form role="form">
                <div classname="form-group">
                  <label>Enter Name</label>
                  <input className="form-control"name="name" value={formValue.name} onChange={Onchanged} type="text" />
                  
                </div>
                <div classname="form-group">
                  <label>Enter Mobile</label>
                  <input className="form-control"name="mobile" value={formValue.mobile} onChange={Onchanged} type="number" />
                  <p classname="help-block">we won't share your number with anyone.</p>
                </div>
                <div classname="form-group">
                  <label>Enter Email</label>
                  <input className="form-control"name="email" value={formValue.email} onChange={Onchanged} type="email" />
                  
                </div>
                <div classname="form-group">
                  <label>Enter Password</label>
                  <input type="password" className="form-control"name="password" value={formValue.password} onChange={Onchanged}/>
                  
                </div>
                
                <button type="submit"className='p-2 my-3 btn btn-dark' onClick={OnSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ROW */}
      <div classname="row">
        <div classname="col-md-12 col-sm-12 col-xs-12 p-3">
          <div classname="panel panel-primary">
            
            
          </div>
        </div>
      </div>
    </div>
    {/* PAGE INNER */}
  </div>
  {/* PAGE WRAPPER */}
</div>

    </div>
  )
}

export default SignUp
