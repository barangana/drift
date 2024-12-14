import React from 'react'

interface DailiesEntry {
  title: string
  description?: string
}

const DailiesEntry = ({ title, description }: DailiesEntry) => {
  return (
    <div className='bg-white max-w-xl min-w-[36rem] p-4 border-[1px] border-black rounded-md mt-4'>
      <div>
        <input type='checkbox' />
        <label className='pl-2 text-black'>{title}</label>
      </div>
      <p className='text-black text-sm'>{description}</p>
    </div>
  )
}

export default DailiesEntry
