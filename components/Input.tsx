import React, { ChangeEvent } from "react"

interface InputProps {
  id: string
  name?: string
  type?: "password"
  value?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className='w-full rounded-md text-md h-12 px-4 py-2 mb-4 text-black'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
