import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import FellowDashboard from './components/Pages/FellowDashboard/FellowDashboard'


const router = createBrowserRouter([
  {
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/start-fellow",
        element: <FellowDashboard />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
