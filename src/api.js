//define my API's
const GEO = 'https://geocoding-api.open-meteo.com/v1/search';   // this is the api that is gonna give me the coordinates of the city the user inputs
const WX = 'https://api.open-meteo.com/v1/forecast';            // this is the api that with the coordinates gives me the weather

//async cz gonna return a promise , since we are fetching the api
async function getJSON(url) {                                   // its not exported cz just going to use it in this file
  const response = await fetch(url);                            // calling the api, we are fetching the url and waiting.
  if (!response.ok) throw new Error(`HTTP ${response.status}`); // show me if the error is 4 (client) or 5 (server not working). we added it cz fetch doesn't treat 4xx/5xx as an error by itself, so we throw it ourselves
  return response.json();
}

export async function loadWeather(city) {                       // the function that is used in App.jsx
  const q = new URLSearchParams({ name: city, count: 1 });      // so we dont write manually the url, and we avoid mistakes
  const geo = await getJSON(`${GEO}?${q}`);                     // get the data from the geo api
  if (!geo.results?.length) throw new Error('not-found');       // ?. is to avoid a crash when results is missing. so it doesnt crash if the user tries to fetch a non existing city, we show him a message of what he did wrong

  const { latitude, longitude, name } = geo.results[0];         // pulls the 3 fields out of the first geocoding result
  const p = new URLSearchParams({                               // get the data from the open weather by calling the api
    latitude,
    longitude,
    forecast_days: 3,                                           // the parameters i want
    current:                                                    // now we take parameters other than temperature
      'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code',
    daily: 'temperature_2m_max,temperature_2m_min',
  });
  return { name, ...(await getJSON(`${WX}?${p}`)) };            // spread so it puts the city name first, then all the weather data, in one new object
}

//function in case we have an error, we send a message to the user so he knows what he did wrong
export function friendly(err) {                                 // technical error -> message for the user
  if (err.message === 'not-found') {
    return 'City not found. Check the spelling and try again.';
  }
  return "Couldn't reach the weather service. Check your connection and try again.";
}