import React from "react";
import "../Style/Style.css";
import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Grid,
  Box,
  CardContent,
} from "@mui/material";

function About() {
  return (
    <Grid container p={15} spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box>
          <h2 className="p-2"> About Me</h2>
          <p>
            Hello! I am Madhuri Badgujar. I have completed my Masters in
            Computer Science from North Maharashtra University Jalgaon with
            First Class.I have recently completed Frontend Development training
            from Tops Technologies. I am Soft Skills trained and Skilled in
            ReactJS, Javascript and Proficient in CSS Frameworks like MUI an
            Bootstrap.I am very eager to learn about Technology.
          </p>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <h2 className="p-2">Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript(ES6)</li>
            <li>JQuery</li>
            <li>Bootstrap5</li>
            <li>ReactJS</li>
            <li>React Redux</li>
            <li>Sass</li>
            <li>Material UI</li>
            <li>JSON Server</li>
            <li>Git and Github</li>
            <li>C,C++,Java</li>
          </ul>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;
