import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function List() {

    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    useEffect(() => {
      return () => {
        fetchdata();
      };
    }, []);
 
    const fetchdata=async()=>{
         const res = await axios.get(`http://localhost:3000/Gujrat`);
         console.log(res.data)
         setList(res.data)
    }

    const onchange=(e)=>{
        setInput(e.target.value)
        console.log(input)
    }
  return (
    <div className='container mt-5'>
        <div className="col-md-6 offset-md-3">
            <h1>Search City</h1>
            <nav class="navbar bg-dark" data-bs-theme="dark">

<div className="container-fluid">
  <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" onChange={onchange} placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>

</div>
</nav>
      <ul>
        {
          list.filter((item)=>item.name.toLowerCase().includes(input)).map((item )=>{
            return(
               <li key="id" className='p-2'>{item.name}</li>
            )
          })
            
          
        }
      </ul>
</div>
    </div>
  )
}

export default List
