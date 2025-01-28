import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './Pages/Landing/LandingPage.jsx'
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import { ThemeProvider } from './Components/themeprovider.jsx'
import AuthPage from './Pages/Auth/AuthPage.jsx'
import Onboarding from './Pages/Onboarding/Onboarding'
import Upload from './Pages/Onboarding/Upload'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/login' element={<AuthPage/>}/>
          <Route path='/sign-up' element={<AuthPage/>}/>
          <Route path='/onboarding' element={<Outlet/>}>
            <Route index element={<Onboarding/>}/>
            <Route path='upload' element={<Upload/>}/>
          </Route>
          <Route path='*' element={<div className='text-4xl text-white flex justify-center items-center h-screen w-screen font-semibold font-mono'>404 | Page not found</div>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  </StrictMode>,
)
