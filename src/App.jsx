import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom'
import Page from './app/ruleta/Page'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path='/ruleta' element={<Page />} />
      </Routes>

    </>
  )
}

export default App
