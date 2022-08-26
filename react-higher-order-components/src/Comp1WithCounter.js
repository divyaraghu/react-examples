import React from 'react'
import addCounter from './addCounter';

function Comp1WithCounter(props) {
    return (
        <div>
            <button onClick={props.clickHandler}> {props.name} - Clicked {props.count} times </button>
        </div>
    )
}
//Passing down a parameter while calling HOC function
export default addCounter(Comp1WithCounter, 5);
