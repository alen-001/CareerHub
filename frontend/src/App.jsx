import React from 'react'
import LandingPage from './Pages/Landing/LandingPage.jsx'
import { Routes,Route, Outlet, Navigate } from 'react-router-dom'
import AuthPage from './Pages/Auth/AuthPage.jsx'
import Onboarding from './Pages/Onboarding/Onboarding'
import Upload from './Pages/Onboarding/Upload'
import Dashboard from './Pages/Home/dashboard.jsx'
import ProfileBuilder from './Pages/Onboarding/Profile'
import Home from './Pages/Home/Home'
import Chat from './Pages/Home/Chat'
import toast, { Toaster } from 'react-hot-toast'
import { UserProvider } from './context/userContext.jsx'
import Checker from './Pages/Home/Checker.jsx'
import Generate from './Pages/Home/Flashcards/Generate.jsx'
import Recommend from './Pages/Home/Recommend/Recommend.jsx'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
function App() {
  const {data:authUser,isLoading,error}=useQuery({
    queryKey:['authUser'],
    queryFn:async()=>{
      try{
        const {data}=await axios.get('/api/auth/me');
        console.log(data);
        return data;
      }catch(err){
        console.log(err);
    }
  }
  })
  if(isLoading){
    return(
      <div className='h-screen w-screen flex justify-center items-center'>
        Loading...
      </div>
    )
  }
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
    <Route path='/app' element={authUser?<Dashboard/>:<Navigate to='/login'/>}>
      <Route index element={<Home/>}/>
      <Route path='chat' element={<Chat/>}/>
      <Route path='checker' element={<Checker/>}/>
      <Route path='flashcards' element={<Generate/>}/>
      <Route path='recommendations' element={<Recommend/>}/>
      <Route path='*' element={<div className='text-4xl text-white flex justify-center items-center h-screen w-screen font-semibold font-mono'>404 | Page not found</div>}/>
    </Route>
    <Route path='*' element={<div className='text-4xl text-white flex justify-center items-center h-screen w-screen font-semibold font-mono'>404 | Page not found</div>}/>
  </Routes>
    <Toaster/>
    </UserProvider>
  )
}

export default App
