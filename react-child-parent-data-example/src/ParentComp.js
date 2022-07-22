import React, { Component } from 'react'
import ChildComp1 from './ChildComp1';
import ChildComp2 from './ChildComp2';

export class ParentComp extends Component {
    constructor(){
        super();

       
    }

    setParentMessage = (incomingMessage) => {
        alert(incomingMessage);
    }
  render() {
    return (
      <div>
        <ChildComp1 clickHandler={this.setParentMessage}/>
        <ChildComp2 clickHandler={this.setParentMessage}/>
      </div>
    )
  }
}

export default ParentComp
