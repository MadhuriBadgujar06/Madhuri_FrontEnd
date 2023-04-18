import React from 'react'
import {useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


function ManageUser() {
  
const [data,setData]=useState([]);
const [formValue, setFormValue] = useState({
  name:"",
  mobile :""
});

const [updateid, setUpdateid] = useState("");
useEffect(() => {
 fetchData();
}, []);

const fetchData=async ()=>{
 const res= await axios.get("http://localhost:3000/employee")
  setData(res.data)
  
}

const onDelete=async (id)=>{
const del = await axios.delete(`http://localhost:3000/employee/${id}`)
fetchData();
}
const onEdit=async (id)=>{
    const res=await axios.get(`http://localhost:3000/employee/${id}`);
    console.log(formValue)
    setFormValue({...formValue,name:res.data.name,mobile:res.data.mobile})
    setUpdateid(id)   
  }

  const Status=async (id)=>
  {
    const res=await axios.get(`http://localhost:3000/employee/${id}`)
    console.log(res.data.status)
    if(res.data.status==="Unblock")
    {
      await axios.patch(`http://localhost:3000/employee/${id}`,{status:"Block"})
      localStorage.removeItem('name');
      localStorage.removeItem('id')
      toast.success("User Blocked")
      fetchData();
    }
    else{
      await axios.patch(`http://localhost:3000/employee/${id}`,{status:"Unblock"})
      toast.success("User UnBlocked..")
      fetchData();
    }
    fetchData();
  }

const Onchanged=(e)=>{
  setFormValue({...formValue,[e.target.name]:e.target.value})
}
const OnUpdate=async()=>{
 const res= await axios.patch(`http://localhost:3000/employee/${updateid}`,formValue);
 setFormValue({...formValue,name:"",mobile:""}) 
 fetchData();
}

  return (
    <div>
<div id="page-wrapper">
  <div id="page-inner">
    <div className="row">
      <div className="col-md-12">
        <h1 className="page-head-line">Manage your User here</h1>
             </div>
    </div>
    {/* /. ROW  */}
    <div className="row">
      <div className="col-md-12">
        {/*   Kitchen Sink */}
        <div className="panel panel-default">
          
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                {
       data.map((item)=>{
            return(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
          
                    <td>
                      <button className='btn btn-danger'onClick={()=>Status(item.id)} >{item.status}</button>
                      <button className='btn btn-danger'onClick={()=>onDelete(item.id)} >Delete</button>
                      <button className='btn btn-danger'  data-toggle="modal" data-target="#myModal" onClick={()=>onEdit(item.id)} >Edit</button>
                    </td>
                </tr>
            )
        })
       }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* End  Kitchen Sink */}
      </div>
      {/*  end  Context Classes  */}
    </div>
  </div>
  {/* /. ROW  */}
</div>
<div>
  {/* The Modal */}
  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title">Edit User</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        {/* Modal body */}
<form role="form" className='p-5 container'>
                <div classname="form-group">
                  <label>Name</label>
                  <input className="form-control"name="name" value={formValue.name} onChange={Onchanged}  style={{width:"500px"}}  type="text" />
                  
                </div>
                <div classname="form-group">
                  <label>Mobile</label>
                  <input className="form-control"name="mobile" value={formValue.mobile} onChange={Onchanged}  style={{width:"500px"}}  type="number" />
                  <p classname="help-block">we won't share your number with anyone.</p>
                </div>
                
              </form>
        {/* Modal footer */}
        <div className="modal-footer">
        
                <button type="submit" className='btn btn-primary' data-dismiss="modal" onClick={OnUpdate}>Update</button>
          
        </div>
      </div>
    </div>
  </div>
</div>

{/* /. PAGE INNER  */}
{/* /. PAGE WRAPPER  */}

    </div>
  )
}

export default ManageUser
