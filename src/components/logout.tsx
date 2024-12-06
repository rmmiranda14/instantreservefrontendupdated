'use client'

import { useEffect } from 'react'


export default function Logout() {
  useEffect(()=>{
    localStorage.setItem('access_token', '');
    },[])
  return (
    <div></div>
  )
}