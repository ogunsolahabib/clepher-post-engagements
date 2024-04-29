import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/post-engagement');
  }, [navigate])

  return (
    <div className='bg-base-200'>
      <Outlet />
    </div>
  )
}

export default App
