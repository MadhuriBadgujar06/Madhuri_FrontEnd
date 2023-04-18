import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
function AddEmployee() {
  const [formValue, setFormValue] = useState({
    name:"",
    mobile:"",
    email:"",
    password :""
});
const Onchanged=(e)=>{
setFormValue({...formValue,id:new Date().getTime().toString(),[e.target.name]:e.target.value})
console.log(formValue);
}

const OnSubmit=async (e)=>{
  e.preventDefault();
  if(formValue.name===""||formValue.name===null)
  {
    toast.error("Name is Required..");
    
  }
   const res = await axios.post(`http://localhost:3000/employee`,formValue);
   setFormValue({...formValue,name :"",mobile:"",email:"",password:""});
   alert("Success")
  
}
  return (
    <div>
       <div>
  <div id="page-wrapper">
    <div id="page-inner">
      <div classname="row">
        <div classname="col-md-12">
          <h1 classname="page-head-line"> Add Employee</h1>
         </div>
      </div>
      {/* ROW */}
      <div classname="row">
        <div classname="col-md-12 col-sm-12 col-xs-12">
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
                <button type="submit" classname="btn btn-info">Send Message </button>
                <button type="submit" onClick={OnSubmit}>Submit</button>
              </form>
            </div>
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

export default AddEmployee
