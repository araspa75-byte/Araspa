'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function authenticate(prevState: any, formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')
  const callbackUrl = formData.get('callbackUrl')?.toString() || '/appointments-view'
  
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'Araspa75@gmail.com'
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'araspa123'

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set('auth_token', 'authenticated', { 
      secure: process.env.NODE_ENV === 'production', 
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })
    redirect(callbackUrl)
  } else {
    return { error: 'Invalid email or password. Please try again.' }
  }
}
