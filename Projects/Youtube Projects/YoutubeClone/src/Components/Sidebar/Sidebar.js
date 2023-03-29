import React from 'react'
import "./_Sidebar.scss"
import { MdSubscriptions,MdExitToApp,MdThumbUp,MdHistory,MdLibraryBooks,MdHome,MdSentimentSatisfied } from 'react-icons/md'
function Sidebar({sidebar,handleToggleSideBar}) {
  
  return (
    <nav className={sidebar?"sidebar open":"sidebar"} onClick={()=>handleToggleSideBar()}>
      <li><MdHome size={23}/><span>Home</span></li>
      <li><MdSubscriptions size={23}/><span>Subscription</span></li>
      <li><MdThumbUp size={23}/><span>Liked Video</span></li>
      <li><MdHistory size={23}/><span>History</span></li>
      <li><MdLibraryBooks size={23}/><span>Library</span></li>
      <li><MdSentimentSatisfied size={23}/><span>I don't Know</span></li>
      <hr />
      <li><MdExitToApp size={23}/><span>Log Out</span></li>
      <hr />
    </nav>
  )
}

export default Sidebar
