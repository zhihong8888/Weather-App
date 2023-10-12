import { IconButton } from '@mui/material'
import { FC } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import * as MUIcon from '@mui/icons-material'

interface IProps {
  icon: keyof typeof MUIcon
  onClick?: () => void
}

const FilledMainBtn: FC<IProps> = (props) => {
  const { icon, onClick } = props
  const Icon = icon && MUIcon[icon]

  return (
    <IconButton
      aria-label='search'
      size='large'
      sx={{
        backgroundColor: (theme) => theme.palette.components.searchIcon,
        borderRadius: 4.5,
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
        },
      }}
      onClick={onClick}
    >
      {Icon && <Icon fontSize='inherit' sx={{ color: (theme) => theme.palette.text.primary }} />}
    </IconButton>
  )
}

export default FilledMainBtn
