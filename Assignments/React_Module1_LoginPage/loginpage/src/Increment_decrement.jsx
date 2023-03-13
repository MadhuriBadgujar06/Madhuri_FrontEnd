import React,{useState} from 'react'
// import './Incr_Decr.css'

function Increment_decrement() {
  const [number, setNumber] = useState(0);
  const Increment=()=>{
    setNumber(number+1);
}
const Decrement=()=>{
  setNumber(number-1);
}
const Reset=()=>{
  setNumber(0);
}
  return (
    <div className='form'>
      <h1>React Web</h1>
     <div className='number'>{number}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <div><button onClick={Reset}>Reset</button></div>
    </div>
  )
}

export default Increment_decrement
