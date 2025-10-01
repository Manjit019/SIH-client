
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './layouts/AppLayout'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        index : true,
        element : <HomePage />,
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
