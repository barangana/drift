import Signup from "@/components/auth/SignupForm"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import React from "react"

const SignupPage = async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/")
  }

  return <Signup />
}

export default SignupPage
