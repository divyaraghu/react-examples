import React, { useEffect, useReducer, useState } from 'react'

function UseReducerAndUseEffect() {

    const initialState = {
        counter: 0,
        isRunning: false
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'start':
                return { ...state, isRunning: true };
            case 'stop':
                return { ...state, isRunning: false };
            case 'tick':
                return { ...state, counter: state.counter + 1 };
            case 'reset':
                return { counter: 0, isRunning: false };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let interval = null;
        if (false == state.isRunning) {
            return;
        } else {
            //Dispatch a tick type action every 1000 ms
            interval = setInterval(() => {
                dispatch({ type: 'tick' });
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };

    }, [state.isRunning, state.counter]);


    return (
        <div className="container">
            <h1>Stop watch example using UseReducer and UseEffect hooks</h1>
            <button onClick={() => dispatch({ type: 'start' })}>Start </button>
            <button onClick={() => dispatch({ type: 'stop' })}>Stop </button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset </button>
            <br /> <br />
            Timer: {state.counter} s
        </div>
    )
}

export default UseReducerAndUseEffect
