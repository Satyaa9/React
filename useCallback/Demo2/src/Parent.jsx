import { useCallback, useState } from "react";
import Hero from "./Hero";
import Card from "./Card";

function Parent(){

    const [color,setColor]=useState("red");

    const handleClick = useCallback (() =>{
        setColor("green")
    },[]);

    return(
        <div style={{border:"2px solid black" , padding:"10px"}}>
            <Hero color = {color}/>
            <Card handleClick={handleClick}/>
        </div>
    )
}
export default Parent;