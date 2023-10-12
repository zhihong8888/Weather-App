import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useGetAxiosRequests } from '../../config/AxiosInstanceProvider'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ICurrentWeatherParams } from '../../api-interface/weather'
import { QueryKeys } from '../../api-interface'

export const useGetWeatherByCity = ({ q, mode, units, lang }: ICurrentWeatherParams) => {
  const { weatherAxios } = useGetAxiosRequests()

  return useQuery(
    [QueryKeys.WEATHER_BY_CITY, q, mode, units, lang],
    () =>
      weatherAxios.getWeatherByCity({
        q,
        mode,
        units,
        lang,
      }),
    {
      // enabled: false,
      onError: (error: AxiosError) => {
        const err = error?.response?.data as any
        toast.error(err?.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      },
    }
  )
}
