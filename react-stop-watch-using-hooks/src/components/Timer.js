import React, { useEffect, useReducer } from 'react'
import { Button } from 'react-bootstrap'

function Timer() {
    const initialState = {
        isRunning: false,
        hrs: 0,
        min: 0,
        sec: 0,
        remSec: 0,
        remMin: 0,
        remHrs: 0,
        startLabel: 'Start'
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setHrs': {
                return { ...state, hrs: action.hrs, remHrs: action.hrs };
            }
            case 'setMin': {
                return { ...state, min: action.min, remMin: action.min };
            }
            case 'setSec': {
                return { ...state, sec: action.sec, remSec: action.sec };
            }
            case 'start':
                return { ...state, startLabel: 'Start', isRunning: true, remSec: state.remSec, remMin: state.remMin, remHrs: state.remHrs };
            case 'stop':
                return { ...state, startLabel: 'Restart', isRunning: false };
            case 'reset':
                return { ...state, hrs: 0, min: 0, sec: 0, isRunning: false };
            case 'elapseSec': {
                if (state.remSec > 0) {
                    return { ...state, remSec: state.remSec - 1 };
                } else {
                    if (state.remMin > 0) {
                        return { ...state, remMin: state.remMin - 1, remSec: 59 };
                    } else {
                        if (state.remHrs > 0) {
                            return { ...state, remHrs: state.remHrs - 1, remMin: 59, remSec: 59 };
                        } else {
                            return { ...state, remHrs: 0, remMin: 0, remSec: 0 };
                        }
                    }
                }
            }

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let interval = null;
        if (!state.isRunning) {
            return;
        }
        interval = setInterval(() => { dispatch({ type: 'elapseSec' }) }, 1000);

        return (() => { clearInterval(interval) });
    }, [state.isRunning, state.remSec])

    return (
        <div className='timer'>
            <p> Timer example using useEffect and useReducer Hooks </p>
            <input type="text" placeholder='Hrs' value={state.hrs} onChange={(e) => dispatch({ type: 'setHrs', hrs: e.target.value })} />
            <input type="text" placeholder='Mins' value={state.min} onChange={(e) => dispatch({ type: 'setMin', min: e.target.value })} />
            <input type="text" placeholder='Secs' value={state.sec} onChange={(e) => dispatch({ type: 'setSec', sec: e.target.value })} />
            {
                state.isRunning ?
                    (<div className='remSec'>
                        {state.remHrs}h : {state.remMin}m : {state.remSec}s
                    </div>) :
                    (<div className='remSec'>
                        {state.hrs}h : {state.min}m : {state.sec}s
                    </div>)
            }
            <div className="buttons">
                <Button variant="primary" onClick={() => dispatch({ type: 'start' })}>{state.startLabel} </Button>{' '}
                <Button variant="primary" onClick={() => dispatch({ type: 'stop' })}>Stop </Button>{' '}
                <Button variant="primary" onClick={() => dispatch({ type: 'reset' })}>Reset </Button>
            </div>
        </div>
    )
}

export default Timer
