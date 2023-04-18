import React,{useState,useEffect} from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    
    const redirect = useNavigate();

    // useEffect=(()=>{
    //     if(localStorage.getItem('aemail'))
    //     {
    //         return redirect('/dashboard');
    //     }
    // })
    const [formValue, setFormValue] = useState({
        
        email:"",
        password :""
    });
    const Onchanged=(e)=>{
   setFormValue({...formValue,[e.target.name]:e.target.value});
   
    }
    const validate=()=>{
        let res = true;
        if((formValue.email===null)||(formValue.email===""))
        {
            res=false;
            toast.error('Email required')
        }
        if((formValue.password===null)||(formValue.password===""))
        {
            res=false;
            toast.error('Password required')
        }
        return res;
    }
    const login=async(e)=>{
        e.preventDefault();
        if(validate())
        {
            const res=await axios.get(`http://localhost:3000/admin?email=${formValue.email}`)

            if(res.data.length>0)
            {
                if(res.data[0].password===formValue.password)
                {
                    localStorage.setItem('aname',res.data[0].name);
                    localStorage.setItem('aemail',res.data[0].email)
                    toast.success("Login Success")
                    return redirect('/dashboard')
                }
                else{
                    toast.error("Enter Valid Password Please");
                    return redirect("/"); 
                }
            }
            else{
                toast.error("Enter Valid Email Please");
                return redirect("/");
            }
        }
    }
  return (
    <div>
      <body style={{backgroundColor: "#E2E2E2"}}>
    <div className="container">
        <div class="row text-center " style={{paddingTop:"100px;"}}>
            <div className="col-md-12">
                <img src="assets/img/logo-invoice.png" />
            </div>
        </div>
         <div className="row ">
               
                <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                           
                            <div className="panel-body">
                                <form role="form">
                                    <hr />
                                    <h5>Enter Details to Login</h5>
                                       <br />
                                     <div className="form-group input-group">
                                            <span classNameName="input-group-addon"><i class="fa fa-tag"  ></i></span>
                                            <input type="email" className="form-control"name="email" value={formValue.email} onChange={Onchanged} placeHolder="Your Email " />
                                        </div>
                                                                              <div className="form-group input-group">
                                            <span classNameName="input-group-addon"><i class="fa fa-lock"  ></i></span>
                                            <input type="password" className="form-control" name='password' value={formValue.password} onChange={Onchanged}  placeHolder="Your Password" />
                                        </div>
                                    <div className="form-group">
                                            <label className="checkbox-inline">
                                                <input type="checkbox" /> Remember me
                                            </label>
                                            <span className="pull-right">
                                                   <a href="index.html" >Forget password ? </a> 
                                            </span>
                                        </div>
                                     
                                     <a href="javascript:void(0)" onClick={login} className="btn btn-primary ">Login Now</a>
                                    <hr />
                                    Not register ? <a href="index.html" >click here </a> or go to <a href="index.html">Home</a> 
                                    </form>
                            </div>
                           
                        </div>
                
                
        </div>
    </div>

</body>
    </div>
  )
}

export default Login
