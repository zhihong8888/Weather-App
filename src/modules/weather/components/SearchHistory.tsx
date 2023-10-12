import { Box, Typography } from '@mui/material'
import HistoryItem from './HistoryItem'
import { FC, useContext, useEffect, useState } from 'react'
import { SearchContext } from '../contexts/SearchHistoryContext'
import { ISearchHistory } from '../../../config/LocalStorage'
import dayjs from 'dayjs'
import { useGetWeatherByCity } from '../../../hooks/reactQueryHooks/weatherHooks'

interface IProps {}

const SearchHistory: FC<IProps> = (props) => {
  const { searchHistory, search, setSearch, onDeleteSearchHistory } = useContext(SearchContext)
  const [sortedHistory, setSortedHistory] = useState<ISearchHistory[]>([])

  const onClickSearch = (city: string) => {
    setSearch(city)
  }

  const onClickDelete = (city: string) => {
    onDeleteSearchHistory(city)
  }

  useEffect(() => {
    const sortedAsc = searchHistory.sort((objA, objB) => {
      const dateA = Date.parse(dayjs(objA.dateTime).toISOString())
      const dateB = Date.parse(dayjs(objB.dateTime).toISOString())
      return dateB - dateA
    })
    setSortedHistory(sortedAsc)
    console.log('sortedHistory: ', sortedHistory)
    console.log(dayjs('Thu, 12 Oct 2023 20:49:04 GMT').toISOString())
  }, [searchHistory])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: (theme) => theme.palette.primary.main,
        borderRadius: '24px',
        marginTop: '30px',
        padding: { xs: '15px 15px', md: '25px 20px' },
      }}
    >
      <Typography variant='body2' sx={{ marginBottom: { xs: '5px', md: '10px' } }}>
        Search History
      </Typography>
      <Box
        sx={{
          maxHeight: { xs: '42vh', md: '45vh', lg: '45vh' },
          overflowY: 'scroll',
        }}
      >
        {sortedHistory.map((data, id) => {
          return (
            <HistoryItem
              city={data.city}
              country={data.country}
              dateTime={data.dateTime}
              onClickSearch={onClickSearch}
              onClickDelete={onClickDelete}
              key={id}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default SearchHistory
