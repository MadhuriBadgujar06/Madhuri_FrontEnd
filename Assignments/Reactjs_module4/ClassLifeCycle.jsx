import React, { Component } from 'react'
import Class_Image from './Class_Image';
import { useState } from 'react';

export class ClassLifeCycle extends Component {
    constructor()
    {
        super();
        this.state={
           number : 1,
           isImg : true
        }
    }
    componentDidMount()
    {
        console.log("componentDidMount");
    }
    componentDidUpdate()
    {
        console.log("ComponentDidUpdate");
    }
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({number:this.state.number+1})}}>+</button>
        <span>{this.state.number}</span>
        <button onClick={()=>{this.setState({number:this.state.number-1})}}>-</button>

        <br />
        <button onClick={()=>this.setState({isImg:!this.state.isImg})}>Toggle</button>
        {this.state.isImg?<Class_Image/>:null}
      </div>
    )
  }
}

export default ClassLifeCycle
