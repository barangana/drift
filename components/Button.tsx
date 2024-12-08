import React, { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  formAction?: string | ((formData: FormData) => void | Promise<void>)
  onClick?: MouseEventHandler<HTMLElement>
  type?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  formAction,
  onClick,
  type,
}) => {
  return (
    <button
      className='w-24 bg-black hover:bg-slate-900 font-semibold text-sm p-2 rounded-md'
      formAction={formAction}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
