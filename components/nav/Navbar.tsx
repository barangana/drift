'use client'

import { signout } from '@/app/(auth)/login/LoginActions'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex'>
      <div>Drift</div>
      <div className='flex items-center justify-start gap-2 grow ml-20'>
        <button>Home</button>
        <button>Categories</button>
        <button>Dailies</button>
        <button onClick={async () => signout}>Signout</button>
      </div>
    </nav>
  )
}

export default Navbar