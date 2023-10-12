import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routing/AppRoutes'
import ThemeConfigProvider from './config/ThemeConfigProvider'
import './assets/css/style.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

const AppInit = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 0,
            cacheTime: 2 * (60 * 1000), // 3 mins default
          },
          mutations: {
            // mutation options
          },
        },
      })
  )
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeConfigProvider>
          <AppRoutes />
        </ThemeConfigProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default AppInit
