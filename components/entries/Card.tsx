'use client'

import React from 'react'
import Button from '../Button'
import { deleteGoal } from './GoalsActions'

interface CardProps {
  id: string
  title: string
  description: string
  category?: string
  onEdit?: () => void
}

// TODO: Cards still need to be worked on but they serve as a way to display data pulled from the DB for now.
// TODO: Add tags
// TODO: Add colorizing to categorize whether they did good, medium or meh

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  category,
  onEdit,
}) => {
  const clickDeleteHandler = async () => {
    await deleteGoal(id)
  }

  return (
    <div className='block max-w-xl min-w-[36rem] px-4 pb-4 my-4 bg-white border border-gray-200 rounded-lg'>
      <div className='text-black py-2 font-bold pt-6'>{title}</div>
      <div className=' text-black py-2 font-bold'>{category}</div>
      <div className='text-black'>{description}</div>
      <div className='grid justify-items-end pt-2'>
        <div className='flex space-x-2'>
          <Button onClick={onEdit}>Edit</Button>
          <Button
            onClick={() => {
              clickDeleteHandler()
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
