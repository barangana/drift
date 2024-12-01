import LoginForm from "@/components/auth/LoginForm"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import React from "react"

const LoginPage = async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/")
  }

  return <LoginForm />
}

export default LoginPage
