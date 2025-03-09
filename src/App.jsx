import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import LetterGlitch from './components/Background/LitterGlitch';
import Login from './components/login/login';
  


function App() {

  return (
      
    <div className="wrapper">
      {/* <h1>Application</h1> */}
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Preferences" element={<Preferences />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
