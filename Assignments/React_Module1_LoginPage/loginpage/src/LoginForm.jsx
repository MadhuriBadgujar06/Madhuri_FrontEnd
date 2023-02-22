import React from 'react'
import './LoginForm.css'
function LoginForm() {
  return (
    <div>
      <div className="container">
        <form action="">
      <h1>LOGIN</h1>
      <p>Please Enter your Login and Password!</p>
      <div className='row margin text_field'><i class="fa fa-user col-2"></i><input type="text" className='col-10' placeholder='Username'/></div>
      <div className='row margin text_field'><i class="fa fa-lock col-2"></i><input type="password" className='col-10' placeholder='Password'/></div>
      <small className='margin forget_password'>Forget Password?</small>
      <input type="submit" value="Login" id="login" className='margin' />
      <p className='margin'>Or Sign Up Using</p>
      <div className="row">
      <div className="col-12">
      <a href="#" class="fa fa-facebook social_media_icon"></a>
<a href="#" class="fa fa-twitter social_media_icon"></a>
<a href="#" class="fa fa-google social_media_icon"></a>
<a href="#" class="fa fa-linkedin social_media_icon"></a>
<a href="#" class="fa fa-instagram social_media_icon"></a>
      </div>

      </div>

      </form>
      </div>
    </div>
  )
}

export default LoginForm
