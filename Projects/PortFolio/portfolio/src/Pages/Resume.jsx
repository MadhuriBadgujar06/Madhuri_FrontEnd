import React from 'react'
import { Grid,Paper,Box } from '@mui/material'
function Resume() {
  return (
    <div>
      <Grid  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}>
        <Box sx={{ m: 2 }}>
              <Paper>
                 
              <embed src="sampleResume.pdf" width="800px" height="2100px" download/>
  
              </Paper>  
         </Box>
      </Grid>
    </div>
  )
}

export default Resume
