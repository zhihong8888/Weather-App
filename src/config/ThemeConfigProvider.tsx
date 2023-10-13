import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React, { ReactNode } from 'react'
import darkTheme from '../Theme/darkTheme'
import AxiosInstanceProvider from './AxiosInstanceProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useMediaQuery from '@mui/material/useMediaQuery'
import lightTheme from '../Theme/lightTheme'

interface IProps {
  children: ReactNode
}

const ThemeConfigProvider: React.FC<IProps> = ({ children }) => {
  const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)')
  const [light, setLight] = React.useState(!isDarkModeEnabled)

  return (
    <ThemeProvider theme={light ? darkTheme() : lightTheme()}>
      <ToastContainer />
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <AxiosInstanceProvider>{children}</AxiosInstanceProvider>
    </ThemeProvider>
  )
}

export default ThemeConfigProvider
