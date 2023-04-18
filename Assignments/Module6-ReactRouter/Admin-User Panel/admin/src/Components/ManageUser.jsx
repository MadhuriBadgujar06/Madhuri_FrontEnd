import React from 'react'
import {useState, useEffect } from 'react';
import axios from 'axios';

function ManageEmployee() {
  
const [data,setData]=useState([]);
// const onchange=(e)=>{
//     setformValue({...formValue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
//     console.log(formValue)
// }
const [formValue, setFormValue] = useState({
  name:"",
  mobile :""
});

const [updateid, setUpdateid] = useState("");
useEffect(() => {
 fetchData();
}, []);

const fetchData=async()=>{
  const res = await axios.get(`http://localhost:3000/user`);
  setData(res.data)
  console.log(data)
  console.log(res.data)
}
//using FETCH 
// const fetchData=()=>{
//   fetch("")
//   .then((response) => response.json())
//   .then((data) =>setData(data) );
// }

// const onDelete=(id)=>{
// fetch(`https://firstproject-b3e8d-default-rtdb.firebaseio.com/FirstProject/${id}.json`,{
//   method :'DELETE',
// }).then((response)=>{
//   fetchData();
// })
// }

const onDelete =async(id)=>{
const res = await axios.delete(`http://localhost:3000/user/${id}`);
   fetchData();
}
const onEdit=async(id)=>{
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    setFormValue({...formValue,name:res.data.name,mobile:res.data.mobile});
    setUpdateid(id);
}
const OnUpdate=async()=>
{
  const res = await axios.patch(`http://localhost:3000/user/${updateid}`,formValue)

  setFormValue({...formValue,name:"",mobile:""})
  fetchData();
}
//when using fetch
// const onEdit=(id)=>{
//   fetch(`https://firstproject-b3e8d-default-rtdb.firebaseio.com/FirstProject/${id}.json`)
// .then((response)=>{
//   return(response.json());
// }).then((data)=>
// {
//   setFormValue({...formValue,name:data.name,mobile:data.mobile})
//   setUpdateid(id);
//   })
// }
const Onchanged=(e)=>{
  setFormValue({...formValue,[e.target.name]:e.target.value})
}

//While USING FETCH API
// const OnUpdate=(id)=>{
// fetch(`https://firstproject-b3e8d-default-rtdb.firebaseio.com/FirstProject/${updateid}.json`, {
// method: 'PATCH',
// body: JSON.stringify(formValue),
// headers: {
//   'Content-type': 'application/json; charset=UTF-8',
// },
// })
// .then((response) => {setFormValue({...formValue})
// })
// .then((json) => fetchData());
// }

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
              
                       <button className='btn btn-danger'onClick={()=>onDelete(item.id)} >Delete</button>
                       <button className='btn btn-danger'  data-toggle="modal" data-target="#myModal" onClick={()=>onEdit(item.id)} >Edit</button>
                     </td>
                 </tr>
                    )
                  })
     //When Using Fetch
      //  Object.keys(data).map((item)=>{
      //       return(
      //           <tr>
      //               <td>{data[item].id}</td>
      //               <td>{data[item].name}</td>
      //               <td>{data[item].mobile}</td>
      //               <td>{data[item].email}</td>
          
      //               <td>
      //                 <button className='btn btn-danger'onClick={()=>onDelete(item)} >Delete</button>
      //                 <button className='btn btn-danger'  data-toggle="modal" data-target="#myModal" onClick={()=>onEdit(item)} >Edit</button>
      //               </td>
      //           </tr>
      //       )
      //   })
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

export default ManageEmployee
