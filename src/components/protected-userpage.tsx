'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import validToken from '@/components/validtoken'

// This function would typically make an API call to validate the token
// For this example, we'll just check if it exists and is not empty

export default function ProtectedUserPage() {
  if (!validToken()) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
          </CardHeader>
          <Link href="/login-page">
          <CardContent>
            <p className="text-center mb-4">You do not have a valid access token.</p>
            <Button className="w-full">
              Log In
            </Button>
          </CardContent>
          </Link>
        </Card>
      </div>
    )
  }
  if(validToken()){

  }
  return null;
}

