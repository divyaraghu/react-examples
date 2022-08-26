import React, { Component } from 'react'
import addNameProp from './addNameProp';
export class Comp1WithName extends Component {


    render() {
        return (
            <div>
                <button> Prop name added to component - {this.props.name} </button>
            </div>
        )
    }
}

export default addNameProp(Comp1WithName)
