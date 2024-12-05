import React, { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='bg-black hover:bg-slate-900 font-semibold text-sm p-2 rounded-md'>
      {children}
    </button>
  )
}

export default Button
