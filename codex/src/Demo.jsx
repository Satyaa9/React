import { useMemo, useState } from "react";
import User from "./User";

function Demo(){
    console.log("in demo");
    
    const[count,setCount] = useState(0);
    const[pricee,setPrice]=useState(100);

    const data = useMemo(() =>({pricee}) , [pricee])

    return(
        <div style={{border:"2px solid black" , padding:"10px"}}>
            <h1> In Demo = {count}</h1>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <button onClick={() =>setPrice(pricee+10)}>Pricee</button>
            <User data={data}/>
        </div>
    )
}
export default Demo;

/*
PROBLEM IN THIS CODE :
WHEN WE ACCESS THE DEMO COMPONENT THE USER COMPONENT IS CALLING UNNECCESARILY IT DECREASE THE 
PERFORMANCE OVERALL.
TO AVOID THIS WE USE useMemo and React.memo
*/