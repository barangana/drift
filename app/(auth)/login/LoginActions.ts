"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email("Invalid email addresss").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
})

export async function login(formData: FormData) {
  const supabase = await createClient()

  // TODO: Add validation and display it on the frontend

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const validate = loginSchema.safeParse(data)

  if (!validate.success) {
    const errorMessages = validate.error.errors.map((error) => error.message)
    redirect(`/login?errors=${errorMessages}`)
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect(`/login?errors=${error}`)
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export const signout = async () => {
  const supabase = await createClient()
  supabase.auth.signOut()
}
