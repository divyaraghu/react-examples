import React, { useState, useEffect } from 'react'

function UseEffectExample() {
    const [count, setCount] = useState(0);

    //useEffect is a function that will be called after every time the component renders
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div className='container'>
            <h1> Use Effect Example </h1>
            <span> Used in place of lifecycle methods such as componentDidMount and componentDidUpdate</span>
            <div>
                <button onClick={() => setCount(count + 1)}> Click count - {count} </button>
            </div>
        </div>
    )
}

export default UseEffectExample
