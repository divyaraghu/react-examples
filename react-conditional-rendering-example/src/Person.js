import React from 'react'

function Person(props) {
    //Deconstruct the props in this const variable
    const person = props.person;
  return (
    <div>
      <h2>
        My name is {person.name}.  My age is {person.age}. My job is {person.job}
      </h2>
      
    </div>
  )
}

export default Person
