
import React from 'react'

function NameList(props) {
    return (
        props.names.map((name) => <div key={name}> <h2>{name}</h2> </div>)
    )
}

export default NameList;
