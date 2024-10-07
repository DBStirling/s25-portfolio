import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Extras from './pages/extras.jsx'
import MyFitnessPal from '/pages/myFitnessPal'
import './styles/App.css'

function App() {

  return (
    <>
      <div>
        <div className='nav-bar-container'>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/myFitnessPal" element={<MyFitnessPal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
