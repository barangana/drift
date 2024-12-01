"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const signupSchema = z.object({
  email: z.string().email("Invalid email addresss").min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*., ?])/,
      "Password must contain at least one special character and a upper case letter"
    ),
})

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const validate = signupSchema.safeParse(data)

  if (!validate.success) {
    const errorMessages = validate.error.errors.map((error) => error.message)
    redirect(`/signup?errors=${errorMessages}`)
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect(`/signup?errors=${error}`)
  }

  revalidatePath("/login", "layout")
  redirect("/login")
}
