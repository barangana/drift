import { Dailies } from '@/utils/types/types'
import React from 'react'
import { deleteDaily } from './dailiesActions'

interface DailiesEntry {
  daily: Dailies
}

const DailiesEntry = ({ daily }: DailiesEntry) => {
  const clickCheckboxHandler = async () => {
    try {
      await deleteDaily(daily.daily_id)
    } catch (error) {
      console.log('Error while trying to remove your daily' + { error })
    }
  }
  return (
    <div className='bg-white max-w-xl min-w-[36rem] p-4 border-[1px] border-black rounded-md mt-4'>
      <div>
        <input
          type='checkbox'
          className='appearance-none h-4 w-4 rounded-full border border-gray-400 checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300'
          id={daily.daily_id}
          onChange={clickCheckboxHandler}
        />
        <label className='pl-2 text-black'>{daily.title}</label>
      </div>
      <p className='text-black text-sm'>{daily.description}</p>
    </div>
  )
}

export default DailiesEntry
