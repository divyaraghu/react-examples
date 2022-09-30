import React from "react";

function Hello(){
    return(
        <header>
            <h1>Hello! This is your first react app</h1>
        </header>
       
    );
}

//A simple function component with 2 properties and one ternary operation
function HelloWithProps(props){
    
    return(
        <div className="component">
            I am functional component! Hello {props.name}!!! You passed number - {props.number} . This number is {props.number > 100 ? "greater": "less"} than 100
        </div>
       
    );
}

//A simple Class component with 2 properties
class Car extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="component">  I am a class component. Color passed is {this.props.color}. Model passed is {this.props.model} </div>);
    }
}

export {Hello,HelloWithProps,Car};
