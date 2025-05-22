import React, { useState } from 'react';
import './WeatherApp.css'
import searchIcon from '../Assets/search.png'
import clearIcon from '../Assets/clear.png'
import rainIcon from '../Assets/rain.png'
import snowIcon from '../Assets/snow.png'
import windIcon from '../Assets/wind.png'
import drizzleIcon from '../Assets/drizzle.png'
import cloudIcon from '../Assets/cloud.png'
import humidityIcon from '../Assets/humidity.png'



  const WeatherApp =  () => {
  let APIkey =   "a2f00fdfa3b2821e0eef761440d98bca";

  const[wicon, setWicon] = useState(cloudIcon);
  
  const search =  async () => {
    const element = document.getElementsByClassName("cityInput");

    if(element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${APIkey}`;
    
    let response = await fetch(url);
    let data = await response.json(); 

    if (data.cod !== 200) {
      alert("City not found!");
      return; 
    }

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("Wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+ "%";
    wind[0].innerHTML = data.wind.speed + "km/h";
    temprature[0].innerHTML = data.main.temp + "°c";
    location[0].innerHTML = data.name;
  
    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
      setWicon(clearIcon);
    }
    else  if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
      setWicon(cloudIcon);
    } 
    else  if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
      setWicon(drizzleIcon);
    }
    else  if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
      setWicon(rainIcon);
    }
    else  if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
      setWicon(clearIcon);
    }
    else  if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){ 
      setWicon(clearIcon);
    }
    else  if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
      setWicon(snowIcon);
    }
    else setWicon(clearIcon);

  }

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className='cityInput' placeholder='Search City' />
        <div className="search-icon" onClick={search}>
          <img src={searchIcon} alt="Search" />
        </div>
      </div>        

      <div className="weather-img">
        <img src={wicon} alt="" />
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
            <div className="Wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
         
        </div>
      </div>
    </div>

  )
}

export default WeatherApp