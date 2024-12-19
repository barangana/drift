'use client'

import React, { useState } from 'react'
import DailiesEntry from './DailiesEntry'
import Button from '../Button'
import { Dailies } from '@/utils/types/types'
import DailiesForm from './DailiesForm'

interface DailiesListProps {
  dailies: Dailies[]
}

const DailiesList = ({ dailies }: DailiesListProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const [currentDaily, setCurrentDaily] = useState<Dailies | null>(null)

  const handleEdit = (daily: Dailies) => {
    setIsEditing(true)
    setCurrentDaily(daily)
  }

  const handleAdd = () => {
    setIsAdding(true)
  }

  const handleCancelOrSubmit = () => {
    setIsEditing(false)
    setIsAdding(false)
    setCurrentDaily(null)
  }

  return (
    <div>
      <div>
        <h2 className='font-bold text-3xl my-6'>My dailies</h2>
        <Button onClick={handleAdd}>Add daily</Button>
      </div>
      {isEditing ? (
        <DailiesForm
          dailies={currentDaily || undefined}
          handleCancelOrSubmit={handleCancelOrSubmit}
        />
      ) : isAdding ? (
        <DailiesForm
          dailies={undefined}
          handleCancelOrSubmit={handleCancelOrSubmit}
        />
      ) : (
        ''
      )}
      {dailies?.map((daily) => (
        <DailiesEntry
          key={daily.daily_id}
          daily={daily}
          onEdit={() => handleEdit(daily)}
        />
      ))}
    </div>
  )
}

export default DailiesList
