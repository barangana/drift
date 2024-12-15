'use client'

import React from 'react'
import DailiesEntry from './DailiesEntry'
import Button from '../Button'
import { Dailies } from '@/utils/types/types'

interface DailiesListProps {
  dailies: Dailies[]
}

const DailiesList = ({ dailies }: DailiesListProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div>
        <div>
          <h2 className='font-bold text-3xl my-6'>My dailies</h2>
          <Button>Add daily</Button>
        </div>
        {dailies?.map((daily) => (
          <DailiesEntry key={daily.daily_id} daily={daily} />
        ))}
      </div>
    </div>
  )
}

export default DailiesList
