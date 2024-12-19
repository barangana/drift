import { Dailies } from '@/utils/types/types'
import React from 'react'
import { deleteDaily } from './dailiesActions'
import Button from '../Button'

interface DailiesEntry {
  daily: Dailies
  onEdit: () => void
}

const DailiesEntry = ({ daily, onEdit }: DailiesEntry) => {
  const clickCheckboxHandler = async () => {
    try {
      await deleteDaily(daily.daily_id)
    } catch (error) {
      console.log('Error while trying to remove your daily' + { error })
    }
  }
  return (
    <div className='flex justify-between bg-white max-w-xl min-w-[36rem] p-4 border-[1px] border-black rounded-md mt-4'>
      <div>
        <input
          type='checkbox'
          id={daily.daily_id}
          onChange={clickCheckboxHandler}
        />
        <label className='text-black pl-2'>{daily.title}</label>
        <p className='text-black text-sm pl-[1.4rem]'>{daily.description}</p>
      </div>
      <div>
        <Button onClick={onEdit}>Edit</Button>
      </div>
    </div>
  )
}

export default DailiesEntry
