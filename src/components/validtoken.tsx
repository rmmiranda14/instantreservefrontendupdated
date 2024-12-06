'use client'

import { useEffect, useState } from 'react'

const validateToken = (token: string | null): boolean => {
  return !!token && token.length > 0
}

export default function validToken() {
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null)

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token')
    setIsValidToken(validateToken(accessToken))
  }, [])
  return isValidToken
}
