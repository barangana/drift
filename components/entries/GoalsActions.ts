'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export const addGoal = async (formData: FormData) => {
  const supabase = await createClient()

  const data = {
    goal: formData.get('goal') as string,
    category: formData.get('category') as string,
    description: formData.get('description') as string,
  }

  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (!userData || userError) {
    console.log(userError)
  }

  const { error: goalsError } = await supabase.from('goals').insert([
    {
      goal: data.goal,
      category: data.category,
      description: data.description,
      status: 'in progress',
      user_id: userData.user?.id,
    },
  ])

  if (goalsError) {
    console.log('An error occurred while adding goals: ' + goalsError)
  }

  revalidatePath('/')
}

export const deleteGoal = async (goalId: string) => {
  const supabase = await createClient()
  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (!userData || userError) {
    console.log('User is not logged in ' + userError)
  }

  const { error } = await supabase.from('goals').delete().match({
    user_id: userData.user?.id,
    goal_id: goalId,
  })

  if (error) {
    console.log('Error while trying to delete goal: ', { ...error })
  }

  revalidatePath('/')
}
