import React, { useState } from 'react'
import List from './List';

function Container() {
    //Use useState hook in order to use state in a functional component
    const [testList,setTestList] = useState(
        [
            {
              id: 1,
              title: "Setup development environment",
              completed: true
            },
            {
              id: 2,
              title: "Develop website and add content",
              completed: false
            },
            {
              id: 3,
              title: "Deploy to live server",
              completed: false
            }
        ]
    );
//Pass the testList to a child component called List as property
  return (
    <div>
      <h1>This is a container component</h1>
      <p>Container component content</p>
      
      <List testList={testList} setTestList={setTestList}/>
    </div>
  )
}

export default Container
