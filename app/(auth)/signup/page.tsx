import Input from "@/components/Input"
import Link from "next/link"
import React from "react"

const Signup = () => {
  return (
    <div className='bg-black grid place-items-center h-screen'>
      <div>
        <h2 className='font-bold text-3xl'>Sign up</h2>
        <form className='my-8 w-96'>
          <Input id='email' placeholder='Email' />
          <Input id='password' type='password' placeholder='Password' />
          <button className='bg-white w-96 text-black rounded font-medium h-10'>
            Sign up
          </button>
        </form>
        <div className='text-white text-sm'>
          Already have an account?
          <Link href='/login'> Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
