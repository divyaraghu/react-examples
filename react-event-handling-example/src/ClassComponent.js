import React, { Component } from 'react'

export class ClassComponent extends Component {
    hoverEventHandler(){
        alert("This message is from a Class event handler");
    }
  render() {
    return (
      <button onMouseEnter={this.hoverEventHandler} className="button"> Hover over me too </button>
    )
  }
}

export default ClassComponent
