import React, { useState } from 'react'
import addNameProp from './addNameProp';

function Comp2WithName(props) {
    return (
        <div>
            <h2> Prop name added to another component - {props.name} </h2>
        </div>
    )
}

export default addNameProp(Comp2WithName)
