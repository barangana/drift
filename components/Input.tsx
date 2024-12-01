import React, { ChangeEvent } from "react"

interface InputProps {
  id: string
  name?: string
  type?: string
  value?: string
  required?: boolean
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  value,
  required,
  placeholder,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      className='w-full rounded-md text-md h-12 px-4 py-2 mb-4 text-black'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
