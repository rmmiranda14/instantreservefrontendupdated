'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "react-hot-toast"

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const response = await fetch('https://formspree.io/f/movqploe', { // Replace with your Formspree endpoint
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        toast.success('Message sent successfully!')
        form.reset()
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-2 mt-2">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6 border rounded-lg border-red-700">
          <div className="space-y-2 border-red-200">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              className='border-red-700'
              id="fullName"
              name="fullName"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              className='border-red-700'
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              className='border-red-700'
              id="phone"
              name="phone"
              type="tel"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              id="message"
              name="message"
              className="min-h-[150px] border-red-700 "
              required
            />
          </div>
          
          <div className="flex justify-between pt-4">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
            <Button type="reset" variant="outline" className="bg-blue-500 hover:bg-blue-600 text-white">
              Cancel
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

