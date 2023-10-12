import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import NAVIGATE_LINKS from '../constants/router-links'
import Home from '../pages/home/Home'

const PublicRoutes = () => {
  const location = useLocation()

  return (
    <Routes>
      {/* Register all public urls below */}
      <Route path={NAVIGATE_LINKS.HOME} element={<Home />} />

      {/* 404 not found, navigate to login */}
      <Route
        path='*'
        element={
          <Navigate to={NAVIGATE_LINKS.HOME} replace={true} state={{ redirectTo: location }} />
        }
      />
    </Routes>
  )
}

export default PublicRoutes
