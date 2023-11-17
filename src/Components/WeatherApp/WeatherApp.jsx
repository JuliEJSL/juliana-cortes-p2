import React from "react";
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';


const WeatherApp = ()=> {

    let api_key = "3106b1466cef5a6697a705468307f018";

    const search = () =>{
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}London&units=Metric&appid=${api_key}`;
    }

    return (
        <div className="container">
         <div className="top-bar">
          <input type="text" className="cityInput" placeholder='Search'/>
          <div className="search-icon" onClick={()=>{search()}}>
           <img src={search_icon} alt="search icon"/>
          </div>
          </div>
          <div className="weather-image">
            <img src={cloud_icon}    alt="icon of cloud"/>
          </div>
          <div className="weather-temp">70°</div>
          <div className="weather-location">London</div>
          <div className="data-container">
             <div className="element">
                <img src={humidity_icon}    alt="humidity icon" className="icon"/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">humidity</div>
                </div>
             </div>
              <div className="element">
                <img src={wind_icon}    alt="wind icon" className="icon"/>
                <div className="data">
                    <div className="humidity-percent">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
             </div>
          </div>


        </div>
    )
}

export default WeatherApp