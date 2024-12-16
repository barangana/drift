import DailiesList from '@/components/dailies/DailiesList'
import { createClient } from '@/utils/supabase/server'
import { Dailies } from '@/utils/types/types'
import React from 'react'

const DailiesPage = async () => {
  const supabase = await createClient()

  const { data } = (await supabase
    .from<'dailies', Dailies>('dailies')
    .select('*')) as { data: Dailies[] | null }

  return (
    <div className='flex flex-col items-center'>
      <DailiesList dailies={data ?? []} />
    </div>
  )
}

export default DailiesPage
