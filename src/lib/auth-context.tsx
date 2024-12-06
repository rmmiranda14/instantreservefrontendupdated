'use client'

import React, { createContext, useContext, useState } from 'react'

interface User {
  name: string
  email: string
  avatar: string
}

interface AuthContextType {
  user: User | null
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = () => {
    setUser({
      name: 'John Doe',
      email: 'john@example.com',
      avatar: '/placeholder.svg?height=32&width=32',
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}