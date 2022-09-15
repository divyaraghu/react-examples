import React, { useReducer, useState } from 'react'

//In this example, state and action are objects instead of primitive types like string or integer
const initialState = {
    counterValue: 0
}
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return { counterValue: currentState.counterValue + action.offSetVal };
        case 'decrement':
            return { counterValue: currentState.counterValue - action.offSetVal };
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
}
function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [offSet, setOffSet] = useState(1);
    return (
        <div>
            Enter Offset value <input type="text" value={offSet} onChange={(e) => setOffSet(parseInt(e.target.value))} />
            <br /><br />
            <button onClick={() => dispatch({ type: 'increment', offSetVal: offSet })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', offSetVal: offSet })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <div> Count = {count.counterValue} </div>
        </div>
    )
}

export default Counter2
