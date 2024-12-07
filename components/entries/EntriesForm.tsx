import React from 'react'
import Button from '../Button'
import { addGoal } from './GoalsActions'
import { Goals } from '@/utils/types/types'

interface EntriesForm {
  goal?: Goals
  handleCancel: () => void
}

// TODO: Check if we are editing, then change the buttons to say edit and such
// TODO: Create the update action

const EntriesForm: React.FC<EntriesForm> = ({ goal, handleCancel }) => {
  // Checks if we are editing
  const isEditing = !!goal

  return (
    <div className='max-w-xl p-4 my-4 bg-white border border-gray-200 rounded-lg'>
      <form>
        <div className='flex flex-col'>
          <input
            name='goal'
            defaultValue={goal?.goal || ''}
            placeholder='Set your goal title here'
            className='py-2 outline-none text-black'
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
          defaultValue={goal?.description || ''}
          placeholder='Description'
          className='pt-2 resize-none h-full w-full text-black'
        />
        <div className='grid justify-items-end pt-2'>
          <div className='flex space-x-2'>
            <Button formAction={addGoal}>
              {isEditing ? 'Save' : 'Create'}
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EntriesForm
