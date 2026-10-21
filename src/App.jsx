import { useState, useEffect } from 'react';             // state and effects, we take them from react so we can use them 
import SearchBar from './components/SearchBar.jsx';      //these are the new files i made for the components
import LoadingSpinner from './components/LoadingSpinner.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import WeatherCard from './components/WeatherCard.jsx';

import { loadWeather, friendly } from './api.js';       //these are the functions i made in api.js to get the data from the api and to make the error message readable for the user 

export default function App() {                          // we know that a component is a function that returns jsx
 //useState is smth from react that let u store the data so u can re render when the data changes.
  const [city, setCity] = useState('');                  // city is the city looked up and setCity is the one that makes changing city possible so re-render, and we start with an empty text cz no data fetshed
  const [weather, setWeather] = useState(null);          // same principal for weather and setweather, start null cz no data fetched
  const [status, setStatus] = useState('idle');          // idle cz no search has been made yet 
  const [error, setError] = useState('');                // this is for the error that the user see 

  //useEffect is smth from react that let u run code after render, and also when data city changes, so u dont loop forever or you will always re render 
  useEffect(() => {                                      
    if (!city) return;                                   // on the first one no city yet, but in also in case no city afterward just go out of the function effect

    // we start an async function cz were gonna use fetch api but the effect have to be ui not promise so we will call load at the end 
    async function load() {                              
      setStatus('loading');                              //  to show the loading message so user kow the state we re in
      try {
        const data = await loadWeather(city);            // wait for the info from geocoding + weather coming from the api
        setWeather(data);                                // we put the data we took in setweather so we changed the variable weather
        setStatus('ready');                              // we set the status to ready cz we were able to take the data, so iin te last lines where we check the status we will show the weather card with the data
      } catch (err) {
        setWeather(null);                                // remove every data from weather so we start from the begining 
        setError(friendly(err));                         // we changed the error variable cz we found an error and turned it into a readable message with function friendly
        setStatus('error');                              // we show the error box
      }
    }
    load();                                              // we called it cz we cant return a promise with use effect                  
  }, [city]);// we added city cause we want him to do use effect everytime the value of city changes

  return (
    <main>
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={setCity} disabled={status === 'loading'} /> {/* we pass the setCity to the search bar so it can change the city variable, also found an option disable where when we are loading the dearch button is turned off so the user wont be able to input anything new till after the loading has finished*/}

      {status === 'idle' && <p className="status">Search for a city</p>}   {/* && : show only if the left side is true and show the right side if its a falsy */}
      {status === 'loading' && <LoadingSpinner city={city} />}
      {status === 'error' && <ErrorMessage message={error} />}
      {status === 'ready' && <WeatherCard data={weather} />}
    </main>
  );
}