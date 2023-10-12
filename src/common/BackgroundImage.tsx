import { Box } from '@mui/material'
import { FC } from 'react'

interface IProps {
  backgroundImg: string
}

const BackgroundImage: FC<IProps> = ({ backgroundImg }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: '-1',
      }}
    ></Box>
  )
}

export default BackgroundImage
