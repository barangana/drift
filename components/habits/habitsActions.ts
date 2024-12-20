'use server'

import { createClient } from '@/utils/supabase/server'
import { Habits } from '@/utils/types/types'
import { revalidatePath } from 'next/cache'

export const addHabits = async (formData: FormData) => {
  const supabase = await createClient()

  const data = {
    habit: formData.get('habit') as string,
    description: formData.get('description') as string,
  }

  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (!userData || userError) {
    console.log('Error while fetching user occurred: ' + userError)
  }

  const { error: habitError } = await supabase.from('habits').insert([
    {
      habits: data.habit,
      description: data.description,
      user_id: userData.user?.id,
      streak: 0,
      days_checkedin: 0,
    },
  ])

  if (habitError) {
    console.log('An error occurred while adding a habit: ' + { ...habitError })
  }

  revalidatePath('/habits')
}

export const deleteHabit = async (habitId: string) => {
  const supabase = await createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (!userData || userError) {
    console.log('Error while fetching user occurred: ' + userError)
  }

  const { error } = await supabase.from('habits').delete().match({
    user_id: userData.user?.id,
    habits_id: habitId,
  })

  if (error) {
    console.log('Error while trying to delete a habit: ', { ...error })
  }

  revalidatePath('/habits')
}

export const updateHabit = async (formData: FormData, habitId: string) => {
  const supabase = await createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (!userData || userError) {
    console.log('Error while fetching user occurred' + userError)
  }

  const data = {
    habits: formData.get('habits') as string,
    description: formData.get('description') as string,
  }

  const { error } = await supabase
    .from('habits')
    .update({ habits: data, description: data.description })
    .eq('habits_id', habitId)
    .eq('user_id', userData.user?.id)

  if (error) {
    console.log('Error occurred while trying to update a habit: ' + error)
  }

  revalidatePath('/habits')
}

export const updateCheckIn = async (habitId: string) => {
  const supabase = await createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (!userData || userError) {
    console.log('Error occured while trying to fetch user: ' + userError)
  }

  // When a user clicks the button on the front end, it should increment this value by one.
  const { data: habitData, error: habitError } = await supabase
    .from('habits')
    .select('days_checkedin', 'last_checkedin')
    .eq('user_id', userData.user?.id)
    .eq('habits_id', habitId)
    .single()

  if (!habitData || habitError) {
    console.log('Error occurred while fetching habit data: ' + habitError)
  }

  const { days_checkedin, last_checkedin } = habitData

  // We check today's date and we compare it to last_checkedin
  const today = new Date().toISOString().split('T')[0]
  const lastCheckedIn = last_checkedin
    ? new Date(last_checkedin).toDateString().split('T')[0]
    : null

  if (lastCheckedIn === today) {
    console.log('User already checked in today')
    return
  }

  const { error } = await supabase
    .from('habits')
    .update({
      days_checkedin: days_checkedin + 1,
      lastCheckedIn: new Date().toISOString(),
    })
    .eq('user_id', userData.user?.id)
    .eq('habits_id', habitId)

  if (error) {
    console.log('There was an error updating the checkin value: ' + error)
  }

  revalidatePath('/habits')
}

// export const updateStreak = async (habitId: string) => {
//   const supabase = await createClient()

//   const { data: userData, error: userError } = await supabase.auth.getUser()
//   if (!userData || userError) {
//     console.log('Error occurred while trying to fetch user: ' + userError)
//   }
// }
