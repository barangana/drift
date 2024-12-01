"use client"

import { signup } from "@/app/(auth)/signup/RegisterActions"
import Input from "@/components/Input"
import Link from "next/link"
import React, { useState } from "react"

interface FormData {
  email: string
  password: string
}

const Signup: React.FC = () => {
  const [formInfo, setFormInfo] = useState<FormData>({
    email: "",
    password: "",
  })

  return (
    <div className='bg-black grid place-items-center h-screen'>
      <div>
        <h2 className='font-bold text-3xl'>Sign up</h2>
        <form className='my-8 w-96'>
          <Input
            id='email'
            name='email'
            placeholder='Email Address'
            onChange={(e) =>
              setFormInfo({ ...formInfo, email: e.target.value })
            }
          />
          <Input
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            onChange={(e) =>
              setFormInfo({ ...formInfo, password: e.target.value })
            }
          />
          <button
            className='bg-white w-96 text-black rounded font-medium h-10'
            formAction={signup}
          >
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
