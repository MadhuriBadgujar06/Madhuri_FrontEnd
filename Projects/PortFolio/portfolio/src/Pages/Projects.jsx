import React from "react";
import { Card, Grid, Box, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
function Projects() {
  return (
    <Grid container p={15} spacing={6}>
      <Grid item xs={12} sm={6}>
        <Box background='primary'>
          <Card variant="outlined" background="primary" style={{background:'#041a3c'}}>
            <CardContent>
              <h3 className="text-warning text-center"> OnePlus Clone</h3>
              <p>
                Responsive User Interface for using BOotstrap5 and Media
                Queries.Client side email validation is done using
                Javascript.Toggle the content using JQuery.
              </p>
              <h5> <div  className="text-warning">Technologies:</div> 
               HTML5,CSS3,Bootstrap5,Jquery,Javascript</h5>

               <h6 >Link : <a  href="https://madhuriprojects.000webhostapp.com/Oneplus_index.html"> https://madhuriprojects.000webhostapp.com/Oneplus_index.html</a></h6>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box  color="primary">
          <Card  variant="outlined" style={{background:'#041a3c'}}>
            <CardContent>
              <h3 className="text-warning text-center"> Admin-User Panel</h3>
              <p>
                Data Stored in a JSON server.Axios is use to fetch the data of
                user and admin.Functionality such as Login-Logout,Signup,Edit
                Profile on the user side and on Admin side Adding and managing
                Employee,Managing User,Admin Login-logout are provided.use of
                Lazy Loading Components,Child Routing,outlet at user side.
              </p>
              <h5>
              <div  className="text-warning">Technologies:</div> 
               HTML5,CSS3,Javascript,ReactJS,JSON server,Axios
              </h5>
              <h6>Link :</h6> <a href="https://github.com/MadhuriBadgujar06/Madhuri_FrontEnd/tree/master/Projects/Admin-User%20Panel">https://github.com/MadhuriBadgujar06/Madhuri_FrontEnd/tree/master/Projects/Admin-User%20Panel</a>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <Card  variant="outlined"  style={{background:'#041a3c'}}>
            <CardContent>
              <h3 className="text-warning text-center"> PortFolio Website</h3>
             
              <Typography>
               <p> This Portfolio website is design and developed by Me using
                ReactJs.</p>
                <h5>
                  <div  className="text-warning">Technologies:</div> 
                  HTML5,CSS3,ReactJS,Bootstrap5,MUI,Sass,Javascript
                </h5>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <Card  variant="outlined"  style={{background:'#041a3c'}}>
            <CardContent>
              <h3 className="text-warning text-center"> Lapino'z Clone</h3>
              <p>
                My first project of web development.Responsive User Interface
                for all the devices using Media Queries.all the components are
                made using custom CSS.Use of JQuery Plugin.
              </p>
              <h5>  <div  className="text-warning">Technologies:</div>HTML5,CSS3,Jquery,Media Queries.</h5>
            <h6>Link : <a href="https://madhuriprojects.000webhostapp.com"> https://madhuriprojects.000webhostapp.com</a></h6>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Projects;
