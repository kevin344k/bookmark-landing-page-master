import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {


  return (
    <>
     
     <Navbar></Navbar>
   <div className='bg-fm-Blue-950'>
      <MainContent></MainContent>
     <Footer></Footer>
   </div>
    </>
  )
}

export default App
