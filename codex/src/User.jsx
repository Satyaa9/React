import React from 'react'

function User({data}) {
    console.log("user compo..");
    
  return (
    <div style={{border:"2px solid black", padding:"10px"}}>
      <h1>User {data.pricee}</h1>
      
    </div>
  )
}

export default React.memo(User);
