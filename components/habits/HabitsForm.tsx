'use client'

import React, { useState } from 'react'
import Button from '../Button'
import { Habits } from '@/utils/types/types'
import { addHabits } from './habitsActions'

interface HabitsFormProps {
  habits?: Habits
  handleCancelOrSubmit?: () => void
}

const HabitsForm = ({ habits, handleCancelOrSubmit }: HabitsFormProps) => {
  // Checks if we are editing
  const isEditing = !!habits

  const [formData, setFormData] = useState({
    habit: '',
    description: '',
  })

  // If they are empty, then the button to submit gets disabled
  const isInputEmpty = formData.habit.trim() === ''

  return (
    <div className='min-w-[36rem] max-w-xl p-4 my-4 bg-white border border-gray-200 rounded-lg'>
      <form
        name='entry-form'
        onSubmit={handleCancelOrSubmit}
        action={addHabits}
      >
        <div className='flex flex-col'>
          <input
            name='habit'
            required
            defaultValue={habits?.habits || ''}
            placeholder='Set the habit you want to track'
            className='py-2 outline-none text-black'
            onChange={(e) =>
              setFormData({ ...formData, habit: e.target.value })
            }
          />
        </div>
        <textarea
          name='description'
          placeholder='Description'
          defaultValue={habits?.description || ''}
          className='pt-2 resize-none h-full w-full text-black'
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <div className='grid justify-items-end pt-2'>
          <div className='flex space-x-2'>
            <Button type='submit' disabled={!isInputEmpty}>
              {isEditing ? 'Save' : 'Create'}
            </Button>
            <Button onClick={handleCancelOrSubmit}>Cancel</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default HabitsForm
