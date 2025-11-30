import Profile from "./Profile";
import User from "./User";
import { userContext } from "./Usercontext"


function App(){
    const user =  {"name" : "shubham"}

    return(
        <userContext.Provider value={user}>
            <Profile/>
            <userContext/>
            {/* <UserProvider/> */}
        </userContext.Provider>
    )
}
export default App;