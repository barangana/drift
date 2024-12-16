'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export const addDaily = async (formData: FormData) => {
  const supabase = await createClient()

  const data = {
    daily: formData.get('daily') as string,
    description: formData.get('description') as string,
  }

  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (!userData || userError) {
    console.log(userError)
  }

  const { error: dailyError } = await supabase.from('dailies').insert([
    {
      title: data.daily,
      description: data.description,
      user_id: userData.user?.id,
    },
  ])

  if (dailyError) {
    console.log('An error occurred while adding a daily: ' + { ...dailyError })
  }

  revalidatePath('/dailies')
}
