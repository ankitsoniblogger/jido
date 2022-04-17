import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Card from './components/Card'
import Header from './components/Header'
import About from './components/About'

const App = () => {
  return (
    <>
      
      <Header />
      <Routes>
         <Route exact path='/' element={<Card/>} />
         <Route exact path='/about' element={<About/>} />
      </Routes>
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}

    </>
  )
}

export default App