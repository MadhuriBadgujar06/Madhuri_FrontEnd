import React from 'react'
import "./_Video.scss"
import {AiFillEye} from 'react-icons/ai'
function Video() {
  return (
    <div className="video">
      <div className="video_top">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-desMlK24BlPMRjQ-r6BoxHyzNxFBqJYYng&s'/>
            <span>05:43</span>
      </div>
      <div className="video_title">
        Create App in 5 minutes #made by Chintu
      </div>
      <div className="video_details">
        <span><AiFillEye/>5m Views • </span>
        <span>5 days ago</span>
      </div>
      <div className="video_channel">
        <img src="https://images-platform.99static.com//dSQhzTpWXDcpuu9Y2xEpXV84QMg=/129x129:992x992/fit-in/500x500/99designs-contests-attachments/118/118295/attachment_118295052" alt="" />
        <p>TechGun</p>
        </div>
    </div>
  )
}

export default Video
