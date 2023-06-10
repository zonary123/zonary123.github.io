import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Error404 from './components/Error404'
function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default App
