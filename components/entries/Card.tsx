import React from "react"

interface CardProps {
  title: string
  description: string
  input?: string[]
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className='block max-w-xl px-4 pb-4 my-4 bg-white border border-gray-200 rounded-lg'>
      <div className='text-black py-2 font-bold'>{title}</div>
      <div className='text-black'>{description}</div>
    </div>
  )
}

export default Card
