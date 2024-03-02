import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import { Enquete } from './pages/Enquete'
import { Login } from './pages/Login'
import { type RootState } from './store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function AppRoutes(): JSX.Element {
  const navigate = useNavigate()
  const { isLogged } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (!isLogged) navigate('/login')
  }, [isLogged])

  // Rotas não autenticadas
  if (!isLogged) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    )
  }

  // Rotas autenticadas
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enquete/:pollId" element={<Enquete />} />
    </Routes>
  )
}

export default AppRoutes
