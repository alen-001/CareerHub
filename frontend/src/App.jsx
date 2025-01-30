import React from 'react'
import LandingPage from './Pages/Landing/LandingPage.jsx'
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import { ThemeProvider } from './Components/themeprovider.jsx'
import AuthPage from './Pages/Auth/AuthPage.jsx'
import Onboarding from './Pages/Onboarding/Onboarding'
import Upload from './Pages/Onboarding/Upload'
import Dashboard from './Pages/Home/dashboard.jsx'
import ProfileBuilder from './Pages/Onboarding/Profile'
import Home from './Pages/Home/Home'
import Chat from './Pages/Home/Chat'
import ChatInterface from './Pages/Home/Chat_interface'
import { Toaster } from 'react-hot-toast'
import { UserProvider } from './context/userContext.jsx'
function App() {
  return (
    <UserProvider>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path='/login' element={<AuthPage/>}/>
    <Route path='/sign-up' element={<AuthPage/>}/>
    <Route path='/onboarding' element={<Outlet/>}>
      <Route index element={<Onboarding/>}/>
      <Route path='upload' element={<Upload/>}/>
      <Route path='profile' element={<ProfileBuilder/>}/>
    </Route>
    <Route path='/app' element={<Dashboard/>}>
      <Route index element={<Home/>}/>
      <Route path='chat' element={<Chat/>}/>
      {/* <Route path='chat' element={<ChatInterface/>}/>  */}
      <Route path='*' element={<div className='text-4xl text-white flex justify-center items-center h-screen w-screen font-semibold font-mono'>404 | Page not found</div>}/>
    </Route>
    <Route path='/chat' element={<ChatInterface/>}/>
    <Route path='*' element={<div className='text-4xl text-white flex justify-center items-center h-screen w-screen font-semibold font-mono'>404 | Page not found</div>}/>
  </Routes>
    <Toaster/>
    </UserProvider>
  )
}

export default App
