import { SearchContextProvider } from '../../modules/weather/contexts/SearchHistoryContext'
import WeatherWrapper from '../../modules/weather/weather-index'

const Home = () => {
  return (
    <SearchContextProvider>
      <WeatherWrapper />
    </SearchContextProvider>
  )
}

export default Home
