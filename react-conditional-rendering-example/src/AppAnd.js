import React, {Component} from 'react';
import './App.css';

class AppAnd extends React.Component {

    constructor(){
        super();
        this.state = {
            isLoggedIn:true
        }
    }
    render(){
        return (
            this.state.isLoggedIn && <div className="App-header"> Welcome Divya - This is && operator example </div>);
        } 
}

export default AppAnd;
