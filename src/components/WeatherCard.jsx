import { describe } from '../weatherCodes.js';   // we use ../ to go up one folder to src/ ie out of components
import ForecastList from './ForecastList.jsx';   // we use ./ to say same folder


//we took what's writen in assigment 4 and put it in a function so we can use it in the WeatherCard component
export default function WeatherCard({ data }) {  // here app passes the fetched weather as the data prop
  const { name, current, daily } = data;         // destructure so we dont write data.current.temperature_2m => current.temperature_2m
  const [text, iconName] = describe(current.weather_code); // the code we get is matched to the condition text + icon name

  return (
    <section>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${iconName}@2x.png`}   // using openweathermap api for the icons cz open meteo dont have icons
        alt={text}                                                      // the text that matches my codes is the alt text in case the person cant see the icon
        width="100"
        height="100"
      />
      <p className="weather-city">{name}</p>
      <h2 className="weather-temp">{Math.round(current.temperature_2m)}°C</h2>
      <p className="weather-conditions">{text}</p>
      <p className="weather-detail">Feels like {Math.round(current.apparent_temperature)}°C</p>
      <p className="weather-detail">Humidity {current.relative_humidity_2m}%</p>
      <p className="weather-detail">Wind {current.wind_speed_10m} km/h</p>
      <ForecastList daily={daily} />             {/* passes the daily data down to ForecastList as a prop */}
    </section>
  );
}