import { WeatherAPI } from '../api/weatherApi'

export interface IAxiosBaseContext extends WeatherAPI {}

export enum QueryKeys {
  // Weather
  WEATHER_BY_CITY = 'weather-by-city',
}
