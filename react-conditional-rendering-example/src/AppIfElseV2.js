import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class AppIfElseV2 extends React.Component{
 
  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
    }
  }


  render(){
      var greeting = "";
      if(this.state.isLoggedIn){
        greeting = "Divya"
      }else{
        greeting = "Guest"
      }
        return (
          <div className="App">
            
            <header className="App-header">
              Welcome {greeting} - This is if else conditional rendering example - version 2
              </header>
          </div>
        );
     
   
  }
}

export default AppIfElseV2;
