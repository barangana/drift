import React, { useState } from 'react'
import Button from '../Button'
import { Dailies } from '@/utils/types/types'
import { addDaily } from './dailiesActions'

interface DailiesFormProps {
  dailies?: Dailies
  handleCancelOrSubmit: () => void
}

const DailiesForm: React.FC<DailiesFormProps> = ({
  dailies,
  handleCancelOrSubmit,
}) => {
  // Checks if we are editing
  const isEditing = !!dailies

  const [formData, setFormData] = useState({
    daily: '',
    description: '',
  })

  // If they are empty, then the button to submit gets disabled
  const isInputEmpty = formData.daily.trim() !== ''
  console.log(isInputEmpty)

  return (
    <div className='min-w-[36rem] max-w-xl p-4 my-4 bg-white border border-gray-200 rounded-lg'>
      <form name='entry-form' onSubmit={handleCancelOrSubmit} action={addDaily}>
        <div className='flex flex-col'>
          <input
            name='daily'
            required
            placeholder='Set the daily you want to accomplish'
            className='py-2 outline-none text-black'
            onChange={(e) =>
              setFormData({ ...formData, daily: e.target.value })
            }
          />
        </div>
        <textarea
          name='description'
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

export default DailiesForm