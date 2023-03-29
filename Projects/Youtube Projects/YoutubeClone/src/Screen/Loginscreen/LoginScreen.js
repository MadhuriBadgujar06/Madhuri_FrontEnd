import "./LoginScreen.scss"

import React from 'react'
import { useDispatch } from "react-redux"
import { login } from "../../Redux/actions/auth.action";

function LoginScreen() {
  const dispatch= useDispatch();
  const handleLogin =()=>{
    dispatch(login())
  }
  return (
    <div className="login">
        <div className="login_container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="" />
            <button onClick={handleLogin}>
                Login with google
            </button>
            <p>This Project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen
