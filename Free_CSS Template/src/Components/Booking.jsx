import React from 'react'
import Book_table from './Book_table'
import Food_menu from './Food_menu'

function Booking() {
  return (
    <div>
           
        {/* <!-- Booking Start --> */}
        <Book_table/>
        {/* <!-- Booking End --> */}
        
        
        {/* <!-- Menu Start --> */}
        
        <Food_menu/>
                {/* <!-- Menu End --> */}

    </div>
  )
}

export default Booking
