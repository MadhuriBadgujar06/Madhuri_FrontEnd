import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {
    const redirect=useNavigate();

     useEffect(() => {
       if(localStorage.getItem('id'))
       {
        return redirect("/")
       }
     }, []);

    const [formValue, setformValue] = useState({
        email :"",
        password :""
    });

    const onchange=(e)=>{
        setformValue({...formValue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        // console.log(formValue)
    }
    const validation=()=>{
        var result = true;
        if(formValue.email===null||formValue.email==="")
        {
            result= false;
            toast.error("Email Required..");
        }
        if(formValue.password===null||formValue.password==="")
        {
            result = false;
            toast.error("Password Required");
        }
        return result
    }
const save= async(e)=>{
    e.preventDefault();
    if(validation())
    {
        const res=await axios.get(`http://localhost:3000/user?email=${formValue.email}`);
    console.log(res.data[0].password)
    console.log(formValue.password)
    console.log(formValue.email)

    if(res.data.length>0)
    {if(res.data[0].password === formValue.password)
        {
            localStorage.setItem('id',res.data[0].id)
            localStorage.setItem('name',res.data[0].name)
            toast.success("Login Success "+localStorage.name)
            return redirect("/")
        }
        else{
            toast.error("Enter Valid Password")
            return redirect("/login")
        }

    }
    else{
        toast.error("Enter a valid Email Please");
        return redirect("/login")
    }

}
}

  return (
    <div className='Container p-5 m-5'>
      <div className="col-md-4 offset-md-4">
                        <div id="success"></div>
                        <form >
                            
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

                </div>

  )

  }
export default Login
