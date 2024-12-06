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
  const loggedinuser = '1'
  const [error, setError] = useState<string | null>(null) // Allow both string and null

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:8000/users/users/{user_id}', {
        method: 'GET',
        body: JSON.stringify({
          loggedinuser,
        }),
      });
    if (!response.ok) {
        throw new Error('Invalid user ID');
    }

    const user = await response.json();

    const login = () => {
        setUser({
        name: user.fullname,
        email: user.email,
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
}catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
}}
export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
      