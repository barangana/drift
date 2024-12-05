import React from "react"
import Button from "../Button"

const EntriesForm = () => {
  return (
    <div className='max-w-xl p-4 my-4 bg-white border border-gray-200 rounded-lg'>
      <div className='flex flex-col'>
        <input
          placeholder='Set your goal title here'
          className='py-2 outline-none text-black'
        />
        <input
          placeholder='Category'
          className='py-2 outline-none text-black'
        />
      </div>
      <textarea
        placeholder='Description'
        className='pt-2 resize-none h-full w-full'
      />
      <div className='grid justify-items-end pt-2'>
        <div className='flex space-x-2'>
          <Button>Create</Button>
          <Button>Cancel</Button>
        </div>
      </div>
    </div>
  )
}

export default EntriesForm
