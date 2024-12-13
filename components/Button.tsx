import React, { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  formAction?: string | ((formData: FormData) => void | Promise<void>)
  onClick?: MouseEventHandler<HTMLElement>
  type?: 'submit'
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  formAction,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      className='w-16 h-8 bg-black hover:bg-slate-900 font-semibold text-xs rounded-md'
      formAction={formAction}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
