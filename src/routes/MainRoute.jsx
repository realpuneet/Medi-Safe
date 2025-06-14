import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import EmergencyView from '../pages/EmergencyView'

const MainRoute = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emergency-view/:id" element={<EmergencyView />} />
        </Routes>
      </div>
  )
}

export default MainRoute
