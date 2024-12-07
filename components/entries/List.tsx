import React from 'react'
import Card from './Card'
import { createClient } from '@/utils/supabase/server'
import { Goals } from '@/utils/types/types'

const List = async () => {
  const supabase = await createClient()

  const { data: goals, error } = await supabase.from('goals').select('*')
  console.log(goals)

  if (error) {
    console.log(error)
  }

  return (
    <div className='flex flex-col items-center'>
      <h2 className='inline-flex items-start'>Goals</h2>
      <button>Add goal</button>
      {goals?.map((goal: Goals) => (
        <Card
          id={goal.goal_id}
          key={goal.goal_id}
          category={goal.category || ''}
          title={goal.goal || ''}
          description={goal.description || ''}
        />
      ))}
    </div>
  )
}

export default List
