import React from 'react'
// import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
const redirect = useNavigate();

  const logout=()=>{
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    console.log(localStorage.getItem("email"));
    redirect("/")

  }

  return (
    <div className='container-fluid bg-info text-light p-5'>
      <h5 className="float-end">Hello {localStorage.getItem('name')}</h5>
      <h1 className='text-center'>React Redux Crud</h1>
      <button className="btn btn-dark float-end" onClick={logout} >Logout</button>

    </div>
  )
}

export default Header
