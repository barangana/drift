'use client'

import { Goals } from '@/utils/types/types'
import React, { useState } from 'react'
import Card from './entries/Card'
import EntriesForm from './entries/EntriesForm'

interface ClientListProps {
  goals: Goals[]
}

const ClientList: React.FC<ClientListProps> = ({ goals }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [currentGoal, setCurrentGoal] = useState<Goals | null>(null)

  const handleEdit = (goal: Goals) => {
    setIsEditing(true)
    setCurrentGoal(goal)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setCurrentGoal(null)
  }

  return (
    <div className='flex flex-col items center'>
      {isEditing ? <EntriesForm handleCancel={handleCancel} /> : ''}
      {goals.map((goal) => (
        <Card
          id={goal.goal_id}
          key={goal.goal_id}
          title={goal.goal || ''}
          description={goal.description || ''}
          onEdit={() => handleEdit(goal)}
        />
      ))}
    </div>
  )
}

export default ClientList
