import React from 'react';

function User({handleClick , price , count}){
    return(
        <div style={{border:"2px solid black", padding : "10px"}}>
            <h1>User component..{price}</h1>
            <h1>{count}</h1>
            <button onClick={handleClick}>User btn</button>
        </div>
    )
}

export default React.memo(User);
