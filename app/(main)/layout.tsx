import React, { ReactNode } from 'react'
import '../globals.css'
import Navbar from '@/components/nav/Navbar'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}

export default AuthLayout
