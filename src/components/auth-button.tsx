import { AuthButtonClient } from './auth-button-client'
import { AuthProvider } from '@/lib/auth-context'

export function AuthButton() {
  return (
    <AuthProvider>
      <AuthButtonClient />
    </AuthProvider>
  )
}
