import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Create from './Create'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Create />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App