import React from 'react'
import Food from './Food'
import Food_menu from './Food_menu'

function Menu() {
  return (
    <div>
      {/* <!-- Food Start --> */}
        <Food/>
        {/* <!-- Food End --> */}
        

        {/* <!-- Menu Start --> */}
        <Food_menu/>
        {/* <!-- Menu End --> */}
    </div>
  )
}

export default Menu
