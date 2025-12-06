import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () =>{
    console.log("in handle click");
    navigate('/dashboard')
    
  }
  return (
    <div>
      <h1>In Home</h1>
      <button onClick={handleClick}>go to dashboard</button>
    </div>
  )
}

export default Home
