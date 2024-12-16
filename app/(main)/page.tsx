import ClientList from '@/components/entries/ClientList'
import { createClient } from '@/utils/supabase/server'
import { Goals } from '@/utils/types/types'

export default async function Home() {
  const supabase = await createClient()

  const { data: goals, error } = (await supabase
    .from<'goals', Goals>('goals')
    .select('*')
    .order('created_at', { ascending: false })) as { data: Goals[] | null }

  if (error) {
    console.log(error)
  }

  return (
    <div className='flex flex-col items-center'>
      <ClientList goals={goals ?? []} />
    </div>
  )
}
