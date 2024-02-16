import { useEffect, useState } from "react";

import { getCityWeather } from "../services/weather.service";

export const WeatherConditions = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCityWeather(city).then(setWeather);
  }, [city]);

  const weatherIcon = weather?.weather[0].icon;
  const weatherIconDescription = weather?.weather[0].description;

  if (!weather) return <div>loading...</div>;

  return (
    <div>
      <h3>Weather in {weather.name}</h3>
      <span>// {weather.weather[0].description} \\</span>
      <br />
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt={weatherIconDescription}
      />
      <table>
        <tbody>
          <tr>
            <td>Tempeture: </td>
            <td>
              {weather.main.temp} ºC (min: {weather.main.temp_min}, max:{" "}
              {weather.main.temp_max})
            </td>
          </tr>
          <tr>
            <td>Humidity: </td>
            <td>{weather.main.humidity} %</td>
          </tr>
          <tr>
            <td>Wind:</td>
            <td>{weather.wind.speed} m/s</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
