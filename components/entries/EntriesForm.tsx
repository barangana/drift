import React, { useState } from 'react'
import Button from '../Button'
import { Goals } from '@/utils/types/types'
import { addGoal, updateGoal } from './GoalsActions'

interface EntriesFormProps {
  goal?: Goals
  handleCancelOrSubmit: () => void
}

// TODO: add form validation

const EntriesForm = ({ goal, handleCancelOrSubmit }: EntriesFormProps) => {
  // Checks if we are editing
  const isEditing = !!goal

  // We only want to check the goal and description.
  const [formData, setFormData] = useState({
    goal: '',
    description: '',
  })

  // If they are empty, then the button to submit gets disabled
  const isInputEmpty =
    formData.goal.trim() !== '' && formData.description.trim() !== ''

  return (
    <div className='min-w-[36rem] max-w-xl p-4 my-4 bg-white border border-gray-200 rounded-lg'>
      <form
        name='entry-form'
        onSubmit={handleCancelOrSubmit}
        action={
          isEditing
            ? (formData) => updateGoal(formData, goal?.goal_id)
            : addGoal
        }
      >
        <div className='flex flex-col'>
          <input
            name='goal'
            required
            defaultValue={goal?.goal || ''}
            placeholder='Set your goal title here'
            className='py-2 outline-none text-black'
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          />
          <input
            name='category'
            defaultValue={goal?.category || ''}
            placeholder='Category'
            className='py-2 outline-none text-black'
          />
        </div>
        <textarea
          name='description'
          required
          defaultValue={goal?.description || ''}
          placeholder='Description'
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

export default EntriesForm
