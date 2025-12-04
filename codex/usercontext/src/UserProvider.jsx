import React, { useState } from 'react'
import { UserContext } from './UserContext';

function UserProvider({children}) {
    console.log("in userProvider");
    
    const[count , setCount]=useState(0);
    

    const handleclick = () =>{
        setCount(count => count+1);
    }
  return (
    <div>
      <UserContext.Provider value={{count , handleclick}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserProvider
