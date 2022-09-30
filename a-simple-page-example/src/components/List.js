import React from 'react'
import Item from './Item'

function List(props) {
    const testList2 = 
        [
            {
              id: 4,
              title: "Setup development environment - updated from child",
              completed: true
            },
            {
              id: 5,
              title: "Develop website and add content - updated from child",
              completed: false
            },
            {
              id: 6,
              title: "Deploy to live server - updated from child",
              completed: false
            }
        ];
    
    function updateParentState(){
        props.setTestList(testList2);
    }

  return (
    <div>
       <ul>
          {props.testList.map(todo => <Item todo={todo}/>)}
      </ul>
      <button onClick={updateParentState}>Click me to update state of parent component </button>
    </div>
  )
}

export default List
