import React from 'react'
import { Button } from '@mui/material'
import { amber} from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';
function Contact() {
  const theme = createTheme({
    palette: {
      primary: {
        main: amber,
      },
    },
  });
  return (
    <div className='container p-5 text-center'>
      <div className="row p-5">
        <div className="col-md-6  offset-md-3" style={{border:"2px solid red"}}>
      <h1>Get In Touch</h1>
         <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <Button variant="outlined" color ={theme.palette.primary.main}>Say Hello !</Button>
        </div>
      </div>
    </div>
  )
}

export default Contact
