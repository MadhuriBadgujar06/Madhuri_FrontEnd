import React from "react";
import { Card, Grid, Box, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
function Projects() {
  return (
    <Grid container p={15} spacing={3}>
      <Grid item xs={12} sm={6}>
        <Box>
          <Card backgroundColor="primary">
            <CardContent>
              <h5 className="text-warning text-center"> OnePlus Clone</h5>
              <p>
                Responsive User Interface for using BOotstrap5 and Media
                Queries.Client side email validation is done using
                Javascript.Toggle the content using JQuery.
              </p>
              <h5>Technologies : HTML5,CSS3,Bootstrap5,Jquery,Javascript</h5>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <Card backgroundColor="primary">
            <CardContent>
              <h5 className="text-warning text-center"> Admin-User Panel</h5>
              <p>
                Data Stored in a JSON server.Axios is use to fetch the data of
                user and admin.Functionality such as Login-Logout,Signup,Edit
                Profile on the user side and on Admin side Adding and managing
                Employee,Managing User,Admin Login-logout are provided.use of
                Lazy Loading Components,Child Routing,outlet at user side.
              </p>
              <h5>
                Technologies : HTML5,CSS3,Javascript,ReactJS,JSON server,Axios
              </h5>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <Card backgroundColor="primary">
            <CardContent>
              <h5 className="text-warning text-center"> PortFolio Website</h5>
              <p>
                {" "}
                This Portfolio website is design and developed by Me using
                ReactJs.
              </p>
              <h5>
                Technologies : HTML5,CSS3,ReactJS,Bootstrap5,MUI,Sass,Javascript
              </h5>
              <Typography variant="body2">
                This Portfolio website is design and developed by Me using
                ReactJs.
                <h5>
                  Technologies :
                  HTML5,CSS3,ReactJS,Bootstrap5,MUI,Sass,Javascript
                </h5>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <Card backgroundColor="primary">
            <CardContent>
              <h5 className="text-warning text-center"> Lapino'z Clone</h5>
              <p>
                My first project of web development.Responsive User Interface
                for all the devices using Media Queries.all the components are
                made using custom CSS.Use of JQuery Plugin.
              </p>
              <h5> Technologies :HTML5,CSS3,Jquery,Media Queries.</h5>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Projects;
