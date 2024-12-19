'use client'

import React from 'react'
import Navlinks from './Navlinks'
import Link from 'next/link'
import { signout } from '@/app/(auth)/login/LoginActions'

const Navbar = () => {
  return (
    <nav className='flex mt-4'>
      <Link href='/' className='font-bold text-3xl'>
        Drift
      </Link>
      <div className='flex items-center justify-start gap-6 pl-20'>
        {/* <Navlinks href='/categories'>Categories</Navlinks> */}
        <Navlinks href='/dailies'>Dailies</Navlinks>
        <Navlinks href='/habits'>Habits</Navlinks>
        <button onClick={async () => signout()}>Signout</button>
      </div>
    </nav>
  )
}

export default Navbar
