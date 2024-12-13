import { Ellipsis } from 'lucide-react'
import React from 'react'

const CategoriesCard = () => {
  return (
    <div className='flex justify-between bg-white max-w-xl min-w-[36rem] p-4 border-[1px] border-black rounded-md mt-4'>
      <div className='text-black'>Category Name</div>
      <div className='text-black'>
        <Ellipsis />
      </div>
    </div>
  )
}

export default CategoriesCard
