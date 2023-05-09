import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner';
// import { useEffect } from 'react';
function Profile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const redirect = useNavigate();

  useEffect(() => {
    if(!(localStorage.getItem("name")))
    {
      redirect("/")
    }
  fetchData();
}, []);

const fetchData=async()=>{
  setLoading(true)
  const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem("id")}`)
  console.log(localStorage.getItem("id"))
  setData(res.data)
  setLoading(false)
}    
  return (
    <div>
    <div className="p-3 container">
      <div className="row">
          <div className="col-md-6 offset-md-3">
          
      <form action="" className="shadow border form border-5 rounded p-4">
          <h1 className="text-center p-5">{(data.name)}</h1>
          <div className='d-flex justify-content-center'>
            {loading?<Spinner/>:
            <img className='mb-5 rounded' src={data.photo} width="200px" height="200px" alt="" />}
          </div>
      <div className="mb-3 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name :
        </label>
        {" "+data.name}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Mobile :
        </label>
        {" "+data.mobile}
        
      </div>
      <div className="mb-3 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email :   
        </label>
        {" "+data.email}
      </div>
      <div className="mb-3 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password :  
        </label>
        {" "+data.password}
      </div>
      
      <button type="sumbit" className="btn btn-warning" onClick={()=>{redirect(`/edit/${data.id}`)}}>Edit Profile</button>
      </form>
    </div>
  </div>
  </div>
      </div>
  )
}

export default Profile
