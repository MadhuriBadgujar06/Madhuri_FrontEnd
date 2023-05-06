
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './style.css'

function Navbar() {
 const redirect = useNavigate();
 
 const logout=()=>{
    redirect('/');
    localStorage.setItem('name','');
    localStorage.setItem('photo',"")
    localStorage.setItem('email',"")
    alert("Logout Success")
   }
   
  return (
    <div className='Main_nav_container'>
     <nav className="navbar bg-light navbar-expand-lg bg-body-tertiary p-3" data-bs-theme="light">
  <div className="container-fluid">
      <img src="https://th.bing.com/th?id=OIP.cx2ZOXE5XVbutQwF1hZHcQHaH2&w=242&h=257&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2" className='p-2 ' width={"60px"} alt="" />
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse px-3 text-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
        </li>
        
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/insert">Add Product</NavLink>
        </li>
        
      </ul>
      <ul  className="navbar-nav mb-2 mb-lg-0">
{
  (()=>{
    if(localStorage.getItem("name"))
    {
      return(
      <>
    <li className="nav-item">
    <a className="nav-link" onClick={logout}  href="javascript:void(0);">Logout</a>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link" to="/profile">{localStorage.getItem("name")}</NavLink>
</li>

<div id='profile_img'> 
<NavLink  to="/profile">
<img src={localStorage.getItem("photo")} width="50px" height="50px" className='rounded' alt="" />
</NavLink>
</div>
</>
)
  }
  
  // else
  // {
  //   return(
  //   <>
  //   <li className="nav-item">
  //   <NavLink className="nav-link" to="/signup">SignUP</NavLink>
  // </li>
  // <li className="nav-item">
  //         <NavLink className="nav-link" to="/">Login</NavLink>
  //       </li>
  // </>)
  // }
  }
  )
()}

       
</ul>     
    </div>
  </div>  
</nav>

    </div>
  )
}

export default Navbar
