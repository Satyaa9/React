import User from "./User";

export default function Profile({name}){
    return(
        <div style={{border : "2px solid blue" , padding:"50px"}}>
            <h1>Profile</h1>
            <User name={name}/>
        </div>
    )
}