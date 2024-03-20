import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home'
import AppLayout from './components/Reusable/AppLayout/AppLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/products",
      //   element: <Products />,
      // },
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
