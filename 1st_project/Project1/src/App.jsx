// ...existing code...
import { useState } from 'react'
import './App.css'
import Profile from './Profile'
import Card from './card'
import GooeyNav from './GooeyNav'
import Plasma from './Plasma'
import LogoLoop from './LogoLoop'
// ...existing code...

function App() {
  const items = [
    { label: 'Home', href: '#' },
    { label: 'Work', href: '#' },
    { label: 'Contact', href: '#' }
  ]

  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Plasma
        color="#ff6b35"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive={true}
      />
      
     
      <div>
        {/* <LogoLoop/> */}
        {/* <Profile/> */}
        <GooeyNav items={items} />
      </div>
    </div>
  )
}
// ...existing code...
export default App