import { UserContext } from './UserContext';
import React, { useContext } from 'react'

function User() {
  console.log("in user");
  
    const {handleclick} = useContext(UserContext);
    
    // const {count} = useContext(UserContext);
  return (
    <div style={{border:"2px solid black" , padding:"10px"}}>
      <h1>User Component</h1>
      <button onClick={handleclick}>Click</button>
    </div>
  )
}

export default User
