import { useContext } from "react";
import { userContext } from "./Usercontext";

function About(){
     const user = useContext(userContext); //jithe aaplyala data access karayacha aahe tithe hi line add karayachi
    return(
        <div style={{border:"2px solid black" , padding:"10px"}}>
            <h1>About {user.name}</h1>
        </div>
    )
}
export default About;