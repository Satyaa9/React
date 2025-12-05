import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import User from './User';

function Profile() {
    console.log("in profile");
    
    const {count} = useContext(UserContext);
   
  return (
    <div style={{border:"2px solid black" , padding:"10px"}}>
      <h1>Profile {count}</h1>
     
      <User/>
    </div>
  )
}

export default Profile

