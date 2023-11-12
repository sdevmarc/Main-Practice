import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home'
import Create from './views/Create/Create'
import Read from './views/Read/Read'
import Update from './views/Update/Update'
import Delete from './views/Delete/Delete'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/create',
    element: <Create />
  },
  {
    path: '/read',
    element: <Read />
  },
  {
    path: '/update',
    element: <Update />
  },
  {
    path: '/delete',
    element: <Delete />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
