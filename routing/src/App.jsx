import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Screens/Home';
import About from './Screens/About';
import Services from './Screens/Services';
import Navbar from './Components/Navbar';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='./' element={<Home/>}/>
      <Route path='./about' element={<About/>}/>
      <Route path='./services' element={<Services/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
