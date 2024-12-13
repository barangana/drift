import React, { ReactNode } from 'react'
import '../globals.css'
import Navbar from '@/components/nav/Navbar'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}

export default AuthLayout
