import React from 'react'

function FunctionComponent() {

    function functionEventHandler(){
        alert("This message is from the event handler of a function component");  
    }
  return (
    <button className="button" onMouseEnter={functionEventHandler}> Hover over me </button>
  );
}

export default FunctionComponent
