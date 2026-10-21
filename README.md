   ## Install and run
```bash
   npm install
   npm run dev
```
   Then open http://localhost:5173/

   ## State and data flow
   - App holds city, weather, status and error with useState.
   - One useEffect with [city] fetches the data when the city changes.
   - SearchBar keeps the typed text in its own state and calls onSearch(city) on submit.
   - Props go down: App -> WeatherCard -> ForecastList. That is two levels at most, so no Context was needed.