import React, { useState } from 'react'

function UseStateExample() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [countObj, setCountObj] = useState({
        counterName: '',
        counterVal: 0
    })

    const incrementCounter1 = (event) => {
        setCounter1(counter1 + 1);
    }

    const incrementCounterObj = () => {
        setCountObj({
            counterName: 'test',
            counterVal: countObj.counterVal + 1
        })
    }

    return (
        <div>
            <h1> Use State Example </h1>
            Increment by 1 - <button onClick={incrementCounter1}> Counter1 - {counter1} </button>
            <br /> <br /> <br /> <br />
            Increment by 5 - <button onClick={() => setCounter2(counter2 + 5)}> Count by 5 - {counter2} </button >
            <br /> <br /> <br /> <br />
            Counter with name - <button onClick={incrementCounterObj}> {countObj.counterName} - {countObj.counterVal} </button>
        </div >
    )
}

export default UseStateExample
