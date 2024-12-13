import React, { ReactNode } from 'react'
import '../globals.css'
import AuthNav from '@/components/auth/AuthNav'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section>
      <AuthNav />
      {children}
    </section>
  )
}

export default AuthLayout
