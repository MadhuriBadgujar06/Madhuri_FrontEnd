import React from 'react'
import '../Style/Style.css'
import { ListItemText,ListItemIcon,ListItemButton } from '@mui/material'

function About() {
  return (
    <div  className='container m-3 p-5'>
      <div className="row pt-5">
      <div className="col-md-8 offset-md-2">
      <h1>About Me</h1>
      <p>Hello! My name is Madhuri Badgujar.I have completed my Masters in Computer Science from North Maharashtra University Jalgaon with First Class.I have completed Tops certified frontend Development training from Tops Technologies.I am Skilled in ReactJS, Javascript and Web Designing.I am interested in learning technology.</p>
      <h5>Skills</h5>
    <ul type="check">
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
    </div>
    </div>
    </div>
  )
}

export default About
