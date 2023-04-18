import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

function TableSearch() {
    
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      fetchdata();
      
    }, []);
    const fetchdata=async ()=>{
        const res =await axios.get(`https://jsonplaceholder.typicode.com/users`);
          setData(res.data);  
    }
    
  return (
    <div className='container p-5 m-4 bg-warning'>
      <input type="text" placeholder='Search Name' className='my-2 p-2' onChange={(e)=>setQuery(e.target.value)} />
      <table className='table table-dark table-striped'>
        
        <thead>
        <h1 className='text-dark my-3'>UserData</h1>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Website</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
               data.filter((item)=>item.name.toLowerCase().includes(query)).map((item)=>{
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.website}</td>
                        <td>{item.email}</td>
                    </tr>
                )
            })           
            }
        </tbody>
      </table>

    </div>
  )
}

export default TableSearch
