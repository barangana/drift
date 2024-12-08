import React from 'react'
import { createClient } from '@/utils/supabase/server'
import ClientList from '../ClientList'
import { Goals } from '@/utils/types/types'

const List = async () => {
  const supabase = await createClient()

  const { data: goals, error } = await supabase
    .from<'goals', Goals>('goals')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error)
  }

  return (
    <div className='flex flex-col items-center'>
      <ClientList goals={goals ?? []} />
    </div>
  )
}

export default List
