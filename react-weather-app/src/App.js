import './index.css';
import React from 'react';
import { useState } from 'react';
import moment from 'moment';


const api = {
  key: "f1ac4fbde2f95d55a3ea8dfcce84dd70",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});

  //API call and set the result in weather state variable
  const handleSearch = (event) => {
    if(event.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
    <main> 
      <div className="search-container">
        <input type="text" className='search-input-bar' placeholder='Search...' 
        onChange={event => setQuery(event.target.value)} value={query} onKeyPress = {handleSearch}/>
      </div>
      {typeof weather.main != "undefined" ? (
        <div>
          <div className='location-container'> 
            <div className='location'> {weather.name}, {weather.sys.country} </div>
            <div className='current-date'> {moment().format('dddd MMMM Do YYYY, h:mm:ss a')}</div>
          </div>
          <div className='weather-container'> 
            <div className='temperature'> {Math.round(weather.main.temp)}°C</div>
            <div className='weather-type'> {weather.weather[0].main}</div>
          </div>
      </div>
      ) : (<div></div>)}
    </main>
  </div>
  
  );
}

export default App;
