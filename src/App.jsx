import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services.jsx'

const App = () => {
  return (
   <Router>
    <div className="flex flex-col min-h-screen bg-black text-white font-sans ">
      <Navbar/>
    <div className='flex-grow'>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
   </Router>
   
  )
}

export default App
