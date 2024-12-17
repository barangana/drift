'use client'

import { Goals } from '@/utils/types/types'
import React, { useState } from 'react'
import Card from './Card'
import EntriesForm from './EntriesForm'
import Button from '../Button'

interface ClientListProps {
  goals: Goals[]
}

const ClientList = ({ goals }: ClientListProps) => {
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
    <div>
      <div>
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
        <Card key={goal.goal_id} goal={goal} onEdit={() => handleEdit(goal)} />
      ))}
    </div>
  )
}

export default ClientList
