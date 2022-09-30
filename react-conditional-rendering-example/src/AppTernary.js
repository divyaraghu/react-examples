import React, {Component} from 'react';
import './App.css';

class AppTernary extends React.Component {

    constructor(){
        super();
        this.state = {
            isLoggedIn:true
        }
    }
    render(){
        return (this.state.isLoggedIn ? (<div className="App-header"> Welcome Divya - This is ternary operator example </div>) : (<div className="App-header"> Welcome guest - this is ternary operator example </div>));
    } 
}

export default AppTernary;
