import React, { Component } from 'react'

export class Class_Image extends Component {
    componentWillUnmount(){
        console.log("Class_Image Componenet will Unmount")
    }
  render() {
    return (
      <div>
        <img src="https://thumbs.dreamstime.com/z/forest-path-4942848.jpg" width={"500px"} alt="" />
      </div>
    )
  }
}

export default Class_Image
