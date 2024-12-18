'use client'

import React from 'react'
import Button from '../Button'
import { Goals } from '@/utils/types/types'
import { deleteGoal } from './goalsActions'

interface CardProps {
  goal: Goals
  onEdit?: () => void
}

// TODO: Cards still need to be worked on but they serve as a way to display data pulled from the DB for now.
// TODO: Add tags
// TODO: Add colorizing to categorize whether they did good, medium or meh

const Card = ({ goal, onEdit }: CardProps) => {
  const clickDeleteHandler = async () => {
    await deleteGoal(goal.goal_id)
  }

  return (
    <div className='block max-w-xl min-w-[36rem] px-4 pb-4 my-4 bg-white border border-gray-200 rounded-lg'>
      <div className='text-black py-2 font-bold pt-6'>{goal.goal}</div>
      <div className=' text-black py-2 font-bold'>{goal.category}</div>
      <div className='text-black'>{goal.description}</div>
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
