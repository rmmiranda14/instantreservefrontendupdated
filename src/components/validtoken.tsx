'use client'

export default function validToken() {
 if(localStorage.getItem('access_token')){
  return true
 }
 return false
}
