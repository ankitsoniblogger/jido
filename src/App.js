import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Card from './components/Card'
import Header from './components/Header'
import About from './components/About'
import Login from './components/Login';
import Contact from './components/Contact';
import Services from './components/Services';
import Card1 from './components/Card1';


const App = () => {
  return (
    <>
      
      <Header />
      <Routes>
         <Route path='/' element={<Card/>} />
         <Route path='/service' element={<Services/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/card1' element={<Card1/>} />

      </Routes>
    
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}

    </>
  )
}

export default App