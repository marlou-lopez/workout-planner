import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './routes/error.tsx'
import Home from './routes/home.tsx'
import Layout from './routes/layout.tsx'
import Workouts from './routes/workouts.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/workouts",
        element: <Workouts />
      }
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
