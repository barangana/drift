"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"

export async function login(formData: FormData) {
  const supabase = await createClient()

  // TODO: Add validation and display it on the frontend

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect("/login?message=Missing Email or Password")
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export const signout = async () => {
  const supabase = await createClient()
  supabase.auth.signOut()
}
