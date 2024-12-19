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

export const deleteDaily = async (dailyId: string) => {
  const supabase = await createClient()
  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (!userData || userError) {
    console.log('User is not logged in ' + userError)
  }

  const { error } = await supabase.from('dailies').delete().match({
    user_id: userData.user?.id,
    daily_id: dailyId,
  })

  if (error) {
    console.log('Error while trying to delete daily: ', { ...error })
  }

  revalidatePath('/')
}

export const updateDaily = async (formData: FormData, dailyId: string) => {
  const supabase = await createClient()

  const data = {
    daily: formData.get('daily') as string,
    description: formData.get('description') as string,
  }

  console.log(data)

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (!user || error) {
    console.log('User is not logged in: ' + error)
  }

  const { error: updateError } = await supabase
    .from('dailies')
    .update({ title: data.daily, description: data.description })
    .eq('daily_id', dailyId)
    .eq('user_id', user?.id)

  if (updateError) {
    console.log(
      'Error occurred while trying to update record: ' +
        JSON.stringify(updateError)
    )
  }

  revalidatePath('/')
}
