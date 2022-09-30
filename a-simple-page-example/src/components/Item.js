import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div>
        <li key={this.props.todo.id}> {this.props.todo.title} </li>
      </div>
    )
  }
}

export default Item
