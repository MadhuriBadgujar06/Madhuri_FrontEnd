import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { delete_data, getuserdata } from "./Features/Users/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function ViewData() {
const redirect=useNavigate();
const dispatch = useDispatch();
const { users } = useSelector((state) => state.user);
console.log(users)
useEffect(() => {
  if(!localStorage.getItem('name'))
  {
    redirect("/")
  }
  else
  {
    dispatch(getuserdata())
  }
}, []);

const ondelete=(id)=>{
  if(window.confirm("You Really Want to delete Data...?"))
  {
    dispatch(delete_data(id))
    dispatch(getuserdata());
  }
}

//  const ondelete=(id)=>{}

  return (
    <div className="container p-5">
      <table className="table">
        <thead>
          <h3 className="text-center p-3">User Data</h3>
          <NavLink to="/add_data">Add_data</NavLink>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            {/* <th scope="col">Age</th> */}
            <th scope="col">Email</th>
            
          </tr>
        </thead>
        <tbody>
          {
            users.map((item ,index)=>{ return(
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              {/* <td>{item.age}</td> */}
              <td>{item.email}</td>
              

              <button type="button" className="btn btn-primary text-dark p-2 m-2">
                Status
              </button>
              <button type="button" onClick={()=>ondelete(item.id)} className="btn btn-danger text-dark p-2 m-2">
                Delete
              </button>
              <button type="button" className="btn btn-warning text-dark p-2 m-2">
                Edit
              </button>
            </tr>
            )})
          }
        </tbody>
      </table>
    </div>
  );
}

export default ViewData;
