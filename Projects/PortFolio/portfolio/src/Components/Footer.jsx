import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Style/Style.css'
import { Grid,Box } from '@mui/material';
function Footer() {
  return (
    <Grid container p={1} style={{backgroundColor :'#ffc107'}}>
      <Grid item xs={12}>
        <Box color='primary'>
        <hr className='text-light' />
      
      <h6 className='text-dark'>Designed and Built By Madhuri Badgujar</h6>
      <ul className='d-flex justify-content-center align-items-center'>
        <li><a href="https://github.com/MadhuriBadgujar06/Madhuri_FrontEnd/tree/master/Projects"><GitHubIcon/></a></li>
        <li><a href="https://www.linkedin.com/in/madhuri-badgujar-a16474242/"><LinkedInIcon/></a></li>
      </ul>
        </Box>
      </Grid>
    </Grid>
      

  )
}

export default Footer
