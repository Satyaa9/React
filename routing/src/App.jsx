import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home';
import About from './Screens/About';
import Services from './Screens/Services';
import Navbar from './Components/Navbar';
import Dashboard from './Screens/Dashboard';
import UserDetail from './Screens/UserDetail';
import User from './Screens/User';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='users' element={<User/>}/>
      <Route path='/user/:id' element={<UserDetail/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App