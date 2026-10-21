export default function ForecastList({ daily }) {      // here WeatherCard passes the daily data as a prop
  return (
    <ul className="forecast">
      {daily.time.map((day, i) => (                    // replaces('li') loop from assignment 4 cause cant have for{ } and if{} in jsx
        <li key={day}>                                 {/* key=unique id so react can tracks each item and since each day is a unique date, its gonna be the key */}
          {day}: {daily.temperature_2m_max[i]}°
        </li>
      ))}
    </ul>
  );
}