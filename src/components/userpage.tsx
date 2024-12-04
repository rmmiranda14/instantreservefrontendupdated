'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Bell, CreditCard, Lock, Settings, User } from 'lucide-react'

type TabName = 'account' | 'payment' | 'notifications' | 'security' | 'accessibility';

export default function Userpage() {
  const [activeTab, setActiveTab] = useState<TabName>('account')

  const tabContent: Record<TabName, React.ReactNode> = {
    account: (
      <Card>
        <CardHeader>
          <CardTitle>Account Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="display-name">User Name</Label>
            <Input id="display-name" placeholder="Enter your user name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter your address" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Preferred Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
        </CardContent>
      </Card>
    ),
    payment: (
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="Enter your card number" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry-date">Expiry Date</Label>
              <Input id="expiry-date" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="Enter CVV" />
            </div>
          </div>
          <Button className="w-full">Add Payment Method</Button>
        </CardContent>
      </Card>
    ),
    notifications: (
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch id="email-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch id="push-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications">SMS Notifications</Label>
            <Switch id="sms-notifications" />
          </div>
        </CardContent>
      </Card>
    ),
    security: (
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Update Password</Button>
          <div className="flex items-center justify-between">
            <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
            <Switch id="two-factor" />
          </div>
        </CardContent>
      </Card>
    ),
    accessibility: (
      <Card>
        <CardHeader>
          <CardTitle>Accessibility Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text-size">Text Size</Label>
            <Input id="text-size" type="range" min="12" max="24" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="color-mode">Color Mode</Label>
            <Input id="color-mode" placeholder="Select color mode" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark Mode Enabled?</Label>
            <Switch id="dark-mode" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="high-contrast">High Contrast Mode</Label>
            <Switch id="high-contrast" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="reduce-motion">Reduce Motion</Label>
            <Switch id="reduce-motion" />
          </div>
        </CardContent>
      </Card>
    ),
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="min-h-screen flex px-6 py-6">
        {/* Sidebar */}
        <div className="bg-rose-600/50 p-6 lg:w-1/5 flex flex-col ">
          <div className="flex flex-col items-center space-y-6">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>Profile Pic</AvatarFallback>
            </Avatar>
            <nav className="flex w-full flex-col space-y-2">
              <Button
                variant={activeTab === 'account' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('account' as TabName)}
              >
                <User className="mr-2 h-4 w-4" />
                Account
              </Button>
              <Button
                variant={activeTab === 'payment' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('payment' as TabName)}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Payment
              </Button>
              <Button
                variant={activeTab === 'notifications' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('notifications' as TabName)}
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button
                variant={activeTab === 'security' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('security' as TabName)}
              >
                <Lock className="mr-2 h-4 w-4" />
                Security
              </Button>
              <Button
                variant={activeTab === 'accessibility' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('accessibility' as TabName)}
              >
                <Settings className="mr-2 h-4 w-4" />
                Accessibility
              </Button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 space-y-6">
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  )
}

