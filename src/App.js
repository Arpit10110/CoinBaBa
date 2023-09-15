import React from 'react'
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Doc from "./components/Doc.jsx"
import Tut from "./components/Tut.jsx"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer"
import Coins from "./components/Coins.jsx"
import Contact from "./components/Contact.jsx"
import "./style/Style.css"
const App = () => {
  return  ( 
 <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path="/doc" element={<Doc/>}/>
      <Route path="/Tut" element={<Tut/>}/>
      </Route>
      <Route path='/Coins' element={<Coins/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
  </Router>
 </>
  )
  
}

export default App
