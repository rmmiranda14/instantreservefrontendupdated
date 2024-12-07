'use client'

import { useEffect } from 'react'


export default function Logout() {
  useEffect(()=>{
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id')
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
    },[])
  return (
    <div></div>
  )
}