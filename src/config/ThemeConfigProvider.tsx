import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React, { ReactNode } from 'react'
import theme from '../Theme/darkTheme'
import AxiosInstanceProvider from './AxiosInstanceProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface IProps {
  children: ReactNode
}

const ThemeConfigProvider: React.FC<IProps> = ({ children }) => {
  const [light, setLight] = React.useState(true);
  
  return (
    <ThemeProvider theme={theme()}>
      <ToastContainer />
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <AxiosInstanceProvider>{children}</AxiosInstanceProvider>
    </ThemeProvider>
  )
}

export default ThemeConfigProvider
