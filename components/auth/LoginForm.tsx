"use client"

import { login } from "@/app/(auth)/login/LoginActions"
import Input from "@/components/Input"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import React, { useState } from "react"

interface FormData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const searchParams = useSearchParams()
  const errors = searchParams.get("errors")?.split(",")
  const [formInfo, setFormInfo] = useState<FormData>({
    email: "",
    password: "",
  })

  return (
    <div className='bg-black grid place-items-center h-screen'>
      <div>
        <h2 className='font-bold text-3xl'>Login</h2>
        <form className='my-8 w-96'>
          <Input
            id='email'
            value={formInfo.email}
            name='email'
            type='email'
            placeholder='Email Address'
            onChange={(e) =>
              setFormInfo({ ...formInfo, email: e.target.value })
            }
          />
          <Input
            id='password'
            value={formInfo.password}
            name='password'
            placeholder='Password'
            type='password'
            onChange={(e) =>
              setFormInfo({ ...formInfo, password: e.target.value })
            }
          />
          <button
            className='bg-white w-96 text-black rounded-md font-medium h-10'
            formAction={login}
          >
            Log in
          </button>
          <ul className='m-4 list-disc'>
            {errors?.map((error, i) => (
              <li key={error[i]}>{error}</li>
            ))}
          </ul>
        </form>
        <div className='text-white text-sm'>
          Don't have an account yet?
          <Link href='/signup'> Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
