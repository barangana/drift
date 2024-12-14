import React from 'react'
import DailiesEntry from './DailiesEntry'
import Button from '../Button'

const DailiesList = async () => {
  return (
    <div className='flex flex-col items-center'>
      <div>
        <div>
          <h2 className='font-bold text-3xl my-6'>My dailies</h2>
          <Button>Add daily</Button>
        </div>

        <DailiesEntry title='Code' description='Code my dailies section' />
        <DailiesEntry title='My Daily' />
        <DailiesEntry title='My Daily' />
      </div>
    </div>
  )
}

export default DailiesList
