import { useState } from 'react'; // took useState from react to change the data

export default function SearchBar({ onSearch, disabled }) {  // this is { } pulls the props out of the object
  const [text, setText] = useState('');                      // what the user is typing which is the local state 

  function handleSubmit(e) {
    e.preventDefault();                                      // stop the default option of the browser to reload the page when the user presses enter
    const city = text.trim();                                // we trim the text to remove extra spaces 
    if (!city) return;                                       // this is to ignore empty input
    onSearch(city);                                          // we call the onSearch function with the city name
  }

  return (
    /* replace class with className for jsx to understabd*/
    <form className="search-form" onSubmit={handleSubmit}>   {/* when we click enter or button search it wil call  handleSubmit */}
      <input
        className="search-input"
        type="text"
        value={text}                                         // the input always shows the state value
        onChange={(e) => setText(e.target.value)}            // e.target = input element and e.target.value is what's typed so far and setText saves it in state
        placeholder="Search for a city"
        aria-label="City name"                               // aria is for accessibility
        required
      />
      <button className="search-button" type="submit" disabled={disabled}>
        Search
      </button>
    </form>
  );
}