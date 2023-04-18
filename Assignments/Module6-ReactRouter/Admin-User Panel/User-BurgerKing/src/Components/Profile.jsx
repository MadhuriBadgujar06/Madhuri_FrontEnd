import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
    
    const redirect=useNavigate();
    useEffect(()=>{
        if(!(localStorage.getItem('id')))
        {
            return redirect('/');
        }
        fetchData();
      },[]); 

      
  const [data, setData] = useState("");

  const fetchData=async ()=>{
    const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('id')}`);
    console.log(localStorage.getItem('id'))
    console.log(res.data)
    setData(res.data);
  }
    
      

  return (
    <div>
      {/* about section */}
      <div className="about">
        <div className="container">
          <div className="row d_flex">
           
            <div className="col-md-6 offset-md-3">
              <div className="titlepage">
                <h2>Manage Profile</h2>
                <p>Id : {data.id}</p>
                <p>Name : {data.name}</p>
                <p>Email : {data.email}</p>
                <p>Mobile : {data.mobile}</p>
              </div>
              <a href="javascript:void(0)"  className="btn custom-btn" onClick={()=>{redirect(`/edit_profile/${data.id}`)}}>Edit Profile</a>
            
            </div>
          </div>
        </div>
      </div>
      {/* about section */}
    </div>

  )
}

export default Profile