//React
import { useState } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'

//Components
import Layout from './components/Layout'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App