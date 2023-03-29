import React,{useState} from 'react'
import "./_CategoriesBar.scss"
const keywords =[
  'All','Angular','React js','Music','Redux','Marathi Songs','Coding','Nursary Rhymes','HTML','Computers and Information Technology','Health'

]
function CategoriesBar() {
  const [activeElement, setActiveElement] = useState('All');
  const handleClick=(value)=>{
     setActiveElement(value);
  }
  return (
    <div className="CategoriesBar">
      {
        
        keywords.map((value,i)=>(<span
          onClick={()=>handleClick(value)}
          className={activeElement===value ?'active':''}
          key={i}>{value}</span>))
      }
    </div>
  )
}

export default CategoriesBar
