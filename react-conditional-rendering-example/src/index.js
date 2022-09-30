import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppIfElse from './AppIfElse';
import AppIfElseV2 from './AppIfElseV2';
import AppTernary from './AppTernary';
import AppAnd from './AppAnd';
import reportWebVitals from './reportWebVitals';
import NameList from './NameList';
import PersonList from './PersonList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const namesList = ["Radha", "Geetha", "Latha"]
root.render(
  <React.StrictMode>
    <AppIfElse />
    <AppIfElseV2/>
    <AppTernary />
    <AppAnd />
    <NameList names={namesList}/>
    <PersonList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
