import React, { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  formAction?: string | ((formData: FormData) => void | Promise<void>)
  onClick?: MouseEventHandler<HTMLElement>
}

const Button: React.FC<ButtonProps> = ({ children, formAction, onClick }) => {
  return (
    <button
      className='w-24 bg-black hover:bg-slate-900 font-semibold text-sm p-2 rounded-md'
      formAction={formAction}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
