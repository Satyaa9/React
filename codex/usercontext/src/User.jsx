import { UserContext } from './UserContext';
import React, { useContext } from 'react'

function User() {
    const {handleclick} = useContext(UserContext);
    const {count} = useContext(UserContext);
  return (
    <div style={{border:"2px solid black" , padding:"10px"}}>
      <h1>User Component {count}</h1>
      <button onClick={handleclick}>Click</button>
    </div>
  )
}

export default User
