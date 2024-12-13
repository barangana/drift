import Button from '@/components/Button'
import CategoriesList from '@/components/categories/CategoriesList'
import React from 'react'

const CategoriesPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-evenly'>
        <div>
          <h2 className='font-bold text-3xl my-6'>Categories</h2>
        </div>
        <div className='my-7'>
          <Button>Add</Button>
        </div>
      </div>

      <CategoriesList />
    </div>
  )
}

export default CategoriesPage
