import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './router/ErrorPage.tsx'
import Home from './router/dashboard/Home.tsx'
import CentralAtendimento from './components/login-page-acessibilidade/CentralAtendimento.tsx'
import ServicosProdutos from './components/login-page-acessibilidade/ServicosProduts.tsx'
import AnaliseMercado from './components/login-page-acessibilidade/AnaliseMercado.tsx'

const router = createBrowserRouter (
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/central",
      element: <CentralAtendimento />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/servicos",
      element: <ServicosProdutos />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/analise",
      element: <AnaliseMercado />,
      errorElement: <ErrorPage />,
    },
    
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
