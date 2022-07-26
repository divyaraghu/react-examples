import React, { useEffect, useReducer } from 'react'
import { Button } from 'react-bootstrap';

function StopWatch() {

    //Step2: Define the initialState
    const initialState = {
        isRunning: false,
        label: "START",
        min: 0,
        hour: 0,
        timer: 0,
        msec: 0
    };

    //Step3: Define the reducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case 'toggle':
                if (state.isRunning) {
                    return { ...state, isRunning: false, label: "START" };
                } else {
                    return { ...state, isRunning: true, label: "STOP" };
                }
            case 'start':
                return { ...state, isRunning: true };
            case 'stop':
                return { ...state, isRunning: false };
            case 'reset':
                return { ...state, isRunning: false, timer: 0, msec: 0, min: 0, hour: 0, label: "START" };
            case 'tick':
                if (59 == state.timer) {
                    if (59 == state.min) {
                        return { ...state, timer: 0, hour: state.hour + 1, min: 0, msec: 0 };
                    } else {
                        return { ...state, timer: 0, min: state.min + 1, msec: 0 };
                    }

                } else {
                    return { ...state, timer: state.timer + 1, msec: 0 };
                }
            case 'mtick':
                return { ...state, msec: state.msec + 1 };
            default:
                return state;
        }
    }
    //Step1: Define the useReducer function
    const [state, dispatch] = useReducer(reducer, initialState);

    //Step5: Define the useEffect to run whenever the isRunning or timer state changes and issue the tick dispatch every 1000ms
    useEffect(() => {
        let interval = null;
        if (state.isRunning == false) {
            return;
        }

        //Step6.2: Set an interval to run the dispatch method only every 1 sec
        interval = setInterval(() => { dispatch({ type: 'tick' }) }, 1000);

        //Step7: Add a return method to clear the interval
        return (() => { clearInterval(interval) });

    }, [state.timer, state.isRunning])

    useEffect(() => {
        let interval = null;
        if (state.isRunning == false) {
            return;
        }
        //Step6.1: dispatch the msec dispatch ever 1 ms
        interval = setInterval(() => { dispatch({ type: 'mtick' }) }, 10);
        return (() => { clearInterval(interval) });
    }, [state.msec, state.isRunning])

    //Step4: add the buttons with dispatch functions, display the latest timer
    return (
        <div className='stopwatch-container'>
            <p> Stopwatch example using useEffect and useReducer Hooks </p>
            <div className="stopwatch">
                {state.hour > 0 ? <span> {state.hour}<span className='timeText'>h</span> </span> : <></>}{' '}
                {state.min > 0 ? <span> {state.min}<span className='timeText'>m</span></span> : <></>}{' '}
                {state.timer}<span className='timeText'>s</span>{' '}
                {state.msec > 0 ? <span className='msec'>{state.msec}</span> : <></>}
            </div>
            <hr />
            <div className="buttons">
                <Button variant="primary" onClick={() => dispatch({ type: 'toggle' })}> {state.label} </Button>{' '}
                <Button variant="primary" onClick={() => dispatch({ type: 'reset' })}> RESET </Button>
            </div>

        </div>
    )
}

export default StopWatch
