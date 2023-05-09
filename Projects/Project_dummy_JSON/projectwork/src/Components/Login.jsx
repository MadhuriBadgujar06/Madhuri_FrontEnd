import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import "./style.css";
import { toast } from "react-toastify";
function Login() {
  const redirect = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
useEffect(() => {
  if(!(localStorage.getItem("name")))
  {
    redirect("/")
  }
}, []);

  const onchange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    console.log(formValue);
  };
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
    return result;
  };
  const login = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.get(
        `http://localhost:3000/user?email=${formValue.email}`
      );
      console.log(res.data);
      if (res.data.length > 0)
       {
        if (formValue.email === res.data[0].email) 
        {
          if (formValue.password === res.data[0].password)
           {
            toast.success("Login Success");
            localStorage.setItem("name", res.data[0].name);
            localStorage.setItem("email", res.data[0].email);
            localStorage.setItem("photo",res.data[0].photo)
            localStorage.setItem("id",res.data[0].id)
            redirect("/home");
            
          }
          else
          {
            toast.error("Enter Correct Password")
            redirect("/")
          }
        }
          else{
            toast.error("Enter Valid Email")
            redirect("/")
          }
        
      } else {
        toast.error("Enter Valid Data");
        redirect("/");
        setFormValue({ ...formValue, email: "", password: "" });
      }
    }
  };
  return (
    <div className="container">
      <div className="row  ">
        <div className="col-md-4 m-auto  border border-5 form mt-5 text-dark bg-light m-5">
          <form action="" className="m-5">
            <h1 className=" p-2 text-center">Login</h1>

            <div>
              <div className="mb-3 p-2">
                <input
                  type="email"
                  className="form-control p-3"
                  name="email"
                  value={formValue.email}
                  onChange={onchange}
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3 p-2">
                <input
                  type="password"
                  className="form-control p-3"
                  name="password"
                  value={formValue.password}
                  onChange={onchange}
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 p-2 text-center">
                <button
                  type="submit"
                  className="btn p-3"
                  onClick={login}
                >
                  Login
                </button>
              </div>
              <div className="mb-3 p-2 text-center">
                <NavLink
                  type="submit"
                  className="btn p-3"
                  to="/signup"
                >
                  SignUp
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
