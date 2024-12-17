import LoginForm from '@/components/auth/LoginForm'
import React from 'react'

// TODO: There is an issue trying to resolve, where if the user is logged in and they try to access the login/signup page, to send them to the / page.
// However, since there is no user logged in, if user is logged returns false, then it throws an error.
// Trying to find a way around this

const LoginPage = async () => {
  return <LoginForm />
}

export default LoginPage
