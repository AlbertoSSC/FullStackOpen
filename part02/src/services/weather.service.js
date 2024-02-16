import axios from "axios";

export const getCityWeather = (city) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_OPENWEATHERMAP_KEY
    }&units=metric`
  );
  return request.then((response) => response.data);
};

// {
//     "coord": {
//         "lon": -0.1257,
//         "lat": 51.5085
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 285.74,
//         "feels_like": 285.25,
//         "temp_min": 284.18,
//         "temp_max": 286.56,
//         "pressure": 1005,
//         "humidity": 84
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 2.06,
//         "deg": 0,
//         "gust": 10.29
//     },
//     "clouds": {
//         "all": 100
//     },
//     "dt": 1708029541,
//     "sys": {
//         "type": 2,
//         "id": 2075535,
//         "country": "GB",
//         "sunrise": 1707981352,
//         "sunset": 1708017222
//     },
//     "timezone": 0,
//     "id": 2643743,
//     "name": "London",
//     "cod": 200
// }
