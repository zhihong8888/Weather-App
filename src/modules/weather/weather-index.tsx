import { Box } from '@mui/material'
import backgroundImg from 'src/assets/images/bg-dark.png'
import SearchField from '../../common/textFields/SearchField'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import BackgroundImage from '../../common/BackgroundImage'
import FilledMainBtn from '../../common/button/FilledMainBtn'
import TodayWeather from './components/TodayWeather'
import { useGetWeatherByCity } from '../../hooks/reactQueryHooks/weatherHooks'
import useDebounce from '../../hooks/useDebounce'
import { useQueryClient } from '@tanstack/react-query'
import { QueryKeys } from '../../api-interface'
import { SearchContext } from './contexts/SearchHistoryContext'
import {
  ISearchHistory,
  getSearchHistoryFromLocal,
  setSearchHistoryToLocal,
} from '../../config/LocalStorage'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '../../constants/date-format'
import { ICurrentWeatherData } from '../../api-interface/weather'

// https://www.figma.com/file/4QjlaIXuvEEMUdvvBKjDZH/Weather-App?type=design&node-id=0-1&mode=design
const WeatherWrapper = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>(dayjs().toString())
  const [data, setData] = useState<ICurrentWeatherData | undefined>(undefined)
  const { searchHistory, setSearchHistory, search, setSearch } = useContext(SearchContext)
  // const debouncedText = useDebounce(search, 500)
  const [debouncedText, setDebouncedText] = useState<string>('')
  const queryClient = useQueryClient()

  // Fetch Weather API
  const {
    refetch: fetchData,
    data: tmpData,
    isLoading,
  } = useGetWeatherByCity({
    q: search || 'Singapore',
    units: 'metric',
  })

  // Search Button
  const onClickSearch = () => {
    queryClient.removeQueries([QueryKeys.WEATHER_BY_CITY])
    setSearch(debouncedText)
  }

  // On enter
  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClickSearch()
    }
  }

  // on mount, load previous search history
  useEffect(() => {
    const history = getSearchHistoryFromLocal()
    let history2
    if (history) {
      try {
        history2 = JSON.parse(history) as ISearchHistory[]
        setSearchHistory(history2)
      } catch (err: any) {}
    }
  }, [])

  // update localstroage search history
  useEffect(() => {
    if (!searchHistory.length) return
    setSearchHistoryToLocal(searchHistory)
  }, [searchHistory])

  // on fetch success, update history
  useEffect(() => {
    const currentDatetime = dayjs()
    const city = tmpData?.name || ''
    const country = tmpData?.sys.country || ''
    setCurrentDateTime(currentDatetime.toString())

    if (!city && !country) return

    setData(tmpData)

    const historyExists = searchHistory.filter(
      (item) => item.city === city && item.country === country
    )

    if (historyExists.length > 0) {
      // Update history dateTime
      setSearchHistory(
        searchHistory.map((oldHistory) => {
          if (oldHistory.city === city && oldHistory.country === country) {
            // Create a *new* object with changes
            return { ...oldHistory, dateTime: currentDatetime.toString() }
          } else {
            // No changes
            return oldHistory
          }
        })
      )
    } else {
      // Add new history
      setSearchHistory((oldHistories) => [
        ...oldHistories,
        { city, country, dateTime: currentDateTime },
      ])
    }
  }, [tmpData])

  return (
    <>
      <BackgroundImage backgroundImg={backgroundImg} />

      <Box id='moduleWrapper' className='moduleWrapper'>
        <Box id='weather' display='flex' alignItems='center' flexDirection='column' height='100%'>
          <Box
            sx={{
              width: { xs: '90%', md: '80%', lg: '70%' },
              height: { xs: '90%', md: '80%', lg: '75%' },
            }}
          >
            <Box id='country-search' display='flex' justifyContent='center' paddingTop='24px'>
              <SearchField
                id='country-input'
                label='Country'
                value={debouncedText}
                sx={{ width: '100%', marginRight: '20px' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDebouncedText(e.target.value)}
                onKeyUp={onKeyUp}
              />
              <FilledMainBtn onClick={onClickSearch} icon={'Search'} />
            </Box>
            {data && (
              <TodayWeather
                currentTmp={data?.main.temp ? Math.round(data?.main.temp) : 0}
                highTemp={data?.main.temp_max ? Math.round(data?.main.temp_max) : 0}
                lowTemp={data?.main.temp_min ? Math.round(data?.main.temp_min) : 0}
                city={data?.name || ''}
                country={data?.sys.country || ''}
                dateTime={dayjs(currentDateTime).format(DATE_FORMAT)}
                humidity={data?.main.humidity ? Math.round(data?.main.humidity) : 0}
                weatherCategory={data?.weather?.[0]?.main || 'Clouds'}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default WeatherWrapper
