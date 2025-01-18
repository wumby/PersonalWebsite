'use client';

import React from 'react'
import { useTheme } from 'next-themes'

const Navbar1 = () => {
    const { setTheme } = useTheme()
  return (
    <div className='z-40'><button onClick={()=>setTheme('dark')} className='bg-white'>dark</button><button onClick={()=>setTheme('light')}>light</button></div>
  )
}

export default Navbar1;