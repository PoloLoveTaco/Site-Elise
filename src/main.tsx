import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/home/index'
import ErgoPediatrie from './pages/ergoPediatrie/index'
import Interventions from './pages/interventions/index'
import Approches from './pages/approches/index'
import APropos from './pages/aPropos/index'
import Contact from './pages/contact/index'
import NotFound from './pages/notFound/index'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import HeaderBar from './components/headerBar.tsx'
import Footer from './components/footer.tsx'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/ergopediatrie", element: <ErgoPediatrie /> },
      { path: "/interventions", element: <Interventions /> },
      { path: "/approches", element: <Approches /> },
      { path: "/apropos", element: <APropos /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound />},
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
