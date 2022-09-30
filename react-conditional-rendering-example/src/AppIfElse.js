import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class AppIfElse extends React.Component{
 
  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
    }
  }


  render(){
     
      if(this.state.isLoggedIn){
        return (
          <div className="App">
            <header className="App-header">
              Welcome Divya - This is if else conditional rendering example
              </header>
          </div>
        );
      }else{
        return(
          <div className="App">
            <header className="App-header">
              Welcome Guest! - This is if else conditional rendering example
              </header>
          </div>
        )
      }
   
  }
}

export default AppIfElse;
