import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/post-engagements');
  }, [navigate])

  return (

    <Outlet />
  )
}

export default App
