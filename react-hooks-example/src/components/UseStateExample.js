import React, { useState } from 'react'

function UseStateExample() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [countObj, setCountObj] = useState({
        counterName: '',
        counterVal: 0
    });
    //useState for arrays
    const [items, setItems] = useState([]);

    const incrementCounter1 = (event) => {
        setCounter1(counter1 + 1);
    }

    const incrementCounterObj = () => {
        setCountObj({
            counterName: 'test',
            counterVal: countObj.counterVal + 1
        })
    }

    const addItems = () => {
        //The spread operator will copy the array to an array called items and append new objects to the array
        setItems([
            ...items, {
                id: items.length + 1,
                value: Math.floor(Math.random() * 10)
            }
        ]);
    }

    return (
        <div className="container">
            <h1> Use State Example </h1>
            Increment by 1 - <button onClick={incrementCounter1}> Counter1 - {counter1} </button>
            <br /> <br />
            <h3> useState with direct call to setCounter example </h3>
            Increment by 5 - <button onClick={() => setCounter2(counter2 + 5)}> Count by 5 - {counter2} </button >
            <br /> <br />
            <h3> useState with Object example </h3>
            Counter with name - <button onClick={incrementCounterObj}> {countObj.counterName} - {countObj.counterVal} </button>
            <br /> <br />
            <h3> useState with Array example </h3>
            <button onClick={addItems}> Add an item </button>
            <br />
            <ul>
                {
                    items.map(item => <li key={item.id}> {item.id} - {item.value} </li>)
                }
            </ul>
        </div >
    )
}

export default UseStateExample
