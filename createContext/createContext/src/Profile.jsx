import User from "./User";
import { useContext } from "react";
import { userContext } from "./Usercontext";

function Profile(){
    const user = useContext(userContext);
    return(
        <div style={{border:"2px solid black" , padding:"10px"}}>
            <h1>Profile {user.name}</h1>
            <User/>
        </div>
    )
}
export default Profile;