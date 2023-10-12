import { AxiosInstance } from 'axios'
import { ICurrentWeatherData, ICurrentWeatherParams } from '../api-interface/weather'
import { IAxiosBaseContext } from '../api-interface'

const WEATHER_API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY

export interface WeatherAPI {
  getWeatherByCity: (params: ICurrentWeatherParams) => Promise<ICurrentWeatherData>
}

export const weatherRequests = (instance: AxiosInstance) => {
  return {
    getWeatherByCity: async (params: ICurrentWeatherParams) => {
      const { q, mode, units, lang } = params
      const appId = WEATHER_API_KEY
      
      const searchParams = new URLSearchParams()
      q ? searchParams.append('q', q) : null
      appId ? searchParams.append('appid', WEATHER_API_KEY) : null
      mode ? searchParams.append('mode', mode) : null
      units ? searchParams.append('units', units) : null
      lang ? searchParams.append('lang', lang) : null

      const { data } = await instance.get<{ data: any }>(`?${searchParams.toString()}`)
      return data
    },
  } as unknown as IAxiosBaseContext
}
