import React, { ReactNode, createContext, useContext } from 'react'
import axios from 'axios'
import { weatherRequests } from '../api/weatherApi'
import { IAxiosBaseContext } from '../api-interface'

export interface IProps {
  children: ReactNode
}

const WEATHER_API_URL = import.meta.env.VITE_APP_WEATHER_URL
const weatherAxiosInstance = axios.create({
  baseURL: WEATHER_API_URL,
})

const weatherAxios = weatherRequests(weatherAxiosInstance)

export interface ApiModel {
  weatherAxios: IAxiosBaseContext
}

const axiosBaseContext = createContext<ApiModel | undefined>(undefined)

const AxiosInstanceProvider: React.FC<IProps> = ({ children }) => {
  return (
    <axiosBaseContext.Provider value={{ weatherAxios }}>
      {children}
    </axiosBaseContext.Provider>
  )
}

export default AxiosInstanceProvider

export const useGetAxiosRequests = () => {
  const context = useContext(axiosBaseContext)
  if (!context) {
    throw new Error('you dont have axios requests')
  }
  return context
}
