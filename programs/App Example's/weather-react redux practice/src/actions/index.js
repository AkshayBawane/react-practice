import axios from 'axios';


const API_KEY = "7f3eeb04a1b152313a20ea7766694fce";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric` ;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
