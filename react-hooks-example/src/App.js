import logo from './logo.svg';
import './App.css';
import UseStateExample from './components/UseStateExample.js';
import UseEffectExample from './components/UseEffectExample';
import UseEffectConditionalrender from './components/UseEffectConditionalrender';
import UseContextExample from './components/UseContextExample';
import UseReducerExample from './components/UseReducerExample';
import UseReducerAndUseEffect from './components/UseReducerAndUseEffect';
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import React from 'react';



function App() {


  return (
    <Nav className="container" activeKey="/">
      <Nav.Item className="p-2 m-2"> <NavLink activeclassname="active" to="/UseStateExample">UseStateExample</NavLink> </Nav.Item>
      <Nav.Item className="p-2 m-2"> <NavLink activeclassname="active" to="/UseEffectExample">UseEffectExample</NavLink> </Nav.Item>
      <Nav.Item className="p-2 m-2"> <NavLink activeclassname="active" to="/UseEffectConditionalrender">UseEffectConditionalrender</NavLink> </Nav.Item>
      <Nav.Item className="p-2 m-2"> <NavLink activeclassname="active" to="/UseContextExample">UseContextExample</NavLink> </Nav.Item>
      <Nav.Item className="p-2 m-2"> <NavLink activeclassname="active" to="/UseReducerExample">UseReducerExample</NavLink> </Nav.Item>
      <Nav.Item className="p-2 m-2"> <NavLink activeclassname="active" to="/UseReducerAndUseEffect">UseReducerAndUseEffect</NavLink> </Nav.Item>
    </Nav>


  );
}

export default App;
