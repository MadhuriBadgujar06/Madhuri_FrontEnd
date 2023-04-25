import React from 'react'
import { Button,Box, Grid } from '@mui/material'

function Contact() {
  
  return (
<Grid container className='text-center' p={25}>
  <Grid item xs={12}>
    <Box className="m-auto">
    
      <h1>Get In Touch</h1>
         <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <a href="mailto:badgujarmadhuri68@gmail.com" className='btn btn-warning'>Say Hello !</a>

    
    </Box>
    </Grid>
    </Grid>
      
  )
}

export default Contact
