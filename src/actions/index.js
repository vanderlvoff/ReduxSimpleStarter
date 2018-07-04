import axios from 'axios';

const API_KEY = 'f9339c5738a03dd38ff7bd54c7e75695';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},ru`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
