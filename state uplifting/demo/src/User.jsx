function User({handleCount , count}){
    console.log("user");
    return(
        <div style={{border:"2px solid black",padding:"200px"}}>
            <h1>User{count}</h1>
            <button onClick={handleCount}>Onclick</button>
        </div>
    )
    
}
export default User