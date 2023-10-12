import { TextField, TextFieldProps } from '@mui/material'

const SearchField = (props: TextFieldProps) => {
  const { sx, ...rest } = props
  return (
    <TextField
      variant='standard'
      size='small'
      color='info'
      InputProps={{
        disableUnderline: true,
      }}
      InputLabelProps={{ style: { color: '#6D5E97' } }}
      sx={{
        backgroundColor: (theme) => theme.palette.components.searchField,
        borderRadius: '20px',
        '& fieldset': { border: 'none' },
        '& .MuiInputBase-root': {
          paddingLeft: 2,
        },
        '& .MuiInputBase-input': {
          height: 'fit-content',
          color: (theme) => theme.palette.text.secondary,
        },
        label: {
          paddingLeft: 3,
        },
        ...sx,
      }}
      {...rest}
    />
  )
}

export default SearchField
