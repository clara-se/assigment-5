//this function is copied from the assignment 4 is for the icons 
export const WEATHER_CODES = {
  0:  ['Clear sky', '01d'],
  1:  ['Mainly clear', '02d'],
  2:  ['Partly cloudy', '03d'],
  3:  ['Overcast', '04d'],
  45: ['Fog', '50d'],
  48: ['Rime fog', '50d'],
  51: ['Light drizzle', '09d'],
  53: ['Drizzle', '09d'],
  55: ['Heavy drizzle', '09d'],
  56: ['Freezing drizzle', '09d'],
  57: ['Freezing drizzle', '09d'],
  61: ['Light rain', '10d'],
  63: ['Rain', '10d'],
  65: ['Heavy rain', '10d'],
  66: ['Freezing rain', '13d'],
  67: ['Freezing rain', '13d'],
  71: ['Light snow', '13d'],
  73: ['Snow', '13d'],
  75: ['Heavy snow', '13d'],
  77: ['Snow grains', '13d'],
  80: ['Light showers', '09d'],
  81: ['Showers', '09d'],
  82: ['Violent showers', '09d'],
  85: ['Snow showers', '13d'],
  86: ['Heavy snow showers', '13d'],
  95: ['Thunderstorm', '11d'],
  96: ['Thunderstorm with hail', '11d'],
  99: ['Thunderstorm with hail', '11d'],
};

//the code that we re gonna get we re gonna match it to the condition and put a backup if we fetch an unknown weather
export function describe(code) {
  return WEATHER_CODES[code] ?? ['Unknown conditions', '03d'];
}