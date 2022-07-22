import React from 'react'

function ChildComp2(props) {
  return (
    <div>
      <button onClick={() => props.clickHandler('This is a message from Child Component 2')}> Send message to Parent </button>
    </div>
  )
}

export default ChildComp2
