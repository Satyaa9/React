import { createRoot } from 'react-dom/client'
import User from './User'
import UserProvider from './UserProvider'


createRoot(document.getElementById('root')).render(
    <UserProvider>
      <User/>
    </UserProvider>
)
