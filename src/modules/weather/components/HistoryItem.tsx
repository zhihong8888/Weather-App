import { Box, Typography } from '@mui/material'
import OutlineIconBtn from '../../../common/button/OutlineIconBtn'
import { FC } from 'react'
import { DATE_FORMAT } from '../../../constants/date-format'
import dayjs from 'dayjs'

interface IProps {
  city: string
  country: string
  dateTime: string
  onClickSearch: (city: string) => void
  onClickDelete: (city: string) => void
}

const HistoryItem: FC<IProps> = (props) => {
  const { city, country, dateTime, onClickSearch, onClickDelete } = props

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.dark,
        borderRadius: '12px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        padding: '15px 10px',
        margin: '10px 0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'flex-start', md: 'space-between' },
            width: '100%'
          }}
        >
          <Typography variant='body1' sx={{ marginLeft: { xs: '0px', md: '10px' } }}>
            {city}, {country}
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.secondary,
              marginRight: '10px',
              fontSize: { xs: '15px', md: '15px', lg: '20px' },
            }}
          >
            {dayjs(dateTime).format(DATE_FORMAT)}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <OutlineIconBtn
            icon={'Search'}
            onClick={() => {
              onClickSearch(city)
            }}
          />
          <OutlineIconBtn
            icon={'Delete'}
            onClick={() => {
              onClickDelete(city)
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default HistoryItem
