import React from "react";
import { useState,useEffect } from "react";
import { getadmindata } from "./Features/Users/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  
    const redirect = useNavigate();
    const dispatch = useDispatch();
    const {admin} = useSelector((state)=>state.user);
    
  const [formValue, setFormValue] = useState({
    email :"",
    password :""
  });

useEffect(() => {
  if(localStorage.getItem("name"))
  {
    redirect('/viewdata')
  }
}, []);

const onchange=(e)=>{
    setFormValue({...formValue,[e.target.name]:e.target.value})
}

const validate=()=>{
    let result = true;
    if(formValue.email===""|| formValue.email===null)
    {
        result = false;
        alert("Please Enter Email");
        redirect('/')
    }
    if(formValue.password===""|| formValue.password===null)
    {
        result = false;
        alert("Please Enter Password");
        redirect('/')
    }
    return result
}

const login=async()=>{
    if(validate())
    {
     dispatch(getadmindata(formValue))
        console.log(admin);
        console.log(admin[0].email);
        console.log(admin[0].password);
     
        if(admin.length>0)
        {
            if(formValue.email===admin[0].email)
            {
                if(formValue.password===admin[0].password)
                {
                    alert("Login Success...!")
                    redirect('/viewdata')
                    localStorage.setItem("email",admin[0].email);
                    localStorage.setItem('name',admin[0].name)
                }
                else{
                   redirect("/")
                    alert("Please Enter Valid Password...");
                }

            }
            else{
              redirect("/")
               alert("Please Enter Valid Email...");
           }
            
        }
        else{
          redirect("/")
          alert("Please Enter Valid Data")
          setFormValue({...formValue,email:"",password:""})
      }
    }
}

  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-md-4 offset-md-4">
          <div className="form shadow p-5">
                <h2 className="text-center pb-3">Login</h2>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formValue.email}
                  onChange={onchange}
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  name="password"
                  value={formValue.password}
                  onChange={onchange}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="text-center">
           <button className="btn btn-primary px-5 mt-3" style={{width:"100%"}} onClick={login}>Login</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
