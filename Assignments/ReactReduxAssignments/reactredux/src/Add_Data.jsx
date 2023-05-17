import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import {add_data} from './Features/Users/actions'

function Add_Data() {
  const dispatch= useDispatch()
  const redirect =  useNavigate()
  const [formValue, setFormValue] = useState(
  {
    name:"",
    email:"",
    mobile:"",
    password:""
  }
 );

 useEffect(() => {
   if(!localStorage.getItem('name'))
   {
    redirect("/")
   }
 }, []);

 const onchange=(e)=>{
  setFormValue({ ...formValue, id: new Date().getTime().toString(),status:"Unblock", [e.target.name]: e.target.value })
 }

 const validation=()=>{
  let res=true;
  if(formValue.name===""||formValue.name===null)
  {
       alert("Name Required..")
       res=false;
  }
  if(formValue.email===""||formValue.email===null)
  {
       alert("Email Required..");
       res=false
  }
  if(formValue.password===""||formValue.password===null)
  {
       alert("Password Required..");
       res=false
  }
  if(formValue.mobile===""||formValue.mobile===null)
  {
       alert("Mobile Required..");
       res=false
  }
  return res
 }

 const save=(e)=>{
  e.preventDefault();
  if(validation())
  {
    dispatch(add_data(formValue))
    setFormValue({name:"",email:"",password:"",mobile:""})
    alert("Data Added")
    redirect('/')
  }
 }
  return (
    <div className='container p-5'>
   <div classname="row">
     <div classname="col-md-4 offset-md-4">
       <h1 classname="text-center"> Add User</h1>
      
   {/* ROW */}
           <form >
             <div classname="form-group">
               <label>Enter Name</label>
               <input className="form-control" name="name" value={formValue.name} onChange={onchange} type="text" />
               
             </div>
             <div classname="form-group">
               <label>Enter Mobile</label>
               <input className="form-control"name="mobile" type="number" value={formValue.mobile} onChange={onchange} />
               <p classname="help-block">we won't share your number with anyone.</p>
             </div>
             <div classname="form-group">
               <label>Enter Email</label>
               <input className="form-control"name="email" value={formValue.email} onChange={onchange} type="email" />
               
             </div>
             <div classname="form-group">
               <label>Enter Password</label>
               <input type="password" className="form-control" value={formValue.password} onChange={onchange} name="password"/>
               
             </div>
             <button type="submit" classname="btn btn-primary">Send Message </button>
             <button type="submit" onClick={save}>Submit</button>
             <NavLink className="p-3 float-end btn btn-dark" to="/viewdata">Back</NavLink>
           </form>
         
     </div>
   </div>
   

 </div>

  )
}

export default Add_Data
