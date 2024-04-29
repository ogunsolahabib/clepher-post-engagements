import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/post-engagement');
  }, [navigate])

  return (

    <Outlet />
  )
}

export default App
