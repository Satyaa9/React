import { useMemo, useState } from "react";
import User  from "./user";

function Demo(){
    console.log("in demo");
    const[count,setCount]=useState(0)
    const[price,setPrice]=useState(100)



    const data = useMemo (()=>({price}),[price])

    return(
        <div style={{border:"2px solid red" , padding:"100px"}}>
            <h1>Demo{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <button onClick={()=>setPrice(price+10)}>Update</button>

            <User data={data}/>
        </div>
    )
    
}

export default Demo