"use client"

import { signup } from "@/app/(auth)/signup/RegisterActions"
import Input from "@/components/Input"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import React, { useState } from "react"

// TODO: Find a better key for the unordered list

interface FormData {
  email: string
  password: string
}

const Signup: React.FC = () => {
  const searchParams = useSearchParams()
  const errors = searchParams.get("errors")?.split(",")
  const [formInfo, setFormInfo] = useState<FormData>({
    email: "",
    password: "",
  })

  errors?.map((error) => console.log(error))

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
            className='bg-white w-96 text-black rounded-md font-medium h-10'
            formAction={signup}
          >
            Sign up
          </button>
          <ul className='m-4 list-disc'>
            {errors?.map((error, i) => (
              <li key={error[i]}>{error}</li>
            ))}
          </ul>
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
