import React from 'react'
import '../Style/Style.css'
import { Grid,Box,Typography,Paper } from '@mui/material'
function Home() {
  return (
    <Grid container p={15} spacing={3}>
      <Grid item xs={12} sm={6}>
      <Box>
         <Typography variant='h5'>Hi, my name is </Typography>
         <Typography variant='h2'>Madhuri Badgujar </Typography>
         <Typography variant='h5'>Passionate FrontEnd Developer and <br /> ReactJS Developer,Eager to learn new Technologies. </Typography>
         <Typography variant='h5' color='primary'>My Services </Typography>
         <Typography variant='h5'>
          
          <Box >Web Designing</Box>
          <Box py={1}>Frontend Development</Box>
          <Box py={1}>ReactJS Development</Box></Typography>
      </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <Paper>
        <img src="" alt="Photo" />
        </Paper>
        </Box>
      </Grid>
     
    </Grid>
  )
}

export default Home
