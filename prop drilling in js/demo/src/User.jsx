// export default function User(Props){
//     return (
//         <div style={{border : "2px solid pink"}}>
    
//             <h1>User...{Props.name}</h1>
//         </div>
//     )
// }

export default function User({User}){
    console.log("user..." ,User);
    return(
        <div>
            <h1>{User.name}</h1>
            <h1>{User.Company}</h1>
        </div>
    )
    
}