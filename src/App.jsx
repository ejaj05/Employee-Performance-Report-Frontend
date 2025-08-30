import React from 'react'
import AppLayout from './components/Layout/AppLayout'
import { Route, Routes } from 'react-router-dom'
import Report from './pages/Report'
import PerformanceReport from './pages/PerformanceReport'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div style={{height:"100vh",overflow:"hidden"}}>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/report" element={<Report />} />
        <Route path='/generate-report/:id' element={<PerformanceReport />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App