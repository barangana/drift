import Input from "@/components/Input"
import Link from "next/link"
import React from "react"

const Login = () => {
  return (
    <div className='bg-black grid place-items-center h-screen'>
      <div>
        <h2 className='font-bold text-3xl'>Login</h2>
        <form className='my-8 w-96'>
          <Input id='email' placeholder='Email' />
          <Input id='password' type='password' placeholder='Password' />
          <button className='bg-white w-96 text-black rounded font-medium h-10'>
            Login
          </button>
        </form>
        <div className='text-white text-sm'>
          Don't have an account yet?
          <Link href='/signup'> Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
