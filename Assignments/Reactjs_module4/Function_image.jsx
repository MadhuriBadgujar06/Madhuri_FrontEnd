import React,{useEffect} from 'react'

function Function_image() {
    useEffect(() => {
      return () => {
       console.log("Function Image Will Unmount");
      };
    });
  return (
    <div>
      <img src="https://thumbs.dreamstime.com/z/forest-path-4942848.jpg" width={"500px"} alt="" />
    </div>
  )
}

export default Function_image
