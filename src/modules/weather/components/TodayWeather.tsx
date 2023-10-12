import { Box, Typography } from '@mui/material'
import sunImg from 'src/assets/images/sun.png'
import cloudImg from 'src/assets/images/cloud.png'
import SearchHistory from './SearchHistory'
import { FC } from 'react'

interface IProps {
  currentTmp: number
  highTemp: number
  lowTemp: number
  city: string
  country: string
  dateTime: string
  humidity: number
  weatherCategory: string
}

const TodayWeather: FC<IProps> = (props) => {
  const {
    currentTmp,
    highTemp,
    lowTemp,
    city,
    country,
    dateTime,
    humidity,
    weatherCategory,
  } = props

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box
          component='img'
          sx={{
            position: 'absolute',
            height: { xs: '150px', md: '250px', lg: '250px' },
            width: 'auto',
            top: '10px',
            right: '10px',
            zIndex: '1000',
          }}
          src={weatherCategory === 'Clouds' ? sunImg : cloudImg}
        ></Box>
      </Box>
      <Box
        id='weather'
        sx={{
          backgroundColor: (theme) => theme.palette.primary.light,
          borderRadius: '24px',
          // minHeight: '600px',
          height: { xs: '80vh', md: '80vh' },
          marginTop: { xs: '50px', md: '80px', lg: '100px' },
        }}
      >
        <Box sx={{ padding: { xs: '15px 15px 10px 15px', md: '24px 24px 10px 24px' } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: { xs: '15px', md: '15px', lg: '20px' } }}>
                Today's Weather
              </Typography>
              <Typography
                fontWeight='600'
                sx={{
                  fontSize: { xs: '75px', md: '75px', lg: '100px' },
                  lineHeight: { xs: '75px', md: '90px', lg: '90px' },
                }}
              >
                {currentTmp}
                {'\u00b0'}
              </Typography>
              <Typography variant='body1'>
                H: {highTemp}
                {'\u00b0'}
                &nbsp; L:{lowTemp}
                {'\u00b0'}
              </Typography>
              <Typography
                fontWeight='600'
                sx={{ fontSize: { xs: '15px', md: '15px', lg: '20px' } }}
              >
                {city}, {country}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', width: '75%' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: { xs: 'column-reverse', md: 'row' },
                  justifyContent: { xs: 'flex-start', md: 'space-between' },
                  alignItems: { xs: 'flex-end', md: 'space-between' },
                  width: '100%',
                }}
              >
                <Typography variant='body1'>{dateTime}</Typography>
                <Typography variant='body1'>Humidity: {humidity}%</Typography>
                <Typography variant='body1'>{weatherCategory}</Typography>
              </Box>
            </Box>
          </Box>

          <SearchHistory />
        </Box>
      </Box>
    </>
  )
}

export default TodayWeather
