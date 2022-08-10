import React from "react";
import { useState } from "react";
import './App.css';

const App = () => {

  const [temperatureVal, setTemperatureVal] = useState(30);
  const [temperatureColor, setTemperatureColor] = useState('cold');
 
  const incrementTemp = () => {
    const newTemp = temperatureVal+1;
    //Call hook method to set the temperature value
    setTemperatureVal(newTemp)
    setNewTempColor(newTemp)
  }

  const decrementTemp = () => {
    const newTemp = temperatureVal-1;
    if(newTemp == -1){
      return;
    }
    setTemperatureVal(newTemp)
    setNewTempColor(newTemp)
    
  }

  const setNewTempColor = (newTemp) => {
    if(newTemp >= 30){
      //Call hook method to set the temperature color
      setTemperatureColor('hot')
    }else{
      setTemperatureColor('cold')
    }
  }
  return(
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          <div> {temperatureVal}°C</div>
        </div>
      </div>   
      <div className="button-container"> 
        <button onClick={incrementTemp}>+</button>
        <button onClick={decrementTemp}>-</button>
      </div>
    </div>
  )
}

export default App;