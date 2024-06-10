import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Planet from './pages/planet/Planet.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import Apod from './pages/apod/Apod.tsx'
import NotFound from './pages/notFound/NotFound.tsx'


const browserRouter = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/planet/:id', element: <Planet/>},
  {path: '/universe/apod', element: <Apod/>},
  {path: '*', element: <NotFound/>},
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
