import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './views/Create'
import ShowList from './views/ShowList'
import { Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
          <Route path='/' element={<Create/>}/>
          <Route path='/players/list' element={<ShowList/>}/>
    </Routes>
    </>
  )
}

export default App
