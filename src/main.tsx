import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './Pages/homepage/App.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
