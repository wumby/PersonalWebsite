import React from 'react'
import { useTheme } from 'next-themes'

const Navbar = () => {
    const { setTheme } = useTheme()
  return (
    <div><button onClick={()=>setTheme('dark')}>dark</button><button onClick={()=>setTheme('light')}>light</button></div>
  )
}

export default Navbar