import React from 'react'
import './WeatherApp.css'
import searchIcon from '../Assets/search.png'
import clearIcon from '../Assets/clear.png'
import rainIcon from '../Assets/rain.png'
import snowIcon from '../Assets/snow.png'
import windIcon from '../Assets/wind.png'
import drizzleIcon from '../Assets/drizzle.png'
import cloudIcon from '../Assets/cloud.png'
import humidityIcon from '../Assets/humidity.png'


function WeatherApp() {

  const Weather = () => {
  let APIkey =   "a2f00fdfa3b2821e0eef761440d98bca";

  const search = () => {
    const element = document.getElementsByClassName("cityInput");
      
  }

  }

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className='cityInput' placeholder='Search City' />
        <div className="search-icon">
          <img src={searchIcon} alt="Search" />
        </div>
      </div>        

      <div className="weather-img">
        <img src={cloudIcon} alt="" />
      </div>
      <div className="weather-temp">24°c </div>
      <div className="weather-location">Islamabad</div>

      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt=""  className='icon'/>
          <div className="data">
            <div className="humidity-percent">60%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
    
        <div className="element">
          <img src={windIcon} alt="" className='icon' />
          <div className="data">
            <div className="Wind-percent">60%</div>
            <div className="text">Wind</div>
          </div>
         
        </div>
      </div>
    </div>

  )
}

export default WeatherApp