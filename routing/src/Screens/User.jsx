import React from 'react'
import { Link } from "react-router-dom";
import { users } from "../Components/Data";

function User() {
  return (
    <div style={{display:"flex" , gap:"2rem"}}>
      {
        users.map((user,index)=>(
            <Link key={index} to={`/user/${user.id}`}>{user.name}</Link>
        ))
      }
    </div>
  )
}

export default User