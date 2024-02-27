import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Reservation from './Components/Reservation'
import Gallery from './Components/Gallery'
import ContactUs from './Components/ContactUs'
import OurServices from './Components/OurServices'
import './App.css';


function App() {
  return (
    <div>
      <Header/>
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/reservation' element={<Reservation />} ></Route>
            <Route path='/contactus' element={<ContactUs />} ></Route>
            <Route path='/ourservices' element={<OurServices />} ></Route>
            <Route path='/gallery' element={<Gallery />} ></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
