import React from 'react'
import addAlert from './addAlert'

function Comp1ForAlert(props) {
    return (
        <div>
            <button onClick={props.clickHandler}> Test me for alerts </button>
        </div>
    )
}

export default addAlert(Comp1ForAlert)
