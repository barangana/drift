'use client'

import Link from 'next/link'
import React from 'react'

const AuthNav = () => {
  return (
    <nav className='flex mt-4'>
      <Link href='/' className='font-bold text-3xl'>
        Drift
      </Link>
    </nav>
  )
}

export default AuthNav
