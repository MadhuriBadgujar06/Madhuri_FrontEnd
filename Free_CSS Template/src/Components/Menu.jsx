import React from 'react'
import Food from './Food'
import Food_menu from './Food_menu'

function Menu() {
  return (
    <div>
         {/* <!-- Page Header Start --> */}
        <div class="page-header mb-0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Food Menu</h2>
                    </div>
                    <div class="col-12">
                        <a href="">Home</a>
                        <a href="">Menu</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
       
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
