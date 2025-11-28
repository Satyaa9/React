import { use } from "react";
import React from "react";

function User({data}){
    console.log("in user");
    return(
        <div style={{border:"2px solid red" , padding:"100px"}}>
            <h1>
                User{data.price}
            </h1>
        </div>
    );
    
}

export default React.memo(User);