import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{display:"flex" , gap:"2rem"}}>
      <Link to='/'>Home</Link>
      <Link to='/users'>users</Link>
      <Link to='/about'>About</Link>
      <Link to='/services'>Services</Link>
    </div>
  )
}

export default Navbar