import React from 'react'
import "./_Header.scss"
import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdNotifications ,MdApps} from 'react-icons/md'

function Header({handleToggleSideBar}) {

  return (
    <div className='border border-dark header'>
      <FaBars className='header_menu'  size={26} onClick={()=>handleToggleSideBar()}/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="sorry" className='header_logo' />
      <form>
            <input type="text"placeholder="Search" />
               <button type="submit">
                   <AiOutlineSearch size={22}/> 
              </button>
      </form>
      <div className='header_icons'>
      <MdNotifications size={28}/>
      <MdApps size={28}/>
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKTCvhbnqwyIbeN8eZAzlzb9s9d6LBnNWsw&usqp=CAU" alt="avtar"  />
      </div>
    </div>
  )
}

export default Header
