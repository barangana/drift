import { createClient } from "@/utils/supabase/server"
import React from "react"

interface CardProps {
  title: string
  description: string
  input?: string[]
}

// TODO: Cards still need to be worked on but they serve as a way to display data pulled from the DB for now.
// TODO: Add tags
// TODO: Add colorizing to categorize whether they did good, medium or meh
// TODO: Add button to delete, edit and textarea to edit?

const Card: React.FC<CardProps> = async ({ title, description }) => {
  const supabase = await createClient()

  const { data: goals, error } = await supabase.from("goals").select("*")
  console.log(goals)

  return (
    <div className='block max-w-xl px-4 pb-4 my-4 bg-white border border-gray-200 rounded-lg'>
      <div className='text-black py-2 font-bold'>{title}</div>
      <div className='text-black'>{description}</div>
    </div>
  )
}

export default Card
