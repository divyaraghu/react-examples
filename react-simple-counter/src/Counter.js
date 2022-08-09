import React from 'react';
import { Component } from 'react';
import './counter.css';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrementCounter = () => {
        this.setState({
            counter:this.state.counter - 1
        })
    }

    resetToZero = () => {
        this.setState({
            counter: 0
        })
    }

    render(){
        return(
            <div className='App'>
                <div className='counter'>
                    <h2> State Value is {this.state.counter} </h2>
                </div>
                <div className='button-container'>
                    <button onClick={this.incrementCounter}> Increment </button>
                </div>
                <div className='button-container'>
                    <button onClick={this.decrementCounter}> Decrement </button>
                </div>

                <div className='button-container'>
                    <button onClick={this.resetToZero}> Reset to Zero </button>
                </div>
            </div>
        )
    }
    
}

export default Counter;