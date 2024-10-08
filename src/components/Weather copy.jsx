import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import clear_Icon from "../assets/clear.png"
import cloud_Icon from "../assets/cloud.png"
import drizzle_Icon from "../assets/drizzle.png"
import rain_Icon from "../assets/rain.png"
import snow_Icon from "../assets/snow.png"
import Clock from "./Clock";
const Weather = ({ humadityIcon, windIcon }) => {
  const [weatherData, setWeatherData] = useState(false)
  const API_KEY = "6b94ffd107e62fe19e74c49b077d38fc"

  const allIcon = {
    "01d": clear_Icon,
    "01n": clear_Icon,
    "02d": cloud_Icon,
    "02n": cloud_Icon,
    "03d": cloud_Icon,
    "03n": cloud_Icon,
    "04d": drizzle_Icon,
    "04n": drizzle_Icon,
    "09d": rain_Icon,
    "09n": rain_Icon,
    "10d": rain_Icon,
    "10n": rain_Icon,
    "13d": snow_Icon,
    "13n": snow_Icon,
    
  }
  const search = async (city)=>{
    if(city === ""){
      alert("Enter City Name")
      return;
    }
    try{
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      const response = await fetch(URL)
      const data = await response.json()
      if(!response.ok){
        alert(data.message)
      }
      console.log(data)
      console.log(data.main.humidity)
      const icon = allIcon[data.weather[0].icon] || clear_Icon
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temp: Math.trunc(data.main.temp),
        location: data.name,
        country:data.sys.country,
        icon: icon
      })
    }
    catch(error) {
      console.error(error)
      console.log("Error to fetch data")
    }
  }
  useEffect(() => {
    search(" ")
  },[])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mt-5 container-box mx-auto">
          <Searchbar searchvalue={search} />
          <Clock/>
          {weatherData ? <>
            <div className="d-flex flex-column justify-content-between h-75 mt-5">
          <div className="text-center">
            <img src={weatherData.icon} alt="weather-icon" style={{width: '60px'}} />
            <h1 className="mb-0 fw-bold">{weatherData.temp}&deg;C</h1>
            <h2 className="cityName">{weatherData.location},{weatherData.country} </h2>
          </div>
          <div className="d-flex justify-content-between ">
            <div className="d-flex gap-2 flex-row card">
              <span className="icon">
                <img
                  src={humadityIcon}
                  alt="humidity-img"
                  style={{ width: "18px" }}
                />
              </span>
              <div>
                <span className="fw-bold">{weatherData.humidity} %</span>
                <p className="fw-bold mb-0" style={{ fontSize: "12px" }}>Humidity</p>
              </div>
            </div>
            <div className="d-flex gap-2 flex-row card">
              <span className="icon">
                <img src={windIcon} alt="wind-icon" style={{ width: "18px" }} />
              </span>
              <div>
                <span className="fw-bold">{weatherData.windSpeed} km/h</span>
                <p className="fw-bold mb-0" style={{ fontSize: "12px" }}>Wind speed</p>
              </div>
            </div>
          </div>
          </div>
          </>:<>
          <h6>Search city</h6>
          </>}
        </div>
      </div>
    </div>
  );
};

export default Weather;
