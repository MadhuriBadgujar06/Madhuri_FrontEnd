import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Style/Style.css'
function Footer() {
  return (
    <div className='container footer'>
      <hr className='text-light' />
      <div className="row">
        <div className="col-md-12">
      <h6>Designed and Built By Madhuri Badgujar</h6>
      <ul className='d-flex justify-content-center align-items-center'>
        <li><GitHubIcon/></li>
        <li><LinkedInIcon/></li>
      </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer
