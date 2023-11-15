import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home'
import Header from './views/Header/Header'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/about',
    element: <Header />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
