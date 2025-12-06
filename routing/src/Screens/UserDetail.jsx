import React from 'react'
import { users } from "../Components/Data";
import { useParams } from 'react-router-dom';

function UserDetail() {
    const {id} = useParams();
    const user = users.find((u) => u.id === parseInt(id))
    
  return (
    <div style={{display:"flex" , gap:"2rem"}}>
      <h1>{user?.name}</h1>
      <h1>{user?.company}</h1>
    </div>
  )
}

export default UserDetail