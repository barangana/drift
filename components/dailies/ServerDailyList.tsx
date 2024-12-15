'use server'

import { Dailies } from '@/utils/types/types'
import React from 'react'
import DailiesList from './DailiesList'
import { createClient } from '@/utils/supabase/server'

const ServerDailyList = async () => {
  const supabase = await createClient()

  const { data } = (await supabase
    .from<'dailies', Dailies>('dailies')
    .select('*')) as { data: Dailies[] | null }

  return <DailiesList dailies={data ?? []} />
}

export default ServerDailyList
