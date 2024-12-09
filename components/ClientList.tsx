'use client'

import { Goals } from '@/utils/types/types'
import React, { useState } from 'react'
import Card from './entries/Card'
import EntriesForm from './entries/EntriesForm'
import Button from './Button'

interface ClientListProps {
  goals: Goals[]
}

const ClientList: React.FC<ClientListProps> = ({ goals }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isCreating, setIsCreating] = useState<boolean>(false)
  const [currentGoal, setCurrentGoal] = useState<Goals | null>(null)

  const handleEdit = (goal: Goals) => {
    setIsEditing(true)
    setCurrentGoal(goal)
  }

  const handleCreate = () => {
    setIsCreating(true)
  }

  const handleCancelOrSubmit = () => {
    setIsEditing(false)
    setIsCreating(false)
    setCurrentGoal(null)
  }

  return (
    <div className='flex flex-col items center'>
      <div className='inline-flex items-start flex-col'>
        <h2 className='font-bold text-3xl my-6'>Goals</h2>
        <Button onClick={handleCreate}>Add goal</Button>
      </div>

      {isEditing ? (
        <EntriesForm
          goal={currentGoal || undefined}
          handleCancelOrSubmit={handleCancelOrSubmit}
        />
      ) : isCreating ? (
        <EntriesForm
          goal={undefined}
          handleCancelOrSubmit={handleCancelOrSubmit}
        />
      ) : (
        ''
      )}
      {goals.map((goal) => (
        <Card
          id={goal.goal_id}
          key={goal.goal_id}
          category={goal.category || ''}
          title={goal.goal || ''}
          description={goal.description || ''}
          onEdit={() => handleEdit(goal)}
        />
      ))}
    </div>
  )
}

export default ClientList
