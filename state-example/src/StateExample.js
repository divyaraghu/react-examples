import React, { Component } from 'react';
import './StateExample.css';

class StateExample extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        };
    }

    incrementCounter(curState){
        this.setState({
            counter: curState.counter+1
        })
    }

    resetCounter(){
        this.setState({
            counter: 0
        });
    }
    render(){
        return (
            <div>
                <header> State in a Class Component - Example </header>
                <div className="box counter-header">Counter value {this.state.counter} </div>
                <div className="box"> 
                    <button className="counter-buttons" onClick = { () => this.incrementCounter(this.state)} > Increment Counter </button> 
                    <button  className="counter-buttons" onClick = { () => this.resetCounter()} > Reset Counter </button>
                </div>

            </div>
        
        )
    }
}

export default StateExample;