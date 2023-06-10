import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Error404 from './components/Error404'
import Contacto from './components/Contacto'
function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error404 />} />
      <Route path='/contacto' element={<Contacto />} />
    </Routes>
  )
}

export default App
