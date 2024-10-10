# Weather App with Dynamic Time

This is a weather application built using React, which allows users to search for weather information in any city worldwide. It fetches weather data from the OpenWeatherMap API, displaying the current temperature, humidity, wind speed, and dynamically adjusts the time according to the searched city’s timezone.

![alt text](src/assets/app_ui.png)
# Features

* City-Based Weather Search: Users can enter any city name to get the current weather information, including:
    * Temperature (°C)
    * Humidity (%)
    * Wind speed (km/h)
    * City and country name

* Dynamic Time Update: The app adjusts and displays the local time of the searched city based on the timezone data from the OpenWeatherMap API.
* Default Location Handling: The app automatically detects the user’s location using the browser’s geolocation feature and shows the weather for that location by default. If location access is denied, the app defaults to showing the weather for London.
* Clock Component: The app includes a clock that updates in real time, displaying the local time of the selected city.

# Technologies and tools 

* ReactJS
* HTML
* CSS
* Bootstrap
* VS Code
* OpenWeatherMap API

# Installation and Usage
To use this app, you can follow these steps:


* Clone the repository or download the source code.
* Open the project in your preferred code editor.
* Run npm install to install the necessary dependencies.
* Run npm run dev to start the development server.
* Open your browser and navigate to http://localhost:5173 to use the app.