import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import AuthProviders from './Providers/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
         <RouterProvider router={routes}></RouterProvider>
      </AuthProviders>
  </React.StrictMode>,
)
