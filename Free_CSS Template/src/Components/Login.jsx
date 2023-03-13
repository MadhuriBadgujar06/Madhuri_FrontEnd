import React,{useState} from 'react'

function Login() {
    const [formValue, setformValue] = useState({
        name :"",
        mobile :"",
        email :"",
        password :""
    });
 const [data,setData]=useState([]);
    const onchange=(e)=>{
        setformValue({...formValue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formValue)
    }
const save=(e)=>{
    e.preventDefault();
    setData([...data,formValue])
    // console.log(data)
    setformValue({...formValue,name:"",mobile:"",email :" ",password:""})
}
const ondelete=(deleteid)=>{
    var filterdata = data.filter((item)=>item.id!==deleteid)
    setData(filterdata);
}
  return (
    <div className='Container p-5 m-5'>
      <div className="col-md-12">
                        <div id="success"></div>
                        <form >
                            <div className="control-group">
                                <input type="text" className="form-control" name="name" value={formValue.name} onChange={onchange} placeholder="Your Name" required="required"/>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="number" className="form-control"  name="mobile" value={formValue.mobile} onChange={onchange} placeholder="Mobile" required="required"/>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control"  name="email" value={formValue.email} onChange={onchange} placeholder="Your Email" required="required"/>
                                <p className="help-block text-danger"></p>
                            </div>
                           
                            <div className="control-group">
                            <input type="password" className="form-control" name="password" value={formValue.password} onChange={onchange} placeholder="Your Password" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn custom-btn" type="submit" onClick={save}>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="row py-5">
                        <h1 className="p1">Login Data</h1>
                    <table className="table">
  <thead>
    <tr>
        <th>Id</th>
      <th scope="col">FirstName</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th>Delete</th>
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
                    <td>{item.password}</td>
                    <td><button className='btn btn-danger' onClick={()=>ondelete(item.id)}>Delete</button></td>
                </tr>
            )
        })
       }
  </tbody>
</table>
                    </div>
                </div>

  )
}

export default Login
