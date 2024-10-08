import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import clear_Icon from "../assets/clear.png";
import cloud_Icon from "../assets/cloud.png";
import drizzle_Icon from "../assets/drizzle.png";
import rain_Icon from "../assets/rain.png";
import snow_Icon from "../assets/snow.png";
import Clock from "./Clock";

const Weather = ({ humadityIcon, windIcon }) => {
  const [weatherData, setWeatherData] = useState(false);
  const API_KEY = "6b94ffd107e62fe19e74c49b077d38fc";   //API KEY

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
  };

  // search city name function
  const search = async (city) => {
    // if input box empty and user search than this alert show
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
      const icon = allIcon[data.weather[0].icon] || clear_Icon;
      setWeatherData({
        humidity: data.main.humidity,  //get humidity
        windSpeed: data.wind.speed,    //get wind speed
        temp: Math.trunc(data.main.temp), //get temp
        location: data.name, //get city name
        country: data.sys.country, //get country 
        icon: icon, //get weather icon
      });
    } catch (error) {
      console.error(error);
      alert("Error fetching weather data.");
    }
  };

  const fetchUserLocationWeather = async (lat, lon) => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        search(data.name); // Call search with city name
      }
    } catch (error) {
      console.error("Error fetching weather data for location", error);
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchUserLocationWeather(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location", error);
          search("New Delhi"); // Default to a city if location access is denied
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      search("New Delhi"); // Default to a city if geolocation is unavailable
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mt-5 container-box mx-auto">
          <Searchbar searchvalue={search} />
          {weatherData ? (
            <>
              <Clock />
              <div className="d-flex flex-column justify-content-between h-75 mt-5">
                <div className="text-center">
                  <img
                    src={weatherData.icon}
                    alt="weather-icon"
                    style={{ width: "60px" }}
                  />
                  <h1 className="mb-0 fw-bold">{weatherData.temp}&deg;C</h1>
                  <h2 className="cityName">
                    {weatherData.location} <small style={{fontSize: '14px'}}>{weatherData.country}</small>
                  </h2>
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
                      <p className="fw-bold mb-0" style={{ fontSize: "12px" }}>
                        Humidity
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-row card">
                    <span className="icon">
                      <img
                        src={windIcon}
                        alt="wind-icon"
                        style={{ width: "18px" }}
                      />
                    </span>
                    <div>
                      <span className="fw-bold">
                        {weatherData.windSpeed} km/h
                      </span>
                      <p className="fw-bold mb-0" style={{ fontSize: "12px" }}>
                        Wind speed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h6 className="text-center">Fetching Weather data...</h6>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
