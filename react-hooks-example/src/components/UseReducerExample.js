import React from 'react'
import Counter from './Counter'
import Counter2 from './Counter2'

function UseReducerExample() {
    return (
        <div className='container'>
            <h1>Use Reducer Hook - Simple state and action Example </h1>
            <Counter />

            <h1>Use Reducer Hook - Complex state and action Example </h1>
            <Counter2 />
        </div>
    )
}

export default UseReducerExample
