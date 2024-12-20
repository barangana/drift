'use client'

import { Habits } from '@/utils/types/types'
import React from 'react'
import Button from '../Button'
import { updateCheckIn } from './habitsActions'

interface HabitsCardProps {
  //   habits: Habits
  habit_title: string
  habit_description: string
  streak: number
  days_checkedin: number
}

const HabitsCard = ({
  habit_title,
  habit_description,
  streak,
  days_checkedin,
}: HabitsCardProps) => {
  const checkInHandler = async () => {
    try {
      await updateCheckIn('')
    } catch (error) {
      console.log('Error while user tried checking in: ' + { error })
    }
  }

  return (
    <div className='flex flex-col bg-white max-w-xl min-w-[36rem] mb-4 rounded-lg'>
      <div>
        <h2 className='text-black ml-6 mt-6'>{habit_title}</h2>
        <h3 className='text-black ml-6 mb-6'>{habit_description}</h3>
      </div>
      <div className='flex flex-row justify-around mb-6'>
        <div className='text-black'>
          <div>Streak</div>
          <div className='font-bold'>{streak}</div>
        </div>
        <div className='text-black'>
          <div>Days Checked in</div>
          <div className='font-bold'>{days_checkedin}</div>
        </div>
      </div>
      <div className='flex justify-evenly mb-6'>
        <Button onClick={checkInHandler}>Check in</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  )
}

export default HabitsCard
