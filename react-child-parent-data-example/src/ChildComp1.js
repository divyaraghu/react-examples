import React from 'react'

function ChildComp1(props) {
  return (
    <div>
      <button onClick={() => props.clickHandler('This is a message from Child Component 1')}> Send message to Parent </button>
    </div>
  )
}

export default ChildComp1
