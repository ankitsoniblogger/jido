import React from 'react'
import { Routes ,Route, Link } from 'react-router-dom';
import Card from './components/Card'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      
      <Header />
      <Routes>
         <Route exact path='/' element={<Card/>} />
         <Route exact path='/about' element={<About/>} />
         <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}

    </>
  )
}

export default App