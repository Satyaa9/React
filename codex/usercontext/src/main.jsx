import { createRoot } from 'react-dom/client'
import User from './User'
import UserProvider from './UserProvider'
import Profile from './Profile'


createRoot(document.getElementById('root')).render(
    <UserProvider>
      <Profile/>
      {/* <User/> */}
    </UserProvider>
)
