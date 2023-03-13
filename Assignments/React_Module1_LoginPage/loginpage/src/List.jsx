import React from 'react'
// import Items from './Items'
function List() {
    const list=[{id:1,item:"Books"},
    {id:2,item:"Laptop"},
    {id:3,item:"Charger"},
    {id:4,item:"Mobile"}]
  return (
    <div>
     <ul>
        {/* {list.map((elem)=><Items key={elem.id} item={elem.item}/>)} */}
          {list.map((elem)=>{
            return<li>Item is {elem.item}</li>
          })}
        
     </ul>
    </div>
  )
}

export default List
