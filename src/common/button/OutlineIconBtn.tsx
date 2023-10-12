import { IconButton } from '@mui/material'
import { FC } from 'react'
import * as MUIcon from '@mui/icons-material'

/**
 * Accepts any icon from React MUI
 * https://mui.com/material-ui/material-icons/
 *
 */

interface IProps {
  icon: keyof typeof MUIcon
  onClick?: () => void
}

const OutlineIconBtn: FC<IProps> = (props) => {
  const { icon, onClick } = props
  const Icon = icon && MUIcon[icon]

  return (
    <IconButton
      size='small'
      sx={{
        margin: '0 6px',
        outline: (theme) => '2px solid' + theme.palette.grey[400],
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
        },
      }}
      onClick={onClick}
    >
      {Icon && <Icon fontSize='small' sx={{ color: (theme) => theme.palette.grey[400] }} />}
    </IconButton>
  )
}

export default OutlineIconBtn
