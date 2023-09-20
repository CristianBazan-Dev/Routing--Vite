import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'

const router = createHashRouter([
  {
    path: "/",
    element: <Home/> 
  }, 
  {
    path: "/products",
    element: <Products/> 
  },
  {
    path: "/about",
    element: <About/> 
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
