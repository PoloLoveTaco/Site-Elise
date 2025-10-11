import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/home/index'
import AboutMe from './pages/Test/index'

//import NotFoundPage from './components/notFoundPage.tsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import HeaderBar from './components/headerBar.tsx'
//import Footer from './components/footer.tsx'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/test", element: <AboutMe /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
