import React from 'react'
import Login from './components/Login'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home/*' element={<Home />}></Route>
    </Routes>
  )
}

export default App
