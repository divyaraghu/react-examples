import React, { Component } from 'react';
import './StateExample.css';

class StateExample extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        };
    }
    //Set State exammple with callback
    incrementCounter(){
        //Setstate method is called asynchronizly by react. 
        this.setState(
            {counter: this.state.counter+1}, 
            () => {console.log("Incremeted the counter. New value of counter is " , this.state.counter)} //A call back method (an arrow function () => {}) passed as a parameter to this.setState function
        )
    }
    //Set State example without callback
    resetCounter(){
        this.setState({
            counter: 0
        });
    }

    //Set State example with a previous state
    anotherIncrementExample(number){
        this.setState( (prevState, props) => ({counter: prevState.counter+ number})
        );
    }

    
    render(){
        return (
            <div>
                <header> State in a Class Component - Example </header>
                <div className="box counter-header">Counter value {this.state.counter} </div>
                <div className="box"> 
                    <button className="counter-buttons" onClick = { () => this.incrementCounter()} > Increment Counter </button> 
                    <button  className="counter-buttons" onClick = { () => this.resetCounter()} > Reset Counter </button>
                    <button  className="counter-buttons" onClick = { () => this.anotherIncrementExample(5)} > Increment By 5 </button>
                </div>

            </div>
        
        )
    }
}

export default StateExample;